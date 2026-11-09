import { SITE } from "../data/site";
import { Section } from "./Section";

interface Row {
  icon: string;
  label: string;
  value: string;
  href: string;
}

export function Contact() {
  const rows: Row[] = [
    { icon: "@", label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: "in", label: "LinkedIn", value: SITE.linkedinLabel, href: SITE.linkedinUrl },
    { icon: "yt", label: "YouTube", value: SITE.brand, href: SITE.youtubeUrl },
    { icon: "gh", label: "GitHub", value: SITE.githubLabel, href: SITE.githubUrl },
    { icon: "kb", label: "Knowledge base", value: SITE.learnLabel, href: SITE.learnUrl },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Let’s connect"
      title="Contact"
      intro="Open to entry-level IT and network roles, lab collaboration, and feedback on my walkthroughs. Email is the fastest way to reach me."
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-3">
        {rows
          .filter((r) => r.href)
          .map((r) => {
            const external = r.href.startsWith("http");
            return (
              <a
                key={r.label}
                href={r.href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex min-w-0 items-center gap-3.5 rounded-2xl border border-line bg-surface px-4 py-3.5 text-ink no-underline transition hover:-translate-y-0.5 hover:border-accent"
              >
                <span className="grid size-10 flex-none place-items-center rounded-[10px] bg-chip font-mono text-sm font-bold text-accent">
                  {r.icon}
                </span>
                <span className="min-w-0 [overflow-wrap:anywhere]">
                  <small className="block font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-muted">
                    {r.label}
                  </small>
                  {r.value}
                </span>
                <span className="ml-auto text-accent">↗</span>
              </a>
            );
          })}
        <div className="callout col-span-full mt-1 flex gap-3.5">
          <span className="text-muted">ⓘ</span>
          <span>
            <b>Availability:</b> open to entry-level roles. I usually reply within one to two business days.
          </span>
        </div>
      </div>
    </Section>
  );
}
