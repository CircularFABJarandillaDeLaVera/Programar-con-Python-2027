def crear_esquema_informe(tabla, indicadores):
    lineas = [
        "# Informe SAMI-Applied",
        "",
        "## Resumen",
        f"Ofertas validas: {indicadores['ofertas_validas']}",
        f"Precio medio: {indicadores['precio_medio']}",
        f"Stock total: {indicadores['stock_total']}",
        "",
        "## Tabla analizada",
        tabla.to_string(),
        "",
        "## Diseno PDF conceptual",
        "El PDF final deberia incluir resumen, tabla de ofertas, alertas y conclusion.",
        "ReportLab se mantiene aqui como diseno conceptual porque la sintaxis detallada no esta trazada.",
    ]
    return "\n".join(lineas)


def guardar_informe_markdown(ruta_salida, tabla, indicadores):
    contenido = crear_esquema_informe(tabla, indicadores)
    with open(ruta_salida, "w", encoding="utf-8") as archivo:
        archivo.write(contenido)
    return ruta_salida
