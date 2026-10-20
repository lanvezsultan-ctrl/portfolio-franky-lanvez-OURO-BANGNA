# DESIGN_NOTES — Portfolio Franky Lanvez OURO-BANGNA

Analyse de la vidéo de référence (58 s, 1024×576, enregistrement d'écran d'un portfolio
Next.js « TITO — Full-Stack Developer » publié sur TikTok).
116 images extraites (1 toutes les 0,5 s) → `reference_frames/periodic/`.

---

## 1. Ce que montre la vidéo, section par section

| Temps | Section | Ce qu'on voit |
|---|---|---|
| 0–6 s | **Loader / intro** | Fond quasi noir avec un halo radial orange au centre. Le logo « T » apparaît (fondu + léger zoom), puis le mot TITO s'écrit, puis le sous-titre « FULL-STACK DEVELOPER » en petites capitales très espacées. Durée environ 4 s. |
| 7–11 s | **Hero** | Barre de navigation en « pilule » flottante (bord arrondi, fine bordure orange lumineuse, fond translucide), logo à gauche, liens centrés, bouton langue « EN » orange à droite. Colonne gauche : « Hi I am » + **nom en grand, orange**, surnom entre parenthèses, puis **texte machine à écrire** qui change de métier (« Next.js Developer », « PHP Developer », « Full Stack… ») avec un curseur clignotant, icônes sociales, bouton plein « Hire Me » + bouton contour « Download CV ». Colonne droite : photo portrait dans une carte inclinée/arrondie avec lueur, badge « Full-Stack Engineer » posé sur la photo. |
| 11–14 s | **À propos** | Le titre « About Me » se **révèle lettre par lettre** (flou → net, montée verticale). Paragraphes sur fond sombre. Grille 2×2 de **petites cartes faits clés** (titre orange + sous-ligne grise). |
| 14–21 s | **Storytelling « scroll to play »** | Une barre en bas indique « SCROLL TO PLAY ». La section est **épinglée (sticky)** et le scroll fait défiler des « scènes » plein écran : « I DON'T JUST **BUILD.** » (mot souligné qui se dessine) → « IDEAS → CODE » avec 3 étapes (Concept / Build / Ship) et une flèche qui se trace → « CORE **SYSTEMS** » avec un **schéma de nœuds reliés par des lignes** qui s'animent → « INTELLIGENCE IN MOTION » → « DIGITAL SYSTEMS. » dans un cadre. Typo géante, contraste blanc / orange, petites étiquettes en capitales espacées au-dessus. |
| 21–23 s | **Services** | Titre centré, grille 3 colonnes de cartes sombres (icône colorée + titre + 2 lignes). Apparition des cartes en cascade, survol = halo/lueur et léger soulèvement. |
| 24–29 s | **Projets** | Grille 3 colonnes : capture d'écran, titre, description courte, **pastilles techno**, icônes lien/GitHub, bouton « Read More ». Révélation des cartes au scroll. |
| 29–33 s | **Certificats** | Cartes certificats ; **animation de transition originale (carte qui se « déchire » / se froisse en volant)** ; clic = **modale plein écran** avec fond assombri et bouton fermer. |
| 33–35 s | **Contact** | « Let's Work Together », grille 2×2 de cartes (Email, LinkedIn, GitHub, WhatsApp) — la carte survolée devient **pleine orange** ; bouton dégradé « Start a Conversation ». |
| 35–37 s | **Footer « The last frame »** | Très grande accroche « LET'S BUILD / SOMETHING THAT MATTERS. » (blanc + orange), colonnes Navigation / What I build, fines lignes séparatrices. |
| 38–51 s | **Responsive** | Démonstration via DevTools : en mobile, la photo passe au-dessus, nav réduite au logo + bouton langue + **burger** ; le menu mobile s'ouvre en **plein écran** avec de grands liens. |

## 2. Éléments transversaux

