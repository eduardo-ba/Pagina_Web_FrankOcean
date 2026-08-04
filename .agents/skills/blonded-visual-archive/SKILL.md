---
name: blonded-visual-archive
description: Rediseña y mantiene el sitio Astro de Frank Ocean como “Blonded Visual Archive”: una experiencia editorial, inmersiva, fotográfica y experimental. Úsala al cambiar layout, branding, componentes, imágenes locales, animaciones, responsive, accesibilidad o arquitectura visual de este repositorio. No usar para sitios ajenos ni para investigación biográfica sin relación con la interfaz.
---

# Blonded Visual Archive

Transforma el proyecto actual en un archivo visual no oficial inspirado en el lenguaje editorial, analógico y minimalista asociado a las eras de Frank Ocean. El resultado debe sentirse como una publicación cultural digital, no como una landing corporativa, un dashboard ni una cuadrícula genérica de tarjetas.

## Resultado esperado

- Cambiar el nombre visible de `Franksmind` a **Blonded Visual Archive**.
- Conservar el sitio como proyecto Astro estático, rápido, accesible y sin dependencias innecesarias.
- Reutilizar el contenido y enlaces válidos, pero rehacer por completo la composición y el sistema visual.
- Integrar imágenes locales como parte de la narrativa, no como decoración de relleno.
- Diferenciar visualmente las eras `Nostalgia, Ultra`, `Channel Orange`, `Endless`, `Blonde` y los sencillos, manteniendo una identidad global coherente.
- Mantener explícitamente el carácter **no oficial, personal y no comercial** del archivo.

## Contexto obligatorio del repositorio

Antes de editar, lee:

1. `references/project-audit.md`
2. `references/visual-direction.md`
3. `references/page-blueprints.md`
4. `references/asset-and-media-strategy.md`
5. `references/acceptance-checklist.md`

El proyecto analizado usa Astro con salida estática, cuatro rutas, imágenes locales en `public/imagenes`, una hoja global grande y componentes sencillos. No asumas React, Tailwind, SCSS, CMS ni librerías de animación.

## Principios no negociables

### 1. Rediseño real, no reskin

No te limites a cambiar colores, radios o tipografías sobre el layout existente. Replantea jerarquía, ritmo, composición, relación texto–imagen y navegación.

Elimina como patrón dominante:

- tarjetas uniformes con borde, sombra y radio;
- cuadrículas simétricas repetitivas;
- bloques centrados de apariencia SaaS;
- botones genéricos de llamada a la acción;
- una sola paleta aplicada igual a todas las eras.

### 2. Editorial antes que interfaz

Cada pantalla debe parecer una página de revista, booklet, póster, archivo físico o secuencia cinematográfica. Usa:

- tipografía sobredimensionada;
- numeración y metadatos pequeños;
- columnas estrechas de texto;
- imágenes full-bleed;
- recortes deliberados;
- superposición controlada;
- mucho espacio negativo;
- composiciones asimétricas con alineaciones claras.

La asimetría debe parecer diseñada, nunca accidental.

### 3. Imágenes con propósito

Toda imagen debe cumplir una función narrativa: establecer una era, crear pausa, contextualizar una historia, presentar una obra o actuar como transición.

- No uses imágenes remotas ni hotlinks.
- Prioriza imágenes locales del repositorio y las que el usuario agregue.
- No inventes archivos que no existen.
- Si faltan recursos, implementa la composición con los assets disponibles y deja un manifiesto claro de qué imagen adicional convendría agregar.
- No repitas la misma imagen principal en varias secciones.
- No redistribuyas fuentes o imágenes fuera del proyecto.

### 4. Movimiento sobrio

El movimiento debe sentirse lento, físico y editorial.

Permitido:

- revelados por `clip-path` o máscara;
- desplazamientos de 8–40 px;
- parallax leve, máximo aproximado de 4%;
- cambios de escala muy discretos;
- texto o imágenes que aparecen al entrar al viewport;
- transiciones de página nativas de Astro si no perjudican la accesibilidad.

Evita:

- scroll hijacking;
- partículas;
- cursores invasivos;
- animaciones elásticas;
- efectos 3D gratuitos;
- autoplay con sonido;
- movimiento constante sin propósito.

