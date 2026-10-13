import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CONTACT } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service | Real Estate Info World",
  description: "Terms for purchasing and using our property owner databases and buyer leads. For real estate professionals.",
  path: "/terms",
});

export default function Terms() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Service" />
      <div className="container py-16 md:py-20">
        <div className="legal max-w-3xl">
          <p className="text-sm text-stone">Last updated: October 2026</p>

          <h2>1. Products</h2>
          <p>
            All databases and lead lists are digital products delivered electronically as Excel (.xlsx) files via a
            secure download link. Delivery is typically within 10 minutes of confirmed payment, and no later than 24
            hours.
          </p>

          <h2>2. Ordering &amp; Payment</h2>
          <p>
            To order, submit your name and email on the product page. We then send you a secure payment link on
            WhatsApp. Prices are shown in US dollars and are one-time payments. Your order is confirmed once payment is
            received.
          </p>

          <h2>3. License</h2>
          <p>
            Upon purchase you receive a single-user license for legitimate real estate business use. You may not resell,
            redistribute, or share the raw data.
          </p>

          <h2>4. Accuracy</h2>
          <p>
            We maintain high accuracy standards but cannot guarantee 100% accuracy at all times due to natural changes in
            contact data. We offer a 7-day refund window for documented quality issues — see our{" "}
            <a href="/refund-policy">Refund Policy</a>.
          </p>

          <h2>5. Responsible Use</h2>
          <p>
            You are responsible for using the data in line with the marketing, privacy and telecommunications laws that
            apply in your market, including any rules on unsolicited calls and messages.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms? Email <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
          </p>
        </div>
      </div>
    </>
  );
}
