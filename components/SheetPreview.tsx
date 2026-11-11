"use client";

import { useEffect, useState } from "react";
import { ChevronDown, FileSpreadsheet, Lock } from "lucide-react";
import { getMarket, type Product } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface SheetPreviewProps {
  /** One product shows a single sheet; several become sheet tabs. */
  products: readonly Product[];
  /** Step through the tabs on a timer until the visitor picks one. */
  autoCycle?: boolean;
  className?: string;
}

/** "Dubai Owner Database" → "dubai-owner-database.xlsx" */
function fileName(product: Product): string {
  return `${product.shortName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.xlsx`;
}

/**
 * The product, shown as what it is: a spreadsheet. Column letters, row
 * numbers, a filter header row and sheet tabs along the bottom. Always light,
 * like the real file, whatever section it sits in.
 */
export function SheetPreview({ products, autoCycle = false, className }: SheetPreviewProps) {
  const [active, setActive] = useState(0);
  const [cycling, setCycling] = useState(autoCycle);

  useEffect(() => {
    if (!cycling || products.length < 2) return;
    const timer = setInterval(() => setActive((i) => (i + 1) % products.length), 5000);
    return () => clearInterval(timer);
  }, [cycling, products.length]);

  const product = products[active];
  const { columns, rows, maskedColumn, emphasisColumn } = product.sample;

  return (
    <div
      className={cn(
        "theme-light overflow-hidden rounded-2xl border border-line-strong bg-surface shadow-[0_40px_90px_-40px_rgb(10_22_40_/_0.55)]",
        className
      )}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between gap-4 bg-[#107c41] px-4 py-2.5 text-white">
        <div className="flex min-w-0 items-center gap-2.5">
          <FileSpreadsheet className="h-4 w-4 flex-shrink-0" />
          <span className="truncate font-mono text-xs">{fileName(product)}</span>
        </div>
        <span className="flex-shrink-0 rounded bg-white/15 px-2 py-0.5 text-[10px] font-semibold tracking-wide">
          {product.version.toUpperCase()}
        </span>
      </div>

      {/* Grid */}
      <div className="overflow-x-auto">
        <table key={product.slug} className="sheet-table animate-sheet-in">
          <thead>
            <tr className="sheet-letters">
              <th aria-hidden="true" />
              {columns.map((column, c) => (
                <th key={column} aria-hidden="true">
                  {String.fromCharCode(65 + c)}
                </th>
              ))}
            </tr>
            <tr className="sheet-header">
              <th aria-hidden="true">1</th>
              {columns.map((column) => (
                <th key={column} scope="col">
                  <span className="flex items-center justify-between gap-3">
                    {column}
                    <ChevronDown className="h-3 w-3 flex-shrink-0 opacity-50" aria-hidden="true" />
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, r) => (
              <tr key={r}>
                <th aria-hidden="true">{r + 2}</th>
                {row.map((cell, c) => (
                  <td
                    key={c}
                    className={cn(
                      c === maskedColumn && "blurred-cell",
                      c === emphasisColumn && "font-semibold text-brand"
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Outside the scrolling grid, so it wraps on phones instead of running off screen */}
      <p className="flex items-start gap-2 border-t border-line bg-ink-2 px-4 py-2.5 text-xs leading-relaxed text-stone">
        <Lock className="mt-0.5 h-3 w-3 flex-shrink-0" aria-hidden="true" />
        {product.stats[0].value} {product.stats[0].label.toLowerCase()} in the full file. Names are masked in
        this preview only.
      </p>

      {/* Sheet tabs / status bar */}
      <div className="flex items-center justify-between gap-4 border-t border-line bg-ink-2 pr-4">
        {products.length > 1 ? (
          <div className="flex overflow-x-auto" role="tablist" aria-label="Dataset">
            {products.map((p, i) => (
              <button
                key={p.slug}
                role="tab"
                aria-selected={i === active}
                onClick={() => {
                  setActive(i);
                  setCycling(false);
                }}
                className={cn(
                  "whitespace-nowrap border-r border-line px-4 py-2.5 text-xs transition-colors",
                  i === active
                    ? "bg-surface font-semibold text-[#107c41] shadow-[inset_0_-2px_0_#107c41]"
                    : "text-stone hover:bg-surface hover:text-ivory"
                )}
              >
                {getMarket(p).name} {p.type === "owner" ? "owners" : "buyers"}
              </button>
            ))}
          </div>
        ) : (
          <span className="px-4 py-2.5 text-xs font-semibold text-[#107c41]">
            {getMarket(product).name} {product.type === "owner" ? "owners" : "buyers"}
          </span>
        )}
        <span className="hidden flex-shrink-0 text-[11px] text-stone sm:block">
          {columns.length} columns · CRM-ready .xlsx
        </span>
      </div>
    </div>
  );
}
