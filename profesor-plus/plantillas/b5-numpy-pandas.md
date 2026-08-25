# B5 NumPy y Pandas

## NumPy

Demostracion:

```python
import numpy as np

precios = np.array([79.9, 120.0, 64.5])
print(precios * 1.21)
```

Preguntas:

- Que cambia respecto a una lista normal?
- Que significa `np.nan`?
- Por que un valor ausente no es cero?

## Pandas

Demostracion:

```python
import pandas as pd

df = pd.read_csv("got_1.csv")
df = df.set_index("Personaje")
print(df.loc["Sansa Stark"])
print(df.iloc[0])
```

## Filtros

```python
filtro = (df["Casa"].isin(["Stark", "Lannister"])) & (df["Estado"] == "Vivo")
print(df[filtro])
```

Error habitual:

```python
df["Casa"] == "Stark" and df["Estado"] == "Vivo"
```

Feedback: en Pandas se trabaja con Series completas, por eso se usan operadores vectorizados.

