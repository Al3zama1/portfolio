import { SITE } from "../data/site";
import { ExternalLink } from "./ExternalLink";

const FOCUS = [
  "I build and configure routed and switched networks using OSPF, VLANs, and trunking.",
  "I secure lab networks with access control lists, VPNs, and device hardening.",
  "I troubleshoot broken networks by analyzing packets and working through root causes.",
  "I monitor lab devices with SNMP, syslog, and dashboards to catch problems early.",
  "I use Python to automate repetitive configuration and testing tasks.",
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
            realistic, controlled environments. My projects span routing, switching, VLANs, VPNs, and monitoring.
          </p>
          <p>
            Each lab is built from scratch, configured, tested, and then written up step by step. The goal is to
            understand <b>why</b> a configuration exists, what a fault looks like from the engineer’s side, and
            how to prove a fix actually works.
          </p>
          <p>
            The theory behind the labs and the full walkthroughs live in my public knowledge base at{" "}
            <ExternalLink className="text-accent" href={SITE.learnUrl}>{SITE.learnLabel}</ExternalLink>. This site
            is a personal learning record maintained by <b>{SITE.brand}</b>. It documents practice, not production
            experience.
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
