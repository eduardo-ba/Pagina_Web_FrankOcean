# Auditoría del proyecto actual

## Resumen técnico

- Framework: Astro `^7.1.6`.
- Render: sitio estático (`output: "static"`).
- Lenguaje: Astro + TypeScript estricto + CSS global.
- Dependencias de runtime: únicamente Astro.
- Páginas:
  - `/`
  - `/discografia`
  - `/biografia`
  - `/contacto`
- Componentes actuales:
  - `Header.astro`
  - `Footer.astro`
  - `PageIntro.astro`
  - `AlbumCard.astro`
- Datos: `src/data/albums.ts`.
- Assets: imágenes y una fuente dentro de `public/`.
- Estilos: `src/styles/global.css`, cerca de mil líneas.

## Fortalezas que deben conservarse

- Estructura simple y entendible.
- TypeScript estricto.
- Sitio estático y ligero.
- Metadatos básicos y Open Graph.
- Skip link.
- Foco visible.
- `prefers-reduced-motion`.
- Alt text en imágenes.
- Enlaces externos con `noopener noreferrer`.
- Rutas claras y contenido ya estructurado.
- Scripts de formato, check, build y verify.

## Debilidades visuales actuales

### Identidad

La marca `Franksmind` y el punto amarillo producen una identidad genérica de portfolio. No conectan con la nueva idea de archivo visual.

### Layout

- Uso repetido de contenedores centrados con ancho fijo.
- Hero convencional de texto a la izquierda y collage a la derecha.
- Discografía en tarjetas uniformes 2×N.
- Biografía como timeline de producto/empresa.
- Contacto como panel de dos columnas con enlaces tipo dashboard.

### Tratamiento visual

- Radios de 18 px aplicados de forma general.
- Sombras prominentes.
- Botones tradicionales.
- Paleta crema/negro/amarillo aplicada casi igual en todo el sitio.
- Segoe UI como única voz tipográfica.
- Poca presencia de imágenes en relación con el concepto.
- La imagen funciona como contenido dentro de una tarjeta, no como estructura narrativa.

## Assets encontrados

```text
public/imagenes/blonde.jpg             900×900
public/imagenes/channelorange.jpg       948×948
public/imagenes/endless.webp            2480×2480
public/imagenes/frank-ocean.jpg         474×479
public/imagenes/nostalgia.png           474×474
public/imagenes/playlist.png            474×474
public/imagenes/portada-artistica.jpg   834×732
public/imagenes/sencillos.webp          1301×1301
public/fuentes/Blonde.otf
```

Los assets permiten una primera versión, pero no alcanzan para sostener varias páginas muy fotográficas sin repetición. La implementación debe funcionar con ellos y dejar preparado un manifiesto para incorporar más imágenes descargadas por el usuario.

## Riesgos técnicos

- Migrar imágenes desde `public` a `src/assets` requiere cambiar el tipo de `image` en los datos y usar imports estáticos.
- Una galería muy densa puede perjudicar LCP y memoria móvil.
- Un collage absoluto puede producir overflow si no se define una composición específica para móvil.
- Efectos de scroll excesivos contradicen la simplicidad actual y pueden exigir JavaScript innecesario.
- La fuente local no tiene licencia documentada dentro del repositorio.
- Las imágenes de un fan archive pueden requerir atribución o permiso; el sitio no debe insinuar oficialidad.

## Cambio conceptual aprobado

Nombre anterior: `Franksmind`.

Nueva idea: **Blonded Visual Archive**.

Definición: archivo visual personal, no oficial y no comercial, organizado por eras, obras, imágenes, canciones y recuerdos. La experiencia debe sentirse más cercana a una publicación editorial o archivo cultural que a una fan page tradicional.
