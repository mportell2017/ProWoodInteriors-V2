"use client";

import { useRef, useState } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { cn } from "@/lib/cn";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/business";
import { projectTypes } from "./contact-form-icons";
import type { toContactPayload } from "@/lib/contact-schema";

export type FormTone = "light" | "dark";
type SubmitStatus = "idle" | "success" | "error";

/**
 * Shared submit logic for every contact form. The Turnstile token is held in
 * state (not as an RHF field) and the submit is gated on it by the caller.
 */
export function useContactSubmit() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef<TurnstileInstance>(null);

  async function submit(payload: ReturnType<typeof toContactPayload>) {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Server response:", response.status, errorData);
        throw new Error(errorData.error || "Failed to submit");
      }
      setSubmitStatus("success");
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      turnstileRef.current?.reset();
      setTurnstileToken("");
    }
  }

  return {
    isSubmitting,
    submitStatus,
    setSubmitStatus,
    turnstileToken,
    setTurnstileToken,
    turnstileRef,
    submit,
  };
}

/** Project-type icon grid. `tone` flips colors; `gridClassName` controls the layout. */
export function ProjectPicker({
  value,
  onSelect,
  error,
  tone = "light",
  gridClassName = "grid grid-cols-2 gap-2 sm:grid-cols-4",
}: {
  value: string;
  onSelect: (id: string) => void;
  error?: string;
  tone?: FormTone;
  gridClassName?: string;
}) {
  const dark = tone === "dark";
  return (
    <div>
      <span
        className={cn(
          "mb-1.5 block text-[13px] font-medium",
          dark ? "text-parchment/80" : "text-ink/80"
        )}
      >
        What type of project? <span className={dark ? "text-brass" : "text-oxblood"}>*</span>
      </span>
      <div className={gridClassName}>
        {projectTypes.map((project) => {
          const Icon = project.Icon;
          const active = value === project.id;
          return (
            <button
              key={project.id}
              type="button"
              onClick={() => onSelect(project.id)}
              aria-pressed={active}
              className={cn(
                "flex flex-col items-center justify-center gap-1.5 rounded-sm border p-2.5 transition-all duration-200",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-1",
                dark && "focus-visible:ring-offset-walnut",
                dark
                  ? active
                    ? "border-brass bg-brass/15"
                    : "border-parchment/25 bg-parchment/5 hover:border-brass/50 hover:bg-parchment/10"
                  : active
                    ? "border-brass bg-brass/10 shadow-sm"
                    : "border-umber/20 bg-white hover:border-brass/50 hover:bg-brass/5"
              )}
            >
              <Icon
                className={cn(
                  "h-6 w-6 transition-colors",
                  active ? "text-brass" : dark ? "text-parchment/70" : "text-umber"
                )}
              />
              <span
                className={cn(
                  "text-center text-[11px] font-medium leading-tight",
                  active
                    ? dark
                      ? "text-parchment"
                      : "text-ink"
                    : dark
                      ? "text-parchment/70"
                      : "text-ink/70"
                )}
              >
                {project.label}
              </span>
            </button>
          );
        })}
      </div>
      {error && (
        <p className={cn("mt-1 text-[12px]", dark ? "text-rose-300" : "text-oxblood")}>{error}</p>
      )}
    </div>
  );
}

export function TurnstileField({
  turnstileRef,
  onToken,
  theme = "light",
}: {
  turnstileRef: React.RefObject<TurnstileInstance | null>;
  onToken: (token: string) => void;
  theme?: "light" | "dark";
}) {
  return (
    <div className="flex justify-center">
      <Turnstile
        ref={turnstileRef}
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
        options={{ theme }}
        onSuccess={onToken}
        onError={() => onToken("")}
        onExpire={() => onToken("")}
      />
    </div>
  );
}

export function ContactStatus({
  status,
  onReset,
  tone = "light",
}: {
  status: "success" | "error";
  onReset: () => void;
  tone?: FormTone;
}) {
  const dark = tone === "dark";
  const success = status === "success";
  return (
    <div className="py-10 text-center">
      <div
        className={cn(
          "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full",
          success ? "bg-brass/20" : dark ? "bg-rose-400/20" : "bg-oxblood/15"
        )}
      >
        <svg
          className={cn("h-8 w-8", success ? "text-brass" : dark ? "text-rose-300" : "text-oxblood")}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d={success ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"}
          />
        </svg>
      </div>
      <h3
        className={cn(
          "mb-2 font-display text-2xl font-semibold",
          dark ? "text-parchment" : "text-ink"
        )}
      >
        {success ? "Message Received!" : "Something Went Wrong"}
      </h3>
      <p className={cn("mb-5 text-[15px] leading-relaxed", dark ? "text-parchment/75" : "text-ink/70")}>
        {success ? (
          "We'll be in touch within 1–2 business days to discuss your project."
        ) : (
          <>
            Please try again, or call us at{" "}
            <a
              href={`tel:${PHONE_TEL}`}
              className={cn(
                "font-semibold",
                dark ? "text-brass hover:text-brass/80" : "text-oxblood hover:text-oxblood/80"
              )}
            >
              {PHONE_DISPLAY}
            </a>
          </>
        )}
      </p>
      <button
        onClick={onReset}
        className={cn(
          "text-sm font-semibold underline",
          dark ? "text-brass hover:text-brass/80" : "text-oxblood hover:text-oxblood/80"
        )}
      >
        {success ? "Send another message" : "Try again"}
      </button>
    </div>
  );
}
