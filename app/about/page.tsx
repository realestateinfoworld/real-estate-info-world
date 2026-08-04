import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Dubai Real Estate Data for Brokers & Agencies",
  description: "Real Estate Info World provides verified Dubai Property Owner Database and Dubai Buyer Leads exclusively for Dubai real estate brokers, property consultants, and agencies.",
};

export default function AboutPage() {
  return (
    <div className="container py-12 max-w-4xl">
      <h1 className="text-4xl font-semibold tracking-tight">About Real Estate Info World</h1>
      
      <div className="prose prose-slate mt-6 text-[#5a5a5a]">
        <p>We built Real Estate Info World because Dubai real estate brokers, property consultants, and agencies were wasting too much time chasing bad data or cold traffic that never converted.</p>
        
        <p>Our team has spent years in Dubai real estate. We know what actually moves the needle for Dubai brokers: direct access to verified property owners for off-market deals and serious, high-intent buyers ready to transact.</p>
        
        <p>Every Dubai Property Owner Database and buyer lead file we deliver is cleaned, validated against Dubai sources, and formatted specifically for professional use. No fluff. No scraped lists. Just actionable Dubai real estate leads and property marketing data you can use immediately.</p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-6 text-sm">
        <div className="p-6 border rounded-lg">
          <div className="font-semibold mb-2">Our Standard</div>
          <p className="text-[#5a5a5a]">We only release data we would use ourselves as Dubai brokers. That means rigorous verification, consistent formatting for CRM use, and honest communication about accuracy for owner outreach and buyer conversion.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <div className="font-semibold mb-2">Our Focus</div>
          <p className="text-[#5a5a5a]">Dubai only. Verified property owners and high-intent buyers only. We don’t dilute our Dubai Property Owner Database or buyer leads with low-quality or irrelevant records.</p>
        </div>
      </div>
    </div>
  );
}
