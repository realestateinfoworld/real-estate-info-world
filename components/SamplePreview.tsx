"use client";

import { useState } from "react";
import { Eye, Lock } from "lucide-react";
import type { Product } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface SamplePreviewProps {
  product: Product;
}

export function SamplePreview({ product }: SamplePreviewProps) {
  const [revealed, setRevealed] = useState(false);
  const { columns, rows, maskedColumn, emphasisColumn } = product.sample;

  return (
    <div className="sample-preview relative">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#c8c8c8]">
        <div>
          <div className="text-sm font-semibold">{product.name} — Sample</div>
          <div className="text-xs text-[#6b6b6b]">{product.version} • Actual format shown</div>
        </div>
        <button
          onClick={() => setRevealed(!revealed)}
          className="flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border border-[#c8c8c8] hover:bg-[#f2f2f2] transition"
        >
          <Eye className="h-3.5 w-3.5" />
          {revealed ? "Hide" : "Reveal"} Details
        </button>
      </div>

      <div className="overflow-x-auto">
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
                      cellIndex === emphasisColumn && "font-medium text-[#3d3d3d]"
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

      <div className="preview-overlay text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#c8c8c8] bg-[#f5f5f5] px-4 py-1 text-xs font-medium text-[#5a5a5a] shadow-sm mb-2">
          <Lock className="h-3.5 w-3.5" /> ACTUAL SAMPLE DATA PREVIEW
        </div>
        <p className="text-xs text-[#6b6b6b] max-w-sm mx-auto">
          Sensitive fields are masked. Full unredacted Excel file delivered after purchase.
        </p>
      </div>
    </div>
  );
}
