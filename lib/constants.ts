export const CONTACT = {
  phone: "+44 75 46 084350",
  phoneRaw: "+447546084350",
  whatsapp: "+44 75 46 084350",
  whatsappRaw: "447546084350",
  email: "info@realestate-info.world",
} as const;

export const PRODUCTS = {
  ownerDatabase: {
    id: "owner-database",
    slug: "owner-database",
    name: "Dubai Property Owner Database",
    version: "May 2026",
    price: 250,
    paypalButtonId: "9389L2SZJ2U8Y",
    shortDescription: "Verified property owners across Dubai's most desirable communities.",
    description: "The most comprehensive database of verified Dubai property owners with direct mobile numbers. Built for brokers and teams who need to reach actual owners quickly and professionally.",
    features: [
      "1,000,000+ verified property owners",
      "Updated mobile numbers",
      "85+ premium communities",
      "CRM-ready Excel format",
      "WhatsApp & cold calling optimized",
      "10 Minutes (Instant Processing Available)",
    ],
    stats: {
      records: "1,000,000+",
      accuracy: "99%",
      communities: "85+",
    },
  },
  buyerLeads: {
    id: "buyer-leads",
    slug: "buyer-leads",
    name: "Dubai Property Buyer Leads",
    version: "May 2026",
    price: 1200,
    paypalButtonId: "MBUBJ6QVQ2HHN",
    shortDescription: "High-intent verified buyers actively looking for property in Dubai.",
    description: "Premium high-intent buyer leads with verified contact details and demonstrated purchasing power. Ideal for agents focused on closing high-value transactions.",
    features: [
      "10,000+ high-intent buyer leads",
      "Verified contact information",
      "Budget & timeline data included",
      "CRM-ready Excel format",
      "International & local prospects",
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
  "Monthly Updates",
  "PayPal Secure",
] as const;

export const FAST_DELIVERY_BADGE = "⚡ Fastest Delivery in the Industry (10-Minute Instant Access Available)";

export const FAQS = [
  {
    question: "How is the data delivered?",
    answer: "Both products are delivered via secure download link within 10 minutes of payment confirmation (instant processing available). All files are clean, ready-to-use Microsoft Excel spreadsheets.",
  },
  {
    question: "What format do you provide?",
    answer: "All data is delivered in professional .xlsx format with consistent columns that import cleanly into any CRM (HubSpot, Salesforce, Pipedrive, etc).",
  },
  {
    question: "Is the data verified?",
    answer: "Yes. Every record goes through validation against multiple sources. We stand behind 99% accuracy on both the Owner Database and Buyer Leads.",
  },
  {
    question: "Can I use this for marketing?",
    answer: "The data is provided for legitimate real estate business use including direct outreach, WhatsApp campaigns, and cold calling. Redistribution or resale of the raw data is not permitted.",
  },
  {
    question: "What if I'm not satisfied?",
    answer: "We offer a 7-day refund policy if the data quality does not meet our published standards. Contact us within 7 days of delivery.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote: "The owner database has been a game changer for our off-market sourcing. We are consistently reaching the actual decision makers.",
    name: "Rashed Al-Mansoori",
    role: "Principal, Al-Mansoori Realty",
  },
  {
    quote: "High quality buyer leads. These are real prospects with real budgets. We closed three transactions from the first list we purchased.",
    name: "Lina Haddad",
    role: "Director of Sales, Horizon Properties",
  },
  {
    quote: "Clean data, fast delivery, and excellent support. This is now a core part of how our team generates new listings every month.",
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
  { name: "J. Morrison", location: "New York, USA", budget: "AED 3.2M", interest: "Downtown" },
  { name: "N. Kapoor", location: "Mumbai", budget: "AED 6.9M", interest: "Emirates Hills" },
  { name: "C. Weber", location: "Frankfurt", budget: "AED 4.8M", interest: "Business Bay" },
];
