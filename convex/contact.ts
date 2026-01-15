import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const submitContact = mutation({
  args: {
    name: v.string(),
    phone: v.string(),
    email: v.string(),
    city: v.optional(v.string()),
    zip: v.optional(v.string()),
    projectTypes: v.array(v.string()),
    message: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const submissionId = await ctx.db.insert("contactSubmissions", {
      ...args,
      createdAt: Date.now(),
      emailSent: false,
    });

    // Trigger email sending via action (scheduled to run immediately)
    // Convex supports scheduling by reference, but Next.js typechecking can be picky
    // due to generated `.d.ts` importing `*.js` paths. Use a safe cast here.
    await ctx.scheduler.runAfter(0, "emails:sendContactNotification" as any, {
      submissionId,
    } as any);

    return { success: true, id: submissionId };
  },
});

export const getSubmissions = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("contactSubmissions")
      .withIndex("by_createdAt")
      .order("desc")
      .collect();
  },
});

export const getSubmissionById = query({
  args: { id: v.id("contactSubmissions") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const markEmailSent = mutation({
  args: { id: v.id("contactSubmissions") },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { emailSent: true });
  },
});
