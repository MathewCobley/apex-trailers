// ========================================
// File: src/app/actions.ts
// ========================================

"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type LeadFormState = {
  success: boolean;
  message: string;
};

export async function submitLead(
  prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const email = String(formData.get("email") || "").trim();

  if (!email) {
    return {
      success: false,
      message: "Please enter an email address.",
    };
  }

  if (!process.env.RESEND_API_KEY) {
    return {
      success: false,
      message: "Missing RESEND_API_KEY.",
    };
  }

  if (!process.env.LEAD_TO_EMAIL) {
    return {
      success: false,
      message: "Missing LEAD_TO_EMAIL.",
    };
  }

  if (!process.env.RESEND_FROM_EMAIL) {
    return {
      success: false,
      message: "Missing RESEND_FROM_EMAIL.",
    };
  }

  try {
    // ✅ 1. Email YOU
    const adminResult = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.LEAD_TO_EMAIL,
      subject: "New Apex signup",
      text: `New signup: ${email}`,
      replyTo: email,
    });

    if (adminResult.error) {
      return {
        success: false,
        message:
          adminResult.error.message || "Failed to send notification email.",
      };
    }

    // ✅ 2. Email THEM
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: email,
      subject: "You’re on the list — Apex Trailers",
      text: `Hi,

Thanks for your interest in Apex Trailers — great to have you with us.

We’re building premium off-road trailers designed for real-world adventure, with a focus on durability, clean design, and practical features.

You’ll be among the first to hear about:
• Launch updates
• Product previews
• Early information

We’ll be in touch soon.

—
Apex Trailers`,
    });

    return {
      success: true,
      message: "Thanks — your signup has been received.",
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Something went wrong.",
    };
  }
}