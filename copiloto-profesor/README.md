# Copiloto del Profesor · Python 2027
## Base de Conocimiento Especializada para Formadores de la Red Circular FAB

Bienvenido a la base de conocimiento oficial del **Copiloto del Profesor · Python 2027**. Este repositorio documental ha sido concebido y estructurado específicamente para alimentar un modelo GPT personalizado (o asistente de IA conversacional) destinado a servir de copiloto pedagógico y técnico a los formadores y técnicos de la **Red Circular FAB**.

---

## 🎯 Finalidad y Caso de Uso Principal

El objetivo prioritario de esta base de conocimiento es resolver con solvencia el siguiente escenario docente crítico:

> **Escenario Clave:**
> *"Un técnico o formador de Circular FAB que NO es especialista en Python ni programador profesional tiene que impartir mañana uno de los bloques del curso. Necesita preparar la sesión con rapidez, comprender en profundidad el código antes de proyectarlo, anticipar las dudas de sus alumnos, disponer de analogías sencillas, ejecutar demostraciones en vivo sin miedo a los errores y saber cómo guiar a un estudiante atascado sin resolverle la práctica directamente."*

---

## 📂 Arquitectura de Documentos

La carpeta `copiloto-profesor/` está organizada en módulos autocontenidos y complementarios:

| Archivo | Contenido y Propósito Docente |
| :--- | :--- |
| **`00-INSTRUCCIONES-AGENTE.md`** | Directivas del sistema, personalidad, protocolo de respuesta, modos pedagógicos (Preparación, Clase en Vivo, Preguntas, Planes B) y la regla de oro de distinción de fuentes. |
| **`01-GUIA-CURSO.md`** | Visión curricular global, progresión Bloque 1 a Bloque 7, metodología *Aprender Haciendo*, flujo asistido por IA 2027 y tabla sinóptica del itinerario. |
| **`02-GUIA-DOCENTE-B1-B7.md`** | Guiones pedagógicos bloque a bloque, mesa del instructor, conceptos paso a paso, qué observar en pantalla, errores provocadores y adaptaciones temporales (150/90/60/30 min). |
| **`03-PREGUNTAS-Y-RESPUESTAS.md`** | Banco exhaustivo de preguntas de alumnos clasificadas en *Contenido del Curso* y *Preguntas Docentes Derivadas*, con respuestas en doble nivel (simple y ampliada) y analogías cotidianas. |
| **`04-PRACTICAS-Y-APOYOS.md`** | Inventario completo de prácticas B1–B7 con código comentado, pistas progresivas de 3 niveles para el profesor, puntos de bloqueo habituales y planes B. |
| **`05-EVALUACION-Y-ERRORES.md`** | Catálogo sistemático de excepciones de Python y lectura de Tracebacks, banco de microevaluaciones analizadas y rúbrica formativa docente. |
| **`06-SAMI.md`** | Eje vertebrador de proyectos: evolución de SAMI-Lite (B3) ➔ SAMI-OOP (B4) ➔ SAMI-Applied (B5) ➔ SAMI-Local (B6) ➔ SAMI Final (B7), arquitecturas y criterios de defensa. |
| **`07-LAGUNAS-Y-LIMITES.md`** | Delimitación estricta entre contenido canónico y ampliaciones complementarias, lagunas identificadas de las fuentes y directivas de acotación. |
| **`08-LAB-PYTHON-EN-ACCION.md`** | Recurso final opcional independiente: OpenCV, Pillow, automatización segura de archivos, openpyxl y Tkinter. No es B8 ni evaluable. |
| **`fuentes/`** | Fuentes maestras de ingeniería curricular consolidadas y saneadas en codificación UTF-8 estricta (0% mojibake). |

---

## ⚖️ Regla Fundamental del Copiloto: Distinción de Fuentes

El agente generado a partir de esta base de conocimiento debe aplicar de forma transparente e indelegable la distinción entre el temario oficial del curso y el conocimiento de apoyo externo:

1. `[SEGÚN EL CURSO]`: Aquella información, sintaxis, metodología o librería que forma parte explícita y formal del currículo canónico de *Programar con Python en 2027*.
2. `[EXPLICACIÓN COMPLEMENTARIA]`: Aquel contexto técnico adicional, buena práctica de ingeniería, detalle de bajo nivel o concepto avanzado que el profesor solicita para su propia comprensión, pero que **no** debe exigirse a los alumnos ni presentarse como parte del temario oficial.

---

## CREA TU PROPIO COPILOTO PROFESOR

Este pack es portable y puede utilizarse en cualquier herramienta que permita definir instrucciones y añadir archivos de conocimiento.

1. Crear un asistente personalizado en la herramienta elegida.
2. Utilizar `00-INSTRUCCIONES-AGENTE.md` como instrucciones base.
3. Añadir los restantes documentos del pack como conocimiento.
4. Añadir la carpeta `fuentes/` como respaldo curricular.
5. Configurarlo sin navegación web si se quiere máxima fidelidad al curso.
6. Realizar preguntas de prueba antes de usarlo en aula.
7. Comprobar que distingue siempre contenido del curso de explicación complementaria.

No es necesario conectar APIs externas, claves, tokens ni servicios adicionales para usar este pack como base de conocimiento docente.

## Banco de Pruebas del Copiloto

Usa estas preguntas para comprobar que el asistente respeta el alcance del curso:

- "Voy a impartir el B5. ¿Qué tengo que preparar?"
- "Explícame la diferencia entre print() y return como si tuviera 12 años."
- "Un alumno no entiende los diccionarios. Dame una analogía y una demostración."
- "La factura PDF no se genera. Ayúdame a diagnosticarlo."
- "OpenCV no abre la webcam. ¿Qué compruebo?"
- "Quiero hacer reconocimiento facial. ¿Forma parte de este curso?"
- "Prepárame una versión de 30 minutos de una actividad."

## Guía de Ingesta en un Custom GPT / Asistente IA

Para configurar el asistente personalizado en cualquier plataforma equivalente:

1. **Instrucciones base:** Incorporar el contenido íntegro de `00-INSTRUCCIONES-AGENTE.md`.
2. **Archivos de conocimiento:** Adjuntar los documentos `01-GUIA-CURSO.md` a `08-LAB-PYTHON-EN-ACCION.md` junto con los archivos de la carpeta `fuentes/`.
3. **Capacidades:** Mantener la configuración simple y sin navegación web si el objetivo es responder solo según el curso.

---
*Red de Centros Circular FAB · Formación Técnica y Fabricación Digital*
