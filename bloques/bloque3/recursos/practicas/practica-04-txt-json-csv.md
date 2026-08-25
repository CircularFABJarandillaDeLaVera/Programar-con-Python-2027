# Practica 04 - TXT, JSON y CSV

## Objetivo
Guardar y recuperar datos con `with open()`.

## Flujo
1. Escribe un archivo TXT.
2. Lee su contenido.
3. Guarda un diccionario en JSON.
4. Recupera el JSON y comprueba su tipo.
5. Escribe una tabla CSV.
6. Abre los archivos en un editor externo.

## Codigo base
```python
import json
import csv

config = {"umbral_alerta": 100.0, "iva_aplicado": 0.21}

with open("config.json", "w", encoding="utf-8") as archivo:
    json.dump(config, archivo, indent=2)

with open("notas.csv", "w", newline="", encoding="utf-8") as archivo:
    escritor = csv.writer(archivo)
    escritor.writerow(["nombre", "nota"])
    escritor.writerow(["Ana", 9])
```

## Error util
Abre un JSON en modo `"a"` y razona por que puede romper el formato.

## Mini-reto
Crea `preferencias.json` si no existe y devuelve su contenido como diccionario.
