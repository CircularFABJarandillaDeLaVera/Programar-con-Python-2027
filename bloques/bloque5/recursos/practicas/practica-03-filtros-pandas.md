# Practica 03 - loc, iloc, isin y filtros

## Codigo

```python
import pandas as pd

df = pd.read_csv("got_1.csv")
df = df.set_index("Personaje")

print(df.loc["Sansa Stark"])
print(df.iloc[0])

filtro = (df["Casa"].isin(["Stark", "Lannister"])) & (df["Estado"] == "Vivo")
print(df[filtro])
```

## Predecir

Que diferencia hay entre `loc` e `iloc`?

## Error util

Este filtro falla:

```python
df["Casa"] == "Stark" and df["Estado"] == "Vivo"
```

En Pandas usa `&` y parentesis.

## Mini-reto

Filtra personajes vivos con popularidad mayor que `0.85`.

