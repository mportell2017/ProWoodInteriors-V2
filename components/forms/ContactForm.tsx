"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/cn";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/business";
import { timelineOptions } from "./contact-form-icons";
import {
  detailedContactSchema,
  toContactPayload,
  type DetailedContactValues,
} from "@/lib/contact-schema";
import {
  useContactSubmit,
  ProjectPicker,
  TurnstileField,
  ContactStatus,
} from "./contact-form-parts";

// Light field styling, tight rhythm, aligned to DESIGN.md (rounded-sm, brass focus).
const inputClassName = cn(
  "w-full rounded-sm border border-umber/30 bg-white px-3.5 py-2.5",
  "text-[15px] text-ink placeholder:text-ink/40",
  "transition-colors duration-200 hover:border-umber/40",
  "focus:border-brass/60 focus:outline-none focus:ring-1 focus:ring-brass/50"
);
// Per-field labels are visually hidden (kept for screen readers); the field
// name shows as the input placeholder to condense the form. Section headings
// (sectionLabelClassName), the project-type label, and the timeline's default
// option remain visible to preserve structure.
const labelClassName = "sr-only";
const sectionLabelClassName =
  "text-[11px] font-semibold uppercase tracking-[0.16em] text-umber/70";
const errorClassName = "mt-1 text-[12px] text-oxblood";

function Field({
  label,
  htmlFor,
  required,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className={labelClassName}>
        {label}
        {required && <span className="text-oxblood"> *</span>}
      </label>
      {children}
      {error && <p className={errorClassName}>{error}</p>}
    </div>
  );
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<DetailedContactValues>({
    resolver: zodResolver(detailedContactSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      street: "",
      city: "",
      zip: "",
      projectType: "",
      timeline: "",
      message: "",
    },
  });

  const {
    isSubmitting,
    submitStatus,
    setSubmitStatus,
    turnstileToken,
    setTurnstileToken,
    turnstileRef,
    submit,
  } = useContactSubmit();

  if (submitStatus !== "idle") {
    return <ContactStatus status={submitStatus} onReset={() => setSubmitStatus("idle")} />;
  }

  const onSubmit = handleSubmit((values) => submit(toContactPayload(values, turnstileToken)));
  const disabled = isSubmitting || !turnstileToken;

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate>
      {/* Contact information */}
      <fieldset className="space-y-3.5">
        <legend className={cn(sectionLabelClassName, "mb-1")}>Your Contact Information</legend>
        <Field label="Full Name" htmlFor="d-name" required error={errors.name?.message}>
          <input id="d-name" {...register("name")} placeholder="Full Name" className={inputClassName} />
        </Field>
        <div className="grid gap-3.5 sm:grid-cols-2">
          <Field label="Phone Number" htmlFor="d-phone" required error={errors.phone?.message}>
            <input id="d-phone" type="tel" {...register("phone")} placeholder="Phone Number" className={inputClassName} />
          </Field>
          <Field label="Email Address" htmlFor="d-email" required error={errors.email?.message}>
            <input id="d-email" type="email" {...register("email")} placeholder="Email Address" className={inputClassName} />
          </Field>
        </div>
      </fieldset>

      {/* Project location */}
      <fieldset className="space-y-3.5">
        <legend className={cn(sectionLabelClassName, "mb-1")}>Project Location</legend>
        <Field label="Street Address" htmlFor="d-street" required error={errors.street?.message}>
          <input id="d-street" {...register("street")} placeholder="Street Address" className={inputClassName} />
        </Field>
        <div className="grid gap-3.5 sm:grid-cols-2">
          <Field label="City" htmlFor="d-city" required error={errors.city?.message}>
            <input id="d-city" {...register("city")} placeholder="City" className={inputClassName} />
          </Field>
          <Field label="ZIP Code" htmlFor="d-zip" required error={errors.zip?.message}>
            <input id="d-zip" {...register("zip")} placeholder="ZIP Code" className={inputClassName} />
          </Field>
        </div>
      </fieldset>

      {/* Project details */}
      <fieldset className="space-y-3.5">
        <legend className={cn(sectionLabelClassName, "mb-1")}>Project Details</legend>
        <ProjectPicker
          value={watch("projectType")}
          onSelect={(id) => setValue("projectType", id, { shouldValidate: true })}
          error={errors.projectType?.message}
        />
        <Field
          label="When are you looking to start?"
          htmlFor="d-timeline"
          required
          error={errors.timeline?.message}
        >
          <select
            id="d-timeline"
            {...register("timeline")}
            className={cn(inputClassName, "cursor-pointer appearance-none")}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%235B3A2A' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
              backgroundPosition: "right 0.75rem center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "1.25em 1.25em",
              paddingRight: "2.5rem",
            }}
          >
            {timelineOptions.map((option) => (
              <option key={option.value} value={option.value} className="bg-white text-ink">
                {option.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Tell us about your vision" htmlFor="d-message" required error={errors.message?.message}>
          <textarea
            id="d-message"
            rows={4}
            {...register("message")}
            placeholder="Tell us about your vision"
            className={cn(inputClassName, "resize-none")}
          />
        </Field>
      </fieldset>

      <TurnstileField turnstileRef={turnstileRef} onToken={setTurnstileToken} />

      <div className="flex flex-col gap-4 border-t border-umber/15 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] text-ink/60">
          Prefer to talk? Call{" "}
          <a href={`tel:${PHONE_TEL}`} className="font-semibold text-oxblood transition-colors hover:text-oxblood/80">
            {PHONE_DISPLAY}
          </a>
        </p>
        <button
          type="submit"
          disabled={disabled}
          className={cn(
            "inline-flex items-center justify-center gap-2 rounded-sm px-8 py-3 text-[15px] font-semibold transition-all duration-200",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2",
            disabled
              ? "cursor-not-allowed bg-umber/30 text-ink/40"
              : "bg-oxblood text-white shadow-md hover:bg-oxblood/90 hover:shadow-lg"
          )}
        >
          {isSubmitting ? (
            <>
              <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending…
            </>
          ) : (
            <>
              Send Message
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
