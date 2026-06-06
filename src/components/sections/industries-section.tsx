import { MotionSection } from "@/components/animation/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { industries, industryIcons } from "@/lib/site-data";

export function IndustriesSection() {
  return (
    <MotionSection className="bg-north-black">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <SectionHeading
            eyebrow="Industries"
            title="Built for domains where intelligence, trust, and execution discipline matter."
            description="North Owl designs systems for teams that operate with regulatory pressure, high-volume workflows, complex stakeholders, or rapidly changing market conditions."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {industries.map((industry, index) => {
              const Icon = industryIcons[index];
              return (
                <article key={industry.name} className="rounded-lg border border-north-line bg-north-charcoal/10 p-5 transition hover:border-north-accent/40 hover:bg-north-charcoal/30">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-md bg-north-card text-north-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-base font-semibold text-neutral-900 dark:text-white">{industry.name}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-north-muted">{industry.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
