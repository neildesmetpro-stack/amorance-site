import Banner from "@/components/Banner";
import Reveal from "@/components/Reveal";
import type { Locale } from "@/i18n/routes";
import type { Dictionary } from "@/i18n/types";
import styles from "./pages.module.css";

type Props = { locale: Locale; dict: Dictionary };

export default function ActivityPage({ dict }: Props) {
  const { activity, home } = dict;

  return (
    <>
      {/* Titre et premier paragraphe : affichage immediat. */}
      <div className={`container ${styles.pageHead}`}>
        <h1>{activity.title}</h1>
        <p className="intro">{activity.intro}</p>
      </div>

      <div className={`container ${styles.banner}`}>
        <Banner name="activite" alt={activity.bannerAlt} />
      </div>

      <section className="container section">
        <Reveal>
          <h2 className={styles.sectionTitle}>{activity.categories.title}</h2>
        </Reveal>
        <div className="grid-4">
          {home.distribute.items.map((item, index) => (
            <Reveal
              className={styles.category}
              delay={index * 70}
              key={item.name}
            >
              <h3 className={styles.categoryName}>{item.name}</h3>
              <p className={styles.categoryText}>{item.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className={`measure ${styles.note}`}>{activity.categories.note}</p>
        </Reveal>
      </section>

      <section className="container section">
        <Reveal>
          <h2 className={styles.sectionTitle}>{activity.process.title}</h2>
        </Reveal>
        <ol className={styles.steps}>
          {activity.process.steps.map((step, index) => (
            <Reveal
              as="li"
              className={styles.step}
              delay={index * 70}
              key={step.number}
            >
              <span className={styles.stepNumber} aria-hidden="true">
                {step.number}
              </span>
              <div className={styles.stepBody}>
                <h3>{step.name}</h3>
                <p>{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="container section">
        <Reveal className={styles.twoColumn}>
          <h2>{activity.logistics.title}</h2>
          <div className="stack measure">
            {activity.logistics.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="container section">
        {/* Seul emploi du Grenat sur cette page. */}
        <Reveal className="accent-block">
          <h2 className={styles.sectionTitle}>{activity.expectations.title}</h2>
          <ul className="rule-list">
            {activity.expectations.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </section>
    </>
  );
}