Respeta siempre `prefers-reduced-motion`.

### 5. Sin dependencia ornamental

Implementa primero con Astro, CSS y JavaScript mínimo. No agregues GSAP, Lenis, React, Vue, Tailwind ni otra dependencia solo para resolver efectos que CSS puede cubrir.

Si una dependencia fuera realmente necesaria:

1. explica el beneficio concreto;
2. comprueba que no exista una alternativa nativa razonable;
3. solicita autorización antes de instalarla.

## Flujo de trabajo obligatorio

### Fase 1 — Inspección

1. Lee `package.json`, `src/pages`, `src/components`, `src/data`, `src/layouts` y `src/styles`.
2. Ejecuta el inventario de assets:

```bash
node .agents/skills/blonded-visual-archive/scripts/inventory-assets.mjs
```

3. Identifica rutas, enlaces externos, contenido reutilizable y elementos de accesibilidad que ya funcionan.
4. Comprueba el estado inicial con los scripts existentes cuando el entorno permita instalar dependencias.

### Fase 2 — Plan breve

Antes de editar, presenta un plan de máximo 10 puntos con:

- archivos a crear;
- archivos a retirar o reemplazar;
- estructura de componentes;
- estrategia de imágenes;
- orden de implementación;
- riesgos de responsive y rendimiento.

No pidas confirmación salvo que falte una decisión que cambie materialmente el alcance.

### Fase 3 — Fundamentos

1. Cambia branding y metadatos a `Blonded Visual Archive`.
2. Reestructura estilos en archivos pequeños y con responsabilidad clara.
3. Introduce tokens globales y temas por era.
4. Crea componentes editoriales reutilizables.
5. Conserva `skip-link`, foco visible, HTML semántico y soporte de movimiento reducido.

Arquitectura sugerida, ajustable según necesidad:

```text
src/
├── assets/
│   └── images/
│       ├── archive/
│       ├── blonde/
│       ├── channel-orange/
│       ├── endless/
│       ├── nostalgia-ultra/
│       ├── singles/
│       └── textures/
├── components/
│   ├── ArchiveHeader.astro
│   ├── ArchiveFooter.astro
│   ├── EditorialHero.astro
│   ├── EraChapter.astro
│   ├── MediaFigure.astro
│   ├── TrackIndex.astro
│   └── GrainOverlay.astro
├── data/
│   └── archive.ts
└── styles/
    ├── tokens.css
    ├── base.css
    ├── layout.css
    ├── motion.css
    └── pages/
```

No crees todos los componentes de la lista si no aportan reutilización real.

### Fase 4 — Implementación por página

Implementa en este orden:

1. layout, metadatos, header y footer;
2. inicio;
3. discografía;
4. biografía;
5. contacto/créditos;
6. responsive y movimiento;
7. optimización de imágenes;
8. verificación final.

Sigue `references/page-blueprints.md` para la intención de cada página. No clones literalmente las referencias visuales: traduce el lenguaje a una composición original.

### Fase 5 — Verificación

Ejecuta, cuando sea posible:

```bash
npm run format
npm run check
npm run build
node .agents/skills/blonded-visual-archive/scripts/check-archive.mjs
```

Prueba como mínimo:

- 1440 × 900;
- 1024 × 768;
- 390 × 844;
- navegación por teclado;
- `prefers-reduced-motion`;
- imágenes deshabilitadas o lentas;
- enlaces externos;
- ausencia de overflow horizontal.

Si el entorno impide instalar paquetes o ejecutar build, informa exactamente el error y completa las verificaciones estáticas disponibles.

## Sistema visual resumido

Usa `assets/blonded-tokens.css` como punto de partida, no como resultado final inmutable.

### Base global

- negro profundo;
- marfil/papel cálido;
- gris industrial;
- tipografía sans pesada para display;
- grotesca legible para cuerpo;
- etiquetas pequeñas en mayúsculas;
- radios mínimos o inexistentes;
- sombras raras y suaves, solo cuando simulen papel u objeto físico.

### Temas por era

