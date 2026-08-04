"use client";

import { usePathname } from "next/navigation";
import { CONTACT } from "@/lib/constants";

export default function FloatingWhatsApp() {
  const pathname = usePathname();

  // Remove from home page as per request
  if (pathname === "/") {
    return null;
  }

  const message = "Hello, I'm interested in your Dubai real estate databases.";
  const waLink = `https://wa.me/${CONTACT.whatsappRaw}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-[60] block"
    >
      <img
        src="/icons/whatsapp.svg"
        alt="Chat on WhatsApp"
        className="w-16 h-16 shadow-xl transition-all hover:shadow-2xl hover:scale-110 rounded-full"
      />
    </a>
  );
}
