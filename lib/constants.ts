export const CONTACT = {
  phone: "+44 75 46 084350",
  phoneRaw: "+447546084350",
  whatsapp: "+44 75 46 084350",
  whatsappRaw: "447546084350",
  email: "info@realestate-info.world",
  telegram: "https://t.me/realestateinfoworld",
} as const;

/* ------------------------------------------------------------------ */
/* Markets                                                             */
/* ------------------------------------------------------------------ */

export type MarketKey = "dubai" | "miami" | "california" | "uk";

export interface Market {
  key: MarketKey;
  /** Short name used inline in copy: "Dubai" */
  name: string;
  /** Long name used in headings: "Dubai, UAE" */
  label: string;
  /** schema.org areaServed: the city/region name */
  schemaRegion: string;
  /** schema.org areaServed: ISO 3166-1 alpha-2 country code */
  schemaCountry: string;
  /** WhatsApp line that handles enquiries for this market */
  whatsappRaw: string;
  /** Where record verification is cross-checked, used in the FAQ */
  verificationSource: string;
  /** Areas / communities shown on product pages and /products */
  areas: readonly string[];
  /** Trailing chip after the area list: "+ 200+ more communities" */
  areasMore: string;
  /** Sentence under the area list on a product page */
  areasNote: string;
}

export const MARKETS: Record<MarketKey, Market> = {
  dubai: {
    key: "dubai",
    name: "Dubai",
    label: "Dubai, UAE",
    schemaRegion: "Dubai",
    schemaCountry: "AE",
    whatsappRaw: "447546084350",
    verificationSource: "Dubai Land Department cross-checks",
    areas: [
      "Dubai Marina",
      "Downtown Dubai",
      "Business Bay",
      "Palm Jumeirah",
      "JVC (Jumeirah Village Circle)",
      "Dubai Hills Estate",
      "Arabian Ranches",
      "Emirates Hills",
    ],
    areasMore: "+ 200+ more communities",
    areasNote:
      "Target motivated buyers actively searching in Dubai Marina, Business Bay, Palm Jumeirah, Downtown Dubai, Dubai Hills Estate and other prime locations.",
  },
  miami: {
    key: "miami",
    name: "Miami",
    label: "Miami, FL",
    schemaRegion: "Miami-Dade County",
    schemaCountry: "US",
    whatsappRaw: "94774601847",
    verificationSource:
      "verification of the Google and social media campaigns each lead was captured from",
    areas: [
      "Brickell",
      "Edgewater",
      "Coconut Grove",
      "Sunny Isles Beach",
      "South Beach",
      "Coral Gables",
      "Key Biscayne",
      "Bal Harbour",
    ],
    areasMore: "+ Downtown Miami, Aventura, Wynwood & more",
    areasNote:
      "Target buyers actively searching in Brickell, Edgewater, Coconut Grove, Sunny Isles Beach, South Beach and other prime Miami-Dade neighborhoods.",
  },
  california: {
    key: "california",
    name: "California",
    label: "California, USA",
    schemaRegion: "California",
    schemaCountry: "US",
    whatsappRaw: "94774601847",
    verificationSource:
      "verification of the Google and social media campaigns each lead was captured from",
    areas: [
      "Beverly Hills",
      "Malibu",
      "Newport Beach",
      "La Jolla",
      "Santa Monica",
      "Palo Alto",
      "Laguna Beach",
      "Del Mar",
    ],
    areasMore: "+ Pasadena & more California markets",
    areasNote:
      "Target buyers actively searching homes and investment property in Beverly Hills, Malibu, Newport Beach, La Jolla, Santa Monica and other high-value California markets.",
  },
  uk: {
    key: "uk",
    name: "UK",
    label: "United Kingdom",
    schemaRegion: "United Kingdom",
    schemaCountry: "GB",
    whatsappRaw: "94774601847",
    verificationSource:
      "verification of the Rightmove, Zoopla, Google and social media campaigns each lead was captured from",
    areas: [
      "Mayfair, London",
      "Kensington, London",
      "Chelsea, London",
      "Notting Hill, London",
      "Westminster, London",
      "Hampstead, London",
      "Canary Wharf, London",
      "Edinburgh New Town",
    ],
    areasMore: "+ The Cotswolds, Manchester City Centre & Surrey",
    areasNote:
      "Target buyers actively searching prime London, Edinburgh, Manchester and country property in the Cotswolds and the Home Counties.",
  },
};

