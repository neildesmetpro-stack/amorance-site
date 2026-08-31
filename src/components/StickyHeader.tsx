"use client";

import { useEffect, useState, type ReactNode } from "react";
import styles from "./Header.module.css";

const SEUIL = 40;

/**
 * Enveloppe de l'en-tete. Au dela de 40 pixels de defilement, l'en-tete
 * gagne son filet bas et une ombre tres legere. Il ne se reduit pas,
 * ne se cache pas et ne change pas de fond.
 *
 * L'ecouteur est passif et les appels sont regroupes sur une frame.
 */
export default function StickyHeader({ children }: { children: ReactNode }) {
  const [defile, setDefile] = useState(false);

  useEffect(() => {
    let frame = 0;

    const mesurer = () => {
      frame = 0;
      setDefile(window.scrollY > SEUIL);
    };

    const auDefilement = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(mesurer);
    };

    mesurer();
    window.addEventListener("scroll", auDefilement, { passive: true });

    return () => {
      window.removeEventListener("scroll", auDefilement);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className={`${styles.root} ${defile ? styles.defile : ""}`}>
      {children}
    </header>
  );
}
