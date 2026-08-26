from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import Image, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


IVA = 0.21


def calcular_importes(conceptos):
    lineas = []
    base_imponible = 0.0

    for concepto in conceptos:
        subtotal = concepto["cantidad"] * concepto["precio"]
        base_imponible += subtotal
        lineas.append({**concepto, "subtotal": subtotal})

    iva = base_imponible * IVA
    total = base_imponible + iva

    return {
        "lineas": lineas,
        "base_imponible": round(base_imponible, 2),
        "iva": round(iva, 2),
        "total": round(total, 2),
    }


def formato_eur(valor):
    return f"{valor:.2f} EUR"


def crear_factura_pdf(ruta_pdf):
    raiz_proyecto = Path(__file__).resolve().parents[4]
    ruta_logo = raiz_proyecto / "assets" / "branding" / "logo-circular-fab.png"

    empresa = {
        "nombre": "Circular FAB",
        "direccion": "Av. del Futuro 2027, Madrid",
        "nif": "B-12345678",
    }
    cliente = {
        "nombre": "Estudios Avanzados S.A.",
        "direccion": "Paseo de la Castellana 50, Madrid",
    }
    conceptos = [
        {"descripcion": "Suscripcion Premium Plataforma", "cantidad": 2, "precio": 45.0},
        {"descripcion": "Soporte Tecnico Especializado", "cantidad": 1, "precio": 90.0},
        {"descripcion": "Licencia Adicional Desarrollo", "cantidad": 5, "precio": 20.0},
    ]

    importes = calcular_importes(conceptos)

    doc = SimpleDocTemplate(
        str(ruta_pdf),
        pagesize=A4,
        rightMargin=36,
        leftMargin=36,
        topMargin=32,
        bottomMargin=32,
    )
    styles = getSampleStyleSheet()
    story = []

    if ruta_logo.exists():
        story.append(Image(str(ruta_logo), width=120, height=42))
        story.append(Spacer(1, 12))

    story.append(Paragraph("FACTURA COMERCIAL", styles["Heading1"]))
    story.append(Paragraph("Numero: FACT-2027-001", styles["Normal"]))
    story.append(Paragraph("Fecha: 26/08/2026", styles["Normal"]))
    story.append(Spacer(1, 12))

    story.append(Paragraph(f"<b>Empresa:</b> {empresa['nombre']}", styles["Normal"]))
    story.append(Paragraph(f"Direccion: {empresa['direccion']}", styles["Normal"]))
    story.append(Paragraph(f"NIF: {empresa['nif']}", styles["Normal"]))
    story.append(Spacer(1, 10))

    story.append(Paragraph(f"<b>Cliente:</b> {cliente['nombre']}", styles["Normal"]))
    story.append(Paragraph(f"Direccion: {cliente['direccion']}", styles["Normal"]))
    story.append(Spacer(1, 16))

    tabla = [["Descripcion", "Cant.", "Precio", "Subtotal"]]
    for linea in importes["lineas"]:
        tabla.append([
            Paragraph(linea["descripcion"], styles["BodyText"]),
            str(linea["cantidad"]),
            formato_eur(linea["precio"]),
            formato_eur(linea["subtotal"]),
        ])

    tabla.extend([
        ["", "", "Base imponible", formato_eur(importes["base_imponible"])],
        ["", "", "IVA 21%", formato_eur(importes["iva"])],
        ["", "", "Total", formato_eur(importes["total"])],
    ])

    tabla_factura = Table(tabla, colWidths=[250, 55, 95, 95])
    tabla_factura.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.lightgrey),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.black),
        ("GRID", (0, 0), (-1, -1), 0.5, colors.grey),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("ALIGN", (1, 1), (-1, -1), "RIGHT"),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("BACKGROUND", (2, -1), (-1, -1), colors.whitesmoke),
        ("FONTNAME", (2, -1), (-1, -1), "Helvetica-Bold"),
    ]))
    story.append(tabla_factura)

    doc.build(story)
    return importes


if __name__ == "__main__":
    salida = Path(__file__).resolve().parent / "factura_2027_001.pdf"
    datos_calculados = crear_factura_pdf(salida)
    print(f"PDF generado: {salida.name}")
    print(f"Base imponible: {formato_eur(datos_calculados['base_imponible'])}")
    print(f"IVA: {formato_eur(datos_calculados['iva'])}")
    print(f"Total: {formato_eur(datos_calculados['total'])}")
