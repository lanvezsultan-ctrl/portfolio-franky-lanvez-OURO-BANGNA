/**
 * ============================================================
 *  CONTENU DU PORTFOLIO — le seul fichier à modifier au quotidien
 * ============================================================
 *  - Chaque texte existe en français (fr) et en anglais (en).
 *  - Tout ce qui est marqué « TODO » est à compléter ou confirmer.
 *  - Photos : voir README.md, section « Ajouter des photos ».
 */

import { withBase } from '../lib/url';

export type Lang = 'fr' | 'en';
export type L = { fr: string; en: string };

/* ---------- Identité & contacts ---------- */
export const site = {
  // TODO : remplacer par le nom de domaine définitif (sert au sitemap et à l'Open Graph)
  url: 'https://lanvezsultan-ctrl.github.io/portfolio-franky-lanvez-OURO-BANGNA',
  name: 'Franky Lanvez OURO-BANGNA',
  shortName: 'Franky',
  city: 'Lomé, Togo',
  cvFile: withBase('/cv/CV-Franky-OURO-BANGNA.pdf'),
};

export const contact = {
  email: 'franky.lanvez@yahoo.fr',
  phones: ['+228 70 41 38 11', '+228 79 86 21 88'],
  whatsapp: '22870413811', // numéro international sans « + » ni espaces
  linkedin: 'https://www.linkedin.com/in/franky-lanvez-ouro-bangna',
  location: 'Lomé – Togo',
  /**
   * Formulaire : laisser vide → le formulaire ouvre la messagerie (mailto).
   * Pour recevoir les messages directement : créer un formulaire gratuit sur
   * https://formspree.io, puis coller ici son identifiant (ex. 'xyzabcde').
   */
  formspreeId: '',
};

/* ---------- Méta / SEO ---------- */
export const meta = {
  title: {
    fr: 'Franky Lanvez OURO-BANGNA — Ingénierie solaire & Conducteur des Travaux | TESMA, Lomé',
    en: 'Franky Lanvez OURO-BANGNA — Solar Engineering & Works Manager | TESMA, Lomé',
  },
  description: {
    fr: "Fondateur de TESMA à Lomé : dimensionnement photovoltaïque, mise en service d'onduleurs et BMS, supervision IoT, électrification industrielle et formation en énergie solaire.",
    en: 'Founder of TESMA in Lomé: PV system sizing, inverter & BMS commissioning, IoT monitoring, industrial electrification and solar energy training.',
  },
};

/* ---------- Interface (navigation, boutons…) ---------- */
export const ui = {
  nav: {
    work: { fr: 'Réalisations', en: 'Work' },
    skills: { fr: 'Compétences', en: 'Skills' },
    about: { fr: 'À propos', en: 'About' },
    journey: { fr: 'Formation', en: 'Education' },
    experience: { fr: 'Expériences', en: 'Experience' },
    projects: { fr: 'Projets', en: 'Projects' },
    impact: { fr: 'Impact', en: 'Impact' },
    tesma: { fr: 'TESMA', en: 'TESMA' },
    contact: { fr: 'Contact', en: 'Contact' },
  },
  hire: { fr: 'Me contacter', en: 'Hire me' },
  viewProject: { fr: 'Voir le chantier', en: 'View project' },
  prev: { fr: 'Précédent', en: 'Previous' },
  next: { fr: 'Suivant', en: 'Next' },
  sendMessage: { fr: 'Envoyer un message', en: 'Send me a message' },
  downloadCv: { fr: 'Télécharger mon CV', en: 'Download my CV' },
  menu: { fr: 'Menu', en: 'Menu' },
  close: { fr: 'Fermer', en: 'Close' },
  themeToggle: { fr: 'Changer de thème', en: 'Toggle theme' },
  skipLink: { fr: 'Aller au contenu', en: 'Skip to content' },
  readMore: { fr: 'Voir le détail', en: 'View details' },
  viewPhotos: { fr: 'Voir les photos', en: 'View photos' },
  photoSoon: { fr: 'Photo à venir', en: 'Photo coming soon' },
  scrollToPlay: { fr: 'Faites défiler', en: 'Scroll to play' },
  todo: { fr: 'valeur provisoire', en: 'placeholder value' },
  backToTop: { fr: 'Haut de page', en: 'Back to top' },
};

/* ---------- Accueil ---------- */
export const hero = {
  hello: { fr: 'Bonjour, je suis', en: 'Hi, I am' },
  firstName: 'Franky Lanvez',
  lastName: 'OURO-BANGNA',
  roles: {
    fr: ['Conducteur des Travaux', 'Ingénieur photovoltaïque', 'Fondateur de TESMA', 'Formateur en énergie solaire'],
    en: ['Works Manager', 'Photovoltaic engineer', 'Founder of TESMA', 'Solar energy trainer'],
  },
  tagline: {
    fr: "Je transforme la lumière du soleil en énergie fiable — de l'étude au chantier, du panneau à la supervision connectée.",
    en: 'I turn sunlight into reliable energy — from study to site, from panel to connected monitoring.',
  },
  badge: { fr: 'Ingénierie solaire', en: 'Solar engineering' },
  photoAlt: {
    fr: 'Portrait de Franky Lanvez OURO-BANGNA',
    en: 'Portrait of Franky Lanvez OURO-BANGNA',
  },
  // texte géant en contour qui défile derrière le portrait
  marquee: 'FRANKY LANVEZ OURO-BANGNA',
  scrollDown: { fr: 'Défiler', en: 'Scroll down' },
};

