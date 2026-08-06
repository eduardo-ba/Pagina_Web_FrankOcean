import type { ImageMetadata } from "astro";
import coachellaCrowd2012 from "../assets/images/archive/photography/frank-ocean-coachella-crowd-2012.jpg";
import listeningEvent2011 from "../assets/images/archive/photography/frank-ocean-listening-event-2011.jpg";
import wirelessPortrait2013 from "../assets/images/archive/photography/frank-ocean-wireless-portrait-2013.jpg";
import wirelessWide2013 from "../assets/images/archive/photography/frank-ocean-wireless-wide-2013.jpg";
import blondeCover from "../assets/images/blonde/blonde-cover.jpg";
import channelOrangeCover from "../assets/images/channel-orange/channel-orange-cover.jpg";
import endlessCover from "../assets/images/endless/endless-cover.webp";
import nostalgiaCover from "../assets/images/nostalgia-ultra/nostalgia-ultra-cover.png";
import playlistCover from "../assets/images/singles/personal-playlist.png";
import singlesCover from "../assets/images/singles/singles-collage.webp";

export type LocalizedText = {
  es: string;
  en: string;
};

export type EraDetail = {
  slug: string;
  thesis: LocalizedText;
  context: LocalizedText;
  note: LocalizedText;
  tracks: string[];
  emotions: LocalizedText[];
};

export type ArchiveSingle = {
  title: string;
  year: string;
  tone: LocalizedText;
  href: string;
};

export type RadioEpisode = {
  code: string;
  title: string;
  cycle: string;
  note: LocalizedText;
  href: string;
};

export type ArchiveObject = {
  id: string;
  title: string;
  year: string;
  image: ImageMetadata;
  alt: LocalizedText;
  aspect: "square" | "landscape" | "portrait";
  kind: LocalizedText;
  description: LocalizedText;
};

