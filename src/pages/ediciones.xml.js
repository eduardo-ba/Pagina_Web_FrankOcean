import rss from "@astrojs/rss";
import { editions } from "../data/archive-content";

export function GET(context) {
  const sorted = [...editions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return rss({
    title: "Ediciones — Archivo Visual Blonded",
    description:
      "Registro de versiones, cambios y nuevas capas del Archivo Visual Blonded.",
    site: context.site,
    items: sorted.map((edition) => ({
      title: `Edición ${edition.number} — ${edition.status.es}`,
      description: edition.description.es,
      pubDate: new Date(edition.date),
      link: `/ediciones#edition-${edition.number}`,
    })),
    customData: "<language>es-mx</language>",
    trailingSlash: false,
  });
}
