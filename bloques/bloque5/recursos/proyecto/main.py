from analizador import analizar_hardware
from generador_informe import guardar_informe_markdown


def ejecutar():
    tabla, indicadores = analizar_hardware("datos_hardware.csv")
    print("SAMI-Applied")
    print(f"Ofertas validas: {indicadores['ofertas_validas']}")
    print(f"Precio medio: {indicadores['precio_medio']}")
    print(f"Stock total: {indicadores['stock_total']}")

    ruta = guardar_informe_markdown("informe_sami_applied.md", tabla, indicadores)
    print(f"Informe conceptual generado: {ruta}")


ejecutar()
