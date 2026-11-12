import { z } from "zod";
import { PRODUCTS } from "@/lib/constants";

// Free-sample request: the WhatsApp number the sample is sent to, optionally
// an email address, and which dataset. No free text, so nothing arbitrary
// reaches the notification or confirmation emails.
export const sampleSchema = z.object({
  whatsapp: z
    .string()
    .trim()
    .regex(/^\+?[\d\s().-]{7,20}$/, "Please enter your WhatsApp number with the country code")
    .refine((value) => value.replace(/\D/g, "").length >= 8, "Please enter your WhatsApp number with the country code"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(160, "Email is too long")
    .optional()
    .or(z.literal("")),
  product: z
    .string()
    .refine((slug) => PRODUCTS.some((p) => p.slug === slug), "Unknown dataset"),
});

export type SampleFormData = z.infer<typeof sampleSchema>;
