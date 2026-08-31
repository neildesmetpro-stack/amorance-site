import Banner from "@/components/Banner";
import type { Locale } from "@/i18n/routes";
import type { Dictionary } from "@/i18n/types";
import styles from "./pages.module.css";

type Props = { locale: Locale; dict: Dictionary };

export default function ActivityPage({ dict }: Props) {
  const { activity, home } = dict;

  return (
    <>
      <div className={`container ${styles.pageHead}`}>
        <h1>{activity.title}</h1>
        <p className="intro">{activity.intro}</p>
      </div>

      <div className={`container ${styles.banner}`}>
        <Banner name="activite" alt={activity.bannerAlt} />
      </div>

      <section className="container section">
        <h2 className={styles.sectionTitle}>{activity.categories.title}</h2>
        <div className="grid-4">
          {home.distribute.items.map((item) => (
            <div className={styles.category} key={item.name}>
              <h3 className={styles.categoryName}>{item.name}</h3>
              <p className={styles.categoryText}>{item.text}</p>
            </div>
          ))}
        </div>
        <p className={`measure ${styles.note}`}>{activity.categories.note}</p>
      </section>

      <section className="container section">
        <h2 className={styles.sectionTitle}>{activity.process.title}</h2>
        <ol className={styles.steps}>
          {activity.process.steps.map((step) => (
            <li className={styles.step} key={step.number}>
              <span className={styles.stepNumber} aria-hidden="true">
                {step.number}
              </span>
              <div className={styles.stepBody}>
                <h3>{step.name}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="container section">
        <div className={styles.twoColumn}>
          <h2>{activity.logistics.title}</h2>
          <div className="stack measure">
            {activity.logistics.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="container section">
        {/* Seul emploi du Grenat sur cette page. */}
        <div className="accent-block">
          <h2 className={styles.sectionTitle}>{activity.expectations.title}</h2>
          <ul className="rule-list">
            {activity.expectations.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
