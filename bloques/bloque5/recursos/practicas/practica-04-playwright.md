# Practica 04 - Playwright sincronico

## Necesidad

Automatizar una carga web minima y cerrar recursos.

## Codigo

```python
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto("https://playwright.dev/")
    print(page.title())
    browser.close()
```

## Predecir

Se vera una ventana si `headless=True`?

## Modificar

Cambia la URL por una pagina de prueba indicada por el profesor.

## Error util

No olvidar `browser.close()`.

## Mini-reto

Extrae el titulo de una pagina y confirma que el script termina limpiamente.

