import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";

import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { ThemeProvider } from "@/components/theme-provider";
import {
  buildMetadata,
  organizationSchema,
  websiteSchema
} from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = buildMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema()),
          }}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Header />

          <main>
            {children}
          </main>

          <Footer />
        </ThemeProvider>

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}