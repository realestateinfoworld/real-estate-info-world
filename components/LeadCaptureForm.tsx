"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2, Shield } from "lucide-react";
import { leadSchema, type LeadFormData } from "@/lib/lead-schema";
import { trackMetaEvent } from "@/lib/metaPixel";

interface ProductForForm {
  name: string;
  paypalButtonId: string;
  price: number;
}

interface LeadCaptureFormProps {
  product: ProductForForm;
}

export function LeadCaptureForm({ product }: LeadCaptureFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Client-side validation (name + email only)
    const formData: LeadFormData = {
      fullName: fullName.trim(),
      email: email.trim(),
      product: product.name,
    };

    const validation = leadSchema.safeParse(formData);

    if (!validation.success) {
      const firstError = Object.values(validation.error.flatten().fieldErrors)[0]?.[0];
      toast.error(firstError || "Please fill out all required fields correctly.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        // Email failed or other server error — do NOT redirect to PayPal
        throw new Error(result.error || "Failed to submit. Please try again.");
      }

      // Success: email notification sent via Resend (no database storage)
      setSubmitted(true);

      // Track qualified pre-payment lead (for analytics/retargeting)
      trackMetaEvent("Lead", {
        content_name: product.name,
        value: product.price,
        currency: "USD",
      });

      toast.success("Thank you! Redirecting to secure PayPal checkout...");

      // Redirect to the correct PayPal hosted checkout
      const paypalUrl = `https://www.paypal.com/ncp/payment/${product.paypalButtonId}`;

      // Small delay so user sees the success state / toast
      setTimeout(() => {
        window.location.href = paypalUrl;
      }, 1350);
    } catch (error: any) {
      console.error("Lead submission error:", error);
      toast.error(error.message || "Something went wrong. Please try again or contact us.");
    } finally {
      setLoading(false);
    }
  };

  // After successful email delivery, show minimal redirect state
  // (keeps layout stable inside the purchase card)
  if (submitted) {
    return (
      <div className="py-3 text-center">
        <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#e8e0d3]">
          <Shield className="h-5 w-5 text-[#947f57]" />
        </div>
        <div className="text-sm font-medium">Thank you.</div>
        <div className="mt-1 text-xs text-[#6b6b6b]">
          Redirecting to PayPal secure checkout...
        </div>
        <div className="mt-3">
          <a
            href={`https://www.paypal.com/ncp/payment/${product.paypalButtonId}`}
            className="text-xs text-[#947f57] underline hover:no-underline"
          >
            Click here if you are not redirected automatically
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
      <div className="space-y-3">
        {/* Full Name */}
        <div>
          <Label htmlFor="fullName" className="text-xs">
            Full Name <span className="text-[#947f57]">*</span>
          </Label>
          <Input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="John Smith"
            required
            autoComplete="name"
            disabled={loading}
            className="h-9 text-sm"
          />
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email" className="text-xs">
            Email Address <span className="text-[#947f57]">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
            autoComplete="email"
            disabled={loading}
            className="h-9 text-sm"
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full"
        size="lg"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit & Continue to PayPal"
        )}
      </Button>

      <div className="flex items-center justify-center gap-1.5 pt-1 text-[10px] text-[#6b6b6b]">
        <Shield className="h-3 w-3" />
        <span>Secure PayPal checkout. Delivery within 10 minutes.</span>
      </div>
    </form>
  );
}
