export type AccentTone = "blue" | "coral" | "mint";

export type AppSlug = "boardible" | "ineuj" | "monstic";

export type AppEntry = {
  slug: AppSlug;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  longDescription: string;
  iosUrl: string;
  androidUrl: string;
  websiteUrl: string;
  accent: AccentTone;
  iconPath: string;
  heroPath: string;
  heroAlt: string;
  heroObjectPosition?: string;
  statLine: string;
  bestFor: string;
  highlights: string[];
  supportEmail: string;
};

export type GameEntry = {
  slug: string;
  title: string;
  appSlug: AppSlug;
  publisher: string;
  summary: string;
  overview: string;
  players: string;
  duration: string;
  category: string;
  accent: AccentTone;
  imagePath: string;
  featured?: boolean;
};

export type InfoCard = {
  title: string;
  text: string;
};

export type ModeCard = {
  title: string;
  text: string;
  accent: "blue" | "gold" | "red" | "green";
};

export type PartnerEntry = {
  name: string;
  logoPath?: string;
  websiteUrl?: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type LegalSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LegalDocument = {
  title: string;
  lastUpdated: string;
  intro: string[];
  sections: LegalSection[];
  contactEmail: string;
};

export const heroMetrics = [
  { value: "100K+", label: "downloads" },
  { value: "20", label: "live titles" },
  { value: "110+", label: "countries reached" },
];

export const apps: AppEntry[] = [
  {
    slug: "boardible",
    name: "Boardible",
    shortName: "Boardible",
    tagline: "The main board game platform for mobile and TV-assisted play.",
    description:
      "A multi-game hub with local play, multiplayer rooms, bots, social systems, and a broad catalog of board and card games.",
    longDescription:
      "Boardible is the flagship platform app: a mobile-first catalog where classic tabletop ideas, party games, and original launches all live inside one bright ecosystem built for repeat sessions.",
    iosUrl: "https://apps.apple.com/us/app/boardible-board-game-platform/id1610585922",
    androidUrl: "https://play.google.com/store/apps/details?id=com.Boardible.Boardible",
    websiteUrl: "https://www.boardible.com/",
    accent: "blue",
    iconPath: "/assets/apps/boardible/icon.png",
    heroPath: "/assets/apps/boardible/store-gameplay.png",
    heroAlt: "Boardible gameplay screenshot from the Google Play store",
    heroObjectPosition: "center 74%",
    statLine: "Flagship platform app",
    bestFor: "Catalog-driven game nights, bot matches, and shared-screen sessions.",
    highlights: [
      "Mobile-first gameplay designed for quick starts and repeat sessions",
      "Shared-screen TV support for room-based board experiences",
      "A growing catalog mixing strategy, party, card, and social formats",
    ],
    supportEmail: "support@boardible.com",
  },
  {
    slug: "ineuj",
    name: "Isso não é um Jogo",
    shortName: "INEUJ",
    tagline: "A conversation-led, narrative, social card experience.",
    description:
      "A connection-driven mobile experience centered on prompts, challenges, and social discovery adapted from the physical product.",
    longDescription:
      "Isso não é um Jogo turns intimate prompts and playful tension into a digital format built for couples, friends, and groups who want conversation to be the core mechanic.",
    iosUrl: "https://apps.apple.com/us/app/isso-nao-e-um-jogo/id6741477707",
    androidUrl: "https://play.google.com/store/apps/details?id=com.boardible.ineuj",
    websiteUrl: "https://www.boardible.com/thisisnotagame",
    accent: "coral",
    iconPath: "/assets/apps/ineuj/icon.png",
    heroPath: "/assets/apps/ineuj/store-gameplay.png",
    heroAlt: "Its Not a Game gameplay screenshot from the Google Play store",
    heroObjectPosition: "center 52%",
    statLine: "Connection-driven social product",
    bestFor: "Prompts, vulnerability, laughter, and conversation-led sessions.",
    highlights: [
      "150+ questions and challenges designed around connection",
      "A focused product instead of a large catalog",
      "Built for couples, close friends, and group reflection sessions",
    ],
    supportEmail: "support@boardible.com",
  },
  {
    slug: "monstic",
    name: "Monstic TacToe",
    shortName: "Monstic",
    tagline: "A tactical evolution of tic-tac-toe with stack capture.",
    description:
      "A standalone competitive game where larger pieces capture smaller ones, turning a familiar classic into a faster positional battle.",
    longDescription:
      "Monstic TacToe keeps the instant readability of tic-tac-toe but adds size hierarchy and capture rules, creating a compact duel that feels sharper than the original.",
    iosUrl: "https://apps.apple.com/br/app/monstro-da-velha/id6743498798",
    androidUrl: "https://play.google.com/store/apps/details?id=com.boardible.tictac",
    websiteUrl: "https://www.boardible.com/monstictactoe",
    accent: "mint",
    iconPath: "/assets/apps/monstic/icon.png",
    heroPath: "/assets/apps/monstic/splash-bg.png",
    heroAlt: "Monstic TacToe artwork",
    statLine: "Standalone competitive title",
    bestFor: "Fast tactical duels with a simple hook and surprising depth.",
    highlights: [
      "A familiar ruleset with capture-based escalation",
      "Focused one-game app built for quick sessions",
      "Clear rules and a strong visual identity for competitive play",
    ],
    supportEmail: "support@boardible.com",
  },
];

const boardibleGameCover = (gameFolder: string) =>
  `https://boardible-app.s3.us-east-1.amazonaws.com/prod/games/${gameFolder}/en/thumbnail_big.png`;

export const games: GameEntry[] = [
  {
    slug: "minipoly",
    title: "Polypóly",
    appSlug: "boardible",
    publisher: "Boardible",
    summary: "Buy, trade, and monopolize the board to pressure everyone else into bankruptcy.",
    overview:
      "Polypóly is Boardible's fast digital take on the property-trading formula: roll, acquire, charge rent, and push the table into risky negotiations.",
    players: "Up to 6 players",
    duration: "5–30 min",
    category: "Economy / Race",
    accent: "blue",
    imagePath: boardibleGameCover("realstate"),
    featured: true,
  },
  {
    slug: "ludo",
    title: "Ludo",
    appSlug: "boardible",
    publisher: "Boardible",
    summary: "A classic roll-to-move race where timing and safe spaces matter more than they look.",
    overview:
      "Ludo keeps the familiar home-race loop intact: move tokens around the track, capture opponents, and protect your own route to the finish.",
    players: "2–10 players",
    duration: "Quick sessions",
    category: "Classic / Family",
    accent: "blue",
    imagePath: boardibleGameCover("ludo"),
  },
  {
    slug: "link4",
    title: "Link 4",
    appSlug: "boardible",
    publisher: "Boardible",
    summary: "Connect four discs first while balancing offense and immediate blocking.",
    overview:
      "Link 4 is a clean head-to-head strategy game where every move is both a threat and a defense. The pace is short, but mistakes are visible instantly.",
    players: "2 players",
    duration: "2–10 min",
    category: "Abstract / Duel",
    accent: "blue",
    imagePath: boardibleGameCover("connect4"),
  },
  {
    slug: "bistrobeasts",
    title: "Bistro Beasts",
    appSlug: "boardible",
    publisher: "Boardible",
    summary: "Stack burgers, chase combos, and survive the pressure of food critics.",
    overview:
      "Bistro Beasts blends combo-building and playful pressure into a short-session card game with a more arcade rhythm than a traditional tabletop adaptation.",
    players: "2–15 players",
    duration: "1–4 min",
    category: "Party / Card",
    accent: "blue",
    imagePath: boardibleGameCover("BDB_Cards"),
  },
  {
    slug: "hanabi",
    title: "Hanabi",
    appSlug: "boardible",
    publisher: "Cocktail Games",
    summary: "A cooperative hidden-hand challenge built around sparse clues and perfect timing.",
    overview:
      "Hanabi asks players to build color stacks in order without seeing their own cards, making communication discipline the center of the experience.",
    players: "2–5 players",
    duration: "30 min",
    category: "Cooperative / Card",
    accent: "blue",
    imagePath: boardibleGameCover("hanabi"),
    featured: true,
  },
  {
    slug: "edosettlers",
    title: "Edo Settlers",
    appSlug: "boardible",
    publisher: "Boardible",
    summary: "Build houses and cities, trade resources, and chase the race to ten points.",
    overview:
      "Edo Settlers channels familiar settlement-building tension into a mobile match format focused on trade, expansion, and tempo.",
    players: "1–4 players",
    duration: "10 min",
    category: "Strategy / Resource",
    accent: "blue",
    imagePath: boardibleGameCover("ColonyGame"),
  },
  {
    slug: "couplesclash",
    title: "Couple's Clash",
    appSlug: "boardible",
    publisher: "Party Games",
    summary: "Answer together, match perspectives, and see how aligned each pair really is.",
    overview:
      "Couple's Clash is a social party format built around comparison and surprise, with low rules overhead and fast feedback between rounds.",
    players: "2–8 players",
    duration: "2–15 min",
    category: "Party / Social",
    accent: "blue",
    imagePath: boardibleGameCover("QDC"),
  },
  {
    slug: "quartz",
    title: "Quartz",
    appSlug: "boardible",
    publisher: "Grok Games",
    summary: "Mine crystals, push your luck, and bank sets before accidents wipe out the run.",
    overview:
      "Quartz is a risk-management game: keep digging for stronger sets or save your crystals before the cave turns on you.",
    players: "3–6 players",
    duration: "30 min",
    category: "Push Your Luck",
    accent: "blue",
    imagePath: boardibleGameCover("quartz"),
    featured: true,
  },
  {
    slug: "whosetag",
    title: "Whose Tag?",
    appSlug: "boardible",
    publisher: "Boardible",
    summary: "A mystery-character duel driven by yes-or-no questions and elimination logic.",
    overview:
      "Whose Tag? keeps the familiar guessing format tight and readable, making it a fast deduction option for two players.",
    players: "2 players",
    duration: "2–10 min",
    category: "Deduction / Duel",
    accent: "blue",
    imagePath: boardibleGameCover("whoswho"),
  },
  {
    slug: "secrethitler",
    title: "Secret Hitler",
    appSlug: "boardible",
    publisher: "Goat, Wolf & Cabbage",
    summary: "A hidden-role political showdown with voting, mistrust, and cascading table reads.",
    overview:
      "Secret Hitler brings the social-deduction structure to mobile play with hidden factions, presidential powers, and constant suspicion around every vote.",
    players: "5–10 players",
    duration: "20 min",
    category: "Social Deduction",
    accent: "blue",
    imagePath: boardibleGameCover("secretHitler"),
    featured: true,
  },
  {
    slug: "sushigo",
    title: "Sushi Go!",
    appSlug: "boardible",
    publisher: "Gamewright",
    summary: "Draft a belt of sushi, collect clean sets, and squeeze the most value from each pass.",
    overview:
      "Sushi Go! is a three-round drafting game where set collection, timing, and denial all matter, even when the rules stay simple.",
    players: "2–5 players",
    duration: "4–5 min",
    category: "Drafting / Family",
    accent: "blue",
    imagePath: boardibleGameCover("sushiGo"),
    featured: true,
  },
  {
    slug: "allumbra",
    title: "Allumbra",
    appSlug: "boardible",
    publisher: "Cordilheira Games",
    summary: "A simultaneous duel where energy, ammo, and timing define each exchange.",
    overview:
      "Allumbra compresses a two-player showdown into quick rounds where both players commit at once, making anticipation as important as raw power.",
    players: "2–4 players",
    duration: "2 min",
    category: "Card Duel",
    accent: "blue",
    imagePath: boardibleGameCover("allumbra"),
    featured: true,
  },
  {
    slug: "red7",
    title: "Red 7",
    appSlug: "boardible",
    publisher: "Asmadi Games",
    summary: "Win the current rule or change the rule entirely before the turn ends.",
    overview:
      "Red 7 is a tactical card game where the victory condition itself moves under your feet, forcing constant recalculation.",
    players: "2–4 players",
    duration: "6–8 min",
    category: "Card Strategy",
    accent: "blue",
    imagePath: boardibleGameCover("red7"),
  },
  {
    slug: "inkblot",
    title: "Inkblot",
    appSlug: "boardible",
    publisher: "Entro Games",
    summary: "One player interprets the ink; everyone else tries to get closest through questions and guesses.",
    overview:
      "Inkblot is a party format built around interpretation, misdirection, and the fun of seeing how differently each player reads the same prompt.",
    players: "3–10 players",
    duration: "20 min",
    category: "Party / Guessing",
    accent: "blue",
    imagePath: boardibleGameCover("inkblot"),
  },
  {
    slug: "dobro",
    title: "Dobro",
    appSlug: "boardible",
    publisher: "Grok Games",
    summary: "A climbing card game where matching values doubles the pressure and losing means drawing back up.",
    overview:
      "Dobro is built for quick momentum swings: stay above the current value, exploit doubles, and end the round with the lightest hand possible.",
    players: "2–6 players",
    duration: "2–5 min",
    category: "Climbing / Card",
    accent: "blue",
    imagePath: boardibleGameCover("dobro"),
  },
  {
    slug: "maumau",
    title: "Mau Mau",
    appSlug: "boardible",
    publisher: "Boardible",
    summary: "A fast shedding game built around suit and number matching with plenty of retaliation.",
    overview:
      "Mau Mau keeps the accessible one-card-at-a-time rhythm of the genre while adding the playful urgency of protecting yourself before someone else does.",
    players: "2–10 players",
    duration: "1–4 min",
    category: "Card / Family",
    accent: "blue",
    imagePath: boardibleGameCover("maumau"),
  },
  {
    slug: "hearts",
    title: "Hearts",
    appSlug: "boardible",
    publisher: "Boardible",
    summary: "A trick-taking classic where the goal is not to win every trick, but to avoid the wrong ones.",
    overview:
      "Hearts rewards restraint, card counting, and careful reads across each hand as players try to dodge hearts and the queen of spades.",
    players: "3–6 players",
    duration: "12–15 min",
    category: "Trick Taking",
    accent: "blue",
    imagePath: boardibleGameCover("hearts"),
  },
  {
    slug: "thisisnotagame",
    title: "This Is Not a Game",
    appSlug: "ineuj",
    publisher: "Affection Factory",
    summary: "A prompt-driven experience with 150+ questions and challenges for honest connection.",
    overview:
      "This Is Not a Game is less about winning and more about opening up. It organizes conversation into levels and bonus prompts that keep the experience guided but personal.",
    players: "2–5 players",
    duration: "10–40 min",
    category: "Connection / Social",
    accent: "coral",
    imagePath: "/assets/apps/ineuj/splash-bg.png",
    featured: true,
  },
  {
    slug: "monstictactoe",
    title: "Monstic TacToe",
    appSlug: "monstic",
    publisher: "Boardible",
    summary: "Three in a row still wins, but now bigger monsters can eat smaller ones.",
    overview:
      "Monstic TacToe takes a universally known game and adds size hierarchy, making board control and timing matter throughout the full match.",
    players: "2 players",
    duration: "2–5 min",
    category: "Abstract / Duel",
    accent: "mint",
    imagePath: "/assets/apps/monstic/splash-bg.png",
    featured: true,
  },
];

export const featureColumns: InfoCard[] = [
  {
    title: "Mobile-first by default",
    text: "Boardible starts where modern play actually happens: on the phone, with flows designed for instant sessions, repeat play, and low-friction onboarding.",
  },
  {
    title: "Shared-screen magic",
    text: "Some games feel better when the room can see the board. Boardible extends play onto TVs and shared screens without losing the simplicity of mobile control.",
  },
  {
    title: "A catalog that keeps growing",
    text: "The no-code engine and shared platform stack let Boardible expand a playful catalog of distinct titles instead of rebuilding infrastructure for every launch.",
  },
];

export const playModes: ModeCard[] = [
  {
    title: "Phone-first play",
    text: "Approachable mobile sessions that feel built for real players, not ported from somewhere else.",
    accent: "blue",
  },
  {
    title: "TV-assisted sessions",
    text: "Use the biggest screen in the room as the board while every player keeps the phone as their controller.",
    accent: "gold",
  },
  {
    title: "Multiplayer energy",
    text: "From local play to online rooms and bots, the platform supports different ways to gather around the same game.",
    accent: "red",
  },
  {
    title: "Publisher-ready engine",
    text: "Boardible already ships the UX, backend, multiplayer, and content operations needed to bring tabletop IP into digital form.",
    accent: "green",
  },
];

export const publisherReasons = [
  "A proprietary no-code engine tuned for digital board games",
  "Shared infrastructure for accounts, matchmaking, and live content updates",
  "Distribution visibility across a catalog already reaching 110+ countries",
  "A release pipeline built for more than one-off launches",
];

export const brandNotes = [
  "Bright, mascot-friendly, and unmistakably game-native instead of corporate-flat",
  "Sky-blue energy, bold rounded geometry, and candy-colored accents around a strong blue spine",
  "A platform brand that still leaves room for each game to keep its own personality",
];

export const partners: PartnerEntry[] = [
  { name: "Gamewright", logoPath: "/assets/partners/gamewright-logo.png", websiteUrl: "https://gamewright.com" },
  { name: "Grok Games", logoPath: "/assets/partners/grok-logo.png", websiteUrl: "https://grokgames.com.br" },
  { name: "Cocktail Games", logoPath: "/assets/partners/cocktail-logo.jpg", websiteUrl: "https://cocktailgames.com" },
  { name: "Cordilheira Games", logoPath: "/assets/partners/cordilheira-logo.png", websiteUrl: "https://cordilheiragames.com.br" },
  { name: "Entro Games", logoPath: "/assets/partners/entro-logo.jpg", websiteUrl: "https://entrogames.com" },
  { name: "Asmadi Games", logoPath: "/assets/partners/asmadi-icon.png", websiteUrl: "https://asmadigames.com" },
  { name: "Party Games", logoPath: "/assets/partners/partygames-logo.png" },
  { name: "INEUJ", logoPath: "/assets/partners/ineuj-icon.png" },
];

export const events = ["DOFF 2023", "Brazil at Silicon Valley", "Spiel Essen 2023", "Gen Con 2023", "Gamescom 2024", "BGS 2024"];

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/board.ible/" },
  { label: "Discord", href: "https://discord.gg/En4GcQwD7q" },
  { label: "Facebook", href: "https://www.facebook.com/playboardible/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/boardible" },
];

