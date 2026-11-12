"use client";

import { useId, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowRight, Check, Loader2, Lock } from "lucide-react";
import { toast } from "sonner";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HoneypotField } from "@/components/HoneypotField";
import { PRODUCTS, type Product } from "@/lib/constants";
import { trackGaEvent } from "@/lib/gtag";
import { HONEYPOT_FIELD } from "@/lib/honeypot";
import { trackMetaEvent } from "@/lib/metaPixel";
import { sampleSchema } from "@/lib/sample-schema";
import { sampleWhatsappUrl } from "@/lib/whatsapp";

// The query string doesn't change while the form is mounted.
const subscribeToNothing = () => () => {};

interface SampleRequestFormProps {
  /** Fix the dataset (product pages). Omit to let the visitor choose. */
  product?: Product;
  /** Where the form sits, for analytics: "hero", "product", "free-sample"… */
  source: string;
}

/**
 * Free-sample request: the lowest-commitment step on the site. The visitor
 * leaves a WhatsApp number; the team gets an email with a link that opens a
 * chat with them, and sends the sample there by hand.
 */
export function SampleRequestForm({ product: fixedProduct, source }: SampleRequestFormProps) {
  const id = useId();
  const [chosen, setChosen] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [loading, setLoading] = useState(false);
  const [sentTo, setSentTo] = useState<string | null>(null);

  // Links such as /free-sample?dataset=miami-buyer-leads preselect a dataset.
  // Read on the client only, so the page itself stays static.
  const linked = useSyncExternalStore(
    subscribeToNothing,
    () => new URLSearchParams(window.location.search).get("dataset"),
    () => null
  );

  const product =
    fixedProduct ??
    PRODUCTS.find((p) => p.slug === (chosen ?? linked)) ??
    PRODUCTS[0];
  const slug = product.slug;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Clear an error left over from an earlier attempt.
    toast.dismiss();
    const honeypot = String(new FormData(e.currentTarget).get(HONEYPOT_FIELD) ?? "");

    const validation = sampleSchema.safeParse({ whatsapp, email, product: slug });
    if (!validation.success) {
      const firstError = Object.values(validation.error.flatten().fieldErrors)[0]?.[0];
      toast.error(firstError || "Please check your details and try again.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/sample", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...validation.data, [HONEYPOT_FIELD]: honeypot }),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to send. Please try again.");
      }

      setSentTo(validation.data.whatsapp);

      // Skipped for bots that filled the honeypot, so they don't inflate conversions.
      if (!honeypot) {
        trackGaEvent("generate_lead", {
          lead_source: "free_sample",
          form_location: source,
          item_id: product.slug,
          item_name: product.name,
        });
        trackMetaEvent("Lead", { content_name: product.name, content_category: "Free sample" });
      }
    } catch (error) {
      console.error("Sample request error:", error);
      toast.error(
        (error instanceof Error && error.message) ||
          "Something went wrong. Please ask for your sample on WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  };

  if (sentTo) {
    return (
      <div className="text-center" role="status">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand/15">
          <Check className="h-6 w-6 text-brand" strokeWidth={3} />
        </div>
        <div className="mt-4 font-display text-xl text-ivory">Sample requested</div>
        <p className="mt-2 text-sm leading-relaxed text-sand">
          We&apos;ll send your {product.shortName} sample on WhatsApp to{" "}
          <strong className="text-ivory">{sentTo}</strong>, usually within a few hours.
        </p>
        <a
          href={sampleWhatsappUrl(product)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackGaEvent("chat_click", { channel: "whatsapp", page_path: `sample:${source}` })}
          className={buttonVariants({ className: "mt-5 w-full" })}
        >
          Want it now? Message us on WhatsApp <ArrowRight className="h-4 w-4" />
        </a>
        <Link
          href={`/products/${product.slug}`}
          className="mt-4 inline-block text-sm font-semibold text-brand hover:text-brand-pale"
        >
          See the full dataset · ${product.price.toLocaleString()} →
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative space-y-3.5" noValidate>
      <HoneypotField />

      {!fixedProduct && (
        <div>
          <Label htmlFor={`${id}-dataset`} className="mb-2 block text-xs">
            Dataset
          </Label>
          <select
            id={`${id}-dataset`}
            value={slug}
            onChange={(e) => setChosen(e.target.value)}
            disabled={loading}
            className="input h-11 py-0 text-sm"
          >
            {PRODUCTS.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <Label htmlFor={`${id}-whatsapp`} className="mb-2 block text-xs">
          WhatsApp number, with country code <span className="text-brand">*</span>
        </Label>
        <Input
          id={`${id}-whatsapp`}
          type="tel"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          placeholder="+971 50 123 4567"
          required
          autoComplete="tel"
          disabled={loading}
        />
      </div>

      <div>
        <Label htmlFor={`${id}-email`} className="mb-2 block text-xs">
          Email address <span className="font-normal text-stone">(optional)</span>
        </Label>
        <Input
          id={`${id}-email`}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          autoComplete="email"
          disabled={loading}
        />
      </div>

      <Button type="submit" disabled={loading} className="w-full" size="lg">
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send the sample to my WhatsApp <ArrowRight className="h-4 w-4" />
          </>
        )}
      </Button>

      <p className="flex items-center justify-center gap-1.5 pt-1 text-center text-[11px] text-stone">
        <Lock className="h-3 w-3 flex-shrink-0" />
        No payment, no card. Sent on WhatsApp, usually within a few hours.
      </p>
    </form>
  );
}
