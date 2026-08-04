"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CONTACT } from "@/lib/constants";
import { trackMetaEvent } from "@/lib/metaPixel";
import { toast } from "sonner";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      toast.success("Thank you. We'll reply within a few hours.");

    // Track Contact event
    trackMetaEvent('Contact');
      setLoading(false);
      (e.target as HTMLFormElement).reset();
    }, 650);
  };

  return (
    <div className="container py-12 max-w-4xl">
      <h1 className="text-4xl font-semibold tracking-tight">Contact Us</h1>
      <p className="mt-2 text-[#5a5a5a]">Questions about our Dubai Property Owner Database, Dubai Buyer Leads, custom requests, or support for Dubai brokers and agencies? Send us a message.</p>

      <div className="mt-8 grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2 space-y-6 text-sm">
          <div>
            <div className="text-[#6b6b6b] text-xs tracking-widest">PHONE / WHATSAPP</div>
            <a href={`tel:${CONTACT.phoneRaw}`} className="font-medium">{CONTACT.phone}</a>
            <a
              href={`https://wa.me/${CONTACT.whatsappRaw}?text=Hello%2C%20I'm%20interested%20in%20your%20Dubai%20real%20estate%20databases.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#128C7E]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.67-.198-1.02-.198-.35 0-.746.074-1.12.372-.373.297-1.42 1.385-1.42 3.374 0 1.99 1.455 3.91 1.654 4.18.2.268 2.86 4.36 6.92 6.12 1.02.45 1.82.72 2.44.92.74.25 1.41.21 1.94.13.59-.1 1.82-.74 2.08-1.45.26-.71.26-1.32.18-1.45-.07-.13-.27-.21-.57-.36zM12 2C6.48 2 2 6.48 2 12c0 1.99.58 3.84 1.58 5.4L2 22l4.6-1.58A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
              Open WhatsApp
            </a>
            <a
              href="https://t.me/realestateinfoworld"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 rounded-md bg-[#229ED9] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#1a7bb5]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-1.03-.68-1.61-1.1-2.61-1.79-1.27-.88-1.78-1.38-2.88-2.24-1.29-1-1.05-1.5-.23-2.37.4-.43 2.32-2.13 3.9-3.55.4-.36 1.18-1.07 1.96-1.05.5.01 1.04.32 1.3.58.25.25.37.58.35.92z" />
              </svg>
              Telegram
            </a>
          </div>
          <div>
            <div className="text-[#6b6b6b] text-xs tracking-widest">EMAIL</div>
            <a href={`mailto:${CONTACT.email}`} className="font-medium">{CONTACT.email}</a>
          </div>
          <div className="text-[#6b6b6b] text-xs pt-2">We usually respond within 1 hours during business days.</div>
        </div>

        <form onSubmit={handleSubmit} className="md:col-span-3 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" required />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" name="email" required />
            </div>
          </div>
          <div>
            <Label htmlFor="company">Company / Agency</Label>
            <Input id="company" name="company" />
          </div>
          <div>
            <Label htmlFor="message">How can we help?</Label>
            <textarea 
              id="message" 
              name="message" 
              required
              rows={5}
              className="input resize-y min-h-[120px]" 
            />
          </div>
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </div>
  );
}
