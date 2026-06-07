import type { Metadata } from "next";
import { FounderSection } from "@/components/sections/founder-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { WhyNorthOwlSection } from "@/components/sections/why-north-owl-section";
import { AchievementsSection } from "@/components/sections/achievements-section";
import { PrinciplesSection } from "@/components/sections/principles-section";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  path: "/about",
  description:
    "Learn about North Owl, founder Shimant Ranjan, and the founder-led systems engineering model behind North Owl's AI, software, healthcare, and government technology work."
});

export default function AboutPage() {
  return (
    <>
      <FounderSection />
      <WhyNorthOwlSection />
      <AchievementsSection />
      <PrinciplesSection />
      <IndustriesSection />
    </>
  );
}
