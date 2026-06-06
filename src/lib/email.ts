import type { ContactFormValues } from "@/lib/contact";

export function buildContactEmail(data: ContactFormValues) {
  const subject = `North Owl consultation request: ${data.organization}`;
  const text = [
    "New North Owl project inquiry",
    "",
    `Name: ${data.name}`,
    `Organization: ${data.organization}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Project Type: ${data.projectType}`,
    `Budget: ${data.budget}`,
    "",
    "Requirements:",
    data.requirements
  ].join("\n");

  const html = `
    <div style="font-family: Inter, Arial, sans-serif; color: #111111; line-height: 1.6;">
      <h1 style="font-size: 22px; margin: 0 0 16px;">New North Owl project inquiry</h1>
      <table style="border-collapse: collapse; width: 100%; max-width: 680px;">
        ${emailRow("Name", data.name)}
        ${emailRow("Organization", data.organization)}
        ${emailRow("Email", data.email)}
        ${emailRow("Phone", data.phone)}
        ${emailRow("Project Type", data.projectType)}
        ${emailRow("Budget", data.budget)}
      </table>
      <h2 style="font-size: 16px; margin: 24px 0 8px;">Requirements</h2>
      <p style="white-space: pre-wrap; margin: 0; padding: 16px; background: #f4f4f5; border-radius: 12px;">${escapeHtml(
        data.requirements
      )}</p>
    </div>
  `;

  return { subject, text, html };
}

function emailRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 8px 12px; border: 1px solid #e5e7eb; font-weight: 700; width: 160px;">${escapeHtml(
        label
      )}</td>
      <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${escapeHtml(value)}</td>
    </tr>
  `;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
