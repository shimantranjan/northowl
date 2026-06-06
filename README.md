# North Owl Website

Production-ready official website for North Owl, built with Next.js 15 App Router, TypeScript, Tailwind CSS, Framer Motion, Lucide React, React Hook Form, Zod, Resend, MDX, and Vercel.

## Stack

- Next.js 15 App Router with TypeScript
- Tailwind CSS with a deep charcoal design system
- Framer Motion route and section animations
- Lucide React icon system
- React Hook Form + Zod contact validation
- Resend email delivery through `/api/contact`
- MDX support for insight content
- Enterprise SEO: metadata, canonical URLs, OpenGraph image generation, robots, sitemap, manifest, and JSON-LD

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment

Copy `.env.example` to `.env.local` and set:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_FROM="North Owl <hello@northowl.in>"
CONTACT_TO="shimant@northowl.in,hello@northowl.in"
NEXT_PUBLIC_SITE_URL=https://northowl.in
```

For Resend production delivery, verify `northowl.in` in Resend and use a verified sender such as `North Owl <hello@northowl.in>`.

## Quality Commands

```bash
npm run lint
npm run typecheck
npm run build
```

The site is designed for a 95+ Lighthouse target through server-rendered pages, lightweight canvas animation, optimized CSS, no stock media, no external font downloads, accessible controls, and reduced-motion support.

## Deployment on Vercel

1. Import the repository into Vercel.
2. Set the production domain to `northowl.in`.
3. Add the environment variables from `.env.example`.
4. Deploy with the default Next.js preset.
5. Confirm `/api/contact` sends to `shimant@northowl.in` and `hello@northowl.in`.
6. Run Lighthouse against the production deployment after DNS and Resend are configured.

## Content and Configuration

- Global company configuration lives in `src/lib/site-data.ts`.
- Contact validation lives in `src/lib/contact.ts`.
- Email rendering lives in `src/lib/email.ts`.
- SEO helpers live in `src/lib/seo.ts`.
- MDX insight content lives in `src/content/insights`.

Update social URLs in `src/lib/site-data.ts` if North Owl uses a different official GitHub organization or LinkedIn company page.
