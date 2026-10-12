import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = { 
  title: "Refund Policy",
  description: "7-day refund policy for the property owner databases and buyer leads.",
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicy() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Refund Policy" />
      <div className="container py-16 md:py-20">
        <div className="legal max-w-3xl">

      <h2>7-Day Guarantee</h2>
      <p>We stand behind our data. If you are not satisfied with the quality of your purchased database, contact us within 7 days of delivery for a full refund.</p>

      <h2>Eligible Cases</h2>
      <ul>
        <li>Significant number of invalid phone numbers (we will review claims)</li>
        <li>Corrupted or unusable file format</li>
        <li>Major missing data fields that prevent normal business use</li>
      </ul>

      <h2>How to Request</h2>
      <p>Email info@realestate-info.world with your order reference and specific issue. Approved refunds are processed within 3–5 business days to the original payment method.</p>
        </div>
      </div>
    </>
  );
}
