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
    /** Full page title, used as-is. Keep it ≤ 60 chars with the main keyword first. */
    title: string;
    /** Meta description. Keep it to 140–160 chars. */
    description: string;
    keywords: readonly string[];
  };
  /** Long-form copy under the product details, one <h2> per section. */
  guide?: readonly { heading: string; paragraphs: readonly string[] }[];
  /** Product-specific FAQs, shown ahead of the shared ones from getFaqs. */
  faqs?: readonly Faq[];
}

export interface Faq {
  question: string;
  answer: string;
}

export const PRODUCTS: readonly Product[] = [
  {
    slug: "owner-database",
    name: "Dubai Property Owner Database",
    shortName: "Dubai Owner Database",
    type: "owner",
    market: "dubai",
    version: "September 2026",
    price: 300,
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
      title: "Dubai Property Owner Database 2026 | 1M+ Verified Owners",
      description:
        "Dubai property owner database: 1,000,000+ verified owners with direct mobile numbers across 200+ communities. CRM-ready Excel, $300, delivered in 10 minutes.",
      keywords: [
        "Dubai Property Owner Database",
        "Dubai Property Owner Leads",
        "Dubai property owners list",
        "Dubai property owner contact numbers",
        "Dubai landlord database",
        "Dubai real estate database",
        "verified Dubai property owners",
        "Dubai off-market leads",
      ],
    },
    guide: [
      {
        heading: "What is the Dubai Property Owner Database?",
        paragraphs: [
          "The Dubai Property Owner Database is a single Excel file listing more than 1,000,000 verified owners of property in Dubai. Every record gives you the owner's name, the community the property sits in, the property type (apartment, villa, townhouse or penthouse) and a direct mobile number — the four things you need to start a listing conversation.",
          "Records are cross-checked against Dubai Land Department data and the whole file is refreshed every month, so you are calling current owners rather than people who sold two years ago. The release date is shown at the top of this page.",
        ],
      },
      {
        heading: "Who uses Dubai property owner data",
        paragraphs: [
          "Dubai real estate brokers use the database to win exclusive listings and source off-market stock before it reaches Property Finder or Bayut. Leasing teams use it to reach landlords directly, property management companies use it to sign new units, and investment consultants use it to find owners open to a private sale.",
          "If you work one or two communities, filter the file down to your patch — Dubai Marina, JVC, Business Bay or Palm Jumeirah, for example — and you have a complete owner list for your farm area in seconds.",
        ],
      },
      {
        heading: "How brokers turn owner data into listings",
        paragraphs: [
          "Import the .xlsx into your CRM (HubSpot, Salesforce, Pipedrive or any Dubai real estate CRM) and segment by community and property type. Owners of the same building or villa cluster respond well to a specific message: a recent sale price in their community, a buyer you are holding for their unit type, or a rental valuation.",
          "Most teams open with a short WhatsApp introduction, follow up by phone and log every outcome in the CRM so no owner is contacted twice by different agents. Follow the UAE's telemarketing rules on permitted calling hours and honour any Do Not Call opt-outs.",
        ],
      },
      {
        heading: "Dubai communities covered",
        paragraphs: [
          "The database covers 200+ Dubai communities, including Dubai Marina, Downtown Dubai, Business Bay, Palm Jumeirah, Jumeirah Village Circle (JVC), Dubai Hills Estate, Arabian Ranches, Emirates Hills and Jumeirah Bay, from high-rise apartments to prime villas.",
        ],
      },
      {
        heading: "Owner database or buyer leads?",
        paragraphs: [
          "Choose the owner database when you need supply — listings, landlords and off-market deals. Choose Dubai Property Buyer Leads when you already have stock and need demand: 10,000+ buyers actively searching in Dubai, with budgets and timelines. Many agencies run both, matching new listings from the owner file to buyers from the leads file.",
        ],
      },
    ],
    faqs: [
      {
        question: "How many owners are in the Dubai Property Owner Database?",
        answer:
          "More than 1,000,000 verified Dubai property owners across 200+ communities, each with a direct mobile number, delivered as one CRM-ready Excel file.",
      },
      {
        question: "How much does the Dubai owner database cost?",
        answer:
          "$300 USD as a one-time payment for the full file — no subscription. It is delivered within 10 minutes of payment confirmation.",
      },
      {
        question: "Which Dubai communities does the owner data cover?",
        answer:
          "200+ communities including Dubai Marina, Downtown Dubai, Business Bay, Palm Jumeirah, JVC, Dubai Hills Estate, Arabian Ranches and Emirates Hills. Every record lists its community, so you can filter to your area in Excel or your CRM.",
      },
      {
        question: "How often is the Dubai owner data updated?",
        answer:
          "The database is refreshed every month and cross-checked against Dubai Land Department data. The current release date is shown on this page.",
      },
    ],
  },
  {
    slug: "buyer-leads",
    name: "Dubai Property Buyer Leads",
    shortName: "Dubai Buyer Leads",
    type: "buyer",
    market: "dubai",
    version: "October 2026",
    price: 1200,
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
      title: "Dubai Property Buyer Leads 2026 | 10,000+ Verified Buyers",
      description:
        "10,000+ verified Dubai property buyer leads with budgets, timelines and contacts. For brokers selling in Dubai Marina, Downtown & Palm Jumeirah. $1,200, CRM-ready.",
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
    version: "October 2026",
    price: 1500,
    premium: true,
    shortDescription:
      "Real buyers actively searching Miami-Dade real estate right now — not recycled lists.",
    description:
      "Miami Real Estate Buyer Leads: 1,500+ verified buyers actively searching Miami-Dade property right now. These are not recycled lists — every lead is sourced fresh this month from Google and social media campaigns, and comes with a verified email address, phone number, buyer country, target area, property type, bedroom count, estimated budget in USD and purchase timeframe. Built for Miami real estate agents, brokers and agencies who want to stop chasing cold contacts and start talking to buyers who are already looking.",
    features: [
      "1,500+ high-intent Miami buyer leads",
      "99% verified data — sourced this month",
      "Estimated budget (USD) & purchase timeframe per lead",
      "Verified email address & phone number",
      "Brickell, Edgewater, Coconut Grove, Sunny Isles Beach & more",
      "CRM-ready Excel format",
      "10 Minutes (Instant Processing Available)",
    ],
    stats: [
      { label: "Leads", value: "1,500+" },
      { label: "Accuracy", value: "99%" },
      { label: "Budget Data", value: "Included (USD)" },
      { label: "Format", value: "Excel (.xlsx)" },
    ],
    comparison: {
      market: "Miami, FL",
      bestFor: "Miami-Dade buyer conversions",
      records: "1,500+",
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
      title: "Miami Buyer Leads 2026 | 1,500+ Verified Real Estate Buyers",
      description:
        "1,500+ verified Miami real estate buyer leads with email, phone, budget & timeframe. Brickell, Edgewater, Sunny Isles & more. Sourced this month. CRM-ready Excel.",
      keywords: [
        "Miami Buyer Leads",
        "Miami Real Estate Buyer Leads",
        "Miami real estate leads",
        "Miami-Dade buyer leads",
        "Miami luxury buyer leads",
        "Miami realtor leads",
        "Florida real estate buyer leads",
        "verified Miami property buyers",
        "Brickell real estate leads",
      ],
    },
    guide: [
      {
        heading: "What's in the Miami buyer leads file",
        paragraphs: [
          "Each of the 1,500+ Miami real estate buyer leads comes with the buyer's name, verified email address, phone number, country, target neighborhood, property type, bedroom count, estimated budget in USD and purchase timeframe — from \"Immediate (0–30 days)\" to \"Just browsing\". That is enough to qualify a buyer before you ever pick up the phone.",
          "The file is a clean Excel spreadsheet with consistent columns, so it imports straight into Follow Up Boss, kvCORE, HubSpot, Salesforce or whatever CRM your Miami team runs on.",
        ],
      },
      {
        heading: "Fresh Miami leads, not recycled lists",
        paragraphs: [
          "Every lead is sourced this month from Google and social media campaigns targeting people searching for Miami-Dade property. Leads are verified against the campaign they came from, which is why we publish a 99% accuracy standard and back it with a 7-day refund policy.",
        ],
      },
      {
        heading: "Miami neighborhoods buyers are searching",
        paragraphs: [
          "Buyers in the file are looking across Brickell, Edgewater, Coconut Grove, Sunny Isles Beach, South Beach, Coral Gables, Key Biscayne, Bal Harbour, Downtown Miami, Aventura and Wynwood — from luxury condos and penthouses to single-family homes and townhouses. Both US and international buyers are included.",
        ],
      },
      {
        heading: "How Miami agents convert these buyer leads",
        paragraphs: [
          "Start with the \"Immediate\" and \"1–3 months\" buyers, then match each one to listings by neighborhood, property type and budget. Speed matters: contact new leads the same day by email and phone, and keep longer-timeframe buyers in a drip campaign so you are the agent they remember when they are ready.",
          "Before calling or texting, screen numbers against the National Do Not Call Registry and follow TCPA rules for calls and SMS.",
        ],
      },
      {
        heading: "Who Miami buyer leads are for",
        paragraphs: [
          "Miami realtors, brokerages, luxury condo and pre-construction sales teams, and relocation specialists who would rather talk to buyers who are already looking than chase cold contacts. At $1,500 for 1,500+ leads, each lead costs about $1 — a fraction of a typical pay-per-lead portal.",
        ],
      },
    ],
    faqs: [
      {
        question: "What are Miami buyer leads?",
        answer:
          "Contact details for people actively searching to buy property in Miami-Dade right now, sourced this month from Google and social media campaigns. Each lead includes email, phone, target area, property type, budget in USD and purchase timeframe.",
      },
      {
        question: "How much do Miami real estate buyer leads cost?",
        answer:
          "$1,500 USD one-time for 1,500+ verified Miami buyer leads — about $1 per lead, with no subscription or per-lead fees.",
      },
      {
        question: "Which Miami areas are the buyers interested in?",
        answer:
          "Brickell, Edgewater, Coconut Grove, Sunny Isles Beach, South Beach, Coral Gables, Key Biscayne, Bal Harbour, Downtown Miami, Aventura, Wynwood and more across Miami-Dade County.",
      },
      {
        question: "Can I filter Miami leads by budget or timeframe?",
        answer:
          "Yes. Budget, timeframe, area, property type and bedrooms are separate Excel columns, so you can sort and filter in seconds or segment them after importing into your CRM.",
      },
    ],
  },
  {
    slug: "california-buyer-leads",
    name: "California Real Estate Buyer Leads",
    shortName: "California Buyer Leads",
    type: "buyer",
    market: "california",
    version: "October 2026",
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
      title: "California Buyer Leads 2026 | 3,000+ Verified Home Buyers",
      description:
        "3,000+ verified California real estate buyer leads with email, phone, budget & timeframe. Beverly Hills, Malibu, Newport Beach, La Jolla & more. CRM-ready Excel.",
      keywords: [
        "California Buyer Leads",
        "California Real Estate Buyer Leads",
        "California real estate leads",
        "California home buyer leads",
        "California realtor leads",
        "Los Angeles buyer leads",
        "Beverly Hills real estate leads",
        "Malibu buyer leads",
        "verified California property buyers",
      ],
    },
    guide: [
      {
        heading: "What's in the California buyer leads file",
        paragraphs: [
          "Each of the 3,000+ California real estate buyer leads includes the buyer's name, verified email address, phone number, country, target city, property type, bedroom count, estimated budget in USD and purchase timeframe. You know who is ready now and who is six months out before you make the first call.",
          "Everything arrives in one CRM-ready Excel file with consistent columns, ready to import into Follow Up Boss, kvCORE, HubSpot, Salesforce or any other real estate CRM.",
        ],
      },
      {
        heading: "Fresh California leads, sourced this month",
        paragraphs: [
          "These are not recycled lists. Every lead is sourced this month from Google and social media campaigns targeting people searching for homes and investment property in California, then verified against the campaign it came from. Accuracy is held to a 99% standard and covered by our 7-day refund policy.",
        ],
      },
      {
        heading: "California cities and coastal markets covered",
        paragraphs: [
          "The file is statewide. Buyers are searching in Southern California — Beverly Hills, Malibu, Santa Monica, Pasadena, Newport Beach, Laguna Beach, La Jolla and Del Mar — and in Northern California markets such as Palo Alto. Property types range from single-family homes and villas to luxury condos and penthouses.",
        ],
      },
      {
        heading: "How California agents convert these buyer leads",
        paragraphs: [
          "Filter by city and budget to hand each agent the buyers who fit their listings, and call the \"Immediate\" buyers first. Pair a same-day phone call with a personal email that references the buyer's target city and property type, then nurture longer-timeframe buyers with new listings until they are ready.",
          "Screen phone numbers against the National Do Not Call Registry and follow TCPA rules before calling or texting, and handle the data in line with California privacy law (CCPA/CPRA).",
        ],
      },
      {
        heading: "Who California buyer leads are for",
        paragraphs: [
          "California realtors, brokerages, luxury and coastal property specialists, new-development sales teams and relocation agents. At $1,500 for 3,000+ leads, each lead costs about 50 cents — far below what most California agents pay per lead on portals and paid ads.",
        ],
      },
    ],
    faqs: [
      {
        question: "What are California buyer leads?",
        answer:
          "Contact details for people actively searching to buy homes or investment property in California, sourced this month from Google and social media campaigns. Each lead includes email, phone, target city, property type, budget in USD and purchase timeframe.",
      },
      {
        question: "How much do California real estate buyer leads cost?",
        answer:
          "$1,500 USD one-time for 3,000+ verified California buyer leads — about $0.50 per lead, with no subscription or per-lead fees.",
      },
      {
        question: "Which California cities are covered?",
        answer:
          "Leads are statewide, including Beverly Hills, Malibu, Santa Monica, Pasadena, Newport Beach, Laguna Beach, La Jolla, Del Mar and Palo Alto.",
      },
      {
        question: "Can I filter California leads by city or budget?",
        answer:
          "Yes. Target city, budget, timeframe, property type and bedrooms are separate Excel columns, so you can sort and filter instantly or segment them in your CRM.",
      },
    ],
  },
  {
    slug: "uk-buyer-leads",
    name: "UK Real Estate Buyer Leads",
    shortName: "UK Buyer Leads",
    type: "buyer",
    market: "uk",
    version: "October 2026",
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
      title: "UK Property Buyer Leads 2026 | 1,000+ Verified Buyers",
      description:
        "1,000+ verified UK property buyer leads with email, mobile, GBP budget & timeframe. Mayfair, Kensington, Chelsea, the Cotswolds & more. CRM-ready Excel, $750.",
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
  "Direct WhatsApp Support",
] as const;

