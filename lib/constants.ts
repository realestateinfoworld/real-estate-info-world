export const CONTACT = {
  phone: "+44 75 46 084350",
  phoneRaw: "+447546084350",
  whatsapp: "+44 75 46 084350",
  whatsappRaw: "447546084350",
  email: "info@realestate-info.world",
  telegram: "https://t.me/realestateinfoworld",
} as const;

export const PRODUCTS = {
  ownerDatabase: {
    id: "owner-database",
    slug: "owner-database",
    name: "Dubai Property Owner Database",
    version: "July 2026",
    price: 300,
    paypalButtonId: "9389L2SZJ2U8Y",
    shortDescription: "Verified Dubai property owners with direct contacts across prime communities.",
    description: "The most comprehensive Dubai Property Owner Database with 1,000,000+ verified owners and direct mobile numbers. Built specifically for Dubai real estate brokers, property consultants, and agencies sourcing off-market deals and generating owner leads in Dubai.",
    features: [
      "1,000,000+ verified Dubai property owners",
      "Direct updated mobile numbers",
      "200+ premium Dubai communities",
      "CRM-ready Excel format",
      "Optimized for WhatsApp & cold calling in Dubai",
      "10 Minutes (Instant Processing Available)",
    ],
    stats: {
      records: "1,000,000+",
      accuracy: "99%",
      communities: "200+",
    },
  },
  buyerLeads: {
    id: "buyer-leads",
    slug: "buyer-leads",
    name: "Dubai Property Buyer Leads",
    version: "July 2026",
    price: 1200,
    paypalButtonId: "MBUBJ6QVQ2HHN",
    shortDescription: "High-intent Dubai buyer leads with verified contacts and budgets.",
    description: "Premium Dubai Buyer Leads featuring 10,000+ high-intent prospects actively searching for property in Dubai. Includes verified contact details, budgets, and timelines. Ideal for Dubai real estate brokers and agencies focused on closing high-value transactions with motivated buyers.",
    features: [
      "10,000+ high-intent Dubai buyer leads",
      "Verified contact information & timelines",
      "Budget data included (AED 4.2M+ average)",
      "CRM-ready Excel format",
      "Mix of international & local Dubai prospects",
      "10 Minutes (Instant Processing Available)",
    ],
    stats: {
      leads: "10,000+",
      accuracy: "99%",
      avgBudget: "AED 4.2M+",
    },
  },
} as const;

export const TRUST_BADGES = [
  "99% Data Accuracy",
  "CRM Ready",
  "10 Minutes (Instant Processing)",
  "Dubai-Focused Data",
  "PayPal Secure",
] as const;

export const FAST_DELIVERY_BADGE = "⚡ Fastest Delivery in the Industry (10-Minute Instant Access Available)";

export const FAQS = [
  {
    question: "How is the data delivered?",
    answer: "Both Dubai real estate data products are delivered via secure download link within 10 minutes of payment confirmation (instant processing available). All files are clean, ready-to-use Microsoft Excel spreadsheets.",
  },
  {
    question: "What format do you provide?",
    answer: "All data is delivered in professional .xlsx format with consistent columns that import cleanly into any CRM (HubSpot, Salesforce, Pipedrive, etc). Perfect for Dubai brokers managing owner outreach and buyer follow-ups.",
  },
  {
    question: "Is the data verified?",
    answer: "Yes. Every Dubai property owner and buyer record goes through validation against multiple sources including Dubai Land Department cross-checks. We stand behind 99% accuracy on the Dubai Property Owner Database and Dubai Buyer Leads.",
  },
  {
    question: "Can I use this for marketing?",
    answer: "The data is provided for legitimate Dubai real estate business use including direct outreach, WhatsApp campaigns, cold calling, and property marketing in Dubai. Redistribution or resale of the raw data is not permitted.",
  },
  {
    question: "What if I'm not satisfied?",
    answer: "We offer a 7-day refund policy if the data quality does not meet our published standards. Contact us within 7 days of delivery.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote: "The Dubai Property Owner Database has been a game changer for our off-market sourcing. We are consistently reaching the actual decision makers across key communities.",
    name: "Rashed Al-Mansoori",
    role: "Principal, Al-Mansoori Realty",
  },
  {
    quote: "High quality Dubai buyer leads. These are real prospects with real budgets. We closed three transactions from the first list we purchased.",
    name: "Lina Haddad",
    role: "Director of Sales, Horizon Properties",
  },
  {
    quote: "Clean Dubai real estate data, fast delivery, and excellent support. This is now a core part of how our team generates new listings every month in Dubai.",
    name: "James Whitaker",
    role: "Head of Growth, Apex Estates",
  },
];

export const SAMPLE_OWNER_DATA = [
  { name: "M. Al-Suwaidi", community: "Palm Jumeirah", type: "Villa", mobile: "+971 50 3•• ••45" },
  { name: "L. Thompson", community: "Emirates Hills", type: "Villa", mobile: "+971 55 8•• ••12" },
  { name: "R. Patel", community: "Downtown Dubai", type: "Apartment", mobile: "+971 52 4•• ••99" },
  { name: "S. Al-Maktoum", community: "Jumeirah Bay", type: "Penthouse", mobile: "+971 50 1•• ••73" },
];

export const SAMPLE_BUYER_DATA = [
  { name: "H. Al-Farsi", location: "London, UK", budget: "AED 8.5M", interest: "Palm Jumeirah" },
  { name: "J. Morrison", location: "New York, USA", budget: "AED 3.2M", interest: "Downtown Dubai" },
  { name: "N. Kapoor", location: "Mumbai", budget: "AED 6.9M", interest: "Emirates Hills" },
  { name: "C. Weber", location: "Frankfurt", budget: "AED 4.8M", interest: "Business Bay" },
];

// Key Dubai areas & communities covered in our Dubai Property Owner Database and Dubai Buyer Leads.
// Used for "Areas Covered" section targeting Dubai real estate professionals.
export const AREAS_COVERED = [
  "Dubai Marina",
  "Downtown Dubai",
  "Business Bay",
  "Palm Jumeirah",
  "JVC (Jumeirah Village Circle)",
  "Dubai Hills Estate",
  "Arabian Ranches",
  "Emirates Hills",
] as const;
