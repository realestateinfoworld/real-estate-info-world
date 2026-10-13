"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { trackGaEvent } from "@/lib/gtag";
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
      onClick={() => trackGaEvent("chat_click", { channel: "telegram", page_path: pathname })}
      aria-label="Chat with us on Telegram"
      className="floating-telegram fixed right-6 z-[60] block"
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