export const supportDetails = {
  title: "Need help with Boardible?",
  description:
    "This support channel covers launch issues, purchases, room connections, account questions, and gameplay trouble across Boardible, Isso não é um Jogo, and Monstic TacToe.",
  email: "support@boardible.com",
  whatToInclude: [
    "The device model and iOS, iPadOS, or Android version",
    "The app version you are using",
    "A short description of what happened and what you expected",
    "Screenshots or screen recordings when available",
  ],
  commonIssues: [
    "The app does not move past launch or shows an error on startup",
    "A room, local TV session, or online match does not reconnect correctly",
    "A purchase did not unlock or restore as expected",
    "A specific game flow freezes or fails during play",
  ],
};

export const legalDocuments: Record<"privacy" | "privacyIneuj" | "privacyTictac" | "terms", LegalDocument> = {
  privacy: {
    title: "Boardible Privacy Policy",
    lastUpdated: "March 25, 2024",
    intro: [
      "Boardible's published privacy policy explains how the company handles personal data collected through the app and related channels such as marketing and events.",
      "The current live policy frames Boardible as a mobile software product that supports group play, shared-screen sessions, and associated service operations.",
    ],
    sections: [
      {
        title: "What data is collected",
        paragraphs: [
          "The live policy describes three main buckets of data: access data collected automatically from the device, registration data supplied by the user, and usage data related to how the app and games are used.",
          "Examples listed in the published policy include IP address, operating system, timestamps, device model, username, email address, and aggregate gameplay behavior.",
        ],
      },
      {
        title: "How processing works",
        paragraphs: [
          "Boardible states that it may act as controller, co-controller, or operator depending on the activity involved, and that the legal basis varies by processing purpose.",
          "The policy links contract-based processing back to the terms accepted when the user starts using the application.",
        ],
      },
      {
        title: "Security and third parties",
        paragraphs: [
          "The published policy states that Boardible applies technical, physical, and administrative safeguards and continuously reviews information-security practices.",
          "It also discloses that data may be shared with employees, collaborators, and third-party service providers, including service infrastructure located outside Brazil.",
        ],
      },
      {
        title: "Retention, rights, and cookies",
        paragraphs: [
          "Boardible says personal data is retained for as long as necessary to fulfill the purposes described in the policy or longer when law or litigation requires it.",
          "The published page also says the app does not collect or use cookies and outlines user rights such as confirmation of processing, access, correction, anonymization, blocking, deletion, and objection where applicable.",
        ],
      },
      {
        title: "Contact",
        paragraphs: [
          "Boardible LTDA is identified as the company responsible for the app, with headquarters in São Paulo, Brazil.",
          "Questions about the privacy policy can be directed to the contact email below.",
        ],
      },
    ],
    contactEmail: "talktous@boardible.com",
  },
  privacyIneuj: {
    title: "Isso não é um Jogo Privacy Policy",
    lastUpdated: "February 25, 2024",
    intro: [
      "The published INEUJ privacy policy follows the same structure as Boardible's main policy while naming Isso não é um Jogo as the relevant app experience.",
      "It explains how personal data is handled when users interact with the app and related services.",
    ],
    sections: [
      {
        title: "Data categories",
        paragraphs: [
          "The public policy lists access data, registration data, and usage data as the main categories processed for the app.",
          "Examples include device details, login information, and aggregate behavioral information about how people use the experience.",
        ],
      },
      {
        title: "Purpose and legal basis",
        paragraphs: [
          "The document says the company compiled tables in the live version of the policy to explain the purposes and legal grounds for each processing activity.",
          "As with the main Boardible policy, performance of contract is tied to the terms accepted by the user.",
        ],
      },
      {
        title: "Security and sharing",
        paragraphs: [
          "The policy says the company applies market-standard technical, physical, and administrative measures and limits internal access to people who need it for service delivery.",
          "It also states that data may be shared with collaborators and third-party service providers, including infrastructure outside Brazil.",
        ],
      },
      {
        title: "Retention and rights",
        paragraphs: [
          "The published policy says data is retained only as long as needed for the stated purposes or to meet legal and regulatory obligations.",
          "It highlights rights such as access, correction, anonymization, blocking, deletion, and objection where allowed by law.",
        ],
      },
      {
        title: "Contact",
        paragraphs: ["The policy identifies Boardible LTDA as the owner of the app and provides a direct contact email for privacy-related questions."],
      },
    ],
    contactEmail: "talktous@boardible.com",
  },
  privacyTictac: {
    title: "Monstic TacToe Privacy Policy",
    lastUpdated: "March 19, 2025",
    intro: [
      "The published Monstic TacToe privacy policy explains how personal data is handled across app usage and other interaction channels.",
      "It frames Monstic TacToe as a twist on classic tic-tac-toe that processes only the data needed to operate the product and support users.",
    ],
    sections: [
      {
        title: "What Monstic TacToe collects",
        paragraphs: [
          "The live policy lists access data, registration data, and usage data. Examples include IP address, device and operating-system information, username, email address, and play behavior metrics.",
        ],
      },
      {
        title: "Processing roles and purposes",
        paragraphs: [
          "The document states that the company may act as controller, co-controller, or operator depending on the processing activity involved.",
          "It also notes that the applicable legal basis depends on the purpose, including contract performance when the user accepts the app's terms.",
        ],
      },
      {
        title: "Security and international transfers",
        paragraphs: [
          "The public policy says the company adopts technical, physical, and administrative safeguards and works with cloud providers that use market-standard security controls.",
          "It explicitly states that some personal data may be transferred outside Brazil to service providers located in the United States.",
        ],
      },
      {
        title: "Cookies, retention, and rights",
        paragraphs: [
          "The published policy says the app does not use cookies.",
          "It also says personal data is retained only for the time necessary to fulfill the policy's purposes or meet legal obligations, and it lists rights such as access, correction, deletion, anonymization, blocking, and objection.",
        ],
      },
      {
        title: "Contact",
        paragraphs: ["The policy identifies Boardible LTDA as the company behind Monstic TacToe and directs privacy questions to the email below."],
      },
    ],
    contactEmail: "talktous@boardible.com",
  },
  terms: {
    title: "Boardible Terms and Conditions",
    lastUpdated: "March 25, 2024",
    intro: [
      "The current published terms describe the relationship between the user and Boardible LTDA for the use of Boardible's software distributed through app marketplaces.",
      "They are presented as both terms and an end user license agreement for the application.",
    ],
    sections: [
      {
        title: "Application and license",
        paragraphs: [
          "The live terms say Boardible licenses the app for the user's limited, revocable, non-exclusive, and non-transferable use.",
          "The app marketplace is not described as a party to the agreement, and Boardible remains responsible for the licensed application and its content.",
        ],
      },
      {
        title: "Registration and access",
        paragraphs: [
          "Users must provide complete, current, and accurate registration data and are responsible for keeping credentials confidential.",
          "The published terms also allow Boardible to change access conditions and restrict access that may harm the service or other users.",
        ],
      },
      {
        title: "Intellectual property and restrictions",
        paragraphs: [
          "The terms say Boardible owns the application, source code, and other proprietary elements, except where rights clearly belong to third parties such as partner games.",
          "They prohibit reverse engineering, unauthorized copying, automated abuse, malicious interference, and unlicensed use of Boardible or partner content.",
        ],
      },
      {
        title: "Technical requirements, privacy, and support",
        paragraphs: [
          "Users are expected to keep devices updated and confirm compatibility with the technical requirements listed in the relevant app marketplace.",
          "The terms point users to Boardible's privacy policy for personal-data processing and say support is provided directly by Boardible rather than the app marketplace.",
        ],
      },
      {
        title: "Liability, warranties, and governing law",
        paragraphs: [
          "The published terms include broad limitations of liability and say the application is provided as-is to the fullest extent allowed by law.",
          "They also state that the agreement is governed by Brazilian law and disputes are subject to Brazilian jurisdiction.",
        ],
      },
    ],
    contactEmail: "talktous@boardible.com",
  },
};

export function getAppBySlug(slug: string) {
  return apps.find((app) => app.slug === slug);
}

export function getGamesByApp(appSlug: AppSlug) {
  return games.filter((game) => game.appSlug === appSlug);
}

export function getGameBySlug(slug: string) {
  return games.find((game) => game.slug === slug);
}

export function getFeaturedGames() {
  return games.filter((game) => game.featured);
}

export function getPartnerByName(name: string) {
  return partners.find((partner) => partner.name.toLowerCase() === name.toLowerCase());
}