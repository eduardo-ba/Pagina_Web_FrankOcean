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
    "nav.explore": "Explorar",
    "nav.credits": "Créditos",
    "footer.collection": "Colección digital en español",
    "footer.noticePrimary": "Archivo no oficial, personal y no comercial.",
    "footer.noticeSecondary": "Sin afiliación con el artista.",
    "footer.archive": "Edición 02",
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
    "meta.radio.title": "blonded RADIO — Archivo Visual Blonded",
    "meta.radio.description":
      "Índice editorial de transmisiones y episodios de blonded RADIO.",
    "meta.explore.title": "Explorar — Archivo Visual Blonded",
    "meta.explore.description":
      "Busca el archivo por emoción, obra, año, transmisión y objeto.",
    "meta.objects.title": "Objetos — Archivo Visual Blonded",
    "meta.objects.description":
      "Cubiertas, fotogramas, retratos y objetos digitales conservados en el archivo.",
    "meta.editions.title": "Ediciones — Archivo Visual Blonded",
    "meta.editions.description":
      "Registro de versiones, cambios y nuevas capas del Archivo Visual Blonded.",
    "meta.era-nostalgia-ultra.title":
      "Nostalgia, Ultra — Archivo Visual Blonded",
    "meta.era-nostalgia-ultra.description":
      "Registro editorial de Nostalgia, Ultra: memoria, carretera y escape.",
    "meta.era-channel-orange.title": "Channel Orange — Archivo Visual Blonded",
    "meta.era-channel-orange.description":
      "Registro editorial de Channel Orange: deseo, soledad y narración cinematográfica.",
    "meta.era-endless.title": "Endless — Archivo Visual Blonded",
    "meta.era-endless.description":
      "Registro editorial de Endless: proceso, arquitectura e independencia.",
    "meta.era-blonde.title": "Blonde — Archivo Visual Blonded",
    "meta.era-blonde.description":
      "Registro editorial de Blonde: memoria, distancia y tiempo fragmentado.",
    "meta.era-singles.title": "Señales — Archivo Visual Blonded",
    "meta.era-singles.description":
      "Archivo de sencillos y transmisiones posteriores a Blonde.",
    "meta.socialImageAlt":
      "Archivo Visual Blonded — archivo visual no oficial sobre las eras de Frank Ocean",
    "home.heroAlt": "Collage editorial inspirado en la era Blonde",
    "home.heroPortraitAlt":
      "Retrato frontal de Frank Ocean sobre un campo azul",
    "home.heroMeta": "Archivo personal no oficial",
    "home.heroPresent": "2011—presente / ES",
    "home.edition": "Edición 02",
    "home.editionTopics": "Radio / objetos / memoria",
    "home.open": "Abrir archivo",
    "home.editorNote": "Nota del editor / 001",
    "home.archiveSignature": "BVA / Archivo personal",
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
    "home.iframeTitle": "Frank Ocean — Pyramids, audio oficial en YouTube",
    "home.transmissionCaption":
      "channel ORANGE / 2012 / The Island Def Jam Music Group",
    "archive.introIndex": "02 / 05 registros",
    "archive.introEyebrow": "Discografía como secuencia editorial",
    "archive.introTitle": "El archivo es la historia.",
    "archive.introDescription":
      "Cinco registros, ordenados por temperatura y memoria. Cada obra abre un lenguaje visual propio dentro de una misma colección.",
    "archive.chapterNavAria": "Saltar a una era",
    "archive.sequenceAria": "Proyectos por era",
    "archive.assetLabel": "Nota de inventario / medios",
    "archive.assetBody":
      "Portadas de la colección y fotografía acreditada conviven como documentos de cada era. Los nuevos originales se sirven localmente y se optimizan con astro:assets, sin hotlinks.",
    "common.selection": "Selección",
    "common.listen": "Escuchar",
    "common.openRecord": "Abrir registro",
    "common.officialSource": "Fuente oficial",
    "common.nextRecord": "Siguiente registro",
    "common.trackIndex": "Índice de piezas",
    "common.emotionalTags": "Índice emocional",
    "common.privateNote": "Abrir nota del editor",
    "radio.introIndex": "05 / Transmisiones",
    "radio.introEyebrow": "Apple Music 1 / archivo radiofónico",
    "radio.introTitle": "La radio también es la obra.",
    "radio.introDescription":
      "Episodios conservados como secuencias de selección, conversación, invitados y nuevas señales.",
    "radio.sequenceAria": "Episodios seleccionados de blonded RADIO",
    "radio.openEpisode": "Abrir en Apple Music",
    "radio.sourceNote":
      "Los episodios se enlazan a su catálogo oficial. Este archivo no aloja ni reproduce audio.",
    "explore.introIndex": "06 / Mesa de consulta",
    "explore.introEyebrow": "Buscar / cruzar / recordar",
    "explore.roomsAria": "Salas del archivo",
    "explore.introTitle": "Entra por cualquier señal.",
    "explore.introDescription":
      "Una mesa de consulta para recorrer eras, canciones, radio, objetos y emociones sin seguir una cronología.",
    "explore.searchLabel": "Buscar en el archivo",
    "explore.searchPlaceholder": "Ej. memoria, Blonde, 2017…",
    "explore.searchHint": "Los resultados cambian con el idioma seleccionado.",
    "explore.noResults": "No hay registros para esa búsqueda.",
    "explore.randomLabel": "Transmisión aleatoria",
    "explore.randomTitle": "Romper el orden.",
    "explore.randomBody":
      "Abre una era, episodio, objeto o emoción sin saber cuál viene después.",
    "explore.randomButton": "Abrir señal aleatoria",
    "explore.emotionLabel": "Índice emocional / 05 entradas",
    "explore.emotionTitle": "Escuchar por sensación.",
    "explore.listeningLabel": "Modo de escucha / sin autoplay",
    "explore.listeningTitle": "Cambiar la temperatura.",
    "explore.listeningBody":
      "Elige una pieza para alterar el ambiente visual. El audio solo se abre cuando tú lo decides.",
    "explore.listeningActive": "Selección activa",
    "explore.listenExternal": "Escuchar fuera del archivo",
    "explore.notesLabel": "Notas personales / acceso discreto",
    "explore.notesTitle": "Lo que queda entre registros.",
    "objects.introIndex": "07 / Objetos",
    "objects.introEyebrow": "Cubiertas / imágenes / documentos",
    "objects.introTitle": "La música también deja superficies.",
    "objects.introDescription":
      "Diez objetos visuales tratados como evidencia material de una colección digital.",
    "objects.collectionAria": "Objetos del archivo visual",
    "editions.introIndex": "08 / Versiones",
    "editions.introEyebrow": "Archivo vivo / registro de cambios",
    "editions.introTitle": "Cada edición abre otra puerta.",
    "editions.introDescription":
      "El archivo conserva sus cambios para que el proceso también forme parte de la publicación.",
    "editions.current": "Actual",
    "editions.openExplore": "Explorar la edición 02",
    "eraDetail.back": "Volver al archivo completo",
    "eraDetail.contextLabel": "Lectura editorial",
    "eraDetail.fieldNote": "Documento de campo / contexto visual",
    "eraDetail.singlesLabel": "Sencillos / selección verificada",
    "era.nostalgia-ultra.title": "Nostalgia, Ultra",
    "era.nostalgia-ultra.category": "Mixtape / registro 001",
    "era.nostalgia-ultra.alt":
      "Automóvil naranja de la portada de Nostalgia, Ultra",
    "era.nostalgia-ultra.supportAlt":
      "Frank Ocean de perfil en un evento de escucha de 2011",
    "era.nostalgia-ultra.supportCaption":
      "Los Ángeles / 2011 / fotografía de Dave Gold / CC BY-SA 2.0",
    "era.nostalgia-ultra.caption": "2011 / Mixtape / registro 001",
    "era.nostalgia-ultra.description":
      "Una cinta de carretera hecha de memoria, confesión y cultura pop. El primer registro que convirtió una voz privada en señal pública.",
    "era.channel-orange.title": "Channel Orange",
    "era.channel-orange.category": "Álbum de estudio / registro 002",
    "era.channel-orange.alt": "Campo naranja de la portada de Channel Orange",
    "era.channel-orange.supportAlt":
      "Frank Ocean señalando al público durante Coachella 2012",
    "era.channel-orange.supportCaption":
      "Coachella / 2012 / fotografía de David Hwang / CC BY 2.0",
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
    "era.blonde.supportAlt":
      "Frank Ocean actuando frente al público de Flow Festival al atardecer",
    "era.blonde.supportCaption":
      "Flow Festival / 2017 / fotografía de Kallerna / CC BY-SA 4.0",
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
    "history.introEyebrow": "Frank Ocean / Long Beach, 1987",
    "history.introTitle": "Una voz fuera del tiempo.",
    "history.introDescription":
      "No una biografía exhaustiva, sino siete cortes: lugares, obras y decisiones que cambiaron la escala de una voz.",
    "history.portraitAria": "Retrato de apertura",
    "history.portraitAlt":
      "Retrato vertical suavemente desenfocado de Frank Ocean cantando en Wireless Festival 2013",
    "history.roles": "Cantante / compositor / productor",
    "history.route": "Long Beach → Nueva Orleans → Los Ángeles",
    "history.yearIndexAria": "Índice de años",
    "history.sequenceAria": "Momentos en la trayectoria",
    "history.cut": "Corte",
    "history.year.1987.title": "Long Beach / Nueva Orleans",
    "history.year.1987.text":
      "Nacido Christopher Edwin Breaux en Long Beach el 28 de octubre de 1987, creció principalmente en Nueva Orleans. Después del huracán Katrina se trasladó a Los Ángeles para continuar su carrera musical.",
    "history.year.2008.title": "Componer desde el margen",
    "history.year.2008.text":
      "Antes de ocupar el centro del encuadre, escribió para artistas como Brandy, Justin Bieber y John Legend. En 2010 se vinculó con el colectivo Odd Future.",
    "history.year.2011.title": "La señal se vuelve pública",
    "history.year.2011.text":
      "Nostalgia, Ultra apareció en febrero de 2011 como una descarga gratuita y autoeditada: confesión, ficción y cultura popular ensambladas con una precisión nueva.",
    "history.year.2012.title": "Channel Orange",
    "history.year.2012.text":
      "El debut de estudio convirtió deseo, privilegio y soledad en escenas cinematográficas. El álbum amplió la escala sin perder intimidad narrativa.",
    "history.year.2013.title": "La voz ocupa el vacío",
    "history.year.2013.text":
      "En directo, la producción podía reducirse a una figura, un micrófono y una gran zona de silencio. La imagen registra esa tensión entre exposición y distancia.",
    "history.year.2016.title": "Dos obras / una ruptura",
    "history.year.2016.text":
      "Endless apareció el 19 de agosto de 2016 y Blonde al día siguiente. La primera es una obra visual; la segunda, su segundo álbum de estudio, fue publicada por Boys Don't Cry.",
    "history.year.2017.title": "La obra vuelve al escenario",
    "history.year.2017.text":
      "Después de Blonde, los conciertos hicieron visible una nueva escala: arreglos cambiantes, una puesta en escena contenida y canciones que seguían transformándose en público.",
    "history.playlistAlt": "Arte de una selección personal de canciones",
    "history.playlistCaption": "Selección personal / registro de escucha",
    "history.collageAlt": "Collage editorial asociado a Blonde",
    "history.collageCaption": "2016 / Endless + Blonde",
    "history.coachellaAlt":
      "Frank Ocean actuando con su banda bajo luces azules en Coachella 2012",
    "history.coachellaCaption":
      "Coachella / 2012 / fotografía de David Hwang / CC BY 2.0",
    "history.listening2011Alt":
      "Frank Ocean de perfil entre asistentes a un evento de escucha en 2011",
    "history.listening2011Caption":
      "Los Ángeles / 2011 / fotografía de Dave Gold / CC BY-SA 2.0",
    "history.wirelessWideAlt":
      "Frank Ocean cantando bajo un amplio campo azul en Wireless Festival 2013",
    "history.wirelessWideCaption":
      "Wireless Festival / 2013 / fotografía de RJ Photos UK / CC BY 2.0",
    "history.flowAlt":
      "Frank Ocean actuando frente al público de Flow Festival al atardecer",
    "history.flowCaption":
      "Flow Festival / 2017 / fotografía de Kallerna / CC BY-SA 4.0",
    "history.closeLabel": "Cierre abierto",
    "history.closeBody":
      "La independencia no aparece aquí como punto final, sino como método: publicar menos, decidir más y dejar espacio para que cada obra cambie con quien la escucha.",
    "credits.introIndex": "04 / Colofón",
    "credits.introEyebrow": "Notas del archivo / edición 02",
    "credits.introTitle": "Créditos, contexto y cuidado.",
    "credits.introDescription":
      "Una colección construida desde la escucha personal. Código, selección y dirección visual reunidos en una edición independiente.",
    "credits.authorLabel": "Editor / diseñador / desarrollo",
    "credits.authorTitle": "Edición independiente.",
    "credits.byline": "Edición y desarrollo",
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
      "Las portadas, música y nombres pertenecen a sus respectivos titulares. La fotografía con licencia abierta se atribuye a continuación; el resto se muestra con propósito editorial dentro de un proyecto personal.",
    "credits.photographyLabel": "Fotografía / fuentes abiertas",
    "credits.photographyTitle": "Autores y licencias.",
    "credits.photographyBody":
      "Siete fotografías descargadas de Wikimedia Commons, conservadas como assets locales y presentadas sin sugerir respaldo de sus autores.",
    "credits.photoSource": "Ficha original ↗",
    "credits.factLabel": "Fuentes / verificación factual",
    "credits.factTitle": "Datos con respaldo.",
    "credits.factBody":
      "La cronología, los nombres y el catálogo se contrastaron con fuentes oficiales y una entrevista contemporánea. Las notas emocionales siguen siendo lectura editorial.",
    "credits.factArtist": "Biografía oficial / catálogo / fechas",
    "credits.factGrammy": "Nombre / nacimiento / debut / premios",
    "credits.factUniversal": "Nombre de nacimiento / composición / Odd Future",
    "credits.factGuardian": "Katrina / Los Ángeles / autoedición",
    "credits.factRadio": "Nombres y episodios oficiales",
    "credits.factPyramids": "Audio / créditos fonográficos",
    "credits.factOpen": "Abrir fuente ↗",
    "credits.editionLabel": "Edición",
    "credits.location": "01 / Mazatlán, México",
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
    "nav.explore": "Explore",
    "nav.credits": "Credits",
    "footer.collection": "Digital collection in English",
    "footer.noticePrimary": "Unofficial, personal, non-commercial archive.",
    "footer.noticeSecondary": "Not affiliated with the artist.",
    "footer.archive": "Edition 02",
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
    "meta.radio.title": "blonded RADIO — Blonded Visual Archive",
    "meta.radio.description":
      "An editorial index of blonded RADIO broadcasts and episodes.",
    "meta.explore.title": "Explore — Blonded Visual Archive",
    "meta.explore.description":
      "Search the archive by emotion, work, year, transmission, and object.",
    "meta.objects.title": "Objects — Blonded Visual Archive",
    "meta.objects.description":
      "Sleeves, stills, portraits, and digital objects preserved in the archive.",
    "meta.editions.title": "Editions — Blonded Visual Archive",
    "meta.editions.description":
      "A record of versions, changes, and new layers in Blonded Visual Archive.",
    "meta.era-nostalgia-ultra.title":
      "Nostalgia, Ultra — Blonded Visual Archive",
    "meta.era-nostalgia-ultra.description":
      "An editorial record of Nostalgia, Ultra: memory, road, and escape.",
    "meta.era-channel-orange.title": "Channel Orange — Blonded Visual Archive",
    "meta.era-channel-orange.description":
      "An editorial record of Channel Orange: desire, isolation, and cinematic narrative.",
    "meta.era-endless.title": "Endless — Blonded Visual Archive",
    "meta.era-endless.description":
      "An editorial record of Endless: process, architecture, and independence.",
    "meta.era-blonde.title": "Blonde — Blonded Visual Archive",
    "meta.era-blonde.description":
      "An editorial record of Blonde: memory, distance, and fractured time.",
    "meta.era-singles.title": "Signals — Blonded Visual Archive",
    "meta.era-singles.description":
      "An archive of singles and transmissions released after Blonde.",
    "meta.socialImageAlt":
      "Blonded Visual Archive — an unofficial visual archive of Frank Ocean's eras",
    "home.heroAlt": "Editorial collage inspired by the Blonde era",
    "home.heroPortraitAlt":
      "Front-facing portrait of Frank Ocean against a blue field",
    "home.heroMeta": "Unofficial personal archive",
    "home.heroPresent": "2011—present / EN",
    "home.edition": "Edition 02",
    "home.editionTopics": "Radio / objects / memory",
    "home.open": "Open archive",
    "home.editorNote": "Editor's note / 001",
    "home.archiveSignature": "BVA / Personal archive",
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
    "home.iframeTitle": "Frank Ocean — Pyramids, official audio on YouTube",
    "home.transmissionCaption":
      "channel ORANGE / 2012 / The Island Def Jam Music Group",
    "archive.introIndex": "02 / 05 records",
    "archive.introEyebrow": "Discography as editorial sequence",
    "archive.introTitle": "The archive is the story.",
    "archive.introDescription":
      "Five records, ordered by temperature and memory. Each work opens its own visual language within the same collection.",
    "archive.chapterNavAria": "Jump to an era",
    "archive.sequenceAria": "Projects by era",
    "archive.assetLabel": "Inventory note / media",
    "archive.assetBody":
      "Collection covers and credited photography coexist as documents of each era. The new originals are served locally and optimized with astro:assets, with no hotlinks.",
    "common.selection": "Selection",
    "common.listen": "Listen",
    "common.openRecord": "Open record",
    "common.officialSource": "Official source",
    "common.nextRecord": "Next record",
    "common.trackIndex": "Track index",
    "common.emotionalTags": "Emotional index",
    "common.privateNote": "Open editor's note",
    "radio.introIndex": "05 / Transmissions",
    "radio.introEyebrow": "Apple Music 1 / radio archive",
    "radio.introTitle": "The radio is also the work.",
    "radio.introDescription":
      "Episodes preserved as sequences of selection, conversation, guests, and new signals.",
    "radio.sequenceAria": "Selected blonded RADIO episodes",
    "radio.openEpisode": "Open in Apple Music",
    "radio.sourceNote":
      "Episodes link to their official catalog. This archive does not host or play audio.",
    "explore.introIndex": "06 / Reading room",
    "explore.introEyebrow": "Search / cross / remember",
    "explore.roomsAria": "Archive rooms",
    "explore.introTitle": "Enter through any signal.",
    "explore.introDescription":
      "A reading room for moving through eras, songs, radio, objects, and emotions without following chronology.",
    "explore.searchLabel": "Search the archive",
    "explore.searchPlaceholder": "Try memory, Blonde, 2017…",
    "explore.searchHint": "Results follow the selected language.",
    "explore.noResults": "No records match that search.",
    "explore.randomLabel": "Random transmission",
    "explore.randomTitle": "Break the order.",
    "explore.randomBody":
      "Open an era, episode, object, or emotion without knowing what comes next.",
    "explore.randomButton": "Open random signal",
    "explore.emotionLabel": "Emotional index / 05 entries",
    "explore.emotionTitle": "Listen by feeling.",
    "explore.listeningLabel": "Listening mode / no autoplay",
    "explore.listeningTitle": "Change the temperature.",
    "explore.listeningBody":
      "Choose a piece to alter the visual atmosphere. Audio opens only when you decide.",
    "explore.listeningActive": "Active selection",
    "explore.listenExternal": "Listen outside the archive",
    "explore.notesLabel": "Personal notes / discreet access",
    "explore.notesTitle": "What remains between records.",
    "objects.introIndex": "07 / Objects",
    "objects.introEyebrow": "Sleeves / images / documents",
    "objects.introTitle": "Music also leaves surfaces.",
    "objects.introDescription":
      "Ten visual objects treated as material evidence inside a digital collection.",
    "objects.collectionAria": "Objects in the visual archive",
    "editions.introIndex": "08 / Versions",
    "editions.introEyebrow": "Living archive / change log",
    "editions.introTitle": "Each edition opens another door.",
    "editions.introDescription":
      "The archive preserves its changes so that process also becomes part of the publication.",
    "editions.current": "Current",
    "editions.openExplore": "Explore edition 02",
    "eraDetail.back": "Return to the complete archive",
    "eraDetail.contextLabel": "Editorial reading",
    "eraDetail.fieldNote": "Field document / visual context",
    "eraDetail.singlesLabel": "Singles / verified selection",
    "era.nostalgia-ultra.title": "Nostalgia, Ultra",
    "era.nostalgia-ultra.category": "Mixtape / record 001",
    "era.nostalgia-ultra.alt": "Orange car on the cover of Nostalgia, Ultra",
    "era.nostalgia-ultra.supportAlt":
      "Frank Ocean in profile at a 2011 listening event",
    "era.nostalgia-ultra.supportCaption":
      "Los Angeles / 2011 / photograph by Dave Gold / CC BY-SA 2.0",
    "era.nostalgia-ultra.caption": "2011 / Mixtape / record 001",
    "era.nostalgia-ultra.description":
      "A road tape made of memory, confession, and pop culture. The first record to turn a private voice into a public signal.",
    "era.channel-orange.title": "Channel Orange",
    "era.channel-orange.category": "Studio album / record 002",
    "era.channel-orange.alt": "Orange field on the Channel Orange cover",
    "era.channel-orange.supportAlt":
      "Frank Ocean pointing toward the audience at Coachella 2012",
    "era.channel-orange.supportCaption":
      "Coachella / 2012 / photograph by David Hwang / CC BY 2.0",
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
    "era.blonde.supportAlt":
      "Frank Ocean performing before the Flow Festival crowd at dusk",
    "era.blonde.supportCaption":
      "Flow Festival / 2017 / photograph by Kallerna / CC BY-SA 4.0",
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
    "history.introEyebrow": "Frank Ocean / Long Beach, 1987",
    "history.introTitle": "A voice outside time.",
    "history.introDescription":
      "Not an exhaustive biography, but seven cuts: places, works, and decisions that changed the scale of a voice.",
    "history.portraitAria": "Opening portrait",
    "history.portraitAlt":
      "Softly blurred vertical portrait of Frank Ocean performing at Wireless Festival 2013",
    "history.roles": "Singer / songwriter / producer",
    "history.route": "Long Beach → New Orleans → Los Angeles",
    "history.yearIndexAria": "Year index",
    "history.sequenceAria": "Moments in the creative path",
    "history.cut": "Cut",
    "history.year.1987.title": "Long Beach / New Orleans",
    "history.year.1987.text":
      "Born Christopher Edwin Breaux in Long Beach on October 28, 1987, he was raised mostly in New Orleans. After Hurricane Katrina, he moved to Los Angeles to continue his music career.",
    "history.year.2008.title": "Writing from the margins",
    "history.year.2008.text":
      "Before stepping into the center of the frame, he wrote for artists including Brandy, Justin Bieber, and John Legend. In 2010, he became affiliated with Odd Future.",
    "history.year.2011.title": "The signal goes public",
    "history.year.2011.text":
      "Nostalgia, Ultra arrived in February 2011 as a free, self-released download: confession, fiction, and pop culture assembled with newfound precision.",
    "history.year.2012.title": "Channel Orange",
    "history.year.2012.text":
      "The studio debut turned desire, privilege, and loneliness into cinematic scenes. The album expanded the scale without losing narrative intimacy.",
    "history.year.2013.title": "The voice occupies the void",
    "history.year.2013.text":
      "Live, the production could contract to one figure, one microphone, and a large field of silence. The image records that tension between exposure and distance.",
    "history.year.2016.title": "Two works / one break",
    "history.year.2016.text":
      "Endless arrived on August 19, 2016, and Blonde followed the next day. The former is a visual work; the latter, his second studio album, was released by Boys Don't Cry.",
    "history.year.2017.title": "The work returns to the stage",
    "history.year.2017.text":
      "After Blonde, live performances revealed a new scale: changing arrangements, restrained staging, and songs that continued to transform in public.",
    "history.playlistAlt": "Artwork for a personal song selection",
    "history.playlistCaption": "Personal selection / listening record",
    "history.collageAlt": "Editorial collage associated with Blonde",
    "history.collageCaption": "2016 / Endless + Blonde",
    "history.coachellaAlt":
      "Frank Ocean performing with his band under blue lights at Coachella 2012",
    "history.coachellaCaption":
      "Coachella / 2012 / photograph by David Hwang / CC BY 2.0",
    "history.listening2011Alt":
      "Frank Ocean in profile among attendees at a 2011 listening event",
    "history.listening2011Caption":
      "Los Angeles / 2011 / photograph by Dave Gold / CC BY-SA 2.0",
    "history.wirelessWideAlt":
      "Frank Ocean singing beneath a wide blue field at Wireless Festival 2013",
    "history.wirelessWideCaption":
      "Wireless Festival / 2013 / photograph by RJ Photos UK / CC BY 2.0",
    "history.flowAlt":
      "Frank Ocean performing before the Flow Festival crowd at dusk",
    "history.flowCaption":
      "Flow Festival / 2017 / photograph by Kallerna / CC BY-SA 4.0",
    "history.closeLabel": "Open ending",
    "history.closeBody":
      "Independence appears here not as a final point, but as a method: release less, decide more, and leave room for every work to change with its listener.",
    "credits.introIndex": "04 / Colophon",
    "credits.introEyebrow": "Archive notes / edition 02",
    "credits.introTitle": "Credits, context & care.",
    "credits.introDescription":
      "A collection built through personal listening. Code, selection, and visual direction gathered in an independent edition.",
    "credits.authorLabel": "Editor / designer / development",
    "credits.authorTitle": "Independent edition.",
    "credits.byline": "Editing and development",
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
      "Covers, music, and names belong to their respective rights holders. Openly licensed photography is attributed below; the rest appears for editorial purposes within a personal project.",
    "credits.photographyLabel": "Photography / open sources",
    "credits.photographyTitle": "Authors & licenses.",
    "credits.photographyBody":
      "Seven photographs downloaded from Wikimedia Commons, stored as local assets, and presented without implying endorsement by their authors.",
    "credits.photoSource": "Original file ↗",
    "credits.factLabel": "Sources / fact checking",
    "credits.factTitle": "Claims with support.",
    "credits.factBody":
      "The timeline, names, and catalog were checked against official sources and a contemporary interview. Emotional notes remain editorial readings.",
    "credits.factArtist": "Official biography / catalog / dates",
    "credits.factGrammy": "Name / birth / debut / awards",
    "credits.factUniversal": "Birth name / songwriting / Odd Future",
    "credits.factGuardian": "Katrina / Los Angeles / self-release",
    "credits.factRadio": "Official episode names and catalog",
    "credits.factPyramids": "Audio / phonographic credits",
    "credits.factOpen": "Open source ↗",
    "credits.editionLabel": "Edition",
    "credits.location": "01 / Mazatlán, Mexico",
  },
};
