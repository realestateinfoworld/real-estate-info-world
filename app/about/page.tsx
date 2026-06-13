import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <div className="container py-12 max-w-4xl">
      <h1 className="text-4xl font-semibold tracking-tight">About Real Estate Info World</h1>
      
      <div className="prose prose-slate mt-6 text-[#5a5a5a]">
        <p>We built Real Estate Info World because brokers and agencies were wasting too much time chasing bad data or cold traffic that never converted.</p>
        
        <p>Our team has spent years in Dubai real estate. We know what actually moves the needle: direct access to verified owners and serious, high-intent buyers.</p>
        
        <p>Every database we deliver is cleaned, validated, and formatted specifically for professional use. No fluff. No scraped lists. Just data you can act on immediately.</p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-6 text-sm">
        <div className="p-6 border rounded-lg">
          <div className="font-semibold mb-2">Our Standard</div>
          <p className="text-[#5a5a5a]">We only release data we would use ourselves. That means rigorous verification, consistent formatting, and honest communication about accuracy.</p>
        </div>
        <div className="p-6 border rounded-lg">
          <div className="font-semibold mb-2">Our Focus</div>
          <p className="text-[#5a5a5a]">Dubai only. Property owners and serious buyers only. We don’t dilute our datasets with low-quality or irrelevant records.</p>
        </div>
      </div>
    </div>
  );
}
