# Estrategia de assets y medios

## Estado actual

Los recursos están en `public/imagenes` y se consumen con rutas absolutas. Esto funciona, pero no aprovecha la optimización de imágenes locales de Astro.

## Estructura objetivo

```text
src/assets/images/
├── archive/
│   ├── hero/
│   └── portraits/
├── blonde/
├── channel-orange/
├── endless/
├── nostalgia-ultra/
├── singles/
└── textures/
```

Usa nombres descriptivos, minúsculas y guiones:

```text
blonde-green-haze-01.webp
channel-orange-collage-02.webp
endless-warehouse-wide.webp
```

No uses nombres ambiguos como `foto1.jpg` o `final-final.png`.

## Migración a `astro:assets`

Para imágenes conocidas en build time:

```astro
---
import { Image } from "astro:assets";
import hero from "../assets/images/archive/hero/blonde-haze.webp";
---

<Image
  src={hero}
  alt="Descripción concreta de la composición"
  widths={[640, 960, 1440, 1920]}
  sizes="100vw"
  loading="eager"
  fetchpriority="high"
/>
```

Para datos centralizados, importa las imágenes dentro del archivo de datos y tipa `cover` como `ImageMetadata`.

## Uso de `public`

Reserva `public/` para:

- favicons;
- texturas usadas desde `background-image` en CSS;
- posters o archivos que deban conservar una URL estable;
- recursos que no necesiten transformación.

## Inventario por era

Objetivo recomendado para una primera versión rica sin exceso:

- hero global: 2–4 imágenes;
- cada era principal: 1 portada + 2 imágenes de apoyo;
- biografía: 4–7 imágenes distribuidas;
- créditos: 0–1 imagen;
- texturas: 1 grano y, como máximo, 1 papel.

No es obligatorio tener todo para iniciar. Usa el inventario disponible y marca faltantes.

## Selección visual

Antes de integrar una imagen, registra:

- era;
- orientación;
- sujeto;
- función (`hero`, `chapter`, `detail`, `texture`, `poster`);
- texto alternativo;
- fuente/crédito cuando aplique.

Modelo sugerido:

```ts
export type ArchiveImage = {
  src: ImageMetadata;
  alt: string;
  era: string;
  role: "hero" | "chapter" | "detail" | "texture" | "poster";
  credit?: string;
};
```

## Procesamiento

- Conserva originales fuera del bundle si vas a recomprimir.
- Exporta fotografía en WebP/AVIF según compatibilidad y calidad.
- No amplíes imágenes pequeñas para hero; usa crop más contenido o collage.
- Evita PNG para fotografía salvo transparencia real.
- Hero desktop idealmente no debe depender de un archivo gigantesco.
- Usa poster estático para cualquier video.

## Filtros CSS por era

Los filtros deben ser moderados y reversibles:

```css
[data-era="blonde"] img {
  filter: saturate(0.82) contrast(1.04) sepia(0.08);
}

[data-era="endless"] img {
  filter: grayscale(1) contrast(1.08);
}
```

No apliques el mismo filtro a todo el sitio.

## Derechos y atribución

- No presentes el archivo como oficial.
- No hotlinkees imágenes de terceros.
- Usa imágenes que el usuario tenga derecho a mostrar o que acepte emplear en un proyecto personal.
- Mantén una sección de créditos/atribución cuando se conozca la fuente.
- No copies ni redistribuyas `public/fuentes/Blonde.otf` desde la skill.
