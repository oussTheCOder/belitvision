export interface BlogPost {
  slug: string;
  category: string;
  date: string;
  title: { nl: string; en: string };
  excerpt: { nl: string; en: string };
  content: { nl: string[]; en: string[] };
  image?: string;
  imageAlt?: { nl: string; en: string };
}

export interface Category {
  slug: string;
  nl: string;
  en: string;
  description: { nl: string; en: string };
}

export const categories: Category[] = [
  {
    slug: "setup-guide",
    nl: "Installatiegids",
    en: "Setup Guide",
    description: {
      nl: "Stap-voor-stap installatiegidsen voor IPTV op al uw apparaten. Leer eenvoudig IPTV instellen in België.",
      en: "Step-by-step IPTV installation guides for all your devices. Learn how to set up IPTV easily in Belgium.",
    },
  },
  {
    slug: "iptv-apps",
    nl: "IPTV Apps",
    en: "IPTV Apps",
    description: {
      nl: "Overzicht van de beste IPTV apps voor Android, iOS, Smart TV en meer. Vergelijk en kies de juiste app voor IPTV.",
      en: "Overview of the best IPTV apps for Android, iOS, Smart TV and more. Compare and choose the right IPTV app.",
    },
  },
  {
    slug: "iptv-devices",
    nl: "IPTV Apparaten",
    en: "IPTV Devices",
    description: {
      nl: "Ontdek de beste apparaten voor IPTV streaming: Android Box, Fire Stick, Smart TV en meer. Complete gids.",
      en: "Discover the best devices for IPTV streaming: Android Box, Fire Stick, Smart TV and more. Complete guide.",
    },
  },
  {
    slug: "iptv-tips-tricks",
    nl: "IPTV Tips & Trucs",
    en: "IPTV Tips & Tricks",
    description: {
      nl: "Handige tips om uw IPTV-ervaring te verbeteren. Leer over internet snelheid, buffering oplossen en meer.",
      en: "Useful tips to improve your IPTV experience. Learn about internet speed, fixing buffering and more.",
    },
  },
];