export const eraDetails: EraDetail[] = [
  {
    slug: "nostalgia-ultra",
    thesis: {
      es: "Una carretera imaginaria donde el recuerdo cambia de estación.",
      en: "An imagined highway where memory keeps changing stations.",
    },
    context: {
      es: "La primera gran transmisión del archivo mezcla confesión, apropiación pop y movimiento. El automóvil no es decoración: funciona como cápsula de memoria y como promesa de salida.",
      en: "The archive's first major transmission mixes confession, pop appropriation, and motion. The car is not decoration: it acts as a memory capsule and a promise of escape.",
    },
    note: {
      es: "Nota 001 — esta era siempre se siente como abrir una carpeta que todavía conserva el olor del viaje.",
      en: "Note 001 — this era always feels like opening a folder that still carries the scent of the road.",
    },
    tracks: ["Novacane", "Swim Good", "Strawberry Swing", "Songs for Women"],
    emotions: [
      { es: "Carretera", en: "Road" },
      { es: "Memoria", en: "Memory" },
      { es: "Escape", en: "Escape" },
    ],
  },
  {
    slug: "channel-orange",
    thesis: {
      es: "Historias privadas encendidas bajo una luz pública y naranja.",
      en: "Private stories lit under a public, orange light.",
    },
    context: {
      es: "Un álbum construido como secuencia de escenas: lujo, fe, deseo y aislamiento comparten encuadre. La escala crece, pero la voz permanece cerca del oído.",
      en: "An album built as a sequence of scenes: luxury, faith, desire, and isolation share the frame. The scale grows, yet the voice stays close to the ear.",
    },
    note: {
      es: "Nota 002 — aquí el color funciona como temperatura emocional antes de funcionar como identidad visual.",
      en: "Note 002 — here color works as emotional temperature before it works as visual identity.",
    },
    tracks: ["Thinkin Bout You", "Pyramids", "Bad Religion", "Pink Matter"],
    emotions: [
      { es: "Deseo", en: "Desire" },
      { es: "Soledad", en: "Isolation" },
      { es: "Noche", en: "Night" },
    ],
  },
  {
    slug: "endless",
    thesis: {
      es: "Construir una salida repitiendo el mismo gesto hasta volverlo arquitectura.",
      en: "Building an exit by repeating the same gesture until it becomes architecture.",
    },
    context: {
      es: "Trabajo, tiempo y contrato aparecen como materiales visibles. La escalera avanza mientras la música evita una forma fija y convierte el proceso en la obra.",
      en: "Labor, time, and contract appear as visible materials. The staircase rises while the music avoids a fixed form and turns process into the work.",
    },
    note: {
      es: "Nota 003 — el silencio entre piezas importa tanto como la pieza terminada.",
      en: "Note 003 — the silence between pieces matters as much as the finished object.",
    },
    tracks: ["At Your Best", "Rushes", "Comme des Garçons", "Higgs"],
    emotions: [
      { es: "Trabajo", en: "Labor" },
      { es: "Vacío", en: "Void" },
      { es: "Ruptura", en: "Break" },
    ],
  },
  {
    slug: "blonde",
    thesis: {
      es: "El tiempo recordado desde dos voces que nunca terminan de coincidir.",
      en: "Time remembered through two voices that never fully align.",
    },
    context: {
      es: "Voces alteradas, guitarras desnudas y recuerdos sin orden lineal. Blonde no conserva el pasado: muestra cómo se transforma cada vez que intentamos narrarlo.",
      en: "Altered voices, bare guitars, and memories without linear order. Blonde does not preserve the past: it shows how the past changes each time we try to narrate it.",
    },
    note: {
      es: "Nota 004 — algunas canciones cambian contigo; otras te enseñan cuánto cambiaste.",
      en: "Note 004 — some songs change with you; others show you how much you changed.",
    },
    tracks: ["Nikes", "Ivy", "Self Control", "Nights", "White Ferrari"],
    emotions: [
      { es: "Memoria", en: "Memory" },
      { es: "Distancia", en: "Distance" },
      { es: "Familia", en: "Family" },
    ],
  },
  {
    slug: "singles",
    thesis: {
      es: "Señales aisladas que mantienen el archivo abierto después del álbum.",
      en: "Isolated signals that keep the archive open after the album.",
    },
    context: {
      es: "Cada sencillo llega como una ficha autónoma: otra portada, otro acento y otra forma de circulación. Juntos construyen un catálogo sin prometer una conclusión.",
      en: "Each single arrives as an autonomous file: another cover, another accent, another mode of circulation. Together they build a catalog without promising closure.",
    },
    note: {
      es: "Nota 005 — la espera también produce una forma de escuchar.",
      en: "Note 005 — waiting also creates a way of listening.",
    },
    tracks: ["Biking", "Provider", "Moon River", "DHL", "In My Room"],
    emotions: [
      { es: "Espera", en: "Waiting" },
      { es: "Movimiento", en: "Motion" },
      { es: "Señal", en: "Signal" },
    ],
  },
];

export const singles: ArchiveSingle[] = [
  {
    title: "Chanel",
    year: "2017",
    tone: { es: "Dualidad / deseo", en: "Duality / desire" },
    href: "https://music.apple.com/us/album/chanel-single/1214557444",
  },
  {
    title: "Biking",
    year: "2017",
    tone: { es: "Movimiento / colaboración", en: "Motion / collaboration" },
    href: "https://music.apple.com/us/album/biking-feat-ja%C3%BF-z-tyler-the-creator-single/1225119790",
  },
  {
    title: "Provider",
    year: "2017",
    tone: { es: "Distancia / transmisión", en: "Distance / transmission" },
    href: "https://music.apple.com/us/album/provider-single/1276055312",
  },
  {
    title: "Moon River",
    year: "2018",
    tone: { es: "Memoria / versión", en: "Memory / rendition" },
    href: "https://music.apple.com/us/album/moon-river-single/1349524897",
  },
  {
    title: "DHL",
    year: "2019",
    tone: { es: "Objeto / tránsito", en: "Object / transit" },
    href: "https://music.apple.com/us/album/dhl-single/1484224393",
  },
  {
    title: "In My Room",
    year: "2019",
    tone: { es: "Interior / repetición", en: "Interior / repetition" },
    href: "https://music.apple.com/us/album/in-my-room-single/1485957053",
  },
  {
    title: "Dear April",
    year: "2020",
    tone: { es: "Cambio / distancia", en: "Change / distance" },
    href: "https://music.apple.com/us/album/dear-april-side-a-acoustic-single/1506122308",
  },
  {
    title: "Cayendo",
    year: "2020",
    tone: { es: "Caída / traducción", en: "Falling / translation" },
    href: "https://music.apple.com/us/album/cayendo-side-a-acoustic-single/1506122739",
  },
];

