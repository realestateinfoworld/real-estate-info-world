import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Thank You | Your Real Estate Data Order",
  description:
    "Thank you for your purchase. Your CRM-ready Excel data will be delivered shortly via secure link.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYouPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="gold-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container relative pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-b from-gold-pale via-gold to-gold-deep shadow-[0_20px_60px_-15px_rgb(201_171_114_/_0.7)]">
            <Check className="h-9 w-9 text-ink" strokeWidth={2.5} />
          </div>

          <h1 className="font-display text-5xl leading-tight text-ivory md:text-6xl">
            Thank you for your purchase.
          </h1>
          <p className="mt-4 text-lg text-sand">Our team will contact you shortly.</p>

          <div className="glass gold-frame mt-10 rounded-3xl p-7 text-left">
            <div className="text-xs tracking-[0.18em] text-stone">DELIVERY TIME</div>
            <div className="mt-2 font-display text-3xl text-ivory">Within 10 Minutes — 24 Hours</div>
            <p className="mt-3 text-sm leading-relaxed text-sand">
              Your CRM-ready Excel file(s) will be delivered via secure download link to the email address you
              provided. You will also receive a WhatsApp confirmation once the files are ready.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/" className={buttonVariants({ size: "lg" })}>
              Return to homepage
            </Link>
            <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
              Contact support
            </Link>
          </div>

          <p className="mt-10 text-xs text-stone">
            Questions? Email{" "}
            <a href={`mailto:${CONTACT.email}`} className="text-gold underline underline-offset-4">
              {CONTACT.email}
            </a>{" "}
            or WhatsApp {CONTACT.whatsapp}
          </p>
        </div>
      </div>
    </section>
  );
}
