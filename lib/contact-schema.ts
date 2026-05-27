import { z } from "zod";

/**
 * Single source of truth for contact-form validation.
 *
 * Field-level rules are defined once, then composed into:
 *  - `quickContactSchema`    — the short homepage form (client)
 *  - `detailedContactSchema` — the full form (client)
 *  - `contactApiSchema`      — the server contract (app/api/contact/route.ts)
 *
 * The client uses a single-select `projectType` (string); the API stores
 * `project_types` (array). `toContactPayload` bridges the two so neither
 * consumer has to bend its shape to the other.
 */

// Shared field validators
const name = z.string().trim().min(1, "Please enter your name");
const phone = z.string().trim().min(7, "Please enter a valid phone number");
const email = z.string().trim().email("Please enter a valid email address");
const projectType = z.string().min(1, "Please choose a project type");
const message = z.string().trim().min(1, "Please tell us a little about your project");
const street = z.string().trim().min(1, "Please enter the street address");
const city = z.string().trim().min(1, "Please enter the city");
const zip = z.string().trim().min(1, "Please enter the ZIP code");
const timeline = z.string().min(1, "Please choose a timeline");

// Client — short homepage form
export const quickContactSchema = z.object({
  name,
  phone,
  email,
  street,
  city,
  zip,
  projectType,
  message,
});
export type QuickContactValues = z.infer<typeof quickContactSchema>;

// Client — full form
export const detailedContactSchema = z.object({
  name,
  phone,
  email,
  street,
  city,
  zip,
  projectType,
  timeline,
  message,
});
export type DetailedContactValues = z.infer<typeof detailedContactSchema>;

// Server contract. Address/timeline/message are optional so the quick form
// validates server-side without sending them.
export const contactApiSchema = z.object({
  name,
  phone,
  email,
  street_address: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  zip: z.string().optional().nullable(),
  project_types: z.array(z.string().min(1)).min(1, "Please select at least one project type"),
  timeline: z.string().optional().nullable(),
  message: z.string().optional().nullable(),
  turnstileToken: z.string().min(1, "CAPTCHA verification required"),
});
export type ContactApiData = z.infer<typeof contactApiSchema>;

/** Form values from either variant; detailed-only fields are optional here. */
type ContactFormValues = QuickContactValues &
  Partial<Pick<DetailedContactValues, "street" | "city" | "zip" | "timeline">>;

/** Map client form values + Turnstile token to the API request body. */
export function toContactPayload(values: ContactFormValues, turnstileToken: string) {
  return {
    name: values.name,
    phone: values.phone,
    email: values.email,
    street_address: values.street ?? null,
    city: values.city ?? null,
    zip: values.zip ?? null,
    project_types: values.projectType ? [values.projectType] : [],
    timeline: values.timeline ?? null,
    message: values.message ?? null,
    turnstileToken,
  };
}
