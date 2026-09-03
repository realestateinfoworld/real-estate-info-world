"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2, Shield } from "lucide-react";
import { leadSchema, type LeadFormData } from "@/lib/lead-schema";
import { trackMetaEvent } from "@/lib/metaPixel";
import { MARKETS, type Product } from "@/lib/constants";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.988 2.896 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.945c0 2.096.549 4.142 1.595 5.945L0 24l6.335-1.652a11.93 11.93 0 005.71 1.454h.006c6.585 0 11.946-5.36 11.949-11.945a11.87 11.87 0 00-3.480-8.408" />
    </svg>
  );
}

interface LeadCaptureFormProps {
  product: Product;
}

export function LeadCaptureForm({ product }: LeadCaptureFormProps) {
  // Datasets without a hosted button are sold by enquiry: the lead is still
  // captured, then the buyer is handed to WhatsApp for the payment link.
  const paypalUrl = product.paypalButtonId
    ? `https://www.paypal.com/ncp/payment/${product.paypalButtonId}`
    : null;
  const buildWhatsappUrl = (name?: string) => {
    const intro = name ? `Hello, this is ${name}.` : "Hello,";
    return `https://wa.me/${MARKETS[product.market].whatsappRaw}?text=${encodeURIComponent(
      `${intro} I would like to purchase the ${product.name} ($${product.price.toLocaleString()}). Please send me the payment link.`
    )}`;
  };

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

      if (paypalUrl) {
        toast.success("Thank you! Redirecting to secure PayPal checkout...");

        // Small delay so user sees the success state / toast
        setTimeout(() => {
          window.location.href = paypalUrl;
        }, 1350);
      } else {
        toast.success("Thank you! Opening WhatsApp...");

        setTimeout(() => {
          window.location.href = buildWhatsappUrl(formData.fullName);
        }, 1350);
      }
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
        {paypalUrl ? (
          <>
            <div className="mt-1 text-xs text-[#6b6b6b]">
              Redirecting to PayPal secure checkout...
            </div>
            <div className="mt-3">
              <a href={paypalUrl} className="text-xs text-[#947f57] underline hover:no-underline">
                Click here if you are not redirected automatically
              </a>
            </div>
          </>
        ) : (
          <>
            <div className="mt-1 text-xs text-[#6b6b6b]">
              Opening WhatsApp so we can send your payment link...
            </div>
            <div className="mt-3">
              <a
                href={buildWhatsappUrl(fullName.trim())}
                className="text-xs text-[#947f57] underline hover:no-underline"
              >
                Click here if WhatsApp does not open automatically
              </a>
            </div>
          </>
        )}
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
        className={
          paypalUrl
            ? "w-full"
            : "w-full bg-[#25D366] text-white shadow hover:bg-[#1da851]"
        }
        size="lg"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : paypalUrl ? (
          "Submit & Continue to PayPal"
        ) : (
          <>
            <WhatsAppIcon className="h-4 w-4" />
            Continue on WhatsApp
          </>
        )}
      </Button>

      <div className="flex items-center justify-center gap-1.5 pt-1 text-[10px] text-[#6b6b6b]">
        <Shield className="h-3 w-3" />
        <span>
          {paypalUrl
            ? "Secure PayPal checkout. Delivery within 10 minutes."
            : "We send your payment link on WhatsApp. Delivery within 10 minutes."}
        </span>
      </div>
    </form>
  );
}
