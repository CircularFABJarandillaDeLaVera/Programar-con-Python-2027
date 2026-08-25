# Proyecto B2 - Clasificador Unico e Indexador de Palabras Clave

## Objetivo

Construir un programa secuencial que reciba texto, extraiga palabras, elimine duplicados y cree un indice de frecuencias.

## Requisitos

- Convertir el texto a minusculas.
- Separar palabras.
- Conservar la lista completa de palabras.
- Crear un conjunto de palabras unicas.
- Crear un diccionario de frecuencias con `.get()`.
- Justificar por que se usa cada estructura.

## Codigo base

```python
texto = "datos python datos codigo python"
palabras = texto.lower().split()
unicas = set(palabras)

indice = {}
for palabra in palabras:
    indice[palabra] = indice.get(palabra, 0) + 1

print("Palabras:", palabras)
print("Unicas:", unicas)
print("Indice:", indice)
```

## Entrega

1. Texto usado.
2. Lista de palabras.
3. Conjunto de palabras unicas.
4. Diccionario de frecuencias.
5. Justificacion de estructuras.

## Comprobacion

El programa debe permitir consultar cuantas veces aparece cada palabra clave.
