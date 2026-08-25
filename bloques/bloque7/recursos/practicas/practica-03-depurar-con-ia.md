# Practica 03 - Depurar con IA

## Error controlado

```python
precio = float("abc")
print(precio)
```

## Contexto minimo

```text
Tengo este error:
ValueError: could not convert string to float: 'abc'

Codigo:
precio = float("abc")

Explicame la causa y propone una correccion pequena.
```

## Validar

La correccion debe ejecutarse con:

- dato valido;
- dato invalido;
- mensaje comprensible.

