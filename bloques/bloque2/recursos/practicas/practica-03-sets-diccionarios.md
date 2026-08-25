# Practica 03 - Sets, diccionarios y .get()

## Objetivo

Deduplicar con `set` y contar apariciones con diccionarios.

## Codigo

```python
palabras = ["python", "datos", "python", "codigo"]
unicas = set(palabras)

conteo = {}
for palabra in palabras:
    conteo[palabra] = conteo.get(palabra, 0) + 1

print(unicas)
print(conteo)
```

## Predice

Cuantas palabras unicas hay? Que contador tendra `"python"`?

## Modifica

Añade palabras repetidas y vuelve a predecir.

## Mini-reto

Une dos listas de asistentes, elimina duplicados y cuenta apariciones.

## Feedback

`set` responde a unicidad. `dict` responde a clave-valor y frecuencia.
