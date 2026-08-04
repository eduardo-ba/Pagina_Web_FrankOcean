# Blueprints por página

Estas son intenciones y jerarquías, no wireframes rígidos.

## `/` — Portada del archivo

### Objetivo

Presentar la nueva marca y establecer el lenguaje visual en menos de un viewport.

### Secuencia recomendada

1. **Archive gate / hero full-bleed**
   - imagen o collage dominante;
   - título enorme `BLONDED VISUAL ARCHIVE`;
   - microcopy: `UNOFFICIAL PERSONAL ARCHIVE / 2011—PRESENT`;
   - navegación mínima sobrepuesta;
   - indicador de scroll discreto.

2. **Statement**
   - conservar la idea personal del soundtrack de vida;
   - reescribirla como manifiesto editorial;
   - una sola frase grande y metadatos pequeños.

3. **Era index**
   - índice vertical u horizontal con cinco eras;
   - cada entrada cambia fondo/imagen al hover o focus;
   - en móvil, lista apilada con imagen visible.

4. **Selected transmission**
   - conservar `Pyramids` o elegir otra pieza existente;
   - integrar video como objeto editorial, no iframe dentro de tarjeta;
   - poster, título, duración, año y enlace externo.

5. **Colofón corto**
   - créditos y acceso a archivo/historia.

### Evitar

- hero de dos columnas;
- dos botones grandes;
- collage encerrado en tarjetas;
- sección de video con borde blanco y sombra.

## `/discografia` — Archivo por eras

### Objetivo

Convertir la discografía en una secuencia narrativa, no un catálogo de tarjetas.

### Estructura

- intro breve con contador de proyectos;
- un capítulo por era;
- cada capítulo ocupa entre 80 y 140 svh en desktop según contenido;
- imagen principal, título, año, tipo, texto y enlace;
- galería secundaria opcional;
- track/pieza destacada;
- transición cromática a la siguiente era.

### Desktop

Alterna layouts:

- imagen 60% izquierda / texto derecho;
- imagen full bleed con texto superpuesto;
- collage central con márgenes amplios;
- monocromo de dos columnas para Endless;
- índice interactivo para singles.

### Mobile

- una imagen principal por capítulo;
- texto debajo o sobre una zona de contraste segura;
- eliminar solapamientos que reduzcan lectura;
- no convertir capítulos en tarjetas.

### Modelo de datos sugerido

```ts
export type ArchiveEra = {
  slug: string;
  title: string;
  year: string;
  category: string;
  theme: "nostalgia" | "orange" | "endless" | "blonde" | "singles";
  layout: "split" | "fullbleed" | "collage" | "index";
  cover: ImageMetadata;
  gallery?: ImageMetadata[];
  description: string;
  featuredTrack?: string;
  url: string;
  platform: string;
};
```

## `/biografia` — Línea editorial

### Objetivo

Narrar la trayectoria con ritmo fotográfico y fechas memorables.

### Secuencia

- hero tipográfico con nombre/alias y retrato recortado;
- capítulos por año con números gigantes en segundo plano;
- texto en columna estrecha;
- alternar imagen vertical, panorámica y espacio vacío;
- 2016 debe funcionar como clímax visual con Endless/Blonde;
- cierre sobre independencia creativa, sin afirmar eventos posteriores no documentados.

### Interacción

- revelado leve de capítulos al entrar al viewport;
- índice de años sticky solo en desktop si sigue siendo accesible;
- enlaces de salto opcionales.

### Evitar

- timeline empresarial con línea amarilla;
- numeración automática `01 /` repetida igual;
- retrato sticky durante toda la página.

## `/contacto` — Créditos / colofón

### Objetivo

Cerrar el archivo y acreditar al creador sin parecer página de ventas.

### Contenido

- título: `CREDITS`, `COLOPHON` o `ARCHIVE NOTES`;
- autor: Luis Eduardo Barrón Álvarez;
- intención del proyecto;
- enlaces a GitHub y playlist;
- stack técnico de forma discreta;
- aviso de archivo no oficial/no comercial;
- nota de derechos sobre imágenes y música;
- año y versión del archivo.

### Visual

- fondo negro o marfil;
- nombres muy grandes;
- enlaces como índice editorial;
- una imagen secundaria o textura, no panel redondeado.

## Navegación global

Mantén rutas actuales y cambia etiquetas visuales:

```text
BVA
01 / PORTADA
02 / ARCHIVO
03 / HISTORIA
04 / CRÉDITOS
```

En móvil usa menú simple, no hamburger animado complejo. Puede ser un botón accesible que expanda una lista full-screen o una barra horizontal compacta si cabe.

## Footer

Debe actuar como colofón:

- `BLONDED VISUAL ARCHIVE`;
- `UNOFFICIAL / PERSONAL / NON-COMMERCIAL`;
- autor y año;
- enlaces mínimos;
- sin repetir párrafos del contenido.
