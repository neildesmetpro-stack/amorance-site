import Link from "next/link";
import Logotype from "./Logotype";
import { footerNav, pathFor, type Locale } from "@/i18n/routes";
import type { Dictionary } from "@/i18n/types";
import { site } from "@/lib/site";
import styles from "./Footer.module.css";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

/** Pied de page present sur toutes les pages, navigation complete incluse. */
export default function Footer({ locale, dict }: Props) {
  return (
    <footer className={styles.root}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Logotype size="footer" tone="paper" mention={dict.logotype.mention} />
        </div>

        <nav className={styles.nav} aria-label={dict.nav.footerLabel}>
          <ul className={styles.list}>
            {footerNav.map((id) => (
              <li key={id}>
                <Link className={styles.link} href={pathFor(id, locale)}>
                  {dict.nav[id]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.contact}>
          <p className={styles.contactLabel}>{dict.footer.contactLabel}</p>
          <p>
            <a className={styles.link} href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <address className={styles.address}>
            {site.address.street}
            <br />
            {site.address.postalCode} {site.address.city}
            <br />
            {site.address.country}
          </address>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>{dict.footer.copyright}</p>
      </div>
    </footer>
  );
}
