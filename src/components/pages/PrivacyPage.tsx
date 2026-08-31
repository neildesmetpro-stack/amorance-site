import Reveal from "@/components/Reveal";
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
          <Reveal className={styles.legalSection}>
            <h2>{privacy.controller.title}</h2>
            <ul className={styles.legalLines}>
              {privacy.controller.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </Reveal>

          {textSections.map((section) => (
            <Reveal className={styles.legalSection} key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Reveal>
          ))}

          {/* Seul emploi du Grenat sur cette page. */}
          <Reveal className={`accent-block ${styles.legalSection}`}>
            <h2>{privacy.rights.title}</h2>
            {privacy.rights.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal className={styles.legalSection}>
            <h2>{privacy.fonts.title}</h2>
            {privacy.fonts.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
