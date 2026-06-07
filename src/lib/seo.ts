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
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : "North Owl | AI Systems, Automation & Enterprise Software";

  const url = new URL(path, siteConfig.url).toString();

  return {
    metadataBase: new URL(siteConfig.url),

    title: pageTitle,

    description,

    verification: {
      google: "4xGq6FaIMKAQMe6SRqiJH8m0AcOPcn0EtBvBHKfSYPA"
    },

    alternates: {
      canonical: url
    },

    keywords: [
      "North Owl",
      "AI",
      "Artificial Intelligence",
      "AI Agents",
      "Agentic AI",
      "Machine Learning",
      "Enterprise Software",
      "Backend Development",
      "FastAPI",
      "Automation",
      "Healthcare AI",
      "Government Technology",
      "Cloud Infrastructure",
      "Data Engineering",
      "Digital Transformation",
      "Shimant Ranjan"
    ],

    authors: [
      {
        name: "Shimant Ranjan"
      }
    ],

    creator: "Shimant Ranjan",

    publisher: "North Owl",

    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: "North Owl",
      locale: "en_IN",
      type: "website",

      images: [
        {
          url: `${siteConfig.url}/founder.jpg`,
          width: 1200,
          height: 630,
          alt: "North Owl"
        }
      ]
    },

    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,

      images: [`${siteConfig.url}/founder.jpg`]
    },

    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
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

    logo: `${siteConfig.url}/icon.svg`,

    email: [
      siteConfig.emailPrimary,
      siteConfig.emailSecondary
    ],

    founder: {
      "@type": "Person",
      name: siteConfig.founder,
      jobTitle: siteConfig.founderTitle,
      sameAs: siteConfig.social.linkedin
    },

    description:
      "North Owl builds AI systems, enterprise software, healthcare intelligence platforms, and automation solutions.",

    slogan: siteConfig.tagline,

    knowsAbout: [
      "Artificial Intelligence",
      "Agentic AI",
      "Machine Learning",
      "Backend Development",
      "Enterprise Software",
      "Healthcare Technology",
      "Government Technology",
      "Cloud Infrastructure",
      "Data Engineering",
      "Digital Transformation"
    ],

    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.github
    ]
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
    },

    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}