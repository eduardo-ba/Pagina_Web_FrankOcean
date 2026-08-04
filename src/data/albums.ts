import type { ImageMetadata } from "astro";
import archiveCollage from "../assets/images/archive/archive-collage.jpg";
import portrait from "../assets/images/archive/photography/frank-ocean-blonded-2022.jpg";
import coachella2012 from "../assets/images/archive/photography/frank-ocean-coachella-2012.jpg";
import flow2017 from "../assets/images/archive/photography/frank-ocean-flow-2017.jpg";
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
  coachella2012,
  flow2017,
} as const;

export const photoCredits = [
  {
    title: "Frank Ocean / Blonded 2022",
    author: "Andras Ladocsi",
    sourceUrl:
      "https://commons.wikimedia.org/w/index.php?title=File%3AFrank_Ocean_2022_Blonded%2Ejpg",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  {
    title: "Frank Ocean / Coachella 2012",
    author: "David Hwang",
    sourceUrl:
      "https://commons.wikimedia.org/w/index.php?title=File%3AFrank_Ocean_Coachella_2012_1%2Ejpg",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
  },
  {
    title: "Frank Ocean / Flow Festival 2017",
    author: "Kallerna",
    sourceUrl:
      "https://commons.wikimedia.org/w/index.php?title=File%3AFrank_Ocean_Flow_Festival_2017%2Ejpg",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
] as const;

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
  "2017",
] as const;
