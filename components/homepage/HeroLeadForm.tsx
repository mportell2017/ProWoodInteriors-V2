import { LeadCaptureBand } from "@/components/forms/LeadCaptureBand";

/**
 * Homepage lead-capture band. Thin wrapper over the shared LeadCaptureBand so
 * the homepage and the location landing pages stay visually identical.
 */
export function HeroLeadForm() {
  return <LeadCaptureBand />;
}
