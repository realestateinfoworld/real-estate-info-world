import { z } from "zod";
import { PRODUCTS } from "@/lib/constants";

// Free-sample request: an email to send the sample to, optionally a WhatsApp
// number, and which dataset. No free text, so nothing arbitrary reaches the
// notification or confirmation emails.
export const sampleSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(160, "Email is too long"),
  whatsapp: z
    .string()
    .trim()
    .regex(/^\+?[\d\s().-]{7,20}$/, "Please enter a valid WhatsApp number, with country code")
    .optional()
    .or(z.literal("")),
  product: z
    .string()
    .refine((slug) => PRODUCTS.some((p) => p.slug === slug), "Unknown dataset"),
});

export type SampleFormData = z.infer<typeof sampleSchema>;
