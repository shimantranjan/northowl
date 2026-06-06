"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Send, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import {
  budgetRanges,
  contactFormSchema,
  type ContactFormValues,
  projectTypes
} from "@/lib/contact";
import { cn } from "@/lib/utils";

const initialValues = (startedAt: number): ContactFormValues => ({
  name: "",
  organization: "",
  email: "",
  phone: "",
  projectType: "AI Agents & Agentic Systems",
  budget: "Discovery Sprint",
  requirements: "",
  companyWebsite: "",
  startedAt
});

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const startedAt = useMemo(() => Date.now(), []);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: initialValues(startedAt)
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");
    setMessage("");

    let response: Response;

    try {
      response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });
    } catch {
      setStatus("error");
      setMessage("The network request failed. Please email hello@northowl.in directly.");
      return;
    }

    const payload = (await response.json()) as { message?: string };

    if (!response.ok) {
      setStatus("error");
      setMessage(payload.message ?? "The message could not be sent. Please email hello@northowl.in.");
      return;
    }

    const nextStart = Date.now();
    setStatus("success");
    setMessage(payload.message ?? "Your consultation request has been sent.");
    reset(initialValues(nextStart));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="premium-border rounded-xl bg-north-card/30 p-6 shadow-xl border border-north-line hover:border-north-accent/30 transition-all duration-300 md:p-8">
      <div className="flex items-start justify-between gap-4 border-b border-north-line pb-6">
        <div>
          <p className="font-mono text-xs uppercase text-north-accent">Contact form</p>
          <h2 className="mt-2 text-2xl font-semibold text-neutral-900 dark:text-white">Start a systems consultation</h2>
        </div>
        <span className="grid h-11 w-11 place-items-center rounded-lg border border-north-line bg-north-charcoal/20 text-north-accent">
          <ShieldCheck className="h-5 w-5" />
        </span>
      </div>

      <div className="mt-8 space-y-6">
        {/* Visual Group 1: Identity & Organization */}
        <div className="space-y-4">
          <h3 className="font-mono text-[10px] uppercase tracking-widest text-north-accent">01. Identity & Organization</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" error={errors.name?.message}>
              <input {...register("name")} autoComplete="name" className={inputClass} placeholder="Your full name" />
            </Field>
            <Field label="Organization" error={errors.organization?.message}>
              <input {...register("organization")} autoComplete="organization" className={inputClass} placeholder="Company, institution, or team" />
            </Field>
            <Field label="Email" error={errors.email?.message}>
              <input {...register("email")} type="email" autoComplete="email" className={inputClass} placeholder="you@organization.com" />
            </Field>
            <Field label="Phone" error={errors.phone?.message}>
              <input {...register("phone")} autoComplete="tel" className={inputClass} placeholder="+91 90000 00000" />
            </Field>
          </div>
        </div>

        {/* Visual Group 2: Scope & Parameters */}
        <div className="space-y-4 border-t border-north-line pt-6">
          <h3 className="font-mono text-[10px] uppercase tracking-widest text-north-accent">02. Scope & Parameters</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Project Type" error={errors.projectType?.message}>
              <div className="relative">
                <select {...register("projectType")} className={cn(inputClass, "appearance-none pr-10")}>
                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-north-charcoal text-neutral-900 dark:text-white">
                      {type}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-north-muted">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </Field>
            <Field label="Budget" error={errors.budget?.message}>
              <div className="relative">
                <select {...register("budget")} className={cn(inputClass, "appearance-none pr-10")}>
                  {budgetRanges.map((budget) => (
                    <option key={budget} value={budget} className="bg-north-charcoal text-neutral-900 dark:text-white">
                      {budget}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-north-muted">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </Field>
          </div>
        </div>

        {/* Visual Group 3: System Outcomes */}
        <div className="space-y-4 border-t border-north-line pt-6">
          <h3 className="font-mono text-[10px] uppercase tracking-widest text-north-accent">03. System Outcomes</h3>
          <Field label="Requirements" error={errors.requirements?.message}>
            <textarea
              {...register("requirements")}
              className={cn(inputClass, "min-h-36 resize-y leading-7")}
              placeholder="Describe the operational problem, system vision, users, constraints, timeline, integrations, and what success should look like."
            />
          </Field>
        </div>
      </div>

      <input {...register("companyWebsite")} className="hidden" tabIndex={-1} autoComplete="off" />
      <input {...register("startedAt", { valueAsNumber: true })} type="hidden" />

      <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border-t border-north-line pt-6">
        <p className="text-xs leading-5 text-north-muted max-w-sm">
          Protected by validation, timing checks, and a hidden spam trap. Replies are sent to the North Owl team.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100 px-8 py-3.5 text-sm font-semibold transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 shadow-lg shrink-0"
        >
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          Request Consultation
        </button>
      </div>

      <AnimatePresence>
        {status !== "idle" ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className={cn(
              "mt-5 flex items-start gap-3 rounded-lg border p-4 text-sm leading-6",
              status === "success"
                ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-800 dark:text-emerald-100"
                : "border-red-400/30 bg-red-400/10 text-red-800 dark:text-red-100"
            )}
          >
            {status === "success" ? (
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none" />
            ) : (
              <AlertCircle className="mt-0.5 h-4 w-4 flex-none" />
            )}
            {message}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </form>
  );
}

function Field({
  label,
  error,
  children
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-neutral-900 dark:text-white/90 uppercase tracking-wider">{label}</span>
      <span className="mt-2 block">{children}</span>
      {error ? <span className="mt-2 block text-xs text-red-500 dark:text-red-300">{error}</span> : null}
    </label>
  );
}

const inputClass =
  "w-full rounded-lg border border-north-line bg-north-charcoal/20 hover:border-north-accent/40 focus:border-north-accent focus:bg-north-charcoal/30 focus:ring-1 focus:ring-north-accent/15 px-4 py-3.5 text-base text-neutral-900 dark:text-white outline-none transition-all duration-200 placeholder:text-neutral-500";
