import { SKILL_GROUPS, TOOLS } from "../data/skills";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Capability"
      title="Skills & Technologies"
      intro="Everything below is taken from the labs on this page. There are deliberately no percentages or star ratings. A skill is either practised in a documented lab here, or it is not listed."
    >
      <div className="eyebrow mb-2">Tools &amp; technologies across these labs</div>
      <div className="mt-2.5 mb-6 flex flex-wrap gap-2.5">
        {TOOLS.map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
        {SKILL_GROUPS.map((g) => (
          <div key={g.title} className="card">
            <h3 className="mb-2.5 border-b border-line pb-2.5 font-semibold">{g.title}</h3>
            <ul className="bullets-sm space-y-2.5 text-[.95rem] text-muted">
              {g.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
