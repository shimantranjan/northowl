import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { MotionSection } from "@/components/animation/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredSolutions } from "@/lib/site-data";

export function FeaturedSolutionsSection() {
  return (
    <MotionSection className="bg-north-charcoal">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured solutions"
          title="Repeatable system patterns for high-stakes transformation."
          description="These platforms are designed as modular foundations that can adapt to enterprise, healthcare, public sector, startup, and creator operations without becoming fragile custom experiments."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {featuredSolutions.map((solution) => (
            <article
              key={solution.title}
              id={slugify(solution.title)}
              className="premium-border group rounded-lg bg-north-card p-6 border border-north-line transition hover:-translate-y-1 hover:bg-north-charcoal/40"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="font-mono text-xs uppercase text-north-accent">{solution.metric}</p>
                  <h3 className="mt-4 text-2xl font-semibold text-neutral-900 dark:text-white">{solution.title}</h3>
                </div>
                <ArrowUpRight className="h-5 w-5 text-north-muted transition group-hover:text-north-accent" />
              </div>
              <p className="mt-5 text-sm leading-7 text-north-muted">{solution.summary}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {solution.capabilities.map((capability) => (
                  <div key={capability} className="flex items-center gap-2 rounded-md border border-north-line bg-north-charcoal/10 px-3 py-2 text-sm text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 className="h-4 w-4 flex-none text-north-accent" />
                    {capability}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
