import { AnimatedCounter } from "@/components/animation/animated-counter";

type MetricCardProps = {
  value: number;
  suffix?: string;
  label: string;
};

export function MetricCard({ value, suffix, label }: MetricCardProps) {
  return (
    <div className="rounded-lg border border-north-line bg-north-charcoal/10 p-4">
      <div className="font-mono text-2xl text-neutral-900 dark:text-white md:text-3xl">
        <AnimatedCounter value={value} suffix={suffix} />
      </div>
      <p className="mt-2 text-xs leading-5 text-north-muted">{label}</p>
    </div>
  );
}
