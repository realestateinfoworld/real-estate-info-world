import { PURCHASE_STEPS } from "@/lib/constants";
import { Reveal } from "@/components/Reveal";

export function HowItWorks() {
  return (
    <ol className="grid gap-4 md:grid-cols-3">
      {PURCHASE_STEPS.map((step, i) => (
        <li key={step.title}>
          <Reveal delay={i * 0.1} className="h-full">
            <div className="relative h-full overflow-hidden rounded-3xl border border-line bg-surface p-8">
              <div className="font-display text-7xl leading-none text-gold/20">0{i + 1}</div>
              <h3 className="mt-6 text-xl font-medium text-ivory">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-sand">{step.body}</p>
              {i < PURCHASE_STEPS.length - 1 && (
                <div
                  className="absolute top-14 right-8 hidden h-px w-16 bg-gradient-to-r from-gold/50 to-transparent md:block"
                  aria-hidden="true"
                />
              )}
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
