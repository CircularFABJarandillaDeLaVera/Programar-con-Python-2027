# EduSDK Component Contracts

Los contratos describen la primera version de componentes visuales del EduSDK. Todos consumen tokens semanticos y deben funcionar sin cambios de HTML en `:root` y `[data-theme="dark"]`.

## Tokens semanticos postmigracion

La migracion real de curso heredado a EduSDK consolido cuatro tokens de interfaz. Son decisiones EduSDK, no tokens oficiales de marca:

- `color.surfaceMuted` / `--cf-color-surface-muted`: navegacion secundaria, cards de bajo enfasis, sidebars e icon slots.
- `color.inputBackground` / `--cf-color-input-background`: busqueda, formularios y filtros.
- `color.accentSoft` / `--cf-color-accent-soft`: hover suave, selected/active no solido, avisos suaves e icon slots.
- `shadow.sm` / `--cf-shadow-sm`: cards compactas, topbars y elementos elevados de baja jerarquia.

## Theme Toggle

- Proposito: cambiar unicamente la presentacion entre light y dark.
- Asset canonico: `assets/js/theme-toggle.js`.
- HTML recomendado: `<button type="button" class="cf-button cf-button--secondary theme-toggle" data-theme-toggle aria-label="Activar modo oscuro" aria-pressed="false"><span data-theme-icon aria-hidden="true">&#9790;</span><span data-theme-label>Modo dark</span></button>`.
- Selector estable: `[data-theme-toggle]`. La clase `.theme-toggle` es visual y no debe usarse como unico contrato funcional.
- Atributo de tema: `data-theme="light"` o `data-theme="dark"` en `<html>`.
- Persistencia: `localStorage["edusdk-theme"]` con valores `light` o `dark`.
- Precedencia inicial: preferencia persistida, `data-theme` existente, `prefers-color-scheme`, `light` por defecto.
- Estados sincronizados: todos los controles `[data-theme-toggle]` de la pagina deben actualizar `aria-pressed`, `aria-label`, `[data-theme-label]` y `[data-theme-icon]`.
- Controles dinamicos: los toggles insertados despues de cargar el script deben funcionar mediante delegacion de eventos y sincronizarse en el siguiente cambio de tema.
- Accesibilidad: debe ser un `<button>` real, usable por teclado, con `aria-pressed` y `aria-label` actualizados.
- Compatibilidad: debe funcionar sin dependencias, sin modulos, por HTTP, GitHub Pages y `file://`, y no debe fallar en paginas sin toggle.
- Distribucion: los cursos autocontenidos deben copiar `assets/js/theme-toggle.js` junto con `assets/edusdk-design-system/`; no deben enlazar al repositorio EduSDK.
- Tokens: `color.surface`, `color.surfaceRaised`, `color.surfaceMuted`, `color.border`, `color.text`, `color.focus`, `space`, `radius.md`, `font.label`.
- Legacy relacionado: toggles locales de bloques, portal, Profesor Plus, examen final y mapas.

## Button

- Proposito: ejecutar acciones principales, secundarias, ligeras o destructivas.
- HTML recomendado: `<button class="cf-button cf-button--primary" type="button">Accion</button>`.
- Variantes: `primary`, `secondary`, `ghost`, `danger`.
- Estados: `default`, `hover`, `active`, `focus-visible`, `disabled`.
- Tokens: `color.accent`, `color.accentHover`, `color.accentText`, `color.surface`, `color.border`, `color.text`, `color.danger`, `color.focus`, `space`, `radius.md`, `font.label`.
- Accesibilidad: usar `<button>` real cuando ejecute acciones; no usar sombra como unica senal de foco.
- Legacy relacionado: `.btn`, `.btn.primary`, `.btn.warn`, `.back-link`.

## Card

- Proposito: presentar unidades de contenido, accesos o resumenes.
- HTML recomendado: `<article class="cf-card">...</article>`.
- Variantes: `default`, `interactive`, `compact`.
- Extension editorial: `media`.
- Estados: `hover` y `focus-visible` solo si el elemento interno o la card son interactivos.
- Tokens: `color.surface`, `color.surfaceRaised`, `color.surfaceMuted`, `color.accentSoft`, `color.border`, `color.text`, `color.textMuted`, `space`, `radius.lg`, `shadow.sm`, `shadow.raised`.
- Accesibilidad: no convertir una card en boton si no representa una accion completa.
- Legacy relacionado: `.card`, `.mode-card`, `.stat`.

### Card media

- Proposito: mostrar contenido editorial o actualidad con imagen, metadato, titulo, resumen y accion.
- HTML recomendado: `<article class="cf-card cf-card--media">...</article>`.
- Variantes: extension de Card, no componente independiente.
- Estados: `focus-visible` en el enlace o accion interna; `hover` opcional si el enlace ocupa una parte clara.
- Tokens: `color.surface`, `color.surfaceRaised`, `color.border`, `color.text`, `color.textMuted`, `color.accent`, `color.focus`, `space`, `radius.lg`, `font.heading`, `font.body`, `font.label`.
- Accesibilidad: imagen con `alt`, titulo enlazable o accion distinguible, foco visible.
- Legacy relacionado: cards de noticias, actualidad, recursos y eventos.

