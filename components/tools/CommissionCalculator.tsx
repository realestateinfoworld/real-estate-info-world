"use client";

import { useState } from "react";
import { CalculatorShell, NumberField, ResultRow, formatMoney, parseNumber } from "@/components/tools/fields";
import { cn } from "@/lib/utils";

const VAT = 0.05;

// Customary rates in Dubai; both are negotiable, so the field stays editable.
const DEFAULT_RATE = { sale: "2", rent: "5" } as const;
type Deal = keyof typeof DEFAULT_RATE;

/** Broker commission on a Dubai sale or rental, with VAT and the agent's split. */
export function CommissionCalculator() {
  const [deal, setDeal] = useState<Deal>("sale");
  const [amount, setAmount] = useState("2,000,000");
  const [rate, setRate] = useState<string>(DEFAULT_RATE.sale);
  const [split, setSplit] = useState("50");

  const chooseDeal = (next: Deal) => {
    setDeal(next);
    setRate(DEFAULT_RATE[next]);
    setAmount(next === "sale" ? "2,000,000" : "120,000");
  };

  const commission = parseNumber(amount) * (parseNumber(rate) / 100);
  const vat = commission * VAT;
  const agentShare = commission * (Math.min(parseNumber(split), 100) / 100);

  return (
    <CalculatorShell
      inputs={
        <>
          <div className="flex gap-2" role="tablist" aria-label="Deal type">
            {(["sale", "rent"] as const).map((option) => (
              <button
                key={option}
                type="button"
                role="tab"
                aria-selected={deal === option}
                onClick={() => chooseDeal(option)}
                className={cn(
                  "flex-1 rounded-full border px-4 py-2 text-sm transition-colors",
                  deal === option
                    ? "border-ivory bg-ivory font-semibold text-ink"
                    : "border-line-strong text-sand hover:border-ivory/40 hover:text-ivory"
                )}
              >
                {option === "sale" ? "Sale" : "Rental"}
              </button>
            ))}
          </div>
          <NumberField
            label={deal === "sale" ? "Sale price" : "Annual rent"}
            prefix="AED"
            value={amount}
            onChange={setAmount}
          />
          <NumberField
            label="Commission rate"
            suffix="%"
            value={rate}
            onChange={setRate}
            hint={
              deal === "sale"
                ? "Customarily 2% of the sale price in Dubai."
                : "Customarily 5% of the first year's rent in Dubai."
            }
          />
          <NumberField
            label="Your split with the brokerage"
            suffix="%"
            value={split}
            onChange={setSplit}
            hint="The share of the commission you keep as the agent."
          />
        </>
      }
      results={
        <>
          <ResultRow label="Commission" value={formatMoney(commission, "AED")} />
          <ResultRow label="VAT (5%)" value={formatMoney(vat, "AED")} />
          <ResultRow label="Client pays" value={formatMoney(commission + vat, "AED")} />
          <ResultRow label="Brokerage keeps" value={formatMoney(commission - agentShare, "AED")} />
          <ResultRow label="You earn" value={formatMoney(agentShare, "AED")} strong />
        </>
      }
      note="Commission rates in Dubai are customary, not fixed, and are agreed in the brokerage contract (RERA Form A or Form B). VAT is charged on the commission, not on the property price."
    />
  );
}
