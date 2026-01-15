import { action } from "./_generated/server";
import { api } from "./_generated/api";
import { v } from "convex/values";

// NOTE: Explicit annotation avoids a TS circular inference edge case during Next.js build typechecking.
export const sendContactNotification: any = action({
  args: {
    submissionId: v.id("contactSubmissions"),
  },
  handler: async (ctx, { submissionId }) => {
    const submission = await ctx.runQuery(api.contact.getSubmissionById, {
      id: submissionId,
    });

    if (!submission) {
      throw new Error("Submission not found");
    }

    // Use SMTP2GO HTTP API (works with Convex Actions)
    const smtp2goApiKey = process.env.SMTP2GO_API_KEY;
    const fromEmail = process.env.SMTP2GO_FROM_EMAIL || "noreply@professionalwoodinteriors.com";
    const toEmail = process.env.CONTACT_EMAIL || "info@professionalwoodinteriors.com";

    if (!smtp2goApiKey) {
      console.error("SMTP2GO_API_KEY not configured");
      return { success: false, error: "Email not configured" };
    }

    const emailBody = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${submission.name}</p>
      <p><strong>Phone:</strong> ${submission.phone}</p>
      <p><strong>Email:</strong> ${submission.email}</p>
      ${submission.city ? `<p><strong>City:</strong> ${submission.city}</p>` : ""}
      ${submission.zip ? `<p><strong>Zip:</strong> ${submission.zip}</p>` : ""}
      <p><strong>Project Types:</strong> ${submission.projectTypes.join(", ")}</p>
      ${submission.message ? `<p><strong>Message:</strong><br>${submission.message.replace(/\n/g, "<br>")}</p>` : ""}
    `;

    try {
      // SMTP2GO HTTP API endpoint
      const response = await fetch("https://api.smtp2go.com/v3/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Smtp2go-Api-Key": smtp2goApiKey,
        },
        body: JSON.stringify({
          to: [toEmail],
          sender: fromEmail,
          subject: `New Contact Form Submission from ${submission.name}`,
          html_body: emailBody,
        }),
      });

      const result = await response.json();

      if (result.data && result.data.error_code === "0") {
        // Update submission to mark email as sent
        await ctx.runMutation(api.contact.markEmailSent, {
          id: submissionId,
        });
        return { success: true };
      } else {
        console.error("SMTP2GO error:", result);
        return { success: false, error: result.data?.error || "Email send failed" };
      }
    } catch (error) {
      console.error("Email sending error:", error);
      return { success: false, error: "Failed to send email" };
    }
  },
});