export const MARKET_ORDER: readonly MarketKey[] = ["dubai", "miami", "california", "uk"];

/* ------------------------------------------------------------------ */
/* Products                                                            */
/* ------------------------------------------------------------------ */

export type ProductType = "owner" | "buyer";

export interface SampleTable {
  columns: readonly string[];
  rows: readonly (readonly string[])[];
  /** Column index blurred until the visitor clicks "Reveal Details" */
  maskedColumn: number;
  /** Column index rendered with emphasis (mobile number / budget) */
  emphasisColumn: number;
}

/** Rows of the /products comparison table, in render order. */
export const COMPARISON_ROWS = [
  { key: "market", label: "Market" },
  { key: "bestFor", label: "Best For" },
  { key: "records", label: "Record Count" },
  { key: "accuracy", label: "Accuracy" },
  { key: "coverage", label: "Areas Covered" },
  { key: "dataType", label: "Data Type" },
  { key: "budgetInfo", label: "Budget Info" },
  { key: "format", label: "Format" },
  { key: "delivery", label: "Delivery" },
] as const;

export type ComparisonKey = (typeof COMPARISON_ROWS)[number]["key"];

export interface Product {
  /** URL segment under /products — never change once indexed. */
  slug: string;
  name: string;
  /** Compact name for CTA buttons, e.g. "Dubai Owner Database" */
  shortName: string;
  type: ProductType;
  market: MarketKey;
  version: string;
  price: number;
  /**
   * PayPal hosted button id. Omit for a dataset sold by enquiry rather than
   * instant checkout — the lead form then routes to WhatsApp follow-up.
   */
  paypalButtonId?: string;
  /** Shows the "Premium" badge on the product card */
  premium: boolean;
  shortDescription: string;
  description: string;
  features: readonly string[];
  /** Quick stats in the sticky purchase card, in render order */
  stats: readonly { label: string; value: string }[];
  comparison: Record<ComparisonKey, string>;
  sample: SampleTable;
  seo: {
    title: string;
    description: string;
    keywords: readonly string[];
  };
}

