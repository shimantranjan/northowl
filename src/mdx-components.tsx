import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="mt-12 text-4xl font-semibold text-white md:text-6xl">{children}</h1>,
    h2: ({ children }) => <h2 className="mt-12 text-2xl font-semibold text-white md:text-3xl">{children}</h2>,
    p: ({ children }) => <p className="mt-5 text-base leading-8 text-north-muted">{children}</p>,
    ul: ({ children }) => <ul className="mt-5 space-y-3 text-north-muted">{children}</ul>,
    li: ({ children }) => <li className="leading-7">{children}</li>,
    strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
    ...components
  };
}
