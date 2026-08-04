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
  year: string;
  theme: EraTheme;
  layout: EraLayout;
  cover: ImageMetadata;
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
    year: "2011",
    theme: "nostalgia",
    layout: "split",
    cover: nostalgiaCover,
    featuredTrack: "Novacane / Strawberry Swing",
    url: "https://www.discogs.com/release/27958686-Frank-Ocean-Nostalgia-Ultra",
    platform: "Discogs",
  },
  {
    slug: "channel-orange",
    year: "2012",
    theme: "orange",
    layout: "fullbleed",
    cover: channelOrangeCover,
    featuredTrack: "Pyramids / Thinkin Bout You",
    url: "https://open.spotify.com/album/392p3shh2jkxUxY2VHvlH8",
    platform: "Spotify",
  },
  {
    slug: "endless",
    year: "2016",
    theme: "endless",
    layout: "architectural",
    cover: endlessCover,
    featuredTrack: "At Your Best (You Are Love)",
    url: "https://music.apple.com/us/music-video/endless/1143705097",
    platform: "Apple Music",
  },
  {
    slug: "blonde",
    year: "2016",
    theme: "blonde",
    layout: "offset",
    cover: blondeCover,
    featuredTrack: "Nights / Self Control",
    url: "https://music.apple.com/us/album/blonde/1146195596",
    platform: "Apple Music",
  },
  {
    slug: "singles",
    year: "2017—2020",
    theme: "singles",
    layout: "index",
    cover: singlesCover,
    featuredTrack: "Biking / Provider / DHL / In My Room",
    url: "https://open.spotify.com/album/1Fh1gzTOImG12M35w3nqQF",
    platform: "Spotify",
  },
];

export const archiveYears = [
  "1987—2005",
  "2008—2010",
  "2011",
  "2012",
  "2016",
] as const;
