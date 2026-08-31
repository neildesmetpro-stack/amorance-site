# Amorance — site vitrine

Site institutionnel d'Amorance, entreprise française de distribution de produits
de consommation courante. Le site n'est pas marchand : il existe pour permettre à
une marque européenne de vérifier qui nous sommes avant d'ouvrir un compte
fournisseur.

Next.js (App Router), TypeScript, aucun CMS, aucun cookie, aucun outil de mesure
d'audience.

---

## Lancer le projet en local

```bash
npm install
cp .env.example .env.local   # puis renseigner les valeurs
npm run dev
```

Le site est servi sur http://localhost:3000. La racine redirige vers `/fr`.

Autres commandes :

```bash
npm run build   # compilation de production, génère les quatorze pages
npm run start   # sert la compilation de production
npm run lint    # ESLint
```

## Variables d'environnement

Les deux variables sont listées dans `.env.example`. En local, elles vivent dans
`.env.local` ; sur Vercel, dans Settings puis Environment Variables.

| Variable | Rôle | Obligatoire |
| --- | --- | --- |
| `NEXT_PUBLIC_FORMSPREE_ID` | Identifiant du formulaire Formspree | oui |
| `NEXT_PUBLIC_SITE_URL` | Domaine public, sans barre oblique finale | oui en production |

### Renseigner l'identifiant Formspree

1. Créer un formulaire sur formspree.io.
2. Relever l'URL fournie, de la forme `https://formspree.io/f/abcdwxyz`.
3. Reporter la partie finale, ici `abcdwxyz`, dans `NEXT_PUBLIC_FORMSPREE_ID`.

Tant que la variable n'est pas renseignée, le formulaire s'affiche normalement
mais l'envoi échoue en affichant un message invitant à écrire directement à
contact@amorance.fr.

Le formulaire est protégé par un champ leurre nommé `_gotcha`, reconnu par
Formspree, qui écarte silencieusement les soumissions automatisées.

### Renseigner le domaine

`NEXT_PUBLIC_SITE_URL` sert aux URL canoniques, aux balises `hreflang` et au
sitemap. La valeur de repli est `https://amorance.fr`. Si le site est servi sur
un autre hôte, la renseigner avant la mise en ligne, faute de quoi le sitemap
pointera vers le mauvais domaine.

## Modifier les textes

Tout le contenu visible vit dans deux fichiers, un par langue :

- `src/i18n/fr.ts`
- `src/i18n/en.ts`

Le français fait foi : `src/i18n/types.ts` dérive le type `Dictionary` de
`fr.ts`. Une clé ajoutée en français et absente en anglais provoque une erreur de
compilation, ce qui interdit de mettre en ligne une traduction incomplète.

Aucune modification de texte ne demande de toucher aux composants.

Les URL des pages vivent dans `src/i18n/routes.ts`. Une page ajoutée à cette
table apparaît automatiquement dans le pied de page, le sitemap et les balises
`hreflang`.

Les mentions de l'entreprise, adresse, SIREN et adresse de contact, vivent dans
`src/lib/site.ts`.

## Déposer les deux images

Les fichiers vont dans `public/images`, sous ces noms exacts, extension libre
parmi `.jpg`, `.jpeg`, `.png`, `.webp` et `.avif` :

| Fichier | Page | Sujet attendu |
| --- | --- | --- |
| `accueil` | Accueil | Cartons de préparation de commandes |
| `activite` | Notre activité | Poste de préparation ou plan de travail |

Consignes de choix : images libres de droits, sobres, plutôt sombres, sans
personne visible, sans logo ni marque identifiable.

Tant qu'un fichier est absent, le bandeau correspondant s'affiche en aplat Bleu
Amorance, sans casser la mise en page. Le texte alternatif est déjà rédigé dans
les fichiers de traduction, clés `home.bannerAlt` et `activity.bannerAlt`.

Un voile Bleu Amorance à 34 pour cent est appliqué automatiquement à toute image
de bandeau.

## Image de partage Open Graph

L'image de partage est générée à la compilation par
`src/app/[locale]/opengraph-image.tsx` : le logotype seul, en Papier sur aplat
Bleu Amorance, au format 1200 par 630 pixels. Une image par langue, servie en
PNG statique.

Elle est composée en Spectral graisse 500, lue depuis `src/fonts/`. Le fichier
`Spectral-Medium.ttf` est versionné dans le dépôt avec sa licence `OFL.txt`,
pour que la compilation n'ait besoin d'aucun accès réseau. C'est le seul usage
de ce fichier : les polices du site, elles, passent par `next/font/google` en
mode auto-hébergé.

