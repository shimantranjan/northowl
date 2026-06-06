import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

export function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="North Owl home">
      <span className="grid h-9 w-9 place-items-center rounded-lg border border-north-accent/45 bg-white/[0.03] text-sm font-bold text-white shadow-north-glow transition group-hover:border-north-accent">
        N
      </span>
      <span className="text-sm font-semibold text-white">{siteConfig.name}</span>
    </Link>
  );
}
