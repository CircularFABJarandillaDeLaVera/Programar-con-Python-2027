# Practica 04 - Refactorizacion controlada

## Regla

Refactorizar no significa cambiar la salida esperada.

## Antes

```python
def resumen(precios):
    total = sum(precios)
    media = total / len(precios)
    return total, media
```

## Peticion a IA

```text
Divide esta funcion en dos funciones pequenas. Conserva la misma salida. No anadas dependencias.
```

## Validar

Antes y despues deben devolver lo mismo para:

```python
[10, 20, 30]
```

