# Practica 03 - Docstrings y excepciones

## Objetivo
Documentar funciones y capturar errores previsibles sin detener el programa.

## Flujo
1. Escribe una funcion con docstring.
2. Imprime `.__doc__`.
3. Provoca `ValueError`.
4. Captura el error con `except ValueError`.
5. Repite con dato valido.
6. Anade `else` y `finally` si ayuda a leer el flujo.

## Codigo base
```python
def convertir_precio(texto):
    """Convierte texto a numero decimal."""
    return float(texto)

try:
    precio = convertir_precio("abc")
except ValueError:
    print("Precio no valido")
```

## Error util
Cambia `"abc"` por `"12.5"` y observa que ya no entra en `except`.

## Mini-reto
Pide una edad por teclado, conviertela a entero y captura entradas no validas.
