# CircularFAB EduSDK Design System

Este directorio inicia la capa canonica de identidad visual para CircularFAB EduSDK.

Principio base:

```text
IDENTIDAD CORPORATIVA != DESIGN SYSTEM DE INTERFAZ
```

Los tokens de marca representan identidad documentada. Los tokens semanticos representan decisiones de interfaz EduSDK preparadas para ser consumidas por componentes en fases posteriores.

Ruta de capas:

```text
IDENTIDAD CORPORATIVA
->
BRAND TOKENS
->
SEMANTIC TOKENS
->
COMPONENT TOKENS / COMPONENTES
->
CURSOS
```

## A. Identidad Documentada

Fuente normativa principal:

- `design-system/fuentes/manual/Manual-Identidad-Corporativa-Red-Circular-FAB_11Centros.pdf`

Fuente auxiliar:

- `design-system/fuentes/auditoria_identidad_circular_fab-v2.md`

Elementos documentados por el manual oficial:

- Seis colores corporativos: Verde Brillante, Verde Oscuro, Azul Brillante, Amarillo Brillante, Rojo Brillante y Rosa Palo Intenso.
- Valores RGB, CMYK y Pantone para cada color corporativo.
- Wordmark creado manualmente.
- Gotham Black.
- Bebas Neue Pro / Regular como tipografia principal para documentos.
- Logotipo horizontal/principal.
- Logotipo vertical/secundario.
- Uso del isotipo en escalas inferiores al 50%.
- Area de respeto.
- Convivencia con otras marcas.
- Cinco espacios: Conocer, Inventar, Fabricar, Coordinacion y Compartir.
- Trama generica.

## B. Valores Derivados

El manual documenta RGB, CMYK y Pantone.

Los valores HEX incluidos en `tokens/tokens.json` y `tokens/tokens.css` son derivados tecnicos calculados desde RGB para uso digital. No son datos literales del manual.

## C. Tokens Semanticos EduSDK

Archivos:

- `tokens/semantic-tokens.json`
- `tokens/semantic-tokens.css`

Los tokens semanticos introducen dos variantes conceptuales:

- `theme.light`: interfaz clara institucional.
- `theme.dark`: interfaz oscura operativa.

La implementacion CSS usa `:root` para light y `[data-theme="dark"]` para dark. La migracion real de curso heredado consolido tokens adicionales para superficies secundarias, inputs, acentos suaves y elevacion ligera.

El cambio light/dark se distribuye como asset autocontenido en `assets/js/theme-toggle.js`. Los cursos generados deben copiar este archivo junto con su distribucion local de `assets/edusdk-design-system/`, sin enlazar contra el repositorio EduSDK.

Los colores semanticos no son identidad corporativa directa. Algunas decisiones derivan de `brand.*` cuando el contraste y el uso lo permiten:

- `color.accent` deriva de `brand.greenDark` en light y `brand.greenBright` en dark.
- `color.focus` deriva de la familia azul en light y de `brand.yellowBright` en dark para asegurar foco visible.
- `color.success`, `color.warning`, `color.danger` e `color.info` son decisiones EduSDK y no equivalencias automaticas de marca.

Los estados no deben depender solo del color. Los componentes deberan usar texto, icono, borde, forma o una senal redundante equivalente.

Los tokens `color.surfaceMuted`, `color.inputBackground`, `color.accentSoft` y `shadow.sm` son decisiones EduSDK nacidas de necesidades observadas en portal, Profesor Plus, examen y bloques. No son tokens brand oficiales.

## D. Decisiones EduSDK

Estas decisiones pertenecen a la implementacion tecnica del EduSDK:

- Nombres tecnicos de tokens en ingles, por ejemplo `brand.greenBright`.
- Prefijo CSS `--cf-`.
- Publicacion de variables CSS solo para valores utiles en navegador.
- Variables RGB CSS auxiliares para poder usar alpha en CSS moderno.
- Separacion entre tokens de marca (`tokens.json`, `tokens.css`) y tokens semanticos (`semantic-tokens.json`, `semantic-tokens.css`).

No se han creado reglas de carga de fuentes, no se han copiado fuentes y no se han extraido fuentes desde el PDF. Las familias tipograficas quedan registradas en `tokens/tokens.json` como identidad documentada, no como disponibilidad web garantizada.

## Reglas No Convertidas En Tokens

Las proporciones y reglas de marca no se convierten en variables CSS arbitrarias en esta fase.

Quedan documentadas como reglas de identidad:

- Version horizontal/principal.
- Version vertical/secundaria.
- Isotipo bajo escala menor al 50%.
- Area de respeto.
- Convivencia con otras marcas.
- Cinco espacios.
- Trama generica.

Los SVG, tramas, logos y recursos auxiliares siguen siendo assets, no tokens.



