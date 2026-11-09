import { useEffect, useState } from "react";

/**
 * Returns the id of the section the reader is in: the last section whose top
 * has passed a line 35% down the screen. Every section on screen is tracked,
 * so short sections can't be skipped when scrolling quickly in either direction.
 */
export function useActiveSection(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join(",");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const pick = () => {
      const line = window.innerHeight * 0.35;
      let current: string | null = null;
      for (const el of sections) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
      }
      // Last section is too short to reach the line: mark it once its bottom is on screen.
      const last = sections[sections.length - 1];
      if (last.getBoundingClientRect().bottom <= window.innerHeight + 2) current = last.id;
      setActive(current);
    };

    // Many thresholds so the observer fires often as sections move, in both directions.
    const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);
    const observer = new IntersectionObserver(pick, { threshold: thresholds });
    sections.forEach((el) => observer.observe(el));
    pick();

    window.addEventListener("resize", pick);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", pick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return active;
}