## Panel

- Proposito: agrupar contenido estructural o zonas de trabajo.
- HTML recomendado: `<section class="cf-panel">...</section>`.
- Variantes: `default`, `raised`.
- Estados: no requiere estados interactivos por defecto.
- Tokens: `color.surface`, `color.surfaceRaised`, `color.surfaceMuted`, `color.border`, `space`, `radius.lg`, `shadow.sm`, `shadow.raised`.
- Accesibilidad: usar encabezados internos y landmarks cuando proceda.
- Legacy relacionado: `.panel`, `.question-card`, `.content-section`, `.hero`.

## Chip

- Proposito: mostrar etiquetas, estados breves o metadatos.
- HTML recomendado: `<span class="cf-chip cf-chip--info">Info</span>`.
- Variantes: `neutral`, `accent`, `info`, `success`, `warning`, `danger`.
- Estados: no interactivo por defecto.
- Tokens: `color.surface`, `color.surfaceMuted`, `color.accentSoft`, `color.border`, `color.text`, `color.textMuted`, `color.accent`, `color.info`, `color.success`, `color.warning`, `color.danger`, `space`, `radius.pill`, `font.label`.
- Accesibilidad: el texto debe nombrar el estado; el color solo refuerza.
- Legacy relacionado: `.pill`, `.tag`, metadatos visuales.

## Topbar

- Proposito: cabecera base para inicio, bloques, examen y Profesor Plus.
- HTML recomendado: `<header class="cf-topbar cf-topbar--app">...</header>`.
- Variantes: `app`, `course`, `compact`.
- Estados: no requiere estados propios; delega interaccion en Button y Navigation.
- Tokens: `color.surface`, `color.surfaceRaised`, `color.surfaceMuted`, `color.border`, `color.text`, `color.textMuted`, `space`, `radius.lg`, `shadow.sm`.
- Accesibilidad: incluir titulo visible y navegacion semantica si aplica.
- Legacy relacionado: `header`, `.topbar`, `.exam-top`.

## Navigation

- Proposito: navegar entre secciones.
- HTML recomendado: `<nav class="cf-nav cf-nav--horizontal" aria-label="Principal"><a class="cf-nav__link" aria-current="page">Inicio</a></nav>`.
- Variantes: `horizontal`, `sidebar`.
- Estados: `hover`, `active`, `focus-visible`, `aria-current="page"`.
- Tokens: `color.text`, `color.textMuted`, `color.accent`, `color.accentHover`, `color.accentSoft`, `color.surface`, `color.surfaceMuted`, `color.border`, `color.focus`, `space`, `radius.md`, `font.label`.
- Accesibilidad: `aria-current="page"` debe marcar el destino activo.
- Legacy relacionado: `.nav-list a`, nav superior, `.top-actions`.

## Progress

- Proposito: comunicar avance de curso, test o tarea.
- HTML recomendado: `<div class="cf-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="60">...</div>`.
- Variantes: `default`.
- Estados: no interactivo.
- Tokens: `color.surface`, `color.surfaceMuted`, `color.border`, `color.accent`, `space`, `radius.pill`, `font.label`.
- Accesibilidad: mostrar valor textual ademas del relleno visual.
- Legacy relacionado: `.progress-wrap`, `.progress`.

## Alert

- Proposito: mostrar mensajes de sistema o aviso contextual.
- HTML recomendado: `<aside class="cf-alert cf-alert--warning" role="status">...</aside>`.
- Variantes: `info`, `success`, `warning`, `danger`.
- Estados: no interactivo por defecto.
- Tokens: `color.info`, `color.success`, `color.warning`, `color.danger`, `color.surface`, `color.accentSoft`, `color.border`, `color.text`, `space`, `radius.md`.
- Accesibilidad: usar `role="alert"` solo cuando requiera interrupcion.
- Legacy relacionado: `.notice`, paneles de aviso.

## Question

- Proposito: presentar enunciados pedagogicos reutilizables.
- HTML recomendado: `<article class="cf-question">...</article>`.
- Variantes: `default`, `review`.
- Estados: no interactivo por defecto.
- Tokens: `color.surface`, `color.surfaceRaised`, `color.surfaceMuted`, `color.border`, `color.text`, `color.textMuted`, `space`, `radius.lg`, `font.heading`, `font.body`, `font.label`.
- Accesibilidad: separar metadatos, enunciado y contenido auxiliar.
- Legacy relacionado: `.question-card`.

## Answer Option

