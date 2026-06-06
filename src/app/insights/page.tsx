import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Insights",
  path: "/insights",
  description: "North Owl insights on intelligent systems, AI agents, automation, enterprise software, and digital transformation."
});

export default function InsightsPage() {
  return (
    <section className="bg-north-black px-6 py-24 md:py-32 transition-colors duration-300">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs uppercase text-north-accent">Insights</p>
        <h1 className="mt-4 text-4xl font-semibold text-neutral-900 dark:text-white md:text-6xl">Operating notes for intelligent organizations.</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-north-muted">
          Practical writing on AI-native systems, automation, data foundations, governance, and product engineering.
        </p>
        <div className="mt-12">
          <Link
            href="/insights/intelligent-systems"
            className="group block rounded-lg border border-north-line bg-north-card p-6 transition hover:border-north-accent/40"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="font-mono text-xs uppercase text-north-accent">Strategy</p>
                <h2 className="mt-4 text-2xl font-semibold text-neutral-900 dark:text-white">What intelligent systems mean for modern organizations</h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-north-muted">
                  A concise operating memo on why durable AI transformation depends on workflow design, data readiness,
                  security, and human control.
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-north-muted transition group-hover:text-north-accent" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
