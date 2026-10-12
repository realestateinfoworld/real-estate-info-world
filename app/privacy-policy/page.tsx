import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = { 
  title: "Privacy Policy",
  description: "Privacy policy for Real Estate Info World property data and buyer leads service.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <div className="container py-16 md:py-20">
        <div className="legal max-w-3xl">
      <p className="text-sm text-stone">Last updated: June 2026</p>

      <h2>Information We Collect</h2>
      <p>We collect information you provide when purchasing products or contacting us, including name, email, and company details. Payment information is processed securely by PayPal and never stored by us.</p>

      <h2>How We Use Information</h2>
      <p>We use your information solely to process and deliver your order, provide customer support, and communicate important updates related to your purchase.</p>

      <h2>Data We Sell</h2>
      <p>The databases we sell contain verified real estate information. We do not sell or share personal information of our customers (purchasers).</p>

      <p>For questions, please email <a href="mailto:info@realestate-info.world">info@realestate-info.world</a>.</p>
        </div>
      </div>
    </>
  );
}
