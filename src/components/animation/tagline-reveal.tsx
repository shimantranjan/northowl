"use client";

import { motion, useReducedMotion } from "framer-motion";

const LINE1_WORDS = "Building Intelligent Systems".split(" ");
const LINE2_WORDS = "for Modern Organizations".split(" ");

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const wordVariants = {
  hidden: (shouldReduce: boolean) => ({
    opacity: shouldReduce ? 1 : 0,
    y: shouldReduce ? 0 : 8,
  }),
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function TaglineReveal() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <div className="relative w-full">
      {/* Screen-reader-only text for SEO */}
      <h1 className="sr-only">
        North Owl: Building Intelligent Systems for Modern Organizations.
      </h1>

      {/* Visual animated text */}
      <motion.span
        aria-hidden="true"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="block"
      >
        {/* Line 1 */}
        <span className="block text-neutral-900 dark:text-white">
          {LINE1_WORDS.map((word, i) => (
            <motion.span
              key={`l1-${i}`}
              custom={shouldReduceMotion}
              variants={wordVariants}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </span>

        {/* Line 2 */}
        <span className="block text-neutral-900/70 dark:text-white/70 mt-1 sm:mt-2">
          {LINE2_WORDS.map((word, i) => (
            <motion.span
              key={`l2-${i}`}
              custom={shouldReduceMotion}
              variants={wordVariants}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </span>
      </motion.span>
    </div>
  );
}
