"use client";

import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import type { Product } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface SamplePreviewProps {
  product: Product;
}

export function SamplePreview({ product }: SamplePreviewProps) {
  const [revealed, setRevealed] = useState(false);
  const { columns, rows, maskedColumn, emphasisColumn } = product.sample;

  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-surface">
      <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4">
        <div className="min-w-0">
          <div className="truncate text-sm font-medium text-ivory">{product.name} — Sample</div>
          <div className="text-xs text-stone">{product.version} · Actual format shown</div>
        </div>
        <button
          onClick={() => setRevealed(!revealed)}
          className="flex flex-shrink-0 items-center gap-1.5 rounded-full border border-line-strong px-3 py-1.5 text-xs text-sand transition hover:border-gold/50 hover:text-ivory"
        >
          {revealed ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
          {revealed ? "Hide" : "Reveal"} details
        </button>
      </div>

      <div className="overflow-x-auto px-2">
        <table className="sample-table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={cn(
                      cellIndex === maskedColumn && !revealed && "blurred-cell",
                      cellIndex === emphasisColumn && "font-medium text-gold-pale"
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

      <div className="flex items-center gap-3 border-t border-line bg-ink-2 px-5 py-4 text-xs text-stone">
        <Lock className="h-3.5 w-3.5 flex-shrink-0 text-gold" />
        Sensitive fields are masked. The full, unredacted Excel file is delivered after purchase.
      </div>
    </div>
  );
}
