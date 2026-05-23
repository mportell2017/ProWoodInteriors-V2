"use client";

import { useRef, useState } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { cn } from "@/lib/cn";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/business";
import { projectTypes, timelineOptions } from "./contact-form-icons";

type Variant = "spacious" | "compact";

const variantStyles = {
  spacious: {
    form: "space-y-12",
    section: "space-y-6",
    fields: "space-y-5",
    gridGap: "gap-5",
    sectionHeading: "text-xl font-elegant font-semibold text-ink mb-6",
    projectButton: "p-4 rounded-xl",
    iconSize: "w-8 h-8 mb-2",
    submitRow:
      "flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t-2 border-umber/20",
    submitButton: "px-12 py-4",
    submitIconSpan: "items-center",
    descriptionRows: 5,
    statusWrapper: "py-16",
    statusCircle: "w-20 h-20",
    statusIcon: "w-10 h-10",
    statusHeading: "text-3xl",
  },
  compact: {
    form: "space-y-8",
    section: "space-y-4",
    fields: "space-y-4",
    gridGap: "gap-4",
    sectionHeading: "text-lg font-elegant font-semibold text-ink mb-4",
    projectButton: "p-3 rounded-lg",
    iconSize: "w-7 h-7 mb-1.5",
    submitRow:
      "flex flex-col items-stretch gap-4 pt-4 border-t border-umber/20",
    submitButton: "w-full px-8 py-3.5",
    submitIconSpan: "items-center justify-center",
    descriptionRows: 4,
    statusWrapper: "py-12",
    statusCircle: "w-16 h-16",
    statusIcon: "w-8 h-8",
    statusHeading: "text-2xl",
  },
} as const;

type ContactFormProps = {
  variant?: Variant;
};

const inputClassName = cn(
  "w-full px-4 py-3 bg-white border border-umber/30 rounded-md",
  "text-ink text-base placeholder:text-ink/40",
  "focus:outline-none focus:ring-1 focus:ring-brass/40 focus:border-brass/60",
  "transition-all duration-200",
  "hover:border-umber/40"
);

const labelClassName = "block text-sm font-medium text-ink/80 mb-2";

