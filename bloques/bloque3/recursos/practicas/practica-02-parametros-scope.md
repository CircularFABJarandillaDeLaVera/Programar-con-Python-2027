# Practica 02 - Parametros, valores por defecto y scope

## Objetivo
Controlar entradas de una funcion y diferenciar variables locales y exteriores.

## Flujo
1. Crea `formatear_precio(monto, moneda="EUR", decimales=2)`.
2. Ejecuta una llamada corta.
3. Cambia solo `decimales`.
4. Cambia `moneda`.
5. Observa una variable local frente a una exterior.
6. Usa `global` solo en un contador controlado.

## Codigo base
```python
def formatear_precio(monto, moneda="EUR", decimales=2):
    return str(round(monto, decimales)) + " " + moneda

print(formatear_precio(12.3456))
print(formatear_precio(12.3456, decimales=1))
```

## Error util
Prueba una firma con un parametro obligatorio despues de uno opcional y lee el error.

## Mini-reto
Implementa `registrar_visita()` con `global visitas` y un limite de 5.
