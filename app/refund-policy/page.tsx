import { Metadata } from "next";

export const metadata: Metadata = { 
  title: "Refund Policy | Dubai Property Data",
  description: "7-day refund policy for the Dubai Property Owner Database and Dubai Buyer Leads.",
};

export default function RefundPolicy() {
  return (
    <div className="container py-12 max-w-4xl prose prose-slate">
      <h1>Refund Policy</h1>

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
  );
}