/* ---------- À propos ---------- */
export const about = {
  title: { fr: 'À propos', en: 'About me' },
  headline: { fr: 'Conducteur des travaux. Ingénieur solaire.', en: 'Works Manager. Solar Engineer.' },
  stats: [
    { value: '5', label: { fr: 'Expériences', en: 'Positions' } },
    { value: '13+', label: { fr: 'Chantiers présentés', en: 'Sites showcased' } },
    { value: '2024', label: { fr: 'Licence pro EPL', en: 'BSc EPL' } },
  ],
  currently: [
    { title: { fr: 'Diriger', en: 'Leading' }, sub: { fr: 'TESMA — ingénierie solaire', en: 'TESMA — solar engineering' } },
    { title: { fr: 'Enseigner', en: 'Teaching' }, sub: { fr: 'CMET — énergie solaire', en: 'CMET — solar energy' } },
    { title: { fr: 'Étudier', en: 'Studying' }, sub: { fr: 'Master MIP-IE (candidature)', en: 'MIP-IE Master (application)' } },
  ],
  paragraphs: {
    fr: [
      "Fondateur, gérant et Conducteur des Travaux de TESMA — Technologie de l'Énergie Solaire et de Maîtrise Active — je pilote des projets qui couvrent l'étude, la conception, l'installation solaire, l'électrification des bâtiments et des structures, ainsi que l'électrification industrielle.",
      "Mon profil est hybride : ingénierie de terrain, direction d'entreprise, stratégie commerciale et marketing. Je passe de la mise en service d'un onduleur et du dépannage d'une communication BMS à la rédaction d'un devis ou à la conduite d'une équipe sur chantier.",
      "Rigoureux et à l'écoute de mes équipes, je veille au respect des délais, de la sécurité et de la qualité, pour livrer des solutions fiables, durables, avec un sens aigu du service client.",
    ],
    en: [
      "As founder, manager and Works Manager of TESMA — Solar Energy Technology and Active Control — I lead projects covering studies, design, solar installation, building and structural electrification, and industrial electrification.",
      'My profile is hybrid: field engineering, business leadership, sales and marketing strategy. I move from commissioning an inverter and troubleshooting BMS communication to writing a quotation or leading a team on site.',
      'Rigorous and attentive to my teams, I make sure deadlines, safety and quality are met, to deliver reliable, durable solutions with a strong sense of customer service.',
    ],
  },
  facts: [
    { title: { fr: 'Fondateur de TESMA', en: 'Founder of TESMA' }, sub: { fr: 'Agoè-Fiovi, Lomé', en: 'Agoè-Fiovi, Lomé' } },
    { title: { fr: 'Licence pro Génie électrique', en: 'BSc Electrical Engineering' }, sub: { fr: 'EPL — Université de Lomé, 2024', en: 'EPL — University of Lomé, 2024' } },
    { title: { fr: '5 langues', en: '5 languages' }, sub: { fr: 'Kabyè · Kotokoli · Français · Éwé · Anglais', en: 'Kabyè · Kotokoli · French · Ewe · English' } },
    { title: { fr: 'Enseignant vacataire', en: 'Visiting lecturer' }, sub: { fr: 'CMET — depuis nov. 2025', en: 'CMET — since Nov. 2025' } },
  ],
  softSkills: {
    fr: ['Leadership', 'Gestion de projet', 'Travail en équipe', 'Respect des délais', 'Communication claire', 'Sens du détail', "Capacité d'adaptation", 'Apprentissage rapide', 'Gestion du stress', 'Discipline', 'Détermination', 'Confiance en soi'],
    en: ['Leadership', 'Project management', 'Teamwork', 'Meeting deadlines', 'Clear communication', 'Attention to detail', 'Adaptability', 'Fast learner', 'Stress management', 'Discipline', 'Determination', 'Self-confidence'],
  },
  interests: {
    fr: 'Voyage · Mécanique · Dessin · Calisthénie · Basket-ball · Marketing',
    en: 'Travel · Mechanics · Drawing · Calisthenics · Basketball · Marketing',
  },
};

