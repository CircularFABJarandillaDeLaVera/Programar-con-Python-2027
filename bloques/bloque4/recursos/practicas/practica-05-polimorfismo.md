# Practica 05 - Sobrescritura y polimorfismo

## Objetivo
Usar el mismo metodo en objetos distintos con comportamiento especializado.

## Codigo base
```python
class Producto:
    def __init__(self, nombre, precio_base):
        self.nombre = nombre
        self.precio_base = precio_base

    def calcular_precio_final(self, tasa_iva):
        return self.precio_base * (1 + tasa_iva)


class ProductoLicencia(Producto):
    def calcular_precio_final(self, tasa_iva):
        return self.precio_base * 0.95


class ProductoHardware(Producto):
    def __init__(self, nombre, precio_base, peso_kg):
        super().__init__(nombre, precio_base)
        self.peso_kg = peso_kg

    def calcular_precio_final(self, tasa_iva):
        return self.precio_base * (1 + tasa_iva) + self.peso_kg * 2


productos = [
    ProductoLicencia("Suite", 140),
    ProductoHardware("Teclado", 80, 1.2),
]

for producto in productos:
    print(producto.nombre, producto.calcular_precio_final(0.21))
```

## Mini-reto
Anade otro producto y suma el total final.
