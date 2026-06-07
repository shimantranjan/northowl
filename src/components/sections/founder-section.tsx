"use client";

import Image from "next/image";
import {
  BrainCircuit,
  Database,
  Cpu,
  Workflow,
  Cloud,
  Layers3,
  Github,
  Linkedin,
  Award,
  Trophy,
  Calendar,
  Briefcase,
  Terminal
} from "lucide-react";
import { MotionSection } from "@/components/animation/motion-section";

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const focusAreas = [
  { name: "AI Systems", icon: BrainCircuit },
  { name: "Machine Learning", icon: Trophy },
  { name: "FastAPI Development", icon: Cpu },
  { name: "Backend Engineering", icon: Database },
  { name: "Automation Systems", icon: Workflow },
  { name: "Cloud Infrastructure", icon: Cloud },
  { name: "Scalable SaaS Platforms", icon: Layers3 }
];

export function FounderSection() {
  return (
    <MotionSection id="about" className="bg-north-charcoal py-20 md:py-28 border-t border-neutral-200 dark:border-north-line transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Eyebrow & Title */}
        <div className="max-w-3xl mb-12">
          <p className="font-mono text-xs uppercase text-north-accent tracking-wider">FOUNDER PROFILE</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-5xl">
            Meet the Builder Behind North Owl
          </h2>
          <p className="mt-3 text-base leading-8 text-neutral-700 dark:text-neutral-350 md:text-lg">
            Shimant Ranjan leads the engineering discipline, systems architecture, and AI execution at North Owl, delivering high-performance solutions for global enterprises.
          </p>
        </div>

        {/* Main Grid: 30/70 on desktop */}
        <div className="grid gap-8 lg:grid-cols-10 items-start">
          
          {/* Left Column (Founder Card - 3 columns equivalent on desktop) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="premium-border w-full rounded-2xl bg-white dark:bg-[#111111] p-6 border border-neutral-200 dark:border-white/8 shadow-lg relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-north-accent/30 to-transparent" />
              
              {/* Passport Portrait */}
              <div className="relative w-full aspect-[4/5] rounded-xl border border-neutral-200 dark:border-north-line bg-neutral-100 dark:bg-neutral-900 shadow-md overflow-hidden group">
                <Image
                  src="/images/founder.jpg"
                  alt="Shimant Ranjan - Founder of North Owl"
                  fill
                  className="object-cover transition-transform duration-500 scale-100 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 25vw"
                  priority
                />
              </div>

              {/* Founder Header */}
              <div className="mt-5 text-center lg:text-left">
                <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-[#F5F5F5]">Shimant Ranjan</h3>
                <p className="text-xs font-semibold text-north-accent dark:text-[#B3B3B3] uppercase tracking-wider mt-1">Founder & CEO</p>
                <p className="text-xs text-neutral-600 dark:text-[#B3B3B3] font-medium mt-0.5">Machine Learning Engineer</p>
              </div>

              {/* Timeline Metrics / Professional Stats */}
              <div className="mt-6 border-t border-neutral-200 dark:border-north-line pt-5 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-neutral-100 dark:bg-white/[0.04] text-north-accent border border-neutral-200 dark:border-white/8">
                    <Terminal className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-neutral-900 dark:text-[#B3B3B3] leading-tight">15+ Hackathons</p>
                    <p className="text-[10px] text-neutral-600 dark:text-[#8A8A8A] font-medium">Competitive Experiences</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-neutral-100 dark:bg-white/[0.04] text-north-accent border border-neutral-200 dark:border-white/8">
                    <Briefcase className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-neutral-900 dark:text-[#B3B3B3] leading-tight">10+ Deployed Projects</p>
                    <p className="text-[10px] text-neutral-600 dark:text-[#8A8A8A] font-medium">Major Systems in Production</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-neutral-100 dark:bg-white/[0.04] text-north-accent border border-neutral-200 dark:border-white/8">
                    <Calendar className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-neutral-900 dark:text-[#B3B3B3] leading-tight">Hackathon Mentor</p>
                    <p className="text-[10px] text-neutral-600 dark:text-[#8A8A8A] font-medium">Build With AI 2024</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 flex justify-center lg:justify-start gap-2.5 border-t border-neutral-200 dark:border-north-line pt-4 w-full">
                <a
                  href="https://www.linkedin.com/company/north-owl/"
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-8 w-8 place-items-center rounded-full border border-neutral-200 dark:border-white/8 bg-neutral-50 dark:bg-white/[0.04] text-neutral-600 dark:text-[#B3B3B3] transition hover:border-neutral-300 dark:hover:border-white/20 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/[0.08]"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://github.com/shimantranjan"
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-8 w-8 place-items-center rounded-full border border-neutral-200 dark:border-white/8 bg-neutral-50 dark:bg-white/[0.04] text-neutral-600 dark:text-[#B3B3B3] transition hover:border-neutral-300 dark:hover:border-white/20 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/[0.08]"
                  aria-label="GitHub"
                >
                  <Github className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://x.com/ShimantRanjan"
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-8 w-8 place-items-center rounded-full border border-neutral-200 dark:border-white/8 bg-neutral-50 dark:bg-white/[0.04] text-neutral-600 dark:text-[#B3B3B3] transition hover:border-neutral-300 dark:hover:border-white/20 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/[0.08]"
                  aria-label="X (Twitter)"
                >
                  <XIcon className="h-3 w-3 fill-current" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (Achievements, Expertise, Principle - 7 columns equivalent on desktop) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Biography & Mission Statement */}
            <div className="space-y-4">
              <h3 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-[#F5F5F5] leading-[1.15] text-balance">
                Building AI Systems, Automation Platforms, and Modern Backend Infrastructure.
              </h3>
              <p className="text-base leading-8 text-neutral-700 dark:text-[#B3B3B3]">
                Shimant is a hands-on builder specialized in translating complex algorithmic architectures into practical software tools. He manages the architecture design, cloud deployment, and system evaluation loops for North Owl&apos;s clients, ensuring all integrations remain fast, secure, and scale-resistant.
              </p>
            </div>

            {/* Achievements Timeline */}
            <div className="border-t border-neutral-200 dark:border-[#1A1A1A] pt-8">
              <h4 className="font-mono text-xs uppercase tracking-wider text-north-accent mb-5 flex items-center gap-2">
                <Award className="h-4 w-4" />
                Key Milestones & Hackathon Honors
              </h4>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="flex flex-col gap-1 rounded-xl border border-neutral-200 dark:border-white/8 bg-white dark:bg-[#111111] p-4 shadow-sm hover:border-neutral-300 dark:hover:border-white/10 transition-colors">
                  <span className="text-2xl mb-1">🏆</span>
                  <p className="text-sm font-bold text-neutral-900 dark:text-[#F5F5F5] leading-tight">IBM BOB Dev 2026</p>
                  <p className="text-xs text-north-accent font-semibold">Winner</p>
                  <p className="text-[10px] text-neutral-600 dark:text-[#8A8A8A] font-medium mt-1">Top 60 among 8,000+ Teams</p>
                </div>
                <div className="flex flex-col gap-1 rounded-xl border border-neutral-200 dark:border-white/8 bg-white dark:bg-[#111111] p-4 shadow-sm hover:border-neutral-300 dark:hover:border-white/10 transition-colors">
                  <span className="text-2xl mb-1">🏅</span>
                  <p className="text-sm font-bold text-neutral-900 dark:text-[#F5F5F5] leading-tight">GDG Bhopal</p>
                  <p className="text-xs text-north-accent font-semibold">Winner</p>
                  <p className="text-[10px] text-neutral-600 dark:text-[#8A8A8A] font-medium mt-1">First Place among 30+ Teams</p>
                </div>
                <div className="flex flex-col gap-1 rounded-xl border border-neutral-200 dark:border-white/8 bg-white dark:bg-[#111111] p-4 shadow-sm hover:border-neutral-300 dark:hover:border-white/10 transition-colors">
                  <span className="text-2xl mb-1">⭐</span>
                  <p className="text-sm font-bold text-neutral-900 dark:text-[#F5F5F5] leading-tight">OpenAI x Outskill</p>
                  <p className="text-xs text-north-accent font-semibold">Top 1000</p>
                  <p className="text-[10px] text-neutral-600 dark:text-[#8A8A8A] font-medium mt-1">Among 20,000+ Participants</p>
                </div>
              </div>
            </div>

            {/* Technical Expertise Badges */}
            <div className="border-t border-neutral-200 dark:border-north-line pt-8">
              <h4 className="font-mono text-xs uppercase tracking-wider text-north-accent mb-4">Core Technical Focus</h4>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area) => {
                  const Icon = area.icon;
                  return (
                    <div
                      key={area.name}
                      className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 dark:border-white/8 bg-white dark:bg-[#111111] px-3.5 py-2 text-xs font-semibold text-neutral-800 dark:text-[#B3B3B3] hover:border-neutral-300 dark:hover:border-white/20 transition-all cursor-default"
                    >
                      <Icon className="h-3.5 w-3.5 text-north-accent" />
                      {area.name}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Operating Principle Callout */}
            <div className="border-t border-neutral-200 dark:border-north-line pt-8">
              <div className="rounded-xl border border-neutral-200 dark:border-white/8 bg-neutral-50 dark:bg-[#111111] p-6 relative overflow-hidden shadow-sm dark:shadow-[0_0_15px_rgba(94,162,255,0.04)]">
                <div className="absolute top-0 left-0 h-full w-[3px] bg-north-accent dark:bg-[#5EA2FF] dark:shadow-[0_0_8px_rgba(94,162,255,0.4)]" />
                <p className="font-mono text-xs uppercase tracking-wider text-north-accent dark:text-[#5EA2FF]">Operating principle</p>
                <blockquote className="mt-4">
                  <p className="text-base font-semibold leading-relaxed text-neutral-900 dark:text-[#F3F3F3]">
                    &ldquo;Intelligence creates value only when it becomes a reliable system people can use every day.&rdquo;
                  </p>
                </blockquote>
              </div>
            </div>

          </div>
        </div>

      </div>
    </MotionSection>
  );
}