/* ---------- Récit épinglé (scènes qui défilent au scroll) ---------- */
export const story = [
  {
    kicker: { fr: "Plus qu'une installation", en: 'More than an installation' },
    line1: { fr: 'Je ne fais pas que', en: "I don't just" },
    line2: { fr: 'poser des panneaux.', en: 'install panels.' },
    text: {
      fr: "Je conçois des systèmes énergétiques complets : étudiés, dimensionnés, installés, supervisés et maintenus.",
      en: 'I design complete energy systems: studied, sized, installed, monitored and maintained.',
    },
  },
  {
    kicker: { fr: 'Méthode | Livraison', en: 'Method | Delivery' },
    line1: { fr: 'Soleil', en: 'Sun' },
    line2: { fr: 'Énergie', en: 'Energy' },
    steps: { fr: ['Étude', 'Installation', 'Supervision'], en: ['Study', 'Install', 'Monitor'] },
    text: {
      fr: 'Bilan des besoins, dimensionnement, chantier sécurisé, mise en service et suivi dans la durée.',
      en: 'Needs assessment, sizing, safe site work, commissioning and long-term follow-up.',
    },
  },
  {
    kicker: { fr: 'Cœur du système', en: 'Core' },
    line1: { fr: 'Systèmes', en: 'Connected' },
    line2: { fr: 'connectés', en: 'systems' },
    nodes: ['PV', 'Onduleur', 'BMS', 'LiFePO4', 'Raspberry Pi', 'Cloud'],
    text: {
      fr: 'Onduleurs, batteries, BMS et passerelles parlent le même langage : Modbus, CAN, RS485, VE.Direct, SunSpec.',
      en: 'Inverters, batteries, BMS and gateways speak the same language: Modbus, CAN, RS485, VE.Direct, SunSpec.',
    },
  },
  {
    kicker: { fr: 'Supervision', en: 'Monitoring' },
    line1: { fr: 'Énergie', en: 'Intelligent' },
    line2: { fr: 'intelligente', en: 'energy' },
    text: {
      fr: 'Supervision à distance multi-sites, systèmes embarqués et décision automatique : l’énergie se pilote.',
      en: 'Remote multi-site monitoring, embedded systems and automated decisions: energy is managed, not just produced.',
    },
  },
  {
    kicker: { fr: 'La vision', en: 'The vision' },
    line1: { fr: 'Une Afrique', en: 'A brighter,' },
    line2: { fr: 'éclairée.', en: 'cleaner Africa.' },
    text: {
      fr: 'Une énergie propre, locale et accessible — du foyer au site industriel.',
      en: 'Clean, local and accessible energy — from homes to industrial sites.',
    },
  },
];

/* ---------- Parcours / formation (timeline) ---------- */
export const education = {
  title: { fr: 'Parcours & formation', en: 'Education' },
  items: [
    {
      year: { fr: 'En cours', en: 'Ongoing' },
      title: { fr: 'Master Ingénieur Professionnel en Ingénierie Électrique (MIP-IE)', en: 'Professional Engineering Master in Electrical Engineering (MIP-IE)' },
      school: { fr: 'Université de Lomé — candidature', en: 'University of Lomé — application' },
      text: { fr: 'Poursuite du projet de recherche sur le nettoyage automatique de panneaux solaires.', en: 'Continuation of the automatic solar panel cleaning research project.' },
    },
    {
      year: { fr: '2024', en: '2024' },
      title: { fr: 'Licence Professionnelle en Génie Électrique / Sciences de l’Ingénieur', en: 'Professional Bachelor in Electrical Engineering / Engineering Sciences' },
      school: { fr: 'École Polytechnique de Lomé (EPL) — Université de Lomé', en: 'Lomé Polytechnic School (EPL) — University of Lomé' },
      text: { fr: 'Prototype de fin d’études : système de nettoyage automatique de panneaux solaires avec supervision web.', en: 'Final-year prototype: automatic solar panel cleaning system with web monitoring.' },
    },
    {
      year: { fr: '2020', en: '2020' },
      title: { fr: 'Baccalauréat en électrotechnique (F3)', en: 'Baccalaureate in Electrotechnics (F3)' },
      school: { fr: 'IPP Sokodé', en: 'IPP Sokodé' },
      text: { fr: '', en: '' },
    },
    {
      year: { fr: '2019', en: '2019' },
      title: { fr: "Certificat d'aptitude professionnelle (CAP) en équipement électrique", en: 'Vocational certificate (CAP) in electrical equipment' },
      school: { fr: 'IPP Sokodé', en: 'IPP Sokodé' },
      text: { fr: '', en: '' },
    },
  ],
  // TODO : aucune certification n'apparaît dans le CV. Ajouter ici si besoin, ex. :
  // { title: { fr: '…', en: '…' }, issuer: '…', year: '…' }
  certifications: [] as { title: L; issuer: string; year: string }[],
};

