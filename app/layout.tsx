import type { Metadata } from "next";
import { Suspense } from "react";
import { Cinzel, Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingTelegram from "@/components/FloatingTelegram";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { MetaPixel } from "@/components/MetaPixel";
import { CONTACT, PRODUCTS, MARKETS, MARKET_ORDER } from "@/lib/constants";
import { SITE_NAME, SITE_URL, jsonLd } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Sample tables only, below the fold: not worth a preload on every page.
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: false,
});

// Headlines
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

// Wordmark only, to echo the logo's lettering
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
  preload: false,
});

const siteUrl = SITE_URL;

const siteTitle = "Dubai Property Owner Database & Miami, California Buyer Leads";
const siteDescription =
  "Verified Dubai property owner database (1M+ owners) and high-intent Miami, California, Dubai & UK buyer leads. CRM-ready Excel, delivered in 10 minutes.";

// Pages set their own canonical, Open Graph and Twitter tags via pageMetadata()
// (lib/seo.ts). Nothing here may be page-specific: it is inherited by every
// route that does not override it, including 404s.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: siteDescription,
  applicationName: SITE_NAME,
  category: "Real Estate",
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
    siteName: SITE_NAME,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    apple: '/images/logo-mark.png',
  },
  // Search Console / Bing Webmaster ownership tokens, set in Vercel env vars.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Site-wide entities only. Each product page carries its own Product,
  // BreadcrumbList and FAQPage nodes and references the organization by @id.
  const orgSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: SITE_NAME,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/images/logo.png`,
        },
        email: CONTACT.email,
        telephone: CONTACT.phoneRaw,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: CONTACT.phoneRaw,
          email: CONTACT.email,
          availableLanguage: ["English"],
        },
        areaServed: MARKET_ORDER.map((key) => ({
          "@type": "AdministrativeArea",
          name: MARKETS[key].schemaRegion,
          addressCountry: MARKETS[key].schemaCountry,
        })),
        description:
          "Provider of the Dubai property owner database and verified, high-intent real estate buyer leads for Dubai, Miami, California and the UK.",
        knowsAbout: PRODUCTS.map((product) => product.name),
        sameAs: [CONTACT.telegram],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: SITE_NAME,
        description: siteDescription,
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "en",
      },
    ],
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${jakarta.variable} ${cinzel.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-ink text-ivory">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(orgSchema) }}
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
        <Toaster position="top-center" theme="light" closeButton richColors className="sonner-toast" />
        <Analytics />
      </body>
    </html>
  );
}
