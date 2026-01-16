"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/cn";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

// Custom icons for each project type
const KitchenIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect x="4" y="6" width="24" height="20" rx="1" />
    <line x1="4" y1="14" x2="28" y2="14" />
    <line x1="16" y1="6" x2="16" y2="14" />
    <line x1="4" y1="20" x2="28" y2="20" />
    <line x1="8" y1="10" x2="12" y2="10" />
    <line x1="20" y1="10" x2="24" y2="10" />
    <line x1="14" y1="17" x2="18" y2="17" />
    <line x1="14" y1="23" x2="18" y2="23" />
  </svg>
);

const BathroomIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect x="4" y="12" width="24" height="14" rx="1" />
    <line x1="16" y1="12" x2="16" y2="26" />
    <path d="M8 12 L8 9 Q16 6 24 9 L24 12" />
    <line x1="8" y1="19" x2="12" y2="19" />
    <line x1="20" y1="19" x2="24" y2="19" />
  </svg>
);

const BookcaseIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect x="4" y="4" width="24" height="24" rx="1" />
    <line x1="4" y1="12" x2="28" y2="12" />
    <line x1="4" y1="20" x2="28" y2="20" />
    <rect x="7" y="5" width="2" height="6" />
    <rect x="10" y="6" width="2" height="5" />
    <rect x="13" y="5" width="3" height="6" />
    <rect x="20" y="13" width="2" height="6" />
    <rect x="23" y="14" width="2" height="5" />
    <rect x="8" y="21" width="2" height="6" />
    <rect x="11" y="22" width="3" height="5" />
  </svg>
);

const EntertainmentIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect x="2" y="8" width="28" height="18" rx="1" />
    <rect x="6" y="10" width="12" height="8" rx="0.5" />
    <line x1="20" y1="8" x2="20" y2="26" />
    <line x1="20" y1="17" x2="30" y2="17" />
    <path d="M8 21 Q9 19 10 21 Q11 19 12 21 Q13 19 14 21 Q15 19 16 21" />
  </svg>
);

const HomeOfficeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect x="2" y="16" width="28" height="4" rx="0.5" />
    <line x1="4" y1="20" x2="4" y2="28" />
    <line x1="28" y1="20" x2="28" y2="28" />
    <rect x="4" y="4" width="10" height="10" rx="0.5" />
    <rect x="18" y="4" width="10" height="10" rx="0.5" />
    <line x1="4" y1="9" x2="14" y2="9" />
    <line x1="18" y1="9" x2="28" y2="9" />
    <rect x="12" y="21" width="8" height="3" rx="0.5" />
    <line x1="15" y1="22.5" x2="17" y2="22.5" />
  </svg>
);

const RefacingIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect x="6" y="4" width="14" height="24" rx="1" />
    <rect x="8" y="6" width="10" height="9" rx="0.5" />
    <rect x="8" y="17" width="10" height="9" rx="0.5" />
    <rect x="16" y="8" width="12" height="20" rx="1" strokeDasharray="2 2" />
    <path d="M22 4 L22 8" />
    <path d="M20 6 L22 4 L24 6" />
  </svg>
);

const MudroomIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect x="4" y="4" width="24" height="24" rx="1" />
    <line x1="12" y1="4" x2="12" y2="28" />
    <line x1="20" y1="4" x2="20" y2="28" />
    <line x1="4" y1="16" x2="28" y2="16" />
    <circle cx="8" cy="10" r="1.5" />
    <circle cx="16" cy="10" r="1.5" />
    <circle cx="24" cy="10" r="1.5" />
    <line x1="4" y1="22" x2="28" y2="22" strokeWidth={2} />
  </svg>
);

const OtherIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path d="M22 4 L28 10 L12 26 L4 28 L6 20 Z" />
    <line x1="18" y1="8" x2="24" y2="14" />
    <line x1="22" y1="22" x2="22" y2="28" />
    <line x1="19" y1="25" x2="25" y2="25" />
  </svg>
);

const projectTypes = [
  { id: "kitchen", label: "Kitchen", Icon: KitchenIcon },
  { id: "bathroom", label: "Bathroom", Icon: BathroomIcon },
  { id: "bookcases", label: "Bookcases", Icon: BookcaseIcon },
  { id: "entertainment", label: "Entertainment", Icon: EntertainmentIcon },
  { id: "home-office", label: "Home Office", Icon: HomeOfficeIcon },
  { id: "refacing", label: "Refacing", Icon: RefacingIcon },
  { id: "mudroom", label: "Mudroom", Icon: MudroomIcon },
  { id: "other", label: "Other", Icon: OtherIcon },
];

