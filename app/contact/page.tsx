import type { Metadata } from "next";
import { Mail, MessageCircle, Phone, Send } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { CONTACT, formatMarketList } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Real Estate Info World | WhatsApp, Phone & Email",
  description:
    "Questions about the Dubai owner database, Miami or California buyer leads, or a custom dataset? Contact us by WhatsApp, Telegram, phone or email.",
  path: "/contact",
});

export default function ContactPage() {
  const channels = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: CONTACT.whatsapp,
      href: `https://wa.me/${CONTACT.whatsappRaw}?text=${encodeURIComponent(
        "Hello, I'm interested in your real estate databases."
      )}`,
      external: true,
    },
    { icon: Send, label: "Telegram", value: "@realestateinfoworld", href: CONTACT.telegram, external: true },
    { icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phoneRaw}`, external: false },
    { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}`, external: false },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk data."
        description={`Questions about a dataset, a custom request, or support for brokers and agencies in ${formatMarketList()}? We usually reply within an hour on business days.`}
      />

      <section className="container py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center gap-5 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-brand/40"
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors group-hover:bg-brand-via group-hover:text-on-brand">
                  <c.icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs tracking-[0.18em] text-stone">{c.label.toUpperCase()}</span>
                  <span className="block truncate text-ivory">{c.value}</span>
                </span>
              </a>
            ))}
          </div>

          <div className="rounded-3xl border border-line bg-surface p-7 md:p-10">
            <h2 className="font-display text-3xl text-ivory">Send us a message</h2>
            <p className="mt-2 mb-8 text-sm text-sand">We&apos;ll get back to you by email.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
