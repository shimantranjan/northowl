"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  TrendingUp, 
  Workflow, 
  ClipboardCheck, 
  Sparkles, 
  ShieldCheck 
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { MotionSection } from "@/components/animation/motion-section";

const principles = [
  {
    title: "Engineering Excellence",
    description: "We build systems designed for scale, security, and long-term maintainability. We don't take shortcuts that compromise core system integrity.",
    icon: Code2
  },
  {
    title: "Client-Centric Execution",
    description: "Every decision is aligned with measurable business outcomes. We measure our success solely by the operational leverage and growth we unlock.",
    icon: TrendingUp
  },
  {
    title: "Automation First",
    description: "Reduce repetitive work through intelligent systems and process automation. We optimize workflows to give teams leverage over their time.",
    icon: Workflow
  },
  {
    title: "Reliability & Accountability",
    description: "Transparent communication, predictable delivery, and operational discipline. We operate as senior technical owners, not passive vendors.",
    icon: ClipboardCheck
  },
  {
    title: "Innovation Through Practicality",
    description: "Use cutting-edge technology only when it creates real business value. We focus on mature AI execution rather than short-lived tech hype.",
    icon: Sparkles
  },
  {
    title: "Security by Design",
    description: "Security, privacy, and resilience are built into every solution from day one. We safeguard your client and business data under enterprise standards.",
    icon: ShieldCheck
  }
];

export function PrinciplesSection() {
  return (
    <MotionSection id="principles" className="bg-north-charcoal border-t border-neutral-200 dark:border-north-line transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Operating Principles"
          title="The Disciplines We Engineer By"
          description="Our work is guided by engineering core values that prioritize business outcomes, robust architecture, and bulletproof security."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.article
                key={principle.title}
                className="group premium-border relative min-h-[220px] overflow-hidden rounded-xl bg-white dark:bg-[#121212] p-6 border border-neutral-200 dark:border-white/8 shadow-sm hover:shadow-md dark:hover:bg-[#171717] dark:hover:border-white/12 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5 }}
              >
                {/* Subtle top light gradient border on hover */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-north-accent/70 to-transparent opacity-0 transition group-hover:opacity-100" />
                
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-neutral-200 dark:border-white/8 bg-neutral-50 dark:bg-[#5EA2FF]/10 text-north-accent dark:text-[#5EA2FF] group-hover:bg-neutral-100 dark:group-hover:bg-[#5EA2FF]/20 transition-colors">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                
                <h3 className="mt-5 text-lg font-bold text-neutral-900 dark:text-[#F4F4F4]">
                  {principle.title}
                </h3>
                
                <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-[#B5B5B5]">
                  {principle.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}
