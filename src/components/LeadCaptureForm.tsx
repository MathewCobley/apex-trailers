// ========================================
// File: src/components/LeadCaptureForm.tsx
// ========================================

"use client";

import { useActionState } from "react";
import { submitLead, type LeadFormState } from "../app/actions";

const initialState: LeadFormState = {
  success: false,
  message: "",
};

type Props = {
  inputClassName: string;
  buttonClassName: string;
  buttonText?: string;
};

export default function LeadCaptureForm({
  inputClassName,
  buttonClassName,
  buttonText = "GET MORE INFO",
}: Props) {
  const [state, formAction, isPending] = useActionState(
    submitLead,
    initialState
  );

  return (
    <form
      action={formAction}
      className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"
    >
      <input
        type="email"
        name="email"
        required
        placeholder="Enter your email address"
        className={inputClassName}
      />

      <button type="submit" className={buttonClassName} disabled={isPending}>
        {isPending ? "SENDING..." : buttonText}
      </button>

      {state.message ? (
        <p
          className={`text-sm ${
            state.success ? "text-green-400" : "text-red-400"
          }`}
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}