import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { MetaPixel } from "@/components/MetaPixel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const siteUrl = "https://realestate-info.world";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Real Estate Info World | Dubai Property Data & Buyer Leads",
    template: "%s | Real Estate Info World",
  },
  description: "Professional Dubai real estate databases. Access verified property owner data and high-intent buyer leads. CRM-ready Excel files delivered within 24 hours. Trusted by agencies and brokers worldwide.",
  keywords: [
    "Dubai Property Owner Database",
    "Dubai Property Leads",
    "Dubai Buyer Leads",
    "Dubai Real Estate Database",
    "Dubai Property Marketing Data",
    "verified Dubai property owners",
    "Dubai real estate CRM data",
  ],
  authors: [{ name: "Real Estate Info World" }],
  creator: "Real Estate Info World",
  publisher: "Real Estate Info World",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Real Estate Info World",
    title: "Real Estate Info World | Dubai Property Data & Buyer Leads",
    description: "Professional Dubai real estate databases. Verified property owner data and high-intent buyer leads. CRM-ready. Delivered in 24 hours.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Info World | Dubai Property Data",
    description: "Verified Dubai property databases and buyer leads for real estate professionals.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.png',
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Real Estate Info World",
    url: "https://realestate-info.world",
    email: "info@realestate-info.world",
    telephone: "+44 75 46 084350",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AE",
      addressLocality: "Dubai",
    },
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#e8e8e8] text-[#3d3d3d]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <MetaPixel pixelId={process.env.NEXT_PUBLIC_META_PIXEL_ID} />
        )}
        <Toaster position="top-center" closeButton richColors className="sonner-toast" />
      </body>
    </html>
  );
}
