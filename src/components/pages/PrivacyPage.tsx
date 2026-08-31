import type { Locale } from "@/i18n/routes";
import type { Dictionary } from "@/i18n/types";
import styles from "./pages.module.css";

type Props = { locale: Locale; dict: Dictionary };

export default function PrivacyPage({ dict }: Props) {
  const { privacy } = dict;

  const textSections = [
    privacy.collected,
    privacy.purpose,
    privacy.recipients,
    privacy.retention,
  ];

  return (
    <>
      <div className={`container ${styles.pageHead}`}>
        <h1>{privacy.title}</h1>
      </div>

      <section className="container section">
        <div className={styles.legalSections}>
          <div className={styles.legalSection}>
            <h2>{privacy.controller.title}</h2>
            <ul className={styles.legalLines}>
              {privacy.controller.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          {textSections.map((section) => (
            <div className={styles.legalSection} key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ))}

          {/* Seul emploi du Grenat sur cette page. */}
          <div className={`accent-block ${styles.legalSection}`}>
            <h2>{privacy.rights.title}</h2>
            {privacy.rights.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.legalSection}>
            <h2>{privacy.fonts.title}</h2>
            {privacy.fonts.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
