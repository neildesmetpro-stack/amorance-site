"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./Banner.module.css";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type Props = {
  source: string;
  alt: string;
  /** Bandeau du premier ecran : affiche sans animation, pour ne pas retarder le LCP. */
  priority: boolean;
};

type State = "statique" | "chargement" | "charge";

/**
 * Image de bandeau. Une fois chargee, elle apparait en fondu depuis une
 * echelle de 1,03 vers 1,0 en 700 ms. L'etat initial est « statique »,
 * donc visible : sans JavaScript l'image s'affiche normalement.
 */
export default function BannerImage({ source, alt, priority }: Props) {
  const image = useRef<HTMLImageElement | null>(null);
  const [state, setState] = useState<State>("statique");

  useIsomorphicLayoutEffect(() => {
    const node = image.current;
    if (!node) return;

    if (priority) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Deja dans le cache du navigateur : aucune animation a jouer.
    if (node.complete) return;

    setState("chargement");

    const revele = () => setState("charge");
    node.addEventListener("load", revele);
    node.addEventListener("error", revele);

    // L'image a pu finir de charger entre le test et la pose de l'ecouteur.
    // Sans ce rattrapage, elle resterait a opacite 0.
    if (node.complete) revele();

    return () => {
      node.removeEventListener("load", revele);
      node.removeEventListener("error", revele);
    };
  }, [priority]);

  return (
    <Image
      ref={image}
      className={`${styles.image} ${state !== "statique" ? styles[state] : ""}`}
      src={source}
      alt={alt}
      fill
      sizes="(max-width: 68rem) 100vw, 68rem"
      priority={priority}
      loading={priority ? undefined : "lazy"}
    />
  );
}
