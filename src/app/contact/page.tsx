import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact-section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  path: "/contact",
  description:
    "Contact North Owl to discuss AI agents, enterprise software, healthcare technology, automation systems, and digital transformation projects."
});

export default function ContactPage() {
  return <ContactSection />;
}