const timelineOptions = [
  { value: "", label: "Select timeline..." },
  { value: "asap", label: "ASAP" },
  { value: "1-3-months", label: "1–3 months" },
  { value: "3-6-months", label: "3–6 months" },
  { value: "6-plus-months", label: "6+ months" },
  { value: "researching", label: "Just researching" },
];

export function LocationContactForm() {
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          phone: formData.get('phone'),
          email: formData.get('email'),
          street_address: formData.get('street'),
          city: formData.get('city'),
          zip: formData.get('zip'),
          project_types: [selectedProject],
          timeline: formData.get('timeline'),
          message: formData.get('description'),
          turnstileToken,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setSubmitStatus("success");
      turnstileRef.current?.reset();
      setTurnstileToken("");
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus("error");
      turnstileRef.current?.reset();
      setTurnstileToken("");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClassName = cn(
    "w-full px-4 py-3 bg-white border border-umber/30 rounded-md",
    "text-ink text-base placeholder:text-ink/40",
    "focus:outline-none focus:ring-1 focus:ring-brass/40 focus:border-brass/60",
    "transition-all duration-200",
    "hover:border-umber/40"
  );

  const labelClassName = "block text-sm font-medium text-ink/80 mb-2";
  const sectionHeadingClassName = "text-lg font-elegant font-semibold text-ink mb-4";

  if (submitStatus === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brass/20 flex items-center justify-center">
          <svg className="w-8 h-8 text-brass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-display font-semibold text-ink mb-3">
          Message Received!
        </h3>
        <p className="text-ink/70 text-base leading-relaxed mb-6">
          We&apos;ll be in touch within 1-2 business days.
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
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-oxblood/20 flex items-center justify-center">
          <svg className="w-8 h-8 text-oxblood" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h3 className="text-2xl font-display font-semibold text-ink mb-3">
          Something Went Wrong
        </h3>
        <p className="text-ink/70 text-base leading-relaxed mb-6">
          Please try again, or call us at{" "}
          <a href="tel:3144379988" className="text-brass hover:text-brass/80 font-semibold">
            (314) 437-9988
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
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Section 1: Contact Information */}
      <div className="space-y-4">
        <h3 className={sectionHeadingClassName}>
          Your Contact Information
        </h3>
        <div className="space-y-4">
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
          <div className="grid gap-4 sm:grid-cols-2">
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
      <div className="space-y-4">
        <h3 className={sectionHeadingClassName}>
          Project Location
        </h3>
        <div className="space-y-4">
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
          <div className="grid gap-4 sm:grid-cols-2">
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
      <div className="space-y-4">
        <h3 className={sectionHeadingClassName}>
          Project Details
        </h3>

        {/* Project Type */}
        <div>
          <label className={cn(labelClassName, "mb-3")}>
            What type of project? <span className="text-oxblood">*</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {projectTypes.map((project) => {
              const Icon = project.Icon;
              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setSelectedProject(project.id)}
                  className={cn(
                    "flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all duration-200",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2",
                    selectedProject === project.id
                      ? "border-brass bg-brass/10 shadow-md scale-105"
                      : "border-umber/20 bg-white hover:border-brass/50 hover:bg-brass/5 hover:scale-105"
                  )}
                >
                  <Icon
                    className={cn(
                      "w-7 h-7 mb-1.5 transition-colors",
                      selectedProject === project.id ? "text-brass" : "text-umber"
                    )}
                  />
                  <span
                    className={cn(
                      "text-xs font-medium text-center leading-tight",
                      selectedProject === project.id ? "text-ink" : "text-ink/70"
                    )}
                  >
                    {project.label}
                  </span>
                </button>
              );
            })}
          </div>
          <input type="hidden" name="projectType" value={selectedProject} required />
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
              <option key={option.value} value={option.value} className="bg-white text-ink">
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
            rows={4}
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
      <div className="flex flex-col items-stretch gap-4 pt-4 border-t border-umber/20">
        <button
          type="submit"
          disabled={isSubmitting || !selectedProject || !turnstileToken}
          className={cn(
            "w-full px-8 py-3.5 rounded-lg font-semibold text-base transition-all duration-300 shadow-lg",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2",
            isSubmitting || !selectedProject || !turnstileToken
              ? "bg-umber/30 text-ink/40 cursor-not-allowed shadow-none"
              : "bg-oxblood text-white hover:bg-oxblood/90 hover:shadow-xl hover:scale-105 active:scale-100"
          )}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              Send Message
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          )}
        </button>
        <p className="text-ink/60 text-sm text-center">
          Prefer to talk? Call us at{" "}
          <a
            href="tel:3144379988"
            className="text-brass hover:text-brass/80 font-semibold transition-colors"
          >
            (314) 437-9988
          </a>
        </p>
      </div>
    </form>
  );
}
