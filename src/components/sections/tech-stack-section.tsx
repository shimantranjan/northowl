"use client";

import { useState } from "react";
import { Cpu, Layers3 } from "lucide-react";
import { MotionSection } from "@/components/animation/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { techStack } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function TechStackSection() {
  const [active, setActive] = useState(techStack[0].name);
  const activeStack = techStack.find((stack) => stack.name === active) ?? techStack[0];

  return (
    <MotionSection className="bg-north-black transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Technology stack"
          title="Modern engineering foundations for AI, automation, and enterprise software."
          description="The stack is selected for performance, maintainability, security, and fast deployment on cloud-native infrastructure."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          
          {/* Category Select Column */}
          <div className="rounded-lg border border-north-line bg-north-charcoal/10 p-2">
            {techStack.map((stack) => (
              <button
                type="button"
                key={stack.name}
                onClick={() => setActive(stack.name)}
                className={cn(
                  "flex w-full items-center justify-between rounded-md px-4 py-4 text-left text-sm font-medium text-north-muted transition hover:bg-north-charcoal/20 hover:text-neutral-950 dark:hover:text-white",
                  active === stack.name && "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100 shadow-sm"
                )}
              >
                <span className="inline-flex items-center gap-3">
                  <Cpu className="h-4 w-4" />
                  {stack.name}
                </span>
                <span className="font-mono text-xs">{stack.items.length}</span>
              </button>
            ))}
          </div>

          {/* Details Card */}
          <div className="premium-border rounded-lg bg-north-card p-6 border border-north-line">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-lg border border-north-line bg-north-charcoal/20 text-north-accent">
                <Layers3 className="h-5 w-5" />
              </span>
              <div>
                <p className="font-mono text-xs uppercase text-north-accent">Selected category</p>
                <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">{activeStack.name}</h3>
              </div>
            </div>
            
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {activeStack.items.map((item) => (
                <div 
                  key={item} 
                  className="rounded-md border border-north-line bg-north-charcoal/10 px-4 py-4 text-sm font-medium text-neutral-900 dark:text-white"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </MotionSection>
  );
}
