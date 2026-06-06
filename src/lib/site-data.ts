import {
  Activity,
  AppWindow,
  BadgeCheck,
  Bot,
  Boxes,
  BrainCircuit,
  Building2,
  Cable,
  ChartNoAxesCombined,
  Cloud,
  Code2,
  DatabaseZap,
  Factory,
  FileCode2,
  GraduationCap,
  HeartPulse,
  Landmark,
  Layers3,
  LineChart,
  Megaphone,
  Network,
  Rocket,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  Truck,
  Workflow,
  type LucideIcon
} from "lucide-react";
import type {
  CaseStudy,
  ComparisonRow,
  FounderAchievement,
  Industry,
  NavItem,
  Service,
  Solution,
  TechCategory
} from "@/types/site";

type IconMap = Record<string, LucideIcon>;

export const siteConfig = {
  name: "North Owl",
  domain: "northowl.in",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://northowl.in",
  tagline: "Building Intelligent Systems for Modern Organizations.",
  founder: "Shimant Ranjan",
  founderTitle: "Founder & CEO",
  emailPrimary: "shimant@northowl.in",
  emailSecondary: "hello@northowl.in",
  social: {
    linkedin: "https://www.linkedin.com/company/north-owl/",
    github: "https://github.com/shimantranjan",
    x: "https://x.com/ShimantRanjan"
  }
} as const;

export const navItems: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const serviceIconMap: IconMap = {
  Bot,
  Workflow,
  Code2,
  Layers3,
  Smartphone,
  Cloud,
  DatabaseZap,
  HeartPulse,
  Landmark,
  AppWindow,
  LineChart,
  Sparkles,
  Megaphone,
  BadgeCheck,
  Network
};

export const services: Service[] = [
  {
    title: "AI Agents & Agentic AI Systems",
    summary:
      "Autonomous AI workers that reason across tools, data, approvals, and operating procedures with audit-ready control.",
    signal: "Multi-agent orchestration",
    outcome: "Lower manual load across support, research, operations, and internal knowledge workflows.",
    icon: Bot
  },
  {
    title: "Business Process Automation",
    summary:
      "Workflow engines, document pipelines, approvals, integrations, and decision systems that remove repetitive operations.",
    signal: "Process intelligence",
    outcome: "Faster throughput, fewer handoffs, and measurable operating leverage.",
    icon: Workflow
  },
  {
    title: "Full Stack Development",
    summary:
      "Secure, scalable web platforms engineered from product strategy through backend architecture and interface systems.",
    signal: "Production software",
    outcome: "Enterprise-grade applications with clean ownership and maintainable code.",
    icon: Code2
  },
  {
    title: "SaaS Development",
    summary:
      "Subscription products with tenant architecture, billing readiness, analytics, administration, and growth loops.",
    signal: "Product systems",
    outcome: "Launch-ready SaaS foundations built to scale beyond the first customers.",
    icon: Layers3
  },
  {
    title: "Mobile Applications",
    summary:
      "Modern mobile experiences for healthcare, field operations, consumer platforms, and internal enterprise tools.",
    signal: "Cross-platform delivery",
    outcome: "Reliable mobile workflows with performance, accessibility, and offline-aware UX.",
    icon: Smartphone
  },
  {
    title: "Cloud Infrastructure",
    summary:
      "Cloud-native architecture, deployment pipelines, observability, security hardening, and cost-aware infrastructure.",
    signal: "Resilient cloud",
    outcome: "Production environments that teams can operate with confidence.",
    icon: Cloud
  },
  {
    title: "Data Engineering",
    summary:
      "Data pipelines, warehouses, dashboards, event tracking, and analytical foundations for AI-ready organizations.",
    signal: "Trusted data layer",
    outcome: "Clean decision infrastructure for leaders, teams, and intelligent products.",
    icon: DatabaseZap
  },
  {
    title: "Healthcare Technology",
    summary:
      "Clinical workflow platforms, surveillance systems, patient intelligence, triage automation, and secure health data tools.",
    signal: "Healthcare AI",
    outcome: "Safer care coordination and faster insight across healthcare operations.",
    icon: HeartPulse
  },
  {
    title: "Government Technology",
    summary:
      "Citizen portals, surveillance dashboards, service delivery systems, and high-availability public sector platforms.",
    signal: "GovTech delivery",
    outcome: "Mission-critical systems designed for scale, clarity, and accountability.",
    icon: Landmark
  },
  {
    title: "Media Management Systems",
    summary:
      "Content operations platforms for planning, publishing, approvals, analytics, and multi-channel production.",
    signal: "Media command center",
    outcome: "Structured content execution without fragmented tools or lost context.",
    icon: AppWindow
  },
  {
    title: "Influencer Growth Platforms",
    summary:
      "Creator analytics, growth intelligence, campaign systems, audience dashboards, and revenue workflow automation.",
    signal: "Creator intelligence",
    outcome: "Data-backed growth decisions for creators, agencies, and media operators.",
    icon: LineChart
  },
  {
    title: "AI Content Pipelines",
    summary:
      "AI-assisted content production systems that combine prompts, brand rules, review queues, and publishing workflows.",
    signal: "Content automation",
    outcome: "More output with stronger brand consistency and human approval controls.",
    icon: Sparkles
  },
  {
    title: "Brand Automation",
    summary:
      "Automated brand systems for campaign generation, asset governance, messaging, reporting, and channel operations.",
    signal: "Brand operations",
    outcome: "Consistent execution across teams, formats, and customer touchpoints.",
    icon: Megaphone
  },
  {
    title: "Enterprise Consulting",
    summary:
      "Technical due diligence, AI adoption strategy, platform audits, architecture decisions, and execution roadmaps.",
    signal: "Operator advisory",
    outcome: "Clear technical direction grounded in implementation reality.",
    icon: BadgeCheck
  },
  {
    title: "Digital Transformation",
    summary:
      "Modernization programs that connect legacy workflows, data, AI, cloud infrastructure, and product execution.",
    signal: "Transformation systems",
    outcome: "New operating models supported by software, automation, and measurable adoption.",
    icon: Network
  }
];

