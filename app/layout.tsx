import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingTelegram from "@/components/FloatingTelegram";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { MetaPixel } from "@/components/MetaPixel";
import { PRODUCTS, MARKETS, MARKET_ORDER } from "@/lib/constants";

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
    default: "Real Estate Info World | Property Owner Databases & Buyer Leads",
    template: "%s | Real Estate Info World",
  },
  description: "Verified property owner databases and high-intent buyer leads for real estate brokers, consultants, agencies and property marketers. CRM-ready Excel, instant delivery.",
  // Site-wide keywords: the base set plus every product's own keywords, deduped.
  keywords: [
    ...new Set([
      "Property Owner Database",
      "Property Owner Leads",
      "Buyer Leads",
      "Real Estate Leads",
      "Property Marketing Data",
      "real estate CRM data",
      ...PRODUCTS.flatMap((product) => product.seo.keywords),
    ]),
  ],
  authors: [{ name: "Real Estate Info World" }],
  creator: "Real Estate Info World",
  publisher: "Real Estate Info World",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Real Estate Info World",
    title: "Real Estate Info World | Property Owner Databases & Buyer Leads",
    description: "Professional property owner databases and high-intent buyer leads for brokers and agencies. CRM-ready. Delivered in minutes.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Info World | Property Owner Databases & Buyer Leads",
    description: "Verified real estate leads and property marketing data for brokers and consultants.",
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
  // Organization + one Product node per dataset, generated from PRODUCTS so new
  // markets are picked up automatically.
  const orgSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Real Estate Info World",
        url: siteUrl,
        email: "info@realestate-info.world",
        telephone: "+44 75 46 084350",
        areaServed: MARKET_ORDER.map((key) => ({
          "@type": "AdministrativeArea",
          name: MARKETS[key].schemaRegion,
          addressCountry: MARKETS[key].schemaCountry,
        })),
        description:
          "Provider of verified property owner databases and high-intent buyer leads for real estate brokers, consultants, and agencies.",
        sameAs: [],
      },
      ...PRODUCTS.map((product) => ({
        "@type": "Product",
        "@id": `${siteUrl}/#${product.slug}`,
        name: product.name,
        description: product.seo.description,
        brand: {
          "@type": "Brand",
          name: "Real Estate Info World",
        },
        offers: {
          "@type": "Offer",
          price: String(product.price),
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: `${siteUrl}/products/${product.slug}`,
        },
      })),
    ],
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
        <FloatingTelegram />
        {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_ID && (
          <Suspense fallback={null}>
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
          </Suspense>
        )}
        {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <Suspense fallback={null}>
            <MetaPixel pixelId={process.env.NEXT_PUBLIC_META_PIXEL_ID} />
          </Suspense>
        )}
        <Toaster position="top-center" closeButton richColors className="sonner-toast" />
      </body>
    </html>
  );
}
