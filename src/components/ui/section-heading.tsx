import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-4xl", align === "center" && "text-center", className)}>
      <p className="font-mono text-xs uppercase text-north-accent">{eyebrow}</p>
      <h2 className="mt-4 text-balance text-3xl font-semibold text-neutral-900 dark:text-white md:text-5xl">{title}</h2>
      <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-600 dark:text-neutral-400 md:text-lg">{description}</p>
    </div>
  );
}
