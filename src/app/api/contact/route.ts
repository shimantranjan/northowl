import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactApiSchema } from "@/lib/contact";
import { buildContactEmail } from "@/lib/email";

export const runtime = "nodejs";

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

export async function POST(request: NextRequest) {
  const ip = clientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { message: "Too many requests from this connection. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request payload." }, { status: 400 });
  }

  const parsed = contactApiSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { message: parsed.error.issues[0]?.message ?? "Please review the form and try again." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { message: "Email delivery is not configured yet. Please email hello@northowl.in directly." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const email = buildContactEmail(parsed.data);
  const recipients = (process.env.CONTACT_TO ?? "shimant@northowl.in,hello@northowl.in")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);

  try {
    await resend.emails.send({
      from: process.env.CONTACT_FROM ?? "North Owl <hello@northowl.in>",
      to: recipients,
      replyTo: parsed.data.email,
      subject: email.subject,
      text: email.text,
      html: email.html
    });
  } catch {
    return NextResponse.json(
      { message: "Email delivery failed. Please email hello@northowl.in directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({
    message: "Your consultation request has been sent. North Owl will reply within one business day."
  });
}

function clientIp(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "anonymous"
  );
}

function isRateLimited(key: string) {
  const now = Date.now();
  const current = rateLimit.get(key);

  if (!current || current.resetAt <= now) {
    rateLimit.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  current.count += 1;
  rateLimit.set(key, current);
  return current.count > RATE_LIMIT_MAX;
}
