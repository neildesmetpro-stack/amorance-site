/**
 * Constantes de l'entreprise. Une seule source pour les mentions legales,
 * le pied de page et les donnees structurees.
 */
export const site = {
  name: "AMORANCE",
  legalName: "AMORANCE",
  owner: "Neil Desmet",
  email: "contact@amorance.fr",
  siren: "932 229 503",
  siret: "932 229 503 00044",
  address: {
    street: "1 rue du Haras",
    postalCode: "91240",
    city: "Saint-Michel-sur-Orge",
    country: "France",
  },
  foundedYear: 2026,
} as const;

/**
 * Domaine public du site. Renseigner NEXT_PUBLIC_SITE_URL sur Vercel
 * pour que le sitemap et les balises hreflang pointent vers le bon hote.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://amorance.fr"
).replace(/\/$/, "");

/** Identifiant du formulaire Formspree, voir le README. */
export const formspreeId =
  process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "REMPLACER_PAR_ID_FORMSPREE";

/** Texte alternatif de l'image de partage, identique dans les deux langues. */
export const ogImageAlt = "AMORANCE, Distribution France";

export const formspreeEndpoint = `https://formspree.io/f/${formspreeId}`;

export const formspreeIsConfigured =
  formspreeId !== "REMPLACER_PAR_ID_FORMSPREE" && formspreeId.length > 0;
