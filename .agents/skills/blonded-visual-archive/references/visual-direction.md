# Dirección visual

## Concepto rector

**Blonded Visual Archive** es un archivo digital que mezcla cinco lenguajes:

1. editorial de revista;
2. fotografía analógica;
3. booklet y empaque musical;
4. archivo institucional;
5. composición experimental controlada.

Debe transmitir intimidad, rareza, silencio, nostalgia y precisión.

## Escala de intensidad

Alterna bloques tranquilos y densos:

- **Pausa:** fondo marfil, una imagen, texto mínimo, mucho aire.
- **Documento:** datos, fechas, índices, pies de foto, líneas finas.
- **Impacto:** imagen full-bleed y título enorme.
- **Collage:** 2–5 imágenes con solapamiento moderado.
- **Oscuridad:** negro profundo con texto blanco y detalles minúsculos.

No mantengas la misma densidad durante toda la página.

## Paleta propuesta

### Neutros

- Archivo negro: `#090908`
- Papel: `#F0EDDF`
- Marfil: `#F8F5E9`
- Gris industrial: `#C8C8C1`
- Tinta secundaria: `#5C5A51`

### Acentos

- Blonded green: `#B7F34A`
- Olive haze: `#69714A`
- Channel orange: `#FF6B18`
- Burnt orange: `#9A421A`
- Photo yellow: `#D9B64F`
- Mist blue: `#8BCFE6`
- Auto red: `#C32620`

Usa uno o dos acentos por bloque, no la colección completa.

## Tipografía

### Display

Sans grotesca pesada, ancha o ligeramente inclinada. Puede resolverse con una pila segura si no existe una fuente licenciada:

```css
font-family: "Arial Black", "Helvetica Neue", Helvetica, Arial, sans-serif;
```

### Texto

Sans neutral y legible:

```css
font-family: Inter, "Helvetica Neue", Arial, sans-serif;
```

No agregues Google Fonts ni una dependencia remota sin autorización. Si se usa una fuente local, documenta licencia y fallback.

### Ritmo

- títulos: compactos, line-height `0.82–0.98`;
- cuerpo: `1.55–1.75`;
- etiquetas: uppercase, 600–800, tracking `0.08–0.18em`;
- pies de imagen: pequeños y funcionales, nunca decorativos sin información.

## Formas y bordes

- Radio por defecto: `0`.
- Radio ocasional: `2–8px` para simular objeto impreso o pantalla, no tarjeta SaaS.
- Líneas: `1px`, contraste bajo.
- Sombras: escasas; preferir bordes, superposición y contraste.
- Papel/collage: una sombra suave y corta puede separar capas físicas.

## Texturas

- Grano fijo global entre `0.025` y `0.055` de opacidad.
- Textura de papel solo en zonas claras.
- Duotono o mezcla de color por era, sin destruir pieles ni detalles importantes.
- Filtros deben estar en CSS y poder retirarse en mobile/performance mode.

No cubras toda la interfaz con ruido pesado.

## Composición

### Full bleed

Las imágenes principales pueden tocar los bordes del viewport. El texto debe permanecer dentro de una zona segura.

### Superposición

- Máximo 20–35% de solapamiento entre elementos principales.
- Mantén al menos un eje de alineación reconocible.
- Nunca tapes rostros, títulos de obra o información necesaria.

### Rotación

Solo para elementos secundarios tipo recorte: aproximadamente `-3deg` a `3deg`.

### Espacio negativo

Usa secciones con `min-height` amplio y contenido escaso. El vacío es parte del diseño.

## Sistema por era

### Nostalgia, Ultra

- rojo, negro, blanco y metal;
- lenguaje de automóvil, carretera y memoria;
- imágenes con encuadres bajos o panorámicos;
- numeración tipo odómetro/catálogo.

### Channel Orange

- naranja dominante;
- fotocopia, grano, repetición y cuadros de película;
- texto negro/crema;
- composición cálida y densa.

### Endless

- monocromo y gris frío;
- arquitectura, líneas, repetición, vacío;
- tipografía más rígida;
- movimiento mínimo.

### Blonde

- marfil, oliva, verde ácido y amarillo brumoso;
- imágenes suaves, desenfoque leve, sombras profundas;
- títulos grandes e inclinados;
- composición contemplativa.

### Singles / Blonded Radio

- catálogo negro/blanco;
- portadas como fichas o diapositivas;
- hover/focus que revela imagen y metadatos;
- acento distinto por pieza.

## Anti-patrones

- tarjetas con iconos y CTA;
- gradientes tecnológicos;
- glassmorphism;
- neón cyberpunk;
- botones tipo app;
- secciones idénticas una debajo de otra;
- texto centrado en todas partes;
- animaciones de rebote;
- usar grano como sustituto de una composición débil;
- copiar una portada de álbum como layout completo.
