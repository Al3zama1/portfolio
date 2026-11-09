import { SITE } from "../data/site";
import { useActiveSection } from "../hooks/useActiveSection";
import { useTheme } from "../hooks/useTheme";
import { ExternalLink } from "./ExternalLink";

const NAV = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "labs", label: "What Labs Show" },
  { id: "contact", label: "Contact" },
];

const navLink = "relative rounded-lg px-3.5 py-2 text-sm font-medium text-ink no-underline transition-colors hover:bg-chip";
const navActive = "bg-chip after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:rounded-sm after:bg-accent";

export function Header() {
  const active = useActiveSection(NAV.map((n) => n.id));
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-10 border-b border-line bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 px-6 py-3">
        <a href="#home" className="flex items-center gap-3 text-inherit no-underline">
          <span className="grid size-11 place-items-center rounded-xl border border-line bg-chip font-mono text-[15px] font-bold text-accent">
            {SITE.initials}
          </span>
          <span className="flex flex-col leading-tight">
            <b className="text-lg text-ink">{SITE.brand}</b>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">Information Technology</span>
          </span>
        </a>

        <div className="flex flex-wrap items-center gap-4">
          <nav className="flex flex-wrap gap-1.5">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} className={`${navLink} ${active === n.id ? navActive : ""}`}>
                {n.label}
              </a>
            ))}
            <ExternalLink
              href={SITE.learnUrl}
              className={`${navLink} border border-accent/35 text-accent`}
            >
              Learn ↗
            </ExternalLink>
          </nav>

          <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className="grid size-[38px] cursor-pointer place-items-center rounded-lg border border-line bg-chip text-ink transition hover:rotate-[18deg] hover:border-accent"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
              {theme === "dark" ? (
                <>
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
                </>
              ) : (
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
