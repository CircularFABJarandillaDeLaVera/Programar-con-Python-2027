# B5 Web e informes

## Playwright

Usar solo el flujo sincronico respaldado:

```python
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto("https://playwright.dev/")
    print(page.title())
    browser.close()
```

Pregunta clave: donde se liberan los recursos?

## BeautifulSoup

Tratamiento conceptual: parsing de HTML estatico cuando no hace falta controlar navegador.

No convertir en tutorial de metodos no trazados.

## ReportLab

Tratamiento conceptual: diseno del informe final.

Secciones recomendadas:

1. Resumen.
2. Tabla de precios.
3. Alertas.
4. Conclusion.

No desarrollar APIs detalladas si no estan respaldadas.

