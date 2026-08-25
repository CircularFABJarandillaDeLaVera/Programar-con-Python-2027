# Practica 01 - De diccionario a clase

## Objetivo
Entender por que aparece la POO antes de memorizar sintaxis.

## Flujo
1. Representa un producto con diccionario.
2. Cambia el precio a un valor negativo.
3. Crea una funcion externa de calculo.
4. Predice que problema queda sin controlar.
5. Convierte el producto en clase.

## Codigo inicial
```python
producto = {"nombre": "Licencia", "precio_base": 80.0}
producto["precio_base"] = -500.0
print(producto)
```

## Mini-reto
Escribe `class Producto:` y crea una instancia `licencia = Producto()`.
