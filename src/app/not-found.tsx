import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[72vh] bg-north-black px-6 py-32 transition-colors duration-300">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-sm uppercase text-north-accent">404</p>
        <h1 className="mt-5 max-w-2xl text-4xl font-semibold text-neutral-900 dark:text-white md:text-6xl">
          This route is outside the current operating map.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-north-muted">
          Return to the North Owl command center and continue exploring intelligent systems for modern organizations.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100 px-5 py-3 text-sm font-semibold transition-all active:scale-[0.98] shadow-md"
        >
          Return home
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