export const industries: Industry[] = [
  {
    name: "Healthcare",
    detail: "Clinical intelligence, hospital operations, disease surveillance, and patient-facing systems."
  },
  {
    name: "Government",
    detail: "Public service platforms, citizen portals, monitoring systems, and administrative automation."
  },
  {
    name: "Finance",
    detail: "Risk workflows, internal automation, customer intelligence, and data-driven decision systems."
  },
  {
    name: "Education",
    detail: "Learning platforms, institutional analytics, admissions automation, and AI tutoring workflows."
  },
  {
    name: "Enterprise",
    detail: "Knowledge systems, AI workforce tooling, enterprise SaaS, and operational command centers."
  },
  {
    name: "Media",
    detail: "Creator operations, production pipelines, editorial analytics, and audience intelligence."
  },
  {
    name: "Logistics",
    detail: "Fleet visibility, exception handling, route intelligence, and dispatch automation."
  },
  {
    name: "Manufacturing",
    detail: "Quality workflows, plant dashboards, predictive maintenance, and process modernization."
  },
  {
    name: "Startups",
    detail: "MVPs, product architecture, AI-native features, and launch systems for venture-backed execution."
  },
  {
    name: "Retail",
    detail: "Inventory intelligence, commerce automation, customer journeys, and store operations platforms."
  }
];

export const industryIcons = [
  HeartPulse,
  Landmark,
  ChartNoAxesCombined,
  GraduationCap,
  Building2,
  FileCode2,
  Truck,
  Factory,
  Rocket,
  Store
];

