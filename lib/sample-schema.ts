import { z } from "zod";
import { PRODUCTS } from "@/lib/constants";
import { isPossibleInternational } from "@/lib/phone";

// Free-sample request: the WhatsApp number the sample is sent to, optionally
// an email address, and which dataset. No free text, so nothing arbitrary
// reaches the notification or confirmation emails.
export const sampleSchema = z.object({
  // International form, e.g. "+971501234567": the form adds the country code.
  whatsapp: z
    .string()
    .trim()
    .regex(/^\+\d{7,15}$/, "Please enter a valid WhatsApp number")
    .refine(isPossibleInternational, "Please enter a valid WhatsApp number"),
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