/* ---------- Expériences ---------- */
export const experience = {
  title: { fr: 'Expériences', en: 'Experience' },
  items: [
    {
      period: { fr: 'Juil. 2025 – aujourd’hui', en: 'Jul. 2025 – present' },
      role: { fr: 'Fondateur, gérant & Conducteur des Travaux', en: 'Founder, Manager & Works Manager' },
      org: 'TESMA',
      photo: 'chantiers/maison-20kva/2.jpg', // photo affichée à côté (chemin dans src/assets/)
      bullets: {
        fr: [
          "Piloter la stratégie globale (commerciale, technique, marketing) et superviser toute l'ingénierie solaire.",
          'Superviser des projets allant des installations résidentielles aux centrales photovoltaïques de grande envergure.',
          'Diriger l’électrification de bâtiments et de structures, superviser les travaux industriels sur site et l’éclairage public solaire.',
          'Diagnostiquer et résoudre les problèmes de communication BMS : WKS EVO, Deye, Growatt, Felicity, Victron Multiplus-II, AreaFly.',
          'Recruter, former et encadrer les équipes techniques ; gérer devis, contrats et relation client.',
          'Assurer le suivi technique de la conception de systèmes embarqués ; piloter la communication et le marketing digital.',
        ],
        en: [
          'Lead overall strategy (sales, technical, marketing) and oversee all solar engineering activities.',
          'Supervise projects ranging from residential installations to large-scale photovoltaic plants.',
          'Lead building and structural electrification, supervise industrial site works and solar street lighting.',
          'Diagnose and fix BMS communication issues: WKS EVO, Deye, Growatt, Felicity, Victron Multiplus-II, AreaFly.',
          'Recruit, train and lead technical teams; manage quotations, contracts and client relations.',
          'Provide technical follow-up on embedded systems design; drive communication and digital marketing.',
        ],
      },
    },
    {
      period: { fr: 'Nov. 2025 – aujourd’hui', en: 'Nov. 2025 – present' },
      role: { fr: 'Enseignant vacataire', en: 'Visiting lecturer' },
      org: 'CMET — partenariat TESMA',
      photo: '', // TODO : photo d'un cours ou des TP (ex. 'projets/cmet/1.jpg')
      bullets: {
        fr: ['Installation solaire', 'Dimensionnement solaire', 'Travaux pratiques en énergie solaire'],
        en: ['Solar installation', 'Solar system sizing', 'Hands-on solar energy labs'],
      },
    },
    {
      period: { fr: 'Juin 2024 – mai 2025', en: 'Jun. 2024 – May 2025' },
      role: { fr: 'Entrepreneur & directeur général', en: 'Entrepreneur & Managing Director' },
      org: 'ELECTRICITYCOP',
      photo: '',
      bullets: {
        fr: [
          'Diriger l’entreprise en tant que directeur général et gérer les projets de A à Z.',
          'Étudier, dimensionner et mettre en œuvre des installations solaires ; concevoir des systèmes de secours et backup solaire.',
          'Réaliser le câblage et la maintenance électrique des bâtiments ; dimensionner les installations sous SketchUp.',
        ],
        en: [
          'Run the company as managing director and manage projects end to end.',
          'Study, size and deliver solar installations; design solar backup systems.',
          'Carry out building wiring and electrical maintenance; size installations in SketchUp.',
        ],
      },
    },
    {
      period: { fr: 'Janv. 2024 – mai 2024', en: 'Jan. 2024 – May 2024' },
      role: { fr: 'Stagiaire — installation solaire, pompage solaire et électricité du bâtiment', en: 'Intern — solar installation, solar pumping and building electrical work' },
      org: 'EGENT-TOGO',
      photo: '',
      bullets: {
        fr: ['Participer à la conception et à la modélisation de systèmes de secours solaires et d’installations électriques.'],
        en: ['Took part in designing and modelling solar backup systems and electrical installations.'],
      },
    },
    {
      period: { fr: 'Juil. 2023 – déc. 2023', en: 'Jul. 2023 – Dec. 2023' },
      role: { fr: 'Stagiaire en maintenance électrique', en: 'Electrical maintenance intern' },
      org: 'CONTOUR GLOBAL TOGO',
      photo: '',
      bullets: {
        fr: ['Assister aux opérations de maintenance électrique industrielle.'],
        en: ['Assisted with industrial electrical maintenance operations.'],
      },
    },
  ],
};