export const featuredSolutions: Solution[] = [
  {
    title: "Healthcare Intelligence Platform",
    summary:
      "A secure intelligence layer for hospitals and health systems to unify operations, patient signals, care pathways, and executive visibility.",
    capabilities: ["Care workflow analytics", "Patient risk signals", "Operations cockpit", "Secure health data model"],
    metric: "30 percent faster triage review cycles"
  },
  {
    title: "National Disease Surveillance Platform",
    summary:
      "A real-time surveillance architecture for outbreak monitoring, field reporting, anomaly detection, and agency-level situational awareness.",
    capabilities: ["Geo-health dashboards", "Alert routing", "Case clustering", "Public sector reporting"],
    metric: "Near real-time field signal visibility"
  },
  {
    title: "AI Workforce Platform",
    summary:
      "A controlled AI operating layer that gives departments specialized agents for research, support, reporting, and workflow execution.",
    capabilities: ["Role-based agents", "Tool permissions", "Knowledge retrieval", "Human approval loops"],
    metric: "40 percent reduction in repetitive knowledge work"
  },
  {
    title: "Enterprise Automation Suite",
    summary:
      "A modular automation system for approvals, documents, tasks, integrations, dashboards, and operating procedure enforcement.",
    capabilities: ["Workflow orchestration", "Document AI", "Integration hub", "Audit trails"],
    metric: "2.8x faster operational throughput"
  },
  {
    title: "Government Citizen Portal",
    summary:
      "A citizen-first service platform for applications, status tracking, helpdesk intelligence, payments, and department workflows.",
    capabilities: ["Citizen accounts", "Service catalog", "Case tracking", "Department dashboards"],
    metric: "60 percent fewer manual status requests"
  },
  {
    title: "Creator Intelligence Platform",
    summary:
      "A strategic command center for creators and media teams to analyze audience patterns, content performance, and monetization signals.",
    capabilities: ["Audience intelligence", "Campaign dashboards", "AI content ops", "Revenue insights"],
    metric: "3x faster campaign planning cycles"
  }
];

export const comparisonRows: ComparisonRow[] = [
  {
    capability: "Strategic model",
    agencies: "Campaign-first thinking with limited technical depth",
    freelancers: "Task execution without operating context",
    offshore: "Capacity-driven delivery with coordination overhead",
    northOwl: "System-first strategy tied to business, data, AI, and operational outcomes"
  },
  {
    capability: "Engineering depth",
    agencies: "Often dependent on templates, vendors, or shallow implementation teams",
    freelancers: "Varies widely and can create single-person delivery risk",
    offshore: "Large teams, inconsistent architecture ownership",
    northOwl: "Founder-led architecture across AI, backend, cloud, security, and product experience"
  },
  {
    capability: "AI capability",
    agencies: "AI as a feature layer or demo surface",
    freelancers: "Point solutions without governance or evaluation systems",
    offshore: "Implementation-heavy, strategy-light AI delivery",
    northOwl: "Agentic systems, data foundations, evaluation loops, and human approval controls"
  },
  {
    capability: "Security posture",
    agencies: "Brand and interface polish before operational security",
    freelancers: "Security depends on individual habits",
    offshore: "Process exists but domain accountability can be diluted",
    northOwl: "Security, privacy, access control, and auditability designed into the system"
  },
  {
    capability: "Delivery cadence",
    agencies: "Long presentation cycles and handoff-heavy approvals",
    freelancers: "Fast starts with limited scale capacity",
    offshore: "High output, slower alignment",
    northOwl: "Tight product loops, measurable milestones, and senior decision velocity"
  },
  {
    capability: "Ownership after launch",
    agencies: "Maintenance packages separated from engineering intent",
    freelancers: "Support availability can change quickly",
    offshore: "Support requires ticketing and queue management",
    northOwl: "Long-term system ownership, modernization path, and operational knowledge transfer"
  }
];

export const founderCapabilities = [
  "AI/ML Development",
  "Backend Engineering",
  "FastAPI Systems",
  "REST APIs",
  "SQL Architecture",
  "Enterprise Automation"
];

export const founderAchievements: FounderAchievement[] = [
  { value: "🏆 IBM BOB Dev 2026", label: "International Hackathon Winner" },
  { value: "🏆 OpenAI × Outskill", label: "National Hackathon Finalist" }
];


