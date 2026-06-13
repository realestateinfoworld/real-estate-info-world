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
      className="fixed bottom-6 right-6 z-[60] flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition-all hover:bg-[#128C7E] hover:shadow-2xl"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="shrink-0"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.67-.198-1.02-.198-.35 0-.746.074-1.12.372-.373.297-1.42 1.385-1.42 3.374 0 1.99 1.455 3.91 1.654 4.18.2.268 2.86 4.36 6.92 6.12 1.02.45 1.82.72 2.44.92.74.25 1.41.21 1.94.13.59-.1 1.82-.74 2.08-1.45.26-.71.26-1.32.18-1.45-.07-.13-.27-.21-.57-.36zM12 2C6.48 2 2 6.48 2 12c0 1.99.58 3.84 1.58 5.4L2 22l4.6-1.58A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
      <span className="hidden font-medium sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
