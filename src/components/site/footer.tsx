import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { siteConfig } from "@/lib/site-data";

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="border-t border-north-line bg-north-black px-6 py-16 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* COLUMN 1: Brand Info */}
          <div>
            <Logo />
            <p className="mt-5 text-sm font-semibold text-neutral-900 dark:text-white/95 leading-relaxed">
              Building Intelligent Systems for Modern Organizations.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-north-muted">
              AI-first technology company helping organizations build intelligent systems, automation platforms, healthcare solutions, and enterprise infrastructure.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-north-line bg-north-charcoal/10 text-north-muted transition hover:border-north-accent/50 hover:text-neutral-900 dark:hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-north-line bg-north-charcoal/10 text-north-muted transition hover:border-north-accent/50 hover:text-neutral-900 dark:hover:text-white"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.x}
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-north-line bg-north-charcoal/10 text-north-muted transition hover:border-north-accent/50 hover:text-neutral-900 dark:hover:text-white"
                aria-label="X (formerly Twitter)"
              >
                <XIcon className="h-3.5 w-3.5 fill-current" />
              </a>
            </div>
          </div>

          {/* COLUMN 2: Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-white">Company</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/about" className="text-sm text-north-muted transition hover:text-neutral-900 dark:hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-north-muted transition hover:text-neutral-900 dark:hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-sm text-north-muted transition hover:text-neutral-900 dark:hover:text-white">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-sm text-north-muted transition hover:text-neutral-900 dark:hover:text-white">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-north-muted transition hover:text-neutral-900 dark:hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Capabilities */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-white">Capabilities</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/services" className="text-sm text-north-muted transition hover:text-neutral-900 dark:hover:text-white">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-north-muted transition hover:text-neutral-900 dark:hover:text-white">
                  Automation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-north-muted transition hover:text-neutral-900 dark:hover:text-white">
                  Backend Systems
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-north-muted transition hover:text-neutral-900 dark:hover:text-white">
                  Healthcare AI
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-north-muted transition hover:text-neutral-900 dark:hover:text-white">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-north-muted transition hover:text-neutral-900 dark:hover:text-white">
                  Data Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-white">Contact</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a 
                  href={`mailto:${siteConfig.emailPrimary}`} 
                  className="text-sm text-north-muted transition hover:text-neutral-900 dark:hover:text-white block truncate hover:underline"
                >
                  {siteConfig.emailPrimary}
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${siteConfig.emailSecondary}`} 
                  className="text-sm text-north-muted transition hover:text-neutral-900 dark:hover:text-white block truncate hover:underline"
                >
                  {siteConfig.emailSecondary}
                </a>
              </li>
              <li className="text-sm text-north-muted">
                India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-north-line pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-north-muted">
          <p>© 2026 {siteConfig.name}. All Rights Reserved.</p>
          <p className="font-mono text-[10px] uppercase tracking-wider text-neutral-900/50 dark:text-white/50">
            Building Intelligent Systems for Modern Organizations.
          </p>
        </div>
      </div>
    </footer>
  );
}
