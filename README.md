# Blonded Visual Archive

Archivo visual no oficial, personal y no comercial sobre la música, las eras y el universo creativo de Frank Ocean. Construido como una publicación editorial estática con Astro.

La Edición 02 amplía el archivo con fichas individuales por era, el índice de `blonded RADIO`, un archivo de objetos, búsqueda bilingüe, navegación emocional, transmisión aleatoria, modo de escucha, notas personales locales y un registro de ediciones.

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
| `npm run social`  | Regenera las tarjetas sociales por era.  |
| `npm run verify`  | Ejecuta formato, comprobaciones y build. |

## Rutas de la Edición 02

- `/archivo/[slug]`: registro individual y compartible de cada era.
- `/radio`: índice editorial de episodios de `blonded RADIO`.
- `/explorar`: búsqueda, índice emocional, transmisión aleatoria, modo de escucha y notas personales.
- `/objetos`: archivo visual de cubiertas y documentos.
- `/ediciones`: registro de cambios del archivo.

## Estructura

- `src/pages`: rutas del sitio.
- `src/components`: componentes compartidos.
- `src/layouts`: plantilla HTML y metadatos.
- `src/assets/images`: imágenes editoriales optimizadas con `astro:assets`.
- `src/data`: eras, metadatos y secuencia histórica centralizados.
- `src/styles`: tokens, base, composiciones y movimiento.
- `public`: originales y recursos que conservan URL estable.

## Medios

Las imágenes se almacenan en `src/assets/images` y se sirven mediante `astro:assets`; no hay hotlinks. La secuencia histórica y el archivo de objetos incorporan siete fotografías de Wikimedia Commons:

- Andras Ladocsi, _Frank Ocean / Blonded 2022_ — CC BY-SA 4.0.
- Dave Gold, _Frank Ocean / Listening event 2011_ — CC BY-SA 2.0.
- David Hwang, _Frank Ocean / Coachella 2012_ — CC BY 2.0.
- David Hwang, _Frank Ocean / Coachella 2012 / crowd_ — CC BY 2.0.
- RJ Photos UK, _Frank Ocean / Wireless Festival 2013 / wide_ — CC BY 2.0.
- RJ Photos UK, _Frank Ocean / Wireless Festival 2013 / portrait_ — CC BY 2.0.
- Kallerna, _Frank Ocean / Flow Festival 2017_ — CC BY-SA 4.0.

Las fichas originales y los enlaces de licencia también están disponibles en la ruta de créditos del sitio.
