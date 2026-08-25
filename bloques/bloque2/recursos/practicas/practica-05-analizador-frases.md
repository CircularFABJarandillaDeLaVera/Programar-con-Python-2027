# Practica 05 - Analizador de Frases Profesional

## Objetivo

Limpiar una frase, separar palabras, deduplicar y contar frecuencias.

## Codigo

```python
frase = "Python datos python codigo datos"
palabras = frase.lower().split()
unicas = set(palabras)

frecuencias = {}
for palabra in palabras:
    frecuencias[palabra] = frecuencias.get(palabra, 0) + 1

print("Total:", len(palabras))
print("Unicas:", unicas)
print("Frecuencias:", frecuencias)
```

## Predice

Cuantas palabras totales hay? Cuantas unicas?

## Modifica

Usa una frase real con palabras repetidas.

## Mini-reto

Muestra que palabra aparece mas veces revisando el diccionario.

## Feedback

La evidencia minima es: total, palabras unicas y frecuencias por palabra.
