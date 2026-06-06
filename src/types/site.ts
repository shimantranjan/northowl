import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  summary: string;
  signal: string;
  outcome: string;
  icon: LucideIcon;
};

export type Industry = {
  name: string;
  detail: string;
};

export type Solution = {
  title: string;
  summary: string;
  capabilities: string[];
  metric: string;
};

export type ComparisonRow = {
  capability: string;
  agencies: string;
  freelancers: string;
  offshore: string;
  northOwl: string;
};

export type TechCategory = {
  name: string;
  items: string[];
};

export type CaseStudy = {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  metrics: Array<{
    value: string;
    label: string;
  }>;
};

export type FounderAchievement = {
  value: string;
  label: string;
};
