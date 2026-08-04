"use client";

import { usePathname } from "next/navigation";
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
      className="fixed bottom-28 right-6 z-[60] block"
    >
      <img
        src="/icons/telegram.svg"
        alt="Chat on Telegram"
        className="w-16 h-16 shadow-xl transition-all hover:shadow-2xl hover:scale-110 rounded-full"
      />
    </a>
  );
}
