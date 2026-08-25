# Practica 04 - Comprehensions

## Objetivo

Crear colecciones nuevas filtrando o transformando datos.

## Codigo

```python
numeros = [1, 2, 3, 4, 5, 6]
pares = [n for n in numeros if n % 2 == 0]
cuadrados = [n * n for n in pares]

print(pares)
print(cuadrados)
```

## Predice

Que contiene `pares`? Que contiene `cuadrados`?

## Modifica

Haz una lista con palabras de mas de 5 letras.

## Mini-reto

Desde una frase, crea una lista con palabras largas en minusculas.

## Feedback

Una comprehension debe poder leerse. Si se vuelve confusa, divide el trabajo en pasos.
