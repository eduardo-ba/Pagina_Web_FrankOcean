export type Album = {
  title: string;
  year: string;
  category: string;
  image: string;
  alt: string;
  description: string;
  url: string;
  platform: string;
  accent: string;
};

export const albums: Album[] = [
  {
    title: "Blonde",
    year: "2016",
    category: "Álbum de estudio",
    image: "/imagenes/blonde.jpg",
    alt: "Portada del álbum Blonde",
    description:
      "Una obra íntima y fragmentada sobre la memoria, el amor y el paso del tiempo.",
    url: "https://music.apple.com/us/album/blonde/1146195596",
    platform: "Apple Music",
    accent: "#b7e4a8",
  },
  {
    title: "Channel Orange",
    year: "2012",
    category: "Álbum de estudio",
    image: "/imagenes/channelorange.jpg",
    alt: "Portada naranja del álbum Channel Orange",
    description:
      "R&B, soul y pop unidos por escenas cinematográficas y personajes inolvidables.",
    url: "https://open.spotify.com/album/392p3shh2jkxUxY2VHvlH8",
    platform: "Spotify",
    accent: "#ff7a1a",
  },
  {
    title: "Endless",
    year: "2016",
    category: "Álbum visual",
    image: "/imagenes/endless.webp",
    alt: "Portada del álbum visual Endless",
    description:
      "Una pieza audiovisual minimalista que marcó el cierre de su etapa con Def Jam.",
    url: "https://music.apple.com/us/music-video/endless/1143705097",
    platform: "Apple Music",
    accent: "#8dc6ff",
  },
  {
    title: "Nostalgia, Ultra",
    year: "2011",
    category: "Mixtape",
    image: "/imagenes/nostalgia.png",
    alt: "Portada del mixtape Nostalgia, Ultra",
    description:
      "El proyecto que presentó su voz narrativa y lo impulsó hacia el reconocimiento mundial.",
    url: "https://www.discogs.com/release/27958686-Frank-Ocean-Nostalgia-Ultra",
    platform: "Discogs",
    accent: "#ef3c3c",
  },
  {
    title: "Singles & Projects",
    year: "2017—2020",
    category: "Selección",
    image: "/imagenes/sencillos.webp",
    alt: "Collage inspirado en sencillos de Frank Ocean",
    description:
      "Una selección de lanzamientos posteriores a Blonde, como Biking, Provider y DHL.",
    url: "https://open.spotify.com/album/1Fh1gzTOImG12M35w3nqQF",
    platform: "Spotify",
    accent: "#f6df29",
  },
  {
    title: "Mi playlist favorita",
    year: "Selección personal",
    category: "Playlist",
    image: "/imagenes/playlist.png",
    alt: "Portada de una playlist dedicada a Frank Ocean",
    description:
      "Las canciones que inspiraron este sitio y acompañaron distintas etapas de mi vida.",
    url: "https://open.spotify.com/playlist/2iDpx90bonkWEaOvkVFpCl",
    platform: "Spotify",
    accent: "#b7e4a8",
  },
];
