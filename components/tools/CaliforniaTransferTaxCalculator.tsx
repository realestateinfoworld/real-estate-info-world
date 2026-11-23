"use client";

import { useState } from "react";
import { CalculatorShell, NumberField, ResultRow, formatMoney, parseNumber } from "@/components/tools/fields";
import { cn } from "@/lib/utils";

// County documentary transfer tax: $0.55 per $500 "or fractional part thereof",
// which is $1.10 per $1,000.
const COUNTY_RATE_PER_500 = 0.55;

// City rates, per $1,000, where we are sure of them. Everything else is typed in.
const CITY_PRESETS = [
  { label: "No city tax", rate: "0" },
  { label: "City of Los Angeles", rate: "4.50" },
] as const;

/** County and city documentary transfer tax on a California sale. */
export function CaliforniaTransferTaxCalculator() {
  const [price, setPrice] = useState("1,500,000");
  const [cityRate, setCityRate] = useState("0");

  const priceN = parseNumber(price);
  const units = Math.ceil(priceN / 500);
  const county = units * COUNTY_RATE_PER_500;
  // City rates are quoted per $1,000 but charged on the same $500 units.
  const city = units * (parseNumber(cityRate) / 2);
  const total = county + city;
  const share = priceN > 0 ? (total / priceN) * 100 : 0;

  return (
    <CalculatorShell
      inputs={
        <>
          <NumberField label="Sale price" prefix="$" value={price} onChange={setPrice} />
          <div>
            <div className="mb-2 text-xs font-medium text-sand">City transfer tax</div>
            <div className="flex flex-wrap gap-2">
              {CITY_PRESETS.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  aria-pressed={cityRate === preset.rate}
                  onClick={() => setCityRate(preset.rate)}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-xs transition-colors",
                    cityRate === preset.rate
                      ? "border-ivory bg-ivory font-semibold text-ink"
                      : "border-line-strong text-sand hover:border-ivory/40 hover:text-ivory"
                  )}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>
          <NumberField
            label="City rate per $1,000"
            prefix="$"
            value={cityRate}
            onChange={setCityRate}
            hint="Most California cities add nothing. Some charter cities add their own tax: enter the rate for yours."
          />
        </>
      }
      results={
        <>
          <ResultRow label="County transfer tax ($1.10 per $1,000)" value={formatMoney(county, "$")} />
          <ResultRow label="City transfer tax" value={formatMoney(city, "$")} />
          <ResultRow label="Total transfer tax" value={formatMoney(total, "$")} strong />
          <ResultRow label="As a share of the price" value={`${share.toFixed(2)}%`} />
        </>
      }
      note="Does not include Measure ULA, which the City of Los Angeles adds on sales above roughly $5 million and whose thresholds change every July, or the tiered rates some cities use on high-value sales. Who pays is set by the contract. Confirm figures with your escrow or title officer."
    />
  );
}
