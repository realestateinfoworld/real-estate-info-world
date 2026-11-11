"use client";

import { useId } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

/** Shared building blocks for the calculators under /tools. */

/** "1,234,567" from user input such as "1 234 567" or "1,234,567.5". */
export function parseNumber(value: string): number {
  const n = Number(value.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

/**
 * "AED 80,000", "$750", "-$750". Amounts under 100 keep their cents
 * ("$7.50"), so a small per-lead cost isn't rounded into something else.
 */
export function formatMoney(amount: number, currency: string): string {
  const abs = Math.abs(amount);
  const digits = abs > 0 && abs < 100 ? 2 : 0;
  const number = abs.toLocaleString("en-US", { minimumFractionDigits: digits, maximumFractionDigits: digits });
  const sign = amount < 0 ? "-" : "";
  return currency === "$" ? `${sign}$${number}` : `${sign}${currency} ${number}`;
}

interface NumberFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  /** Unit shown inside the field: "AED", "$" before the value, "%" after. */
  prefix?: string;
  suffix?: string;
  hint?: string;
}

export function NumberField({ label, value, onChange, prefix, suffix, hint }: NumberFieldProps) {
  const id = useId();
  return (
    <div>
      <Label htmlFor={id} className="mb-2 block text-xs">
        {label}
      </Label>
      <div className="relative">
        {prefix && (
          <span className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center text-sm text-stone">
            {prefix}
          </span>
        )}
        <Input
          id={id}
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(prefix && (prefix.length > 1 ? "pl-14" : "pl-8"), suffix && "pr-10")}
        />
        {suffix && (
          <span className="pointer-events-none absolute inset-y-0 right-3.5 flex items-center text-sm text-stone">
            {suffix}
          </span>
        )}
      </div>
      {hint && <p className="mt-1.5 text-xs leading-relaxed text-stone">{hint}</p>}
    </div>
  );
}

export function ResultRow({
  label,
  value,
  strong = false,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-baseline justify-between gap-4 py-2.5",
        strong ? "border-t border-line-strong pt-4" : "border-b border-line/70"
      )}
    >
      <dt className={cn("text-sm", strong ? "font-semibold text-ivory" : "text-sand")}>{label}</dt>
      <dd
        className={cn(
          "stat-number whitespace-nowrap text-right",
          strong ? "font-display text-2xl text-brand" : "text-sm font-medium text-ivory"
        )}
      >
        {value}
      </dd>
    </div>
  );
}

/** Two columns: inputs on the left, a tinted results panel on the right. */
export function CalculatorShell({
  inputs,
  results,
  note,
}: {
  inputs: React.ReactNode;
  results: React.ReactNode;
  note: string;
}) {
  return (
    <div className="brand-frame overflow-hidden rounded-3xl bg-surface shadow-[0_40px_90px_-50px_rgb(10_22_40_/_0.35)]">
      <div className="grid lg:grid-cols-2">
        <div className="space-y-4 p-6 md:p-8">{inputs}</div>
        <div className="border-t border-line bg-brand/[0.04] p-6 md:p-8 lg:border-t-0 lg:border-l">
          <dl aria-live="polite">{results}</dl>
          <p className="mt-5 text-xs leading-relaxed text-stone">{note}</p>
        </div>
      </div>
    </div>
  );
}