- Proposito: opcion seleccionable para test y modo estudio.
- HTML recomendado: `<button class="cf-answer" type="button">...</button>`.
- Variantes: sin variantes visuales; los cambios pertenecen al estado.
- Estados: `default`, `hover`, `selected`, `correct`, `incorrect`, `disabled`, `focus-visible`.
- Tokens: `color.surface`, `color.surfaceRaised`, `color.accentSoft`, `color.border`, `color.text`, `color.textMuted`, `color.accent`, `color.success`, `color.danger`, `color.focus`, `space`, `radius.md`, `font.body`, `font.label`.
- Accesibilidad: correcto e incorrecto deben usar texto o senal redundante, no solo color.
- Legacy relacionado: `.answer`, `.answer.selected`, `.answer.correct`, `.answer.wrong`.

## Feedback

- Proposito: devolver resultado pedagogico y explicacion formativa.
- HTML recomendado: `<section class="cf-feedback cf-feedback--correct">...</section>`.
- Variantes: `correct`, `incorrect`, `info`, `warning`.
- Estados: no interactivo por defecto.
- Tokens: `color.success`, `color.danger`, `color.info`, `color.warning`, `color.surface`, `color.accentSoft`, `color.border`, `color.text`, `space`, `radius.md`, `font.heading`, `font.body`.
- Accesibilidad: incluir titulo/estado explicito, texto formativo y senal visual.
- Legacy relacionado: `.feedback`.

## Exam Engine Aliases

- Proposito: permitir que motores de examen legacy mantengan sus selectores funcionales y adopten la capa visual EduSDK.
- Clases funcionales que no deben renombrarse: `.question-card`, `.answer`, `.selected`, `.correct`, `.wrong`, `.feedback`, `.progress-wrap`, `.progress`, `.review-card`, `.review-groups`, `.block-row`, `.history-item`, `.stat`.
- Aliases visuales recomendados: `.question-card.cf-question`, `.answer.cf-answer`, `.selected.is-selected`, `.correct.is-correct`, `.wrong.is-incorrect`, `.feedback.cf-feedback`, `.progress-wrap.cf-progress__track`, `.progress.cf-progress__fill`, `.panel.cf-panel`, `.stat.cf-card`.
- Estados de respuesta: `default`, `hover`, `focus-visible`, `selected`, `correct`, `incorrect`, `disabled`.
- Accesibilidad: correcto e incorrecto deben mostrar senal redundante textual o equivalente, por ejemplo `âœ“ Correcta` y `âœ• Incorrecta`, no solo color.
- Theme: el examen debe usar `assets/js/theme-toggle.js`; no debe implementar su propio sistema de tema.
- Datos: los aliases visuales no deben modificar bancos, configuracion, scoring, progreso, temporizador, historial ni reglas de modo estudio/simulacro.
- Distribucion: los cursos autocontenidos deben copiar `edusdk-exam`, `edusdk-design-system` y `assets/js/theme-toggle.js`.

## Center Hero

- Proposito: presentar una portada de centro + curso manteniendo Circular FAB como marca principal.
- HTML recomendado: `<section class="cf-center-hero">...</section>`.
- Variantes: experimental en esta fase.
- Estados: no interactivo por defecto; las acciones internas usan Button o enlaces.
- Tokens: `color.surface`, `color.surfaceRaised`, `color.surfaceMuted`, `color.border`, `color.text`, `color.textMuted`, `color.accent`, `space`, `radius.lg`, `shadow.sm`, `shadow.raised`, `font.heading`, `font.body`, `font.label`.
- Accesibilidad: jerarquia correcta de headings, imagen decorativa con `aria-hidden` si no aporta informacion, contraste suficiente.
- Legacy relacionado: portadas de centro, hero de cursos y bloques.

## Footer

- Proposito: cerrar paginas institucionales con marca, informacion, enlaces, patrocinadores/logos y recursos de comunicacion opcionales.
- HTML recomendado: `<footer class="cf-footer">...</footer>`.
- Variantes: primera version sin variantes.
- Estados: `hover` y `focus-visible` en enlaces.
- Tokens: `color.surface`, `color.surfaceRaised`, `color.surfaceMuted`, `color.border`, `color.text`, `color.textMuted`, `color.accent`, `color.focus`, `space`, `radius.lg`, `shadow.sm`, `font.heading`, `font.body`, `font.label`.
- Accesibilidad: usar `<footer>`, navegacion semantica, enlaces con texto claro y logos con `alt`.
- Legacy relacionado: footer institucional WordPress/Elementor.

## Tokens faltantes detectados

No bloquean la primera implementacion:

- `color.surfaceHover`: se reutiliza `color.surfaceRaised`, `color.surfaceMuted` o `color.accentSoft` segun jerarquia y estado.
- `color.borderStrong`: se reutilizan color de estado y `color.focus`.
- `color.onSuccess`, `color.onWarning`, `color.onDanger`, `color.onInfo`: se evita texto sobre fondos de estado solidos.
- `motion.duration` y `motion.easing`: se usan transiciones prudentes locales hasta que existan tokens.
- `icon.size`: se usan medidas internas de componente.
- `zIndex.sticky`: no se fija topbar sticky en esta fase.
- `color.overlay`: se resuelve con capas semanticas existentes y opacidad local en Center Hero.



