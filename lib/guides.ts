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
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

/** The guide that sells a given product, if any. */
export function getGuideForProduct(productSlug: string): Guide | undefined {
  return GUIDES.find((g) => g.productSlug === productSlug);
}
