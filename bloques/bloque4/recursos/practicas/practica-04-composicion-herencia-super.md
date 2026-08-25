# Practica 04 - Composicion, herencia y super()

## Objetivo
Elegir bien entre "tiene un" y "es un".

## Parte A - Composicion
```python
class AuditoriaMercado:
    def __init__(self):
        self.productos = []

    def agregar_producto(self, producto):
        self.productos.append(producto)
```

`AuditoriaMercado` tiene productos.

## Parte B - Herencia
```python
class Producto:
    def __init__(self, nombre, precio_base):
        self.nombre = nombre
        self.precio_base = precio_base


class ProductoHardware(Producto):
    def __init__(self, nombre, precio_base, peso_kg):
        super().__init__(nombre, precio_base)
        self.peso_kg = peso_kg
```

`ProductoHardware` es un producto.

## Error util
Quita `super().__init__(...)` y observa que atributos quedan sin inicializar.

## Mini-reto
Crea `ProductoLicencia` con `clave_activacion`.
