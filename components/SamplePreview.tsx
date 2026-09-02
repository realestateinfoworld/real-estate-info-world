"use client";

import { useState } from "react";
import { Eye, Lock } from "lucide-react";
import { SAMPLE_OWNER_DATA, SAMPLE_BUYER_DATA } from "@/lib/constants";

interface SamplePreviewProps {
  type: "owner" | "buyer";
}

export function SamplePreview({ type }: SamplePreviewProps) {
  const [revealed, setRevealed] = useState(false);
  const isOwner = type === "owner";
  const data = isOwner ? SAMPLE_OWNER_DATA : SAMPLE_BUYER_DATA;

  return (
    <div className="sample-preview relative">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#c8c8c8]">
        <div>
          <div className="text-sm font-semibold">
            {isOwner ? "Dubai Property Owner Database" : "Dubai Property Buyer Leads"} — Sample
          </div>
          <div className="text-xs text-[#6b6b6b]">August 2026 • Actual format shown</div>
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
              {isOwner ? (
                <>
                  <th>Name</th>
                  <th>Community</th>
                  <th>Property</th>
                  <th>Mobile</th>
                </>
              ) : (
                <>
                  <th>Buyer</th>
                  <th>Location</th>
                  <th>Budget</th>
                  <th>Interest</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                {isOwner ? (
                  <>
                    <td className={!revealed ? "blurred-cell" : ""}>{(row as any).name}</td>
                    <td>{(row as any).community}</td>
                    <td>{(row as any).type}</td>
                    <td className="font-medium text-[#3d3d3d]">{(row as any).mobile}</td>
                  </>
                ) : (
                  <>
                    <td className={!revealed ? "blurred-cell" : ""}>{(row as any).name}</td>
                    <td>{(row as any).location}</td>
                    <td className="font-medium">{(row as any).budget}</td>
                    <td>{(row as any).interest}</td>
                  </>
                )}
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
