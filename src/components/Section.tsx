import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  tinted?: boolean;
  children: ReactNode;
}

/** A full-width banded section with the shared eyebrow, heading and intro. */
export function Section({ id, eyebrow, title, intro, tinted, children }: SectionProps) {
  return (
    <section id={id} className={`band py-18 ${tinted ? "band-tint" : ""}`}>
      <div className="eyebrow mb-2">{eyebrow}</div>
      <h2 className="mb-3 text-[clamp(1.8rem,4vw,2.4rem)] font-extrabold tracking-tight">{title}</h2>
      {intro && <p className="mb-6 max-w-[680px] text-[1.05rem] text-muted [&_b]:text-ink">{intro}</p>}
      {children}
    </section>
  );
}
