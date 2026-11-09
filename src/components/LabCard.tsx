import type { Lab, ThumbStyle } from "../data/labs";
import { ExternalLink } from "./ExternalLink";

const THUMBS: Record<ThumbStyle, string> = {
  t1: "bg-[linear-gradient(135deg,color-mix(in_srgb,var(--accent)_38%,var(--surface)),var(--surface))]",
  t2: "bg-[linear-gradient(225deg,color-mix(in_srgb,var(--accent)_30%,var(--surface)),color-mix(in_srgb,var(--text)_10%,var(--surface)))]",
  t3: "bg-[linear-gradient(315deg,color-mix(in_srgb,var(--accent)_45%,var(--surface)),var(--surface)_70%)]",
};

export function LabCard({ lab }: { lab: Lab }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[18px] border border-line bg-surface transition hover:-translate-y-1 hover:border-accent">
      <div className={`relative h-40 ${THUMBS[lab.thumb]}`}>
        <span className="absolute top-3 left-3 rounded-full border border-line bg-bg/70 px-2.5 py-1 font-mono text-xs">
          {lab.label}
        </span>
      </div>

      <div className="px-[18px] pt-[18px] pb-2">
        <h3 className="mb-2 text-lg font-semibold">{lab.title}</h3>
        <div className="mb-2.5 font-mono text-xs font-bold uppercase tracking-widest text-accent">{lab.category}</div>
        <p className="mb-1.5 text-[.95rem] text-muted">{lab.description}</p>
        <div className="mt-3 mb-2 flex flex-wrap gap-2">
          {lab.chips.map((c) => (
            <span key={c} className="chip">{c}</span>
          ))}
        </div>
      </div>

      <div className="mt-auto flex flex-wrap gap-2.5 border-t border-line px-[18px] py-4">
        {lab.walkthrough && (
          <ExternalLink className="btn btn-sm flex-auto text-center" href={lab.walkthrough}>
            Lab Walkthrough ↗
          </ExternalLink>
        )}
        {lab.video && (
          <ExternalLink className="btn btn-alt btn-sm flex-auto text-center" href={lab.video}>
            Watch Video ↗
          </ExternalLink>
        )}
        {lab.github && (
          <ExternalLink className="btn btn-alt btn-sm flex-auto text-center" href={lab.github}>
            GitHub ↗
          </ExternalLink>
        )}
        {!lab.video && <span className="basis-full font-mono text-xs text-muted">Video walkthrough coming soon</span>}
      </div>
    </article>
  );
}
