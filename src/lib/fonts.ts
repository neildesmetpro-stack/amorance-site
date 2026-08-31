import { Archivo, Spectral } from "next/font/google";

/**
 * Polices auto-hebergees par Next au moment de la compilation.
 * Aucune requete n'est emise vers les serveurs de Google a l'execution.
 */
export const spectral = Spectral({
  subsets: ["latin"],
  // La graisse 600 n'est utilisee nulle part : la charger couterait
  // un fichier de police de plus au premier rendu.
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-title",
});

export const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-body",
});
