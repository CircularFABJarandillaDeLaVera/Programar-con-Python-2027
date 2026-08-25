# B4 Preguntas y respuestas esperadas

## Clase y objeto

**Pregunta:** Si `Producto` es la clase, que es `Producto("Teclado", 29.90)`?

**Respuesta esperada:** Un objeto o instancia concreta de la clase.

## self

**Pregunta:** Por que un metodo necesita `self`?

**Respuesta esperada:** Para acceder a los datos del objeto que esta ejecutando el metodo.

## __init__

**Pregunta:** Cuando se ejecuta `__init__`?

**Respuesta esperada:** Al crear una nueva instancia.

## Encapsulacion

**Pregunta:** Por que no conviene cambiar el precio directamente desde cualquier lugar?

**Respuesta esperada:** Porque puede saltarse validaciones y dejar el objeto en un estado incorrecto.

## Composicion

**Pregunta:** Si un producto tiene una auditoria, que relacion es?

**Respuesta esperada:** Composicion: el producto tiene otro objeto asociado.

## Herencia

**Pregunta:** Si `ProductoHardware` es un tipo de `Producto`, que relacion es?

**Respuesta esperada:** Herencia: ProductoHardware es un Producto especializado.

## super()

**Pregunta:** Para que usamos `super()`?

**Respuesta esperada:** Para reutilizar la inicializacion o comportamiento de la clase padre.

## Polimorfismo

**Pregunta:** Por que puedo llamar a `resumen()` sobre productos distintos?

**Respuesta esperada:** Porque comparten el mismo metodo aunque cada clase pueda resolverlo a su manera.

