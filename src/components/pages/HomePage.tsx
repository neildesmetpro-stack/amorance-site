import Link from "next/link";
import Banner from "@/components/Banner";
import Logotype from "@/components/Logotype";
import { pathFor, type Locale } from "@/i18n/routes";
import type { Dictionary } from "@/i18n/types";
import styles from "./pages.module.css";

type Props = { locale: Locale; dict: Dictionary };

export default function HomePage({ locale, dict }: Props) {
  const { home } = dict;

  return (
    <>
      <div className={`container ${styles.hero}`}>
        <div className={styles.heroGrid}>
          <Logotype size="hero" asHeading mention={dict.logotype.mention} />
          <p className="lede">{home.lede}</p>
        </div>
      </div>

      <div className={`container ${styles.banner}`}>
        <Banner name="accueil" alt={home.bannerAlt} priority />
      </div>

      <section className="container section">
        <h2 className={styles.sectionTitle}>{home.distribute.title}</h2>
        <div className="grid-4">
          {home.distribute.items.map((item) => (
            <div className={styles.category} key={item.name}>
              <h3 className={styles.categoryName}>{item.name}</h3>
              <p className={styles.categoryText}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className={styles.twoColumn}>
          <h2>{home.approach.title}</h2>
          <div className="stack measure">
            {home.approach.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="container section">
        <div className={styles.twoColumn}>
          <h2>{home.commitments.title}</h2>
          <ul className="rule-list">
            {home.commitments.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container section">
        {/* Seul emploi du Grenat sur cette page. */}
        <div className={`accent-block ${styles.brandBox}`}>
          <h2>{home.brands.title}</h2>
          <p className="measure">{home.brands.text}</p>
          <Link className={styles.cta} href={pathFor("contact", locale)}>
            {home.brands.cta}
          </Link>
        </div>
      </section>
    </>
  );
}