export const posts: BlogPost[] = [
  // --- Setup Guide ---
  {
    slug: "iptv-installatie-gids",
    category: "setup-guide",
    date: "2026-05-15",
    image: "/images/home-hero.588c3886.webp",
    imageAlt: { nl: "IPTV installatie gids voor beginners in België", en: "IPTV installation guide for beginners in Belgium" },
    title: {
      nl: "IPTV Installatiegids voor Beginners",
      en: "IPTV Installation Guide for Beginners",
    },
    excerpt: {
      nl: "Leer stap voor stap hoe u IPTV installeert op al uw apparaten. Eenvoudige handleiding voor beginners.",
      en: "Learn step by step how to install IPTV on all your devices. Easy guide for beginners.",
    },
    content: {
      nl: [
        "IPTV wordt steeds populairder in België. Steeds meer mensen stappen over van traditionele kabel naar IPTV. In deze gids leggen we uit hoe u IPTV installeert op verschillende apparaten.",
        "Wat heeft u nodig? Een internetverbinding van minimaal 25 Mbps, een compatibel apparaat (Smart TV, Android Box, Fire Stick, tablet of smartphone) en een IPTV-abonnement van een betrouwbare aanbieder zoals Belitvision.",
        "Stap 1: Kies een IPTV-abonnement dat past bij uw behoeften. Bekijk de beschikbare zenders en kies het juiste pakket.",
        "Stap 2: Installeer een IPTV-speler-app. Populaire opties zijn TiviMate, IPTV Smarters en Perfect Player.",
        "Stap 3: Voer uw inloggegevens in de app in. U ontvangt deze van uw IPTV-provider na aankoop van uw abonnement.",
        "Stap 4: Start met kijken! U heeft nu toegang tot honderden zenders en VOD-content.",
        "Heeft u vragen? Neem contact met ons op via WhatsApp. We helpen u graag verder met de installatie.",
      ],
      en: [
        "IPTV is becoming increasingly popular in Belgium. More and more people are switching from traditional cable to IPTV. In this guide we explain how to install IPTV on various devices.",
        "What do you need? An internet connection of at least 25 Mbps, a compatible device (Smart TV, Android Box, Fire Stick, tablet or smartphone) and an IPTV subscription from a reliable provider like Belitvision.",
        "Step 1: Choose an IPTV subscription that fits your needs. Check the available channels and choose the right package.",
        "Step 2: Install an IPTV player app. Popular options are TiviMate, IPTV Smarters, and Perfect Player.",
        "Step 3: Enter your login details in the app. You will receive these from your IPTV provider after purchasing your subscription.",
        "Step 4: Start watching! You now have access to hundreds of channels and VOD content.",
        "Do you have questions? Contact us via WhatsApp. We are happy to help you with the installation.",
      ],
    },
  },
  {
    slug: "iptv-instellen-smart-tv",
    category: "setup-guide",
    date: "2026-05-10",
    title: {
      nl: "IPTV Instellen op uw Smart TV",
      en: "Setting Up IPTV on Your Smart TV",
    },
    excerpt: {
      nl: "Ontdek hoe u IPTV eenvoudig instelt op uw Smart TV. Geschikt voor Samsung, LG, Sony en andere merken.",
      en: "Discover how to easily set up IPTV on your Smart TV. Compatible with Samsung, LG, Sony and other brands.",
    },
    content: {
      nl: [
        "Wilt u IPTV kijken op uw Smart TV? Dat is gelukkig heel eenvoudig. In deze handleiding laten we zien hoe u IPTV instelt op de meest populaire Smart TV merken.",
        "Voor Samsung Smart TV: Download de IPTV Smarters app uit de Samsung Smart Hub. Installeer de app en voer uw gegevens in.",
        "Voor LG Smart TV: Gebruik de webOS browser of download een IPTV-app uit de LG Content Store.",
        "Voor Android TV (Sony, Philips, TCL): Open de Google Play Store, zoek naar TiviMate of IPTV Smarters, installeer en log in.",
        "Alternatieve methode: U kunt ook een extern apparaat zoals een Android Box of Amazon Fire Stick aansluiten op uw TV voor de beste IPTV-ervaring.",
        "Tip: Zorg voor een stabiele internetverbinding via ethernetkabel voor de beste beeldkwaliteit zonder buffering.",
      ],
      en: [
        "Want to watch IPTV on your Smart TV? Fortunately, that is very easy. In this guide we show you how to set up IPTV on the most popular Smart TV brands.",
        "For Samsung Smart TV: Download the IPTV Smarters app from the Samsung Smart Hub. Install the app and enter your details.",
        "For LG Smart TV: Use the webOS browser or download an IPTV app from the LG Content Store.",
        "For Android TV (Sony, Philips, TCL): Open the Google Play Store, search for TiviMate or IPTV Smarters, install and log in.",
        "Alternative method: You can also connect an external device such as an Android Box or Amazon Fire Stick to your TV for the best IPTV experience.",
        "Tip: Ensure a stable internet connection via ethernet cable for the best picture quality without buffering.",
      ],
    },
  },

  // --- IPTV Apps ---
  {
    slug: "beste-iptv-apps-android",
    category: "iptv-apps",
    date: "2026-05-20",
    title: {
      nl: "Beste IPTV Apps voor Android in 2026",
      en: "Best IPTV Apps for Android in 2026",
    },
    excerpt: {
      nl: "Een overzicht van de beste IPTV apps voor Android. Vergelijk TiviMate, IPTV Smarters, Perfect Player en meer.",
      en: "An overview of the best IPTV apps for Android. Compare TiviMate, IPTV Smarters, Perfect Player and more.",
    },
    content: {
      nl: [
        "Android is een van de populairste platforms voor IPTV. Er zijn talloze apps beschikbaar, maar welke zijn echt de moeite waard?",
        "TiviMate: Dit is momenteel de populairste IPTV-speler voor Android TV. Het biedt een gebruiksvriendelijke interface, ondersteuning voor meerdere afspeellijsten en een uitstekende EPG-integratie.",
        "IPTV Smarters Pro: Een veelzijdige app die werkt op zowel Android TV als mobiele Android-apparaten. Het ondersteunt meerdere gebruikersprofielen en heeft een ingebouwde speler.",
        "Perfect Player: Een lichte en snelle IPTV-speler met een eenvoudige interface. Perfect voor oudere apparaten of als u de voorkeur geeft aan een minimalistische ervaring.",
        "TiviMate vs IPTV Smarters: TiviMate is beter voor TV-gebruik met een remote, terwijl IPTV Smarters beter geschikt is voor touchscreen-apparaten.",
        "Al deze apps zijn te downloaden in de Google Play Store of via directe APK-download. Kies de app die het beste bij uw behoeften past.",
      ],
      en: [
        "Android is one of the most popular platforms for IPTV. There are countless apps available, but which ones are really worth it?",
        "TiviMate: This is currently the most popular IPTV player for Android TV. It offers a user-friendly interface, support for multiple playlists and excellent EPG integration.",
        "IPTV Smarters Pro: A versatile app that works on both Android TV and mobile Android devices. It supports multiple user profiles and has a built-in player.",
        "Perfect Player: A light and fast IPTV player with a simple interface. Perfect for older devices or if you prefer a minimalist experience.",
        "TiviMate vs IPTV Smarters: TiviMate is better for TV use with a remote, while IPTV Smarters is better suited for touchscreen devices.",
        "All these apps can be downloaded from the Google Play Store or via direct APK download. Choose the app that best fits your needs.",
      ],
    },
  },
  {
    slug: "iptv-vlc-media-player",
    category: "iptv-apps",
    date: "2026-05-08",
    title: {
      nl: "IPTV Kijken via VLC Media Player",
      en: "Watch IPTV via VLC Media Player",
    },
    excerpt: {
      nl: "Wist u dat u IPTV kunt kijken via VLC Media Player? Lees hoe u eenvoudig een IPTV-afspeellijst in VLC opent.",
      en: "Did you know you can watch IPTV via VLC Media Player? Learn how to easily open an IPTV playlist in VLC.",
    },
    content: {
      nl: [
        "VLC Media Player is niet alleen voor het afspelen van lokale videobestanden. Het is ook een uitstekende IPTV-speler die vrijwel elk formaat ondersteunt.",
        "Voordelen van VLC: Volledig gratis, open-source, beschikbaar op vrijwel elk platform (Windows, Mac, Linux, Android, iOS) en ondersteunt alle gangbare IPTV-formaten.",
        "Hoe stelt u IPTV in op VLC: Open VLC, ga naar 'Media' > 'Netwerkstream openen', plak uw IPTV-URL en klik op 'Afspelen'. U kunt ook de M3U-afspeellijst downloaden en openen via 'Bestand openen'.",
        "Voor een betere ervaring kunt u de M3U-afspeellijst importeren en bladeren door de zenders via de afspeellijstweergave.",
        "VLC is ideaal voor gebruik op pc of laptop. Voor een TV-ervaring raden we echter een speciale IPTV-app aan zoals TiviMate.",
      ],
      en: [
        "VLC Media Player is not just for playing local video files. It is also an excellent IPTV player that supports almost any format.",
        "Advantages of VLC: Completely free, open-source, available on almost every platform (Windows, Mac, Linux, Android, iOS) and supports all common IPTV formats.",
        "How to set up IPTV in VLC: Open VLC, go to 'Media' > 'Open Network Stream', paste your IPTV URL and click 'Play'. You can also download the M3U playlist and open it via 'Open File'.",
        "For a better experience, import the M3U playlist and browse through channels using the playlist view.",
        "VLC is ideal for use on PC or laptop. For a TV experience, however, we recommend a dedicated IPTV app like TiviMate.",
      ],
    },
  },

  // --- IPTV Devices ---
  {
    slug: "beste-apparaten-iptv",
    category: "iptv-devices",
    date: "2026-05-18",
    title: {
      nl: "Beste Apparaten voor IPTV Streaming",
      en: "Best Devices for IPTV Streaming",
    },
    excerpt: {
      nl: "Welk apparaat is het beste voor IPTV? Vergelijk Android Box, Fire Stick, Smart TV, Apple TV en meer.",
      en: "Which device is best for IPTV? Compare Android Box, Fire Stick, Smart TV, Apple TV and more.",
    },
    content: {
      nl: [
        "De keuze van het juiste apparaat is essentieel voor een optimale IPTV-ervaring. Hier vergelijken we de populairste opties.",
        "Android TV Box: Dit is de populairste keuze voor IPTV. Merken zoals Nvidia Shield, Xiaomi Mi Box en Formuler bieden uitstekende prestaties. Voordelen: snelle processor, ondersteuning voor alle IPTV-apps, betaalbaar.",
        "Amazon Fire TV Stick: Compact en krachtig. De Fire Stick 4K Max is een uitstekende keuze voor IPTV. Nadeel: u moet mogelijk apps sideloaden.",
        "Smart TV: Handig omdat u geen extra apparaat nodig heeft. Niet alle Smart TVs zijn echter even geschikt. Samsung en LG hebben goede opties, maar Android TV is over het algemeen de beste keuze.",
        "Apple TV: Uitstekende bouwkwaliteit en prestaties, maar duurder. Geschikt als u al in het Apple-ecosysteem zit.",
        "Tips: Kies een apparaat met minimaal 2GB RAM, ondersteuning voor 4K en een snelle processor. Een ethernetverbinding heeft de voorkeur boven WiFi voor de beste stabiliteit.",
      ],
      en: [
        "Choosing the right device is essential for an optimal IPTV experience. Here we compare the most popular options.",
        "Android TV Box: This is the most popular choice for IPTV. Brands like Nvidia Shield, Xiaomi Mi Box and Formuler offer excellent performance. Advantages: fast processor, support for all IPTV apps, affordable.",
        "Amazon Fire TV Stick: Compact and powerful. The Fire Stick 4K Max is an excellent choice for IPTV. Disadvantage: you may need to sideload apps.",
        "Smart TV: Convenient because you do not need an extra device. However, not all Smart TVs are equally suitable. Samsung and LG have good options, but Android TV is generally the best choice.",
        "Apple TV: Excellent build quality and performance, but more expensive. Suitable if you are already in the Apple ecosystem.",
        "Tips: Choose a device with at least 2GB RAM, 4K support and a fast processor. An ethernet connection is preferred over WiFi for the best stability.",
      ],
    },
  },
  {
    slug: "iptv-amazon-fire-stick",
    category: "iptv-devices",
    date: "2026-05-05",
    title: {
      nl: "IPTV Instellen op Amazon Fire Stick",
      en: "Setting Up IPTV on Amazon Fire Stick",
    },
    excerpt: {
      nl: "Complete handleiding voor het instellen van IPTV op de Amazon Fire Stick. Inclusief apps, tips en probleemoplossing.",
      en: "Complete guide for setting up IPTV on Amazon Fire Stick. Including apps, tips and troubleshooting.",
    },
    content: {
      nl: [
        "De Amazon Fire Stick is een van de beste apparaten voor IPTV vanwege zijn betaalbare prijs en goede prestaties. Volg deze stappen om IPTV in te stellen.",
        "Stap 1: Schakel 'Apps van onbekende bronnen' in. Ga naar Instellingen > Mijn Fire TV > Ontwikkelaarsopties en zet 'Apps van onbekende bronnen' aan.",
        "Stap 2: Installeer een bestandsbeheer-app zoals Downloader uit de Amazon Appstore.",
        "Stap 3: Download de IPTV-app van uw keuze. Gebruik Downloader om de APK van TiviMate of IPTV Smarters te downloaden en te installeren.",
        "Stap 4: Open de app, voer uw IPTV-inloggegevens in en begin met kijken.",
        "Stap 5 (optioneel): Installeer een VPN voor extra privacy en om geoblocking te omzeilen.",
        "Probleemoplossing: Als de app niet werkt, controleer dan of de Fire Stick up-to-date is en of u voldoende opslagruimte heeft.",
      ],
      en: [
        "The Amazon Fire Stick is one of the best devices for IPTV due to its affordable price and good performance. Follow these steps to set up IPTV.",
        "Step 1: Enable 'Apps from Unknown Sources'. Go to Settings > My Fire TV > Developer Options and turn on 'Apps from Unknown Sources'.",
        "Step 2: Install a file manager app like Downloader from the Amazon Appstore.",
        "Step 3: Download the IPTV app of your choice. Use Downloader to download and install the APK of TiviMate or IPTV Smarters.",
        "Step 4: Open the app, enter your IPTV login details and start watching.",
        "Step 5 (optional): Install a VPN for extra privacy and to bypass geoblocking.",
        "Troubleshooting: If the app does not work, check that the Fire Stick is up to date and that you have enough storage space.",
      ],
    },
  },

  // --- IPTV Tips & Tricks ---
  {
    slug: "iptv-streaming-kwaliteit-verbeteren",
    category: "iptv-tips-tricks",
    date: "2026-05-25",
    title: {
      nl: "IPTV Streaming Kwaliteit Verbeteren",
      en: "How to Improve IPTV Streaming Quality",
    },
    excerpt: {
      nl: "Last van buffering of slechte beeldkwaliteit? Ontdek onze tips om uw IPTV-ervaring te optimaliseren.",
      en: "Experiencing buffering or poor video quality? Discover our tips to optimize your IPTV experience.",
    },
    content: {
      nl: [
        "Een optimale IPTV-ervaring vereist een goede internetverbinding en de juiste instellingen. Hier zijn onze beste tips.",
        "Internetverbinding: Gebruik een bekabelde ethernetverbinding in plaats van WiFi voor de meest stabiele verbinding. Voor 4K-streaming heeft u minimaal 50 Mbps nodig.",
        "App-instellingen: Stel de buffer size in op 'Large' of 'Very Large' in uw IPTV-app. Dit helpt tegen haperingen.",
        "VPN: Een VPN kan helpen bij het verminderen van throttling door uw internetprovider. Kies een VPN met snelle servers.",
        "Apparaat: Gebruik een apparaat met voldoende rekenkracht. Oudere apparaten kunnen moeite hebben met 4K-streaming.",
        "EPG: Zorg dat uw Electronic Program Guide up-to-date is voor de beste kijkervaring.",
        "Hardware: Overweeg een apparaat met een ethernetpoort. USB-naar-ethernet adapters werken ook goed op Fire Stick.",
      ],
      en: [
        "An optimal IPTV experience requires a good internet connection and the right settings. Here are our best tips.",
        "Internet connection: Use a wired ethernet connection instead of WiFi for the most stable connection. For 4K streaming you need at least 50 Mbps.",
        "App settings: Set the buffer size to 'Large' or 'Very Large' in your IPTV app. This helps against stuttering.",
        "VPN: A VPN can help reduce throttling by your internet provider. Choose a VPN with fast servers.",
        "Device: Use a device with sufficient processing power. Older devices may struggle with 4K streaming.",
        "EPG: Make sure your Electronic Program Guide is up to date for the best viewing experience.",
        "Hardware: Consider a device with an ethernet port. USB-to-ethernet adapters also work well on Fire Stick.",
      ],
    },
  },
  {
    slug: "internet-snelheid-iptv",
    category: "iptv-tips-tricks",
    date: "2026-05-01",
    title: {
      nl: "Internet Snelheid Vereisten voor IPTV",
      en: "Internet Speed Requirements for IPTV",
    },
    excerpt: {
      nl: "Hoeveel internet snelheid heeft u nodig voor IPTV? Ontdek de minimale en aanbevolen snelheden per kwaliteit.",
      en: "How much internet speed do you need for IPTV? Discover the minimum and recommended speeds per quality.",
    },
    content: {
      nl: [
        "Een veelgestelde vraag is: 'Hoeveel internet snelheid heb ik nodig voor IPTV?' Het antwoord hangt af van de gewenste beeldkwaliteit.",
        "SD (480p): Minimaal 10 Mbps. Geschikt voor kleinere schermen of als u een beperkte verbinding heeft.",
        "HD (720p-1080p): Minimaal 25 Mbps. Dit is de aanbevolen snelheid voor de meeste gebruikers.",
        "4K (Ultra HD): Minimaal 50 Mbps. Voor de beste beeldkwaliteit op grote schermen.",
        "Let op: Dit zijn snelheden voor één apparaat. Als meerdere apparaten tegelijk streamen, heeft u meer snelheid nodig.",
        "Tip: Test uw internet snelheid via Speedtest.net. Doe dit op het apparaat waarmee u IPTV wilt kijken.",
        "Stabiliteit is belangrijker dan snelheid. Een stabiele 25 Mbps verbinding is beter dan een instabiele 100 Mbps verbinding.",
      ],
      en: [
        "A frequently asked question is: 'How much internet speed do I need for IPTV?' The answer depends on the desired video quality.",
        "SD (480p): Minimum 10 Mbps. Suitable for smaller screens or if you have a limited connection.",
        "HD (720p-1080p): Minimum 25 Mbps. This is the recommended speed for most users.",
        "4K (Ultra HD): Minimum 50 Mbps. For the best picture quality on large screens.",
        "Note: These are speeds for one device. If multiple devices stream simultaneously, you need more speed.",
        "Tip: Test your internet speed via Speedtest.net. Do this on the device you want to watch IPTV on.",
        "Stability is more important than speed. A stable 25 Mbps connection is better than an unstable 100 Mbps connection.",
      ],
    },
  },
];

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return posts.filter((p) => p.category === categorySlug);
}

export function getPost(categorySlug: string, postSlug: string): BlogPost | undefined {
  return posts.find((p) => p.category === categorySlug && p.slug === postSlug);
}
