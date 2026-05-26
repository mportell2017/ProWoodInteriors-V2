"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/cn";
import {
  quickContactSchema,
  toContactPayload,
  type QuickContactValues,
} from "@/lib/contact-schema";
import {
  useContactSubmit,
  ProjectPicker,
  TurnstileField,
  ContactStatus,
} from "./contact-form-parts";

// Dark-context field styling — echoes the project-type buttons: translucent
// fill, parchment text, soft brass border, and an eloquent brass focus glow.
const inputClassName = cn(
  "w-full rounded-sm border border-brass/30 bg-parchment/5 px-3.5 py-2.5",
  "text-[15px] text-parchment placeholder:text-parchment/40",
  "transition-all duration-200 hover:border-brass/50",
  "focus:border-brass focus:bg-parchment/10 focus:outline-none focus:ring-2 focus:ring-brass/25"
);
const labelClassName = "mb-1.5 block text-[13px] font-medium text-parchment/80";
const errorClassName = "mt-1 text-[12px] text-rose-300";

export function QuickContactBar() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<QuickContactValues>({
    resolver: zodResolver(quickContactSchema),
    mode: "onTouched",
    defaultValues: { name: "", phone: "", email: "", projectType: "", message: "" },
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
    return <ContactStatus status={submitStatus} onReset={() => setSubmitStatus("idle")} tone="dark" />;
  }

  const onSubmit = handleSubmit((values) => submit(toContactPayload(values, turnstileToken)));
  const disabled = isSubmitting || !turnstileToken;

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      {/* Row 1 — contact fields across */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label htmlFor="qb-name" className={labelClassName}>
            Full Name <span className="text-brass">*</span>
          </label>
          <input id="qb-name" {...register("name")} placeholder="John Smith" className={inputClassName} />
          {errors.name && <p className={errorClassName}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="qb-phone" className={labelClassName}>
            Phone <span className="text-brass">*</span>
          </label>
          <input id="qb-phone" type="tel" {...register("phone")} placeholder="(314) 555-0123" className={inputClassName} />
          {errors.phone && <p className={errorClassName}>{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="qb-email" className={labelClassName}>
            Email <span className="text-brass">*</span>
          </label>
          <input id="qb-email" type="email" {...register("email")} placeholder="you@example.com" className={inputClassName} />
          {errors.email && <p className={errorClassName}>{errors.email.message}</p>}
        </div>
      </div>

      {/* Row 2 — project icons as a horizontal strip */}
      <ProjectPicker
        tone="dark"
        gridClassName="grid grid-cols-4 gap-2 sm:grid-cols-8"
        value={watch("projectType")}
        onSelect={(id) => setValue("projectType", id, { shouldValidate: true })}
        error={errors.projectType?.message}
      />

      {/* Row 3 — message */}
      <div>
        <label htmlFor="qb-message" className={labelClassName}>
          Tell us about your project <span className="text-brass">*</span>
        </label>
        <textarea
          id="qb-message"
          rows={2}
          {...register("message")}
          placeholder="A sentence or two about what you have in mind."
          className={cn(inputClassName, "resize-none")}
        />
        {errors.message && <p className={errorClassName}>{errors.message.message}</p>}
      </div>

      {/* Row 4 — verification + submit */}
      <div className="flex flex-col items-stretch gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <TurnstileField turnstileRef={turnstileRef} onToken={setTurnstileToken} theme="dark" />
        <button
          type="submit"
          disabled={disabled}
          className={cn(
            "inline-flex items-center justify-center gap-2 rounded-sm px-8 py-3 text-[15px] font-semibold transition-all duration-200",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-walnut",
            disabled
              ? "cursor-not-allowed bg-parchment/20 text-parchment/40"
              : "bg-brass text-walnut shadow-md hover:bg-brass/90 hover:shadow-lg"
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
