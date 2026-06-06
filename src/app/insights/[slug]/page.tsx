import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IntelligentSystems from "@/content/insights/intelligent-systems.mdx";
import { buildMetadata } from "@/lib/seo";

const articles = {
  "intelligent-systems": {
    title: "What intelligent systems mean for modern organizations",
    description:
      "North Owl's operating view on AI-native systems, automation, data foundations, governance, and enterprise software delivery.",
    Component: IntelligentSystems
  }
} as const;

type ArticleSlug = keyof typeof articles;

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug as ArticleSlug];

  if (!article) {
    return buildMetadata({ title: "Insight", path: `/insights/${slug}` });
  }

  return buildMetadata({
    title: article.title,
    description: article.description,
    path: `/insights/${slug}`
  });
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug as ArticleSlug];

  if (!article) {
    notFound();
  }

  const Component = article.Component;

  return (
    <article className="bg-north-black px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase text-north-accent">North Owl Insight</p>
        <Component />
      </div>
    </article>
  );
}
