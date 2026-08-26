# Automatizacion - Ordena una carpeta automaticamente

## VER

Vas a organizar archivos falsos dentro de una carpeta segura del Lab.

Resultado: `lab_archivos_prueba` queda clasificada en `PDFs`, `Imagenes`, `Codigo`, `Textos` y `Otros`.

## PROBAR

No hay instalacion. Usa Python estandar.

Ejecuta:

```bash
python ../scripts/organizar_carpeta_segura.py
```

El script trabaja exclusivamente sobre:

```text
lab-python-en-accion/recursos/lab_archivos_prueba/
```

## MODIFICAR

Anade otra extension al diccionario de destinos, por ejemplo `.csv`.

## MINI-RETO

Antes de mover cada archivo, imprime `origen -> destino`.

## Plan B

Si hay dudas, deja el script en modo simulacion cambiando `MOVER_ARCHIVOS = True` por `False`.

## Que no entra

No se usan `Downloads`, `Documentos`, `Escritorio`, rutas libres del alumno ni carpetas reales externas.
