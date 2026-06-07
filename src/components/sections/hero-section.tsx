"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, CalendarCheck, ShieldCheck } from "lucide-react";
import { AiNetwork } from "@/components/visuals/ai-network";
import { LiveMetricsPanel } from "@/components/visuals/live-metrics-panel";
import { CtaLink } from "@/components/ui/cta-link";
import { TaglineReveal } from "@/components/animation/tagline-reveal";
import { trustSignals } from "@/lib/site-data";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-north-black px-6 pt-20 md:pt-24">
      <div className="north-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-north-radial" />
      <div className="mx-auto grid max-w-7xl gap-10 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:pb-24">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-north-line bg-north-charcoal/30 px-3 py-2 text-xs text-north-muted backdrop-blur"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-north-accent" />
            Founder-led AI systems engineering for serious organizations
          </motion.div>
          <motion.h1
            className="mt-8 max-w-5xl text-balance text-5xl font-semibold leading-[1.02] text-neutral-900 dark:text-white md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <TaglineReveal />
          </motion.h1>
          <motion.p
            className="mt-7 max-w-3xl text-base leading-8 text-north-muted md:text-xl md:leading-9"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            North Owl designs and engineers AI agents, enterprise software, healthcare intelligence platforms,
            automation systems, and digital transformation solutions for organizations operating at scale.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <CtaLink href="/contact" icon={CalendarCheck}>
              Book Consultation
            </CtaLink>
            <CtaLink href="/services" variant="secondary" icon={ArrowDownRight}>
              Explore Services
            </CtaLink>
          </motion.div>
          <motion.div
            className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.34, duration: 0.6 }}
            aria-label="Enterprise trust indicators"
          >
            {trustSignals.map((signal) => {
              const Icon = signal.icon;
              return (
                <div key={signal.label} className="flex min-h-16 items-center gap-3 rounded-lg border border-north-line bg-north-charcoal/10 px-3">
                  <Icon className="h-4 w-4 flex-none text-north-accent" />
                  <span className="text-xs leading-5 text-north-muted">{signal.label}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
        <div className="relative z-10 grid gap-4 lg:grid-cols-[1fr_0.74fr] lg:items-end">
          <AiNetwork />
          <div className="lg:-ml-32 lg:mb-8">
            <LiveMetricsPanel />
          </div>
        </div>
      </div>
      <div className="h-8 border-t border-north-line bg-north-charcoal" aria-hidden="true" />
    </section>
  );
}
