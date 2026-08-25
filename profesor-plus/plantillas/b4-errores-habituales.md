# B4 Errores habituales - POO

## Clase y objeto

- Confundir `Producto` con `Producto("Teclado", 29.90)`.
- Decir que la clase "guarda" un producto concreto.
- Solucion: pedir un ejemplo de plano y objeto construido.

## self

- Olvidar `self` como primer parametro del metodo.
- Escribir `precio` en vez de `self.precio`.
- Solucion: leer el metodo en voz alta como "este objeto usa su precio".

## __init__

- Escribir `_init_` o `_ _init_ _`.
- Llamar manualmente a `__init__` despues de crear el objeto.
- Solucion: crear dos instancias y comprobar que se inicializan al nacer.

## Encapsulacion

- Creer que `_atributo` o `__atributo` hacen imposible acceder al dato.
- Solucion: explicar que la encapsulacion es una convencion y una forma de proteger reglas.

## Composicion e herencia

- Usar herencia cuando basta con "tiene un".
- Olvidar `super()` en una subclase.
- Repetir atributos del padre en el hijo.
- Solucion: preguntar si la relacion es "es un" o "tiene un".

## Sobrescritura y polimorfismo

- Cambiar la firma de un metodo sobrescrito y romper llamadas comunes.
- Pensar que polimorfismo es una palabra teorica sin uso.
- Solucion: recorrer una lista de productos distintos y llamar al mismo metodo.

