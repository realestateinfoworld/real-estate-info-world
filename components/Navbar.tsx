"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[999] border-b border-[#c8c8c8] bg-[#e8e8e8]/95 backdrop-blur supports-[backdrop-filter]:bg-[#e8e8e8]/80">
      <div className="container flex h-24 items-center relative">
        {/* Logo - left aligned */}
        <Link href="/" className="flex items-center z-[999]">
          <img src="/images/logo.png" alt="Real Estate Info World" className="h-16 w-auto" />
        </Link>

        {/* Desktop Navigation - absolutely centered */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-4 z-[999]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "nav-link text-base",
                pathname === link.href && "active"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions - right aligned */}
        <div className="hidden md:flex items-center gap-3 ml-auto relative z-[999]">
          <Link href="/products/owner-database">
            <Button size="lg" className="h-12 px-6 text-sm">Get Owner Database</Button>
          </Link>
          <Link href="/products/buyer-leads">
            <Button variant="outline" size="lg" className="h-12 px-6 text-sm">Get Buyer Leads</Button>
          </Link>
        </div>

        {/* Mobile Menu Button - right aligned */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden ml-auto p-2 text-[#5a5a5a] relative z-[999]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#c8c8c8] bg-[#e8e8e8]">
          <div className="container py-4 flex flex-col gap-2 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "px-3 py-3 rounded-md text-base font-medium text-center w-full",
                  pathname === link.href
                    ? "bg-[#e8e8e8] text-[#3d3d3d]"
                    : "text-[#5a5a5a]"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2 w-full items-center">
              <Link href="/products/owner-database" onClick={() => setMobileOpen(false)}>
                <Button size="lg" className="w-full h-12 text-sm">Get Owner Database</Button>
              </Link>
              <Link href="/products/buyer-leads" onClick={() => setMobileOpen(false)}>
                <Button variant="outline" size="lg" className="w-full h-12 text-sm">Get Buyer Leads</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
