# Practica 01 - def, llamadas y return

## Objetivo
Convertir calculos repetidos en funciones reutilizables.

## Flujo
1. Escribe una funcion `calcular_iva(precio)`.
2. Predice el valor de `calcular_iva(100)`.
3. Ejecuta.
4. Modifica el precio.
5. Crea `calcular_descuento(precio)`.
6. Comprueba que puedes guardar cada retorno en una variable.

## Codigo base
```python
def calcular_iva(precio):
    return precio * 0.21

iva = calcular_iva(100)
print(iva)
```

## Error util
Quita `return` y observa que la variable recibe `None`.

## Mini-reto
Crea una funcion `precio_con_iva(precio)` que devuelva el precio final.
