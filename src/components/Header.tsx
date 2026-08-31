import Link from "next/link";
import Logotype from "./Logotype";
import LocaleSwitcher from "./LocaleSwitcher";
import { mainNav, pathFor, type Locale, type PageId } from "@/i18n/routes";
import type { Dictionary } from "@/i18n/types";
import styles from "./Header.module.css";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

/** En-tete present sur toutes les pages. */
export default function Header({ locale, dict }: Props) {
  return (
    <header className={styles.root}>
      <div className={`container ${styles.inner}`}>
        <Link className={styles.brand} href={pathFor("home", locale)}>
          <Logotype size="header" mention={dict.logotype.mention} />
          <span className="visually-hidden">{dict.nav.home}</span>
        </Link>

        <div className={styles.right}>
          <nav aria-label={dict.nav.mainLabel}>
            <ul className={styles.list}>
              {mainNav.map((id: PageId) => (
                <li key={id}>
                  <Link className={styles.link} href={pathFor(id, locale)}>
                    {dict.nav[id]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <LocaleSwitcher
            current={locale}
            label={dict.nav.languageLabel}
            names={dict.nav.languageNames}
          />
        </div>
      </div>
    </header>
  );
}