- `nostalgia-ultra`: rojo automóvil, negro, blanco, brillo cromado.
- `channel-orange`: naranja saturado, marrón oscuro, textura granulada.
- `endless`: blanco, negro, gris frío, composición arquitectónica.
- `blonde`: crema, oliva/verde ácido, amarillo fotográfico, niebla y grano.
- `singles`: negro, blanco y acentos variables; tratamiento de archivo o catálogo.

No uses todos los colores simultáneamente en una misma pantalla.

## Reglas de tipografía

- Máximo dos familias principales.
- Los títulos pueden llegar a `clamp(4rem, 13vw, 11rem)` cuando el layout lo soporte.
- Usa texto pequeño editorial entre `0.65rem` y `0.8rem` con tracking moderado.
- El cuerpo debe seguir siendo cómodo: aproximadamente `0.98rem–1.15rem`, línea de `1.55–1.75`.
- Evita imitar logotipos exactos o depender de una fuente sin licencia confirmada.
- El archivo local `public/fuentes/Blonde.otf` no debe copiarse, redistribuirse ni convertirse. Úsalo solo si el usuario confirma que puede emplearlo; de lo contrario, define una pila tipográfica segura.

## Reglas de contenido

- La marca visible es `Blonded Visual Archive`.
- Puede abreviarse como `BVA` en etiquetas pequeñas.
- El idioma principal sigue siendo español.
- Mantén nombres de álbumes y obras en su idioma original.
- Sustituye “página dedicada” por un lenguaje de archivo: colección, registro, era, transmisión, selección, índice, créditos.
- El contacto debe sentirse como colofón/créditos, no como formulario comercial.
- Incluye una nota discreta: archivo no oficial, personal y no comercial; sin afiliación con el artista.

## Reglas de calidad

### Accesibilidad

- Un solo `h1` por página.
- Orden semántico comprensible sin CSS.
- Alt descriptivo y no redundante.
- Nunca pongas texto importante solo dentro de una imagen.
- Contraste suficiente incluso sobre fotografía.
- Objetivos táctiles de al menos 44 × 44 px.
- Foco visible coherente con cada tema.

### Rendimiento

- Migra imágenes editoriales a `src/assets` cuando facilite optimización con `astro:assets`.
- Solo una o dos imágenes above-the-fold con carga prioritaria.
- El resto debe usar carga diferida.
- Define dimensiones o `aspect-ratio` para evitar CLS.
- Convierte imágenes grandes a WebP/AVIF cuando sea viable, conservando el original fuera del bundle si se necesita.
- Evita video de fondo en móvil; usa poster estático.
- No sacrifiques legibilidad por filtros pesados.

### Código

- TypeScript estricto.
- Datos de eras centralizados, no duplicados en páginas.
- Componentes con props tipadas.
- CSS con nombres orientados a intención, no a apariencia accidental.
- No mantengas reglas muertas del diseño anterior.
- No dejes la hoja global monolítica si el rediseño ya tiene módulos claros.

## Decisiones específicas para este proyecto

- Conserva inicialmente las rutas `/`, `/discografia`, `/biografia` y `/contacto` para no romper enlaces.
- Cambia las etiquetas de navegación a un sistema editorial, por ejemplo:
  - `01 / Inicio`
  - `02 / Archivo`
  - `03 / Historia`
  - `04 / Créditos`
- Reemplaza `AlbumCard.astro`; no intentes convertirlo en el componente central del nuevo diseño.
- Reestructura `albums.ts` para soportar tema, galería, layout y metadatos editoriales.
- Reemplaza la actual hero de dos columnas por una composición full-bleed o collage controlado.
- Convierte la discografía en capítulos de era, no una cuadrícula 2×N.
- Convierte la biografía en secuencia editorial con años grandes y medios alternados.
- Convierte contacto en colofón con créditos, enlaces y aviso no oficial.

## Cierre de cada tarea

Al terminar, entrega:

1. resumen de la transformación;
2. archivos principales modificados;
3. decisiones visuales importantes;
4. assets faltantes o mejorables;
5. comandos ejecutados y resultados;
6. limitaciones reales, sin afirmar verificaciones que no se hicieron.
