# EduSDK Components

Esta carpeta contiene la primera capa visual reutilizable del EduSDK.

```text
BRAND TOKENS
->
SEMANTIC TOKENS
->
COMPONENTS
->
FUTURA MIGRACION
```

Los componentes consumen `../tokens/tokens.css` y `../tokens/semantic-tokens.css`. La identidad Circular FAB permanece en los tokens de marca; la interfaz EduSDK usa tokens semanticos para poder funcionar en light y dark sin duplicar CSS.

## Alcance

Componentes implementados:

- Button
- Card
- Panel
- Chip
- Topbar
- Navigation
- Progress
- Alert
- Question
- Answer Option
- Feedback
- Card media
- Center Hero
- Footer institucional
- Theme Toggle

Estos componentes no sustituyen todavia los estilos existentes en `assets/`, `profesor-plus/`, cursos ni ejemplos. La migracion futura debe permitir convivencia temporal entre clases legacy y clases nuevas con prefijo `cf-`.

## Reglas

- No usar colores hardcoded para componentes.
- No cargar fuentes con `@font-face`.
- No usar iconos corporativos de espacios como iconos funcionales.
- No comunicar estados solo con color.
- Mantener `:root` y `[data-theme="dark"]` como fuente de tema.
- Usar `assets/js/theme-toggle.js` como implementacion canonica del cambio light/dark.

## Demo

La demo aislada esta prevista en `../demo/index.html`. Sirve para validar componentes, estados, tokens y alternancia light/dark antes de migrar pantallas existentes.


