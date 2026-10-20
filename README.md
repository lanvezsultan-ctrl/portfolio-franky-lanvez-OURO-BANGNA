# Portfolio — Franky Lanvez OURO-BANGNA

Site personnel bilingue (FR / EN) : ingénierie solaire, TESMA, chantiers, formation et contact.
Construit avec [Astro](https://astro.build) : site 100 % statique, très léger (≈ 8 Ko de JavaScript), images converties automatiquement en WebP/AVIF.

## 1. Lancer le site sur son ordinateur

Prérequis : [Node.js](https://nodejs.org) 20 ou plus.

```bash
npm install
npm run dev
```

Ouvrir ensuite http://localhost:4321 (la version anglaise est sur `/en/`).

## 2. Modifier le contenu (sans toucher au code)

Tout le texte est dans **`src/content/content.ts`** :

| Je veux changer…                       | Où ?                                  |
|----------------------------------------|---------------------------------------|
| Email, téléphones, WhatsApp, LinkedIn  | `contact`                             |
| Texte d'accueil, métiers qui défilent  | `hero`                                |
| À propos, chiffres, « actuellement »   | `about`                               |
| Compétences, marques, langues          | `skills`                              |
| Études / projets (fenêtre de détail)   | `projects.items`                      |
| Chantiers du carrousel                 | `sites.items`                         |
| Chiffres Impact (marqués TODO)         | `impact.counters` → mettre `todo: false` une fois le vrai chiffre saisi |
| Diplômes, certifications               | `education`                           |
| Expériences (+ photo associée)         | `experience.items`                    |
| Présentation TESMA                     | `tesma`                               |

Chaque texte existe en `fr` et en `en`.

## 3. Ajouter ou changer des photos

- **Portrait d'accueil** : `src/assets/photos/profil.png` (idéalement détouré, fond transparent).
- **Avatar « À propos »** : `src/assets/photos/avatar.jpg`.
- **Chantier** : créer un dossier `src/assets/chantiers/<nom>/` avec `1.jpg`, `2.jpg`…, puis ajouter une ligne dans `sites.items` avec `folder: '<nom>'`. La première photo sert de couverture.
- **Projet / étude** : dossier `src/assets/projets/<slug-du-projet>/` (le slug est indiqué dans `projects.items`). Sans photo, un emplacement « Photo à venir » s'affiche.

Les images sont redimensionnées et compressées automatiquement à la construction : déposez simplement les JPG/PNG.

## 4. Formulaire de contact

Par défaut, le formulaire ouvre la messagerie du visiteur avec le message pré-rempli (mailto).
Pour recevoir les messages directement : créer un formulaire gratuit sur https://formspree.io, puis coller son identifiant dans `contact.formspreeId`.

## 5. Mise en ligne

Le site est publié automatiquement sur **GitHub Pages** à chaque `git push` sur la branche `main` (voir `.github/workflows/deploy.yml`).

### Brancher un nom de domaine (ex. `frankyouro.com`)

1. Acheter le domaine (Namecheap, OVH, Google Domains…).
2. Dans `astro.config.mjs` : mettre `site: 'https://frankyouro.com'` et supprimer la ligne `base`.
3. Dans `src/content/content.ts` : mettre la même adresse dans `site.url` ; idem dans `public/robots.txt`.
4. Créer le fichier `public/CNAME` contenant uniquement `frankyouro.com`.
5. Chez le registraire, ajouter les enregistrements DNS indiqués par GitHub (Settings → Pages → Custom domain).

Alternative : Netlify ou Vercel (importer le dépôt GitHub, commande `npm run build`, dossier `dist`).

## 6. Éco-conception

Site statique, aucun traceur, une seule police auto-hébergée (Inter), images WebP/AVIF avec chargement différé, animations désactivées si l'utilisateur préfère réduire les mouvements.
