"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MotionSection } from "@/components/animation/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/site-data";

export function ServicesSection() {
  return (
    <MotionSection id="services" className="bg-north-charcoal">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="AI-native engineering services for organizations that need durable systems."
          description="North Owl operates across product strategy, AI architecture, software engineering, automation, data, and cloud infrastructure so complex initiatives do not fragment between vendors."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                className="group premium-border relative min-h-[260px] overflow-hidden rounded-lg bg-north-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.025, duration: 0.45 }}
                whileHover={{ y: -6 }}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-north-accent/70 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-lg border border-north-line bg-north-charcoal/10 text-north-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-north-muted transition group-hover:text-north-accent" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-neutral-900 dark:text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-north-muted">{service.summary}</p>
                <div className="mt-6 border-t border-north-line pt-5">
                  <p className="font-mono text-[11px] uppercase text-north-accent">{service.signal}</p>
                  <p className="mt-2 text-sm leading-6 text-neutral-700 dark:text-neutral-300">{service.outcome}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}
