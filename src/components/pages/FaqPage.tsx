import Link from "next/link";
import Reveal from "@/components/Reveal";
import { pathFor, type Locale } from "@/i18n/routes";
import type { Dictionary } from "@/i18n/types";
import styles from "./pages.module.css";

type Props = { locale: Locale; dict: Dictionary };

export default function FaqPage({ locale, dict }: Props) {
  const { faq } = dict;

  return (
    <>
      {/* Titre et premier paragraphe : affichage immediat. */}
      <div className={`container ${styles.pageHead}`}>
        <h1>{faq.title}</h1>
        <p className="intro">
          {faq.introBefore}
          {/* Seul emploi du Grenat sur cette page. */}
          <Link className={styles.accentLink} href={pathFor("contact", locale)}>
            {faq.introLink}
          </Link>
          {faq.introAfter}
        </p>
      </div>

      <section className="container section">
        <div className={styles.faqList}>
          {faq.items.map((item) => (
            <Reveal as="article" className={styles.faqItem} key={item.question}>
              <h2 className={styles.faqQuestion}>{item.question}</h2>
              <p>{item.answer}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
