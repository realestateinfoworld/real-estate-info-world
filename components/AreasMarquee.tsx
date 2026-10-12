import { MARKET_ORDER, MARKETS } from "@/lib/constants";

/** An endless ticker of the areas covered across every market. */
export function AreasMarquee() {
  const areas = MARKET_ORDER.flatMap((key) => MARKETS[key].areas);

  return (
    <div className="marquee-mask overflow-hidden border-y border-line bg-ink-2 py-5" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {areas.map((area) => (
              <span key={`${copy}-${area}`} className="flex items-center whitespace-nowrap px-6 font-display text-xl text-sand/80 md:text-2xl">
                {area}
                <span className="ml-12 text-gold/60">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
