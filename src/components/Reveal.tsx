"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import styles from "./Reveal.module.css";

/**
 * useLayoutEffect n'existe pas au rendu serveur. On bascule sur useEffect
 * dans ce cas pour eviter l'avertissement de React.
 */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type Props = {
  children: ReactNode;
  /** Retard avant l'apparition, en millisecondes. Sert au decalage des grilles. */
  delay?: number;
  /** Element rendu, pour rester valide dans une liste ou une grille. */
  as?: "div" | "li" | "section" | "article";
  className?: string;
};

type State = "statique" | "masque" | "apparu";

/**
 * Apparition au premier passage dans le viewport : opacite de 0 a 1 et
 * translation de 12 pixels vers le haut, en 500 ms, courbe ease-out.
 *
 * Trois garanties tiennent a l'etat initial « statique » :
 * - sans JavaScript, le contenu reste visible, le script seul peut masquer ;
 * - sous prefers-reduced-motion, rien n'est jamais masque ;
 * - un element deja visible au chargement n'est pas anime, ce qui protege
 *   la perception de vitesse et le LCP.
 */
export default function Reveal({
  children,
  delay = 0,
  as = "div",
  className,
}: Props) {
  const element = useRef<HTMLElement | null>(null);
  const [state, setState] = useState<State>("statique");

  useIsomorphicLayoutEffect(() => {
    const node = element.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    // Deja dans le premier ecran : on n'anime pas.
    if (node.getBoundingClientRect().top < window.innerHeight) return;

    setState("masque");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          setState("apparu");
          observer.disconnect();
        }
      },
      // La marge haute demesuree fait entrer dans la zone observee tout ce qui
      // est passe au dessus du viewport. Sans elle, un saut direct vers le bas
      // de page, une ancre ou une position restauree amenent l'element de
      // « sous le viewport » a « au dessus » sans jamais franchir le seuil :
      // aucun rappel n'est emis et le contenu reste invisible pour toujours.
      // La marge basse, elle, retarde l'apparition jusqu'a l'entree reelle.
      { rootMargin: "100000px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as;
  const classes = [className, state !== "statique" ? styles[state] : null]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      ref={(node: HTMLElement | null) => {
        element.current = node;
      }}
      className={classes || undefined}
      style={state === "apparu" && delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
