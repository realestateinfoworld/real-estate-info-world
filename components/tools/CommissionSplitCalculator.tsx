"use client";

import { useState } from "react";
import { CalculatorShell, NumberField, ResultRow, formatMoney, parseNumber } from "@/components/tools/fields";

const percent = (value: string) => Math.min(parseNumber(value), 100) / 100;

/** A US agent's take-home from one deal, and the deals needed to hit an income goal. */
export function CommissionSplitCalculator() {
  const [price, setPrice] = useState("800,000");
  const [rate, setRate] = useState("2.5");
  const [referral, setReferral] = useState("0");
  const [split, setSplit] = useState("70");
  const [fees, setFees] = useState("0");
  const [goal, setGoal] = useState("150,000");

  const gross = parseNumber(price) * percent(rate);
  // A referral fee comes off the top, before the brokerage split.
  const referralFee = gross * percent(referral);
  const afterReferral = gross - referralFee;
  const agentShare = afterReferral * percent(split);
  const feesN = parseNumber(fees);
  const takeHome = agentShare - feesN;
  const dealsNeeded = takeHome > 0 ? Math.ceil(parseNumber(goal) / takeHome) : 0;

  return (
    <CalculatorShell
      inputs={
        <>
          <NumberField label="Sale price" prefix="$" value={price} onChange={setPrice} />
          <NumberField
            label="Commission on your side"
            suffix="%"
            value={rate}
            onChange={setRate}
            hint="The rate in your listing or buyer agreement. Commission is negotiable; this is an example."
          />
          <NumberField
            label="Referral fee"
            suffix="%"
            value={referral}
            onChange={setReferral}
            hint="Share of the commission owed to a referring agent or lead source. 0 if none."
          />
          <NumberField label="Your split with the brokerage" suffix="%" value={split} onChange={setSplit} />
          <NumberField
            label="Brokerage fees per deal"
            prefix="$"
            value={fees}
            onChange={setFees}
            hint="Transaction, E&O or franchise fees charged per closing."
          />
          <NumberField label="Annual income goal" prefix="$" value={goal} onChange={setGoal} />
        </>
      }
      results={
        <>
          <ResultRow label="Gross commission" value={formatMoney(gross, "$")} />
          <ResultRow label="Referral fee" value={formatMoney(referralFee, "$")} />
          <ResultRow label="Brokerage keeps" value={formatMoney(afterReferral - agentShare, "$")} />
          <ResultRow label="Brokerage fees" value={formatMoney(feesN, "$")} />
          <ResultRow label="You take home" value={formatMoney(takeHome, "$")} strong />
          <ResultRow
            label="Deals a year to reach your goal"
            value={dealsNeeded > 0 ? dealsNeeded.toLocaleString("en-US") : "–"}
          />
        </>
      }
      note="Before taxes and your own business costs. Commission rates and splits are set by your agreements, not by law; replace the example figures with yours."
    />
  );
}
