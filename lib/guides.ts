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
  {
    slug: "how-to-find-property-buyers-in-dubai",
    title: "How to Find Property Buyers in Dubai",
    seo: {
      title: "How to Find Property Buyers in Dubai (2026 Broker Guide)",
      description:
        "Where Dubai brokers find serious property buyers in 2026 — portals, international roadshows, off-plan launches and buyer lead lists — and how to convert them.",
      keywords: [
        "how to find property buyers in Dubai",
        "Dubai property buyers",
        "Dubai buyer leads",
        "Dubai real estate leads",
        "Dubai property investors",
        "Dubai real estate lead generation",
      ],
    },
    excerpt:
      "Where Dubai brokers find buyers who are ready to transact — portals, international investors, off-plan launches and buyer lead lists — and how to turn them into deals.",
    productSlug: "buyer-leads",
    published: "2026-10-13",
    updated: "2026-10-13",
    readingMinutes: 7,
    sections: [
      {
        heading: "Who is buying property in Dubai",
        paragraphs: [
          "Dubai's buyers are unusually international. Alongside UAE residents upgrading or buying their first home, a large share of demand comes from overseas investors — from the UK, Europe, India, Russia, China and the wider Gulf — buying for rental yield, capital growth or residency. Property investors can qualify for the UAE Golden Visa with property worth AED 2 million or more, which keeps high-budget demand strong.",
          "That means your buyers are often in another time zone, comparing several brokers at once and expecting fast answers on WhatsApp.",
        ],
      },
      {
        heading: "1. Portal enquiries",
        paragraphs: [
          "Property Finder, Bayut and Dubizzle generate most online buyer enquiries in Dubai. They are high volume, but the same buyer often contacts several agents, so the broker who replies first — with the right floor plan, price and a short video — usually wins.",
        ],
      },
      {
        heading: "2. Off-plan launches and developer events",
        paragraphs: [
          "Off-plan launches from developers draw investors who are already committed to Dubai. Registering as a sales partner gives you launch access, payment plans and marketing material to take to your buyers.",
        ],
      },
      {
        heading: "3. International roadshows and exhibitions",
        paragraphs: [
          "Property exhibitions such as Cityscape Dubai, and overseas roadshows in London, Mumbai and other source markets, put you in front of investors face to face. They are expensive, but a single high-value buyer can cover the cost.",
        ],
      },
      {
        heading: "4. Social media and paid ads",
        paragraphs: [
          "Instagram, TikTok, YouTube and Google ads targeted at investors in your source markets build a pipeline of buyers who already know your name. Every Dubai property ad needs a valid Trakheesi permit, so plan campaigns around listings you have permits for.",
        ],
      },
      {
        heading: "5. Verified buyer lead lists",
        paragraphs: [
          "A buyer lead list gives you thousands of active buyers in one go. Our [Dubai Property Buyer Leads](/products/buyer-leads) file contains 10,000+ verified buyers with their budgets, target communities and timelines, with an average budget of AED 4.2M+. At $1,200 for the file, each lead costs about 12 cents.",
        ],
      },
      {
        heading: "How to convert Dubai buyer leads",
        paragraphs: ["The process that turns enquiries into transactions:"],
        bullets: [
          "Reply within minutes on WhatsApp with two or three listings that match the buyer's budget and community.",
          "Qualify early: cash or mortgage, end-use or investment, and whether residency (Golden Visa) matters to them.",
          "Offer video viewings for overseas buyers and schedule in-person viewings around their next visit to Dubai.",
          "Sign a RERA Form B buyer agreement before viewings, and use a Form F (MOU) once a price is agreed.",
          "Keep long-timeline buyers on regular updates about new launches in their target community.",
        ],
      },
      {
        heading: "Rules to follow when contacting buyers",
        paragraphs: [
          "Brokers must hold a valid RERA licence and advertise only with a Trakheesi permit. The UAE's 2024 telemarketing rules limit marketing calls to 9am–6pm, require calls from numbers registered to the company and require you to respect the Do Not Call Registry (DNCR). For buyers outside the UAE, follow the marketing and privacy rules of the country they live in.",
        ],
      },
    ],
    faqs: [
      {
        question: "Where do Dubai brokers find property buyers?",
        answer:
          "From Property Finder, Bayut and Dubizzle enquiries, off-plan launches, property exhibitions and overseas roadshows, social media and paid ads, referrals and verified buyer lead lists.",
      },
      {
        question: "What budget do Dubai property buyers have?",
        answer:
          "It varies widely, but investor demand is strong at the top end: our Dubai buyer leads file has an average budget of AED 4.2M+. Property worth AED 2 million or more can also qualify a buyer for the UAE Golden Visa.",
      },
      {
        question: "How much do Dubai buyer leads cost?",
        answer:
          "Our Dubai Property Buyer Leads file is $1,200 for 10,000+ verified buyers — about 12 cents per lead.",
      },
    ],
  },
  {
    slug: "uk-property-buyer-leads",
    title: "How to Get Property Buyer Leads in the UK",
    seo: {
      title: "How to Get Property Buyer Leads in the UK (2026 Guide)",
      description:
        "How UK estate agents find serious buyers in 2026 — Rightmove and Zoopla, international buyers, relocation and buyer lead lists — plus TPS and PECR rules.",
      keywords: [
        "UK property buyer leads",
        "how to get buyer leads UK",
        "estate agent leads UK",
        "London property buyer leads",
        "prime central London buyers",
        "UK real estate leads",
      ],
    },
    excerpt:
      "How UK estate agents find buyers who are ready to move — from Rightmove and Zoopla to international buyers and lead lists — and the TPS and PECR rules to follow.",
    productSlug: "uk-buyer-leads",
    published: "2026-10-13",
    updated: "2026-10-13",
    readingMinutes: 6,
    sections: [
      {
        heading: "Why UK buyer leads are competitive",
        paragraphs: [
          "Most UK buyers start on Rightmove, Zoopla and OnTheMarket and register with several agents in the same area. In prime London, where a single sale can be worth millions, every serious buyer is contested — so agents who win have more than one source of buyers and a fast, personal follow-up.",
        ],
      },
      {
        heading: "1. Portal enquiries",
        paragraphs: [
          "Rightmove, Zoopla and OnTheMarket enquiries remain the backbone of most agencies' buyer pipelines. They are reliable but shared: reply quickly, qualify the buyer's position (chain-free, mortgage in principle, cash) and book the viewing in the first call.",
        ],
      },
      {
        heading: "2. Your applicant database and past clients",
        paragraphs: [
          "Every past applicant, vendor and landlord is a potential buyer. Keep your applicant list clean and up to date, and call your best applicants before a new instruction goes live on the portals.",
        ],
      },
      {
        heading: "3. International buyers",
        paragraphs: [
          "Prime London attracts buyers from Europe, the Middle East, Asia and North America. Non-UK residents pay an extra 2% stamp duty surcharge, so they tend to be well-advised, decisive buyers who value agents who understand their position and can run video viewings.",
        ],
      },
      {
        heading: "4. Buying agents and relocation companies",
        paragraphs: [
          "Buying agents and corporate relocation firms bring motivated, pre-qualified buyers. A good relationship with a few of them can give you buyers before your listings reach the portals.",
        ],
      },
      {
        heading: "5. Verified buyer lead lists",
        paragraphs: [
          "Our [UK Real Estate Buyer Leads](/products/uk-buyer-leads) file contains 1,000+ buyers sourced this month from Rightmove and Zoopla enquiries and Google and social media campaigns, each with a verified email, mobile and alternate number, nationality, preferred area, property type, bedrooms, estimated budget in GBP and timeframe. At $750 for the file, each lead costs about 75 cents.",
        ],
      },
      {
        heading: "How to convert UK buyer leads",
        paragraphs: ["The steps that turn leads into offers:"],
        bullets: [
          "Call new leads the same day and qualify their position: chain-free, mortgage agreed in principle, or cash.",
          "Match each buyer to listings by area, property type and budget, and book viewings on the first call.",
          "Offer video viewings to international and out-of-town buyers.",
          "Keep longer-timeframe buyers on property alerts for their preferred area.",
        ],
      },
      {
        heading: "Rules for contacting buyers in the UK",
        paragraphs: [
          "Screen phone numbers against the Telephone Preference Service (TPS) before making marketing calls, and follow UK GDPR and the Privacy and Electronic Communications Regulations (PECR) for marketing emails and texts. Estate agents must also belong to an approved redress scheme — The Property Ombudsman or the Property Redress Scheme — and carry out anti-money laundering checks.",
        ],
      },
    ],
    faqs: [
      {
        question: "Where do UK estate agents get buyer leads?",
        answer:
          "From Rightmove, Zoopla and OnTheMarket enquiries, their own applicant databases and past clients, international buyers, buying agents, relocation companies and verified buyer lead lists.",
      },
      {
        question: "How much do UK property buyer leads cost?",
        answer:
          "Our UK Real Estate Buyer Leads file is $750 for 1,000+ verified buyers — about 75 cents per lead, with no subscription.",
      },
      {
        question: "Do I need to check the TPS before calling buyers?",
        answer:
          "Yes. For unsolicited marketing calls in the UK you must screen numbers against the Telephone Preference Service and respect any opt-outs.",
      },
    ],
  },
  {
    slug: "dubai-marina-property-owners",
    title: "How to Reach Dubai Marina Property Owners",
    seo: {
      title: "Dubai Marina Property Owners: How to Win Listings (2026)",
      description:
        "How brokers find and contact Dubai Marina property owners in 2026 — tower farming, landlord outreach, holiday-home owners and owner databases — plus the rules.",
      keywords: [
        "Dubai Marina property owners",
        "Dubai Marina landlords",
        "Dubai Marina owner database",
        "Dubai Marina listings",
        "contact property owners Dubai Marina",
      ],
    },
    excerpt:
      "Dubai Marina is one of the busiest apartment markets in the city. Here's how brokers reach its owners — tower by tower — and turn them into listings.",
    productSlug: "owner-database",
    published: "2026-10-13",
    updated: "2026-10-13",
    readingMinutes: 6,
    sections: [
      {
        heading: "Why Dubai Marina is worth farming",
        paragraphs: [
          "Dubai Marina is a waterfront community of high-rise apartment towers, built around a man-made canal with direct access to JBR beach. It is one of Dubai's most traded communities for both sales and rentals, with a deep mix of end-users, long-term investors and holiday-home owners. High turnover means a steady flow of owners deciding to sell, re-let or switch agents — if you are the broker they already know.",
        ],
      },
      {
        heading: "Who owns property in Dubai Marina",
        paragraphs: ["Most Marina owners fall into one of three groups, and each responds to a different message:"],
        bullets: [
          "Investor landlords, often living abroad, who care about rental yield, tenant quality and hassle-free management.",
          "Holiday-home owners letting short term, who care about occupancy, nightly rates and their holiday-home permit from Dubai's Department of Economy and Tourism.",
          "Owner-occupiers who may be upgrading to a villa community, and want a realistic sale price and a smooth move.",
        ],
      },
      {
        heading: "Farm the Marina tower by tower",
        paragraphs: [
          "Don't market to \"Dubai Marina\" as a whole — pick five to ten towers and become the expert on them. Track every sale and rental, know the service charges and the views on each stack, and send owners in those buildings specific updates: \"A 2-bed on the 30th floor of your tower just rented for X\" is far more compelling than a generic market report.",
        ],
      },
      {
        heading: "Messages that win Dubai Marina listings",
        paragraphs: ["Match the offer to the owner:"],
        bullets: [
          "Landlords: a current rental valuation, a pre-qualified tenant and a promise to handle Ejari registration and renewals.",
          "Holiday-home owners: a comparison of their short-term income against a long-term let or a sale at today's prices.",
          "Sellers: recent sale prices in their tower and a buyer you are already holding for their unit type.",
        ],
      },
      {
        heading: "Get Dubai Marina owners' contact details",
        paragraphs: [
          "Owner contact details aren't public, so most brokers combine tower farming with a verified owner database. Our [Dubai Property Owner Database](/products/owner-database) covers 1,000,000+ owners across 200+ communities, including Dubai Marina, with direct mobile numbers. Filter the Excel file to Dubai Marina and you have your farm list in seconds. It costs $300, one-time, delivered within 10 minutes.",
        ],
      },
      {
        heading: "Rules to follow",
        paragraphs: [
          "Hold a valid RERA broker licence, sign a Form A before marketing a unit and get a Trakheesi permit for every advert. The UAE's 2024 telemarketing rules limit marketing calls to 9am–6pm from company-registered numbers and require you to respect the Do Not Call Registry.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I find property owners in Dubai Marina?",
        answer:
          "Farm a handful of towers, work portal \"by owner\" listings, build relationships with building managers, and use a verified owner database filtered to Dubai Marina for direct mobile numbers.",
      },
      {
        question: "Does the Dubai owner database include Dubai Marina?",
        answer:
          "Yes. Dubai Marina is one of the 200+ communities covered. Every record lists its community, so you can filter the Excel file to Dubai Marina only.",
      },
      {
        question: "What do Dubai Marina landlords want from a broker?",
        answer:
          "Reliable tenants, a realistic rental valuation and someone to handle Ejari registration and renewals — or, for holiday-home owners, a clear comparison of short-term income against a long-term let or sale.",
      },
    ],
  },
  {
    slug: "miami-luxury-condo-buyers",
    title: "How to Find Luxury Condo Buyers in Miami",
    seo: {
      title: "Miami Luxury Condo Buyers: Brickell, Edgewater & Sunny Isles",
      description:
        "Where to find luxury condo buyers in Brickell, Edgewater, Sunny Isles Beach and Miami Beach in 2026 — and what they ask about before they buy.",
      keywords: [
        "Miami luxury condo buyers",
        "Brickell condo buyers",
        "Edgewater condo buyers",
        "Sunny Isles condo buyers",
        "Miami condo leads",
        "Miami luxury real estate leads",
      ],
    },
    excerpt:
      "Who is buying luxury condos in Brickell, Edgewater and Sunny Isles Beach, where to find them, and what they ask before they sign.",
    productSlug: "miami-buyer-leads",
    published: "2026-10-13",
    updated: "2026-10-13",
    readingMinutes: 6,
    sections: [
      {
        heading: "Who buys luxury condos in Miami",
        paragraphs: [
          "Miami's luxury condo market draws three main groups: buyers relocating from higher-tax states (Florida has no state income tax), international buyers from Latin America, Canada, Europe and the Middle East, and investors buying pre-construction units in new towers. Many are buying a second home and decide remotely, so they expect fast, detailed answers and video tours.",
        ],
      },
      {
        heading: "Brickell, Edgewater and Sunny Isles Beach",
        paragraphs: [
          "Brickell is Miami's financial district, with high-rise condos popular with professionals and investors. Edgewater, along Biscayne Bay just north of downtown, attracts buyers who want bay views and new towers. Sunny Isles Beach, between Miami Beach and Fort Lauderdale, is known for oceanfront branded residences and is especially popular with international buyers. Knowing which of these a buyer is targeting tells you their priorities — city life, bay views or the beach.",
        ],
      },
      {
        heading: "What Miami condo buyers ask before they buy",
        paragraphs: ["Be ready with answers on:"],
        bullets: [
          "Association fees and the building's reserves. Since Florida's post-Surfside condo safety laws, buyers ask about milestone inspections, structural reserve studies and any planned special assessments.",
          "Rental rules: minimum lease terms and whether short-term rentals are allowed in the building.",
          "For pre-construction: the deposit schedule, completion date and what happens to deposits held in escrow.",
          "Insurance costs and flood zone, especially for waterfront towers.",
        ],
      },
      {
        heading: "Where to find luxury condo buyers",
        paragraphs: [
          "Portal enquiries, developer launch events, international referral networks and targeted Google and social ads all work, but they take time or budget. A verified buyer lead list gets you talking to active buyers today: our [Miami Real Estate Buyer Leads](/products/miami-buyer-leads) file has 1,500+ buyers sourced this month, each with target neighborhood (including Brickell, Edgewater and Sunny Isles Beach), property type, estimated budget in USD and timeframe. Filter to \"Luxury Condo\" and your neighborhoods and start with the \"Immediate\" buyers.",
        ],
      },
      {
        heading: "Rules to follow",
        paragraphs: [
          "Scrub numbers against the federal National Do Not Call Registry and Florida's own Do Not Call list, follow the TCPA and the Florida Telephone Solicitation Act for calls and texts, and the CAN-SPAM Act for email. Since August 2024, NAR rules require a written buyer agreement before touring a property with a buyer.",
        ],
      },
    ],
    faqs: [
      {
        question: "Where do luxury condo buyers in Miami come from?",
        answer:
          "Mostly from other US states (Florida has no state income tax), plus Latin America, Canada, Europe and the Middle East, and investors buying pre-construction units.",
      },
      {
        question: "What do Miami condo buyers ask about most?",
        answer:
          "Association fees and building reserves (including milestone inspections and special assessments since Florida's post-Surfside laws), rental rules, insurance and flood zone, and deposit schedules for pre-construction.",
      },
      {
        question: "Can I filter Miami buyer leads to luxury condos in Brickell?",
        answer:
          "Yes. Target area and property type are separate Excel columns, so you can filter to Luxury Condo in Brickell, Edgewater or Sunny Isles Beach in seconds.",
      },
    ],
  },
  {
    slug: "los-angeles-buyer-leads",
    title: "How to Get Real Estate Buyer Leads in Los Angeles",
    seo: {
      title: "Los Angeles Real Estate Buyer Leads: 2026 Agent Guide",
      description:
        "How Los Angeles agents find serious buyers in 2026 — Beverly Hills, Santa Monica, Malibu and Pasadena — plus Measure ULA and the rules for contacting leads.",
      keywords: [
        "Los Angeles buyer leads",
        "Los Angeles real estate leads",
        "LA realtor leads",
        "Beverly Hills buyer leads",
        "Santa Monica buyer leads",
        "Malibu buyer leads",
      ],
    },
    excerpt:
      "Where LA agents find buyers ready to move in Beverly Hills, Santa Monica, Malibu and Pasadena — and what high-end LA buyers need to know before they offer.",
    productSlug: "california-buyer-leads",
    published: "2026-10-13",
    updated: "2026-10-13",
    readingMinutes: 6,
    sections: [
      {
        heading: "The Los Angeles buyer market",
        paragraphs: [
          "Greater Los Angeles is a patchwork of separate cities and neighborhoods, each with its own buyers: Beverly Hills for estates and prestige, Santa Monica for coastal city living, Malibu for oceanfront homes, Pasadena for character homes and families. Buyers include entertainment and tech professionals, relocating families, international buyers and investors. Prices are high, so every serious buyer is contested by several agents.",
        ],
      },
      {
        heading: "What high-end LA buyers need to know",
        paragraphs: ["Help buyers understand costs that are specific to LA:"],
        bullets: [
          "Measure ULA: since April 2023 the City of Los Angeles adds a transfer tax on sales above roughly $5 million, with a higher rate above roughly $10 million (thresholds are adjusted each year). It applies to properties inside City of LA limits — not in separate cities such as Beverly Hills, Santa Monica or Malibu, which have their own rules.",
          "Wildfire risk and home insurance availability, especially in hillside and coastal areas.",
          "Property tax under Proposition 13: about 1% of the purchase price plus local assessments, reset on purchase.",
        ],
      },
      {
        heading: "Where to find LA buyers",
        paragraphs: [
          "Portal enquiries (Zillow, Realtor.com, Redfin), open houses, relocation companies and entertainment-industry business managers are all strong sources, as are targeted ads for specific neighborhoods. To add active buyers quickly, our [California Real Estate Buyer Leads](/products/california-buyer-leads) file has 3,000+ buyers sourced this month across the state — including Beverly Hills, Santa Monica, Malibu and Pasadena — each with target city, property type, estimated budget in USD and timeframe. Filter to your LA neighborhoods and call the \"Immediate\" buyers first.",
        ],
      },
      {
        heading: "Rules for contacting LA buyers",
        paragraphs: [
          "Scrub numbers against the National Do Not Call Registry and follow the TCPA for calls and texts. California requires your name and DRE licence number on first-point-of-contact marketing, personal data must be handled under the CCPA/CPRA, and since August 2024 NAR rules require a written buyer agreement before touring a home with a buyer.",
        ],
      },
    ],
    faqs: [
      {
        question: "Where do Los Angeles agents get buyer leads?",
        answer:
          "From Zillow, Realtor.com and Redfin enquiries, open houses, relocation companies, business managers in the entertainment industry, neighborhood-targeted ads and verified buyer lead lists.",
      },
      {
        question: "Does Measure ULA apply in Beverly Hills or Santa Monica?",
        answer:
          "No. Measure ULA applies to sales within City of Los Angeles limits. Beverly Hills, Santa Monica and Malibu are separate cities with their own transfer tax rules.",
      },
      {
        question: "Do your California buyer leads include Los Angeles areas?",
        answer:
          "Yes. The statewide file includes buyers targeting Beverly Hills, Santa Monica, Malibu and Pasadena, and target city is a separate column you can filter on.",
      },
    ],
  },
  {
    slug: "how-much-do-real-estate-leads-cost",
    title: "How Much Do Real Estate Leads Cost?",
    seo: {
      title: "How Much Do Real Estate Leads Cost? (2026 Price Guide)",
      description:
        "What real estate leads actually cost in 2026 — portal pricing, Google and Meta ad costs, referral splits and bought lists — and how to work out your real cost per deal.",
      keywords: [
        "how much do real estate leads cost",
        "real estate lead cost",
        "cost per lead real estate",
        "real estate lead prices",
        "buy real estate leads cost",
        "cost per acquisition real estate",
      ],
    },
    excerpt:
      "Portal leads, paid ads, referral fees and bought lists all price differently. Here is what each one really costs per lead — and why cost per deal is the only number that matters.",
    productSlug: "miami-buyer-leads",
    published: "2026-10-25",
    updated: "2026-10-25",
    readingMinutes: 9,
    sections: [
      {
        heading: "Why there is no single price for a real estate lead",
        paragraphs: [
          "Ask five agents what a lead costs and you will get five answers, because \"lead\" means very different things. A name and an email harvested from a content download is not the same asset as someone who has booked a viewing. Prices also swing hard by market: the same portal lead can cost four or five times more in a dense, competitive metro than in a quiet suburb, because you are bidding against every other agent in the same postcode.",
          "So instead of hunting for one number, price each channel separately, then divide by the share that actually closes. That second step is where most lead-buying decisions go wrong.",
        ],
      },
      {
        heading: "Portal leads (Zillow, Realtor.com, Rightmove, Bayut)",
        paragraphs: [
          "The big portals sell you proximity to their traffic, usually priced by postcode or ZIP and billed monthly. Published figures and agent reports put most portal leads somewhere between roughly $20 and $300 each, with Zillow's own stated averages sitting near the middle of that band and the hottest metros reported well above it. Treat any single quoted figure with suspicion — pricing is set per area and renegotiated constantly.",
          "Portals have also moved towards success-based pricing. Zillow's Preferred programme, which replaced Flex, charges nothing per lead and instead takes a share of your commission — commonly quoted in the 15–40% range — when a referred lead closes. That shifts risk off your monthly budget and onto your commission, which suits agents with capacity but thin cash flow.",
        ],
        bullets: [
          "Billed monthly, per area, whether or not the leads convert.",
          "Leads are usually shared or re-sold if you do not respond fast, so speed to first contact decides your return.",
          "Reported close rates are low — many agents describe converting only a small single-digit percentage of portal connections.",
        ],
      },
      {
        heading: "Google and Meta ads",
        paragraphs: [
          "Running your own campaigns gives you control over targeting and keeps the lead exclusive to you. Real estate is one of the more expensive advertising categories, because the lifetime value of a client is high and everyone knows it. Search ads for transactional terms cost far more per click than awareness campaigns on social, and your cost per lead depends almost entirely on how good your landing page and follow-up are.",
          "The honest downside: you are paying for a learning curve. Expect a period of spending with little to show while you work out which audiences, creatives and offers convert. Budget for that as a cost of the channel, not as a failure.",
        ],
      },
      {
        heading: "Referral networks and commission splits",
        paragraphs: [
          "Referral platforms and relocation networks charge nothing upfront and take a slice of the commission at closing — often a quarter to a third of your side of the deal. Nothing to pay if nothing closes, which is genuinely attractive. But the leads are rarely exclusive, and over a full year a referral split is usually the most expensive way to buy business, because you pay the most on exactly the deals that worked.",
        ],
      },
      {
        heading: "Buying a list of owners or buyers",
        paragraphs: [
          "The fourth option is to buy the contact data outright and do your own outreach. You pay once for a file, and every contact in it is yours to work for as long as the data stays accurate. The economics are completely different from per-lead pricing: a dataset priced in the hundreds or low thousands, divided across thousands of records, lands at cents per contact rather than tens or hundreds of dollars.",
          "The trade-off is that you supply the effort. Nobody in a bought file has raised a hand for you specifically — buyer datasets collect people who enquired about property in a market, and owner datasets list people who hold title. You still have to call, qualify and nurture. The upside is that the cost does not scale with your ambition: working a file harder costs you time, not more budget.",
          "Our [buyer lead datasets](/products) are priced this way — a one-time payment for a CRM-ready Excel file covering Dubai, Miami, California or the UK, with the [Dubai Property Owner Database](/products/owner-database) at $300 for the owner side.",
        ],
      },
      {
        heading: "The only number that matters: cost per deal",
        paragraphs: [
          "Cost per lead is a vanity metric. What you actually spend to win a client is your channel spend divided by the deals it produced. Work it out like this:",
        ],
        bullets: [
          "Take your total spend on one channel over a full quarter — fees, ad budget, and the hours you or your team put in.",
          "Count the deals that closed from it, not the appointments or the \"warm\" conversations.",
          "Divide. Compare that figure against your average commission per deal.",
          "A channel that produces leads at $20 each but closes one in four hundred is worse than one at $200 each that closes one in twenty.",
        ],
      },
      {
        heading: "What to do before you spend anything",
        paragraphs: [
          "Two cheap steps change the maths on every channel above. First, fix your response time — leads contacted within minutes convert dramatically better than leads contacted the next day, and this costs nothing but discipline. Second, get a CRM in place so no contact is worked twice by two people in your office, and so you can actually attribute closings back to a channel.",
          "Without those two things, every number in this guide gets worse, and you will not be able to tell which channel to cut.",
        ],
      },
      {
        heading: "Rules on contacting leads you have bought",
        paragraphs: [
          "Buying data does not buy permission to contact people however you like. In the US, calls to mobile numbers fall under the TCPA and state do-not-call rules. In the UK and EU, the UK GDPR and PECR govern marketing contact, and you need a lawful basis plus a working opt-out. In the UAE, telemarketing regulations limit marketing calls to daytime hours from company-registered numbers and require you to honour the Do Not Call Registry.",
          "Screen any list you buy against the relevant do-not-call registers before you dial, keep a record of opt-outs, and identify yourself and your brokerage on first contact. This is both the legal position and, in practice, what keeps your numbers from being blocked.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does a real estate lead cost in 2026?",
        answer:
          "It depends entirely on the channel and the market. Portal leads commonly run from roughly $20 to $300 each and are priced per ZIP or postcode. Referral networks charge no upfront fee but take 15–40% of your commission at closing. Bought datasets work out at cents per contact because you pay once for the whole file and do the outreach yourself.",
      },
      {
        question: "Are cheap real estate leads worth it?",
        answer:
          "Only if they convert. Cost per lead is meaningless on its own — divide your total channel spend by the deals it actually closed. A $20 lead that converts at one in four hundred costs more per deal than a $200 lead that converts at one in twenty.",
      },
      {
        question: "Is it cheaper to buy a lead list or pay per lead?",
        answer:
          "Per contact, a bought list is far cheaper, and the contacts stay yours. Per-lead pricing buys you intent instead: someone has already enquired. A list shifts the cost from money to your own calling and follow-up time, so it suits teams with capacity to work it.",
      },
      {
        question: "How do I work out my cost per acquisition?",
        answer:
          "Add up everything you spent on one channel over a quarter, including your team's time, then divide by the number of deals that closed from it. Compare that to your average commission. Run this per channel and cut whatever loses.",
      },
    ],
  },
  {
    slug: "where-to-buy-real-estate-leads",
    title: "Where to Buy Real Estate Leads",
    seo: {
      title: "Where to Buy Real Estate Leads: 2026 Buyer's Guide",
      description:
        "The main places to buy real estate leads in 2026 — portals, lead brokers, ad agencies and owner or buyer datasets — with what to check before you pay anyone.",
      keywords: [
        "where to buy real estate leads",
        "buy real estate leads",
        "best place to buy real estate leads",
        "real estate lead providers",
        "buy property buyer leads",
        "real estate lead generation companies",
      ],
    },
    excerpt:
      "Portals, lead brokers, ad agencies and raw datasets all sell real estate leads differently. Here's how each model works, who it suits, and the checks to run before you pay.",
    productSlug: "buyer-leads",
    published: "2026-10-25",
    updated: "2026-10-25",
    readingMinutes: 8,
    sections: [
      {
        heading: "Four ways to buy, not one",
        paragraphs: [
          "\"Buying leads\" covers four quite different transactions. You can rent attention from a portal, buy individual enquiries from a lead broker, hire someone to run ads in your name, or buy a dataset outright and do the outreach yourself. They differ in who owns the contact, who carries the risk, and how the cost behaves as you grow.",
          "Pick based on which of those three things matters most to you — not on which provider has the best sales pitch.",
        ],
      },
      {
        heading: "1. Property portals",
        paragraphs: [
          "Zillow and Realtor.com in the US, Rightmove and Zoopla in the UK, Bayut, Property Finder and Dubizzle in the UAE. You pay for placement in front of traffic that is already searching for property, usually billed monthly by area.",
          "This is the fastest route to enquiries from people actively looking, which is its real advantage. The catch is that you are renting the relationship: stop paying and the flow stops immediately, leads are often shared with competing agents, and pricing in competitive areas is set by whoever is willing to bid most.",
        ],
        bullets: [
          "Best for: agents who need enquiries this month and can respond within minutes.",
          "Watch for: shared or re-sold leads, annual lock-ins, and price rises at renewal.",
        ],
      },
      {
        heading: "2. Lead brokers and pay-per-lead services",
        paragraphs: [
          "These companies generate enquiries through their own ads and sell them on, either per lead or on a monthly package. Some are genuinely good. Many resell the same enquiry to several agents, or pass on leads generated months earlier.",
          "Before you buy, ask exactly how the lead was generated, whether it is exclusive to you, how old it is, and what happens if a number is disconnected. A provider that will not answer those four questions in writing is telling you something.",
        ],
      },
      {
        heading: "3. Ad agencies running campaigns in your name",
        paragraphs: [
          "Here you pay a retainer plus ad spend, and an agency builds funnels on Google and Meta that deliver leads to your CRM. The leads are exclusive and the brand equity is yours. It is the most hands-off way to build a channel you actually control.",
          "It is also the slowest to prove out and the easiest to overpay for. Insist on owning the ad accounts, the pixel data and the landing pages, so you keep the asset if you change agency.",
        ],
      },
      {
        heading: "4. Buying the data directly",
        paragraphs: [
          "The fourth model: buy a file of contacts and work it yourself. Instead of paying per enquiry, you pay once for a dataset and every record in it is yours to call, email and nurture for as long as the data holds up.",
          "This is how brokers who want volume and control usually buy. There is no monthly fee, no shared leads, and no provider deciding what you pay next quarter. What you give up is intent — you are starting the conversation rather than answering one — so it rewards teams with the discipline to actually work a list.",
          "Two kinds of file are worth knowing apart. An owner database lists people who hold title to property, which is what you want if you are chasing listings. A buyer dataset lists people who enquired about buying in a market, which is what you want if you have stock to sell.",
        ],
      },
      {
        heading: "What to check before you pay anyone",
        paragraphs: [
          "The same due diligence applies whichever model you choose:",
        ],
        bullets: [
          "Ask for a sample. Any serious provider will show you redacted or sample records before you buy.",
          "Ask when the data was last verified, and what share of numbers they expect to be reachable.",
          "Ask whether the leads or records are exclusive, and if not, how many others get them.",
          "Check the refund or replacement terms in writing, not on a sales call.",
          "Check the legal basis for contacting the people in the file in your jurisdiction, and whether the provider screens against do-not-call registers.",
          "Start small. Buy the smallest unit the provider offers, work it properly for a month, and measure deals — not replies — before you scale.",
        ],
      },
      {
        heading: "Where our datasets fit",
        paragraphs: [
          "We sell the fourth model. The [Dubai Property Owner Database](/products/owner-database) is a one-time $300 file of 1,000,000+ verified owners across 200+ communities, cross-checked against Dubai Land Department records — built for brokers chasing listings.",
          "On the buyer side, we publish separate datasets of high-intent enquirers for [Dubai](/products/buyer-leads), [Miami](/products/miami-buyer-leads), [California](/products/california-buyer-leads) and the [UK](/products/uk-buyer-leads). All of them arrive as CRM-ready Excel files within 10 minutes of payment, so you can test one against whatever you are paying per lead today.",
        ],
      },
      {
        heading: "Contacting what you buy, lawfully",
        paragraphs: [
          "Wherever you buy, you remain responsible for how you make contact. US calls to mobiles fall under the TCPA and state do-not-call lists; UK and EU marketing is governed by GDPR and PECR; UAE telemarketing rules restrict marketing calls to daytime hours from company-registered numbers and require you to respect the Do Not Call Registry.",
          "Screen before you dial, log every opt-out, and identify yourself and your brokerage on the first call. Providers can supply data; only you can make the contact compliant.",
        ],
      },
    ],
    faqs: [
      {
        question: "Where is the best place to buy real estate leads?",
        answer:
          "There is no single best place — it depends on what you need. Portals are fastest for live enquiries but rented and often shared. Ad agencies build an exclusive channel you own, slowly. Buying a dataset outright is cheapest per contact and gives you full control, but you supply the outreach.",
      },
      {
        question: "Is buying real estate leads legal?",
        answer:
          "Buying contact data is legal in most markets, but contacting people is regulated. In the US that means the TCPA and do-not-call rules; in the UK and EU, GDPR and PECR; in the UAE, telemarketing rules limiting call hours and requiring you to honour the Do Not Call Registry. Screen lists against the relevant registers and honour every opt-out.",
      },
      {
        question: "What should I ask a lead provider before buying?",
        answer:
          "Ask for a sample, ask when the data was last verified, ask whether leads are exclusive to you, get the refund or replacement policy in writing, and ask how the data was collected. Then buy the smallest package first and measure closed deals before scaling.",
      },
      {
        question: "What is the difference between owner data and buyer leads?",
        answer:
          "An owner database lists people who hold title to property — use it to win listings. A buyer dataset lists people who enquired about buying in a market — use it when you already have stock to sell.",
      },
    ],
  },
  {
    slug: "dubai-land-department-owner-search",
    title: "Dubai Land Department Owner Search: What It Can and Cannot Do",
    seo: {
      title: "Dubai Land Department Owner Search: How It Works (2026)",
      description:
        "What the Dubai Land Department owner search actually does, what details you need to use it, and how brokers find owner contact details it will not give you.",
      keywords: [
        "Dubai Land Department owner search",
        "DLD owner search",
        "how to check property owner in Dubai",
        "Dubai property ownership check",
        "find owner of property Dubai",
        "Dubai title deed check",
      ],
    },
    excerpt:
      "The DLD does hold Dubai's ownership records — but it is not a public lookup tool. Here's exactly what you can get from it, what you cannot, and what brokers use instead.",
    productSlug: "owner-database",
    published: "2026-10-25",
    updated: "2026-10-25",
    readingMinutes: 7,
    sections: [
      {
        heading: "What the Dubai Land Department actually holds",
        paragraphs: [
          "The Dubai Land Department (DLD) is the government authority that registers every property transaction in the emirate and issues title deeds. Through the DLD and its Dubai REST app, it also publishes transaction data, rental index figures and project information. If a unit changed hands in Dubai, the DLD recorded it.",
          "That makes the DLD the authoritative source on who owns what. It does not make it a directory of owners you can browse.",
        ],
      },
      {
        heading: "The ownership verification service: what it does",
        paragraphs: [
          "The DLD offers an ownership verification service, and this is what most people mean by \"DLD owner search\". It answers a narrow question: does this specific, identified person own property in Dubai?",
          "To use it you supply identifying details for the person — typically an Emirates ID, passport number or the exact registered name — and the service confirms whether that person holds property. It is designed for verification: confirming a counterparty is who they claim to be before you transact.",
        ],
      },
      {
        heading: "What it will not do",
        paragraphs: [
          "Here is where the expectation usually breaks. The service works from the person to the property, not the other way round, and it does not hand out contact details.",
        ],
        bullets: [
          "You cannot enter a tower and unit number and be told who owns it.",
          "You cannot pull a list of all owners in a community.",
          "It does not return phone numbers or email addresses, ever.",
          "You need identifying details you probably do not have if you are prospecting cold.",
        ],
      },
      {
        heading: "Why owner contact details are not public",
        paragraphs: [
          "Dubai treats ownership records as personal data. The UAE's federal data protection law, and the DLD's own handling of title information, mean owner phone numbers are not published — exactly as land registries in most countries do not publish them.",
          "This is worth understanding properly, because it explains why every shortcut you will be offered is either a legitimate commercial dataset or something you should not touch. Scraped portal data, leaked files and \"hacked DLD\" lists circulate widely and are both unlawful and unreliable.",
        ],
      },
      {
        heading: "What you can legitimately check as a party to a deal",
        paragraphs: [
          "If you are actually transacting, you have more access than a cold prospector:",
        ],
        bullets: [
          "The seller can produce their title deed, which names the owner and the unit — ask for it before you market anything.",
          "Dubai REST lets owners view and share their own property records, so a cooperative seller can verify themselves in seconds.",
          "A signed Form A gives you the owner's details directly, and you need one before marketing a unit anyway.",
          "For a tenanted unit, Ejari registration ties the tenancy to the registered owner.",
        ],
      },
      {
        heading: "How brokers actually build owner lists",
        paragraphs: [
          "Since the registry will not give you a prospecting list, brokers build one from the methods in our guide on [how to find property owners in Dubai](/guides/how-to-find-property-owners-in-dubai) — farming a community, working \"by owner\" portal listings, building relationships with building managers, and running valuation-led ads that get owners to come to them.",
          "The fastest route at scale is a commercial owner database. Ours — the [Dubai Property Owner Database](/products/owner-database) — covers 1,000,000+ verified owners across 200+ communities with direct mobile numbers, cross-checked against DLD records and refreshed monthly. It is $300 one-time and arrives as a CRM-ready Excel file within 10 minutes, filterable by community and property type.",
          "To be clear about what that is: it is a commercial dataset cross-referenced against public DLD transaction records, not access to the DLD's internal systems. Nobody can sell you that.",
        ],
      },
      {
        heading: "Before you call anyone",
        paragraphs: [
          "Dubai regulates both brokerage and outreach. Hold a valid RERA licence, sign a Form A before you market a unit, and get a Trakheesi permit for every advert. The UAE's telemarketing rules restrict marketing calls to 9am–6pm from company-registered numbers and require you to respect the Do Not Call Registry.",
          "Keep a record of every opt-out and identify yourself and your brokerage on first contact. Brokers lose licences over outreach, not over data.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I search who owns a property in Dubai?",
        answer:
          "Not by address. The Dubai Land Department's verification service confirms whether a specific, identified person owns property in Dubai — you supply details such as an Emirates ID or passport number. You cannot enter a unit number and get the owner's name, and the service never returns contact details.",
      },
      {
        question: "Is Dubai property ownership public information?",
        answer:
          "No. The DLD registers every transaction and publishes aggregate transaction and rental data, but owner identities and contact details are treated as personal data and are not published.",
      },
      {
        question: "How do brokers get Dubai property owners' phone numbers?",
        answer:
          "Through community farming, \"by owner\" portal listings, relationships with building managers, valuation-led advertising, Form A listing agreements, and commercial owner databases cross-checked against DLD transaction records. The registry itself does not supply numbers.",
      },
      {
        question: "Can I check a title deed is genuine?",
        answer:
          "Yes. Ask the seller to verify their ownership through the Dubai REST app and share the record, or verify the title deed through the DLD's own services before you market or transact.",
      },
    ],
  },
  {
    slug: "palm-jumeirah-property-owners",
    title: "How to Reach Palm Jumeirah Property Owners",
    seo: {
      title: "Palm Jumeirah Property Owners: Winning Listings in 2026",
      description:
        "How brokers reach Palm Jumeirah villa and apartment owners in 2026 — who owns on the fronds, the Shoreline and the Crescent, and what actually wins the mandate.",
      keywords: [
        "Palm Jumeirah property owners",
        "Palm Jumeirah villa owners",
        "Palm Jumeirah landlords",
        "Signature Villas owners",
        "Palm Jumeirah owner contact",
        "Palm Jumeirah listings",
      ],
    },
    excerpt:
      "Palm Jumeirah is Dubai's highest-value freehold address. Reaching its owners takes a different approach to farming a tower — here's what works, frond by frond.",
    productSlug: "owner-database",
    published: "2026-10-25",
    updated: "2026-10-25",
    readingMinutes: 7,
    sections: [
      {
        heading: "Why Palm Jumeirah is a different kind of farm",
        paragraphs: [
          "Palm Jumeirah is a man-made island of villas, low-rise apartment buildings and luxury hotels off Dubai's coast, and it sits at the top end of the city's freehold market. Ticket sizes run from apartments on the trunk to Signature Villas on the fronds that trade among Dubai's most expensive homes.",
          "That changes the maths. Transaction volume is far lower than in Dubai Marina or JVC, but a single mandate can be worth a year of mid-market deals. Volume prospecting is the wrong tool here — you want a small, precisely-targeted owner list and a lot of patience.",
        ],
      },
      {
        heading: "Know the sub-markets before you call",
        paragraphs: [
          "\"Palm Jumeirah\" is several distinct markets, and owners in each want different things:",
        ],
        bullets: [
          "Fronds — Signature Villas and Garden Homes: large freehold villas with private beach access, the island's trophy assets. Owners are often high-net-worth individuals or family offices, frequently non-resident.",
          "The trunk — Shoreline Apartments and Golden Mile: the island's most liquid stock, with a deep mix of investor landlords and holiday-home operators.",
          "The Crescent and newer west-side developments: branded residences and hotel-linked apartments, bought largely for yield, prestige and short-let income.",
          "Townhouses and newer villa releases: owners who bought off-plan and are deciding at handover whether to move in, let or flip.",
        ],
      },
      {
        heading: "Who actually owns here",
        paragraphs: [
          "Palm ownership skews heavily international, and a large share of owners do not live in the UAE. Many hold through companies rather than personal names, which is why registry-style searches are of little use for prospecting.",
          "Practically, that means two things. Your first contact is often by WhatsApp across time zones rather than a daytime phone call, and the person who answers may be a family office or PA rather than the owner. Write your opener so it survives being forwarded.",
        ],
      },
      {
        heading: "What wins a Palm mandate",
        paragraphs: [
          "Owners at this level are approached constantly, so a generic \"are you thinking of selling?\" message is deleted. What gets a reply is specific, verifiable information they do not already have:",
        ],
        bullets: [
          "A named, qualified buyer looking for their exact frond, villa type or stack — not a vague \"I have clients\".",
          "The last three comparable sales on their frond, with the detail that distinguishes them: plot size, beach frontage, whether the villa was extended or renovated.",
          "For apartment owners, a realistic short-let versus long-let income comparison, since many Palm units run as holiday homes.",
          "Discretion, offered explicitly. Many Palm owners will not list publicly, so an off-market process with a short, vetted buyer list is often the only acceptable route.",
        ],
      },
      {
        heading: "Getting Palm Jumeirah owners' contact details",
        paragraphs: [
          "Owner contact details are not public in Dubai, and the Dubai Land Department's verification service works from an identified person to their property, not from a villa to its owner — see our guide to the [Dubai Land Department owner search](/guides/dubai-land-department-owner-search) for what it can and cannot do.",
          "Most brokers working the Palm combine three things: a verified owner list to start from, relentless attention to who is transacting, and relationships with the concierge and property management teams who hear first when an owner is unhappy or relocating.",
          "Our [Dubai Property Owner Database](/products/owner-database) includes Palm Jumeirah among its 200+ communities, with direct mobile numbers and the community and property type on every record — so you can filter to Palm villas or Shoreline apartments specifically rather than calling the whole island. $300 one-time, delivered as a CRM-ready Excel file within 10 minutes.",
        ],
      },
      {
        heading: "Rules that apply on the Palm",
        paragraphs: [
          "The regulatory position is the same as anywhere in Dubai, and it is enforced: a valid RERA broker licence, a signed Form A before you market a unit, and a Trakheesi permit for every advert, including social posts. Short-let units need a holiday-home permit from Dubai's Department of Economy and Tourism, which matters because so many Palm apartments operate that way.",
          "On outreach, UAE telemarketing rules limit marketing calls to 9am–6pm from company-registered numbers and require you to respect the Do Not Call Registry. With non-resident owners, remember that 9am–6pm means Dubai time.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I find Palm Jumeirah property owners?",
        answer:
          "Owner details are not public. Brokers combine a verified owner database filtered to Palm Jumeirah with relationships among building and concierge teams, close tracking of transactions on each frond, and off-market buyer lists that give owners a discreet route to sell.",
      },
      {
        question: "Does the Dubai owner database cover Palm Jumeirah?",
        answer:
          "Yes. Palm Jumeirah is one of the 200+ communities included, and every record carries its community and property type, so you can filter to Palm villas or Shoreline apartments only.",
      },
      {
        question: "Why do so many Palm Jumeirah sales happen off-market?",
        answer:
          "Ticket sizes are high and owners are often private high-net-worth individuals who do not want their home advertised. A discreet process with a short, vetted buyer list is frequently the only approach they will accept.",
      },
      {
        question: "Are Palm Jumeirah owners mostly based in Dubai?",
        answer:
          "A large share are non-resident, and many hold through companies rather than personal names. Expect first contact by WhatsApp across time zones, and write your opener so it still makes sense when a PA or family office forwards it.",
      },
    ],
  },
  {
    slug: "business-bay-property-owners",
    title: "How to Reach Business Bay Property Owners",
    seo: {
      title: "Business Bay Property Owners: How to Win Listings (2026)",
      description:
        "How brokers reach Business Bay property owners in 2026 — the investor landlords, short-let operators and off-plan buyers behind Dubai's densest tower district.",
      keywords: [
        "Business Bay property owners",
        "Business Bay landlords",
        "Business Bay owner database",
        "Business Bay listings",
        "contact property owners Business Bay",
        "Business Bay investors",
      ],
    },
    excerpt:
      "Business Bay is a dense, fast-turning investor market right beside Downtown. Here's who owns there, what they want from a broker, and how to reach them.",
    productSlug: "owner-database",
    published: "2026-10-25",
    updated: "2026-10-25",
    readingMinutes: 6,
    sections: [
      {
        heading: "Why Business Bay rewards volume prospecting",
        paragraphs: [
          "Business Bay is a high-density district of residential and commercial towers along the Dubai Canal, immediately south of Downtown Dubai and within reach of DIFC. The stock skews towards studios and one-bedroom apartments, which means a lot of units, a lot of owners and a lot of transactions.",
          "That is the opposite profile to Palm Jumeirah. Individual tickets are modest, but turnover is high and the owner base is overwhelmingly investor-led — people who bought to let or to flip and who make decisions on numbers rather than sentiment. A broker who can reach them at scale with a credible rental or sale figure does well here.",
        ],
      },
      {
        heading: "Who owns in Business Bay",
        paragraphs: ["Three groups dominate, and each wants a different conversation:"],
        bullets: [
          "Yield-focused investor landlords, often non-resident, who care about net rent after service charges, void periods and tenant quality.",
          "Short-let operators running units as holiday homes, who care about occupancy, nightly rates and whether a long-term let would net them more.",
          "Off-plan buyers reaching handover, deciding whether to move in, let the unit or resell — a recurring wave as each new tower completes.",
        ],
      },
      {
        heading: "Pick your towers, then your stacks",
        paragraphs: [
          "Business Bay has enough towers that treating it as one market is a waste of effort. Choose a cluster you can genuinely know — canal-facing, Downtown-view, or the older towers near the Bay Avenue side — and learn the detail that moves price: service charges per square foot, which stacks keep the canal or Burj Khalifa view, which buildings have chronic parking or handover issues.",
          "That detail is your credibility. An owner who hears you quote their building's service charge accurately will take the next call.",
        ],
      },
      {
        heading: "Openers that get replies in Business Bay",
        paragraphs: ["Match the message to the owner type:"],
        bullets: [
          "Landlords: a current rental valuation for their exact layout and stack, plus a pre-qualified tenant and an offer to handle Ejari registration and renewals.",
          "Short-let operators: a side-by-side of their likely short-let net income against a long-term let or a sale at today's price.",
          "Handover-stage owners: what units in their tower are actually achieving on resale and on rent, delivered in the weeks around completion.",
          "Keep it short. This is a market of busy investors reading WhatsApp on their phone — one specific number beats three paragraphs.",
        ],
      },
      {
        heading: "Getting Business Bay owners' contact details",
        paragraphs: [
          "Dubai does not publish owner contact details, and the Dubai Land Department's verification service cannot be used to look up who owns a given unit. So most brokers pair tower farming with a verified owner list.",
          "Our [Dubai Property Owner Database](/products/owner-database) covers Business Bay among its 200+ communities, with direct mobile numbers and the community and property type on every record. Filter the Excel file to Business Bay studios and one-beds and you have a farm list sized for a calling week. $300 one-time, delivered within 10 minutes.",
          "For the wider playbook, see [how to find property owners in Dubai](/guides/how-to-find-property-owners-in-dubai).",
        ],
      },
      {
        heading: "Rules to follow",
        paragraphs: [
          "Hold a valid RERA broker licence, sign a Form A before marketing any unit, and get a Trakheesi permit for every advert. Units let short-term need a holiday-home permit from Dubai's Department of Economy and Tourism — relevant in Business Bay, where a meaningful share of stock runs that way.",
          "UAE telemarketing rules limit marketing calls to 9am–6pm from company-registered numbers and require you to honour the Do Not Call Registry. With a high-volume market like this one, log every opt-out properly — the volume that makes Business Bay attractive also makes sloppy calling expensive.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I find Business Bay property owners?",
        answer:
          "Farm a cluster of towers so you know their service charges and view stacks, work \"by owner\" portal listings, build relationships with building managers, and use a verified owner database filtered to Business Bay for direct mobile numbers.",
      },
      {
        question: "Does the Dubai owner database include Business Bay?",
        answer:
          "Yes. Business Bay is one of the 200+ communities covered, and every record lists its community and property type, so you can filter the Excel file to Business Bay — and to studios or one-beds specifically.",
      },
      {
        question: "What do Business Bay landlords want from a broker?",
        answer:
          "Numbers. Net rent after service charges, a realistic void assumption, a pre-qualified tenant and someone to handle Ejari registration and renewals. This is an investor market, so sentiment-led pitches do not land.",
      },
      {
        question: "When is the best time to approach a Business Bay owner?",
        answer:
          "Around handover and around lease renewal. Off-plan buyers reaching completion are actively deciding whether to move in, let or resell, and landlords facing a renewal are weighing their rent against the current market.",
      },
    ],
  },
  {
    slug: "jvc-property-owners",
    title: "How to Reach JVC Property Owners",
    seo: {
      title: "JVC Property Owners: Winning Listings in Dubai's Busiest Community",
      description:
        "How brokers reach Jumeirah Village Circle property owners in 2026 — the yield investors, first-time landlords and handover-stage owners behind JVC's volume.",
      keywords: [
        "JVC property owners",
        "Jumeirah Village Circle owners",
        "JVC landlords",
        "JVC owner database",
        "JVC listings Dubai",
        "contact property owners JVC",
      ],
    },
    excerpt:
      "JVC is one of Dubai's highest-volume communities — hundreds of buildings and a constantly churning investor owner base. Here's how to farm it properly.",
    productSlug: "owner-database",
    published: "2026-10-25",
    updated: "2026-10-25",
    readingMinutes: 6,
    sections: [
      {
        heading: "Why JVC is the volume play",
        paragraphs: [
          "Jumeirah Village Circle is a large mid-market freehold community in central Dubai, built around a ring road layout and made up of low- and mid-rise apartment buildings, townhouses and villas. It is consistently among the emirate's busiest communities for transactions, largely because entry prices are low relative to prime districts and rental yields are attractive.",
          "For a broker, that means the opposite of a trophy market: smaller tickets, but a very deep owner base and constant movement. JVC rewards systems — a list, a script, a CRM and the discipline to work them — rather than relationship-building with a handful of owners.",
        ],
      },
      {
        heading: "Who owns in JVC",
        paragraphs: ["The owner base is distinctive, and it shapes every conversation:"],
        bullets: [
          "Yield investors, often first-time buyers in Dubai, who bought specifically for rental return and watch net yield closely.",
          "Non-resident owners across the GCC, South Asia and Europe who bought remotely and have never seen the unit — they rely entirely on their agent's reporting.",
          "Handover-stage owners: JVC has a continuous pipeline of new buildings completing, each releasing a fresh cohort of owners deciding whether to let or resell.",
          "Owner-occupiers in the townhouses and villas, often families who will eventually trade up to a larger community.",
        ],
      },
      {
        heading: "Farm by building, not by district",
        paragraphs: [
          "JVC has hundreds of buildings and they are not interchangeable. Service charges, build quality, parking provision and management vary enormously from one to the next, and owners know it. Pick a cluster — a district within the circle, or ten buildings you can genuinely track — and become the broker who knows what each one actually achieves.",
          "The detail that earns you a hearing: what a 1-bed in their specific building rents for today, what the service charge is per square foot, and which newly completed buildings nearby are about to compete with them for tenants.",
        ],
      },
      {
        heading: "What works on a JVC owner",
        paragraphs: [
          "These are numbers-driven owners, many of them remote, and they are called constantly. Earn the reply:",
        ],
        bullets: [
          "Lead with their building and layout, not the community: \"1-beds in your building are renting at X; yours is let at Y\" starts a real conversation.",
          "For non-resident owners, offer what they actually lack — honest reporting, photos, and a view on whether to hold or sell.",
          "At handover, give new owners the let-versus-resell comparison before anyone else does. This window is short and most brokers miss it.",
          "Be ready to talk about new supply. JVC owners worry about the next building undercutting their rent, and a broker who addresses it openly is more credible than one who does not.",
        ],
      },
      {
        heading: "Getting JVC owners' contact details",
        paragraphs: [
          "Owner contact details are not public in Dubai, and the Dubai Land Department cannot be searched by unit to find an owner. For a community with this many owners, that makes a verified list the only practical starting point.",
          "Our [Dubai Property Owner Database](/products/owner-database) covers JVC among its 200+ communities, with direct mobile numbers and the community and property type on each record — so you can filter to JVC apartments or JVC townhouses and build a calling list by building type. $300 one-time, CRM-ready Excel, delivered within 10 minutes.",
          "Pair it with the broader methods in [how to find property owners in Dubai](/guides/how-to-find-property-owners-in-dubai), and with a script — see our [real estate cold calling scripts](/guides/real-estate-cold-calling-scripts) guide — because JVC is won on call volume done well.",
        ],
      },
      {
        heading: "Rules to follow",
        paragraphs: [
          "A valid RERA broker licence, a signed Form A before marketing any unit, and a Trakheesi permit for every advert. Rentals need Ejari registration, and any unit let short-term needs a holiday-home permit from Dubai's Department of Economy and Tourism.",
          "UAE telemarketing rules limit marketing calls to 9am–6pm from company-registered numbers and require you to respect the Do Not Call Registry. In a high-volume community this is the rule most often broken and the one most likely to cost you — keep a clean opt-out log from day one.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I find JVC property owners?",
        answer:
          "Farm a cluster of buildings rather than the whole community, work \"by owner\" portal listings, build relationships with building managers, and use a verified owner database filtered to Jumeirah Village Circle for direct mobile numbers.",
      },
      {
        question: "Does the Dubai owner database include JVC?",
        answer:
          "Yes. JVC is one of the 200+ communities covered. Every record carries its community and property type, so you can filter the Excel file to JVC apartments or JVC townhouses specifically.",
      },
      {
        question: "Why is JVC good for brokers?",
        answer:
          "Volume. Low entry prices and strong yields make it one of Dubai's busiest communities for transactions, with a deep, constantly churning investor owner base and a steady pipeline of new buildings reaching handover.",
      },
      {
        question: "What do JVC owners care about most?",
        answer:
          "Net rental yield and new supply. Most bought for return, many are non-resident and have never seen the unit, and nearly all worry that a newly completed building nearby will undercut their rent.",
      },
    ],
  },
  {
    slug: "downtown-dubai-property-owners",
    title: "How to Reach Downtown Dubai Property Owners",
    seo: {
      title: "Downtown Dubai Property Owners: Winning Listings (2026)",
      description:
        "How brokers reach Downtown Dubai property owners in 2026 — Burj Khalifa, Opera District and Boulevard owners, who they are and what wins the mandate.",
      keywords: [
        "Downtown Dubai property owners",
        "Burj Khalifa apartment owners",
        "Downtown Dubai landlords",
        "Downtown Dubai owner database",
        "Opera District owners",
        "contact property owners Downtown Dubai",
      ],
    },
    excerpt:
      "Downtown Dubai is the city's most recognisable address and one of its most competitive broker markets. Here's who owns there and how to earn a conversation.",
    productSlug: "owner-database",
    published: "2026-10-25",
    updated: "2026-10-25",
    readingMinutes: 6,
    sections: [
      {
        heading: "Why Downtown is the most contested farm in Dubai",
        paragraphs: [
          "Downtown Dubai is the Emaar-developed district built around the Burj Khalifa, the Dubai Mall, the Dubai Fountain and Dubai Opera. It is the address international buyers name before they know anything else about the city, which makes it permanently liquid — and permanently crowded with brokers.",
          "Prices sit well above the city average and a large share of owners are overseas investors. You will not win here by being the first to call; you will win by being the one with information the owner cannot get from the other six brokers in their WhatsApp.",
        ],
      },
      {
        heading: "The sub-markets inside Downtown",
        paragraphs: ["Owners group into recognisable segments, and they want different things:"],
        bullets: [
          "Burj Khalifa residences: trophy ownership, often held long-term by non-resident high-net-worth owners and frequently transacted off-market.",
          "Opera District and Boulevard towers: the most liquid apartment stock, mixing investor landlords with short-let operators chasing fountain and Burj views.",
          "Older Emaar towers around the Old Town and Souk Al Bahar side: a lower-rise, quieter segment with more owner-occupiers and long-term holders.",
          "Branded and hotel-linked residences: bought for prestige and serviced-income, where the owner's decision is usually about net return after fees.",
        ],
      },
      {
        heading: "Who actually owns here",
        paragraphs: [
          "Downtown ownership is heavily international and substantially non-resident, and a significant share of units are held for a mix of rental income and capital appreciation rather than occupation. Some are held through companies.",
          "Practically: your first contact is usually WhatsApp, not a call; the view line and floor level matter more to price than square footage; and many owners have no intention of ever living in the unit, so \"lifestyle\" pitches fall flat.",
        ],
      },
      {
        heading: "What earns a Downtown mandate",
        paragraphs: [
          "The bar is high because the competition is constant. What cuts through:",
        ],
        bullets: [
          "View-specific comparables. A fountain-view 2-bed on a high floor is a different asset to a city-view one in the same tower, and quoting the right comparable proves you know the building.",
          "A named buyer with a view preference that matches their unit, not a generic \"I have clients looking in Downtown\".",
          "For short-let operators, an honest comparison of holiday-home net income against a long-term let or a sale at today's price.",
          "A discreet, off-market route for Burj Khalifa and branded residence owners, many of whom will not accept a public listing.",
        ],
      },
      {
        heading: "Getting Downtown Dubai owners' contact details",
        paragraphs: [
          "Owner details are not published in Dubai, and the Dubai Land Department's verification service runs from an identified person to their property rather than from a unit to its owner — our guide to the [Dubai Land Department owner search](/guides/dubai-land-department-owner-search) sets out what it will and will not tell you.",
          "Brokers working Downtown generally combine a verified owner list with close transaction tracking and relationships with building management and concierge teams. Our [Dubai Property Owner Database](/products/owner-database) includes Downtown Dubai among its 200+ communities, with direct mobile numbers and the community and property type on every record, so you can filter to Downtown apartments and build a tower-by-tower list. $300 one-time, delivered as a CRM-ready Excel file within 10 minutes.",
        ],
      },
      {
        heading: "Rules to follow",
        paragraphs: [
          "Hold a valid RERA broker licence, sign a Form A before you market a unit, and obtain a Trakheesi permit for every advert — including social posts, which is where brokers in view-led markets most often slip. Short-let units need a holiday-home permit from Dubai's Department of Economy and Tourism, and Downtown has a lot of them.",
          "UAE telemarketing rules restrict marketing calls to 9am–6pm from company-registered numbers and require you to respect the Do Not Call Registry. With a largely non-resident owner base, note that those hours are Dubai time, not the owner's.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I find Downtown Dubai property owners?",
        answer:
          "Owner details are not public. Brokers combine a verified owner database filtered to Downtown Dubai with tower-level transaction tracking, relationships with building and concierge teams, and off-market buyer lists for the trophy stock.",
      },
      {
        question: "Does the Dubai owner database include Downtown Dubai?",
        answer:
          "Yes. Downtown Dubai is one of the 200+ communities covered, and every record lists its community and property type so you can filter to Downtown apartments only.",
      },
      {
        question: "What matters most to a Downtown Dubai owner?",
        answer:
          "Price evidence tied to their exact view and floor, and net return. Most are investors rather than occupiers, many are non-resident, and a large share run or have considered running the unit as a holiday home.",
      },
      {
        question: "Why are Burj Khalifa apartments often sold off-market?",
        answer:
          "Owners at that level value privacy and are approached constantly. A discreet process with a short, vetted buyer list is frequently the only route they will accept, so the broker holding real buyers wins the mandate.",
      },
    ],
  },
  {
    slug: "real-estate-cold-calling-scripts",
    title: "Real Estate Cold Calling Scripts That Get Replies",
    seo: {
      title: "Real Estate Cold Calling Scripts for Agents (2026)",
      description:
        "Cold calling scripts for real estate agents in 2026 — owner, landlord, expired and buyer openers, objection handling, and the rules on calling in the US, UK and UAE.",
      keywords: [
        "real estate cold calling scripts",
        "cold calling scripts for real estate agents",
        "real estate prospecting scripts",
        "cold call script property",
        "real estate objection handling scripts",
        "how to cold call property owners",
      ],
    },
    excerpt:
      "Scripts for calling owners, landlords and buyers — plus the objection handling that keeps the call alive and the calling rules you cannot afford to ignore.",
    productSlug: "owner-database",
    published: "2026-10-25",
    updated: "2026-10-25",
    readingMinutes: 10,
    sections: [
      {
        heading: "What makes a cold call work",
        paragraphs: [
          "Almost every bad real estate cold call fails in the first ten seconds, for the same reason: it is about the agent. \"I'm calling to see if you've considered selling\" asks the owner to do the work of finding a reason to care.",
          "Calls that work invert this. You open with something specific and verifiable about their property or their street, you ask permission to continue, and you aim for a small next step rather than a listing. A script is not a monologue to read — it is the first three lines plus a plan for the four replies you will actually get.",
        ],
        bullets: [
          "Name the property or building in the first sentence. Specificity is what separates you from a call centre.",
          "Ask for permission early: \"is now a bad time?\" gives them an easy, honest out and raises the odds they keep talking.",
          "Have one concrete piece of information to give away for free.",
          "Aim for the small yes — a valuation, a figure by WhatsApp — not the signature.",
        ],
      },
      {
        heading: "Script 1: the owner who may sell",
        paragraphs: [
          "For a verified owner list where you know the community and property type, but not their intentions. Lead with evidence.",
          "\"Hi, is that [name]? My name's [your name] from [brokerage] — I work almost entirely in [building or community]. I'm calling because a [layout] in your building just went under offer at [figure], which is about [X]% above where they were trading six months ago. I've got two buyers who missed it and are still looking in the building. Is now a bad time for thirty seconds?\"",
          "Then, if they stay on: \"I'm not asking you to sell anything. I'd just rather you knew what your unit is worth today than find out in two years. Would it help if I sent you the last three sales in your stack on WhatsApp?\"",
        ],
        bullets: [
          "Why it works: it gives before it asks, it is building-specific, and the ask is a WhatsApp message rather than a meeting.",
          "The real goal of call one is permission to send something — that turns a cold number into a contact you can nurture.",
        ],
      },
      {
        heading: "Script 2: the landlord",
        paragraphs: [
          "Landlords are not emotional about the property; they are managing an asset. Talk about net return and hassle.",
          "\"Hi [name], it's [your name] from [brokerage]. I look after rentals in [building/community] — I'm calling because [layout]s in your building are now letting at around [figure], and I've got a tenant pre-qualified and ready to move. Are you currently let, or between tenants?\"",
          "If they are let: \"No problem — when does the tenancy run to? I'll make a note and come back to you six weeks before renewal with what the market's doing, so you're not deciding blind.\" That single line converts a dead call into a diarised opportunity.",
        ],
      },
      {
        heading: "Script 3: the expired or withdrawn listing",
        paragraphs: [
          "This owner has already decided to sell and has just had a bad experience. Do not criticise the previous agent — diagnose the marketing.",
          "\"Hi [name], it's [your name] from [brokerage]. I noticed your [property] came off the market recently. I'm not calling to tell you your last agent did a bad job — honestly, nine times out of ten it's the price, the photos or the first-week push, not the agent. Can I ask which you think it was?\"",
          "Then listen. The answer tells you exactly what to propose, and asking a genuine question is itself the differentiator — most callers in this situation are pitching.",
        ],
      },
      {
        heading: "Script 4: the buyer enquiry you bought",
        paragraphs: [
          "If you are calling people from a buyer dataset, they enquired about property in your market — but not necessarily about you. Reference the context honestly and get to qualification fast.",
          "\"Hi [name], [your name] from [brokerage]. You'd registered interest in property in [market] — are you still looking, or have you bought already?\"",
          "If still looking: \"Great — two quick questions so I don't waste your time. What's the budget you're working to, and is this to live in or as an investment?\" Those two answers let you send three real options instead of a brochure, which is the whole game.",
        ],
      },
      {
        heading: "Handling the four objections you will actually get",
        paragraphs: [
          "You will hear these on most calling sessions. Have an answer ready and the call survives:",
        ],
        bullets: [
          "\"I'm not interested.\" — \"Completely fair, and I'm not asking you to do anything. Can I just send you the last three sales in your building so you've got it? If it's not useful, delete it.\"",
          "\"How did you get my number?\" — Answer honestly and immediately. Say you work from a licensed commercial property dataset for your market, offer to remove them on the spot, and do it. Hesitating here ends the call and earns a complaint.",
          "\"I already have an agent.\" — \"That's good to hear. I won't get in the way of that. Would it be alright if I sent you my market update once a month, so you've got a second opinion when you need one?\"",
          "\"Send me an email.\" — \"Of course. So I send something useful rather than a brochure — are you more interested in what it's worth to sell, or what it'd rent for?\"",
        ],
      },
      {
        heading: "The operational part nobody writes scripts for",
        paragraphs: [
          "The script matters less than the system around it. Three things determine whether calling works for you:",
        ],
        bullets: [
          "Block the time. Two uninterrupted hours at the same time each day beats calling whenever you feel like it.",
          "Log every call in a CRM, including the no-answers, so the same owner is not called by three agents in your office — the fastest way to burn a community.",
          "Follow up. Most listings from cold calling come from the third to seventh contact, not the first. A list is only worth what your follow-up discipline is.",
        ],
      },
      {
        heading: "Where to get numbers to call",
        paragraphs: [
          "A script needs a list. For owner prospecting in Dubai, contact details are not public and the Dubai Land Department cannot be searched by unit — see [Dubai Land Department owner search](/guides/dubai-land-department-owner-search).",
          "Our [Dubai Property Owner Database](/products/owner-database) gives you 1,000,000+ verified owners across 200+ communities with direct mobile numbers, filterable by community and property type — so you can build a calling list for one building type in one community and work Script 1 or 2 against it. $300 one-time, CRM-ready Excel, delivered within 10 minutes. On the buyer side we publish [buyer datasets](/products) for Dubai, Miami, California and the UK for Script 4.",
        ],
      },
      {
        heading: "Calling rules you cannot ignore",
        paragraphs: [
          "Cold calling is regulated everywhere you are likely to work, and the penalties are real:",
        ],
        bullets: [
          "United States: the TCPA and federal and state do-not-call registries govern calls to mobiles. Scrub your list before dialling and keep records.",
          "United Kingdom and EU: UK GDPR and PECR require a lawful basis for marketing contact, screening against the TPS/CTPS, and a working opt-out on every channel.",
          "UAE: telemarketing rules limit marketing calls to 9am–6pm from company-registered numbers, require you to identify your company, and require you to respect the Do Not Call Registry. Brokers also need a valid RERA licence, a Form A before marketing a unit and a Trakheesi permit for adverts.",
          "Everywhere: honour removal requests immediately and keep a suppression list. One properly handled opt-out costs you nothing; one ignored one can cost your licence.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the best opening line for a real estate cold call?",
        answer:
          "Something specific and verifiable about their property, followed by permission to continue. Naming their building and a recent comparable sale, then asking \"is now a bad time?\", outperforms any variation of \"have you thought about selling?\".",
      },
      {
        question: "How do I answer \"how did you get my number?\"",
        answer:
          "Honestly and immediately. Say you work from a licensed commercial property dataset for your market, offer to remove them from your list there and then, and actually do it. Any hesitation ends the call and invites a complaint.",
      },
      {
        question: "How many times should I follow up after a cold call?",
        answer:
          "Most listings won through calling come from the third to seventh contact rather than the first. Log every call in a CRM and work a planned follow-up sequence — the list is only worth as much as your follow-up discipline.",
      },
      {
        question: "Is real estate cold calling legal?",
        answer:
          "Yes, but it is regulated. The US has the TCPA and do-not-call registries, the UK and EU have GDPR and PECR plus TPS/CTPS screening, and the UAE restricts marketing calls to 9am–6pm from company-registered numbers with a Do Not Call Registry to respect. Screen before dialling and honour every opt-out.",
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
