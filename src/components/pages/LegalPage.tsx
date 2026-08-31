import Link from "next/link";
import Reveal from "@/components/Reveal";
import { pathFor, type Locale } from "@/i18n/routes";
import type { Dictionary } from "@/i18n/types";
import styles from "./pages.module.css";

type Props = { locale: Locale; dict: Dictionary };

export default function LegalPage({ locale, dict }: Props) {
  const { legal } = dict;

  return (
    <>
      <div className={`container ${styles.pageHead}`}>
        <h1>{legal.title}</h1>
      </div>

      <section className="container section">
        <div className={styles.legalSections}>
          {/* Seul emploi du Grenat sur cette page. */}
          <Reveal className={`accent-block ${styles.legalSection}`}>
            <h2>{legal.publisher.title}</h2>
            <ul className={styles.legalLines}>
              {legal.publisher.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className={styles.legalSection}>
            <h2>{legal.hosting.title}</h2>
            <ul className={styles.legalLines}>
              {legal.hosting.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className={styles.legalSection}>
            <h2>{legal.intellectualProperty.title}</h2>
            {legal.intellectualProperty.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal className={styles.legalSection}>
            <h2>{legal.liability.title}</h2>
            {legal.liability.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          <p>
            {legal.privacyLink.textBefore}
            <Link href={pathFor("privacy", locale)}>
              {legal.privacyLink.linkText}
            </Link>
            {legal.privacyLink.textAfter}
          </p>
        </div>
      </section>
    </>
  );
}
