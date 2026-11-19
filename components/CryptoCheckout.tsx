"use client";

import { useId, useState } from "react";
import { Check, Copy, Loader2, Upload } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HoneypotField } from "@/components/HoneypotField";
import type { Product } from "@/lib/constants";
import { PROOF_MAX_BYTES, PROOF_TYPES, amountLabel, type CryptoWallet } from "@/lib/crypto";
import { trackGaEvent } from "@/lib/gtag";
import { HONEYPOT_FIELD } from "@/lib/honeypot";
import { cn } from "@/lib/utils";

interface CryptoCheckoutProps {
  product: Product;
  /** Wallets with their QR code, rendered as SVG on the server. */
  wallets: readonly (Omit<CryptoWallet, "explorer"> & { qrSvg: string })[];
}

/**
 * Direct crypto payment: the buyer picks a coin, pays the address shown, then
 * uploads a screenshot of the payment. The team gets it by email and sends the
 * file once the payment shows on the blockchain.
 */
export function CryptoCheckout({ product, wallets }: CryptoCheckoutProps) {
  const id = useId();
  const [walletId, setWalletId] = useState(wallets[0].id);
  const [copied, setCopied] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [txHash, setTxHash] = useState("");
  const [proof, setProof] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const wallet = wallets.find((w) => w.id === walletId) ?? wallets[0];

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(wallet.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy. Please select the address and copy it.");
    }
  };

  const chooseFile = (file: File | null) => {
    if (file && !PROOF_TYPES.includes(file.type)) {
      toast.error("Please upload a screenshot (PNG, JPG, WEBP, HEIC) or a PDF.");
      return;
    }
    if (file && file.size > PROOF_MAX_BYTES) {
      toast.error("That file is over 4 MB. Please upload a smaller screenshot.");
      return;
    }
    setProof(file);
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.dismiss();
    if (fullName.trim().length < 2) return void toast.error("Please enter your name.");
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) return void toast.error("Please enter a valid email address.");
    if (!proof) return void toast.error("Please attach the screenshot of your payment.");

    const form = new FormData(e.currentTarget);
    const body = new FormData();
    body.set("product", product.slug);
    body.set("wallet", wallet.id);
    body.set("fullName", fullName.trim());
    body.set("email", email.trim());
    body.set("whatsapp", whatsapp.trim());
    body.set("txHash", txHash.trim());
    body.set("proof", proof);
    body.set(HONEYPOT_FIELD, String(form.get(HONEYPOT_FIELD) ?? ""));

    setLoading(true);
    try {
      const response = await fetch("/api/crypto-payment", { method: "POST", body });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success) throw new Error(result.error || "Something went wrong.");
      setDone(true);
      if (!form.get(HONEYPOT_FIELD)) {
        trackGaEvent("add_payment_info", {
          currency: "USD",
          value: product.price,
          payment_type: `crypto_${wallet.id}`,
          items: [{ item_id: product.slug, item_name: product.name, price: product.price }],
        });
      }
    } catch (error) {
      toast.error(
        (error instanceof Error && error.message) ||
          "We couldn't send your proof. Please send the screenshot to us on WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className="rounded-3xl border border-brand/30 bg-brand/5 p-8 text-center" role="status">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand/15">
          <Check className="h-6 w-6 text-brand" strokeWidth={3} />
        </div>
        <h3 className="mt-4 font-display text-2xl text-ivory">Payment proof received</h3>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-sand">
          Thank you, {fullName.trim().split(/\s+/)[0]}. As soon as your payment shows on the blockchain we send the{" "}
          {product.name} to <strong className="text-ivory">{email.trim()}</strong>, usually within 10 minutes.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Step 1: pay */}
      <div className="rounded-3xl border border-line bg-surface p-6 md:p-8">
        <div className="text-xs font-semibold tracking-[0.16em] text-brand-pale">STEP 1 · SEND THE PAYMENT</div>
        <div className="mt-5 flex flex-wrap gap-2" role="radiogroup" aria-label="Coin and network">
          {wallets.map((w) => (
            <button
              key={w.id}
              type="button"
              role="radio"
              aria-checked={w.id === wallet.id}
              onClick={() => setWalletId(w.id)}
              className={cn(
                "rounded-full border px-3.5 py-2 text-sm transition-colors",
                w.id === wallet.id
                  ? "border-ivory bg-ivory font-semibold text-ink"
                  : "border-line-strong text-sand hover:border-ivory/40 hover:text-ivory"
              )}
            >
              {w.coin} <span className="opacity-70">· {w.network.replace(/ \(.*\)/, "")}</span>
            </button>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
          <div
            className="h-44 w-44 flex-shrink-0 rounded-2xl bg-white p-2 [&>svg]:block [&>svg]:h-full [&>svg]:w-full"
            aria-label={`QR code for the ${wallet.coin} address`}
            role="img"
            // Generated on the server from our own constant address.
            dangerouslySetInnerHTML={{ __html: wallet.qrSvg }}
          />
          <div className="min-w-0 flex-1">
            <div className="text-xs text-stone">Amount</div>
            <div className="mt-1 font-display text-2xl text-ivory">{amountLabel(wallet, product.price)}</div>
            <div className="mt-4 text-xs text-stone">Network</div>
            <div className="mt-1 text-[15px] font-semibold text-ivory">{wallet.network}</div>
          </div>
        </div>

        <div className="mt-6 text-xs text-stone">Address</div>
        <div className="mt-2 flex items-stretch gap-2">
          <code className="min-w-0 flex-1 break-all rounded-xl border border-line bg-ink-2 px-3.5 py-3 font-mono text-sm text-ivory">
            {wallet.address}
          </code>
          <Button type="button" variant="secondary" onClick={copyAddress} aria-label="Copy address" className="h-auto px-4">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
        <p className="mt-4 rounded-xl bg-amber-500/10 px-4 py-3 text-xs leading-relaxed text-amber-800 dark:text-amber-300">
          Send only <strong>{wallet.coin}</strong> on the <strong>{wallet.network}</strong> network to this address.
          Coins sent on another network can&apos;t be recovered.
          {!wallet.stablecoin && " Use your exchange's current rate for the USD amount."}
        </p>
      </div>

      {/* Step 2: proof */}
      <form onSubmit={submit} className="relative space-y-4 rounded-3xl border border-line bg-surface p-6 md:p-8" noValidate>
        <HoneypotField />
        <div className="text-xs font-semibold tracking-[0.16em] text-brand-pale">STEP 2 · SEND US THE SCREENSHOT</div>
        <p className="text-sm leading-relaxed text-sand">
          After paying, attach a screenshot of the completed payment. We check it on the blockchain and send your
          file within 10 minutes.
        </p>
        <div>
          <Label htmlFor={`${id}-name`} className="mb-2 block text-xs">Full name <span className="text-brand">*</span></Label>
          <Input id={`${id}-name`} value={fullName} onChange={(e) => setFullName(e.target.value)} autoComplete="name" disabled={loading} />
        </div>
        <div>
          <Label htmlFor={`${id}-email`} className="mb-2 block text-xs">Email for the file <span className="text-brand">*</span></Label>
          <Input id={`${id}-email`} type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" placeholder="you@company.com" disabled={loading} />
        </div>
        <div>
          <Label htmlFor={`${id}-wa`} className="mb-2 block text-xs">WhatsApp number <span className="font-normal text-stone">(optional)</span></Label>
          <Input id={`${id}-wa`} type="tel" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} autoComplete="tel" placeholder="+971 50 123 4567" disabled={loading} />
        </div>
        <div>
          <Label htmlFor={`${id}-tx`} className="mb-2 block text-xs">Transaction ID / hash <span className="font-normal text-stone">(optional, makes checking faster)</span></Label>
          <Input id={`${id}-tx`} value={txHash} onChange={(e) => setTxHash(e.target.value)} disabled={loading} className="font-mono text-sm" />
        </div>
        <div>
          <Label htmlFor={`${id}-proof`} className="mb-2 block text-xs">Payment screenshot <span className="text-brand">*</span></Label>
          <label
            htmlFor={`${id}-proof`}
            className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-line-strong px-4 py-4 text-sm text-sand hover:border-brand/50"
          >
            <Upload className="h-5 w-5 flex-shrink-0 text-brand" />
            <span className="min-w-0 truncate">{proof ? proof.name : "Choose a screenshot or PDF (max 4 MB)"}</span>
          </label>
          <input
            id={`${id}-proof`}
            type="file"
            accept={PROOF_TYPES.join(",")}
            className="sr-only"
            onChange={(e) => chooseFile(e.target.files?.[0] ?? null)}
            disabled={loading}
          />
        </div>
        <Button type="submit" size="lg" className="w-full" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            "I've paid – send my file"
          )}
        </Button>
      </form>
    </div>
  );
}
