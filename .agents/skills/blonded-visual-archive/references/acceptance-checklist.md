# Checklist de aceptación

## Branding

- [ ] No queda `Franksmind` o `franksmind` en interfaz, metadatos ni textos principales.
- [ ] La marca visible es `Blonded Visual Archive`.
- [ ] Existe un aviso discreto de archivo no oficial, personal y no comercial.
- [ ] El favicon y `theme-color` coinciden con el nuevo sistema.

## Composición

- [ ] El hero ya no es la antigua cuadrícula de texto + dos tarjetas.
- [ ] La discografía ya no usa una cuadrícula uniforme de `AlbumCard`.
- [ ] La biografía ya no parece timeline corporativa.
- [ ] Contacto funciona como créditos/colofón.
- [ ] Hay alternancia clara entre secciones calmadas, documentales e intensas.
- [ ] Las páginas no se sienten como una plantilla SaaS.

## Imágenes

- [ ] Cada imagen tiene función y alt adecuado.
- [ ] No hay imágenes remotas/hotlinks.
- [ ] No se repite una misma imagen principal sin intención explícita.
- [ ] Las imágenes above-the-fold tienen dimensiones y prioridad correctas.
- [ ] Las imágenes secundarias usan lazy loading.
- [ ] No hay imágenes pequeñas estiradas de forma evidente.
- [ ] Existe un inventario o comentario de assets faltantes.

## Responsive

- [ ] No existe overflow horizontal a 390 px.
- [ ] Los títulos grandes no quedan cortados accidentalmente.
- [ ] Los collages cambian de composición en móvil.
- [ ] El menú es usable con tacto y teclado.
- [ ] El contenido importante no depende de hover.
- [ ] Las imágenes no empujan texto crítico fuera del viewport.

## Accesibilidad

- [ ] Un `h1` por página.
- [ ] Skip link funcional.
- [ ] Foco visible.
- [ ] Contraste suficiente.
- [ ] Orden de lectura lógico.
- [ ] `prefers-reduced-motion` desactiva movimiento no esencial.
- [ ] Iframes tienen título.
- [ ] Enlaces externos son distinguibles y seguros.

## Rendimiento

- [ ] No se agregaron dependencias ornamentales.
- [ ] No se cargan todas las imágenes de forma eager.
- [ ] No hay video autoplay con sonido.
- [ ] No hay cambios de layout por falta de dimensiones.
- [ ] Build estático se mantiene.
- [ ] CSS antiguo no utilizado fue eliminado.

## Código

- [ ] Props y modelos de datos están tipados.
- [ ] Los datos de eras están centralizados.
- [ ] Los estilos tienen estructura modular entendible.
- [ ] No existen componentes duplicados por página sin justificación.
- [ ] `npm run format` pasa.
- [ ] `npm run check` pasa.
- [ ] `npm run build` pasa.
- [ ] `check-archive.mjs` no reporta errores bloqueantes.

## Resultado visual

La implementación se aprueba solo si cumple estas tres preguntas:

1. ¿Se reconoce como un archivo visual musical antes que como un portfolio?
2. ¿Cada era tiene personalidad propia sin que el sitio parezca cinco webs distintas?
3. ¿Las imágenes, el texto y el movimiento crean una narrativa, no solo decoración?