export const radioEpisodes: RadioEpisode[] = [
  {
    code: "001",
    title: "blonded 001",
    cycle: "BLONDED RADIO",
    note: {
      es: "Punto de partida: selección libre, voces invitadas y una señal que presenta el archivo como programa.",
      en: "The opening signal: freeform selection, guest voices, and an archive presented as a broadcast.",
    },
    href: "https://music.apple.com/us/station/blonded-001/ra.1177818317",
  },
  {
    code: "003",
    title: "blonded 003",
    cycle: "BLONDED RADIO",
    note: {
      es: "Una transmisión entendida como collage: canciones ajenas, conversación y piezas propias en el mismo dial.",
      en: "A broadcast understood as collage: other people's songs, conversation, and original work on the same dial.",
    },
    href: "https://music.apple.com/us/playlist/blonded-003/pl.a80b1b8b203245e8804bd1f8de83dffe",
  },
  {
    code: "006",
    title: "blonded 006",
    cycle: "BLONDED RADIO",
    note: {
      es: "El programa como espacio de descubrimiento y como contexto para una nueva pieza.",
      en: "The program as a space for discovery and as context for a new piece.",
    },
    href: "https://music.apple.com/us/station/blonded-006/ra.1236679826",
  },
  {
    code: "008",
    title: "blonded 008",
    cycle: "BLONDED RADIO",
    note: {
      es: "Selección, conversación y registro en vivo reunidos sin jerarquía rígida.",
      en: "Selection, conversation, and live documentation gathered without a rigid hierarchy.",
    },
    href: "https://music.apple.com/us/station/blonded-008/ra.1484225726",
  },
  {
    code: "009",
    title: "blonded 009",
    cycle: "BLONDED RADIO",
    note: {
      es: "Una entrega tardía del primer ciclo, atravesada por mezcla y memoria de escenario.",
      en: "A late entry in the first cycle, shaped by mixing and stage memory.",
    },
    href: "https://music.apple.com/us/station/blonded-009/ra.1486104594",
  },
  {
    code: "10",
    title: "blonded 10",
    cycle: "BLONDED RADIO",
    note: {
      es: "Con Vegyn, Roof Access y cortes de Blonde grabados en directo.",
      en: "With Vegyn, Roof Access, and live Blonde cuts.",
    },
    href: "https://music.apple.com/us/station/blonded-10/ra.1487342681",
  },
  {
    code: "XMS",
    title: "blonded Xmas",
    cycle: "SPECIAL TRANSMISSION",
    note: {
      es: "Una conversación de Frank y Wim ‘The Iceman’ Hof.",
      en: "A conversation with Frank and Wim ‘The Iceman’ Hof.",
    },
    href: "https://music.apple.com/us/station/blonded-xmas/ra.1490633668",
  },
  {
    code: "NRG",
    title: "blonded ENERGY!",
    cycle: "SPECIAL TRANSMISSION",
    note: {
      es: "Una conversación sobre Qi Gong con el maestro Mingtong Gu.",
      en: "On Qi Gong with Master Mingtong Gu.",
    },
    href: "https://music.apple.com/us/station/blonded-energy/ra.1601887882",
  },
];

