"use client";

import { useState } from "react";
import { CalculatorShell, NumberField, ResultRow, formatMoney, parseNumber } from "@/components/tools/fields";

const percent = (value: string) => Math.min(parseNumber(value), 100) / 100;

/**
 * A US home sale: what each agent is paid, the total commission, and what
 * the seller walks away with once commission, closing costs and the mortgage
 * are paid.
 */
export function RealEstateCommissionCalculator() {
  const [price, setPrice] = useState("500,000");
  const [listingRate, setListingRate] = useState("2.5");
  const [buyerRate, setBuyerRate] = useState("2.5");
  const [closingRate, setClosingRate] = useState("1");
  const [payoff, setPayoff] = useState("0");

  const priceN = parseNumber(price);
  const listing = priceN * percent(listingRate);
  const buyer = priceN * percent(buyerRate);
  const total = listing + buyer;
  const closing = priceN * percent(closingRate);
  const payoffN = parseNumber(payoff);
  const net = priceN - total - closing - payoffN;
  const totalRate = priceN > 0 ? (total / priceN) * 100 : 0;

  return (
    <CalculatorShell
      inputs={
        <>
          <NumberField label="Sale price" prefix="$" value={price} onChange={setPrice} />
          <NumberField
            label="Listing agent commission"
            suffix="%"
            value={listingRate}
            onChange={setListingRate}
            hint="The rate in the listing agreement. Commission is negotiable; this is an example."
          />
          <NumberField
            label="Buyer's agent commission paid by the seller"
            suffix="%"
            value={buyerRate}
            onChange={setBuyerRate}
            hint="Enter 0 if the buyer pays their own agent. Since August 2024 this is agreed case by case."
          />
          <NumberField
            label="Other closing costs"
            suffix="%"
            value={closingRate}
            onChange={setClosingRate}
            hint="Title, escrow and transfer tax paid by the seller, as a share of the price."
          />
          <NumberField
            label="Mortgage payoff"
            prefix="$"
            value={payoff}
            onChange={setPayoff}
            hint="The balance left on the seller's loan. 0 if the home is owned outright."
          />
        </>
      }
      results={
        <>
          <ResultRow label="Listing agent commission" value={formatMoney(listing, "$")} />
          <ResultRow label="Buyer's agent commission" value={formatMoney(buyer, "$")} />
          <ResultRow label="Total commission" value={formatMoney(total, "$")} />
          <ResultRow label="Total commission rate" value={`${totalRate.toFixed(2)}%`} />
          <ResultRow label="Other closing costs" value={formatMoney(closing, "$")} />
          <ResultRow label="Mortgage payoff" value={formatMoney(payoffN, "$")} />
          <ResultRow label="Seller's net proceeds" value={formatMoney(net, "$")} strong />
        </>
      }
      note="An estimate before property tax prorations, repairs, concessions and capital gains tax. Commission rates are set by the agreements you sign, not by law; replace the example rates with yours."
    />
  );
}