/* ---------- Compétences ---------- */
export const skills = {
  title: { fr: 'Ce que je fais', en: 'What I do' },
  intro: {
    fr: "J'associe ingénierie de terrain, électronique et gestion de projet pour livrer des installations solaires fiables, connectées et durables.",
    en: 'I combine field engineering, electronics and project management to deliver reliable, connected and durable solar installations.',
  },
  // tuiles de la grille « outils & marques » (texte court affiché dans chaque tuile)
  tools: ['Deye', 'Growatt', 'Victron', 'Felicity', 'WKS EVO', 'AreaFly', 'Pylontech', 'LiFePO4', 'Modbus', 'CAN', 'RS485', 'Raspberry Pi', 'PVsyst', 'ETAP', 'AutoCAD', 'SketchUp'],
  groups: [
    {
      icon: 'sun',
      title: { fr: 'Dimensionnement PV', en: 'PV system sizing' },
      text: { fr: 'Autoconsommation, hybride et autonomie totale. Études techniques, simulations et devis.', en: 'Self-consumption, hybrid and fully off-grid. Technical studies, simulations and quotations.' },
      tags: ['PVsyst', 'Autoconsommation', 'Hybride', 'Off-grid'],
    },
    {
      icon: 'inverter',
      title: { fr: 'Onduleurs & BMS', en: 'Inverters & BMS' },
      text: { fr: 'Mise en service et dépannage de la communication BMS, batteries LiFePO4.', en: 'Commissioning and BMS communication troubleshooting, LiFePO4 batteries.' },
      tags: ['Deye', 'Growatt', 'Victron Multiplus-II', 'Cerbo GX', 'DVCC', 'Felicity', 'WKS EVO', 'AreaFly', 'Pylontech CAN'],
    },
    {
      icon: 'network',
      title: { fr: 'Protocoles & IoT', en: 'Protocols & IoT' },
      text: { fr: 'Faire dialoguer onduleurs, batteries et passerelles pour superviser à distance.', en: 'Getting inverters, batteries and gateways talking for remote monitoring.' },
      tags: ['Modbus RTU', 'RS485', 'Modbus TCP', 'CAN', 'VE.Direct', 'SunSpec', 'Raspberry Pi'],
    },
    {
      icon: 'chip',
      title: { fr: 'Embarqué & automatisme', en: 'Embedded & automation' },
      text: { fr: 'Systèmes embarqués, programmation de microprocesseurs, circuits intégrés, supervision.', en: 'Embedded systems, microprocessor programming, integrated circuits, monitoring.' },
      tags: ['Microprocesseurs', 'Circuits intégrés', 'Automatisme', 'Supervision web'],
    },
    {
      icon: 'leaf',
      title: { fr: 'Études & environnement', en: 'Studies & environment' },
      text: { fr: "Études d'impact environnemental et social, études O&M, analyse de risques.", en: 'Environmental and social impact assessments, O&M studies, risk analysis.' },
      tags: ['EIES', 'O&M', 'Analyse de risques', 'ETAP'],
    },
    {
      icon: 'helmet',
      title: { fr: 'Chantier & direction', en: 'Site & leadership' },
      text: { fr: "Gestion de chantier, encadrement d'équipes, relation client, stratégie commerciale et marketing.", en: 'Site management, team leadership, client relations, sales and marketing strategy.' },
      tags: ['Conduite de travaux', 'Sécurité', 'Devis & contrats', 'Marketing digital'],
    },
  ],
  softwareTitle: { fr: 'Logiciels', en: 'Software' },
  software: ['PVsyst', 'ETAP', 'AutoCAD', 'SketchUp', 'MATLAB', 'Blender', 'Word', 'Excel', 'Access', 'PowerPoint'],
  languagesTitle: { fr: 'Langues', en: 'Languages' },
  languages: [
    { name: { fr: 'Kabyè', en: 'Kabyè' }, level: { fr: 'Langue maternelle', en: 'Native' }, pct: 100 },
    { name: { fr: 'Kotokoli', en: 'Kotokoli' }, level: { fr: 'Langue maternelle', en: 'Native' }, pct: 100 },
    { name: { fr: 'Français', en: 'French' }, level: { fr: 'B2 — avancé', en: 'B2 — upper intermediate' }, pct: 80 },
    { name: { fr: 'Éwé', en: 'Ewe' }, level: { fr: 'B1 — intermédiaire', en: 'B1 — intermediate' }, pct: 60 },
    { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'B1 — intermédiaire', en: 'B1 — intermediate' }, pct: 60 },
  ],
};

/* ---------- Projets (études & ingénierie) ----------
 *  photos : noms de dossiers dans src/assets/projets/<slug>/ (laisser vide = emplacement « Photo à venir »)
 */