export const FAST_DELIVERY_BADGE =
  "⚡ Fastest Delivery in the Industry (10-Minute Instant Access Available)";

/** Newest release across PRODUCTS, for site-wide copy. Update alongside PRODUCTS. */
export const LATEST_RELEASE = "October 2026";

/** Headline numbers on the homepage. Update alongside PRODUCTS. */
export const HOMEPAGE_STATS = [
  { number: "1,000,000+", label: "Verified Property Owners" },
  { number: "15,500+", label: "High-Intent Buyer Leads" },
  { number: "99%", label: "Verified Accuracy" },
  { number: "4", label: "Markets Covered" },
] as const;

/**
 * FAQ copy tailored to the market of the product page it renders on, so each
 * product page carries market-relevant keywords rather than generic text.
 */
export function getFaqs(product: Product): Faq[] {
  const market = MARKETS[product.market];
  const workflow =
    product.type === "owner"
      ? "owner outreach and off-market sourcing"
      : "buyer follow-ups and pipeline tracking";

  return [
    ...(product.faqs ?? []),
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
  ];
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

/** "Dubai, Miami, California and UK" — every market that has a product. */
export function formatMarketList(): string {
  const names = getProductsByMarket().map((g) => g.market.name);
  return names.length > 1
    ? `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`
    : names[0];
}

/** How a purchase works, shown on the homepage and every product page. */
export const PURCHASE_STEPS = [
  {
    title: "Choose your dataset",
    body: "Pick the market and data type you need — owner database or high-intent buyer leads.",
  },
  {
    title: "Get your payment link",
    body: "Enter your name and email. We send a secure payment link straight to you on WhatsApp.",
  },
  {
    title: "Receive your Excel file",
    body: "Your CRM-ready .xlsx file is delivered within 10 minutes of payment confirmation.",
  },
] as const;
