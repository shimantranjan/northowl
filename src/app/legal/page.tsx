import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = buildMetadata({
  title: "Legal",
  path: "/legal",
  description: "North Owl privacy, terms, and security commitments for enterprise website visitors and project inquiries."
});

export default function LegalPage() {
  return (
    <section className="bg-north-black px-6 py-24 md:py-32 transition-colors duration-300">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs uppercase text-north-accent">Legal</p>
        <h1 className="mt-4 text-4xl font-semibold text-neutral-900 dark:text-white md:text-6xl">Privacy, terms, and security commitments.</h1>
        <p className="mt-6 text-base leading-8 text-north-muted">
          North Owl operates with a security-first mindset across inquiry handling, project discovery, software delivery, and long-term system ownership.
        </p>
        <div className="mt-12 space-y-8">
          <LegalBlock id="privacy" title="Privacy">
            North Owl collects contact form details only to evaluate and respond to project inquiries. Inquiry data includes name,
            organization, email, phone, project type, budget range, requirements, spam-protection fields, and basic request metadata.
            North Owl does not sell inquiry data or use it for third-party advertising.
          </LegalBlock>
          <LegalBlock id="terms" title="Terms">
            Website content is provided for general information about North Owl services and does not create a client relationship,
            statement of work, or delivery commitment. Engagement scope, confidentiality, milestones, pricing, and support terms are
            governed by written agreements between North Owl and the client.
          </LegalBlock>
          <LegalBlock id="security" title="Security">
            North Owl designs systems with least-privilege access, auditability, secure deployment practices, validation, observability,
            and responsible AI controls. For sensitive enterprise, healthcare, or government projects, security requirements are reviewed
            during discovery and reflected in architecture, implementation, and operating procedures.
          </LegalBlock>
          <div className="rounded-lg border border-north-line bg-north-card p-6">
            <p className="text-sm leading-7 text-north-muted">
              Legal or security questions can be sent to{" "}
              <a className="text-neutral-900 dark:text-white underline decoration-north-accent underline-offset-4" href={`mailto:${siteConfig.emailSecondary}`}>
                {siteConfig.emailSecondary}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LegalBlock({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <article id={id} className="rounded-lg border border-north-line bg-north-charcoal/10 p-6">
      <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-north-muted">{children}</p>
    </article>
  );
}
