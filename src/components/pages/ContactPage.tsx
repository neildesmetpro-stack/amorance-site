import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { pathFor, type Locale } from "@/i18n/routes";
import type { Dictionary } from "@/i18n/types";
import { site } from "@/lib/site";
import styles from "./pages.module.css";

type Props = { locale: Locale; dict: Dictionary };

export default function ContactPage({ locale, dict }: Props) {
  const { contact } = dict;

  return (
    <>
      {/* Titre et premier paragraphe : affichage immediat. */}
      <div className={`container ${styles.pageHead}`}>
        <h1>{contact.title}</h1>
        <p className="intro">{contact.intro}</p>
      </div>

      <section className="container section">
        <Reveal className={styles.contactGrid}>
          <ContactForm
            labels={dict.form}
            privacyHref={pathFor("privacy", locale)}
          />

          <aside className={styles.aside}>
            <div className={styles.asideBlock}>
              <h2 className={styles.asideTitle}>{contact.emailBlock.title}</h2>
              <p>{contact.emailBlock.text}</p>
              <p>
                <a className="sweep" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
            </div>

            <div className={styles.asideBlock}>
              <h2 className={styles.asideTitle}>{contact.postalBlock.title}</h2>
              <address className={styles.address}>
                {site.legalName}
                <br />
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city}
                <br />
                {site.address.country}
              </address>
            </div>
          </aside>
        </Reveal>
      </section>
    </>
  );
}
