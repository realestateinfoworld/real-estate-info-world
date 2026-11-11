"use client";

import { useState } from "react";
import { CalculatorShell, NumberField, ResultRow, formatMoney, parseNumber } from "@/components/tools/fields";
import { PRODUCTS, getRecordCount } from "@/lib/constants";
import { cn } from "@/lib/utils";

// Nobody phones a million owners: presets assume a first batch of this size.
const FIRST_BATCH = 1000;

/** What a purchased lead list has to deliver to pay for itself. */
export function LeadRoiCalculator() {
  const [preset, setPreset] = useState<string | null>(null);
  const [cost, setCost] = useState("1,500");
  const [contacts, setContacts] = useState("1,000");
  const [reach, setReach] = useState("20");
  const [convert, setConvert] = useState("1");
  const [commission, setCommission] = useState("10,000");

  const applyPreset = (slug: string) => {
    const product = PRODUCTS.find((p) => p.slug === slug);
    if (!product) return;
    setPreset(slug);
    setCost(product.price.toLocaleString("en-US"));
    setContacts(Math.min(getRecordCount(product), FIRST_BATCH).toLocaleString("en-US"));
  };

  const costN = parseNumber(cost);
  const contactsN = parseNumber(contacts);
  const conversations = contactsN * (Math.min(parseNumber(reach), 100) / 100);
  const deals = conversations * (Math.min(parseNumber(convert), 100) / 100);
  const commissionN = parseNumber(commission);
  const earned = deals * commissionN;
  const net = earned - costN;
  const breakEven = commissionN > 0 ? Math.ceil(costN / commissionN) : 0;

  return (
    <CalculatorShell
      inputs={
        <>
          <div>
            <div className="mb-2 text-xs font-medium text-sand">Start from one of our datasets (optional)</div>
            <div className="flex flex-wrap gap-2">
              {PRODUCTS.map((product) => (
                <button
                  key={product.slug}
                  type="button"
                  aria-pressed={preset === product.slug}
                  onClick={() => applyPreset(product.slug)}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-xs transition-colors",
                    preset === product.slug
                      ? "border-ivory bg-ivory font-semibold text-ink"
                      : "border-line-strong text-sand hover:border-ivory/40 hover:text-ivory"
                  )}
                >
                  {product.shortName}
                </button>
              ))}
            </div>
          </div>
          <NumberField label="Cost of the lead list" prefix="$" value={cost} onChange={setCost} />
          <NumberField
            label="Leads you will contact"
            value={contacts}
            onChange={setContacts}
            hint="How many of the leads your team will actually call or message."
          />
          <NumberField
            label="Leads you reach"
            suffix="%"
            value={reach}
            onChange={setReach}
            hint="Share of contacted leads who pick up or reply."
          />
          <NumberField
            label="Conversations that become deals"
            suffix="%"
            value={convert}
            onChange={setConvert}
          />
          <NumberField label="Average commission per deal" prefix="$" value={commission} onChange={setCommission} />
        </>
      }
      results={
        <>
          <ResultRow label="Conversations" value={Math.round(conversations).toLocaleString("en-US")} />
          <ResultRow label="Deals" value={deals.toFixed(1)} />
          <ResultRow
            label="Cost per conversation"
            value={conversations > 0 ? formatMoney(costN / conversations, "$") : "–"}
          />
          <ResultRow label="Cost per deal" value={deals > 0 ? formatMoney(costN / deals, "$") : "–"} />
          <ResultRow label="Commission earned" value={formatMoney(earned, "$")} />
          <ResultRow label="Return after the list cost" value={formatMoney(net, "$")} strong />
          <ResultRow
            label="Deals needed to break even"
            value={breakEven > 0 ? breakEven.toLocaleString("en-US") : "–"}
          />
        </>
      }
      note="This is arithmetic on your own assumptions, not a forecast. Reach and conversion rates vary widely by market, script and follow-up, so replace the example rates with numbers from your own pipeline."
    />
  );
}