export const archiveObjects: ArchiveObject[] = [
  {
    id: "OBJ-001",
    title: "Nostalgia, Ultra",
    year: "2011",
    image: nostalgiaCover,
    alt: {
      es: "Automóvil naranja en la cubierta de Nostalgia, Ultra",
      en: "Orange automobile on the Nostalgia, Ultra sleeve",
    },
    aspect: "square",
    kind: { es: "Cubierta / automóvil", en: "Sleeve / automobile" },
    description: {
      es: "Una imagen de movimiento convertida en puerta de entrada al primer registro.",
      en: "An image of motion turned into the entry point for the first record.",
    },
  },
  {
    id: "OBJ-002",
    title: "Channel Orange",
    year: "2012",
    image: channelOrangeCover,
    alt: {
      es: "Campo naranja de la cubierta de Channel Orange",
      en: "Orange field on the Channel Orange sleeve",
    },
    aspect: "square",
    kind: { es: "Campo cromático / cubierta", en: "Color field / sleeve" },
    description: {
      es: "El color funciona como señal, temperatura y sistema de identificación.",
      en: "Color functions as signal, temperature, and identification system.",
    },
  },
  {
    id: "OBJ-003",
    title: "Endless",
    year: "2016",
    image: endlessCover,
    alt: {
      es: "Escalera y figura en el fotograma de Endless",
      en: "Staircase and figure in the Endless still",
    },
    aspect: "square",
    kind: { es: "Fotograma / construcción", en: "Still / construction" },
    description: {
      es: "La obra visual conservada como evidencia de proceso y arquitectura.",
      en: "The visual work preserved as evidence of process and architecture.",
    },
  },
  {
    id: "OBJ-004",
    title: "Blonde",
    year: "2016",
    image: blondeCover,
    alt: {
      es: "Retrato con el rostro cubierto en la portada de Blonde",
      en: "Portrait with a covered face on the Blonde sleeve",
    },
    aspect: "square",
    kind: { es: "Retrato / cubierta", en: "Portrait / sleeve" },
    description: {
      es: "Un gesto privado convertido en una de las superficies centrales del archivo.",
      en: "A private gesture turned into one of the archive's central surfaces.",
    },
  },
  {
    id: "OBJ-005",
    title: "Signals",
    year: "2017—2020",
    image: singlesCover,
    alt: {
      es: "Motocicleta roja en el collage de sencillos",
      en: "Red motorcycle in the singles collage",
    },
    aspect: "square",
    kind: { es: "Collage / catálogo", en: "Collage / catalog" },
    description: {
      es: "Portadas y señales posteriores reunidas como fichas de una colección abierta.",
      en: "Later sleeves and signals gathered as files in an open collection.",
    },
  },
  {
    id: "OBJ-006",
    title: "Listening Record",
    year: "ED. 01",
    image: playlistCover,
    alt: {
      es: "Portada de una selección personal de escucha",
      en: "Cover of a personal listening selection",
    },
    aspect: "square",
    kind: { es: "Playlist / nota personal", en: "Playlist / personal note" },
    description: {
      es: "La escucha del editor documentada como un objeto más del archivo.",
      en: "The editor's listening documented as another object in the archive.",
    },
  },
  {
    id: "OBJ-007",
    title: "Listening Event",
    year: "2011",
    image: listeningEvent2011,
    alt: {
      es: "Frank Ocean de perfil entre asistentes a un evento de escucha en 2011",
      en: "Frank Ocean in profile among attendees at a 2011 listening event",
    },
    aspect: "landscape",
    kind: { es: "Fotografía / documento", en: "Photograph / document" },
    description: {
      es: "El flash y el grano convierten un instante público en memoria cercana.",
      en: "Flash and grain turn a public instant into a close memory.",
    },
  },
  {
    id: "OBJ-008",
    title: "Coachella Stage",
    year: "2012",
    image: coachellaCrowd2012,
    alt: {
      es: "Frank Ocean señalando al público durante Coachella 2012",
      en: "Frank Ocean pointing toward the audience at Coachella 2012",
    },
    aspect: "landscape",
    kind: { es: "Escenario / panorámica", en: "Stage / panorama" },
    description: {
      es: "La escala del escenario aparece sin perder el gesto central del intérprete.",
      en: "The scale of the stage appears without losing the performer's central gesture.",
    },
  },
  {
    id: "OBJ-009",
    title: "Negative Space",
    year: "2013",
    image: wirelessWide2013,
    alt: {
      es: "Frank Ocean cantando bajo un amplio campo azul en Wireless Festival 2013",
      en: "Frank Ocean singing beneath a wide blue field at Wireless Festival 2013",
    },
    aspect: "landscape",
    kind: { es: "Escenario / vacío", en: "Stage / negative space" },
    description: {
      es: "El vacío superior convierte la actuación en una composición silenciosa.",
      en: "The empty field above turns the performance into a quiet composition.",
    },
  },
  {
    id: "OBJ-010",
    title: "Soft Focus",
    year: "2013",
    image: wirelessPortrait2013,
    alt: {
      es: "Retrato vertical suavemente desenfocado de Frank Ocean cantando en 2013",
      en: "Softly blurred vertical portrait of Frank Ocean performing in 2013",
    },
    aspect: "portrait",
    kind: { es: "Retrato / recorte", en: "Portrait / crop" },
    description: {
      es: "La falta de nitidez funciona como textura de recuerdo, no como imagen heroica.",
      en: "The lack of sharpness works as memory texture, not as a hero image.",
    },
  },
];

