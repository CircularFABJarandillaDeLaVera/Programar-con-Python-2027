# Profesor Plus Base · EduSDK

Base reusable para generar la seccion global Profesor Plus dentro de cursos EduSDK.

Incluye:
- plantillas Markdown reutilizables;
- esquema JSON con la lista de plantillas;
- iconos SVG funcionales;
- referencia visual compatible con el Design System;
- soporte light/dark mediante el theme toggle canonico.

## Regla de distribucion

Al integrar Profesor Plus en un curso, copiar los assets necesarios dentro del propio curso:
- tokens y componentes del Design System;
- `assets/js/theme-toggle.js`;
- `assets/icons/`;
- branding requerido;
- `profesor-plus/` generado.

No enlazar desde el curso a una carpeta externa del repositorio EduSDK.

## Placeholders

Las variables `{{...}}` son parte de las plantillas. Deben permanecer visibles salvo que un generador de curso las resuelva con datos reales de un bloque.


