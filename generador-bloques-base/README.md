# Generador de bloques · Base EduSDK

Plantilla canonica para crear bloques nuevos con el lenguaje visual y los contratos tecnicos del EduSDK.

Un bloque generado debe nacer actualizado: no debe necesitar una migracion visual posterior.

## Arquitectura de bloque

```text
bloqueX/
  inicio.html
  index.html
  style.css
  bloque-theme.css
  alumno/
    index.html
    style.css
    app.js
  profesor/
    index.html
    style.css
    app.js
  recursos/
    index.html
    mapas/
      index.html
      mapa-data.js
  data/
    bloqueX.js
    bloqueX.json
```

## Assets compartidos del curso

Los cursos generados deben ser autocontenidos y copiar localmente:

- `assets/edusdk-design-system/`;
- `assets/js/theme-toggle.js`;
- `assets/edusdk-map/`;
- `assets/icons/`;
- `assets/branding/`;
- `assets/edusdk-exam/` si el curso tiene examen final;
- `profesor-plus/` si el curso publica la biblioteca docente.

No enlazar desde el curso a repositorios externos.

## Design System

Todas las vistas de bloque consumen:

- tokens;
- semantic tokens;
- components;
- `bloque-theme.css` para estructura comun de bloque;
- CSS local solo para la vista que lo necesita.

Usar tokens canonicos, especialmente `surfaceMuted`, `inputBackground`, `accentSoft` y `shadow.sm`. No crear temas paralelos ni fallbacks locales que rompan dark.

## Theme

El cambio light/dark usa un unico asset compartido del curso:

```html
<script src="../../assets/js/theme-toggle.js" defer></script>
```

En subcarpetas se ajusta la ruta relativa. Contrato:

- `[data-theme-toggle]`;
- `data-theme="light|dark"`;
- `localStorage["edusdk-theme"]`.

No generar `theme-toggle.js` por bloque.

## Identidad

Patron interno:

```text
Circular FAB · [producto]
[curso o itinerario] · Bloque X
```

La identidad acompana a la navegacion. No debe dominar la pantalla ni fijar un curso concreto.

## Vistas

- `inicio.html`: topbar compacta, titulo, descripcion y accesos Aula/Profesor/Alumno/Recursos.
- `index.html`: aula con slides, progreso, anterior/siguiente y fullscreen.
- `profesor/`: sidebar, `#nav`, `#content`, `#note`, cards/paneles y chips.
- `alumno/`: Ficha, Flashcards, Casos, Mini test, Mapa mental e Imprimir.
- `recursos/`: indice visual de materiales con cards DS.
- `recursos/mapas/`: visor canonico de mapa mental.

## Mapa mental

Flujo canonico:

```text
Alumno -> Mapa mental -> recursos/mapas/index.html
```

No usar vista intermedia. No abrir Markdown crudo.

La fuente pedagogica puede ser `.md`, `.mmd` u otro origen validado. `mapa-data.js` es un artefacto generado para el visor, no la fuente maestra.

## Aliases y contrato funcional

Las clases funcionales no se renombran para cambiar estilos.

Ejemplos funcionales:

- `active`;
- `correct`;
- `wrong`;
- `flipped`;
- `selected`;
- `slide`;
- `navbtn`;
- `opt`.

Ejemplos visuales:

- `.cf-card`;
- `.cf-panel`;
- `.cf-button`;
- `.cf-chip`;
- `.cf-alert`;
- `.cf-progress`.

Pueden coexistir en el mismo elemento.

## Portabilidad

La plantilla usa rutas relativas y es apta para HTTP y GitHub Pages cuando el curso distribuye sus assets locales. El acceso `file://` puede funcionar en vistas sin `fetch`; cualquier recurso que dependa de carga HTTP debe documentarlo.

## Responsabilidades de capa

- Datos: `data/bloqueX.json` y `data/bloqueX.js`.
- Presentacion comun: `bloque-theme.css`.
- Presentacion de vista: `style.css` local cuando exista.
- Logica funcional: `script.js`, `alumno/app.js`, `profesor/app.js`.
- Componentes compartidos: mapa, examen final y Profesor Plus a nivel de curso.

## Uso

```bash
python generador-bloques-base/scripts/crear_bloque.py generador-bloques-base/config-ejemplo.json .
```

Dry-run:

```bash
python generador-bloques-base/scripts/crear_bloque.py generador-bloques-base/config-ejemplo.json . --dry-run
```


