import type { Metadata } from "next";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FeaturedSolutionsSection } from "@/components/sections/featured-solutions-section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Solutions",
  path: "/solutions",
  description:
    "North Owl solutions include healthcare intelligence, national disease surveillance, AI workforce platforms, enterprise automation, government citizen portals, and creator intelligence."
});

export default function SolutionsPage() {
  return (
    <>
      <FeaturedSolutionsSection />
      <CaseStudiesSection />
      <ContactSection />
    </>
  );
}