- **Curseur personnalisé** : point orange plein + anneau qui suit avec retard (inertie) ; l'anneau grossit au survol des liens. *(Je le garderai, mais désactivé sur tactile et en reduced-motion.)*
- **Fond** : quasi noir chaud, halos radiaux flous orange dans les coins, très léger grain. Profondeur via lueurs, pas d'ombres portées dures.
- **Barre de progression du scroll** fine et orange sur le bord droit.
- **Typographie** : une police d'affichage **géométrique large, très « tech »** (style Orbitron/Michroma) pour les titres et le nom, une sans-serif sobre pour le texte ; petites étiquettes en capitales avec un fort espacement des lettres (« PROCESS | DELIVERY », « THE LAST FRAME »).
- **Hiérarchie** : un mot-clé en couleur d'accent dans chaque grand titre ; beaucoup d'espace vide ; contenu centré pour les sections « manifeste », en grille pour les cartes.
- **Rythme** : les animations sont rapides (300 à 600 ms) avec un léger décalage entre les éléments ; seule la section storytelling est lente, et c'est le scroll qui la pilote.

## 3. Ce que je reproduis et ce que j'adapte (thème écologique)

| Référence | Version Franky / TESMA |
|---|---|
| Loader « T » + TITO | Un **soleil** stylisé qui se lève (cercle + rayons dessinés en SVG) puis « FRANKY » et « Ingénierie solaire · Lomé ». Moins de 1,5 s, ignoré si l'internaute a déjà visité le site ou si reduced-motion est actif. |
| Halo orange / fond noir | **Mode sombre « forêt de nuit »** (vert très profond #0B1A12) avec halos **or solaire** ; **mode clair « crème naturelle »** (#F6F1E4) avec verts forêt. |
| Machine à écrire de métiers | « Conducteur des Travaux » → « Ingénieur PV » → « Fondateur de TESMA » → « Formateur solaire ». |
| Photo dans une carte lumineuse | Même idée, avec un liseré qui évoque des **cellules PV** et une petite feuille sur le badge. |
| Storytelling épinglé (5 scènes) | « JE NE FAIS PAS QUE **POSER DES PANNEAUX.** » → « SOLEIL → **ÉNERGIE** » (Étude / Installation / Supervision) → « SYSTÈMES **CONNECTÉS** » (schéma de nœuds = onduleur, BMS, batterie, passerelle Raspberry Pi, cloud, avec des **lignes d'énergie qui circulent**) → « ÉNERGIE **INTELLIGENTE** » (IoT, supervision) → « UNE AFRIQUE **ÉCLAIRÉE.** ». Réalisé en CSS scroll-driven animations, avec un repli simple (scènes empilées) pour les navigateurs non compatibles et en reduced-motion. |
| Services | **Compétences** en cartes (Dimensionnement PV, Onduleurs & BMS, Protocoles & IoT, Embarqué & automatisme, EIES / O&M, Gestion de chantier). |
| Projets + Read More | 7 cartes de projets avec emplacement photo, pastilles (kWc, onduleurs, protocoles) et **modale de détail** (`<dialog>` natif, accessible). |
| Certificats + modale | Section **Parcours / formation** en timeline + cartes diplômes (aperçu agrandi en modale si tu fournis des scans). Pas d'effet « déchirure » (trop lourd) : remplacé par un retournement doux de la carte. |
| Contact 2×2 | Email, Téléphone, WhatsApp, LinkedIn + formulaire ; survol = carte pleine **vert/or**. |
| Footer « The last frame » | « CONSTRUISONS UN AVENIR **PLUS PROPRE.** » + navigation + mentions. |
| — (ajouts demandés) | **Impact** (compteurs animés, valeurs TODO), **Enseignement** (CMET), **TESMA** (présentation de l'entreprise), **Expériences**. |

Motifs : feuilles en SVG très légères dans les coins, grille de cellules PV en fond de section (opacité 4 %), lignes d'énergie animées par `stroke-dashoffset`, grain organique discret en CSS.

## 4. Palette proposée

| Rôle | Sombre (forêt de nuit) | Clair (crème) |
|---|---|---|
| Fond | `#0B1A12` | `#F6F1E4` |
| Surface (cartes) | `#12271B` | `#FFFDF7` |
| Texte | `#EAF2E3` | `#14301F` |
| Texte secondaire | `#A9BFAE` | `#4A6352` |
| Vert principal | `#3FA66B` (feuille) | `#1F6B3F` (forêt) |
| Vert tendre | `#9BD37A` | `#5E9E4A` |
| Or solaire (accent) | `#F2B632` | `#C98A0B` |

Tous les couples texte/fond seront vérifiés AA (≥ 4,5:1). Pas de violet, pas de couleurs criardes.

## 5. Typographie (2 familles, auto-hébergées, woff2, sous-ensemble latin)

- Titres : **Unbounded** (variable). Large et géométrique comme dans la référence, mais aux formes arrondies, plus « organique » que Orbitron.
- Texte : **Inter** (variable), lisible et légère.

## 6. Choix technique

**Astro** (sortie 100 % statique) : la référence est un site vitrine piloté par le scroll, et Astro livre zéro JavaScript par défaut. Les animations se font en CSS et en petits scripts natifs (IntersectionObserver, scroll-driven animations), ce qui est le meilleur choix pour l'éco-conception et pour atteindre Lighthouse ≥ 90. Je n'utilise ni Framer Motion ni React.
- Bilingue : routing i18n natif d'Astro (`/` = FR, `/en/` = EN) + sélecteur.
- Images : `astro:assets` → WebP/AVIF, `srcset`, lazy loading.
- SEO : `@astrojs/sitemap`, meta et Open Graph par langue, `hreflang`.
- Déploiement : Netlify ou Vercel (statique, aucune configuration serveur).

## 7. Arborescence prévue

```
portfolio/
├── DESIGN_NOTES.md
├── README.md                     ← installation, modifier le contenu, mise en ligne
├── astro.config.mjs              ← i18n fr/en, sitemap, site URL
├── package.json
├── public/
│   ├── cv/CV-Franky-OURO-BANGNA.pdf
│   ├── fonts/ (unbounded.woff2, inter.woff2)
│   ├── favicon.svg
│   ├── og-image.jpg
│   └── robots.txt
├── reference_frames/             ← images extraites de la vidéo (hors build)
└── src/
    ├── content/
    │   └── content.ts            ← TOUT le texte FR/EN, projets, chiffres, liens (seul fichier à modifier)
    ├── assets/photos/
    │   ├── profil.jpg
    │   └── projets/<slug>/...    ← emplacements photos par projet
    ├── layouts/Base.astro        ← <head>, SEO, thème, curseur, barre de progression
    ├── components/
    │   ├── Loader.astro    Nav.astro    ThemeToggle.astro    LangSwitch.astro
    │   ├── Hero.astro      About.astro  Story.astro (scènes épinglées)
    │   ├── Timeline.astro  Experience.astro  Skills.astro
    │   ├── Projects.astro  ProjectModal.astro
    │   ├── Impact.astro    Teaching.astro    Tesma.astro
    │   ├── Contact.astro   Footer.astro
    │   └── svg/ (Sun, Leaf, PvGrid, EnergyLines)
    ├── scripts/ (reveal.ts, counters.ts, typewriter.ts, cursor.ts — quelques Ko au total)
    ├── styles/global.css         ← tokens couleurs, typo, animations, reduced-motion
    └── pages/
        ├── index.astro           ← FR
        └── en/index.astro        ← EN
```

## 8. Informations relevées dans le CV (à croiser avec le brief)

- Expériences : **TESMA**, chef d'entreprise et DG (juil. 2025 – présent) · **Enseignant vacataire, CMET** (nov. 2025 – présent) · **ELECTRICITYCOP**, entrepreneur et DG (juin 2024 – mai 2025) · **EGENT-TOGO**, stagiaire solaire, pompe solaire et électricité du bâtiment (janv.–mai 2024) · **CONTOUR GLOBAL TOGO**, stagiaire en maintenance électrique (juil.–déc. 2023).
- Formation : Licence pro Génie électrique, EPL (2024) · Bac F3 électrotechnique, IPP Sokodé (2020) · CAP équipement électrique, IPP Sokodé (2019) · + candidature MIP-IE (brief).
- Logiciels : PVsyst, ETAP, AutoCAD, SketchUp, MATLAB, Blender, Pack Office, programmation de microprocesseurs, circuits intégrés.
- Langues : kabyè et kotokoli (maternelles), français B2, éwé B1, anglais B1.
- Soft skills et centres d'intérêt : repris dans « À propos ».
- **Certifications : aucune dans le CV → TODO.**
