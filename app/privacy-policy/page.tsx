import { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicy() {
  return (
    <div className="container py-12 max-w-4xl prose prose-slate">
      <h1>Privacy Policy</h1>
      <p className="text-sm text-[#6b6b6b]">Last updated: June 2026</p>

      <h2>Information We Collect</h2>
      <p>We collect information you provide when purchasing products or contacting us, including name, email, and company details. Payment information is processed securely by PayPal and never stored by us.</p>

      <h2>How We Use Information</h2>
      <p>We use your information solely to process and deliver your order, provide customer support, and communicate important updates related to your purchase.</p>

      <h2>Data We Sell</h2>
      <p>The databases we sell contain verified real estate information. We do not sell or share personal information of our customers (purchasers).</p>

      <p>For questions, please email <a href="mailto:info@realestate-info.world">info@realestate-info.world</a>.</p>
    </div>
  );
}
