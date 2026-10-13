import { Plus } from "lucide-react";
import type { Faq } from "@/lib/constants";

export function FaqList({ faqs }: { faqs: readonly Faq[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((faq) => (
        <details key={faq.question} className="faq-item group">
          <summary className="flex items-center justify-between gap-6 py-6 text-left">
            <span className="text-base font-medium text-ivory transition-colors group-hover:text-gold-pale md:text-lg">
              {faq.question}
            </span>
            <span className="faq-icon flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-line-strong text-gold transition-transform duration-300">
              <Plus className="h-4 w-4" />
            </span>
          </summary>
          <p className="-mt-1 pb-6 pr-12 text-[15px] leading-relaxed text-sand">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
