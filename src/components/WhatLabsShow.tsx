import { LABS, LAB_LESSONS } from "../data/labs";
import { ExternalLink } from "./ExternalLink";
import { Section } from "./Section";

export function WhatLabsShow() {
  return (
    <Section
      id="labs"
      tinted
      eyebrow="Why these labs matter"
      title="What Labs Show"
      intro="Each lab was built to answer a specific question about how IT systems work. The links open the lab that shows it, and the theory notes behind it, in my knowledge base."
    >
      <div className="grid grid-cols-[repeat(3,minmax(260px,1fr))] gap-4">
        {LAB_LESSONS.map((lesson) => {
          const lab = LABS.find((l) => l.id === lesson.labId);
          return (
            <div key={lesson.num} className="card flex flex-col">
              <div className="mb-2.5 font-mono text-[15px] tracking-wide text-muted">{lesson.num}</div>
              <h4 className="mb-2 text-[1.05rem] font-semibold">{lesson.title}</h4>
              <p className="text-[.95rem] text-muted">{lesson.text}</p>
              {lab?.walkthrough && (
                <div className="mt-auto pt-5">
                  <ExternalLink className="btn btn-alt btn-sm" href={lab.walkthrough}>
                    Read the walkthrough ↗
                  </ExternalLink>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
