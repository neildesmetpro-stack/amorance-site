import BannerImage from "./BannerImage";
import { findImage } from "@/lib/images";
import styles from "./Banner.module.css";

type Props = {
  /** Nom du fichier sans extension, depose dans public/images. */
  name: string;
  /** Texte alternatif redige, ignore si le fichier est absent. */
  alt: string;
  /** Charge l'image sans differer, a reserver a la premiere vue. */
  priority?: boolean;
};

/**
 * Bandeau photographique pleine largeur du contenu, recouvert d'un voile
 * Bleu Amorance a 34 pour cent. En l'absence de fichier, le bandeau
 * s'affiche en aplat Bleu Amorance.
 */
export default function Banner({ name, alt, priority = false }: Props) {
  const source = findImage(name);

  if (!source) {
    return <div className={styles.fallback} role="presentation" />;
  }

  return (
    <div className={styles.root}>
      <BannerImage source={source} alt={alt} priority={priority} />
      <span className={styles.veil} aria-hidden="true" />
    </div>
  );
}
