import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { ThemeProvider } from "@/components/theme-provider";
import {
  buildMetadata,
  organizationSchema,
  websiteSchema,
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
        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "x335wqfjxn");
          `}
        </Script>

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