import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  icon?: LucideIcon;
  className?: string;
};

export function CtaLink({ href, children, variant = "primary", icon: Icon = ArrowRight, className }: CtaLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-north-accent",
        variant === "primary"
          ? "bg-neutral-950 hover:bg-neutral-850 text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100"
          : "border border-north-line bg-north-charcoal/10 text-neutral-900 dark:text-white hover:border-north-accent/50 hover:bg-north-surface/50",
        className
      )}
    >
      {children}
      <Icon className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
