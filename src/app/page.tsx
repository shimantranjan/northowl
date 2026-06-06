import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FeaturedSolutionsSection } from "@/components/sections/featured-solutions-section";
import { FounderSection } from "@/components/sections/founder-section";
import { HeroSection } from "@/components/sections/hero-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { WhyNorthOwlSection } from "@/components/sections/why-north-owl-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <FeaturedSolutionsSection />
      <WhyNorthOwlSection />
      <FounderSection />
      <TechStackSection />
      <CaseStudiesSection />
      <ContactSection />
    </>
  );
}
