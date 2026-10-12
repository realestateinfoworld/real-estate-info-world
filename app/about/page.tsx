import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { HOMEPAGE_STATS, formatMarketList } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | Real Estate Data for Brokers & Agencies",
  description:
    "Real Estate Info World provides verified property owner databases and high-intent buyer leads for real estate brokers, property consultants and agencies.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title={
          <>
            Built by people who <em className="text-gold-gradient">know the market.</em>
          </>
        }
        description={`Verified property owner data and high-intent buyer leads for real estate professionals in ${formatMarketList()}.`}
      />

      <section className="container py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 text-[17px] leading-relaxed text-sand">
            <p>
              We built Real Estate Info World because brokers, property consultants and agencies were wasting too much
              time chasing bad data or cold traffic that never converted.
            </p>
            <p>
              Our team has spent years in real estate. We know what actually moves the needle: direct access to verified
              property owners for off-market deals, and serious, high-intent buyers ready to transact.
            </p>
            <p>
              Every owner database and buyer lead file we deliver is cleaned, validated against market sources, and
              formatted for professional use. No fluff. No scraped lists. Just actionable real estate data you can use
              immediately.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px self-start overflow-hidden rounded-3xl border border-line bg-line">
            {HOMEPAGE_STATS.map((stat) => (
              <div key={stat.label} className="bg-surface p-6">
                <div className="stat-number font-display text-4xl text-ivory">{stat.number}</div>
                <div className="mt-1 text-xs text-stone">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-line bg-surface p-8">
            <div className="eyebrow">Our standard</div>
            <p className="mt-5 leading-relaxed text-sand">
              We only release data we would use ourselves as brokers. That means rigorous verification, consistent
              formatting for CRM use, and honest communication about accuracy for owner outreach and buyer conversion.
            </p>
          </div>
          <div className="rounded-3xl border border-line bg-surface p-8">
            <div className="eyebrow">Our focus</div>
            <p className="mt-5 leading-relaxed text-sand">
              Verified property owners and high-intent buyers only, in the markets we know best. We don&apos;t dilute
              our datasets with low-quality or irrelevant records.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
