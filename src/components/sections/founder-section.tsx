import {
  BrainCircuit,
  Database,
  Cpu,
  Workflow,
  Cloud,
  DatabaseZap,
  Github,
  Linkedin
} from "lucide-react";
import { MotionSection } from "@/components/animation/motion-section";
import { founderCapabilities } from "@/lib/site-data";

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const capabilityIcons = [
  BrainCircuit, // AI/ML Development
  Database,     // Backend Engineering
  Cpu,          // FastAPI Systems
  DatabaseZap,  // REST APIs
  Cloud,        // SQL Architecture
  Workflow      // Enterprise Automation
];

export function FounderSection() {
  return (
    <MotionSection className="bg-north-charcoal py-16 md:py-24 border-t border-north-line transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* DESKTOP LAYOUT (visible on lg screens and wider) */}
        <div className="hidden lg:block space-y-12">
          {/* Header */}
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase text-north-accent tracking-wider">FOUNDER</p>
            <h2 className="mt-4 text-[32px] font-bold tracking-tight text-neutral-900 dark:text-white">
              Meet the Builder Behind North Owl
            </h2>
            <p className="mt-3 text-[18px] leading-8 text-north-muted">
              Learn about the technical founder driving the engineering discipline, systems thinking, and AI execution at North Owl.
            </p>
          </div>

          {/* Grid structure 30/70 */}
          <div className="grid gap-8 grid-cols-10 items-start">
            {/* Left Column (30% equivalent in a 10-col grid) */}
            <div className="col-span-3">
              <div className="premium-border max-w-[380px] w-full rounded-2xl bg-north-card/30 p-6 border border-north-line flex flex-col items-center text-center shadow-lg">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-north-accent/30 to-transparent" />
                
                {/* 140x140px Avatar */}
                <div className="relative h-[140px] w-[140px] rounded-xl border border-north-line bg-neutral-900 dark:bg-neutral-950 shadow-md flex items-center justify-center overflow-hidden flex-none">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(96,165,250,0.12),transparent_70%)]" />
                  <span className="relative text-4xl font-bold tracking-tight text-white dark:text-neutral-200 select-none">
                    SR
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold tracking-tight text-neutral-900 dark:text-white">Shimant Ranjan</h3>
                <p className="mt-1 text-xs font-semibold text-north-accent uppercase tracking-wider">Founder & CEO</p>
                
                <div className="mt-3.5 text-xs text-north-muted font-medium space-y-0.5">
                  <p>AI/ML Developer</p>
                  <p>Backend Systems Engineer</p>
                </div>

                {/* Compact Achievements Badge text */}
                <div className="mt-5 w-full border-t border-north-line pt-4 text-left space-y-2">
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-neutral-700 dark:text-neutral-300">
                    <span className="text-xs flex-none">🏆</span>
                    <span>IBM BOB Dev 2026 Winner</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-neutral-700 dark:text-neutral-300">
                    <span className="text-xs flex-none">🏆</span>
                    <span>OpenAI × Outskill Finalist</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-5 flex justify-center gap-2.5 border-t border-north-line pt-4 w-full">
                  <a
                    href="https://www.linkedin.com/company/north-owl/"
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-8 w-8 place-items-center rounded-full border border-north-line bg-north-charcoal/10 text-north-muted transition hover:border-north-accent/50 hover:text-neutral-900 dark:hover:text-white"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="https://github.com/shimantranjan"
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-8 w-8 place-items-center rounded-full border border-north-line bg-north-charcoal/10 text-north-muted transition hover:border-north-accent/50 hover:text-neutral-900 dark:hover:text-white"
                    aria-label="GitHub"
                  >
                    <Github className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="https://x.com/ShimantRanjan"
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-8 w-8 place-items-center rounded-full border border-north-line bg-north-charcoal/10 text-north-muted transition hover:border-north-accent/50 hover:text-neutral-900 dark:hover:text-white"
                    aria-label="X (Twitter)"
                  >
                    <XIcon className="h-3 w-3 fill-current" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column (70% equivalent in a 10-col grid) */}
            <div className="col-span-7 space-y-8">
              <div>
                <h3 className="text-[52px] font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.1] text-balance">
                  Building AI Systems,<br />
                  Automation Platforms,<br />
                  and Modern Backend Infrastructure.
                </h3>
                <p className="mt-6 max-w-[750px] text-[18px] leading-8 text-north-muted">
                  Shimant Ranjan is the founder of North Owl, focused on building practical AI systems, enterprise automation solutions, scalable backend infrastructure, and intelligent software products for modern organizations.
                </p>
              </div>

              {/* Achievements Badges Row */}
              <div className="flex gap-4 border-t border-north-line pt-8">
                <div className="flex items-center gap-3.5 rounded-xl border border-north-line bg-north-charcoal/10 dark:bg-white/[0.035] px-4 py-3.5 flex-1 min-w-[200px]">
                  <span className="text-2xl flex-none">🏆</span>
                  <div>
                    <p className="text-sm font-bold text-neutral-900 dark:text-white leading-tight">IBM BOB Dev 2026</p>
                    <p className="mt-1 text-[11px] font-medium text-north-muted">International Winner</p>
                  </div>
                </div>
                <div className="flex items-center gap-3.5 rounded-xl border border-north-line bg-north-charcoal/10 dark:bg-white/[0.035] px-4 py-3.5 flex-1 min-w-[200px]">
                  <span className="text-2xl flex-none">🏆</span>
                  <div>
                    <p className="text-sm font-bold text-neutral-900 dark:text-white leading-tight">OpenAI × Outskill</p>
                    <p className="mt-1 text-[11px] font-medium text-north-muted">Top 1000 / 20,000+</p>
                  </div>
                </div>
              </div>

              {/* Expertise Grid */}
              <div className="border-t border-north-line pt-8">
                <h4 className="font-mono text-xs uppercase tracking-wider text-north-accent mb-4">Core Expertise</h4>
                <div className="grid gap-4 sm:grid-cols-2">
                  {founderCapabilities.map((capability, index) => {
                    const Icon = capabilityIcons[index] || Cpu;
                    return (
                      <div key={capability} className="flex h-[90px] items-center gap-4 rounded-xl border border-north-line bg-north-charcoal/10 dark:bg-white/[0.035] px-4 transition hover:border-north-accent/20">
                        <span className="grid h-10 w-10 place-items-center rounded-lg bg-north-card text-north-accent border border-north-line flex-none">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-200">{capability}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Operating Principle Callout */}
              <div className="max-w-[700px] rounded-xl border border-north-line bg-north-charcoal/20 dark:bg-north-black/45 p-6 md:p-8 relative overflow-hidden shadow-md">
                <div className="absolute top-0 left-0 h-full w-[3px] bg-north-accent" />
                <p className="font-mono text-xs uppercase tracking-wider text-north-accent">Operating principle</p>
                <blockquote className="mt-4">
                  <p className="text-base font-semibold leading-relaxed text-neutral-900 dark:text-white md:text-lg">
                    “Intelligence creates value only when it becomes a reliable system people can use every day.”
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE LAYOUT (visible on screens narrower than lg) */}
        <div className="block lg:hidden space-y-8">
          {/* Header Eyebrow & Title */}
          <div>
            <p className="font-mono text-xs uppercase text-north-accent tracking-wider">FOUNDER</p>
            <h2 className="mt-3 text-[24px] font-bold tracking-tight text-neutral-900 dark:text-white">
              Meet the Builder Behind North Owl
            </h2>
          </div>

          {/* 1. Avatar Card with Name & Role */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-north-line bg-north-card/30 shadow-md">
            {/* 140x140px Avatar */}
            <div className="relative h-[140px] w-[140px] rounded-xl border border-north-line bg-neutral-900 dark:bg-neutral-950 shadow-md flex items-center justify-center overflow-hidden flex-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(96,165,250,0.12),transparent_70%)]" />
              <span className="relative text-4xl font-bold tracking-tight text-white dark:text-neutral-200 select-none">
                SR
              </span>
            </div>

            <h3 className="mt-5 text-xl font-bold tracking-tight text-neutral-900 dark:text-white">Shimant Ranjan</h3>
            <p className="mt-1 text-xs font-semibold text-north-accent uppercase tracking-wider">Founder & CEO</p>
            
            <div className="mt-3 text-xs text-north-muted font-medium">
              <p>AI/ML Developer & Backend Systems Engineer</p>
            </div>

            {/* Social Links */}
            <div className="mt-4 flex justify-center gap-3 w-full">
              <a
                href="https://www.linkedin.com/company/north-owl/"
                target="_blank"
                rel="noreferrer"
                className="grid h-8 w-8 place-items-center rounded-full border border-north-line bg-north-charcoal/10 text-north-muted transition hover:border-north-accent/50 hover:text-neutral-900 dark:hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://github.com/shimantranjan"
                target="_blank"
                rel="noreferrer"
                className="grid h-8 w-8 place-items-center rounded-full border border-north-line bg-north-charcoal/10 text-north-muted transition hover:border-north-accent/50 hover:text-neutral-900 dark:hover:text-white"
                aria-label="GitHub"
              >
                <Github className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://x.com/ShimantRanjan"
                target="_blank"
                rel="noreferrer"
                className="grid h-8 w-8 place-items-center rounded-full border border-north-line bg-north-charcoal/10 text-north-muted transition hover:border-north-accent/50 hover:text-neutral-900 dark:hover:text-white"
                aria-label="X (Twitter)"
              >
                <XIcon className="h-3 w-3 fill-current" />
              </a>
            </div>
          </div>

          {/* 4. Achievements */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-north-accent">Achievements</h4>
            <div className="grid gap-3">
              <div className="flex items-center gap-3.5 rounded-xl border border-north-line bg-north-charcoal/10 dark:bg-white/[0.035] px-4 py-3 shadow-sm">
                <span className="text-xl flex-none">🏆</span>
                <div>
                  <p className="text-sm font-bold text-neutral-900 dark:text-white leading-tight">IBM BOB Dev 2026</p>
                  <p className="mt-0.5 text-[11px] font-medium text-north-muted">International Winner</p>
                </div>
              </div>
              <div className="flex items-center gap-3.5 rounded-xl border border-north-line bg-north-charcoal/10 dark:bg-white/[0.035] px-4 py-3 shadow-sm">
                <span className="text-xl flex-none">🏆</span>
                <div>
                  <p className="text-sm font-bold text-neutral-900 dark:text-white leading-tight">OpenAI × Outskill</p>
                  <p className="mt-0.5 text-[11px] font-medium text-north-muted">Top 1000 / 20,000+</p>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Headline & Description */}
          <div className="space-y-4">
            <h3 className="text-[32px] font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.1] text-balance">
              Building AI Systems, Automation Platforms, and Modern Backend Infrastructure.
            </h3>
            <p className="text-[16px] leading-7 text-north-muted">
              Shimant Ranjan is the founder of North Owl, focused on building practical AI systems, enterprise automation solutions, scalable backend infrastructure, and intelligent software products for modern organizations.
            </p>
          </div>

          {/* 6. Expertise Cards */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-north-accent">Core Expertise</h4>
            <div className="grid gap-3">
              {founderCapabilities.map((capability, index) => {
                const Icon = capabilityIcons[index] || Cpu;
                return (
                  <div key={capability} className="flex h-[90px] items-center gap-4 rounded-xl border border-north-line bg-north-charcoal/10 dark:bg-white/[0.035] px-4">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-north-card text-north-accent border border-north-line flex-none">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-200">{capability}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 7. Operating Principle */}
          <div className="rounded-xl border border-north-line bg-north-charcoal/20 dark:bg-north-black/45 p-6 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 h-full w-[3px] bg-north-accent" />
            <p className="font-mono text-xs uppercase tracking-wider text-north-accent">Operating principle</p>
            <blockquote className="mt-3">
              <p className="text-sm font-semibold leading-relaxed text-neutral-900 dark:text-white">
                “Intelligence creates value only when it becomes a reliable system people can use every day.”
              </p>
            </blockquote>
          </div>
        </div>

      </div>
    </MotionSection>
  );
}
