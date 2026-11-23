import { z } from "zod";

// Contact page message (shared client/server)
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(120, "Full name is too long"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(160, "Email is too long"),
  company: z.string().trim().max(160, "Company name is too long").optional(),
  message: z
    .string()
    .trim()
    .min(5, "Please tell us a little more")
    .max(5000, "Message is too long"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
