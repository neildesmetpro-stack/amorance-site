import fs from "node:fs";
import path from "node:path";

const EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

/**
 * Cherche une image dans public/images et renvoie son chemin public,
 * ou null si le fichier n'a pas encore ete depose. Les bandeaux
 * s'affichent alors en aplat Bleu Amorance sans casser la mise en page.
 */
export function findImage(basename: string): string | null {
  for (const extension of EXTENSIONS) {
    const relative = path.posix.join("images", `${basename}${extension}`);
    const absolute = path.join(process.cwd(), "public", relative);
    if (fs.existsSync(absolute)) return `/${relative}`;
  }
  return null;
}
