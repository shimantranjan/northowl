import { Github, Linkedin } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { MotionSection } from "@/components/animation/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site-data";

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function ContactSection() {
  return (
    <MotionSection id="contact" className="bg-north-black py-16 md:py-24 transition-colors duration-300">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start px-6">
        
        {/* LEFT COLUMN: Overview & Contact Details (60%) */}
        <div className="space-y-8">
          <div>
            <SectionHeading
              eyebrow="Consultation"
              title="Bring North Owl into a serious system build."
              description="We partner with enterprise teams, healthcare organizations, and growing startups to design and deploy robust, production-ready systems."
            />
          </div>

          {/* Company Overview */}
          <div className="space-y-3 border-t border-north-line pt-6">
            <h4 className="font-mono text-xs uppercase tracking-wider text-north-accent">Overview</h4>
            <p className="text-sm leading-6 text-north-muted">
              North Owl is an AI-first technology company helping organizations build intelligent systems, automation platforms, healthcare solutions, and enterprise infrastructure. We work directly with leadership teams to design and implement systems that change how work actually happens.
            </p>
          </div>

          {/* Service Categories */}
          <div className="space-y-3 border-t border-north-line pt-6">
            <h4 className="font-mono text-xs uppercase tracking-wider text-north-accent">Service Capabilities</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "AI Agents & Systems",
                "Business Process Automation",
                "Backend & APIs",
                "Healthcare AI",
                "Government Technology",
                "Cloud Infrastructure"
              ].map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-north-line bg-north-charcoal/20 px-3 py-1 text-xs font-semibold text-neutral-900 dark:text-white/80"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* Compact Executive Card */}
          <div className="rounded-xl border border-north-line bg-north-charcoal/10 p-6 md:p-8 space-y-6 shadow-md">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-north-accent">Founder Contact</h3>
              <div className="mt-2.5">
                <p className="text-base font-bold text-neutral-900 dark:text-white">Shimant Ranjan</p>
                <p className="text-sm text-north-muted">Founder & CEO</p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 border-t border-north-line pt-6">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-north-muted">Primary Email</h4>
                <a
                  href={`mailto:${siteConfig.emailPrimary}`}
                  className="mt-2 block text-sm font-medium text-neutral-900 dark:text-white transition hover:text-north-accent hover:underline"
                >
                  {siteConfig.emailPrimary}
                </a>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-north-muted">Business Inquiries</h4>
                <a
                  href={`mailto:${siteConfig.emailSecondary}`}
                  className="mt-2 block text-sm font-medium text-neutral-900 dark:text-white transition hover:text-north-accent hover:underline"
                >
                  {siteConfig.emailSecondary}
                </a>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 border-t border-north-line pt-6">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-north-muted">Response Window</h4>
                <p className="mt-2 text-sm text-neutral-900 dark:text-white/90 font-medium">Within 24 business hours</p>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-north-muted">Social Channels</h4>
                <div className="mt-2 flex gap-3">
                  <a
                    href="https://www.linkedin.com/company/north-owl/"
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-8 w-8 place-items-center rounded-full border border-north-line bg-north-charcoal/10 text-north-muted transition hover:border-north-accent/50 hover:text-neutral-900 dark:hover:text-white"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="https://github.com/shimantranjan"
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-8 w-8 place-items-center rounded-full border border-north-line bg-north-charcoal/10 text-north-muted transition hover:border-north-accent/50 hover:text-neutral-900 dark:hover:text-white"
                    aria-label="GitHub"
                  >
                    <Github className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="https://x.com/ShimantRanjan"
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-8 w-8 place-items-center rounded-full border border-north-line bg-north-charcoal/10 text-north-muted transition hover:border-north-accent/50 hover:text-neutral-900 dark:hover:text-white"
                    aria-label="X (Twitter)"
                  >
                    <XIcon className="h-3 w-3 fill-current" />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-north-line pt-6">
              <h4 className="font-mono text-xs uppercase tracking-wider text-north-muted">Service Geography</h4>
              <p className="mt-2 text-sm text-neutral-900 dark:text-white/90 font-medium">
                India • Middle East • Europe • Global Remote
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Form (40%) */}
        <div className="w-full">
          <ContactForm />
        </div>
        
      </div>
    </MotionSection>
  );
}
