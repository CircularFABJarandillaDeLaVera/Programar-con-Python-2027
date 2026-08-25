# Proyecto B7 - SAMI Final

## Evolucion

SAMI-Lite -> SAMI-OOP -> SAMI-Applied -> SAMI-Local -> SAMI Final

## Objetivo

Cerrar el proyecto con programacion asistida por IA critica, controlada y verificable, partiendo de SAMI-Local.

El alumno debe demostrar que gobierna el codigo: planifica, pide ayuda acotada, inspecciona, ejecuta, depura, modifica y valida personalmente.

## Arquitectura minima

- `main.py`: orquesta la ejecucion completa.
- `src/scraper.py`: obtiene datos de ofertas simuladas con Playwright y cierra el navegador con `browser.close()`.
- `src/analizador.py`: limpia, filtra y analiza datos con Pandas y NumPy.
- `src/generador_pdf.py`: genera el informe final con ReportLab.
- `data/got_1.csv`: dataset usado para practicar carga, filtrado, indice y nulos con Pandas.
- `requirements.txt`: dependencias autorizadas del proyecto.
- `.gitignore`: excluye `venv/`, logs y archivos generados que no deban versionarse.

## La IA puede ayudar a

- planificar;
- explicar;
- modificar partes localizadas;
- depurar;
- documentar;
- refactorizar si se valida;
- preparar la defensa.

## Requisitos tecnicos

- Ejecutar el proyecto desde VS Code con entorno virtual activo.
- Declarar dependencias en `requirements.txt`.
- Mantener el repositorio local organizado con `.gitignore`.
- Usar Pandas para cargar `got_1.csv`, filtrar casas, definir indice y tratar nulos.
- Usar NumPy para calcular promedio, maximo, minimo y desviacion estandar de precios.
- Usar Playwright solo donde aporte adquisicion/automatizacion de datos y cerrar procesos del navegador.
- Usar ReportLab para producir el informe final.
- Ejecutar `python main.py` y comprobar la salida completa.
- Registrar al menos 3 fallas o propuestas incorrectas sugeridas por la IA y como fueron detectadas.

## Prohibido

- tecnologias nuevas;
- frameworks nuevos;
- dependencias no autorizadas;
- APIs inventadas;
- optimizaciones avanzadas fuera de alcance.
- integrar codigo que el alumno no pueda explicar o defender.

## Evidencia

- `README-defensa.md`
- `registro-ia.md`
- `plan-validacion.md`
- informe generado
- ejecucion por terminal
- explicacion oral del flujo
