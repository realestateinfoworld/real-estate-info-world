"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { contactSchema } from "@/lib/contact-schema";
import { trackMetaEvent } from "@/lib/metaPixel";
import { trackGaEvent } from "@/lib/gtag";

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const validation = contactSchema.safeParse(
      Object.fromEntries(new FormData(form))
    );

    if (!validation.success) {
      const firstError = Object.values(validation.error.flatten().fieldErrors)[0]?.[0];
      toast.error(firstError || "Please fill out all required fields correctly.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to send. Please try again.");
      }

      toast.success("Thank you. We'll reply within a few hours.");

      // Track Contact event
      trackMetaEvent("Contact");
      trackGaEvent("generate_lead", { lead_source: "contact_form" });
      form.reset();
    } catch (error) {
      console.error("Contact submission error:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please contact us on WhatsApp or by email."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" autoComplete="name" required disabled={loading} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
          <Input id="email" type="email" name="email" autoComplete="email" required disabled={loading} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="company">Company / agency <span className="text-stone">(optional)</span></Label>
        <Input id="company" name="company" autoComplete="organization" disabled={loading} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">How can we help?</Label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          disabled={loading}
          className="input min-h-[140px] resize-y"
        />
      </div>
      <Button type="submit" size="lg" disabled={loading} className="w-full">
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  );
}
