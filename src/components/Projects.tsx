import { LABS } from "../data/labs";
import { LabCard } from "./LabCard";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section
      id="projects"
      tinted
      eyebrow="Hands-on work"
      title="IT Projects"
      intro={
        <>
          Documented home labs. Each card links to what’s available for that lab: the <b>full walkthrough</b> in my
          knowledge base, a <b>video walkthrough</b> on YouTube, and the <b>configs on GitHub</b>.
        </>
      }
    >
      <div className="callout mb-4">
        Information technology is learned by doing. These projects document practical environments I built to
        understand how networks behave, how faults appear, and how configurations are tested.
      </div>
      <div className="mt-6 grid grid-cols-[minmax(0,380px)] justify-center gap-5 sm:grid-cols-2 sm:justify-normal lg:grid-cols-3">
        {LABS.map((lab) => (
          <LabCard key={lab.id} lab={lab} />
        ))}
      </div>
    </Section>
  );
}
