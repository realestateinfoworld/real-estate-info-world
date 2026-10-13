import { z } from "zod";
import { PRODUCTS } from "@/lib/constants";

// Minimal lead schema for pre-payment capture (Name + Email only, no storage)
export const leadSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(120, "Full name is too long"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(160, "Email is too long"),
  // Only real product names, so a bot can't put arbitrary text in the email.
  product: z
    .string()
    .refine((name) => PRODUCTS.some((p) => p.name === name), "Unknown product"),
});

export type LeadFormData = z.infer<typeof leadSchema>;
