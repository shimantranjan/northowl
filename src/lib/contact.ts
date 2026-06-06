import { z } from "zod";

export const projectTypes = [
  "AI Agents & Agentic Systems",
  "Enterprise Software",
  "Healthcare Technology",
  "Government Technology",
  "Automation Platform",
  "SaaS or Mobile Product",
  "Data Engineering",
  "Digital Transformation"
] as const;

export const budgetRanges = [
  "Discovery Sprint",
  "INR 5L - 15L",
  "INR 15L - 50L",
  "INR 50L+",
  "Confidential Enterprise"
] as const;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name.").max(80, "Name is too long."),
  organization: z
    .string()
    .trim()
    .min(2, "Enter your organization.")
    .max(120, "Organization is too long."),
  email: z.string().trim().email("Enter a valid business email."),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a reachable phone number.")
    .max(25, "Phone number is too long.")
    .regex(/^[+()\-\s\d]+$/, "Use digits, spaces, +, -, or parentheses only."),
  projectType: z.enum(projectTypes, {
    errorMap: () => ({ message: "Select a project type." })
  }),
  budget: z.enum(budgetRanges, {
    errorMap: () => ({ message: "Select a budget range." })
  }),
  requirements: z
    .string()
    .trim()
    .min(40, "Share at least 40 characters about the project.")
    .max(2200, "Keep requirements under 2,200 characters."),
  companyWebsite: z.string().optional(),
  startedAt: z.coerce.number().optional()
});

export const contactApiSchema = contactFormSchema.superRefine((data, ctx) => {
  if (data.companyWebsite?.trim()) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Spam protection failed.",
      path: ["companyWebsite"]
    });
  }

  if (data.startedAt && Date.now() - data.startedAt < 3000) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Please review the form before submitting.",
      path: ["startedAt"]
    });
  }
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