export const projects = {
  title: { fr: 'Projets & études', en: 'Projects & studies' },
  intro: {
    fr: 'Une sélection d’études et de réalisations techniques. Les noms de clients et les montants restent confidentiels.',
    en: 'A selection of studies and technical work. Client names and amounts remain confidential.',
  },
  items: [
    {
      slug: 'eies-centrale-portuaire',
      category: { fr: 'Étude environnementale', en: 'Environmental study' },
      title: { fr: 'EIES — centrale solaire en toiture d’un terminal portuaire', en: 'ESIA — rooftop solar plant on a port terminal' },
      summary: { fr: 'Environ 880 kWc répartis sur 10 entrepôts à Lomé.', en: 'About 880 kWp spread over 10 warehouses in Lomé.' },
      tags: ['≈ 880 kWc', 'Jinko', 'Huawei', 'EIES', 'O&M'],
      details: {
        fr: [
          ['Contexte', 'Centrale photovoltaïque en toiture d’environ 880 kWc, répartie sur 10 entrepôts d’un terminal portuaire à Lomé (panneaux Jinko, onduleurs Huawei).'],
          ['Mon rôle', 'Volet Étude d’impact environnemental et social (EIES), étude d’exploitation et maintenance (O&M) et analyse des risques.'],
        ],
        en: [
          ['Context', 'Rooftop photovoltaic plant of about 880 kWp across 10 warehouses of a port terminal in Lomé (Jinko modules, Huawei inverters).'],
          ['My role', 'Environmental and social impact assessment (ESIA), operation & maintenance (O&M) study and risk analysis.'],
        ],
      },
    },
    {
      slug: 'hotel-r2',
      category: { fr: 'Étude énergétique', en: 'Energy study' },
      title: { fr: 'Étude énergétique et offre solaire pour un hôtel R+2', en: 'Energy study and solar offer for a 3-storey hotel' },
      summary: { fr: 'Restaurant/bar + 12 chambres, trois scénarios comparés.', en: 'Restaurant/bar + 12 rooms, three scenarios compared.' },
      tags: ['Hôtellerie', '3 scénarios', 'Autonomie'],
      details: {
        fr: [
          ['Contexte', 'Hôtel R+2 comprenant un restaurant/bar et 12 chambres.'],
          ['Approche', 'Trois scénarios chiffrés : fonctionnement diurne seul, 50 % d’autonomie, autonomie totale.'],
        ],
        en: [
          ['Context', 'Three-storey hotel with a restaurant/bar and 12 rooms.'],
          ['Approach', 'Three costed scenarios: daytime only, 50% autonomy, full autonomy.'],
        ],
      },
    },
    {
      slug: 'stations-batteries-motos',
      category: { fr: 'Mobilité électrique', en: 'E-mobility' },
      title: { fr: 'Alimentation solaire de stations d’échange de batteries', en: 'Solar supply for battery-swap stations' },
      summary: { fr: 'Motos électriques, 2 racks de 16 kW, triphasé.', en: 'Electric motorbikes, 2 × 16 kW racks, three-phase.' },
      tags: ['Triphasé', '2 × 16 kW', '20 / 40 / 50 kWc'],
      details: {
        fr: [
          ['Contexte', 'Stations d’échange de batteries pour motos électriques équipées de 2 racks de 16 kW, en triphasé.'],
          ['Approche', 'Simulations comparées à 20, 40 et 50 kWc pour choisir le meilleur compromis production / coût.'],
        ],
        en: [
          ['Context', 'Battery-swap stations for electric motorbikes with 2 × 16 kW racks, three-phase supply.'],
          ['Approach', 'Simulations compared at 20, 40 and 50 kWp to find the best production / cost balance.'],
        ],
      },
    },
    {
      slug: 'immeuble-mixte-lome',
      category: { fr: 'Dimensionnement', en: 'System sizing' },
      title: { fr: 'Immeuble résidentiel mixte à Lomé', en: 'Mixed-use residential building in Lomé' },
      summary: { fr: '60 kWc / 100 kWh / 50 kVA, 8 h d’autonomie nocturne.', en: '60 kWp / 100 kWh / 50 kVA, 8 h night-time autonomy.' },
      tags: ['60 kWc', '100 kWh', '50 kVA', '8 h'],
      details: {
        fr: [
          ['Contexte', 'Immeuble résidentiel mixte à Lomé.'],
          ['Solution', 'Champ de 60 kWc, stockage de 100 kWh et 50 kVA d’onduleurs, pour 8 heures d’autonomie la nuit.'],
        ],
        en: [
          ['Context', 'Mixed-use residential building in Lomé.'],
          ['Solution', '60 kWp array, 100 kWh storage and 50 kVA of inverters, for 8 hours of autonomy at night.'],
        ],
      },
    },
    {
      slug: 'tesma-monitor',
      category: { fr: 'IoT & logiciel', en: 'IoT & software' },
      title: { fr: 'TESMA Monitor', en: 'TESMA Monitor' },
      summary: { fr: 'Plateforme IoT de supervision multi-sites et multi-marques.', en: 'Multi-site, multi-brand IoT monitoring platform.' },
      tags: ['Raspberry Pi', 'Modbus', 'CAN', 'Multi-marques', 'Rôles'],
      details: {
        fr: [
          ['Objectif', 'Superviser à distance des installations de marques différentes depuis une seule interface.'],
          ['Architecture', 'Passerelles Raspberry Pi sur site, remontée des données des onduleurs et batteries, accès par rôles (administrateur / client).'],
        ],
        en: [
          ['Goal', 'Remotely monitor installations of different brands from a single interface.'],
          ['Architecture', 'On-site Raspberry Pi gateways collecting inverter and battery data, role-based access (admin / client).'],
        ],
      },
    },
    {
      slug: 'nettoyage-panneaux',
      category: { fr: 'Recherche', en: 'Research' },
      title: { fr: 'Nettoyage automatique de panneaux solaires', en: 'Automatic solar panel cleaning' },
      summary: { fr: 'Décision intelligente et supervision web à distance.', en: 'Smart decision-making and remote web monitoring.' },
      tags: ['Prototype', 'Embarqué', 'Supervision web', 'Master'],
      details: {
        fr: [
          ['Projet', 'Système de nettoyage automatique de panneaux solaires qui décide lui-même du moment du nettoyage, supervisé à distance via une interface web.'],
          ['Étapes', 'Prototype réalisé en Licence ; évolution prévue dans le cadre du Master MIP-IE.'],
        ],
        en: [
          ['Project', 'Automatic solar panel cleaning system that decides when to clean, monitored remotely through a web interface.'],
          ['Stages', 'Prototype built during the Bachelor; further development planned within the MIP-IE Master.'],
        ],
      },
    },
    {
      slug: 'depannages',
      category: { fr: 'Cas d’étude', en: 'Case studies' },
      title: { fr: 'Dépannages avancés', en: 'Advanced troubleshooting' },
      summary: { fr: 'Trois pannes réelles, trois diagnostics.', en: 'Three real faults, three diagnoses.' },
      tags: ['Deye F34', 'AreaFly BMS 61', 'Growatt SPF 5000 ES', 'CAN'],
      details: {
        fr: [
          ['Deye — erreur F34', 'Diagnostic et résolution de l’erreur F34 sur un onduleur Deye.'],
          ['AreaFly — erreur BMS 61', 'Communication BMS rétablie grâce à un câble croisé et à la bonne configuration du protocole.'],
          ['Growatt SPF 5000 ES', 'Mise en communication avec une batterie LiFePO4 en CAN.'],
        ],
        en: [
          ['Deye — F34 error', 'Diagnosis and resolution of the F34 error on a Deye inverter.'],
          ['AreaFly — BMS error 61', 'BMS communication restored with a crossover cable and the correct protocol settings.'],
          ['Growatt SPF 5000 ES', 'Established CAN communication with a LiFePO4 battery.'],
        ],
      },
    },
  ],
};

