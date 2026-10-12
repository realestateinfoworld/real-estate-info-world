import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CONTACT } from "@/lib/constants";

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
          <p className="text-sm text-stone">Last updated: October 2026</p>

          <h2>Information We Collect</h2>
          <p>
            We collect the information you give us when you request a dataset or contact us: your name, email address
            and, if you provide them, your company details and message. When you continue to WhatsApp or Telegram to
            complete a purchase, we also receive the phone number or account you message us from.
          </p>
          <p>
            Payments are completed through a secure payment link we send you. Your card and banking details are handled
            by the payment provider and are never seen or stored by us.
          </p>

          <h2>How We Use Information</h2>
          <p>
            We use your information solely to process and deliver your order, send your payment link, provide customer
            support, and communicate important updates related to your purchase.
          </p>

          <h2>Cookies &amp; Analytics</h2>
          <p>
            Our website uses Google Analytics and the Meta Pixel to understand how visitors use the site and to measure
            our advertising. These tools may set cookies in your browser. You can block or delete cookies at any time in
            your browser settings.
          </p>

          <h2>Service Providers</h2>
          <p>
            We share your information only with the providers that help us run the service — for example email delivery,
            messaging, payment processing and analytics — and only as needed for them to do so.
          </p>

          <h2>Data We Sell</h2>
          <p>
            The databases we sell contain verified real estate information. We do not sell or share personal information
            of our customers (purchasers).
          </p>

          <h2>Contact</h2>
          <p>
            For questions about this policy or your information, please email{" "}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
          </p>
        </div>
      </div>
    </>
  );
}
