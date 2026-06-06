import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-data";

type MetadataInput = {
  title?: string;
  description?: string;
  path?: string;
};

const defaultDescription =
  "North Owl builds intelligent systems, AI agents, enterprise automation solutions, backend platforms, and modern software products for organizations.";

export function buildMetadata({
  title,
  description = defaultDescription,
  path = "/"
}: MetadataInput = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : "North Owl | AI Systems, Automation & Enterprise Software";
  const url = new URL(path, siteConfig.url).toString();

  return {
    title: pageTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url
    },
    keywords: [
      "North Owl",
      "AI agents",
      "agentic AI systems",
      "enterprise software",
      "healthcare AI",
      "government technology",
      "business process automation",
      "digital transformation",
      "Shimant Ranjan"
    ],
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_IN"
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    }
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: [siteConfig.emailPrimary, siteConfig.emailSecondary],
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
      jobTitle: siteConfig.founderTitle,
      sameAs: siteConfig.social.linkedin
    },
    slogan: siteConfig.tagline,
    knowsAbout: [
      "Artificial Intelligence",
      "Agentic AI Systems",
      "Enterprise Software",
      "Healthcare Technology",
      "Government Technology",
      "Data Engineering",
      "Cloud Infrastructure"
    ],
    sameAs: [siteConfig.social.linkedin, siteConfig.social.github]
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: defaultDescription,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name
    }
  };
}
