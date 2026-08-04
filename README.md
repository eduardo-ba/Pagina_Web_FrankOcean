# Blonded Visual Archive

Archivo visual no oficial, personal y no comercial sobre la música, las eras y el universo creativo de Frank Ocean. Construido como una publicación editorial estática con Astro.

## Desarrollo

```bash
npm install
npm run dev
```

El servidor de desarrollo estará disponible en `http://localhost:4321`.

## Comandos

| Comando           | Descripción                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo.        |
| `npm run format`  | Formatea el código.                      |
| `npm run check`   | Comprueba Astro y TypeScript.            |
| `npm run build`   | Comprueba y genera el sitio estático.    |
| `npm run preview` | Previsualiza la compilación.             |
| `npm run verify`  | Ejecuta formato, comprobaciones y build. |

## Estructura

- `src/pages`: rutas del sitio.
- `src/components`: componentes compartidos.
- `src/layouts`: plantilla HTML y metadatos.
- `src/assets/images`: imágenes editoriales optimizadas con `astro:assets`.
- `src/data`: eras, metadatos y secuencia histórica centralizados.
- `src/styles`: tokens, base, composiciones y movimiento.
- `public`: originales y recursos que conservan URL estable.

## Medios

Las imágenes se almacenan en `src/assets/images` y se sirven mediante `astro:assets`; no hay hotlinks. La secuencia histórica incorpora tres fotografías de Wikimedia Commons:

- Andras Ladocsi, _Frank Ocean / Blonded 2022_ — CC BY-SA 4.0.
- David Hwang, _Frank Ocean / Coachella 2012_ — CC BY 2.0.
- Kallerna, _Frank Ocean / Flow Festival 2017_ — CC BY-SA 4.0.

Las fichas originales y los enlaces de licencia también están disponibles en la ruta de créditos del sitio.
