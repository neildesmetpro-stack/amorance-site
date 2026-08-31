export const locales = ["fr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export const pageIds = [
  "home",
  "about",
  "activity",
  "faq",
  "contact",
  "legal",
  "privacy",
] as const;

export type PageId = (typeof pageIds)[number];

/**
 * Source unique des URL du site. Toute page ajoutée ici apparait
 * automatiquement dans le sitemap, les balises hreflang et le pied de page.
 */
export const slugs: Record<PageId, Record<Locale, string>> = {
  home: { fr: "", en: "" },
  about: { fr: "qui-sommes-nous", en: "about" },
  activity: { fr: "activite", en: "activity" },
  faq: { fr: "questions", en: "faq" },
  contact: { fr: "contact", en: "contact" },
  legal: { fr: "mentions-legales", en: "legal-notice" },
  privacy: { fr: "confidentialite", en: "privacy" },
};

/** Navigation principale de l'en-tete. */
export const mainNav: PageId[] = ["about", "activity", "faq", "contact"];

/** Navigation complete du pied de page, pages legales incluses. */
export const footerNav: PageId[] = [
  "home",
  "about",
  "activity",
  "faq",
  "contact",
  "legal",
  "privacy",
];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Chemin absolu d'une page dans une langue donnee, par exemple /fr/activite. */
export function pathFor(id: PageId, locale: Locale): string {
  const slug = slugs[id][locale];
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

/** Retrouve la page correspondant aux segments d'URL, ou null si inconnue. */
export function pageIdFromSegments(
  locale: Locale,
  segments: string[] | undefined,
): PageId | null {
  const slug = (segments ?? []).join("/");
  const match = pageIds.find((id) => slugs[id][locale] === slug);
  return match ?? null;
}

/** Toutes les combinaisons langue plus page, pour la generation statique. */
export function allRoutes(): { locale: Locale; id: PageId }[] {
  return locales.flatMap((locale) => pageIds.map((id) => ({ locale, id })));
}
