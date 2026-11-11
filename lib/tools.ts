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
    slug: "real-estate-commission-calculator",
    title: "Real Estate Commission Calculator",
    seo: {
      title: "Real Estate Commission Calculator 2026 | Seller Net Sheet",
      description:
        "Free real estate commission calculator: see what the listing and buyer's agents are paid on any sale price, the total commission and the seller's net proceeds.",
      keywords: [
        "real estate commission calculator",
        "realtor commission calculator",
        "how much do realtors make per house",
        "commission on a $500,000 house",
        "seller net proceeds calculator",
        "real estate agent fees calculator",
      ],
    },
    excerpt:
      "Enter a sale price and the commission rates to see what each agent is paid, the total commission, and what the seller keeps after closing costs and the mortgage.",
    productSlug: "miami-buyer-leads",
    updated: "2026-11-11",
    sections: [
      {
        heading: "How real estate commission is calculated",
        paragraphs: [
          "Commission is a percentage of the sale price, set in the agreements each agent signs with their client. The listing agent's rate is in the listing agreement with the seller. The buyer's agent's rate is in their written agreement with the buyer, and the seller may agree to pay some or all of it as part of the deal.",
          "Multiply the sale price by each rate and add the two together for the total. On a $500,000 sale with 2.5% to each side, that is $12,500 to the listing agent, $12,500 to the buyer's agent and $25,000 in total.",
        ],
      },
      {
        heading: "Commission on common sale prices",
        paragraphs: [
          "Total commission has often fallen between 5% and 6% of the price, though every rate is negotiable and many sales close below that. At 5% and 6% in total:",
        ],
        bullets: [
          "$300,000 home: $15,000 at 5%, $18,000 at 6%.",
          "$400,000 home: $20,000 at 5%, $24,000 at 6%.",
          "$500,000 home: $25,000 at 5%, $30,000 at 6%.",
          "$750,000 home: $37,500 at 5%, $45,000 at 6%.",
          "$1,000,000 home: $50,000 at 5%, $60,000 at 6%.",
        ],
      },
      {
        heading: "What changed in August 2024",
        paragraphs: [
          "Under the National Association of Realtors settlement, offers of compensation to buyer's agents are no longer made on the MLS, and a buyer's agent needs a written agreement with the buyer, stating their pay, before touring a home. A seller can still offer to cover the buyer's agent, but it is now agreed sale by sale. Enter 0 in the buyer's agent field if the buyer is paying their own agent.",
        ],
      },
      {
        heading: "From commission to the seller's net",
        paragraphs: [
          "Commission is usually the largest selling cost, but not the only one. Title and escrow fees, transfer taxes and the remaining mortgage balance all come out of the proceeds at closing. Transfer tax depends on the state: see the [Florida documentary stamp tax calculator](/tools/florida-documentary-stamp-tax-calculator) and the [California and Los Angeles transfer tax calculator](/tools/california-transfer-tax-calculator).",
        ],
      },
      {
        heading: "For agents: what the commission means for you",
        paragraphs: [
          "The commission on the settlement statement is not what an agent takes home. Referral fees, the brokerage split and per-deal fees come out first; the [commission split calculator](/tools/real-estate-commission-split-calculator) works out your share and how many closings your income goal takes.",
          "Every closing starts with a buyer. Our [Miami](/products/miami-buyer-leads) and [California](/products/california-buyer-leads) buyer leads list buyers with their target area, budget and timeframe, and you can [check a free sample](/free-sample) before you buy. For more ways to fill the pipeline, read [how to get real estate leads](/guides/how-to-get-real-estate-leads).",
        ],
      },
    ],
    faqs: [
      {
        question: "How do you calculate real estate commission?",
        answer:
          "Multiply the sale price by the commission rate. Do it once for the listing agent and once for the buyer's agent, then add the two for the total commission.",
      },
      {
        question: "How much commission does a realtor make on a $500,000 house?",
        answer:
          "At 2.5% per side, each agent's brokerage is paid $12,500, for $25,000 in total. The agent's own take-home is lower once the brokerage split and fees are taken out.",
      },
      {
        question: "Who pays the real estate commission?",
        answer:
          "The seller pays the listing agent from the sale proceeds. The buyer's agent is paid under their agreement with the buyer, either by the buyer or by the seller if the seller agrees to cover it.",
      },
      {
        question: "Is real estate commission negotiable?",
        answer: "Yes. No law or association sets commission rates; they are agreed between each agent and their client.",
      },
    ],
  },
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
    slug: "florida-documentary-stamp-tax-calculator",
    title: "Florida Documentary Stamp Tax Calculator",
    seo: {
      title: "Florida Documentary Stamp Tax & Transfer Tax Calculator 2026",
      description:
        "Free Florida documentary stamp tax and transfer tax calculator with Miami-Dade rates: deed stamps, the surtax, mortgage stamps and intangible tax on any sale.",
      keywords: [
        "documentary stamp tax Florida",
        "Florida documentary stamp tax calculator",
        "Florida transfer tax calculator",
        "Florida doc stamps calculator",
        "Miami-Dade doc stamps",
        "Miami-Dade surtax",
        "Florida intangible tax calculator",
        "Florida transfer tax",
      ],
    },
    excerpt:
      "Work out Florida's documentary stamp tax on a sale, including Miami-Dade's own rate and surtax, plus the mortgage stamps and intangible tax a buyer pays.",
    productSlug: "miami-buyer-leads",
    updated: "2026-11-11",
    sections: [
      {
        heading: "Florida documentary stamp tax rates",
        paragraphs: [
          "Florida charges documentary stamp tax when property changes hands and when a mortgage is recorded. Each rate applies per $100, and any part of $100 counts as a full $100:",
        ],
        bullets: [
          "Deeds: $0.70 per $100 of the sale price in every county except Miami-Dade.",
          "Deeds in Miami-Dade County: $0.60 per $100, plus a $0.45 per $100 surtax on transfers of anything other than a single-family residence.",
          "Mortgages and notes: $0.35 per $100 of the loan amount.",
          "Intangible tax on a new mortgage: 0.2% of the loan amount (2 mills per dollar).",
        ],
      },
      {
        heading: "Florida's transfer tax is the documentary stamp tax",
        paragraphs: [
          "Florida has no separate real estate transfer tax. The documentary stamp tax on the deed is the state's transfer tax, so a Florida transfer tax calculator and a doc stamps calculator work out the same figure: the price, rounded up to the next $100, times the rate per $100.",
          "On a $450,000 sale outside Miami-Dade, that is 4,500 × $0.70 = $3,150. Any part of $100 counts in full, so a $450,050 sale is taxed as if it were $450,100.",
        ],
      },
      {
        heading: "How Miami-Dade is different",
        paragraphs: [
          "Miami-Dade is the one Florida county with its own deed rate. The base rate is lower, at $0.60 per $100, but a $0.45 surtax is added when the property is not a single-family residence, which brings commercial, multi-family and land transfers to $1.05 per $100.",
          "Florida's Department of Revenue counts a condominium unit as a single-family residence for this purpose, so a typical home or condo sale in Brickell, Edgewater or Sunny Isles Beach pays $0.60 per $100 with no surtax.",
        ],
      },
      {
        heading: "Who pays documentary stamps in Florida",
        paragraphs: [
          "By custom the seller pays the stamps on the deed, and the buyer pays the stamps and the intangible tax on their new mortgage. The contract can assign them differently, so check it before you quote a net figure. On an $800,000 home in Miami-Dade bought with a $600,000 loan, that is $4,800 for the seller and $3,300 for the buyer.",
        ],
      },
      {
        heading: "For Miami agents: quote the numbers, then find the buyers",
        paragraphs: [
          "Sellers decide faster when they see their costs in writing, and buyers trust the agent who explains theirs. If you need more buyers to work with, our [Miami Real Estate Buyer Leads](/products/miami-buyer-leads) file has 1,500+ buyers with their target neighborhood, budget and timeframe; [check a free sample](/free-sample?dataset=miami-buyer-leads) first, or read [how to get buyer leads in Miami](/guides/miami-real-estate-buyer-leads).",
        ],
      },
    ],
    faqs: [
      {
        question: "How much are documentary stamps on a deed in Florida?",
        answer:
          "$0.70 per $100 of the sale price in every county except Miami-Dade, where the rate is $0.60 per $100 plus a $0.45 surtax on property other than a single-family residence.",
      },
      {
        question: "Does Florida have a real estate transfer tax?",
        answer:
          "Yes: it is called the documentary stamp tax. Florida charges it on the deed when property is sold, at $0.70 per $100 of the price, or $0.60 per $100 in Miami-Dade plus a surtax on property other than a single-family home.",
      },
      {
        question: "How much are doc stamps on a $500,000 house in Florida?",
        answer: "$3,500 in most Florida counties, and $3,000 on a single-family home or condo in Miami-Dade.",
      },
      {
        question: "Who pays doc stamps in Florida, the buyer or the seller?",
        answer:
          "By custom the seller pays the stamps on the deed and the buyer pays the stamps and intangible tax on the mortgage. The contract can change that.",
      },
      {
        question: "What is the intangible tax on a Florida mortgage?",
        answer: "0.2% of the loan amount, paid once when the mortgage is recorded, on top of $0.35 per $100 in mortgage stamps.",
      },
    ],
  },
  {
    slug: "california-transfer-tax-calculator",
    title: "California & Los Angeles Transfer Tax Calculator",
    seo: {
      title: "California & Los Angeles Transfer Tax Calculator 2026",
      description:
        "Free California documentary transfer tax calculator: the $1.10 per $1,000 county tax plus city taxes such as Los Angeles. See the cost on any sale price.",
      keywords: [
        "California transfer tax calculator",
        "California documentary transfer tax",
        "Los Angeles transfer tax",
        "Los Angeles transfer tax calculator",
        "LA city transfer tax",
        "county transfer tax California",
        "who pays transfer tax in California",
        "Measure ULA",
      ],
    },
    excerpt:
      "Work out California's documentary transfer tax on a sale: the county tax that applies statewide, plus a city tax where there is one, such as the City of Los Angeles.",
    productSlug: "california-buyer-leads",
    updated: "2026-11-11",
    sections: [
      {
        heading: "California transfer tax rates",
        paragraphs: ["Transfer tax in California has up to two layers:"],
        bullets: [
          "County documentary transfer tax: $0.55 per $500 of the sale price, or any part of $500, which is $1.10 per $1,000. It applies in every county.",
          "City transfer tax: most cities add nothing, but some charter cities charge their own. The City of Los Angeles adds $4.50 per $1,000, for $5.60 per $1,000 in total.",
        ],
      },
      {
        heading: "Los Angeles transfer tax: a worked example",
        paragraphs: [
          "Choose the City of Los Angeles preset to add the city's $4.50 per $1,000 to the county's $1.10. On a $1,200,000 sale that is $1,320 in county tax and $5,400 in city tax, $6,720 in total, before any Measure ULA.",
          "Los Angeles County's tax applies everywhere in the county, but only property inside the City of Los Angeles pays the city tax. A home in an unincorporated area, or in a city without its own transfer tax, pays the $1.10 per $1,000 county tax alone.",
        ],
      },
      {
        heading: "Measure ULA in the City of Los Angeles",
        paragraphs: [
          "Since April 2023 the City of Los Angeles has charged a further tax, Measure ULA, on high-value sales: 4% above a threshold of roughly $5 million and 5.5% above roughly $10 million. The thresholds are adjusted every July, so this calculator leaves ULA out; check the current figures with the Los Angeles Office of Finance.",
          "ULA applies only inside the City of Los Angeles. Beverly Hills, Santa Monica and Malibu are separate cities with their own rules.",
        ],
      },
      {
        heading: "Who pays transfer tax in California",
        paragraphs: [
          "It is negotiable and set by the purchase contract. By custom the seller pays the county tax in most of the state, and customs for city taxes vary from place to place, so confirm with your escrow or title officer before you quote a seller's net.",
        ],
      },
      {
        heading: "For California agents: more buyers for your listings",
        paragraphs: [
          "Our [California Real Estate Buyer Leads](/products/california-buyer-leads) file has 3,000+ buyers statewide with their target city, budget and timeframe. [Check a free sample](/free-sample?dataset=california-buyer-leads) first, or read [how to get buyer leads in Los Angeles](/guides/los-angeles-buyer-leads).",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the documentary transfer tax in California?",
        answer:
          "Every county charges $0.55 per $500 of the sale price, which is $1.10 per $1,000. Some cities add their own transfer tax on top.",
      },
      {
        question: "How much is transfer tax in Los Angeles?",
        answer:
          "In the City of Los Angeles it is $5.60 per $1,000: $1.10 county tax plus $4.50 city tax. Sales above roughly $5 million also pay Measure ULA.",
      },
      {
        question: "How much is transfer tax on a $1,000,000 home in California?",
        answer: "The county tax is $1,100. In the City of Los Angeles the city tax adds $4,500, for $5,600 in total.",
      },
      {
        question: "Who pays transfer tax in California?",
        answer:
          "It is negotiable. By custom the seller pays the county tax in most of the state; customs for city taxes vary.",
      },
    ],
  },
  {
    slug: "real-estate-commission-split-calculator",
    title: "Real Estate Commission Split Calculator",
    seo: {
      title: "Real Estate Commission Split Calculator | Agent Take-Home",
      description:
        "Free commission split calculator for real estate agents: gross commission, referral fee, brokerage split and fees, and the deals you need for your income goal.",
      keywords: [
        "real estate commission split calculator",
        "real estate agent commission calculator",
        "agent take home calculator",
        "commission split with broker",
        "how many deals do I need real estate",
        "real estate referral fee calculator",
      ],
    },
    excerpt:
      "See what one closing puts in your pocket after the referral fee, the brokerage split and per-deal fees, and how many deals a year your income goal takes.",
    productSlug: "california-buyer-leads",
    updated: "2026-11-11",
    sections: [
      {
        heading: "How an agent's take-home is worked out",
        paragraphs: ["The commission on a closing passes through several hands before it reaches you:"],
        bullets: [
          "Gross commission: the sale price times the rate in your listing or buyer agreement.",
          "Referral fee: a share paid to a referring agent or lead source, usually taken off the top.",
          "Brokerage split: the brokerage keeps its share of what is left.",
          "Per-deal fees: transaction, E&O or franchise fees your brokerage charges on each closing.",
        ],
      },
      {
        heading: "Commission is negotiable",
        paragraphs: [
          "No law or association sets commission rates. Since August 2024, offers of compensation to buyer's agents are no longer made on the MLS, and an agent working with a buyer needs a written buyer agreement that states their compensation before touring a home. Use the rate in your own agreement.",
        ],
      },
      {
        heading: "From take-home to pipeline",
        paragraphs: [
          "Once you know what a closing is worth, the income goal becomes a number of deals, and deals become a number of conversations. The [lead ROI calculator](/tools/real-estate-lead-roi-calculator) works that backwards from a lead list.",
          "If the pipeline is short of buyers, we sell verified buyer leads for [Miami](/products/miami-buyer-leads) and [California](/products/california-buyer-leads), each with a target area, budget and timeframe, and a [free sample](/free-sample) to check first.",
        ],
      },
    ],
    faqs: [
      {
        question: "How is a real estate commission split calculated?",
        answer:
          "Take the gross commission, subtract any referral fee, multiply what is left by your split percentage, then subtract your brokerage's per-deal fees.",
      },
      {
        question: "What is a typical commission split for a real estate agent?",
        answer:
          "It varies by brokerage and by how much an agent produces. Newer agents often keep a smaller share, experienced agents keep more, and some brokerages charge a flat fee or an annual cap instead of a percentage.",
      },
      {
        question: "Does a referral fee come out before the brokerage split?",
        answer: "Usually, yes: the referral fee is taken off the gross commission first. Check your brokerage's policy.",
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
        heading: "Work in your own currency",
        paragraphs: [
          "Commission is earned in dirhams in Dubai and in pounds in the UK, while our datasets are priced in US dollars. Pick a Dubai dataset and the calculator switches to AED, converting the list price at the dirham's fixed rate of 3.6725 to the dollar. For pounds, enter today's exchange rate. Every result is then shown in the currency you are paid in.",
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
