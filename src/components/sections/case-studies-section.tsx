import { ArrowUpRight } from "lucide-react";
import { MotionSection } from "@/components/animation/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { caseStudies } from "@/lib/site-data";

export function CaseStudiesSection() {
  return (
    <MotionSection className="bg-north-charcoal transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Case studies"
          title="Enterprise-style outcomes, built around measurable operating leverage."
          description="Representative engagements show how North Owl turns AI, automation, data, and software architecture into practical systems with visible ROI."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <article key={study.title} className="group rounded-lg border border-north-line bg-north-card p-6 transition duration-300 hover:border-north-accent/40">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase text-north-accent">{study.industry}</p>
                  <h3 className="mt-4 text-2xl font-semibold text-neutral-900 dark:text-white">{study.title}</h3>
                </div>
                <ArrowUpRight className="h-5 w-5 text-north-muted transition group-hover:text-north-accent" />
              </div>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-north-muted">Challenge</p>
                  <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-350">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-north-muted">Solution</p>
                  <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-350">{study.solution}</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {study.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-md border border-north-line bg-north-charcoal/10 p-3">
                    <p className="font-mono text-xl font-bold text-neutral-900 dark:text-white">{metric.value}</p>
                    <p className="mt-1.5 text-[11px] leading-4 text-north-muted">{metric.label}</p>
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
