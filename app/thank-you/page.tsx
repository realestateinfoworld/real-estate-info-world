import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You | Your Dubai Real Estate Data Order",
  description: "Thank you for purchasing the Dubai Property Owner Database or Dubai Buyer Leads. Your CRM-ready Excel data will be delivered shortly via secure link.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYouPage() {
  return (
    <div className="container py-16 md:py-20">
      <div className="mx-auto max-w-xl text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#e8e0d3]">
          <CheckCircle className="h-9 w-9 text-[#947f57]" />
        </div>

        <h1 className="text-4xl font-semibold tracking-tight">Thank you for your purchase.</h1>

        <p className="mt-4 text-lg text-[#5a5a5a]">
          Our team will contact you shortly.
        </p>

        <div className="mt-8 rounded-lg border border-[#c8c8c8] bg-[#f5f5f5] p-6 text-left">
          <div className="text-sm font-medium text-[#6b6b6b] tracking-widest">DELIVERY TIME</div>
          <div className="mt-2 text-2xl font-semibold tracking-tight">
            Within 10 Minutes — 24 Hours
          </div>
          <p className="mt-3 text-sm text-[#5a5a5a]">
            Your CRM-ready Excel file(s) will be delivered via secure download link to the email address you provided.
            You will also receive a WhatsApp confirmation once the files are ready.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/">
            <Button size="lg">Return to Homepage</Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline">Contact Support</Button>
          </Link>
        </div>

        <p className="mt-8 text-xs text-[#6b6b6b]">
          Questions? Email <a href="mailto:info@realestate-info.world" className="underline">info@realestate-info.world</a> or WhatsApp +44 75 46 084350
        </p>
      </div>
    </div>
  );
}