/* ---------- Chantiers TESMA (photos issues de la galerie de tesma-solar.com) ----------
 *  folder : dossier dans src/assets/chantiers/
 */
export const sites = {
  title: { fr: 'Chantiers réalisés avec TESMA', en: 'Sites delivered with TESMA' },
  intro: {
    fr: 'Quelques installations conduites sur le terrain à Lomé et alentours.',
    en: 'A few installations delivered on the ground in and around Lomé.',
  },
  items: [
    { folder: 'zossime-22kva', year: '2026', power: '22 kVA', title: { fr: 'Résidence autonome — 32 panneaux de 700 W, 60 kWh de stockage', en: 'Off-grid residence — 32 × 700 W panels, 60 kWh storage' } },
    { folder: 'egghome-12kva', year: '2026', power: '12 kVA', title: { fr: 'Groupe solaire EGG HOME 12 kVA / 30 kWh', en: 'EGG HOME solar unit 12 kVA / 30 kWh' } },
    { folder: 'mokpokpo-15kva', year: '2026', power: '15 kVA', title: { fr: 'Cité Mokpokpo — panneaux bifaciaux 10 kWc, 15 kWh lithium', en: 'Mokpokpo estate — 10 kWp bifacial, 15 kWh lithium' } },
    { folder: 'maison-20kva', year: '2025', power: '20 kVA', title: { fr: 'Maison autonome — 48 panneaux, 6 climatiseurs', en: 'Off-grid house — 48 panels, 6 air conditioners' } },
    { folder: 'villa-sagbado', year: '2025', power: '10 kVA', title: { fr: 'Villa à Sagbado — 9,9 kWc, 20 kWh, 100 % solaire', en: 'Villa in Sagbado — 9.9 kWp, 20 kWh, 100% solar' } },
    { folder: 'appartement-10kva', year: '2025', power: '10 kVA', title: { fr: 'Appartement autonome — 3 climatiseurs, piscine, éclairage', en: 'Off-grid apartment — 3 ACs, pool, lighting' } },
    { folder: 'appartement-8kva', year: '2025', power: '8 kVA', title: { fr: 'Appartement à Lomé', en: 'Apartment in Lomé' } },
    { folder: 'pompage-irrigation', year: '2025', power: '8 kVA', title: { fr: 'Pompage solaire et irrigation', en: 'Solar pumping and irrigation' } },
    { folder: 'maison-6kva', year: '2025', power: '6 kVA', title: { fr: 'Maison autonome', en: 'Off-grid house' } },
    { folder: 'adidogome-5kva', year: '2025', power: '5 kVA', title: { fr: 'Commerce de matériaux — 5,5 kWc, 20 kWh', en: 'Building-materials store — 5.5 kWp, 20 kWh' } },
    { folder: 'commerce-5kva', year: '2025', power: '5 kVA', title: { fr: 'Commerce à Lomé — champ de 5,5 kWc', en: 'Shop in Lomé — 5.5 kWp array' } },
    { folder: 'atelier-10kva-tri', year: '2024', power: '10 kVA', title: { fr: 'Atelier automobile — système autonome triphasé', en: 'Car workshop — three-phase off-grid system' } },
    { folder: 'station-3kva', year: '2024', power: '3 kVA', title: { fr: 'Station-service à Lomé', en: 'Service station in Lomé' } },
  ],
};

/* ---------- Impact (compteurs animés) ----------
 *  TODO : remplacer les valeurs marquées todo: true par les chiffres réels.
 */
export const impact = {
  title: { fr: 'Impact', en: 'Impact' },
  intro: {
    fr: 'Chaque kilowatt-crête installé, c’est moins de groupe électrogène et plus d’autonomie.',
    en: 'Every kilowatt-peak installed means less diesel generator and more autonomy.',
  },
  counters: [
    { value: 250, suffix: ' kWc', label: { fr: 'installés', en: 'installed' }, todo: true },
    { value: 13, suffix: '+', label: { fr: 'chantiers présentés', en: 'sites showcased' }, todo: false },
    { value: 60, suffix: '+', label: { fr: 'étudiants formés', en: 'students trained' }, todo: true },
    { value: 180, suffix: ' t', label: { fr: 'de CO₂ évitées / an', en: 'CO₂ avoided / year' }, todo: true },
  ],
};

