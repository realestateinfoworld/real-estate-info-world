import type { Faq } from "@/lib/constants";

/**
 * Free calculators under /tools. They answer searches brokers and agents make
 * every day, and each one points to the dataset that fits its audience.
 *
 * Paragraphs and bullets support inline links as [text](/path).
 */
export interface Tool {
  /** URL segment under /tools — never change once indexed. */
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
  /** Short summary for cards on /tools and the page header. */
  excerpt: string;
  /** Dataset offered beside the calculator, by slug. */
  productSlug: string;
  /** ISO date, for the sitemap. */
  updated: string;
  sections: readonly {
    heading: string;
    paragraphs: readonly string[];
    bullets?: readonly string[];
  }[];
  faqs: readonly Faq[];
}

export const TOOLS: readonly Tool[] = [
  {
    slug: "dubai-dld-fees-calculator",
    title: "Dubai DLD Fees Calculator",
    seo: {
      title: "Dubai DLD Fees Calculator 2026 | Property Buying Costs",
      description:
        "Free Dubai DLD fees calculator: 4% transfer fee, trustee fee, agency commission and mortgage registration. See the full cost of buying property in Dubai.",
      keywords: [
        "DLD fees calculator",
        "Dubai property transfer fee calculator",
        "Dubai Land Department fees",
        "cost of buying property in Dubai",
        "Dubai property purchase costs",
        "DLD 4% fee",
      ],
    },
    excerpt:
      "Work out the full cost of buying a ready property in Dubai: the 4% DLD transfer fee, trustee fee, agency commission and mortgage registration.",
    productSlug: "buyer-leads",
    updated: "2026-11-11",
    sections: [
      {
        heading: "What you pay when you buy property in Dubai",
        paragraphs: [
          "The price on the listing is not the whole cost. On a ready (secondary-market) property the buyer normally also pays:",
        ],
        bullets: [
          "DLD transfer fee: 4% of the purchase price, paid to the Dubai Land Department at transfer.",
          "DLD admin fee: AED 580 for apartments and offices, AED 430 for land.",
          "Registration trustee fee: AED 4,000 plus 5% VAT for properties of AED 500,000 or more, AED 2,000 plus VAT below that.",
          "Agency commission: customarily 2% of the price, plus 5% VAT.",
          "Mortgage registration, if you borrow: 0.25% of the loan amount plus AED 290.",
        ],
      },
      {
        heading: "How the 4% DLD transfer fee works",
        paragraphs: [
          "The transfer fee is 4% of the purchase price and is paid when ownership is transferred at a registration trustee office. In practice the buyer usually pays all of it, unless buyer and seller agree to share it in the sale agreement (Form F).",
          "On a AED 2,000,000 apartment the transfer fee alone is AED 80,000, which is why buyers should budget roughly 6–7% on top of the price once commission and the smaller fees are added.",
        ],
      },
      {
        heading: "Costs this calculator leaves out",
        paragraphs: [
          "A few costs depend on the property and the bank, so they are not in the total: the developer's no-objection certificate (typically AED 500–5,000), title deed issuance, and a lender's valuation and arrangement fees. Service charges and DEWA deposits come after the purchase.",
        ],
      },
      {
        heading: "For brokers: quote the full cost early",
        paragraphs: [
          "Buyers who see the full figure up front are less likely to stall at the transfer stage. Send this calculator with your first shortlist, and qualify budget against the total rather than the listing price.",
          "Need more buyers to quote? Our [Dubai Property Buyer Leads](/products/buyer-leads) file lists 10,000+ buyers with their budgets and target communities, and you can [check a free sample](/free-sample?dataset=buyer-leads) first.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much are DLD fees in Dubai?",
        answer:
          "The Dubai Land Department transfer fee is 4% of the purchase price, plus an admin fee of AED 580 for apartments and offices or AED 430 for land.",
      },
      {
        question: "Who pays the 4% DLD fee, the buyer or the seller?",
        answer:
          "In practice the buyer usually pays the full 4%, unless buyer and seller agree to share it in the sale agreement.",
      },
      {
        question: "Is there VAT on property purchases in Dubai?",
        answer:
          "There is no VAT on the price of a residential resale. 5% VAT is charged on the agency commission and on the registration trustee fee.",
      },
      {
        question: "How much is mortgage registration in Dubai?",
        answer: "0.25% of the loan amount plus an AED 290 admin fee, paid to the Dubai Land Department.",
      },
    ],
  },
  {
    slug: "dubai-real-estate-commission-calculator",
    title: "Dubai Real Estate Commission Calculator",
    seo: {
      title: "Dubai Real Estate Commission Calculator 2026 (Sale & Rent)",
      description:
        "Free Dubai real estate commission calculator for brokers: 2% on sales, 5% on rentals, 5% VAT and your split with the brokerage. See what you earn per deal.",
      keywords: [
        "Dubai real estate commission calculator",
        "real estate agent commission Dubai",
        "Dubai broker commission",
        "Dubai rental commission",
        "RERA commission",
        "real estate commission split",
      ],
    },
    excerpt:
      "See what a Dubai sale or rental pays: commission at the customary rate, 5% VAT, what the client pays and what you keep after the brokerage split.",
    productSlug: "owner-database",
    updated: "2026-11-11",
    sections: [
      {
        heading: "Real estate commission rates in Dubai",
        paragraphs: [
          "Commission in Dubai is set by custom and by the brokerage contract, not by a fixed tariff:",
        ],
        bullets: [
          "Sales: customarily 2% of the sale price.",
          "Rentals: customarily 5% of the first year's rent.",
          "VAT: 5% is charged on top of the commission, not on the property price.",
        ],
      },
      {
        heading: "Who pays the commission",
        paragraphs: [
          "On a sale the buyer customarily pays their agent 2%. A seller who has signed a listing agreement (RERA Form A) pays whatever commission that agreement sets. On a rental the tenant usually pays the 5%. The rate and who pays it should be written into Form A with the seller or Form B with the buyer before you start work.",
        ],
      },
      {
        heading: "How the brokerage split works",
        paragraphs: [
          "Agents rarely keep the whole commission. A common starting split is 50/50 with the brokerage, rising with experience and volume. Enter your own split to see what a deal is worth to you, and how many deals a month you need to hit your income target.",
        ],
      },
      {
        heading: "More listings, more commission",
        paragraphs: [
          "Commission is paid on closed deals, and deals start with stock. Brokers who reach owners directly win exclusive listings before they reach the portals. Our [Dubai Property Owner Database](/products/owner-database) has 1,000,000+ verified owners with direct mobile numbers across 200+ communities; [check a free sample](/free-sample?dataset=owner-database) first, or read [how to find property owners in Dubai](/guides/how-to-find-property-owners-in-dubai).",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the real estate agent commission in Dubai?",
        answer:
          "Customarily 2% of the sale price on sales and 5% of the first year's rent on rentals, plus 5% VAT on the commission. Rates are agreed in the brokerage contract.",
      },
      {
        question: "Is VAT charged on real estate commission in Dubai?",
        answer: "Yes. 5% VAT is charged on the commission amount, not on the property price.",
      },
      {
        question: "Who pays the agent's commission in Dubai?",
        answer:
          "On sales the buyer customarily pays their agent 2%, and a seller pays what their listing agreement (Form A) sets. On rentals the tenant usually pays.",
      },
    ],
  },
  {
    slug: "real-estate-lead-roi-calculator",
    title: "Real Estate Lead ROI Calculator",
    seo: {
      title: "Real Estate Lead ROI Calculator | Cost per Lead & Deal",
      description:
        "Free real estate lead ROI calculator: enter the list cost, your reach and conversion rates and your commission to see cost per deal and break-even.",
      keywords: [
        "real estate lead ROI calculator",
        "cost per lead calculator real estate",
        "real estate leads ROI",
        "cost per deal real estate leads",
        "are real estate leads worth it",
        "lead conversion calculator",
      ],
    },
    excerpt:
      "Check whether a lead list pays for itself: enter its cost, how many leads you will contact, your reach and conversion rates and your average commission.",
    productSlug: "miami-buyer-leads",
    updated: "2026-11-11",
    sections: [
      {
        heading: "How to judge a lead list before you buy it",
        paragraphs: [
          "The price of a list tells you little on its own. What matters is what it costs to get one real conversation, and one closed deal. This calculator works both out from five numbers you control:",
        ],
        bullets: [
          "What the list costs.",
          "How many of its leads your team will actually contact.",
          "The share of those leads you reach by phone, WhatsApp or email.",
          "The share of conversations that turn into a closed deal.",
          "Your average commission per deal.",
        ],
      },
      {
        heading: "Cost per lead is not the number that matters",
        paragraphs: [
          "A list at $1 a lead that nobody answers is more expensive than one at $20 a lead that does. Compare sources on cost per conversation and cost per deal instead. Our guide to [how much real estate leads cost](/guides/how-much-do-real-estate-leads-cost) compares portals, paid ads and lead lists on that basis.",
        ],
      },
      {
        heading: "Use your own rates, not ours",
        paragraphs: [
          "The rates in the calculator are examples. Reach and conversion vary widely with the market, how fresh the leads are, your script and how fast you follow up. If you track your pipeline, use last quarter's real numbers. If you don't, start low and see how many deals you need to break even: with one commission usually worth many times the cost of a list, the break-even is often a single deal.",
        ],
      },
      {
        heading: "Test the data before you spend",
        paragraphs: [
          "The surest way to estimate your reach rate is to call real records. Every dataset we sell has a [free sample](/free-sample): the [Dubai Property Owner Database](/products/owner-database) and buyer leads for [Dubai](/products/buyer-leads), [Miami](/products/miami-buyer-leads), [California](/products/california-buyer-leads) and the [UK](/products/uk-buyer-leads).",
        ],
      },
    ],
    faqs: [
      {
        question: "How do you calculate ROI on real estate leads?",
        answer:
          "Multiply the leads you contact by your reach rate and your conversion rate to get deals, multiply deals by your average commission, then subtract what the leads cost.",
      },
      {
        question: "What is a good conversion rate for real estate leads?",
        answer:
          "It varies widely by market, lead source and follow-up, so there is no single good figure. Use your own pipeline numbers where you have them, and compare sources on cost per deal rather than cost per lead.",
      },
      {
        question: "How many deals do I need to break even on a lead list?",
        answer:
          "Divide the cost of the list by your average commission and round up. Where a commission is worth far more than the list, one deal is usually enough.",
      },
    ],
  },
];

export function getTool(slug: string): Tool | undefined {
  return TOOLS.find((t) => t.slug === slug);
}
