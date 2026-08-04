import type { ImageMetadata } from "astro";
import archiveCollage from "../assets/images/archive/archive-collage.jpg";
import portrait from "../assets/images/archive/frank-ocean-portrait.jpg";
import blondeCover from "../assets/images/blonde/blonde-cover.jpg";
import channelOrangeCover from "../assets/images/channel-orange/channel-orange-cover.jpg";
import endlessCover from "../assets/images/endless/endless-cover.webp";
import nostalgiaCover from "../assets/images/nostalgia-ultra/nostalgia-ultra-cover.png";
import playlistCover from "../assets/images/singles/personal-playlist.png";
import singlesCover from "../assets/images/singles/singles-collage.webp";

export type EraTheme =
  "nostalgia" | "orange" | "endless" | "blonde" | "singles";
export type EraLayout =
  "split" | "fullbleed" | "architectural" | "offset" | "index";

export type ArchiveEra = {
  slug: string;
  title: string;
  year: string;
  category: string;
  theme: EraTheme;
  layout: EraLayout;
  cover: ImageMetadata;
  alt: string;
  description: string;
  featuredTrack: string;
  url: string;
  platform: string;
};

export const archiveMedia = {
  collage: archiveCollage,
  portrait,
  playlist: playlistCover,
} as const;

export const archiveEras: ArchiveEra[] = [
  {
    slug: "nostalgia-ultra",
    title: "Nostalgia, Ultra",
    year: "2011",
    category: "Mixtape / registro 001",
    theme: "nostalgia",
    layout: "split",
    cover: nostalgiaCover,
    alt: "Automóvil naranja de la portada de Nostalgia, Ultra",
    description:
      "Una cinta de carretera hecha de memoria, confesión y cultura pop. El primer registro que convirtió una voz privada en señal pública.",
    featuredTrack: "Novacane / Strawberry Swing",
    url: "https://www.discogs.com/release/27958686-Frank-Ocean-Nostalgia-Ultra",
    platform: "Discogs",
  },
  {
    slug: "channel-orange",
    title: "Channel Orange",
    year: "2012",
    category: "Álbum de estudio / registro 002",
    theme: "orange",
    layout: "fullbleed",
    cover: channelOrangeCover,
    alt: "Campo naranja de la portada de Channel Orange",
    description:
      "Viñetas de deseo, privilegio y soledad reunidas como escenas de una película. Un dial cálido que cambia de estación sin perder la historia.",
    featuredTrack: "Pyramids / Thinkin Bout You",
    url: "https://open.spotify.com/album/392p3shh2jkxUxY2VHvlH8",
    platform: "Spotify",
  },
  {
    slug: "endless",
    title: "Endless",
    year: "2016",
    category: "Álbum visual / registro 003",
    theme: "endless",
    layout: "architectural",
    cover: endlessCover,
    alt: "Escena monocromática del álbum visual Endless",
    description:
      "Trabajo, repetición y arquitectura en blanco y negro. Una construcción audiovisual que funciona como umbral entre contrato e independencia.",
    featuredTrack: "At Your Best (You Are Love)",
    url: "https://music.apple.com/us/music-video/endless/1143705097",
    platform: "Apple Music",
  },
  {
    slug: "blonde",
    title: "Blonde",
    year: "2016",
    category: "Álbum de estudio / registro 004",
    theme: "blonde",
    layout: "offset",
    cover: blondeCover,
    alt: "Retrato con el rostro cubierto en la portada de Blonde",
    description:
      "Voces que cambian de forma, recuerdos fuera de foco y tiempo partido. Una obra íntima donde la ausencia también ocupa espacio.",
    featuredTrack: "Nights / Self Control",
    url: "https://music.apple.com/us/album/blonde/1146195596",
    platform: "Apple Music",
  },
  {
    slug: "singles",
    title: "Signals After Blonde",
    year: "2017—2020",
    category: "Sencillos / registro 005",
    theme: "singles",
    layout: "index",
    cover: singlesCover,
    alt: "Composición gráfica inspirada en sencillos posteriores a Blonde",
    description:
      "Piezas sueltas, transmisiones y portadas como fichas de un archivo todavía abierto. Cada lanzamiento cambia el acento, no la voz.",
    featuredTrack: "Biking / Provider / DHL / In My Room",
    url: "https://open.spotify.com/album/1Fh1gzTOImG12M35w3nqQF",
    platform: "Spotify",
  },
];

export const archiveYears = [
  {
    years: "1987—2005",
    title: "Nueva Orleans / primeras grabaciones",
    text: "Christopher Edwin Breaux creció en Nueva Orleans, rodeado por la tradición musical de la ciudad. Después del huracán Katrina se trasladó a Los Ángeles para continuar grabando.",
  },
  {
    years: "2008—2010",
    title: "Componer desde el margen",
    text: "Antes de ocupar el centro del encuadre, escribió para otros artistas, desarrolló una voz propia y se acercó al colectivo Odd Future.",
  },
  {
    years: "2011",
    title: "La señal se vuelve pública",
    text: "Nostalgia, Ultra apareció como una transmisión gratuita: confesión, ficción y cultura popular ensambladas con una precisión nueva.",
  },
  {
    years: "2012",
    title: "Channel Orange",
    text: "El debut de estudio convirtió deseo, privilegio y soledad en escenas cinematográficas. El álbum amplió la escala sin perder intimidad narrativa.",
  },
  {
    years: "2016",
    title: "Dos obras / una ruptura",
    text: "Endless y Blonde llegaron en días consecutivos. El primero cerró una etapa; el segundo desarmó estructuras de canción y consolidó una independencia creativa radical.",
  },
] as const;
