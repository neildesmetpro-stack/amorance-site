import styles from "./Logotype.module.css";

type LogotypeSize = "header" | "hero" | "footer";
type LogotypeTone = "blue" | "paper";

type Props = {
  /** Taille du bloc, chaque taille ajuste l'interlettrage selon la charte. */
  size?: LogotypeSize;
  /** Bleu sur fond clair, Papier sur fond Bleu ou Encre. */
  tone?: LogotypeTone;
  /** Mention placee sous le filet, identique dans les deux langues. */
  mention?: string;
  /** Le mot AMORANCE porte le titre de premier niveau sur l'accueil. */
  asHeading?: boolean;
};

/**
 * Logotype typographique. Aucun symbole, aucune illustration.
 * AMORANCE en Spectral 500, filet de 60 pixels, puis la mention.
 */
export default function Logotype({
  size = "header",
  tone = "blue",
  mention = "Distribution France",
  asHeading = false,
}: Props) {
  const Word = asHeading ? "h1" : "span";

  return (
    <span className={`${styles.root} ${styles[size]} ${styles[tone]}`}>
      <Word className={styles.word}>AMORANCE</Word>
      <span className={styles.rule} aria-hidden="true" />
      <span className={styles.mention}>{mention}</span>
    </span>
  );
}
