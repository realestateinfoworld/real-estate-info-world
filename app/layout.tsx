import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingTelegram from "@/components/FloatingTelegram";
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
    default: "Real Estate Info World | Dubai Property Owner Database & Buyer Leads",
    template: "%s | Real Estate Info World",
  },
  description: "Dubai Property Owner Database (1M+ verified owners) and Dubai Property Buyer Leads (10k+ high-intent buyers). CRM-ready Excel for Dubai real estate brokers, consultants, agencies & property marketers. Instant delivery.",
  keywords: [
    "Dubai Property Owner Database",
    "Dubai Property Owner Leads",
    "Dubai Buyer Leads",
    "Dubai Real Estate Leads",
    "Dubai Property Marketing Data",
    "Dubai real estate database",
    "verified Dubai property owners",
    "Dubai real estate CRM data",
    "Dubai off-market leads",
    "high-intent Dubai buyers",
  ],
  authors: [{ name: "Real Estate Info World" }],
  creator: "Real Estate Info World",
  publisher: "Real Estate Info World",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Real Estate Info World",
    title: "Real Estate Info World | Dubai Property Owner Database & Buyer Leads",
    description: "Professional Dubai Property Owner Database and high-intent Dubai Buyer Leads for brokers and agencies. CRM-ready. Delivered in minutes.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Info World | Dubai Property Owner Database & Buyer Leads",
    description: "Verified Dubai real estate leads and property marketing data for Dubai brokers and consultants.",
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
  // Enhanced schema for better SEO targeting Dubai real estate professionals and product keywords
  const orgSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://realestate-info.world/#organization",
        name: "Real Estate Info World",
        url: "https://realestate-info.world",
        email: "info@realestate-info.world",
        telephone: "+44 75 46 084350",
        areaServed: {
          "@type": "City",
          name: "Dubai",
          addressCountry: "AE",
        },
        description: "Provider of verified Dubai Property Owner Database and high-intent Dubai Buyer Leads for real estate brokers, consultants, and agencies.",
        sameAs: [],
      },
      {
        "@type": "Product",
        "@id": "https://realestate-info.world/#owner-database",
        name: "Dubai Property Owner Database",
        description: "1,000,000+ verified Dubai property owners with direct mobile numbers. CRM-ready Excel data for Dubai real estate brokers and agencies seeking owner leads and off-market opportunities across 200+ Dubai communities.",
        brand: {
          "@type": "Brand",
          name: "Real Estate Info World",
        },
        offers: {
          "@type": "Offer",
          price: "300",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: "https://realestate-info.world/products/owner-database",
        },
      },
      {
        "@type": "Product",
        "@id": "https://realestate-info.world/#buyer-leads",
        name: "Dubai Property Buyer Leads",
        description: "10,000+ high-intent Dubai buyer leads with verified contacts, budgets, and timelines. Ideal Dubai real estate marketing data for brokers closing high-value transactions in Dubai Marina, Downtown Dubai, Palm Jumeirah and other prime areas.",
        brand: {
          "@type": "Brand",
          name: "Real Estate Info World",
        },
        offers: {
          "@type": "Offer",
          price: "1200",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: "https://realestate-info.world/products/buyer-leads",
        },
      },
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
