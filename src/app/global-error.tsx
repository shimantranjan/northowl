"use client";

import Link from "next/link";
import { RotateCcw } from "lucide-react";
import "./globals.css";

export default function GlobalError({
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-north-black text-white">
        <main className="grid min-h-screen place-items-center px-6">
          <div className="max-w-xl rounded-lg border border-white/10 bg-north-card p-8">
            <p className="font-mono text-xs uppercase text-north-accent">System interruption</p>
            <h1 className="mt-4 text-3xl font-semibold">A page-level error interrupted this view.</h1>
            <p className="mt-4 text-sm leading-7 text-north-muted">
              Retry the render, or return to the North Owl homepage and continue from a stable route.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-north-black"
              >
                <RotateCcw className="h-4 w-4" />
                Retry
              </button>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-white/12 px-5 py-3 text-sm font-semibold text-white"
              >
                Home
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
