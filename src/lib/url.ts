// Préfixe un chemin interne avec le sous-dossier de publication (ex. /portfolio sur GitHub Pages).
// Avec un nom de domaine à la racine, `base` est vide et le chemin reste inchangé.
export const withBase = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
