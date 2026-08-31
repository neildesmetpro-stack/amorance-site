"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  isLocale,
  locales,
  pageIdFromSegments,
  pathFor,
  type Locale,
} from "@/i18n/routes";
import styles from "./LocaleSwitcher.module.css";

type Props = {
  current: Locale;
  /** Libelle du groupe, traduit. */
  label: string;
  /** Nom de chaque langue dans sa propre langue. */
  names: Record<Locale, string>;
};

/**
 * Selecteur de langue. Il conserve la page courante en retrouvant
 * la page depuis l'URL, puis en composant l'URL equivalente dans l'autre langue.
 */
export default function LocaleSwitcher({ current, label, names }: Props) {
  const pathname = usePathname();

  function hrefFor(target: Locale): string {
    const segments = pathname.split("/").filter(Boolean);
    const [first, ...rest] = segments;

    if (first && isLocale(first)) {
      const id = pageIdFromSegments(first, rest);
      if (id) return pathFor(id, target);
    }

    return pathFor("home", target);
  }

  return (
    <nav className={styles.root} aria-label={label}>
      <ul className={styles.list}>
        {locales.map((locale) => {
          const isCurrent = locale === current;
          return (
            <li key={locale}>
              {isCurrent ? (
                <span className={styles.current} aria-current="true">
                  <span className="visually-hidden">{names[locale]}</span>
                  <span aria-hidden="true">{locale.toUpperCase()}</span>
                </span>
              ) : (
                <Link className={styles.link} href={hrefFor(locale)} hrefLang={locale}>
                  <span className="visually-hidden">{names[locale]}</span>
                  <span aria-hidden="true">{locale.toUpperCase()}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
