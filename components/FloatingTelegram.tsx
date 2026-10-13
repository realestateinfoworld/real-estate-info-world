"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/lib/constants";

export default function FloatingTelegram() {
  const pathname = usePathname();

  // Remove from home page to match WhatsApp behavior
  if (pathname === "/") {
    return null;
  }

  const tgLink = CONTACT.telegram;

  return (
    <a
      href={tgLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on Telegram"
      className={cn("fixed right-6 z-[60] block", pathname.startsWith("/products/") ? "bottom-42 lg:bottom-24" : "bottom-24")}
    >
      <Image
        src="/icons/telegram.svg"
        width={56}
        height={56}
        alt="Chat on Telegram"
        className="h-14 w-14 rounded-full shadow-[0_12px_30px_-8px_rgb(0_0_0_/_0.25)] ring-1 ring-ivory/10 transition-transform hover:scale-105"
      />
    </a>
  );
}
