# Practica 03 - Encapsulacion con validacion

## Objetivo
Evitar cambios de estado invalidos usando metodos de acceso claros.

## Matiz importante
`__precio_base` no es privacidad absoluta. En Python ayuda a evitar accesos accidentales directos mediante name mangling. La proteccion real esta en disenar una interfaz clara y validar los cambios.

## Codigo base
```python
class Producto:
    def __init__(self, nombre, precio_base):
        self.nombre = nombre
        self.set_precio(precio_base)

    def set_precio(self, precio):
        if precio <= 0:
            raise ValueError("Precio no valido")
        self.__precio_base = precio

    def get_precio(self):
        return self.__precio_base

producto = Producto("Cable", 10)
producto.set_precio(12)
print(producto.get_precio())
```

## Error util
Ejecuta `producto.set_precio(-5)` y lee la excepcion.

## Mini-reto
Crea una clase `Calificacion` que solo acepte notas entre 0 y 10.