Pour modifier l'image, éditer ce composant. Pour la remplacer par un fichier
fixe, supprimer le composant et déposer un `opengraph-image.png` de 1200 par 630
pixels au même endroit.

Note d'implémentation : déclarer un objet `openGraph` dans `generateMetadata`
empêche Next d'y rattacher seul l'image issue du fichier de convention. La page
la déclare donc explicitement, voir le commentaire dans
`src/app/[locale]/[[...slug]]/page.tsx`.

## Favicon

`src/app/icon.tsx` génère l'icône d'onglet à la compilation : l'initiale du
logotype en Spectral graisse 500, Papier sur aplat Bleu Amorance. Même méthode
et même fichier de police que l'image de partage, aucun accès réseau.

## Structure

```
src/
  app/
    [locale]/
      layout.tsx            structure du document, en-tête, pied de page
      [[...slug]]/page.tsx  résolution d'URL, métadonnées, aiguillage
    not-found.tsx           page 404 bilingue
    icon.tsx                favicon genere en Spectral
    robots.ts
    sitemap.ts
  components/               en-tête, pied de page, logotype, bandeau, formulaire
                            plus les composants d'animation, voir plus bas
  components/pages/         une page par fichier
  i18n/                     routes, dictionnaires, typage
  fonts/                    Spectral pour l'image de partage, plus sa licence
  lib/                      polices, constantes d'entreprise, recherche d'image
  styles/globals.css        palette, typographie, primitives de mise en page
```

Les quatorze pages sont générées statiquement à la compilation. Il n'y a ni
middleware, ni rendu à la demande.

## Animations

Tout repose sur IntersectionObserver et des transitions CSS, sans aucune
dependance d'animation.

- `src/components/Reveal.tsx` fait apparaitre un bloc a son premier passage
  dans le viewport : opacite et translation de 12 pixels, 500 ms, ease-out,
  une seule fois. La propriete `delay` sert au decalage des grilles, fixe a
  70 ms par element.
- `src/components/StickyHeader.tsx` ajoute le filet bas et une ombre tres
  legere au dela de 40 pixels de defilement, sur un ecouteur passif regroupe
  sur une frame.
- `src/components/BannerImage.tsx` fait apparaitre l'image de bandeau en
  fondu depuis une echelle de 1,03, en 700 ms, une fois chargee.

Trois regles gouvernent ces composants, et il faut les preserver.

1. **Rien du premier ecran n'est anime.** `Reveal` verifie la position du
   bloc au montage et ne masque jamais ce qui est deja visible. Le bandeau
   de l'accueil, marque `priority`, n'est jamais mis en fondu. Cela protege
   la perception de vitesse et le LCP.
2. **L'etat initial est toujours l'etat visible.** Le rendu serveur ne porte
   aucune classe de masquage : sans JavaScript, tout le contenu s'affiche.
   Seul le script peut masquer, jamais l'inverse.
3. **`prefers-reduced-motion` est verifie dans le composant et dans le CSS.**
   Sous cette preference, rien n'est masque et toutes les transitions sont
   neutralisees.

La marge racine haute de l'observateur, volontairement demesuree, evite un
piege : quand un element passe d'un coup de sous le viewport a au dessus,
par un saut vers le bas de page ou une position restauree, le ratio
d'intersection ne franchit aucun seuil et aucun rappel n'est emis. Sans
cette marge, le bloc resterait invisible pour toujours.

## Charte

La palette et les règles typographiques sont fixées en variables CSS en tête de
`src/styles/globals.css`. Elles ne se modifient pas sans validation de la charte.

- Papier `#F5F3EE` en fond, jamais de blanc pur hors cartes et champs.
- Grenat `#6E2A33` en accent, un seul emploi par page, jamais en aplat de fond.
- Spectral pour les titres, Archivo pour le texte courant.
- Filets fins comme seul élément graphique, aucune ombre portée, aucun dégradé,
  angles de 3 pixels au maximum.
- Aucune animation ni apparition au défilement. Seuls le survol et le focus
  changent d'état.

Les deux polices sont auto-hébergées par `next/font/google`, qui les télécharge à
la compilation et les sert depuis le domaine du site. Aucune requête n'est émise
vers les serveurs de Google à l'exécution. C'est une exigence RGPD.

## Déploiement sur Vercel

1. Pousser le dépôt sur GitHub.
2. Importer le projet sur Vercel, le préréglage Next.js est détecté seul.
3. Renseigner `NEXT_PUBLIC_FORMSPREE_ID` et `NEXT_PUBLIC_SITE_URL` dans les
   variables d'environnement du projet.
4. Déployer, puis brancher le domaine.

Aucune autre configuration n'est nécessaire, le projet n'utilise ni base de
données, ni service tiers hors Formspree.