export const emotionalIndex = [
  {
    slug: "memoria",
    label: { es: "Memoria", en: "Memory" },
    description: {
      es: "Canciones que regresan al pasado sin poder fijarlo.",
      en: "Songs that return to the past without being able to fix it in place.",
    },
    entries: ["Nostalgia, Ultra", "Ivy", "White Ferrari", "Moon River"],
  },
  {
    slug: "movimiento",
    label: { es: "Movimiento", en: "Motion" },
    description: {
      es: "Carreteras, bicicletas, envíos y cuerpos en tránsito.",
      en: "Roads, bicycles, deliveries, and bodies in transit.",
    },
    entries: ["Swim Good", "Biking", "DHL", "Provider"],
  },
  {
    slug: "noche",
    label: { es: "Noche", en: "Night" },
    description: {
      es: "El momento en que la producción cambia de forma y perspectiva.",
      en: "The moment when production changes shape and perspective.",
    },
    entries: ["Pyramids", "Nights", "In My Room", "Rushes"],
  },
  {
    slug: "distancia",
    label: { es: "Distancia", en: "Distance" },
    description: {
      es: "Voces, relaciones y lugares separados por tiempo o espacio.",
      en: "Voices, relationships, and places separated by time or space.",
    },
    entries: ["Self Control", "Provider", "Dear April", "Cayendo"],
  },
  {
    slug: "construccion",
    label: { es: "Construcción", en: "Construction" },
    description: {
      es: "Proceso, repetición y arquitectura como formas de independencia.",
      en: "Process, repetition, and architecture as forms of independence.",
    },
    entries: ["Endless", "At Your Best", "Rushes", "Higgs"],
  },
] as const;

export const editions = [
  {
    number: "01",
    year: "2026",
    date: "2026-07-29",
    status: { es: "Edición fundacional", en: "Foundational edition" },
    description: {
      es: "Rediseño editorial, archivo por eras, historia, fotografía acreditada y sistema bilingüe.",
      en: "Editorial redesign, era archive, history, credited photography, and bilingual system.",
    },
  },
  {
    number: "02",
    year: "2026",
    date: "2026-08-04",
    status: { es: "Edición actual", en: "Current edition" },
    description: {
      es: "Radio, objetos, índice emocional, búsqueda, modo de escucha, transmisiones aleatorias y deep links por era.",
      en: "Radio, objects, emotional index, search, listening mode, random transmissions, and era deep links.",
    },
  },
] as const;

export const randomTransmissions = [
  "/archivo/nostalgia-ultra",
  "/archivo/channel-orange",
  "/archivo/endless",
  "/archivo/blonde",
  "/archivo/singles",
  "/radio#blonded-001",
  "/radio#blonded-010",
  "/objetos#obj-004",
  "/explorar#memoria",
] as const;
