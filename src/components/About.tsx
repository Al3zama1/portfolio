import { SITE } from "../data/site";
import { ExternalLink } from "./ExternalLink";

const FOCUS = [
  "I’m building networking labs covering switching, routing, VLANs, Spanning Tree, and network security.",
  "I’m expanding into Windows Server and Active Directory to cover the systems and identity side that IT support and helpdesk roles rely on.",
  "I focus on understanding not just how to configure something, but why it works and how it fails.",
  "I treat each lab as a step toward real-world IT support, helpdesk, and network engineering roles.",
];

export function About() {
  return (
    <section id="about" className="pb-18">
      <hr className="mb-14 border-0 border-t border-line" />
      <div className="grid items-stretch gap-8 md:grid-cols-[1.2fr_1fr]">
        <div className="min-w-0 space-y-4 text-ink/85 [&_b]:text-ink">
          <div className="eyebrow mb-2">About</div>
          <h2 className="!mt-0 mb-3 text-[clamp(1.8rem,4vw,2.4rem)] font-extrabold tracking-tight text-ink">About Me</h2>
          <p>
            I hold a <b>bachelor’s degree in computer science</b> and the <b>CompTIA A+</b> and{" "}
            <b>Cisco CCNA</b> certifications. My home labs are where I turn that knowledge into hands-on practice.
          </p>
          <p>
            I document hands-on IT and networking labs focused on learning how networks and systems work in
            realistic, controlled environments. Each lab is built from scratch, configured, tested, and then written up step by step. The goal is to
            understand <b>why</b> a configuration exists, what a fault looks like from an IT point of view, and how to prove a fix actually works.
          </p>
          <p>
            I write articles on technology topics and later turn that theory into practical skills by building labs. My articles along with the lab walkthroughs are available at my public 
            knowledge base at{" "}
            <ExternalLink className="text-accent" href={SITE.learnUrl}>{SITE.learnLabel}</ExternalLink>.
          </p>
        </div>

        <div className="card glance min-w-0">
          <h3 className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted">Areas of Focus</h3>
          <ul className="bullets space-y-2.5 text-muted">
            {FOCUS.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
