def extraer_titulo_pagina(url):
    from playwright.sync_api import sync_playwright

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto(url)
        titulo = page.title()
        browser.close()
        return titulo


def cargar_ofertas_mock():
    return [
        {"id": "CPU-01", "componente": "Ryzen 5", "categoria": "procesador", "precio": 189.00, "stock": 7, "activo": "si"},
        {"id": "RAM-02", "componente": "Kit RAM 32GB", "categoria": "memoria", "precio": 64.00, "stock": 0, "activo": "si"},
        {"id": "SSD-03", "componente": "SSD NVMe 1TB", "categoria": "almacenamiento", "precio": 78.50, "stock": 12, "activo": "si"},
    ]
