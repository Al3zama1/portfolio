import { SITE } from "../data/site";
import { ExternalLink } from "./ExternalLink";

export function Hero() {
  return (
    <section id="home" className="grid items-stretch gap-8 pb-14 pt-22 md:grid-cols-[1.2fr_1fr]">
      <div className="min-w-0 animate-rise self-center">
        <div className="eyebrow text-[13px] tracking-[0.22em]">Educational Home Labs</div>
        <h1 className="mt-[.25em] mb-[.1em] text-[clamp(2.6rem,6.5vw,4.4rem)] font-extrabold leading-[1.05] tracking-tight">
          {SITE.name}
        </h1>
        <p className="font-mono text-[clamp(1rem,2.2vw,1.5rem)] font-bold uppercase tracking-[0.25em] text-accent">
          IT and Network Engineering
        </p>
        <p className="mt-5 mb-3 max-w-[600px] text-[clamp(1.3rem,2.4vw,1.9rem)] font-bold leading-tight">
          Building information technology skills through hands-on labs and practical experimentation.
        </p>
        <p className="max-w-[560px] text-muted">
          This portfolio collects my home lab projects as I build toward a career in IT, from help desk and
          systems support to networking. Each lab links to its full walkthrough in my knowledge base, plus a
          video and GitHub repo where available.
        </p>
        <div className="mt-3 flex flex-wrap gap-2.5">
          <a className="btn" href="#projects">View My Labs</a>
          <ExternalLink className="btn btn-alt" href={SITE.learnUrl}>Knowledge Base ↗</ExternalLink>
          {SITE.youtubeUrl && <ExternalLink className="btn btn-alt" href={SITE.youtubeUrl}>YouTube Channel ↗</ExternalLink>}
          {SITE.linkedinUrl && <ExternalLink className="btn btn-alt" href={SITE.linkedinUrl}>LinkedIn ↗</ExternalLink>}
        </div>
      </div>

      <div className="card glance min-w-0 animate-rise [animation-delay:.15s]">
        <h3 className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted">At a Glance</h3>
        <ul className="bullets space-y-2.5 text-muted [&_b]:text-ink">
          <li><b>Documented home labs:</b> Built, tested, and written up end to end.</li>
          <li>
            <b>Knowledge base:</b> Theory notes and full lab walkthroughs at{" "}
            <ExternalLink className="text-accent" href={SITE.learnUrl}>{SITE.learnLabel}</ExternalLink>.
          </li>
          <li><b>YouTube walkthroughs:</b> Video guides for the labs as they are released.</li>
          <li><b>Areas practiced:</b> Routing, switching, VLANs, VPNs, and monitoring.</li>
          <li><b>Tools:</b> Packet Tracer, GNS3, Wireshark, and VMWare Workstation.</li>
          <li><b>Documentation:</b> Topologies, configs, and outputs in every lab write-up.</li>
          <li><b>Purpose:</b> Hands-on learning toward a career in IT.</li>
        </ul>
        {/* <p className="mt-3.5 border-t border-line pt-3 text-[12.5px] text-muted">
          Everything on this site is a personal, self-directed learning project carried out in my own lab.
        </p> */}
      </div>
    </section>
  );
}
