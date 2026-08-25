# Proyecto B3 - SAMI-Lite

## Objetivo
Construir un programa modular de consola con funciones, validacion, excepciones y persistencia local.

## Estructura
```text
sami_lite/
  persistencia.py
  analizador.py
  main.py
```

## Responsabilidades
- `persistencia.py`: cargar configuracion JSON, registrar transacciones CSV y escribir errores TXT.
- `analizador.py`: validar precios, calcular precio final y evaluar alertas.
- `main.py`: pedir datos, coordinar imports y mantener el flujo de consola.

## Evidencias
- `config.json` creado o cargado.
- `transacciones_auditoras.csv` con filas nuevas.
- `auditoria_errores.log` si aparece un error controlado.
- Captura de una ejecucion correcta y una ejecucion con entrada no numerica.

## Flujo de depuracion
EJECUTAR -> OBSERVAR ERROR/EXCEPCION -> INTERPRETAR -> CORREGIR -> VOLVER A EJECUTAR

## Archivos base
Los tres archivos estan en esta carpeta como punto de partida.
