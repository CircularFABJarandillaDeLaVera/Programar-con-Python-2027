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
- ReportLab queda como diseno conceptual de informe.

## Evidencia esperada

- Tabla analizada de hardware.
- Precio medio.
- Componentes disponibles.
- Alertas de stock.
- Esquema de informe para entregar resultados.

