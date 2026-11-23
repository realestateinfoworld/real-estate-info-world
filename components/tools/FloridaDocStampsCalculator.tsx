"use client";

import { useState } from "react";
import { CalculatorShell, NumberField, ResultRow, formatMoney, parseNumber } from "@/components/tools/fields";
import { cn } from "@/lib/utils";

// Florida documentary stamp tax, per $100 of consideration "or portion thereof".
const DEED_RATE = 0.7;
const DEED_RATE_MIAMI_DADE = 0.6;
// Miami-Dade only, on transfers of anything other than a single-family residence.
const MIAMI_DADE_SURTAX = 0.45;
const MORTGAGE_RATE = 0.35;
// Nonrecurring intangible tax on a new mortgage: 2 mills per dollar.
const INTANGIBLE_RATE = 0.002;

/** Tax on `amount` at `rate` per $100, counting any part of $100 as a full unit. */
function perHundred(amount: number, rate: number): number {
  return Math.ceil(amount / 100) * rate;
}

function Toggle<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <div>
      <div className="mb-2 text-xs font-medium text-sand">{label}</div>
      <div className="flex gap-2" role="tablist" aria-label={label}>
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={value === option.value}
            onClick={() => onChange(option.value)}
            className={cn(
              "flex-1 rounded-full border px-3 py-2 text-xs transition-colors sm:text-sm",
              value === option.value
                ? "border-ivory bg-ivory font-semibold text-ink"
                : "border-line-strong text-sand hover:border-ivory/40 hover:text-ivory"
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/** Documentary stamp and intangible taxes on a Florida sale, with Miami-Dade's rates. */
export function FloridaDocStampsCalculator() {
  const [county, setCounty] = useState<"miami-dade" | "other">("miami-dade");
  const [propertyType, setPropertyType] = useState<"single-family" | "other">("single-family");
  const [price, setPrice] = useState("800,000");
  const [mortgage, setMortgage] = useState("600,000");

  const priceN = parseNumber(price);
  const mortgageN = parseNumber(mortgage);
  const miamiDade = county === "miami-dade";

  const deed = perHundred(priceN, miamiDade ? DEED_RATE_MIAMI_DADE : DEED_RATE);
  const surtax = miamiDade && propertyType === "other" ? perHundred(priceN, MIAMI_DADE_SURTAX) : 0;
  const mortgageStamps = perHundred(mortgageN, MORTGAGE_RATE);
  const intangible = mortgageN * INTANGIBLE_RATE;
  const sellerSide = deed + surtax;
  const buyerSide = mortgageStamps + intangible;

  return (
    <CalculatorShell
      inputs={
        <>
          <Toggle
            label="County"
            value={county}
            onChange={setCounty}
            options={[
              { value: "miami-dade", label: "Miami-Dade" },
              { value: "other", label: "Other Florida county" },
            ]}
          />
          {miamiDade && (
            <Toggle
              label="Property type"
              value={propertyType}
              onChange={setPropertyType}
              options={[
                { value: "single-family", label: "Single-family home or condo" },
                { value: "other", label: "Other property" },
              ]}
            />
          )}
          <NumberField label="Sale price" prefix="$" value={price} onChange={setPrice} />
          <NumberField
            label="New mortgage amount"
            prefix="$"
            value={mortgage}
            onChange={setMortgage}
            hint="Enter 0 for a cash purchase."
          />
        </>
      }
      results={
        <>
          <ResultRow
            label={`Deed doc stamps (${miamiDade ? "$0.60" : "$0.70"} per $100)`}
            value={formatMoney(deed, "$")}
          />
          {miamiDade && propertyType === "other" && (
            <ResultRow label="Miami-Dade surtax ($0.45 per $100)" value={formatMoney(surtax, "$")} />
          )}
          <ResultRow label="Usually paid by the seller" value={formatMoney(sellerSide, "$")} strong />
          <ResultRow label="Mortgage doc stamps ($0.35 per $100)" value={formatMoney(mortgageStamps, "$")} />
          <ResultRow label="Intangible tax (0.2% of the loan)" value={formatMoney(intangible, "$")} />
          <ResultRow label="Usually paid by the buyer" value={formatMoney(buyerSide, "$")} strong />
        </>
      }
      note="State taxes only. Title insurance, recording fees, lender charges and commission are not included. Who pays each tax is set by the contract; the split shown is the usual custom. Confirm figures with your title or closing agent."
    />
  );
}