/* ---------- Enseignement ---------- */
export const teaching = {
  title: { fr: 'Enseignement', en: 'Teaching' },
  kicker: { fr: 'Transmettre', en: 'Passing it on' },
  text: {
    fr: "Depuis novembre 2025, j'enseigne un jour par semaine au CMET comme enseignant vacataire, dans le cadre d'un partenariat entre TESMA et l'université. Mon objectif : former des techniciens capables de dimensionner et d'installer proprement, dès leur premier chantier.",
    en: 'Since November 2025, I have been teaching one day a week at CMET as a visiting lecturer, through a partnership between TESMA and the university. My goal: train technicians who can size and install properly from their very first site.',
  },
  courses: [
    { title: { fr: 'Installation solaire', en: 'Solar installation' }, text: { fr: 'Câblage, protections, normes et sécurité.', en: 'Wiring, protection, standards and safety.' } },
    { title: { fr: 'Dimensionnement solaire', en: 'Solar sizing' }, text: { fr: 'Bilan de puissance, choix des équipements, autonomie.', en: 'Load assessment, equipment selection, autonomy.' } },
    { title: { fr: 'Travaux pratiques', en: 'Hands-on labs' }, text: { fr: 'Montage, mise en service et mesures sur matériel réel.', en: 'Assembly, commissioning and measurements on real equipment.' } },
  ],
};

/* ---------- TESMA ---------- */
export const tesma = {
  title: { fr: 'TESMA', en: 'TESMA' },
  fullName: { fr: "Technologie de l'Énergie Solaire et de Maîtrise Active", en: 'Solar Energy Technology and Active Control' },
  text: {
    fr: "Fondée et dirigée par Franky, TESMA accompagne particuliers, entreprises et institutions vers l'autonomie énergétique, avec des solutions clé en main, du résidentiel aux centrales photovoltaïques de grande taille.",
    en: 'Founded and led by Franky, TESMA helps households, businesses and institutions achieve energy autonomy with turnkey solutions, from homes to large photovoltaic plants.',
  },
  hq: { fr: 'Siège : Agoè-Fiovi, Lomé — Togo', en: 'Head office: Agoè-Fiovi, Lomé — Togo' },
  website: 'https://tesma-solar.com',
  services: {
    fr: ['Installation solaire clé en main', 'Maintenance', 'Électrification industrielle et de bâtiments', 'Pompage solaire', 'Solutions de secours / backup', 'Éclairage public solaire', 'Supervision de travaux industriels', 'Conception de systèmes embarqués'],
    en: ['Turnkey solar installation', 'Maintenance', 'Industrial and building electrification', 'Solar pumping', 'Backup power solutions', 'Solar street lighting', 'Industrial works supervision', 'Embedded systems design'],
  },
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/company/tesma-togo' },
    { label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61576022551352' },
    { label: 'YouTube', url: 'https://youtube.com/@tesma-b6h' },
    { label: 'TikTok', url: 'https://www.tiktok.com/@tesmatogo' },
  ],
  visit: { fr: 'Visiter tesma-solar.com', en: 'Visit tesma-solar.com' },
};

/* ---------- Contact ---------- */
export const contactSection = {
  title: { fr: 'Travaillons ensemble', en: "Let's work together" },
  hook: { fr: 'Votre prochain projet solaire commence ici.', en: 'Your next solar project starts here.' },
  intro: {
    fr: 'Un projet solaire, une étude, une formation ou une collaboration ? Écrivez-moi.',
    en: 'A solar project, a study, a training or a partnership? Get in touch.',
  },
  cards: {
    email: { fr: 'Écrivez-moi à tout moment', en: 'Email me anytime' },
    phone: { fr: 'Appel direct', en: 'Direct call' },
    whatsapp: { fr: 'Réponse rapide', en: 'Quick reply' },
    linkedin: { fr: 'Échangeons sur LinkedIn', en: "Let's connect" },
  },
  form: {
    name: { fr: 'Votre nom', en: 'Your name' },
    email: { fr: 'Votre email', en: 'Your email' },
    subject: { fr: 'Sujet', en: 'Subject' },
    message: { fr: 'Votre message', en: 'Your message' },
    send: { fr: 'Envoyer le message', en: 'Send message' },
    sent: { fr: 'Merci ! Votre message a bien été envoyé.', en: 'Thank you! Your message has been sent.' },
    mailtoNote: { fr: 'Votre messagerie va s’ouvrir avec le message pré-rempli.', en: 'Your email app will open with the message pre-filled.' },
    error: { fr: 'Envoi impossible. Écrivez-moi directement par email.', en: 'Sending failed. Please email me directly.' },
  },
};

/* ---------- Pied de page ---------- */
export const footer = {
  kicker: { fr: 'Le dernier mot', en: 'The last word' },
  line1: { fr: 'Construisons', en: "Let's build" },
  line2: { fr: 'un avenir plus propre.', en: 'a cleaner future.' },
  text: {
    fr: 'Ce site est éco-conçu : léger, statique, sans traceur, polices auto-hébergées et images compressées.',
    en: 'This site is eco-designed: lightweight, static, no trackers, self-hosted fonts and compressed images.',
  },
  rights: { fr: 'Tous droits réservés.', en: 'All rights reserved.' },
};
