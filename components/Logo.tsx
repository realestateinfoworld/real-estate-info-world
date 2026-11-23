import Image from "next/image";
import { cn } from "@/lib/utils";

/** Brand lockup: the gold house mark plus a wordmark. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <Image
        src="/images/logo-mark.png"
        alt=""
        width={40}
        height={40}
        className="h-9 w-9 md:h-10 md:w-10"
        preload
      />
      <span className="flex flex-col leading-none">
        <span className="font-wordmark text-[15px] md:text-[17px] font-semibold tracking-[0.16em] text-ivory">
          REAL ESTATE
        </span>
        <span className="mt-1 flex items-center gap-1.5 text-[8.5px] md:text-[9px] font-medium tracking-[0.42em] text-brand">
          <span className="h-px w-3 bg-brand/50" aria-hidden="true" />
          INFO.WORLD
          <span className="h-px w-3 bg-brand/50" aria-hidden="true" />
        </span>
      </span>
      <span className="sr-only">Real Estate Info World</span>
    </span>
  );
}
