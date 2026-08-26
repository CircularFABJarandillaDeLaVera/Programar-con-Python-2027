# Proyecto B5 - SAMI-Applied

## Evolucion

SAMI-Lite -> SAMI-OOP -> SAMI-Applied

## Objetivo

Analizar precios y disponibilidad de componentes de hardware.

## Estructura

- `datos_hardware.csv`
- `scraper.py`
- `analizador.py`
- `generador_informe.py`
- `main.py`

## Reglas

- `got_1.csv` no entra en SAMI-Applied.
- NumPy se usa para calculos numericos.
- Pandas se usa para cargar y filtrar tablas.
- Playwright se usa solo si hay necesidad de navegador.
- BeautifulSoup queda como decision conceptual para HTML estatico.
- ReportLab genera el PDF real del informe mediante Platypus.
- Canvas queda como ampliacion no evaluable.

## Evidencia esperada

- Tabla analizada de hardware.
- Precio medio.
- Componentes disponibles.
- Alertas de stock.
- `reporte_final_sami.pdf` generado con `SimpleDocTemplate`, `Paragraph`, `Image`, `Table`, `TableStyle`, `Spacer`, `colors`, `A4` y `build()`.

## Flujo del informe PDF

DATOS -> CALCULOS -> ESTRUCTURA -> REPORTLAB -> PDF

El generador no convierte SAMI-Applied en un proyecto de facturacion. Su tarea es presentar el analisis de mercado en un documento profesional: logo, resumen de indicadores, tabla de componentes disponibles y conclusion ejecutiva.
