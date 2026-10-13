import type { Faq } from "@/lib/constants";

/**
 * Long-form guides under /guides. Each one targets an informational search
 * ("how to find…") and links to the dataset that answers it.
 *
 * Paragraphs and bullets support inline links as [text](/path).
 */
export interface Guide {
  /** URL segment under /guides — never change once indexed. */
  slug: string;
  /** On-page H1. */
  title: string;
  seo: {
    /** Full page title, used as-is. Keep it ≤ 60 chars with the main keyword first. */
    title: string;
    /** Meta description. Keep it to 140–160 chars. */
    description: string;
    keywords: readonly string[];
  };
  /** Short summary for cards on /guides and the page header. */
  excerpt: string;
  /** Product the guide sells, by slug. */
  productSlug: string;
  /** ISO dates for Article schema and the byline. */
  published: string;
  updated: string;
  readingMinutes: number;
  sections: readonly {
    heading: string;
    paragraphs: readonly string[];
    bullets?: readonly string[];
  }[];
  faqs: readonly Faq[];
}

export const GUIDES: readonly Guide[] = [
  {
    slug: "how-to-find-property-owners-in-dubai",
    title: "How to Find Property Owners in Dubai",
    seo: {
      title: "How to Find Property Owners in Dubai (2026 Broker Guide)",
      description:
        "Seven proven ways Dubai brokers find property owners and win listings in 2026 — from community farming to owner databases — plus the rules to follow.",
      keywords: [
        "how to find property owners in Dubai",
        "find property owner Dubai",
        "Dubai property owner contact",
        "Dubai property owners list",
        "how to get listings in Dubai",
        "Dubai off-market property",
      ],
    },
    excerpt:
      "Seven ways Dubai brokers reach property owners and win listings — from farming a community to working a verified owner database — and the rules to follow when you call.",
    productSlug: "owner-database",
    published: "2026-10-13",
    updated: "2026-10-13",
    readingMinutes: 8,
    sections: [
      {
        heading: "Why owners matter more than buyers in Dubai",
        paragraphs: [
          "In Dubai, the broker who controls the listing controls the deal. Buyers are plentiful in a rising market; good stock is not. Agents who can reach owners directly — before a unit is listed on the portals — get exclusive mandates, off-market inventory and the leverage that comes with both.",
          "The problem is that Dubai owner contact details are not public. The Dubai Land Department (DLD) records who owns what, but it does not publish owners' phone numbers, so brokers rely on a mix of the methods below.",
        ],
      },
      {
        heading: "1. Farm one or two communities",
        paragraphs: [
          "Pick a community you can know better than anyone — Dubai Marina, JVC, Business Bay, Dubai Hills Estate — and become the name owners associate with it. Track every transaction and rental there, publish monthly price updates on social media and WhatsApp, and be the first to tell owners what their neighbour just sold for.",
          "Farming is slow to start but compounds: owners who see your market updates for six months call you when they decide to sell.",
        ],
      },
      {
        heading: "2. Work \"by owner\" portal listings",
        paragraphs: [
          "Property Finder, Bayut and Dubizzle all carry listings posted directly by owners. These sellers have already decided to sell or let, so a polite call offering a valuation, a buyer you are holding or wider marketing often turns into a Form A listing agreement.",
        ],
      },
      {
        heading: "3. Build relationships with building and community managers",
        paragraphs: [
          "Owners associations, building managers and concierge teams hear first when owners are relocating, renovating or unhappy with a tenant. Many towers restrict leaflets and lobby notices, so the relationship — not the flyer — is what gets you introduced.",
        ],
      },
      {
        heading: "4. Use your past clients and sphere",
        paragraphs: [
          "Every buyer you helped two to five years ago is now an owner who may want to sell, upgrade or let. Keep them in your CRM, send them an annual valuation and ask for referrals from their building.",
        ],
      },
      {
        heading: "5. Run owner-focused ads",
        paragraphs: [
          "Google and Meta ads offering a free valuation (\"What is your Dubai Marina apartment worth in 2026?\") generate inbound owner enquiries. Remember that property advertising in Dubai requires a valid Trakheesi permit, and that valuation-led campaigns convert best when they are community-specific.",
        ],
      },
      {
        heading: "6. Network with developers and handover teams",
        paragraphs: [
          "When an off-plan project hands over, hundreds of new owners need to decide whether to move in, rent or resell. Developer relationships and handover events put you in front of them at exactly the right moment.",
        ],
      },
      {
        heading: "7. Work a verified owner database",
        paragraphs: [
          "The fastest way to reach owners at scale is a verified owner database: one file listing owners by community and property type, with direct mobile numbers. Instead of waiting months for farming to pay off, you can filter to your community today and start calling.",
          "Our [Dubai Property Owner Database](/products/owner-database) covers 1,000,000+ verified owners across 200+ communities, cross-checked against Dubai Land Department data and refreshed monthly. It costs $300 as a one-time payment and is delivered as a CRM-ready Excel file within 10 minutes.",
        ],
      },
      {
        heading: "How to approach a Dubai property owner",
        paragraphs: [
          "Whichever method you use, the first message decides whether the owner talks to you. What works:",
        ],
        bullets: [
          "Lead with something specific to their property: a recent sale in their building, a rental valuation or a buyer you are holding for their unit type.",
          "Open on WhatsApp with a short, personal message, then follow up by phone. Long templated messages get ignored.",
          "Log every contact in your CRM so the same owner is not called by three agents from your office.",
          "Once an owner agrees to sell, sign a RERA Form A listing agreement and get a Trakheesi permit before advertising.",
        ],
      },
      {
        heading: "Rules to follow when contacting owners",
        paragraphs: [
          "Brokers contacting owners must hold a valid RERA broker licence. The UAE's 2024 telemarketing rules limit marketing calls to 9am–6pm, require calls from numbers registered to the company and require you to respect the Do Not Call Registry (DNCR). Personal data should be handled in line with the UAE Personal Data Protection Law. Following these rules is not just compliance — owners respond better to agents who call at reasonable hours and stop when asked.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I find out who owns a property in Dubai?",
        answer:
          "Ownership is recorded by the Dubai Land Department, but owners' contact details are not published. Brokers reach owners through community farming, portal \"by owner\" listings, referrals, building managers and verified owner databases.",
      },
      {
        question: "What is the fastest way to contact Dubai property owners?",
        answer:
          "A verified owner database. Filter it to your community and property type and you can start calling owners the same day instead of waiting for farming or ads to produce enquiries.",
      },
      {
        question: "Is it legal to cold call property owners in Dubai?",
        answer:
          "Licensed brokers can contact owners, but UAE telemarketing rules apply: call between 9am and 6pm from a company-registered number and respect Do Not Call Registry opt-outs.",
      },
    ],
  },
  {
    slug: "miami-real-estate-buyer-leads",
    title: "How to Get Real Estate Buyer Leads in Miami",
    seo: {
      title: "How to Get Real Estate Buyer Leads in Miami (2026 Guide)",
      description:
        "Where Miami agents find serious buyers in 2026 — portals, ads, international buyers, pre-construction and buyer lead lists — and how to convert them.",
      keywords: [
        "Miami real estate buyer leads",
        "how to get buyer leads in Miami",
        "Miami real estate leads",
        "Miami realtor leads",
        "Miami luxury buyer leads",
        "Florida real estate leads",
      ],
    },
    excerpt:
      "Where Miami agents find buyers who are ready to transact — portals, paid ads, international buyers and buyer lead lists — and how to convert them.",
    productSlug: "miami-buyer-leads",
    published: "2026-10-13",
    updated: "2026-10-13",
    readingMinutes: 7,
    sections: [
      {
        heading: "What makes Miami buyer leads different",
        paragraphs: [
          "Miami is one of the most international property markets in the United States. A large share of buyers are relocating from other states or buying from abroad, and many are searching for luxury condos in Brickell, Edgewater, Sunny Isles Beach or South Beach rather than a family home down the road. That changes where buyers come from and how you reach them: they search online, often from another time zone, and expect a fast, informed reply.",
        ],
      },
      {
        heading: "1. Portal leads",
        paragraphs: [
          "Zillow, Realtor.com and Homes.com remain the biggest sources of buyer enquiries. They work, but leads are shared or sold per enquiry, competition is fierce and costs rise quickly in premium zip codes. Speed to lead is everything: the agent who replies first usually wins the conversation.",
        ],
      },
      {
        heading: "2. Google and social media ads",
        paragraphs: [
          "Running your own Google and Meta campaigns for searches like \"Brickell condos for sale\" gives you leads nobody else has. The trade-off is time and budget: you need landing pages, ad spend and someone to manage the campaigns before the first lead arrives.",
        ],
      },
      {
        heading: "3. International buyer networks",
        paragraphs: [
          "Relationships with agents in Canada, Latin America, Europe and the Middle East send referral buyers to Miami. These buyers often purchase higher-value property and pay cash, but the network takes years to build.",
        ],
      },
      {
        heading: "4. Pre-construction and developer sales",
        paragraphs: [
          "Miami's pre-construction condo market attracts investors who buy early in a project's launch. Developer launch events and broker programmes are an excellent source of buyers who are already committed to the Miami market.",
        ],
      },
      {
        heading: "5. Open houses and your sphere",
        paragraphs: [
          "Open houses still produce local buyers, especially for single-family homes in Coral Gables or Coconut Grove. Past clients and referrals remain the highest-converting source of all — but they rarely scale fast enough on their own.",
        ],
      },
      {
        heading: "6. Verified buyer lead lists",
        paragraphs: [
          "A buyer lead list gives you a batch of people who are searching for Miami property right now, with the details you need to qualify them before you call. Our [Miami Real Estate Buyer Leads](/products/miami-buyer-leads) file contains 1,500+ buyers sourced this month from Google and social media campaigns, each with a verified email and phone, target neighborhood, property type, bedrooms, estimated budget in USD and purchase timeframe.",
          "At $1,500 for the whole file, each lead costs about $1 — and you can be calling the \"Immediate (0–30 days)\" buyers within the hour.",
        ],
      },
      {
        heading: "How to convert Miami buyer leads",
        paragraphs: ["Whatever the source, conversion comes down to process:"],
        bullets: [
          "Reply the same day — ideally within minutes — by phone and email.",
          "Qualify on timeframe and budget first; work \"Immediate\" and \"1–3 months\" buyers before browsers.",
          "Match each buyer to listings by neighborhood and property type and send them with a short, personal note.",
          "Put longer-timeframe buyers on a drip campaign of new listings and Miami market updates.",
          "Since August 2024, NAR rules require a written buyer agreement before touring a home with a buyer — have yours ready.",
        ],
      },
      {
        heading: "Calling and texting rules in Florida",
        paragraphs: [
          "Before calling or texting, scrub numbers against the federal National Do Not Call Registry and follow the TCPA. Florida adds its own rules on top: the Florida Telephone Solicitation Act and a state Do Not Call list. Email outreach must follow the CAN-SPAM Act, including a working unsubscribe link.",
        ],
      },
    ],
    faqs: [
      {
        question: "Where do Miami realtors get buyer leads?",
        answer:
          "From portals such as Zillow and Realtor.com, their own Google and social media ads, international referral networks, pre-construction developer programmes, open houses, past clients and verified buyer lead lists.",
      },
      {
        question: "How much do Miami real estate buyer leads cost?",
        answer:
          "Portal and paid-ad leads in Miami's premium neighborhoods can be expensive per enquiry. Our Miami buyer leads file is $1,500 for 1,500+ verified buyers — about $1 per lead.",
      },
      {
        question: "Can I text Miami buyer leads?",
        answer:
          "Only in line with the TCPA and Florida's telemarketing rules. Scrub numbers against the federal and Florida Do Not Call lists first and get consent where the rules require it.",
      },
    ],
  },
  {
    slug: "california-real-estate-buyer-leads",
    title: "How to Get Real Estate Buyer Leads in California",
    seo: {
      title: "How to Get Real Estate Buyer Leads in California (2026)",
      description:
        "How California agents find serious home buyers in 2026 — portals, ads, relocation, new developments and buyer lead lists — and how to convert them.",
      keywords: [
        "California real estate buyer leads",
        "how to get buyer leads in California",
        "California real estate leads",
        "California home buyer leads",
        "Los Angeles buyer leads",
        "California realtor leads",
      ],
    },
    excerpt:
      "How California agents find buyers who are ready to move — from portals and paid ads to relocation and buyer lead lists — and the rules to follow when you reach out.",
    productSlug: "california-buyer-leads",
    published: "2026-10-13",
    updated: "2026-10-13",
    readingMinutes: 7,
    sections: [
      {
        heading: "Why California buyer leads are hard to win",
        paragraphs: [
          "California has more licensed real estate agents than almost any other state, and the most valuable markets — Beverly Hills, Malibu, Newport Beach, La Jolla, Palo Alto — are also the most competitive. High prices mean fewer, larger transactions, so every serious buyer is contested. Agents who win consistently have more than one source of buyers and a fast follow-up process.",
        ],
      },
      {
        heading: "1. Portal leads",
        paragraphs: [
          "Zillow, Realtor.com, Redfin and Homes.com generate the bulk of online buyer enquiries in California. They are reliable but expensive in premium zip codes, and the same buyer often contacts several agents.",
        ],
      },
      {
        heading: "2. Your own Google and social media ads",
        paragraphs: [
          "Hyper-local campaigns — \"homes for sale in Santa Monica\", \"Laguna Beach oceanfront condos\" — produce leads you do not share with anyone. They need landing pages, a budget and constant optimisation, so they suit teams more than solo agents.",
        ],
      },
      {
        heading: "3. Relocation and corporate moves",
        paragraphs: [
          "Tech, entertainment and healthcare employers bring buyers into the Bay Area, Los Angeles and San Diego every year. Relocation companies and HR departments are worth a relationship if you work those markets.",
        ],
      },
      {
        heading: "4. New developments and builders",
        paragraphs: [
          "Builder and developer sales offices attract buyers who are committed to an area. Co-operating with new-development teams gives you access to buyers who may also need to sell their current home.",
        ],
      },
      {
        heading: "5. Sphere of influence and open houses",
        paragraphs: [
          "Past clients, referrals and open-house visitors convert at the highest rates. They are the foundation of any business, but rarely enough to grow one quickly.",
        ],
      },
      {
        heading: "6. Verified buyer lead lists",
        paragraphs: [
          "A verified buyer lead list hands you hundreds of active buyers at once. Our [California Real Estate Buyer Leads](/products/california-buyer-leads) file contains 3,000+ buyers sourced this month from Google and social media campaigns — statewide, from Beverly Hills, Malibu and Santa Monica to Newport Beach, La Jolla, Del Mar and Palo Alto — each with a verified email and phone, target city, property type, bedrooms, estimated budget in USD and purchase timeframe.",
          "At $1,500 for the file, each lead costs about 50 cents, and you can filter by city and budget to give every agent on your team the buyers who fit their listings.",
        ],
      },
      {
        heading: "How to convert California buyer leads",
        paragraphs: ["The process that turns leads into closings:"],
        bullets: [
          "Call new leads the same day and follow up with a personal email that names their target city and property type.",
          "Prioritise \"Immediate\" and \"1–3 months\" buyers; nurture the rest with listing alerts and market updates.",
          "Ask early whether they also need to sell — many California buyers are move-up buyers with a home to list.",
          "Have a written buyer agreement ready: since August 2024, NAR rules require one before touring a home with a buyer.",
        ],
      },
      {
        heading: "Rules for contacting buyers in California",
        paragraphs: [
          "Scrub phone numbers against the National Do Not Call Registry and follow the TCPA for calls and texts. California's Department of Real Estate requires your name and DRE licence number on first-point-of-contact marketing, and personal data must be handled in line with the CCPA/CPRA. Email outreach must follow CAN-SPAM, including a working unsubscribe link.",
        ],
      },
    ],
    faqs: [
      {
        question: "Where do California realtors get buyer leads?",
        answer:
          "From portals such as Zillow, Realtor.com and Redfin, their own Google and social media ads, relocation companies, new-development sales teams, open houses, past clients and verified buyer lead lists.",
      },
      {
        question: "How much do California real estate buyer leads cost?",
        answer:
          "Portal leads in premium California markets are among the most expensive in the country. Our California buyer leads file is $1,500 for 3,000+ verified buyers — about $0.50 per lead.",
      },
      {
        question: "Do I need to include my DRE number when contacting leads?",
        answer:
          "Yes. California requires licensees to show their name and DRE licence number on first-point-of-contact marketing materials, including emails and other solicitations.",
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

/** The guide that sells a given product, if any. */
export function getGuideForProduct(productSlug: string): Guide | undefined {
  return GUIDES.find((g) => g.productSlug === productSlug);
}
