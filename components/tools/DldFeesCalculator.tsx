"use client";

import { useState } from "react";
import { CalculatorShell, NumberField, ResultRow, formatMoney, parseNumber } from "@/components/tools/fields";

// Standard charges on a ready (secondary-market) property transfer in Dubai.
const TRANSFER_RATE = 0.04;
const VAT = 0.05;
const TRUSTEE_FEE_THRESHOLD = 500_000;
const MORTGAGE_REGISTRATION_RATE = 0.0025;
const MORTGAGE_REGISTRATION_ADMIN = 290;

/** Buyer-side cost of a ready-property purchase in Dubai. */
export function DldFeesCalculator() {
  const [price, setPrice] = useState("2,000,000");
  const [adminFee, setAdminFee] = useState("580");
  const [commissionPct, setCommissionPct] = useState("2");
  const [mortgage, setMortgage] = useState(false);
  const [loan, setLoan] = useState("1,500,000");

  const priceN = parseNumber(price);
  const transfer = priceN * TRANSFER_RATE;
  const admin = parseNumber(adminFee);
  const trustee = priceN > 0 ? (priceN >= TRUSTEE_FEE_THRESHOLD ? 4000 : 2000) * (1 + VAT) : 0;
  const commission = priceN * (parseNumber(commissionPct) / 100) * (1 + VAT);
  const loanN = mortgage ? parseNumber(loan) : 0;
  const mortgageReg = loanN > 0 ? loanN * MORTGAGE_REGISTRATION_RATE + MORTGAGE_REGISTRATION_ADMIN : 0;
  const total = transfer + admin + trustee + commission + mortgageReg;
  const share = priceN > 0 ? (total / priceN) * 100 : 0;

  return (
    <CalculatorShell
      inputs={
        <>
          <NumberField label="Purchase price" prefix="AED" value={price} onChange={setPrice} />
          <NumberField
            label="Agency commission"
            suffix="%"
            value={commissionPct}
            onChange={setCommissionPct}
            hint="Typically 2% of the price, plus 5% VAT. Enter 0 if no agent is involved."
          />
          <NumberField
            label="DLD admin fee"
            prefix="AED"
            value={adminFee}
            onChange={setAdminFee}
            hint="AED 580 for apartments and offices; AED 430 for land."
          />
          <label className="flex cursor-pointer items-center gap-3 text-sm text-sand">
            <input
              type="checkbox"
              checked={mortgage}
              onChange={(e) => setMortgage(e.target.checked)}
              className="h-4 w-4 rounded border-line-strong accent-[#059669]"
            />
            Buying with a mortgage
          </label>
          {mortgage && <NumberField label="Loan amount" prefix="AED" value={loan} onChange={setLoan} />}
        </>
      }
      results={
        <>
          <ResultRow label="DLD transfer fee (4%)" value={formatMoney(transfer, "AED")} />
          <ResultRow label="DLD admin fee" value={formatMoney(admin, "AED")} />
          <ResultRow label="Trustee office fee (incl. VAT)" value={formatMoney(trustee, "AED")} />
          <ResultRow label="Agency commission (incl. VAT)" value={formatMoney(commission, "AED")} />
          {mortgage && (
            <ResultRow label="Mortgage registration (0.25% + AED 290)" value={formatMoney(mortgageReg, "AED")} />
          )}
          <ResultRow label="Total buying costs" value={formatMoney(total, "AED")} strong />
          <ResultRow label="As a share of the price" value={`${share.toFixed(2)}%`} />
        </>
      }
      note="An estimate for a ready property. Not included: developer NOC fee (typically AED 500–5,000), title deed issuance, bank arrangement and valuation fees. Confirm exact fees with the Dubai Land Department or a registration trustee before you transact."
    />
  );
}
