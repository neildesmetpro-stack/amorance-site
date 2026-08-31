import { fr } from "./fr";

/**
 * Le francais fait foi. Toute cle absente ou mal typee dans une autre
 * langue provoque une erreur de compilation.
 */
export type Dictionary = typeof fr;