export const techStack: TechCategory[] = [
  {
    name: "Frontend",
    items: ["Next.js App Router", "TypeScript", "React", "Tailwind CSS", "Framer Motion", "Design Systems"]
  },
  {
    name: "Backend",
    items: ["Node.js", "API Architecture", "Serverless Functions", "Authentication", "RBAC", "Event Workflows"]
  },
  {
    name: "AI/ML",
    items: ["LLM Agents", "RAG Systems", "Python", "Model Evaluation", "Prompt Operations", "Vector Search"]
  },
  {
    name: "Cloud",
    items: ["Google Cloud", "Vercel", "Cloud Functions", "Object Storage", "Monitoring", "Cost Controls"]
  },
  {
    name: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "Vector Databases", "Data Warehouses", "Search Indexes"]
  },
  {
    name: "DevOps",
    items: ["CI/CD", "Docker", "Infrastructure as Code", "Observability", "Security Reviews", "Release Automation"]
  },
  {
    name: "Data Engineering",
    items: ["ETL Pipelines", "Analytics Models", "Dashboards", "Event Tracking", "Data Quality", "Governance"]
  }
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Healthcare AI Operations Layer",
    industry: "Healthcare AI",
    challenge:
      "A multi-location care provider needed unified operational visibility across patient intake, triage queues, and manual reporting loops.",
    solution:
      "North Owl designed a secure intelligence layer with risk scoring, workflow dashboards, staff review queues, and executive reporting.",
    metrics: [
      { value: "32%", label: "faster triage review" },
      { value: "18 hrs", label: "saved weekly in reporting" },
      { value: "99.9%", label: "target platform uptime" }
    ]
  },
  {
    title: "Government Surveillance Command Center",
    industry: "Government Surveillance",
    challenge:
      "A public sector team needed disease signal monitoring, field-level reporting, and district-level escalation without fragmented spreadsheets.",
    solution:
      "North Owl mapped the surveillance workflow and built a dashboard architecture for cases, clusters, alerts, and administrative review.",
    metrics: [
      { value: "24/7", label: "monitoring readiness" },
      { value: "70%", label: "less manual consolidation" },
      { value: "15 min", label: "target escalation window" }
    ]
  },
  {
    title: "AI Customer Support Workforce",
    industry: "AI Customer Support",
    challenge:
      "An enterprise support team needed faster first responses, better knowledge retrieval, and stronger consistency across escalations.",
    solution:
      "North Owl deployed controlled AI agents connected to approved knowledge bases, routing rules, response drafts, and human approval checkpoints.",
    metrics: [
      { value: "42%", label: "lower first-response time" },
      { value: "3.4x", label: "more resolved knowledge tasks" },
      { value: "100%", label: "human approval on sensitive flows" }
    ]
  },
  {
    title: "Creator Intelligence Growth System",
    industry: "Creator Intelligence",
    challenge:
      "A creator-led media business needed campaign planning, content analytics, audience insights, and repeatable production operations.",
    solution:
      "North Owl created a creator intelligence platform with campaign boards, AI content pipelines, performance dashboards, and revenue signals.",
    metrics: [
      { value: "3x", label: "faster campaign planning" },
      { value: "28%", label: "higher content reuse" },
      { value: "11", label: "channels unified" }
    ]
  }
];

export const metrics = [
  { value: 15, suffix: "+", label: "Intelligence system categories" },
  { value: 10, suffix: "+", label: "Industries served" },
  { value: 95, suffix: "+", label: "Lighthouse target" },
  { value: 550, suffix: "+", label: "DSA problems solved by founder" }
];

export const trustSignals = [
  { label: "AI-native architecture", icon: BrainCircuit },
  { label: "Security-minded delivery", icon: ShieldCheck },
  { label: "Cloud-scale engineering", icon: ServerCog },
  { label: "Operational automation", icon: Cable },
  { label: "Enterprise dashboards", icon: Boxes },
  { label: "Outcome-led systems", icon: Activity }
];
