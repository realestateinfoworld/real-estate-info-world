import { Metadata } from "next";

export const metadata: Metadata = { 
  title: "Terms of Service | Dubai Real Estate Data",
  description: "Terms for purchasing and using our Dubai Property Owner Database and Dubai Buyer Leads. For Dubai real estate professionals.",
};

export default function Terms() {
  return (
    <div className="container py-12 max-w-4xl prose prose-slate">
      <h1>Terms of Service</h1>

      <h2>1. Products</h2>
      <p>All databases are digital products delivered electronically (Excel format) within 24 hours of confirmed payment.</p>

      <h2>2. License</h2>
      <p>Upon purchase you receive a single-user license for legitimate real estate business use. You may not resell, redistribute, or share the raw data.</p>

      <h2>3. Accuracy</h2>
      <p>We maintain high accuracy standards but cannot guarantee 100% accuracy at all times due to natural changes in contact data. We offer a 7-day refund window for documented quality issues.</p>

      <h2>4. Payments</h2>
      <p>All transactions are processed securely through PayPal.</p>

      <p className="text-sm">Contact: info@realestate-info.world</p>
    </div>
  );
}