export function ContactForm({ variant = "spacious" }: ContactFormProps) {
  const s = variantStyles[variant];
  const [selectedProject, setSelectedProject] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const turnstileRef = useRef<TurnstileInstance>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          street_address: formData.get("street"),
          city: formData.get("city"),
          zip: formData.get("zip"),
          project_types: selectedProject ? [selectedProject] : [],
          timeline: formData.get("timeline"),
          message: formData.get("description"),
          turnstileToken,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Server response:", response.status, errorData);
        throw new Error(errorData.error || "Failed to submit");
      }

      setSubmitStatus("success");
      turnstileRef.current?.reset();
      setTurnstileToken("");
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      turnstileRef.current?.reset();
      setTurnstileToken("");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className={cn("text-center", s.statusWrapper)}>
        <div
          className={cn(
            "mx-auto mb-4 rounded-full bg-brass/20 flex items-center justify-center",
            s.statusCircle
          )}
        >
          <svg
            className={cn("text-brass", s.statusIcon)}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className={cn("font-display font-semibold text-ink mb-3", s.statusHeading)}>
          Message Received!
        </h3>
        <p className="text-ink/70 text-base leading-relaxed mb-6">
          We&apos;ll be in touch within 1-2 business days to discuss your project.
        </p>
        <button
          onClick={() => setSubmitStatus("idle")}
          className="text-brass hover:text-brass/80 font-semibold underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  if (submitStatus === "error") {
    return (
      <div className={cn("text-center", s.statusWrapper)}>
        <div
          className={cn(
            "mx-auto mb-4 rounded-full bg-oxblood/20 flex items-center justify-center",
            s.statusCircle
          )}
        >
          <svg
            className={cn("text-oxblood", s.statusIcon)}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h3 className={cn("font-display font-semibold text-ink mb-3", s.statusHeading)}>
          Something Went Wrong
        </h3>
        <p className="text-ink/70 text-base leading-relaxed mb-6">
          Please try again, or call us at{" "}
          <a
            href={`tel:${PHONE_TEL}`}
            className="text-brass hover:text-brass/80 font-semibold"
          >
            {PHONE_DISPLAY}
          </a>
        </p>
        <button
          onClick={() => setSubmitStatus("idle")}
          className="text-brass hover:text-brass/80 font-semibold underline"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      {/* Section 1: Contact Information */}
      <div className={s.section}>
        <h3 className={s.sectionHeading}>Your Contact Information</h3>
        <div className={s.fields}>
          <div>
            <label htmlFor="name" className={labelClassName}>
              Full Name <span className="text-oxblood">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="John Smith"
              className={inputClassName}
            />
          </div>
          <div className={cn("grid sm:grid-cols-2", s.gridGap)}>
            <div>
              <label htmlFor="phone" className={labelClassName}>
                Phone Number <span className="text-oxblood">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="(314) 555-0123"
                className={inputClassName}
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClassName}>
                Email Address <span className="text-oxblood">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@example.com"
                className={inputClassName}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Project Location */}
      <div className={s.section}>
        <h3 className={s.sectionHeading}>Project Location</h3>
        <div className={s.fields}>
          <div>
            <label htmlFor="street" className={labelClassName}>
              Street Address <span className="text-oxblood">*</span>
            </label>
            <input
              type="text"
              id="street"
              name="street"
              required
              placeholder="123 Main Street"
              className={inputClassName}
            />
          </div>
          <div className={cn("grid sm:grid-cols-2", s.gridGap)}>
            <div>
              <label htmlFor="city" className={labelClassName}>
                City <span className="text-oxblood">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                required
                placeholder="St. Louis"
                className={inputClassName}
              />
            </div>
            <div>
              <label htmlFor="zip" className={labelClassName}>
                ZIP Code <span className="text-oxblood">*</span>
              </label>
              <input
                type="text"
                id="zip"
                name="zip"
                required
                placeholder="63101"
                className={inputClassName}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Project Details */}
      <div className={s.section}>
        <h3 className={s.sectionHeading}>Project Details</h3>

        {/* Project Type */}
        <div>
          <label className={cn(labelClassName, "mb-3")}>
            What type of project? <span className="text-oxblood">*</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {projectTypes.map((project) => {
              const Icon = project.Icon;
              const active = selectedProject === project.id;
              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setSelectedProject(project.id)}
                  className={cn(
                    "flex flex-col items-center justify-center border-2 transition-all duration-200",
                    s.projectButton,
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2",
                    active
                      ? "border-brass bg-brass/10 shadow-md scale-105"
                      : "border-umber/20 bg-white hover:border-brass/50 hover:bg-brass/5 hover:scale-105"
                  )}
                >
                  <Icon
                    className={cn(
                      s.iconSize,
                      "transition-colors",
                      active ? "text-brass" : "text-umber"
                    )}
                  />
                  <span
                    className={cn(
                      "text-xs font-medium text-center leading-tight",
                      active ? "text-ink" : "text-ink/70"
                    )}
                  >
                    {project.label}
                  </span>
                </button>
              );
            })}
          </div>
          <input
            type="hidden"
            name="projectType"
            value={selectedProject}
            required
          />
        </div>

        {/* Timeline */}
        <div>
          <label htmlFor="timeline" className={labelClassName}>
            When are you looking to start? <span className="text-oxblood">*</span>
          </label>
          <select
            id="timeline"
            name="timeline"
            required
            className={cn(inputClassName, "appearance-none cursor-pointer")}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%235B3A2A' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
              backgroundPosition: "right 0.75rem center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "1.5em 1.5em",
              paddingRight: "2.5rem",
            }}
          >
            {timelineOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="bg-white text-ink"
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Project Description */}
        <div>
          <label htmlFor="description" className={labelClassName}>
            Tell us about your vision <span className="text-oxblood">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={s.descriptionRows}
            placeholder="Share your ideas, style preferences, dimensions, and any specific requirements."
            className={cn(inputClassName, "resize-none")}
          />
        </div>
      </div>

      {/* Turnstile CAPTCHA */}
      <div className="flex justify-center">
        <Turnstile
          ref={turnstileRef}
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
          onSuccess={setTurnstileToken}
          onError={() => setTurnstileToken("")}
          onExpire={() => setTurnstileToken("")}
        />
      </div>

      {/* Submit Section */}
      <div className={s.submitRow}>
        {variant === "spacious" && (
          <p className="text-ink/60 text-sm">
            Prefer to talk? Call us at{" "}
            <a
              href={`tel:${PHONE_TEL}`}
              className="text-brass hover:text-brass/80 font-semibold transition-colors"
            >
              {PHONE_DISPLAY}
            </a>
          </p>
        )}
        <button
          type="submit"
          disabled={isSubmitting || !selectedProject || !turnstileToken}
          className={cn(
            "rounded-lg font-semibold text-base transition-all duration-300 shadow-lg",
            s.submitButton,
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2",
            isSubmitting || !selectedProject || !turnstileToken
              ? "bg-umber/30 text-ink/40 cursor-not-allowed shadow-none"
              : "bg-oxblood text-white hover:bg-oxblood/90 hover:shadow-xl hover:scale-105 active:scale-100"
          )}
        >
          {isSubmitting ? (
            <span className={cn("flex gap-2", s.submitIconSpan)}>
              <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            <span className={cn("flex gap-2", s.submitIconSpan)}>
              Send Message
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          )}
        </button>
        {variant === "compact" && (
          <p className="text-ink/60 text-sm text-center">
            Prefer to talk? Call us at{" "}
            <a
              href={`tel:${PHONE_TEL}`}
              className="text-brass hover:text-brass/80 font-semibold transition-colors"
            >
              {PHONE_DISPLAY}
            </a>
          </p>
        )}
      </div>
    </form>
  );
}
