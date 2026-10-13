"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Datasets" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[999] transition-all duration-300",
        scrolled || mobileOpen
          ? "border-b border-line/80 bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container flex h-18 md:h-20 items-center justify-between">
        <Link href="/" aria-label="Real Estate Info World — Home" onClick={() => setMobileOpen(false)}>
          <Logo />
        </Link>

        <div className="hidden md:flex items-center gap-1 rounded-full border border-ivory/[0.07] bg-ivory/[0.03] p-1 backdrop-blur">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition-colors",
                isActive(link.href)
                  ? "bg-ivory/[0.08] text-ivory"
                  : "text-sand hover:text-ivory"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link href="/products" className={buttonVariants({ size: "sm", className: "h-10 px-5" })}>
            Get the data <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden -mr-2 p-2 text-ivory"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line bg-ink">
          <div className="container flex flex-col py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "border-b border-line py-5 font-display text-3xl",
                  isActive(link.href) ? "text-gold" : "text-ivory"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/products"
              onClick={() => setMobileOpen(false)}
              className={buttonVariants({ size: "lg", className: "mt-8 w-full" })}
            >
              Get the data <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
