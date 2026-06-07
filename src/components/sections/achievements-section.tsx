"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/animation/animated-counter";
import { SectionHeading } from "@/components/ui/section-heading";
import { MotionSection } from "@/components/animation/motion-section";

const stats = [
  { value: 15, suffix: "+", label: "Hackathon Experiences", prefix: "" },
  { value: 10, suffix: "+", label: "Major Projects Deployed", prefix: "" },
  { value: 8000, suffix: "+", label: "Teams Competed Against", prefix: "" },
  { value: 20, suffix: "K+", label: "Hackathon Participants", prefix: "" },
  { value: 60, suffix: "", label: "IBM BOB Dev 2026 Winner", prefix: "Top " },
  { value: 1000, suffix: "", label: "OpenAI x Outskill", prefix: "Top " }
];

export function AchievementsSection() {
  return (
    <MotionSection id="achievements" className="bg-north-black border-t border-neutral-200 dark:border-north-line transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Achievements"
          title="Proven in Competition. Battle-Tested in Production."
          description="Our engineering discipline is forged under high-pressure competitive trials and refined through real-world systems architecture deployment."
        />

        <div className="mt-12 grid gap-4 grid-cols-2 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.article
              key={stat.label}
              className="group premium-border relative overflow-hidden rounded-xl border border-neutral-200 dark:border-north-line bg-white/50 dark:bg-neutral-900/10 p-6 backdrop-blur-md shadow-sm transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              {/* Subtle top light gradient border on hover */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-north-accent/70 to-transparent opacity-0 transition group-hover:opacity-100" />
              
              <div className="font-mono text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl lg:text-5xl">
                <span className="text-neutral-900/60 dark:text-white/60 text-xl sm:text-2xl lg:text-3xl font-semibold">
                  {stat.prefix}
                </span>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-north-accent">
                {stat.label.includes("IBM") || stat.label.includes("OpenAI") ? "Honor" : "Metric"}
              </p>
              <p className="mt-1 text-sm font-medium leading-normal text-neutral-600 dark:text-neutral-450">
                {stat.label}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
