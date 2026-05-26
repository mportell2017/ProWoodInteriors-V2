import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

/**
 * Internal notification email sent to the ProWood team when a contact form is
 * submitted. Rendered to HTML (and plain text) by the Resend Node SDK via the
 * `react` parameter in app/api/contact/route.ts.
 *
 * Brand tokens mirror tailwind.config.js / DESIGN.md so the email reads like
 * the site. React Email escapes all interpolated values, so no manual HTML
 * escaping is needed here.
 */
export type ContactNotificationEmailProps = {
  name: string;
  email: string;
  phone: string;
  streetAddress?: string | null;
  city?: string | null;
  zip?: string | null;
  projectTypes: string[];
  timeline?: string | null;
  message?: string | null;
};

// Brand colors (kept in sync with tailwind.config.js)
const ink = "#23160F";
const parchment = "#FBF7F0";
const brass = "#B58B4B";
const walnut = "#2C1810";
const umber = "#5B3A2A";

export function ContactNotificationEmail({
  name,
  email,
  phone,
  streetAddress,
  city,
  zip,
  projectTypes,
  timeline,
  message,
}: ContactNotificationEmailProps) {
  const location = [streetAddress, city, zip].filter(Boolean).join(", ");
  const projectTypesLabel = projectTypes.join(", ");

  return (
    <Html>
      <Head />
      <Preview>{`New inquiry from ${name}${projectTypesLabel ? ` — ${projectTypesLabel}` : ""}`}</Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={header}>
            <Heading as="h1" style={headerHeading}>
              New Contact Form Submission
            </Heading>
          </Section>

          <Section style={content}>
            <Field label="Name" value={name} />
            <Field
              label="Email"
              value={<Link href={`mailto:${email}`} style={link}>{email}</Link>}
            />
            <Field
              label="Phone"
              value={<Link href={`tel:${phone}`} style={link}>{phone}</Link>}
            />
            {location ? <Field label="Project Location" value={location} /> : null}
            {projectTypesLabel ? (
              <Field label="Project Type" value={projectTypesLabel} />
            ) : null}
            {timeline ? <Field label="Timeline" value={timeline} /> : null}

            {message ? (
              <>
                <Text style={fieldLabel}>Message</Text>
                <Section style={messageBox}>
                  {message.split("\n").map((line, i) => (
                    <Text key={i} style={messageLine}>
                      {line}
                    </Text>
                  ))}
                </Section>
              </>
            ) : null}
          </Section>

          <Hr style={divider} />
          <Text style={footer}>Submitted via prowoodinteriors.com</Text>
        </Container>
      </Body>
    </Html>
  );
}

export default ContactNotificationEmail;

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <Section style={field}>
      <Text style={fieldLabel}>{label}</Text>
      <Text style={fieldValue}>{value}</Text>
    </Section>
  );
}

// --- styles ---
const body: React.CSSProperties = {
  backgroundColor: parchment,
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  color: ink,
  lineHeight: 1.6,
  margin: 0,
  padding: 0,
};

const container: React.CSSProperties = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "20px",
};

const header: React.CSSProperties = {
  backgroundColor: walnut,
  padding: "24px 20px",
  textAlign: "center",
  borderRadius: "8px 8px 0 0",
};

const headerHeading: React.CSSProperties = {
  color: parchment,
  fontSize: "22px",
  margin: 0,
};

const content: React.CSSProperties = {
  backgroundColor: "#ffffff",
  padding: "24px",
  borderRadius: "0 0 8px 8px",
};

const field: React.CSSProperties = {
  marginBottom: "16px",
};

const fieldLabel: React.CSSProperties = {
  fontWeight: 700,
  color: umber,
  fontSize: "13px",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  margin: "0 0 4px",
};

const fieldValue: React.CSSProperties = {
  fontSize: "16px",
  color: ink,
  margin: 0,
};

const messageBox: React.CSSProperties = {
  backgroundColor: parchment,
  border: `1px solid ${brass}`,
  borderRadius: "6px",
  padding: "12px 16px",
};

const messageLine: React.CSSProperties = {
  fontSize: "16px",
  color: ink,
  margin: "0 0 4px",
};

const link: React.CSSProperties = {
  color: brass,
  textDecoration: "underline",
};

const divider: React.CSSProperties = {
  borderColor: "#e5ded3",
  margin: "24px 0 12px",
};

const footer: React.CSSProperties = {
  textAlign: "center",
  fontSize: "12px",
  color: "#888888",
  margin: 0,
};
