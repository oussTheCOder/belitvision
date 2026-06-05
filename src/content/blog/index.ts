export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "html"; text: string }
  | { type: "img"; src: string; alt: string; caption?: string };

export interface BlogPost {
  slug: string;
  category: string;
  date: string;
  title: { nl: string; en: string };
  excerpt: { nl: string; en: string };
  content: { nl: ContentBlock[]; en: ContentBlock[] };
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
  {
    slug: "iptv-on-android-guide",
    category: "setup-guide",
    date: "2026-06-05",
    title: {
      nl: "IPTV op Android: Volledige Installatiegids voor Belitvision Gebruikers",
      en: "IPTV on Android: Complete Setup Guide for Belitvision Users",
    },
    excerpt: {
      nl: "Leer hoe u IPTV op Android-telefoons, tablets, Android TV en TV boxes instelt. Ontdek de beste IPTV apps, setup stappen en tips voor een vloeiende streaming ervaring.",
      en: "Learn how to use IPTV on Android phones, tablets, Android TV, and TV boxes. Discover the best IPTV apps, setup steps, and tips for a smooth streaming experience with Belitvision.",
    },
    content: {
      nl: [
        { type: "p", text: "Android is een van de handigste platforms om IPTV te kijken. Of u nu een Android-smartphone, tablet, Android TV of Android box gebruikt, u kunt uw apparaat snel omtoveren tot een compleet entertainmentsysteem." },
        { type: "html", text: "Met de juiste IPTV-app en een stabiele internetverbinding krijgt u toegang tot live TV-zenders, films, series, sport en VOD-content rechtstreeks vanaf uw Android-apparaat. Voor gebruikers die een eenvoudige en betrouwbare manier zoeken om te starten, is het kiezen van het juiste <a href=\"/\" class=\"text-primary hover:underline\">iptv abonnement</a> de eerste stap voordat u een IPTV-applicatie installeert." },
        { type: "p", text: "In deze gids leggen we uit hoe IPTV werkt op Android, welke apps u kunt gebruiken en hoe u uw Belitvision-abonnement correct configureert." },
        { type: "img", src: "/images/blog-android-phone.jpg", alt: "Persoon die IPTV kijkt op een Android smartphone", caption: "IPTV kijken op uw Android smartphone is eenvoudig met de juiste app" },
        { type: "h2", text: "Waarom Android een goede keuze is voor IPTV" },
        { type: "p", text: "Android wordt veel gebruikt omdat het flexibel, eenvoudig te configureren en compatibel is met veel IPTV-applicaties. U heeft geen ingewikkelde apparatuur nodig. In de meeste gevallen zijn een Android-apparaat, een goede internetverbinding en uw IPTV-inloggegevens voldoende." },
        { type: "p", text: "Android IPTV is geschikt voor: Android-smartphones, Android-tablets, Android TV, Android TV boxes, Smart TVs met Android-systeem, en Firestick en soortgelijke Android-gebaseerde apparaten. Een bijkomend voordeel is dat Android verschillende IPTV-formaten ondersteunt, waaronder Xtream Codes API en M3U-afspeellijsten. Dit maakt het installatieproces eenvoudig voor de meeste gebruikers." },
        { type: "h2", text: "Wat u nodig heeft voordat u IPTV installeert" },
        { type: "p", text: "Zorg dat u het volgende bij de hand heeft: een actief IPTV-abonnement, uw gebruikersnaam en wachtwoord, uw server-URL of M3U-link, een compatibele IPTV-app, een stabiele internetverbinding en een up-to-date Android-apparaat. Voor HD- en 4K-streaming is het beter om een sterke Wi-Fi-verbinding of Ethernet-kabel te gebruiken als u een Android TV box gebruikt. Een zwakke verbinding kan buffering, haperingen of traag laden van zenders veroorzaken." },
        { type: "h2", text: "Beste IPTV Apps voor Android" },
        { type: "img", src: "/images/blog-smartphone-apps.jpg", alt: "Android smartphone met app iconen voor IPTV en streaming", caption: "Kies de juiste IPTV-app uit de Google Play Store" },
        { type: "p", text: "Om IPTV op Android te kijken, heeft u een IPTV-speler nodig. De speler bevat zelf meestal geen zenders. Het stelt u alleen in staat om uw IPTV-abonnementsgegevens toe te voegen en toegang te krijgen tot uw content." },
        { type: "p", text: "IPTV Smarters Pro is een van de meest gebruikte IPTV-spelers. Het werkt goed op Android-telefoons, tablets, Android TV en TV boxes. De interface is eenvoudig en stelt gebruikers in staat om gemakkelijk toegang te krijgen tot live TV, films, series en VOD-content. Het ondersteunt inloggen via Xtream Codes API, wat de installatie snel en gebruiksvriendelijk maakt." },
        { type: "p", text: "TiviMate IPTV Player is een uitstekende optie voor Android TV en Android boxes. De interface is ontworpen voor TV-schermen en navigatie met afstandsbediening. Het biedt een meer traditionele TV-ervaring en is geschikt voor gebruikers die voornamelijk IPTV kijken op een groot scherm. TiviMate wordt ook gewaardeerd om zijn georganiseerde zenderlijst, favorieten en TV-gids." },
        { type: "p", text: "XCIPTV Player is een andere praktische optie voor Android-apparaten. Het is eenvoudig, licht en ondersteunt live TV, VOD en series. Het kan een goed alternatief zijn als u een andere interface wilt dan IPTV Smarters Pro." },
        { type: "p", text: "IBO Player wordt vaak gebruikt op Smart TVs en Android-apparaten. Het biedt zelf geen zenders, maar stelt gebruikers in staat om hun IPTV-afspeellijst toe te voegen en hun content via de app te beheren." },
        { type: "h2", text: "Hoe u IPTV instelt op Android" },
        { type: "p", text: "De exacte stappen kunnen enigszins verschillen afhankelijk van de IPTV-app die u kiest, maar het algemene installatieproces is meestal hetzelfde." },
        { type: "p", text: "Stap 1: Installeer een IPTV-app. Open de Google Play Store op uw Android-apparaat en zoek naar een IPTV-speler zoals IPTV Smarters Pro, TiviMate, XCIPTV Player of een andere compatibele app. Installeer de app en open deze." },
        { type: "p", text: "Stap 2: Kies de inlogmethode. De meeste IPTV-apps bieden een of meer inlogopties. De meest voorkomende methoden zijn Xtream Codes API, M3U-afspeellijst, Portal-URL en inloggen met gebruikersnaam en wachtwoord. Als u Xtream Codes-gegevens ontvangt, moet u meestal uw gebruikersnaam, wachtwoord en server-URL invoeren. Als u een M3U-link ontvangt, plakt u eenvoudig de volledige afspeellijst-link in de app." },
        { type: "html", text: "Stap 3: Voeg uw IPTV-gegevens toe. Voer de IPTV-gegevens in die u na activering van uw abonnement heeft ontvangen. Zorg dat er geen typefouten zijn, vooral in de server-URL, gebruikersnaam of wachtwoord. Voordat u een langetermijnplan kiest, kunnen veel gebruikers starten met een <a href=\"https://wa.me/13328956041?text=Hallo%2C%20kunt%20u%20mij%20een%20belitvision%20proefversie%20geven%3F\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary hover:underline\">iptv trial test</a> om de streamingkwaliteit, zenderlijst, app-compatibiliteit en serverstabiliteit op hun Android-apparaat te controleren." },
        { type: "p", text: "Stap 4: Wacht tot de content is geladen. Na het invoeren van uw gegevens laadt de app de beschikbare content. Dit kan live TV-zenders, films, series, sportzenders, VOD-content en een TV-gids omvatten, indien beschikbaar. De laadtijd hangt af van uw internetverbinding en de hoeveelheid content in uw abonnement." },
        { type: "p", text: "Stap 5: Begin met kijken. Zodra de content verschijnt, kunt u door categorieën bladeren, zoeken naar zenders, favorieten toevoegen en beginnen met kijken. Organiseer uw favoriete zenders voor een betere ervaring, zodat u ze later snel kunt terugvinden." },
        { type: "h2", text: "Hoe u de IPTV-streamingkwaliteit op Android kunt verbeteren" },
        { type: "p", text: "Als IPTV werkt maar de kwaliteit niet stabiel is, kan het probleem komen door de internetverbinding, het apparaat of de app-instellingen. Gebruik een stabiele internetverbinding: een Ethernet-kabel is vaak beter dan Wi-Fi voor Android TV of een Android box omdat het stabieler is. Sluit achtergrond-apps: als veel apps op de achtergrond draaien, kan uw Android-apparaat trager worden. Wis de app-cache: na verloop van tijd kunnen IPTV-apps tijdelijke gegevens opslaan. Het wissen van de cache kan helpen als de app traag wordt of zenders niet correct laden. Update de app: gebruik altijd de nieuwste versie van uw IPTV-app. Updates kunnen de stabiliteit verbeteren, bugs oplossen en de app compatibeler maken met uw apparaat. Start uw apparaat opnieuw op: als de app vastloopt of zenders niet correct laadt, start u uw Android-apparaat opnieuw op en opent u de app opnieuw." },
        { type: "h2", text: "Veelvoorkomende IPTV-problemen op Android" },
        { type: "p", text: "Zenders laden niet: Controleer eerst uw internetverbinding. Controleer vervolgens of uw gebruikersnaam, wachtwoord en server-URL correct zijn. Als het probleem aanhoudt, start u de app opnieuw op of neemt u contact op met de ondersteuning." },
        { type: "p", text: "Buffering of haperingen: Buffering kan optreden door een zwakke internetverbinding, overbelaste Wi-Fi, een verouderde app of tijdelijke netwerkproblemen. Probeer Ethernet te gebruiken, start uw router opnieuw op of verminder het aantal aangesloten apparaten." },
        { type: "p", text: "App-crashes: Als de IPTV-app plotseling sluit, update deze dan of installeer hem opnieuw. Zorg ook dat uw Android-apparaat voldoende opslagruimte heeft." },
        { type: "p", text: "Geen geluid of zwart scherm: Probeer de afspeelinstellingen in de app te wijzigen. Sommige IPTV-apps staan u toe om te schakelen tussen interne en externe spelers." },
        { type: "p", text: "Inlogfout: Een inlogfout betekent meestal dat de gegevens verkeerd zijn ingevoerd of dat het abonnement niet actief is. Kopieer en plak uw inloggegevens zorgvuldig om fouten te voorkomen." },
        { type: "img", src: "/images/blog-watching-tv.jpg", alt: "Persoon die geniet van IPTV streaming op televisie", caption: "Geniet van een vloeiende IPTV-ervaring met Belitvision" },
        { type: "h2", text: "Waarom kiezen voor Belitvision" },
        { type: "p", text: "Belitvision is gemaakt voor gebruikers die een eenvoudige IPTV-ervaring willen op verschillende apparaten. Of u nu Android, Smart TV, Firestick, MAG, Enigma2, iPhone, Windows of andere platforms gebruikt, Belitvision biedt flexibele compatibiliteit en eenvoudige installatie." },
        { type: "p", text: "Belitvision is geschikt voor gebruikers die op zoek zijn naar live TV-zenders, sportcontent, films en series, VOD-bibliotheek, HD, Full HD, 4K en hoge kwaliteit streams, snelle activering, apparaatcompatibiliteit en ondersteuning wanneer nodig." },
        { type: "html", text: "Als u op zoek bent naar een stabiele <a href=\"/\" class=\"text-primary hover:underline\">iptv belgie</a> dienst die werkt op Android-telefoons, Android TV, Smart TV, Firestick, MAG en andere apparaten, biedt Belitvision u een eenvoudige installatie en snelle toegang tot live zenders en VOD-content." },
        { type: "h2", text: "Veelgestelde vragen" },
        { type: "p", text: "Kan ik IPTV kijken op mijn Android-telefoon? Ja. U kunt een compatibele IPTV-app installeren op uw Android-telefoon en uw abonnementsgegevens invoeren om toegang te krijgen tot live TV, films en series." },
        { type: "p", text: "Kan ik IPTV gebruiken op Android TV? Ja. Android TV is een van de beste apparaten voor IPTV omdat het goed werkt met apps zoals TiviMate, IPTV Smarters Pro en XCIPTV Player." },
        { type: "p", text: "Welke IPTV-app is het beste voor Android? Voor telefoons en tablets zijn IPTV Smarters Pro en XCIPTV Player eenvoudig te gebruiken. Voor Android TV en TV boxes is TiviMate vaak een betere optie omdat het is ontworpen voor TV-schermen en afstandsbedieningen." },
        { type: "p", text: "Bevatten IPTV-apps zenders? Nee. De meeste IPTV-apps zijn alleen mediaspelers. U heeft een actief IPTV-abonnement nodig om toegang te krijgen tot zenders en VOD-content." },
        { type: "p", text: "Waarom buffer IPTV op Android? Buffering kan worden veroorzaakt door een zwakke internetverbinding, onstabiele Wi-Fi, teveel aangesloten apparaten, verouderde apps of prestatieproblemen van het apparaat." },
        { type: "p", text: "Heb ik technische kennis nodig om IPTV te installeren? Nee. De installatie is eenvoudig. U hoeft alleen een IPTV-app te installeren, uw inloggegevens in te voeren en te wachten tot de content laadt." },
        { type: "p", text: "Kan ik IPTV testen voor aankoop? Ja. Een proefversie is handig als u de kwaliteit, beschikbare zenders en compatibiliteit met uw Android-apparaat wilt controleren voordat u een volledig abonnement kiest." },
        { type: "h2", text: "Tot slot" },
        { type: "p", text: "IPTV gebruiken op Android is eenvoudig wanneer u de juiste app, een stabiele internetverbinding en correcte abonnementsgegevens heeft. Android geeft gebruikers flexibiliteit en werkt met veel IPTV-spelers, waardoor het een van de meest toegankelijke platforms is voor live TV, films, series en sport." },
        { type: "p", text: "Met Belitvision kunt u genieten van een vloeiende IPTV-ervaring op Android-telefoons, tablets, Android TV en Android boxes. Kies een compatibele app, voeg uw inloggegevens toe en begin binnen enkele minuten met het kijken van uw favoriete content." },
      ],
      en: [
        { type: "p", text: "Android is one of the most convenient platforms for watching IPTV. Whether you are using an Android smartphone, tablet, Android TV, or Android box, you can quickly turn your device into a complete entertainment system." },
        { type: "html", text: "With the right IPTV app and a stable internet connection, you can access live TV channels, movies, series, sports, and VOD content directly from your Android device. For users who want a simple and reliable way to start, choosing the right <a href=\"/\" class=\"text-primary hover:underline\">iptv abonnement</a> is the first step before installing any IPTV application." },
        { type: "p", text: "In this guide, we explain how IPTV works on Android, which apps you can use, and how to configure your Belitvision subscription correctly." },
        { type: "img", src: "/images/blog-android-phone.jpg", alt: "Person watching IPTV on an Android smartphone", caption: "Watching IPTV on your Android smartphone is easy with the right app" },
        { type: "h2", text: "Why Android Is a Good Choice for IPTV" },
        { type: "p", text: "Android is widely used because it is flexible, easy to configure, and compatible with many IPTV applications. You do not need complicated equipment. In most cases, an Android device, a good internet connection, and your IPTV login details are enough." },
        { type: "p", text: "Android IPTV is suitable for: Android smartphones, Android tablets, Android TV, Android TV boxes, Smart TVs running Android system, and Firestick and similar Android-based devices. Another advantage is that Android supports different IPTV formats, including Xtream Codes API and M3U playlists. This makes the setup process simple for most users." },
        { type: "h2", text: "What You Need Before Installing IPTV" },
        { type: "p", text: "Before you start, make sure you have the following: An active IPTV subscription, your username and password, your server URL or M3U link, a compatible IPTV app, a stable internet connection, and an updated Android device. For HD and 4K streaming, it is better to use a strong Wi-Fi connection or Ethernet cable if you are using an Android TV box. A weak connection can cause buffering, freezing, or slow channel loading." },
        { type: "h2", text: "Best IPTV Apps for Android" },
        { type: "img", src: "/images/blog-smartphone-apps.jpg", alt: "Android smartphone showing app icons for IPTV and streaming", caption: "Choose the right IPTV app from the Google Play Store" },
        { type: "p", text: "To watch IPTV on Android, you need an IPTV player. The player itself does not usually include channels. It only allows you to add your IPTV subscription details and access your content." },
        { type: "p", text: "IPTV Smarters Pro is one of the most common IPTV players. It works well on Android phones, tablets, Android TV, and TV boxes. The interface is simple and allows users to access live TV, movies, series, and VOD content easily. It usually supports login through Xtream Codes API, which makes the setup fast and beginner-friendly." },
        { type: "p", text: "TiviMate IPTV Player is a very good option for Android TV and Android boxes. Its interface is designed for TV screens and remote control navigation. It gives a more traditional TV experience and is suitable for users who mainly watch IPTV on a large screen. TiviMate is also appreciated for its organized channel list, favorites, and TV guide features." },
        { type: "p", text: "XCIPTV Player is another practical option for Android devices. It is simple, light, and supports live TV, VOD, and series. It can be a good alternative if you want a different interface from IPTV Smarters Pro." },
        { type: "p", text: "IBO Player is often used on Smart TVs and Android devices. It does not provide channels by itself, but it allows users to add their IPTV playlist and manage their content through the app." },
        { type: "h2", text: "How to Set Up IPTV on Android" },
        { type: "p", text: "The exact steps may change slightly depending on the IPTV app you choose, but the general setup process is usually the same." },
        { type: "p", text: "Step 1: Install an IPTV App. Open Google Play Store on your Android device and search for an IPTV player such as IPTV Smarters Pro, TiviMate, XCIPTV Player, or another compatible app. Install the app and open it." },
        { type: "p", text: "Step 2: Choose the Login Method. Most IPTV apps offer one or more login options. The common methods are: Xtream Codes API, M3U playlist, Portal URL, and Username and password login. If you receive Xtream Codes details, enter your username, password, and server URL. If you receive an M3U link, paste the full playlist link into the app." },
        { type: "html", text: "Step 3: Add Your IPTV Details. Enter the IPTV details provided after your subscription activation. Make sure there are no typing mistakes, especially in the server URL, username, or password. Before choosing a long-term plan, many users prefer to start with an <a href=\"https://wa.me/13328956041?text=Hello%2C%20could%20you%20provide%20me%20with%20belitvision%20trial%20test%3F\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary hover:underline\">iptv trial test</a> to check the streaming quality, channel list, app compatibility, and server stability on their Android device." },
        { type: "p", text: "Step 4: Wait for the Content to Load. After adding your details, the app will load the available content. This may include live TV channels, movies, series, sports channels, VOD content, and a TV guide if available. The loading time depends on your internet connection and the amount of content." },
        { type: "p", text: "Step 5: Start Watching. Once the content appears, you can browse categories, search for channels, add favorites, and start watching. Organize your favorite channels so you can access them quickly later." },
        { type: "h2", text: "How to Improve IPTV Streaming Quality on Android" },
        { type: "p", text: "If IPTV works but the quality is not stable, the issue may come from the internet connection, the device, or the app settings. Use a stable internet connection — Ethernet is often better than Wi-Fi for Android TV or an Android box. Close background apps, clear app cache, always use the latest app version, and restart your device if the app freezes." },
        { type: "h2", text: "Common IPTV Problems on Android" },
        { type: "p", text: "Channels Are Not Loading: Check your internet connection first. Verify that your username, password, and server URL are correct. If the problem continues, restart the app or contact support." },
        { type: "p", text: "Buffering or Freezing: Buffering can happen because of weak internet, overloaded Wi-Fi, an outdated app, or temporary network issues. Try using Ethernet, restarting your router, or reducing the number of connected devices." },
        { type: "p", text: "App Crashes: If the IPTV app closes suddenly, update it or reinstall it. Also make sure your Android device has enough storage space." },
        { type: "p", text: "No Sound or Black Screen: Try changing the player settings inside the app. Some IPTV apps allow you to switch between internal and external players." },
        { type: "p", text: "Login Error: A login error usually means that the details were entered incorrectly or that the subscription is not active. Copy and paste your login details carefully to avoid mistakes." },
        { type: "img", src: "/images/blog-watching-tv.jpg", alt: "Person enjoying IPTV streaming on television", caption: "Enjoy a smooth IPTV experience with Belitvision" },
        { type: "h2", text: "Why Choose Belitvision" },
        { type: "p", text: "Belitvision is made for users who want a simple IPTV experience across different devices. Whether you use Android, Smart TV, Firestick, MAG, Enigma2, iPhone, Windows, or other platforms, Belitvision offers flexible compatibility and easy setup." },
        { type: "p", text: "Belitvision is suitable for users looking for live TV channels, sports content, movies and series, VOD library, HD, Full HD, 4K and high-quality streams, fast activation, device compatibility, and support when needed." },
        { type: "html", text: "If you are looking for a stable <a href=\"/\" class=\"text-primary hover:underline\">iptv belgie</a> service that works on Android phones, Android TV, Smart TV, Firestick, MAG, and other devices, Belitvision gives you an easy setup and fast access to live channels and VOD content." },
        { type: "h2", text: "Frequently Asked Questions" },
        { type: "p", text: "Can I watch IPTV on my Android phone? Yes. You can install a compatible IPTV app on your Android phone and enter your subscription details to access live TV, movies, and series." },
        { type: "p", text: "Can I use IPTV on Android TV? Yes. Android TV is one of the best devices for IPTV because it works well with apps such as TiviMate, IPTV Smarters Pro, and XCIPTV Player." },
        { type: "p", text: "Which IPTV app is best for Android? For phones and tablets, IPTV Smarters Pro and XCIPTV Player are easy to use. For Android TV and TV boxes, TiviMate is often a better option because it is designed for TV screens and remote controls." },
        { type: "p", text: "Do IPTV apps include channels? No. Most IPTV apps are only media players. You need an active IPTV subscription to access channels and VOD content." },
        { type: "p", text: "Why does IPTV buffer on Android? Buffering can be caused by weak internet, unstable Wi-Fi, too many connected devices, outdated apps, or device performance problems." },
        { type: "p", text: "Do I need technical knowledge to install IPTV? No. The setup is simple. You only need to install an IPTV app, enter your login details, and wait for the content to load." },
        { type: "p", text: "Can I test IPTV before buying? Yes. A trial test is useful if you want to check the quality, available channels, and compatibility with your Android device before choosing a full subscription." },
        { type: "h2", text: "Final Thoughts" },
        { type: "p", text: "Using IPTV on Android is simple when you have the right app, a stable internet connection, and correct subscription details. Android gives users flexibility and works with many IPTV players, making it one of the easiest platforms for live TV, movies, series, and sports." },
        { type: "p", text: "With Belitvision, you can enjoy a smooth IPTV experience on Android phones, tablets, Android TV, and Android boxes. Choose a compatible app, add your login details, and start watching your favorite content in just a few minutes." },
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
