export type Language = "es" | "en";

export const translations: Record<Language, Record<string, string>> = {
  es: {
    "brand.name": "Archivo Visual Blonded",
    "brand.primary": "Archivo Visual",
    "brand.secondary": "Blonded",
    "global.skip": "Saltar al contenido",
    "global.brandHome": "Archivo Visual Blonded, ir a portada",
    "global.navAria": "Navegación del archivo",
    "global.languageAria": "Idioma del sitio",
    "nav.cover": "Portada",
    "nav.archive": "Archivo",
    "nav.history": "Historia",
    "nav.credits": "Créditos",
    "footer.collection": "Colección digital en español",
    "footer.noticePrimary": "Archivo no oficial, personal y no comercial.",
    "footer.noticeSecondary": "Sin afiliación con el artista.",
    "footer.archive": "Archivo 01",
    "footer.back": "Volver arriba",
    "meta.home.title": "Archivo Visual Blonded",
    "meta.home.description":
      "Archivo Visual Blonded: colección personal, no oficial y no comercial sobre la obra y las eras de Frank Ocean.",
    "meta.archive.title": "Archivo — Archivo Visual Blonded",
    "meta.archive.description":
      "Cinco capítulos visuales recorren los proyectos, eras y transmisiones de Frank Ocean.",
    "meta.history.title": "Historia — Archivo Visual Blonded",
    "meta.history.description":
      "Una secuencia editorial por momentos decisivos en la trayectoria creativa de Frank Ocean.",
    "meta.credits.title": "Créditos — Archivo Visual Blonded",
    "meta.credits.description":
      "Colofón, intención, créditos y enlaces del Archivo Visual Blonded.",
    "home.heroAlt": "Collage editorial inspirado en la era Blonde",
    "home.heroMeta": "Archivo personal no oficial",
    "home.heroPresent": "2011—presente / ES",
    "home.edition": "Edición 01",
    "home.editionTopics": "Memoria / sonido / imagen",
    "home.open": "Abrir archivo",
    "home.editorNote": "Nota del editor / 001",
    "home.manifestoQuote":
      "Un registro de las canciones que dieron forma al tiempo, y de los recuerdos que ahora viven dentro de ellas.",
    "home.manifestoBody":
      "Archivo Visual Blonded reúne obras, imágenes y transmisiones desde una mirada personal. No es una cronología definitiva: es una colección en proceso.",
    "home.eraLabel": "Índice cromático / cinco registros",
    "home.eraTitle": "Eras en archivo",
    "home.transmissionLabel": "Transmisión seleccionada / 09:53",
    "home.transmissionBody":
      "Del mito a Las Vegas en dos movimientos. Una pieza donde producción, personaje y tiempo cambian de forma sin romper la narración.",
    "home.transmissionLink": "Ver transmisión",
    "home.iframeTitle": "Frank Ocean — Pyramids, video musical",
    "home.transmissionCaption": "Channel Orange / 2012 / Def Jam Recordings",
    "archive.introIndex": "02 / 05 registros",
    "archive.introEyebrow": "Discografía como secuencia editorial",
    "archive.introTitle": "El archivo es la historia.",
    "archive.introDescription":
      "Cinco registros, ordenados por temperatura y memoria. Cada obra abre un lenguaje visual propio dentro de una misma colección.",
    "archive.chapterNavAria": "Saltar a una era",
    "archive.sequenceAria": "Proyectos por era",
    "archive.assetLabel": "Nota de inventario / medios",
    "archive.assetBody":
      "Esta edición utiliza las ocho imágenes locales disponibles. Para una siguiente versión conviene sumar fotografías panorámicas acreditadas de cada era y fotogramas propios para ampliar la narrativa sin repetir portadas.",
    "common.selection": "Selección",
    "common.listen": "Escuchar",
    "era.nostalgia-ultra.title": "Nostalgia, Ultra",
    "era.nostalgia-ultra.category": "Mixtape / registro 001",
    "era.nostalgia-ultra.alt":
      "Automóvil naranja de la portada de Nostalgia, Ultra",
    "era.nostalgia-ultra.caption": "2011 / Mixtape / registro 001",
    "era.nostalgia-ultra.description":
      "Una cinta de carretera hecha de memoria, confesión y cultura pop. El primer registro que convirtió una voz privada en señal pública.",
    "era.channel-orange.title": "Channel Orange",
    "era.channel-orange.category": "Álbum de estudio / registro 002",
    "era.channel-orange.alt": "Campo naranja de la portada de Channel Orange",
    "era.channel-orange.caption": "2012 / Álbum de estudio / registro 002",
    "era.channel-orange.description":
      "Viñetas de deseo, privilegio y soledad reunidas como escenas de una película. Un dial cálido que cambia de estación sin perder la historia.",
    "era.endless.title": "Endless",
    "era.endless.category": "Álbum visual / registro 003",
    "era.endless.alt": "Escena monocromática del álbum visual Endless",
    "era.endless.caption": "2016 / Álbum visual / registro 003",
    "era.endless.description":
      "Trabajo, repetición y arquitectura en blanco y negro. Una construcción audiovisual que funciona como umbral entre contrato e independencia.",
    "era.blonde.title": "Blonde",
    "era.blonde.category": "Álbum de estudio / registro 004",
    "era.blonde.alt": "Retrato con el rostro cubierto en la portada de Blonde",
    "era.blonde.caption": "2016 / Álbum de estudio / registro 004",
    "era.blonde.description":
      "Voces que cambian de forma, recuerdos fuera de foco y tiempo partido. Una obra íntima donde la ausencia también ocupa espacio.",
    "era.singles.title": "Señales después de Blonde",
    "era.singles.category": "Sencillos / registro 005",
    "era.singles.alt":
      "Composición gráfica inspirada en sencillos posteriores a Blonde",
    "era.singles.caption": "2017—2020 / Sencillos / registro 005",
    "era.singles.description":
      "Piezas sueltas, transmisiones y portadas como fichas de un archivo todavía abierto. Cada lanzamiento cambia el acento, no la voz.",
    "history.introIndex": "03 / Historia oral",
    "history.introEyebrow": "Christopher Francis Ocean",
    "history.introTitle": "Una voz fuera del tiempo.",
    "history.introDescription":
      "No una biografía exhaustiva, sino cinco cortes: lugares, obras y decisiones que cambiaron la escala de una voz.",
    "history.portraitAria": "Retrato de apertura",
    "history.portraitAlt": "Retrato de Frank Ocean sobre fondo azul",
    "history.roles": "Cantante / compositor / productor",
    "history.route": "Nueva Orleans → Los Ángeles",
    "history.yearIndexAria": "Índice de años",
    "history.sequenceAria": "Momentos en la trayectoria",
    "history.cut": "Corte",
    "history.year.1987.title": "Nueva Orleans / primeras grabaciones",
    "history.year.1987.text":
      "Christopher Edwin Breaux creció en Nueva Orleans, rodeado por la tradición musical de la ciudad. Después del huracán Katrina se trasladó a Los Ángeles para continuar grabando.",
    "history.year.2008.title": "Componer desde el margen",
    "history.year.2008.text":
      "Antes de ocupar el centro del encuadre, escribió para otros artistas, desarrolló una voz propia y se acercó al colectivo Odd Future.",
    "history.year.2011.title": "La señal se vuelve pública",
    "history.year.2011.text":
      "Nostalgia, Ultra apareció como una transmisión gratuita: confesión, ficción y cultura popular ensambladas con una precisión nueva.",
    "history.year.2012.title": "Channel Orange",
    "history.year.2012.text":
      "El debut de estudio convirtió deseo, privilegio y soledad en escenas cinematográficas. El álbum amplió la escala sin perder intimidad narrativa.",
    "history.year.2016.title": "Dos obras / una ruptura",
    "history.year.2016.text":
      "Endless y Blonde llegaron en días consecutivos. El primero cerró una etapa; el segundo desarmó estructuras de canción y consolidó una independencia creativa radical.",
    "history.playlistAlt": "Arte de una selección personal de canciones",
    "history.playlistCaption": "Selección personal / registro de escucha",
    "history.collageAlt": "Collage editorial asociado a Blonde",
    "history.collageCaption": "2016 / Endless + Blonde",
    "history.closeLabel": "Cierre abierto",
    "history.closeBody":
      "La independencia no aparece aquí como punto final, sino como método: publicar menos, decidir más y dejar espacio para que cada obra cambie con quien la escucha.",
    "credits.introIndex": "04 / Colofón",
    "credits.introEyebrow": "Notas del archivo / edición 01",
    "credits.introTitle": "Créditos, contexto y cuidado.",
    "credits.introDescription":
      "Una colección construida desde la escucha personal. Código, selección y dirección visual por Luis Eduardo Barrón Álvarez.",
    "credits.authorLabel": "Editor / diseñador / desarrollo",
    "credits.authorBody":
      "El archivo reúne proyectos, imágenes y recuerdos alrededor de la música de Frank Ocean. Su intención es cultural y personal: ordenar una relación con las canciones, no representar al artista.",
    "credits.linksAria": "Enlaces del proyecto",
    "credits.codeLabel": "01 / Código y proyectos",
    "credits.listeningLabel": "02 / Registro de escucha",
    "credits.returnLabel": "03 / Volver a la colección",
    "credits.archive": "Archivo",
    "credits.systemLabel": "Sistema",
    "credits.systemBody":
      "Astro estático / TypeScript / CSS nativo / astro:assets",
    "credits.characterLabel": "Carácter",
    "credits.characterBody":
      "Archivo no oficial, personal y no comercial. Sin afiliación con Frank Ocean.",
    "credits.rightsLabel": "Derechos",
    "credits.rightsBody":
      "Las imágenes, portadas, música y nombres pertenecen a sus respectivos titulares. Se muestran aquí con propósito editorial dentro de un proyecto personal.",
    "credits.editionLabel": "Edición",
    "credits.location": "01 / Chihuahua, México",
  },
  en: {
    "brand.name": "Blonded Visual Archive",
    "brand.primary": "Blonded",
    "brand.secondary": "Visual Archive",
    "global.skip": "Skip to content",
    "global.brandHome": "Blonded Visual Archive, go to cover",
    "global.navAria": "Archive navigation",
    "global.languageAria": "Site language",
    "nav.cover": "Cover",
    "nav.archive": "Archive",
    "nav.history": "History",
    "nav.credits": "Credits",
    "footer.collection": "Digital collection in English",
    "footer.noticePrimary": "Unofficial, personal, non-commercial archive.",
    "footer.noticeSecondary": "Not affiliated with the artist.",
    "footer.archive": "Archive 01",
    "footer.back": "Back to top",
    "meta.home.title": "Blonded Visual Archive",
    "meta.home.description":
      "Blonded Visual Archive: a personal, unofficial, non-commercial collection about Frank Ocean's work and eras.",
    "meta.archive.title": "Archive — Blonded Visual Archive",
    "meta.archive.description":
      "Five visual chapters explore Frank Ocean's projects, eras, and transmissions.",
    "meta.history.title": "History — Blonded Visual Archive",
    "meta.history.description":
      "An editorial sequence through decisive moments in Frank Ocean's creative path.",
    "meta.credits.title": "Credits — Blonded Visual Archive",
    "meta.credits.description":
      "Colophon, intent, credits, and links for Blonded Visual Archive.",
    "home.heroAlt": "Editorial collage inspired by the Blonde era",
    "home.heroMeta": "Unofficial personal archive",
    "home.heroPresent": "2011—present / EN",
    "home.edition": "Edition 01",
    "home.editionTopics": "Memory / sound / image",
    "home.open": "Open archive",
    "home.editorNote": "Editor's note / 001",
    "home.manifestoQuote":
      "A record of the songs that shaped time, and of the memories that now live inside them.",
    "home.manifestoBody":
      "Blonded Visual Archive gathers works, images, and transmissions through a personal lens. It is not a definitive timeline: it is a collection in progress.",
    "home.eraLabel": "Chromatic index / five records",
    "home.eraTitle": "Eras on file",
    "home.transmissionLabel": "Selected transmission / 09:53",
    "home.transmissionBody":
      "From myth to Las Vegas in two movements. A piece where production, character, and time change shape without breaking the narrative.",
    "home.transmissionLink": "Watch transmission",
    "home.iframeTitle": "Frank Ocean — Pyramids, music video",
    "home.transmissionCaption": "Channel Orange / 2012 / Def Jam Recordings",
    "archive.introIndex": "02 / 05 records",
    "archive.introEyebrow": "Discography as editorial sequence",
    "archive.introTitle": "The archive is the story.",
    "archive.introDescription":
      "Five records, ordered by temperature and memory. Each work opens its own visual language within the same collection.",
    "archive.chapterNavAria": "Jump to an era",
    "archive.sequenceAria": "Projects by era",
    "archive.assetLabel": "Inventory note / media",
    "archive.assetBody":
      "This edition uses the eight available local images. A future version would benefit from credited panoramic photography and original stills for each era, expanding the narrative without repeating covers.",
    "common.selection": "Selection",
    "common.listen": "Listen",
    "era.nostalgia-ultra.title": "Nostalgia, Ultra",
    "era.nostalgia-ultra.category": "Mixtape / record 001",
    "era.nostalgia-ultra.alt": "Orange car on the cover of Nostalgia, Ultra",
    "era.nostalgia-ultra.caption": "2011 / Mixtape / record 001",
    "era.nostalgia-ultra.description":
      "A road tape made of memory, confession, and pop culture. The first record to turn a private voice into a public signal.",
    "era.channel-orange.title": "Channel Orange",
    "era.channel-orange.category": "Studio album / record 002",
    "era.channel-orange.alt": "Orange field on the Channel Orange cover",
    "era.channel-orange.caption": "2012 / Studio album / record 002",
    "era.channel-orange.description":
      "Vignettes of desire, privilege, and loneliness gathered like scenes from a film. A warm dial that changes stations without losing the story.",
    "era.endless.title": "Endless",
    "era.endless.category": "Visual album / record 003",
    "era.endless.alt": "Monochrome scene from the Endless visual album",
    "era.endless.caption": "2016 / Visual album / record 003",
    "era.endless.description":
      "Work, repetition, and architecture in black and white. An audiovisual construction that acts as a threshold between contract and independence.",
    "era.blonde.title": "Blonde",
    "era.blonde.category": "Studio album / record 004",
    "era.blonde.alt": "Portrait with a covered face on the Blonde cover",
    "era.blonde.caption": "2016 / Studio album / record 004",
    "era.blonde.description":
      "Voices changing shape, memories out of focus, and fractured time. An intimate work where absence also takes up space.",
    "era.singles.title": "Signals After Blonde",
    "era.singles.category": "Singles / record 005",
    "era.singles.alt":
      "Graphic composition inspired by singles released after Blonde",
    "era.singles.caption": "2017—2020 / Singles / record 005",
    "era.singles.description":
      "Loose pieces, transmissions, and covers filed as entries in an archive that remains open. Each release changes the accent, not the voice.",
    "history.introIndex": "03 / Oral history",
    "history.introEyebrow": "Christopher Francis Ocean",
    "history.introTitle": "A voice outside time.",
    "history.introDescription":
      "Not an exhaustive biography, but five cuts: places, works, and decisions that changed the scale of a voice.",
    "history.portraitAria": "Opening portrait",
    "history.portraitAlt": "Portrait of Frank Ocean against a blue background",
    "history.roles": "Singer / songwriter / producer",
    "history.route": "New Orleans → Los Angeles",
    "history.yearIndexAria": "Year index",
    "history.sequenceAria": "Moments in the creative path",
    "history.cut": "Cut",
    "history.year.1987.title": "New Orleans / first recordings",
    "history.year.1987.text":
      "Christopher Edwin Breaux grew up in New Orleans, surrounded by the city's musical tradition. After Hurricane Katrina, he moved to Los Angeles to continue recording.",
    "history.year.2008.title": "Writing from the margins",
    "history.year.2008.text":
      "Before stepping into the center of the frame, he wrote for other artists, developed his own voice, and joined the orbit of Odd Future.",
    "history.year.2011.title": "The signal goes public",
    "history.year.2011.text":
      "Nostalgia, Ultra arrived as a free transmission: confession, fiction, and pop culture assembled with newfound precision.",
    "history.year.2012.title": "Channel Orange",
    "history.year.2012.text":
      "The studio debut turned desire, privilege, and loneliness into cinematic scenes. The album expanded the scale without losing narrative intimacy.",
    "history.year.2016.title": "Two works / one break",
    "history.year.2016.text":
      "Endless and Blonde arrived on consecutive days. The first closed one chapter; the second dismantled song structures and cemented radical creative independence.",
    "history.playlistAlt": "Artwork for a personal song selection",
    "history.playlistCaption": "Personal selection / listening record",
    "history.collageAlt": "Editorial collage associated with Blonde",
    "history.collageCaption": "2016 / Endless + Blonde",
    "history.closeLabel": "Open ending",
    "history.closeBody":
      "Independence appears here not as a final point, but as a method: release less, decide more, and leave room for every work to change with its listener.",
    "credits.introIndex": "04 / Colophon",
    "credits.introEyebrow": "Archive notes / edition 01",
    "credits.introTitle": "Credits, context & care.",
    "credits.introDescription":
      "A collection built through personal listening. Code, selection, and visual direction by Luis Eduardo Barrón Álvarez.",
    "credits.authorLabel": "Editor / designer / development",
    "credits.authorBody":
      "The archive gathers projects, images, and memories around Frank Ocean's music. Its intent is cultural and personal: to organize a relationship with the songs, not to represent the artist.",
    "credits.linksAria": "Project links",
    "credits.codeLabel": "01 / Code and projects",
    "credits.listeningLabel": "02 / Listening record",
    "credits.returnLabel": "03 / Return to the collection",
    "credits.archive": "Archive",
    "credits.systemLabel": "System",
    "credits.systemBody":
      "Static Astro / TypeScript / native CSS / astro:assets",
    "credits.characterLabel": "Character",
    "credits.characterBody":
      "Unofficial, personal, non-commercial archive. Not affiliated with Frank Ocean.",
    "credits.rightsLabel": "Rights",
    "credits.rightsBody":
      "Images, covers, music, and names belong to their respective rights holders. They appear here for editorial purposes within a personal project.",
    "credits.editionLabel": "Edition",
    "credits.location": "01 / Chihuahua, Mexico",
  },
};
