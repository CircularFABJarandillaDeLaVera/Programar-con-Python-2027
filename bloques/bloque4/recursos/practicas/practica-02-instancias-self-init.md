# Practica 02 - Instancias, self y __init__

## Objetivo
Crear objetos con estado propio y metodos que usan `self`.

## Flujo
1. Declara `class Producto`.
2. Anade `__init__(self, nombre, precio_base)`.
3. Crea dos productos distintos.
4. Cambia solo uno.
5. Ejecuta un metodo de instancia.
6. Provoca el error de olvidar `self`.

## Codigo base
```python
class Producto:
    def __init__(self, nombre, precio_base):
        self.nombre = nombre
        self.precio_base = precio_base

    def mostrar(self):
        print(self.nombre, self.precio_base)

teclado = Producto("Teclado", 50)
raton = Producto("Raton", 20)
teclado.mostrar()
raton.mostrar()
```

## Mini-reto
Crea una clase `Estudiante` con `nombre`, `nota` y un metodo `ha_aprobado(self)`.
