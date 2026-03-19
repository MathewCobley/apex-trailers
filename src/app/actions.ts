// ========================================
// File: src/app/actions.ts
// ========================================

"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitLead(formData: FormData) {
  const email = String(formData.get("email") || "").trim();

  if (!email) {
    throw new Error("Email address is required.");
  }

  if (!process.env.RESEND_API_KEY) {
    throw new Error("Missing RESEND_API_KEY");
  }

  if (!process.env.LEAD_TO_EMAIL) {
    throw new Error("Missing LEAD_TO_EMAIL");
  }

  if (!process.env.RESEND_FROM_EMAIL) {
    throw new Error("Missing RESEND_FROM_EMAIL");
  }

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL,
    to: process.env.LEAD_TO_EMAIL,
    subject: "New Apex signup",
    text: `New signup: ${email}`,
    replyTo: email,
  });

  if (error) {
    throw new Error(error.message || "Failed to send email");
  }
}