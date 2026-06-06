import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  path: "/services",
  description:
    "Explore North Owl services across AI agents, automation, full stack development, SaaS, healthcare technology, government technology, cloud infrastructure, and digital transformation."
});

export default function ServicesPage() {
  return (
    <>
      <ServicesSection />
      <TechStackSection />
      <ContactSection />
    </>
  );
}
