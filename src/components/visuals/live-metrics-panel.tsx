"use client";

import { motion } from "framer-motion";
import { Activity, CircleCheck, Cpu, Database, LockKeyhole, Zap } from "lucide-react";
import { metrics } from "@/lib/site-data";
import { MetricCard } from "@/components/ui/metric-card";

const systemRows = [
  { label: "Agent governance", value: "Human gated", icon: LockKeyhole },
  { label: "Data layer", value: "AI ready", icon: Database },
  { label: "Compute posture", value: "Elastic", icon: Cpu },
  { label: "Automation pulse", value: "Live", icon: Zap }
];

export function LiveMetricsPanel() {
  return (
    <motion.aside
      className="premium-border rounded-lg bg-north-card/30 p-4 shadow-north-panel backdrop-blur border border-north-line"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.25, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      aria-label="North Owl live metrics"
    >
      <div className="flex items-center justify-between border-b border-north-line pb-4">
        <div>
          <p className="font-mono text-xs uppercase text-north-accent">Live Systems Panel</p>
          <h2 className="mt-1 text-lg font-semibold text-neutral-900 dark:text-white">Operational readiness</h2>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-800 dark:text-emerald-200">
          <Activity className="h-3.5 w-3.5" />
          Online
        </span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} value={metric.value} suffix={metric.suffix} label={metric.label} />
        ))}
      </div>
      <div className="mt-4 space-y-2">
        {systemRows.map((row) => {
          const Icon = row.icon;
          return (
            <div
              key={row.label}
              className="flex items-center justify-between rounded-md border border-north-line bg-north-charcoal/10 px-3 py-3"
            >
              <span className="inline-flex items-center gap-2 text-sm text-north-muted">
                <Icon className="h-4 w-4 text-north-accent" />
                {row.label}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-neutral-900 dark:text-white">
                <CircleCheck className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-300" />
                {row.value}
              </span>
            </div>
          );
        })}
      </div>
    </motion.aside>
  );
}
