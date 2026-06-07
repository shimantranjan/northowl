"use client";

import { useState } from "react";
import { Building2, Check, Globe2, UserRound } from "lucide-react";
import { MotionSection } from "@/components/animation/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { comparisonRows } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const competitors = [
  { key: "agencies", label: "Traditional Agencies", icon: Building2 },
  { key: "freelancers", label: "Freelancers", icon: UserRound },
  { key: "offshore", label: "Offshore Teams", icon: Globe2 }
] as const;

type CompetitorKey = (typeof competitors)[number]["key"];

export function WhyNorthOwlSection() {
  const [active, setActive] = useState<CompetitorKey>("agencies");
  const activeCompetitor = competitors.find((competitor) => competitor.key === active) ?? competitors[0];

  return (
    <MotionSection className="bg-north-black transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why North Owl"
          title="Not an agency layer. Not outsourced execution. A systems partner."
          description="North Owl combines technical depth, AI-native thinking, and founder-level accountability for organizations that need software to change how work actually happens."
        />
        
        {/* Desktop Table View */}
        <div className="mt-12 hidden overflow-hidden rounded-lg border border-north-line lg:block">
          <table className="w-full border-collapse text-left">
            <thead className="bg-north-charcoal/20">
              <tr>
                <th className="w-[18%] px-5 py-4 text-sm font-semibold text-neutral-900 dark:text-white">Capability</th>
                <th className="px-5 py-4 text-sm font-semibold text-north-muted">Traditional Agencies</th>
                <th className="px-5 py-4 text-sm font-semibold text-north-muted">Freelancers</th>
                <th className="px-5 py-4 text-sm font-semibold text-north-muted">Offshore Teams</th>
                <th className="px-5 py-4 text-sm font-semibold text-neutral-900 dark:text-white">North Owl</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.capability} className="border-t border-north-line bg-north-card/25 transition hover:bg-north-charcoal/30">
                  <th className="px-5 py-5 align-top text-sm font-semibold text-neutral-900 dark:text-white">{row.capability}</th>
                  <td className="px-5 py-5 align-top text-sm leading-6 text-neutral-600 dark:text-neutral-400">{row.agencies}</td>
                  <td className="px-5 py-5 align-top text-sm leading-6 text-neutral-600 dark:text-neutral-400">{row.freelancers}</td>
                  <td className="px-5 py-5 align-top text-sm leading-6 text-neutral-600 dark:text-neutral-400">{row.offshore}</td>
                  <td className="px-5 py-5 align-top text-sm leading-6 text-neutral-950 dark:text-white">
                    <span className="inline-flex gap-2">
                      <Check className="mt-1 h-4 w-4 flex-none text-north-accent" />
                      {row.northOwl}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="mt-10 lg:hidden">
          <div className="hide-scrollbar flex gap-2 overflow-x-auto rounded-lg border border-north-line bg-north-charcoal/20 p-2">
            {competitors.map((competitor) => {
              const Icon = competitor.icon;
              return (
                <button
                  type="button"
                  key={competitor.key}
                  onClick={() => setActive(competitor.key)}
                  className={cn(
                    "inline-flex min-w-max items-center gap-2 rounded-md px-3 py-2 text-sm text-north-muted transition font-medium",
                    active === competitor.key && "bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-sm"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {competitor.label}
                </button>
              );
            })}
          </div>
          <div className="mt-4 space-y-4">
            {comparisonRows.map((row) => (
              <article key={row.capability} className="rounded-lg border border-north-line bg-north-card p-5">
                <p className="text-sm font-semibold text-neutral-900 dark:text-white">{row.capability}</p>
                <div className="mt-4 grid gap-3">
                  <div className="rounded-md bg-north-charcoal/10 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">{activeCompetitor.label}</p>
                    <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{row[active]}</p>
                  </div>
                  <div className="rounded-md border border-north-accent/25 bg-north-accent/5 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-north-accent">North Owl</p>
                    <p className="mt-2 text-sm leading-6 text-neutral-950 dark:text-white">{row.northOwl}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
