import Link from "next/link";
import Logotype from "@/components/Logotype";
import { archivo, spectral } from "@/lib/fonts";
import styles from "./not-found.module.css";
import "@/styles/globals.css";

/**
 * Page 404. Elle porte sa propre structure de document, la mise en page
 * commune vivant sous le segment de langue. Le texte est bilingue,
 * la langue demandee n'etant pas connue a ce stade.
 */
export default function NotFound() {
  return (
    <html lang="fr" className={`${spectral.variable} ${archivo.variable}`}>
      <body>
        <div className={`container ${styles.root}`}>
          <Logotype size="footer" />
          <h1>Page introuvable</h1>
          <p className="measure">
            La page demandée n’existe pas ou a été déplacée. The page you
            requested does not exist or has been moved.
          </p>
          <p className={styles.links}>
            <Link href="/fr">Accueil</Link>
            <span className={styles.separator} aria-hidden="true">
              /
            </span>
            <Link href="/en">Home</Link>
          </p>
        </div>
      </body>
    </html>
  );
}
