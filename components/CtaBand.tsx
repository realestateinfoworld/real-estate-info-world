import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { CONTACT } from "@/lib/constants";

export function CtaBand() {
  return (
    <section className="container pb-24 md:pb-32">
      <div className="theme-dark brand-frame relative overflow-hidden rounded-[2rem] px-6 py-16 text-center md:px-16 md:py-24">
        <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[640px] -translate-x-1/2 rounded-full bg-brand-deep/25 blur-[100px]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl">
          <div className="eyebrow justify-center">Ready when you are</div>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] text-ivory md:text-6xl">
            Your next listing is <em className="text-brand-gradient">already in the file.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-sand">
            Pick a dataset and start reaching verified owners and serious buyers within the hour.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-sand">
            <span className="flex items-center gap-2"><Zap className="h-4 w-4 text-brand" /> Delivered in 10 minutes</span>
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand" /> 7-day quality guarantee</span>
          </div>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/products" className={buttonVariants({ size: "lg" })}>
              Browse datasets <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`https://wa.me/${CONTACT.whatsappRaw}?text=${encodeURIComponent(
                "Hello, I have a question about your real estate data."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