export const PRODUCTS: readonly Product[] = [
  {
    slug: "owner-database",
    name: "Dubai Property Owner Database",
    shortName: "Dubai Owner Database",
    type: "owner",
    market: "dubai",
    version: "August 2026",
    price: 300,
    paypalButtonId: "9389L2SZJ2U8Y",
    premium: false,
    shortDescription:
      "Verified Dubai property owners with direct contacts across prime communities.",
    description:
      "The most comprehensive Dubai Property Owner Database with 1,000,000+ verified owners and direct mobile numbers. Built specifically for Dubai real estate brokers, property consultants, and agencies sourcing off-market deals and generating owner leads in Dubai.",
    features: [
      "1,000,000+ verified Dubai property owners",
      "Direct updated mobile numbers",
      "200+ premium Dubai communities",
      "CRM-ready Excel format",
      "Optimized for WhatsApp & cold calling in Dubai",
      "10 Minutes (Instant Processing Available)",
    ],
    stats: [
      { label: "Records", value: "1,000,000+" },
      { label: "Accuracy", value: "99%" },
      { label: "Communities", value: "200+" },
      { label: "Format", value: "Excel (.xlsx)" },
    ],
    comparison: {
      market: "Dubai, UAE",
      bestFor: "Dubai owner outreach & off-market listings",
      records: "1,000,000+",
      accuracy: "99%",
      coverage: "200+ communities",
      dataType: "Verified Dubai Property Owners",
      budgetInfo: "No Financial Profile Data Included",
      format: "Excel (.xlsx)",
      delivery: "10 Minutes (Instant)",
    },
    sample: {
      columns: ["Name", "Community", "Property", "Mobile"],
      rows: [
        ["M. Al-Suwaidi", "Palm Jumeirah", "Villa", "+971 50 3•• ••45"],
        ["L. Thompson", "Emirates Hills", "Villa", "+971 55 8•• ••12"],
        ["R. Patel", "Downtown Dubai", "Apartment", "+971 52 4•• ••99"],
        ["S. Al-Maktoum", "Jumeirah Bay", "Penthouse", "+971 50 1•• ••73"],
      ],
      maskedColumn: 0,
      emphasisColumn: 3,
    },
    seo: {
      title:
        "Dubai Property Owner Database | 1M+ Verified Owners | August 2026",
      description:
        "Dubai Property Owner Database with 1,000,000+ verified owners and direct mobile numbers across 200+ Dubai communities. CRM-ready Excel for Dubai real estate brokers, consultants and property marketers. $300, delivered in 10 minutes.",
      keywords: [
        "Dubai Property Owner Database",
        "Dubai Property Owner Leads",
        "Dubai real estate database",
        "verified Dubai property owners",
        "Dubai off-market leads",
      ],
    },
  },
  {
    slug: "buyer-leads",
    name: "Dubai Property Buyer Leads",
    shortName: "Dubai Buyer Leads",
    type: "buyer",
    market: "dubai",
    version: "August 2026",
    price: 1200,
    paypalButtonId: "MBUBJ6QVQ2HHN",
    premium: true,
    shortDescription:
      "High-intent Dubai buyer leads with verified contacts and budgets.",
    description:
      "Premium Dubai Buyer Leads featuring 10,000+ high-intent prospects actively searching for property in Dubai. Includes verified contact details, budgets, and timelines. Ideal for Dubai real estate brokers and agencies focused on closing high-value transactions with motivated buyers.",
    features: [
      "10,000+ high-intent Dubai buyer leads",
      "Verified contact information & timelines",
      "Budget data included (AED 4.2M+ average)",
      "CRM-ready Excel format",
      "Mix of international & local Dubai prospects",
      "10 Minutes (Instant Processing Available)",
    ],
    stats: [
      { label: "Leads", value: "10,000+" },
      { label: "Accuracy", value: "99%" },
      { label: "Avg. Budget", value: "AED 4.2M+" },
      { label: "Format", value: "Excel (.xlsx)" },
    ],
    comparison: {
      market: "Dubai, UAE",
      bestFor: "High-value Dubai buyer conversions",
      records: "10,000+",
      accuracy: "99%",
      coverage: "City-wide",
      dataType: "High-Intent Dubai Buyers",
      budgetInfo: "Included",
      format: "Excel (.xlsx)",
      delivery: "10 Minutes (Instant)",
    },
    sample: {
      columns: ["Buyer", "Location", "Budget", "Interest"],
      rows: [
        ["H. Al-Farsi", "London, UK", "AED 8.5M", "Palm Jumeirah"],
        ["J. Morrison", "New York, USA", "AED 3.2M", "Downtown Dubai"],
        ["N. Kapoor", "Mumbai", "AED 6.9M", "Emirates Hills"],
        ["C. Weber", "Frankfurt", "AED 4.8M", "Business Bay"],
      ],
      maskedColumn: 0,
      emphasisColumn: 2,
    },
    seo: {
      title:
        "Dubai Property Buyer Leads | 10,000+ High-Intent Buyers | August 2026",
      description:
        "Dubai Property Buyer Leads — 10,000+ verified high-intent buyers actively looking in Dubai. Budgets, timelines & contacts included. Perfect for Dubai real estate brokers, consultants & agencies targeting serious purchasers in Dubai Marina, Downtown, Palm Jumeirah and more. $1,200.",
      keywords: [
        "Dubai Buyer Leads",
        "Dubai Property Buyer Leads",
        "Dubai real estate leads",
        "high-intent Dubai buyers",
        "Dubai property marketing data",
      ],
    },
  },
  {
    slug: "miami-buyer-leads",
    name: "Miami Real Estate Buyer Leads",
    shortName: "Miami Buyer Leads",
    type: "buyer",
    market: "miami",
    version: "September 2026",
    price: 1500,
    premium: true,
    shortDescription:
      "Real buyers actively searching Miami-Dade real estate right now — not recycled lists.",
    description:
      "Miami Real Estate Buyer Leads: 3,000+ verified buyers actively searching Miami-Dade property right now. These are not recycled lists — every lead is sourced fresh this month from Google and social media campaigns, and comes with a verified email address, phone number, buyer country, target area, property type, bedroom count, estimated budget in USD and purchase timeframe. Built for Miami real estate agents, brokers and agencies who want to stop chasing cold contacts and start talking to buyers who are already looking.",
    features: [
      "3,000+ high-intent Miami buyer leads",
      "99% verified data — sourced this month",
      "Estimated budget (USD) & purchase timeframe per lead",
      "Verified email address & phone number",
      "Brickell, Edgewater, Coconut Grove, Sunny Isles Beach & more",
      "CRM-ready Excel format",
      "10 Minutes (Instant Processing Available)",
    ],
    stats: [
      { label: "Leads", value: "3,000+" },
      { label: "Accuracy", value: "99%" },
      { label: "Budget Data", value: "Included (USD)" },
      { label: "Format", value: "Excel (.xlsx)" },
    ],
    comparison: {
      market: "Miami, FL",
      bestFor: "Miami-Dade buyer conversions",
      records: "3,000+",
      accuracy: "99%",
      coverage: "Miami-Dade County",
      dataType: "High-Intent Miami Buyers",
      budgetInfo: "Included (Est. Budget USD)",
      format: "Excel (.xlsx)",
      delivery: "10 Minutes (Instant)",
    },
    sample: {
      columns: ["Buyer", "Country", "Target Area", "Property Type", "Est. Budget (USD)", "Timeframe"],
      rows: [
        ["Shaikha Al K****", "United Arab Emirates", "South Beach", "Single Family Home", "$14,000,000", "Just Browsing"],
        ["Ryan D****", "Canada", "Brickell", "Townhouse", "$3,400,000", "Immediate (0-30 days)"],
        ["Daniel S****", "Canada", "Edgewater", "Single Family Home", "$7,100,000", "Immediate (0-30 days)"],
        ["James A*******", "United States", "Coconut Grove", "Townhouse", "$12,100,000", "1-3 Months"],
        ["Noora Al M*******", "United Arab Emirates", "Bal Harbour", "Luxury Condo", "$13,000,000", "Immediate (0-30 days)"],
      ],
      maskedColumn: 0,
      emphasisColumn: 4,
    },
    seo: {
      title:
        "Miami Real Estate Buyer Leads | 3,000+ Verified Buyers | September 2026",
      description:
        "Miami Buyer Leads — 3,000+ verified, high-intent buyers actively searching Miami-Dade real estate. Verified emails, phones, estimated budgets and purchase timeframes across Brickell, Edgewater, Coconut Grove, Sunny Isles Beach and more. CRM-ready Excel, $1,500.",
      keywords: [
        "Miami Buyer Leads",
        "Miami Real Estate Buyer Leads",
        "Miami real estate leads",
        "Miami-Dade buyer leads",
        "verified Miami property buyers",
        "Brickell real estate leads",
        "Miami property marketing data",
      ],
    },
  },
  {
    slug: "california-buyer-leads",
    name: "California Real Estate Buyer Leads",
    shortName: "California Buyer Leads",
    type: "buyer",
    market: "california",
    version: "September 2026",
    price: 1500,
    premium: true,
    shortDescription:
      "Real buyers actively searching homes & investment properties across California right now — not recycled lists.",
    description:
      "California Real Estate Buyer Leads: 3,000+ verified buyers actively searching homes and investment properties across California right now. These are not recycled lists — every lead is sourced fresh this month from Google and social media campaigns, and comes with a verified email address, phone number, buyer country, target area, property type, bedroom count, estimated budget in USD and purchase timeframe. Built for California real estate agents, brokers and agencies who want to stop chasing cold contacts and start talking to buyers who are already looking.",
    features: [
      "3,000+ high-intent California buyer leads",
      "99% verified data — sourced this month",
      "Estimated budget (USD) & purchase timeframe per lead",
      "Verified email address & phone number",
      "Beverly Hills, Malibu, Newport Beach, La Jolla & more",
      "CRM-ready Excel format",
      "10 Minutes (Instant Processing Available)",
    ],
    stats: [
      { label: "Leads", value: "3,000+" },
      { label: "Accuracy", value: "99%" },
      { label: "Budget Data", value: "Included (USD)" },
      { label: "Format", value: "Excel (.xlsx)" },
    ],
    comparison: {
      market: "California, USA",
      bestFor: "Statewide California buyer conversions",
      records: "3,000+",
      accuracy: "99%",
      coverage: "Statewide",
      dataType: "High-Intent California Buyers",
      budgetInfo: "Included (Est. Budget USD)",
      format: "Excel (.xlsx)",
      delivery: "10 Minutes (Instant)",
    },
    sample: {
      columns: ["Buyer", "Country", "Target Area", "Property Type", "Est. Budget (USD)", "Timeframe"],
      rows: [
        ["Patricia D****", "United States", "Palo Alto", "Single Family Home", "$3,900,000", "3-6 Months"],
        ["Michael S****", "United States", "La Jolla", "Villa", "$14,500,000", "3-6 Months"],
        ["Kevin A****", "United States", "Malibu", "Luxury Condo", "$7,500,000", "Immediate (0-30 days)"],
        ["Melissa W*****", "Canada", "Newport Beach", "Luxury Condo", "$14,300,000", "1-3 Months"],
        ["Freddie T*****", "United Kingdom", "Santa Monica", "Penthouse", "$6,000,000", "Immediate (0-30 days)"],
      ],
      maskedColumn: 0,
      emphasisColumn: 4,
    },
    seo: {
      title:
        "California Real Estate Buyer Leads | 3,000+ Verified Buyers | September 2026",
      description:
        "California Buyer Leads — 3,000+ verified, high-intent buyers actively searching homes and investment property across California. Verified emails, phones, estimated budgets and purchase timeframes across Beverly Hills, Malibu, Newport Beach, La Jolla and more. CRM-ready Excel, $1,500.",
      keywords: [
        "California Buyer Leads",
        "California Real Estate Buyer Leads",
        "California real estate leads",
        "verified California property buyers",
        "Beverly Hills real estate leads",
        "Malibu buyer leads",
        "California property marketing data",
      ],
    },
  },
  {
    slug: "uk-buyer-leads",
    name: "UK Real Estate Buyer Leads",
    shortName: "UK Buyer Leads",
    type: "buyer",
    market: "uk",
    version: "September 2026",
    price: 750,
    premium: true,
    shortDescription:
      "Real buyers actively searching UK property right now — not recycled lists.",
    description:
      "UK Real Estate Buyer Leads: 1,000+ verified buyers actively searching UK property right now. These are not recycled lists — every lead is sourced fresh this month from Rightmove and Zoopla enquiries plus Google and social media campaigns, and comes with a verified email address, mobile and alternate number, buyer nationality, preferred area, property type, bedroom count, estimated budget in GBP and purchase timeframe. Built for UK estate agents, brokers and agencies who want to stop chasing cold contacts and start talking to buyers who are already looking.",
    features: [
      "1,000+ high-intent UK buyer leads",
      "99% verified data — sourced this month",
      "Estimated budget (GBP) & purchase timeframe per lead",
      "Verified email, mobile & alternate number",
      "Mayfair, Kensington, Chelsea, Edinburgh New Town & more",
      "CRM-ready Excel format",
      "10 Minutes (Instant Processing Available)",
    ],
    stats: [
      { label: "Leads", value: "1,000+" },
      { label: "Accuracy", value: "99%" },
      { label: "Budget Data", value: "Included (GBP)" },
      { label: "Format", value: "Excel (.xlsx)" },
    ],
    comparison: {
      market: "United Kingdom",
      bestFor: "Prime London & UK country property conversions",
      records: "1,000+",
      accuracy: "99%",
      coverage: "UK-wide",
      dataType: "High-Intent UK Buyers",
      budgetInfo: "Included (Est. Budget GBP)",
      format: "Excel (.xlsx)",
      delivery: "10 Minutes (Instant)",
    },
    sample: {
      columns: ["Buyer", "Based In", "Preferred Area", "Property Type", "Est. Budget (GBP)", "Timeframe"],
      rows: [
        ["Lina B****", "Germany", "Chelsea, London", "Townhouse", "£3,900,000", "1-3 Months"],
        ["Leon S****", "Switzerland", "Kensington, London", "Townhouse", "£3,500,000", "1-3 Months"],
        ["Adam D****", "France", "Canary Wharf, London", "Penthouse", "£1,750,000", "3-6 Months"],
        ["Mia S****", "United Kingdom", "The Cotswolds", "Country Estate", "£1,500,000", "Just Browsing"],
        ["Sophia R****", "United Kingdom", "Hampstead, London", "Penthouse", "£800,000", "Immediate (0-30 days)"],
      ],
      maskedColumn: 0,
      emphasisColumn: 4,
    },
    seo: {
      title:
        "UK Real Estate Buyer Leads | 1,000+ Verified Buyers | September 2026",
      description:
        "UK Buyer Leads — 1,000+ verified, high-intent buyers actively searching UK property. Verified emails, phone numbers, estimated budgets in GBP and purchase timeframes across Mayfair, Kensington, Chelsea, Edinburgh New Town, The Cotswolds and more. CRM-ready Excel, $750.",
      keywords: [
        "UK Buyer Leads",
        "UK Real Estate Buyer Leads",
        "UK property buyer leads",
        "London property buyer leads",
        "prime central London leads",
        "UK estate agent leads",
      ],
    },
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

/**
 * The market a route belongs to. Product pages resolve to their own market;
 * everything else falls back to Dubai, the site's home market.
 */
export function getMarketForPath(pathname: string): Market {
  const prefix = "/products/";
  if (pathname.startsWith(prefix)) {
    const product = getProduct(pathname.slice(prefix.length).split("/")[0]);
    if (product) return MARKETS[product.market];
  }
  return MARKETS.dubai;
}

export function getMarket(product: Product): Market {
  return MARKETS[product.market];
}

/** Products grouped by market, in MARKET_ORDER. Empty markets are dropped. */
export function getProductsByMarket(): { market: Market; products: Product[] }[] {
  return MARKET_ORDER.map((key) => ({
    market: MARKETS[key],
    products: PRODUCTS.filter((p) => p.market === key),
  })).filter((group) => group.products.length > 0);
}

/* ------------------------------------------------------------------ */
/* Shared copy                                                         */
/* ------------------------------------------------------------------ */

export const TRUST_BADGES = [
  "99% Data Accuracy",
  "CRM Ready",
  "10 Minutes (Instant Processing)",
  "Market-Focused Data",
  "PayPal Secure",
] as const;

export const FAST_DELIVERY_BADGE =
  "⚡ Fastest Delivery in the Industry (10-Minute Instant Access Available)";

/** Headline numbers on the homepage. Update alongside PRODUCTS. */
export const HOMEPAGE_STATS = [
  { number: "1,000,000+", label: "Verified Property Owners" },
  { number: "17,000+", label: "High-Intent Buyer Leads" },
  { number: "99%", label: "Verified Accuracy" },
  { number: "4", label: "Markets Covered" },
] as const;

/**
 * FAQ copy tailored to the market of the product page it renders on, so each
 * product page carries market-relevant keywords rather than generic text.
 */
export function getFaqs(product: Product) {
  const market = MARKETS[product.market];
  const workflow =
    product.type === "owner"
      ? "owner outreach and off-market sourcing"
      : "buyer follow-ups and pipeline tracking";

  return [
    {
      question: "How is the data delivered?",
      answer: `Every ${market.name} real estate data product is delivered via secure download link within 10 minutes of payment confirmation (instant processing available). All files are clean, ready-to-use Microsoft Excel spreadsheets.`,
    },
    {
      question: "What format do you provide?",
      answer: `All data is delivered in professional .xlsx format with consistent columns that import cleanly into any CRM (HubSpot, Salesforce, Pipedrive, etc). Perfect for ${market.name} brokers managing ${workflow}.`,
    },
    {
      question: "Is the data verified?",
      answer: `Yes. Every record goes through validation against multiple sources including ${market.verificationSource}. We stand behind 99% accuracy on the ${product.name}.`,
    },
    {
      question: "Can I use this for marketing?",
      answer: `The data is provided for legitimate ${market.name} real estate business use including direct outreach, WhatsApp campaigns, cold calling, and property marketing. Redistribution or resale of the raw data is not permitted.`,
    },
    {
      question: "What if I'm not satisfied?",
      answer:
        "We offer a 7-day refund policy if the data quality does not meet our published standards. Contact us within 7 days of delivery.",
    },
  ] as const;
}

export const TESTIMONIALS = [
  {
    quote:
      "The Dubai Property Owner Database has been a game changer for our off-market sourcing. We are consistently reaching the actual decision makers across key communities.",
    name: "Rashed Al-Mansoori",
    role: "Principal, Al-Mansoori Realty",
  },
  {
    quote:
      "High quality Dubai buyer leads. These are real prospects with real budgets. We closed three transactions from the first list we purchased.",
    name: "Lina Haddad",
    role: "Director of Sales, Horizon Properties",
  },
  {
    quote:
      "Clean real estate data, fast delivery, and excellent support. This is now a core part of how our team generates new listings every month.",
    name: "James Whitaker",
    role: "Head of Growth, Apex Estates",
  },
];
