"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { trackGaEvent } from "@/lib/gtag";
import { CONTACT, getMarketForPath } from "@/lib/constants";

export default function FloatingWhatsApp() {
  const pathname = usePathname();

  // Remove from home page as per request
  if (pathname === "/") {
    return null;
  }

  const market = getMarketForPath(pathname);
  const message = `Hello, I'm interested in your ${market.name} real estate data.`;
  const waLink = `https://wa.me/${CONTACT.whatsappRaw}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackGaEvent("chat_click", { channel: "whatsapp", page_path: pathname })}
      aria-label="Chat with us on WhatsApp"
      className="floating-whatsapp fixed right-6 z-[60] block"
    >
      <Image
        src="/icons/whatsapp.svg"
        width={56}
        height={56}
        alt="Chat on WhatsApp"
        className="h-14 w-14 rounded-full shadow-[0_12px_30px_-8px_rgb(0_0_0_/_0.25)] ring-1 ring-ivory/10 transition-transform hover:scale-105"
      />
    </a>
  );
}
