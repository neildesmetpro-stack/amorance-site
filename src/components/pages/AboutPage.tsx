import type { Locale } from "@/i18n/routes";
import type { Dictionary } from "@/i18n/types";
import styles from "./pages.module.css";

type Props = { locale: Locale; dict: Dictionary };

export default function AboutPage({ dict }: Props) {
  const { about } = dict;

  return (
    <>
      <div className={`container ${styles.pageHead}`}>
        <h1>{about.title}</h1>
        <p className="intro">{about.intro}</p>
      </div>

      <section className="container section">
        <div className={styles.twoColumn}>
          <h2>{about.why.title}</h2>
          <div className="stack measure">
            {about.why.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="container section">
        <div className={styles.twoColumn}>
          <h2>{about.method.title}</h2>
          <div className="stack measure">
            {about.method.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="container section">
        <h2 className={styles.sectionTitle}>{about.commitments.title}</h2>
        <ul className={styles.commitments}>
          {about.commitments.items.map((item) => (
            <li className={styles.commitment} key={item.name}>
              <h3 className={styles.commitmentName}>{item.name}</h3>
              <p className={styles.commitmentText}>{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="container section">
        {/* Seul emploi du Grenat sur cette page. */}
        <div className="accent-block">
          <h2 className={styles.sectionTitle}>{about.notDo.title}</h2>
          <ul className="rule-list">
            {about.notDo.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
