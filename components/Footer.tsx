import Link from "next/link";
import { CONTACT } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#c8c8c8] bg-[#e8e8e8]">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10">
          <div className="col-span-2 md:col-span-2">
            <img src="/images/logo.png" alt="Real Estate Info World" className="h-16 w-auto mb-3" />
            <p className="text-sm text-[#6b6b6b] max-w-xs">
              Professional, verified Real Estate data for serious brokers and agencies.
            </p>
          </div>

          <div>
            <div className="font-medium text-sm mb-3">Products</div>
            <div className="space-y-2 text-sm">
              <Link href="/products/owner-database" className="block text-[#5a5a5a] hover:text-[#3d3d3d]">Owner Database</Link>
              <Link href="/products/buyer-leads" className="block text-[#5a5a5a] hover:text-[#3d3d3d]">Buyer Leads</Link>
              <Link href="/products" className="block text-[#5a5a5a] hover:text-[#3d3d3d]">Compare All</Link>
            </div>
          </div>

          <div>
            <div className="font-medium text-sm mb-3">Company</div>
            <div className="space-y-2 text-sm">
              <Link href="/about" className="block text-[#5a5a5a] hover:text-[#3d3d3d]">About</Link>
              <Link href="/contact" className="block text-[#5a5a5a] hover:text-[#3d3d3d]">Contact</Link>
              <a
                href={`https://wa.me/${CONTACT.whatsappRaw}?text=Hello%2C%20I'm%20interested%20in%20your%20Dubai%20real%20estate%20databases.`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#25D366] hover:text-[#128C7E]"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <div className="font-medium text-sm mb-3">Legal</div>
            <div className="space-y-2 text-sm">
              <Link href="/privacy-policy" className="block text-[#5a5a5a] hover:text-[#3d3d3d]">Privacy Policy</Link>
              <Link href="/terms" className="block text-[#5a5a5a] hover:text-[#3d3d3d]">Terms of Service</Link>
              <Link href="/refund-policy" className="block text-[#5a5a5a] hover:text-[#3d3d3d]">Refund Policy</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#c8c8c8] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6b6b6b]">
          <div>© {year} Real Estate Info World. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
