# Practica 01 - NumPy y precios

## Necesidad

Procesar varios precios de hardware a la vez.

## Codigo

```python
import numpy as np

precios = np.array([79.9, 120.0, 64.5, 189.0])
precios_finales = precios * 1.21

print(precios_finales)
print(precios_finales.mean())
```

## Predecir

Antes de ejecutar, indica cuantos valores tendra `precios_finales`.

## Modificar

Cambia el impuesto a `1.10` y anade un precio nuevo.

## Error util

No intentes operar con textos como `"79.9 EUR"` antes de convertirlos a numero.

## Mini-reto

Calcula el precio medio de componentes disponibles y escribe una conclusion breve.

