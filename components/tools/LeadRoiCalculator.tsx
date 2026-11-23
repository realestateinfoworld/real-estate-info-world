"use client";

import { useState } from "react";
import { CalculatorShell, NumberField, ResultRow, formatMoney, parseNumber } from "@/components/tools/fields";
import { PRODUCTS, getRecordCount, type MarketKey, type Product } from "@/lib/constants";
import { cn } from "@/lib/utils";

// Nobody phones a million owners: presets assume a first batch of this size.
const FIRST_BATCH = 1000;

/**
 * Agents earn commission in their own currency, while the datasets are priced
 * in US dollars. The calculator works in one currency at a time and converts
 * the list price into it.
 */
type CurrencyKey = "USD" | "AED" | "GBP";

const CURRENCIES: Record<
  CurrencyKey,
  { symbol: string; label: string; exampleCommission: string }
> = {
  USD: { symbol: "$", label: "US dollars", exampleCommission: "10,000" },
  AED: { symbol: "AED", label: "UAE dirhams", exampleCommission: "40,000" },
  GBP: { symbol: "£", label: "Pounds", exampleCommission: "8,000" },
};

// The dirham is pegged to the dollar at this rate, so it can be fixed here.
const AED_PER_USD = 3.6725;
// Sterling floats: this is only a starting point, shown as an editable field.
const DEFAULT_GBP_PER_USD = "0.75";

const MARKET_CURRENCY: Record<MarketKey, CurrencyKey> = {
  dubai: "AED",
  miami: "USD",
  california: "USD",
  uk: "GBP",
};

const group = (n: number) => Math.round(n).toLocaleString("en-US");

/** What a purchased lead list has to deliver to pay for itself. */
export function LeadRoiCalculator() {
  const [preset, setPreset] = useState<Product | null>(null);
  const [currency, setCurrency] = useState<CurrencyKey>("USD");
  const [gbpRate, setGbpRate] = useState(DEFAULT_GBP_PER_USD);
  const [cost, setCost] = useState("1,500");
  const [contacts, setContacts] = useState("1,000");
  const [reach, setReach] = useState("20");
  const [convert, setConvert] = useState("1");
  const [commission, setCommission] = useState(CURRENCIES.USD.exampleCommission);

  /** Units of `key` per US dollar. */
  const perUsd = (key: CurrencyKey, gbp = gbpRate) =>
    key === "AED" ? AED_PER_USD : key === "GBP" ? parseNumber(gbp) || 1 : 1;

  /**
   * Switch currency, carrying the money fields over. An untouched example
   * commission becomes the new currency's example; anything the visitor typed
   * is converted.
   */
  const changeCurrency = (next: CurrencyKey, product: Product | null = preset) => {
    const factor = perUsd(next) / perUsd(currency);
    setCommission((current) =>
      current === CURRENCIES[currency].exampleCommission
        ? CURRENCIES[next].exampleCommission
        : group(parseNumber(current) * factor)
    );
    setCost((current) => group(product ? product.price * perUsd(next) : parseNumber(current) * factor));
    setCurrency(next);
  };

  const applyPreset = (product: Product) => {
    setPreset(product);
    setContacts(group(Math.min(getRecordCount(product), FIRST_BATCH)));
    changeCurrency(MARKET_CURRENCY[product.market], product);
  };

  const changeGbpRate = (value: string) => {
    setGbpRate(value);
    // Keep a preset's price in step with the rate the visitor entered.
    if (preset && currency === "GBP") setCost(group(preset.price * perUsd("GBP", value)));
  };

  const { symbol } = CURRENCIES[currency];
  const costN = parseNumber(cost);
  const contactsN = parseNumber(contacts);
  const conversations = contactsN * (Math.min(parseNumber(reach), 100) / 100);
  const deals = conversations * (Math.min(parseNumber(convert), 100) / 100);
  const commissionN = parseNumber(commission);
  const earned = deals * commissionN;
  const net = earned - costN;
  const breakEven = commissionN > 0 ? Math.ceil(costN / commissionN) : 0;

  const costHint =
    preset && currency === "AED"
      ? `$${preset.price.toLocaleString("en-US")} at the fixed rate of AED ${AED_PER_USD} per US dollar.`
      : preset && currency === "GBP"
        ? `$${preset.price.toLocaleString("en-US")} converted at the rate below.`
        : undefined;

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
                  aria-pressed={preset?.slug === product.slug}
                  onClick={() => applyPreset(product)}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-xs transition-colors",
                    preset?.slug === product.slug
                      ? "border-ivory bg-ivory font-semibold text-ink"
                      : "border-line-strong text-sand hover:border-ivory/40 hover:text-ivory"
                  )}
                >
                  {product.shortName}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-2 text-xs font-medium text-sand">Your currency</div>
            <div className="flex gap-2" role="tablist" aria-label="Currency">
              {(Object.keys(CURRENCIES) as CurrencyKey[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={currency === key}
                  onClick={() => changeCurrency(key)}
                  className={cn(
                    "flex-1 rounded-full border px-3 py-2 text-xs transition-colors sm:text-sm",
                    currency === key
                      ? "border-ivory bg-ivory font-semibold text-ink"
                      : "border-line-strong text-sand hover:border-ivory/40 hover:text-ivory"
                  )}
                >
                  {CURRENCIES[key].label}
                </button>
              ))}
            </div>
          </div>

          {currency === "GBP" && (
            <NumberField
              label="Pounds per US dollar"
              prefix="£"
              value={gbpRate}
              onChange={changeGbpRate}
              hint="Approximate. Change it to today's exchange rate."
            />
          )}

          <NumberField label="Cost of the lead list" prefix={symbol} value={cost} onChange={setCost} hint={costHint} />
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
          <NumberField
            label="Average commission per deal"
            prefix={symbol}
            value={commission}
            onChange={setCommission}
            hint="What you earn on one closed deal, in your own currency."
          />
        </>
      }
      results={
        <>
          <ResultRow label="Conversations" value={Math.round(conversations).toLocaleString("en-US")} />
          <ResultRow label="Deals" value={deals.toFixed(1)} />
          <ResultRow
            label="Cost per conversation"
            value={conversations > 0 ? formatMoney(costN / conversations, symbol) : "–"}
          />
          <ResultRow label="Cost per deal" value={deals > 0 ? formatMoney(costN / deals, symbol) : "–"} />
          <ResultRow label="Commission earned" value={formatMoney(earned, symbol)} />
          <ResultRow label="Return after the list cost" value={formatMoney(net, symbol)} strong />
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
