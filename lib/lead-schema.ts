import { z } from "zod";

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
  product: z.string().min(1, "Product is required"),
});

export type LeadFormData = z.infer<typeof leadSchema>;
