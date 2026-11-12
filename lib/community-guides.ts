import type { Faq } from "@/lib/constants";
import type { Guide } from "@/lib/guides";

/**
 * One guide per Dubai community, for brokers looking for that community's
 * owners. Each has its own sections and FAQs; how to get the owners' numbers,
 * the rules and the "does the file cover it" FAQ are shared, so every page
 * ends at the owner database.
 */
interface CommunitySpec {
  slug: string;
  /** Community name as brokers write it, e.g. "Dubai Hills Estate". */
  name: string;
  seoTitle: string;
  description: string;
  keywords: readonly string[];
  excerpt: string;
  readingMinutes: number;
  /** What the owner file can be filtered to here, e.g. "villas and townhouses". */
  propertyTypes: string;
  /** Two or three related guides, as ready-made markdown links. */
  related: string;
  sections: Guide["sections"];
  faqs: readonly Faq[];
}

const PUBLISHED = "2026-11-12";

function communityGuide(spec: CommunitySpec): Guide {
  return {
    slug: spec.slug,
    title: `How to Reach ${spec.name} Property Owners`,
    seo: { title: spec.seoTitle, description: spec.description, keywords: spec.keywords },
    excerpt: spec.excerpt,
    productSlug: "owner-database",
    published: PUBLISHED,
    updated: PUBLISHED,
    readingMinutes: spec.readingMinutes,
    sections: [
      ...spec.sections,
      {
        heading: `Getting ${spec.name} owners' contact details`,
        paragraphs: [
          "Owner contact details are not public in Dubai, and the Dubai Land Department does not let you look up who owns a unit. A verified list is the practical starting point.",
          `Our [Dubai Property Owner Database](/products/owner-database) covers ${spec.name} among its 200+ communities, with a direct mobile number, the community and the property type on every record, so you can filter the Excel file to ${spec.name} ${spec.propertyTypes} and start calling the same day. It is $300 one-time and delivered within 10 minutes; [get a free sample on WhatsApp](/free-sample?dataset=owner-database) first.`,
          `For the wider playbook, read [how to find property owners in Dubai](/guides/how-to-find-property-owners-in-dubai). Nearby guides: ${spec.related}.`,
        ],
      },
      {
        heading: "Rules to follow",
        paragraphs: [
          "Hold a valid RERA broker licence, sign Form A before you market a unit, get a Trakheesi permit for every advert and register every letting on Ejari. Marketing calls are limited to 9am–6pm from company-registered numbers; never call anyone on the Do Not Call Registry, and log every opt-out.",
        ],
      },
    ],
    faqs: [
      ...spec.faqs,
      {
        question: `Does the Dubai owner database include ${spec.name}?`,
        answer: `Yes. ${spec.name} is one of the 200+ communities covered. Every record carries its community and property type, so you can filter the Excel file to ${spec.name} ${spec.propertyTypes}.`,
      },
    ],
  };
}

export const COMMUNITY_GUIDES: readonly Guide[] = [
  communityGuide({
    slug: "dubai-hills-estate-property-owners",
    name: "Dubai Hills Estate",
    seoTitle: "Dubai Hills Estate Property Owners: Win Listings (2026)",
    description:
      "How brokers reach Dubai Hills Estate property owners in 2026: villa families, apartment investors and handover owners in Emaar's golf-course community.",
    keywords: [
      "Dubai Hills Estate property owners",
      "Dubai Hills owners",
      "Dubai Hills villa owners",
      "Dubai Hills Estate landlords",
      "Dubai Hills owner database",
      "Dubai Hills listings",
    ],
    excerpt:
      "Dubai Hills Estate mixes golf-course villas with apartment towers, so its owners range from families who live there to investors who never have. Here's how to work both.",
    readingMinutes: 5,
    propertyTypes: "villas, townhouses and apartments",
    related:
      "[Arabian Ranches](/guides/arabian-ranches-property-owners), [Sobha Hartland and MBR City](/guides/sobha-hartland-property-owners) and [Emirates Hills](/guides/emirates-hills-property-owners)",
    sections: [
      {
        heading: "Why Dubai Hills Estate matters",
        paragraphs: [
          "Dubai Hills Estate is a master-planned community developed by Emaar with Meraas, built around an 18-hole championship golf course and Dubai Hills Mall, between Al Khail Road and Umm Suqeim Street. It combines villa and townhouse neighbourhoods with mid- and high-rise apartment buildings, which makes it two markets in one.",
          "It is one of the communities that buyers ask for by name, so stock sells and lets quickly. For a broker, that turns the problem around: buyers are easy to find, listings are not.",
        ],
      },
      {
        heading: "Who owns in Dubai Hills Estate",
        paragraphs: ["Expect three distinct owner groups:"],
        bullets: [
          "Villa owner-occupiers: families who bought to live there, often near schools, and who move only for a bigger home or a relocation.",
          "Apartment investors who bought off-plan for capital growth and rental return, many of them living abroad.",
          "Handover-stage owners: new phases keep completing, and each release creates owners deciding whether to move in, let or sell.",
        ],
      },
      {
        heading: "What works on a Dubai Hills owner",
        paragraphs: ["Use different openings for villas and apartments:"],
        bullets: [
          "Villas: lead with a buyer you are holding for their sub-community and plot type. Villa owners respond to a specific buyer, not a general valuation.",
          "Apartments: lead with what their building and layout rents and sells for now, compared with the price they paid off-plan.",
          "At handover, offer a let-versus-sell comparison before the snagging is finished. Owners decide early, and the first credible broker usually gets the mandate.",
          "Know the golf-course and park-facing premiums. Owners know their view is worth more, and a broker who can price it earns the meeting.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I find Dubai Hills Estate property owners?",
        answer:
          "Farm one sub-community or a few buildings, follow handover dates for new phases, work \"by owner\" portal listings and use a verified owner database filtered to Dubai Hills Estate for direct mobile numbers.",
      },
      {
        question: "Who owns property in Dubai Hills Estate?",
        answer:
          "Mostly villa families who live there, apartment investors who bought off-plan, and new owners at handover deciding whether to let or sell.",
      },
    ],
  }),
  communityGuide({
    slug: "arabian-ranches-property-owners",
    name: "Arabian Ranches",
    seoTitle: "Arabian Ranches Property Owners: Win Villa Listings (2026)",
    description:
      "How brokers reach Arabian Ranches property owners in 2026: long-term villa families across Ranches 1, 2 and 3, and the life events that bring them to sell.",
    keywords: [
      "Arabian Ranches property owners",
      "Arabian Ranches villa owners",
      "Arabian Ranches 2 owners",
      "Arabian Ranches 3 owners",
      "Arabian Ranches owner database",
      "Arabian Ranches listings",
    ],
    excerpt:
      "Arabian Ranches owners are mostly families in villas they have held for years. They sell rarely, and for reasons you can anticipate. Here's how to be the broker they call.",
    readingMinutes: 5,
    propertyTypes: "villas and townhouses",
    related:
      "[Dubai Hills Estate](/guides/dubai-hills-estate-property-owners), [The Springs](/guides/the-springs-dubai-property-owners) and [DAMAC Hills](/guides/damac-hills-property-owners)",
    sections: [
      {
        heading: "Why Arabian Ranches is different",
        paragraphs: [
          "Arabian Ranches is Emaar's established villa community off Umm Suqeim Street, with later phases in Arabian Ranches 2 and Arabian Ranches 3. It is family territory: gated sub-communities of villas and townhouses, schools, a golf club and a long waiting list of buyers who want to live there.",
          "Stock is tight because owners hold for years. That makes every listing valuable and every owner relationship worth building early.",
        ],
      },
      {
        heading: "Who owns in Arabian Ranches",
        paragraphs: ["Most owners fall into one of these groups:"],
        bullets: [
          "Long-term owner-occupier families, many of whom bought in the original phases and have seen strong gains.",
          "Former residents who moved away and now let the villa, often managing it from abroad.",
          "Newer owners in Arabian Ranches 3 who bought off-plan and are reaching handover.",
        ],
      },
      {
        heading: "What makes an Arabian Ranches owner sell",
        paragraphs: [
          "These owners sell because of life events, not market timing. Children finishing school, a relocation, retirement or a move to a larger villa are the usual triggers. Stay in touch with useful information, not pitches:",
        ],
        bullets: [
          "Recent sale prices for their exact sub-community and layout, which owners compare with their neighbours.",
          "A named buyer looking for their villa type. In a tight market, a real buyer is the strongest opening you have.",
          "For landlords abroad, an honest note on rent achieved nearby and the cost of a vacancy, with the option to sell instead.",
          "Patience. A friendly call every few months wins more Ranches listings than a hard close.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I find Arabian Ranches villa owners?",
        answer:
          "Pick one sub-community, follow every sale in it, stay in regular touch with owners and use a verified owner database filtered to Arabian Ranches villas for direct mobile numbers.",
      },
      {
        question: "Why are Arabian Ranches listings hard to get?",
        answer:
          "Most owners are families who live in their villas and hold them for years, so few homes come to market and each one is contested by many brokers.",
      },
    ],
  }),
  communityGuide({
    slug: "jlt-property-owners",
    name: "JLT",
    seoTitle: "JLT Property Owners: Jumeirah Lakes Towers Listings (2026)",
    description:
      "How brokers reach JLT property owners in 2026: apartment investors and office owners across the Jumeirah Lakes Towers clusters, and how to farm by cluster.",
    keywords: [
      "JLT property owners",
      "Jumeirah Lakes Towers owners",
      "JLT landlords",
      "JLT owner database",
      "JLT office owners",
      "JLT listings",
    ],
    excerpt:
      "Jumeirah Lakes Towers is a dense grid of residential and office towers, owned largely by investors. Here's how to farm it by cluster and win both apartment and office listings.",
    readingMinutes: 5,
    propertyTypes: "apartments",
    related:
      "[Dubai Marina](/guides/dubai-marina-property-owners), [JBR](/guides/jbr-property-owners) and [JVC](/guides/jvc-property-owners)",
    sections: [
      {
        heading: "Why JLT is a broker's market",
        paragraphs: [
          "Jumeirah Lakes Towers sits across Sheikh Zayed Road from Dubai Marina, inside the DMCC free zone. Its towers are grouped into lettered clusters around man-made lakes, with residential, office and mixed-use buildings side by side and two metro stations on its edge.",
          "Prices are below the Marina's while the location is almost the same, so JLT has a large tenant base and a steady flow of sales. For a broker, it offers volume in a compact area you can cover on foot.",
        ],
      },
      {
        heading: "Who owns in JLT",
        paragraphs: ["JLT's owners are mostly investors:"],
        bullets: [
          "Apartment landlords, many of whom have owned for years and let through an agent or a property manager.",
          "Non-resident owners who bought for yield and rarely visit.",
          "Office owners, including small businesses that own their premises and investors who let offices to DMCC companies.",
        ],
      },
      {
        heading: "Farm JLT by cluster",
        paragraphs: [
          "Towers in JLT differ in age, service charges, management and views, and owners compare them closely. Pick two or three clusters and learn every tower in them:",
        ],
        bullets: [
          "Know the rent and sale price per layout for each tower, and which towers face the lake or the Marina skyline.",
          "Track service charges. They differ widely between towers and decide a landlord's net yield.",
          "For office owners, know which floor plates DMCC tenants want and what fitted offices let for.",
          "Open with the tower, not the community: \"2-beds in your tower let at X this month\" earns a reply.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I find JLT property owners?",
        answer:
          "Farm a few clusters, learn every tower in them, work with building managers and use a verified owner database filtered to JLT for direct mobile numbers.",
      },
      {
        question: "Are JLT owners mostly investors?",
        answer:
          "Yes. Most JLT apartments are let, and many owners live abroad or own several units. JLT also has many office owners because of its DMCC free-zone tenants.",
      },
    ],
  }),
  communityGuide({
    slug: "jbr-property-owners",
    name: "JBR",
    seoTitle: "JBR Property Owners: Jumeirah Beach Residence Listings",
    description:
      "How brokers reach JBR property owners in 2026: beachfront landlords, holiday-home investors and long-term owners across Jumeirah Beach Residence's six clusters.",
    keywords: [
      "JBR property owners",
      "Jumeirah Beach Residence owners",
      "JBR landlords",
      "JBR holiday home owners",
      "JBR owner database",
      "JBR listings",
    ],
    excerpt:
      "JBR's beachfront towers have some of Dubai's longest-standing investor owners, many running holiday homes. Here's how to win their listings and management.",
    readingMinutes: 5,
    propertyTypes: "apartments",
    related:
      "[Dubai Marina](/guides/dubai-marina-property-owners), [JLT](/guides/jlt-property-owners) and [Palm Jumeirah](/guides/palm-jumeirah-property-owners)",
    sections: [
      {
        heading: "Why JBR stands apart",
        paragraphs: [
          "Jumeirah Beach Residence is a line of 40 residential towers in six clusters (Shams, Amwaj, Rimal, Bahar, Sadaf and Murjan) along the beach next to Dubai Marina, with The Walk running at street level. It was one of Dubai's first freehold beachfront developments, so many owners have held for a long time.",
          "Its direct beach access makes it a favourite for holiday lets as well as long-term tenants, and that shapes what owners want to hear from you.",
        ],
      },
      {
        heading: "Who owns in JBR",
        paragraphs: ["JBR owners are mostly investors with very different strategies:"],
        bullets: [
          "Long-term landlords who bought early and let on annual contracts.",
          "Holiday-home owners who let short term and care about occupancy and nightly rates.",
          "Owners abroad who bought a beach apartment for their own use a few weeks a year and let it the rest of the time.",
        ],
      },
      {
        heading: "What works on a JBR owner",
        paragraphs: [],
        bullets: [
          "Know each cluster. Sea views, tower age and service charges vary across the six clusters, and owners compare their cluster with the others.",
          "For holiday-home owners, compare annual rent with short-let income after fees, so they can see which earns more.",
          "For long-term owners, show what their unit would sell for today against what they paid. Many have large gains they have never measured.",
          "Offer management as well as sales: an owner who is unhappy with their manager is often one call away from switching.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I find JBR property owners?",
        answer:
          "Focus on one or two clusters, track every sale and letting there, approach holiday-home owners with an income comparison, and use a verified owner database filtered to JBR for direct mobile numbers.",
      },
      {
        question: "How many towers are in JBR?",
        answer:
          "Jumeirah Beach Residence has 40 residential towers in six clusters: Shams, Amwaj, Rimal, Bahar, Sadaf and Murjan.",
      },
    ],
  }),
  communityGuide({
    slug: "dubai-creek-harbour-property-owners",
    name: "Dubai Creek Harbour",
    seoTitle: "Dubai Creek Harbour Property Owners: Listings Guide (2026)",
    description:
      "How brokers reach Dubai Creek Harbour property owners in 2026: off-plan investors at handover, new landlords and resellers in Emaar's waterfront district.",
    keywords: [
      "Dubai Creek Harbour property owners",
      "Creek Harbour owners",
      "Dubai Creek Harbour landlords",
      "Creek Harbour off-plan owners",
      "Dubai Creek Harbour owner database",
      "Creek Harbour listings",
    ],
    excerpt:
      "Dubai Creek Harbour is full of off-plan buyers reaching handover. That makes it one of the best places in Dubai to win first-time listings and lettings. Here's how.",
    readingMinutes: 5,
    propertyTypes: "apartments",
    related:
      "[Downtown Dubai](/guides/downtown-dubai-property-owners), [Business Bay](/guides/business-bay-property-owners) and [Sobha Hartland and MBR City](/guides/sobha-hartland-property-owners)",
    sections: [
      {
        heading: "Why Dubai Creek Harbour is a handover market",
        paragraphs: [
          "Dubai Creek Harbour is Emaar's waterfront district on Dubai Creek, next to the Ras Al Khor Wildlife Sanctuary and a short drive from Downtown. It has been launched and built in phases, with tower after tower sold off-plan and then handed over.",
          "Most owners here bought off-plan, and many reach handover having never let or sold a property in Dubai. That makes the community rich in first decisions, and first decisions go to the broker who helps make them.",
        ],
      },
      {
        heading: "Who owns in Dubai Creek Harbour",
        paragraphs: [],
        bullets: [
          "Off-plan investors, local and international, waiting for or just past handover.",
          "New landlords letting for the first time, who need help with pricing, Ejari and tenants.",
          "Resellers who want to sell before or soon after completion to lock in a gain.",
        ],
      },
      {
        heading: "What works on a Creek Harbour owner",
        paragraphs: [],
        bullets: [
          "Track handover dates by tower and contact owners in the weeks before keys are released.",
          "Show the numbers side by side: likely rent, service charges, net yield and today's resale price.",
          "For owners abroad, offer a complete service: snagging, furnishing, letting and management.",
          "Know what is coming next. New towers completing nearby affect rents, and owners trust a broker who says so.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I find Dubai Creek Harbour property owners?",
        answer:
          "Follow handover dates tower by tower, reach owners before keys are released, offer a let-versus-sell comparison and use a verified owner database filtered to Dubai Creek Harbour for direct mobile numbers.",
      },
      {
        question: "Why is Dubai Creek Harbour good for new listings?",
        answer:
          "Most owners bought off-plan and are reaching handover, so many are choosing for the first time whether to let or sell, and they need a broker to help.",
      },
    ],
  }),
  communityGuide({
    slug: "damac-hills-property-owners",
    name: "DAMAC Hills",
    seoTitle: "DAMAC Hills Property Owners: Win Listings in 2026",
    description:
      "How brokers reach DAMAC Hills property owners in 2026: golf-course villa owners, apartment investors and the difference between DAMAC Hills and DAMAC Hills 2.",
    keywords: [
      "DAMAC Hills property owners",
      "DAMAC Hills villa owners",
      "DAMAC Hills 2 owners",
      "DAMAC Hills landlords",
      "DAMAC Hills owner database",
      "DAMAC Hills listings",
    ],
    excerpt:
      "DAMAC Hills combines golf-course villas with apartments and townhouses, and many owners are investors. Here's how to approach them, and how DAMAC Hills 2 differs.",
    readingMinutes: 5,
    propertyTypes: "villas, townhouses and apartments",
    related:
      "[Arabian Ranches](/guides/arabian-ranches-property-owners), [Town Square](/guides/town-square-dubai-property-owners) and [Motor City](/guides/motor-city-property-owners)",
    sections: [
      {
        heading: "Why DAMAC Hills matters",
        paragraphs: [
          "DAMAC Hills, originally launched as Akoya by DAMAC, is a large master community off Al Qudra and Umm Suqeim roads, built around the Trump International Golf Club Dubai. It mixes villas, townhouses and apartment buildings, so it attracts both families and investors.",
          "Do not confuse it with DAMAC Hills 2, formerly Akoya Oxygen, which sits further out along Al Qudra Road and is a separate, more affordable townhouse and villa community. Owners notice when a broker mixes the two up.",
        ],
      },
      {
        heading: "Who owns in DAMAC Hills",
        paragraphs: [],
        bullets: [
          "Golf-course villa owners, a mix of families who live there and investors who let.",
          "Apartment investors who bought off-plan for yield.",
          "Townhouse owners, often first-time villa buyers who may trade up within the community.",
        ],
      },
      {
        heading: "What works on a DAMAC Hills owner",
        paragraphs: [],
        bullets: [
          "Be precise about cluster and view. Golf-course frontage changes the price a lot, and owners know it.",
          "For investors, compare rent, service charges and net yield with nearby communities such as Arabian Ranches and Town Square.",
          "For townhouse owners, offer a trade-up plan: sell the townhouse and buy a villa in the same community.",
          "Know the developer's payment-plan history. Many owners bought on a plan and want to know whether they can sell before it is fully paid.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I find DAMAC Hills property owners?",
        answer:
          "Choose a few clusters, learn their golf-course and park premiums, approach investors with a yield comparison and use a verified owner database filtered to DAMAC Hills for direct mobile numbers.",
      },
      {
        question: "What is the difference between DAMAC Hills and DAMAC Hills 2?",
        answer:
          "DAMAC Hills (formerly Akoya by DAMAC) is built around the Trump International Golf Club Dubai. DAMAC Hills 2 (formerly Akoya Oxygen) is a separate, more affordable community further along Al Qudra Road.",
      },
    ],
  }),
  communityGuide({
    slug: "emirates-hills-property-owners",
    name: "Emirates Hills",
    seoTitle: "Emirates Hills Property Owners: Winning Prime Villa Listings",
    description:
      "How brokers reach Emirates Hills property owners in 2026: ultra-prime villa owners on Dubai's most exclusive golf-course plots, and the discretion they expect.",
    keywords: [
      "Emirates Hills property owners",
      "Emirates Hills villa owners",
      "Emirates Hills mansions",
      "Emirates Hills owner database",
      "luxury villa owners Dubai",
      "Emirates Hills listings",
    ],
    excerpt:
      "Emirates Hills is Dubai's most exclusive villa address, with few owners and fewer sales. Every listing matters, and the approach has to match the address.",
    readingMinutes: 5,
    propertyTypes: "villas",
    related:
      "[Palm Jumeirah](/guides/palm-jumeirah-property-owners), [The Springs](/guides/the-springs-dubai-property-owners) and [Dubai Hills Estate](/guides/dubai-hills-estate-property-owners)",
    sections: [
      {
        heading: "Why Emirates Hills is a trophy market",
        paragraphs: [
          "Emirates Hills is Emaar's prime villa enclave around the Montgomerie golf course, often called the Beverly Hills of Dubai. Owners buy large plots and many build or rebuild custom mansions, so no two homes are alike.",
          "There are few homes and few sales, and each sale is large. One listing here can be worth more than a year of apartment deals, which is why every top brokerage competes for it.",
        ],
      },
      {
        heading: "Who owns in Emirates Hills",
        paragraphs: [],
        bullets: [
          "Ultra-high-net-worth families, local and international, who usually hold for the long term.",
          "Owners who use the villa part of the year and leave it empty or staffed the rest of the time.",
          "Investors and developers who buy older villas or plots to rebuild and sell.",
        ],
      },
      {
        heading: "What works on an Emirates Hills owner",
        paragraphs: [],
        bullets: [
          "Discretion first. Many owners do not want their home on a portal, so offer an off-market sale to qualified buyers.",
          "Bring a real, qualified buyer when you can. In this market a named buyer is worth more than any valuation.",
          "Know the plot, not just the house. Plot size, golf or lake frontage and rebuild potential drive value.",
          "Expect to deal with a family office, a lawyer or an assistant. Make the first message short, professional and easy to forward.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I reach Emirates Hills villa owners?",
        answer:
          "Approach discreetly, offer off-market sales to qualified buyers, know each plot's frontage and rebuild potential, and use a verified owner database filtered to Emirates Hills villas for direct contact.",
      },
      {
        question: "Why are Emirates Hills listings so valuable?",
        answer:
          "Homes are few, sales are rare and prices are among the highest in Dubai, so one listing can bring more commission than many apartment deals.",
      },
    ],
  }),
  communityGuide({
    slug: "al-furjan-property-owners",
    name: "Al Furjan",
    seoTitle: "Al Furjan Property Owners: Win Listings in 2026",
    description:
      "How brokers reach Al Furjan property owners in 2026: townhouse families, low-rise apartment investors and new handovers in Nakheel's community near Ibn Battuta.",
    keywords: [
      "Al Furjan property owners",
      "Al Furjan villa owners",
      "Al Furjan townhouse owners",
      "Al Furjan landlords",
      "Al Furjan owner database",
      "Al Furjan listings",
    ],
    excerpt:
      "Al Furjan has grown fast, with townhouses, villas and low-rise apartments and new buildings still completing. Here's how to reach its families and investors.",
    readingMinutes: 5,
    propertyTypes: "villas, townhouses and apartments",
    related:
      "[JVT](/guides/jvt-property-owners), [JVC](/guides/jvc-property-owners) and [The Springs](/guides/the-springs-dubai-property-owners)",
    sections: [
      {
        heading: "Why Al Furjan is worth farming",
        paragraphs: [
          "Al Furjan is a Nakheel community between Sheikh Zayed Road and Emirates Road, near Ibn Battuta Mall and Discovery Gardens. It began as a townhouse and villa community and has added many low-rise apartment buildings, some still being completed.",
          "It offers villa living at mid-market prices and good road access to Jebel Ali and Dubai Marina, so demand from families and tenants is steady.",
        ],
      },
      {
        heading: "Who owns in Al Furjan",
        paragraphs: [],
        bullets: [
          "Families in townhouses and villas, many of them owner-occupiers who moved from apartments.",
          "Apartment investors who bought low-rise units for yield.",
          "New owners at handover in recently completed buildings.",
        ],
      },
      {
        heading: "What works on an Al Furjan owner",
        paragraphs: [],
        bullets: [
          "Know the villa and townhouse styles by cluster. Owners compare their layout with similar homes nearby.",
          "For apartment investors, compare rents with JVC and Discovery Gardens, where many of their tenants also look.",
          "Offer handover owners a let-versus-sell comparison before keys are released.",
          "For families, a named buyer or a trade-up plan into a bigger villa is the strongest opening.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I find Al Furjan property owners?",
        answer:
          "Farm one cluster, follow handovers of new apartment buildings, approach investors with a rent comparison and use a verified owner database filtered to Al Furjan for direct mobile numbers.",
      },
      {
        question: "Who develops Al Furjan?",
        answer:
          "Al Furjan is a Nakheel master community between Sheikh Zayed Road and Emirates Road, near Ibn Battuta Mall and Discovery Gardens.",
      },
    ],
  }),
  communityGuide({
    slug: "town-square-dubai-property-owners",
    name: "Town Square",
    seoTitle: "Town Square Dubai Property Owners: Win Listings (2026)",
    description:
      "How brokers reach Town Square Dubai property owners in 2026: first-time buyers, townhouse families and yield investors in Nshama's affordable community.",
    keywords: [
      "Town Square property owners",
      "Town Square Dubai owners",
      "Town Square townhouse owners",
      "Town Square landlords",
      "Town Square owner database",
      "Town Square listings",
    ],
    excerpt:
      "Town Square is one of Dubai's most affordable family communities, with a large owner base of first-time buyers and investors. Here's how to work it.",
    readingMinutes: 5,
    propertyTypes: "townhouses and apartments",
    related:
      "[DAMAC Hills](/guides/damac-hills-property-owners), [Arabian Ranches](/guides/arabian-ranches-property-owners) and [Motor City](/guides/motor-city-property-owners)",
    sections: [
      {
        heading: "Why Town Square is a volume market",
        paragraphs: [
          "Town Square is a master community by Nshama off Al Qudra Road, built as an affordable place for families, with townhouses, apartment buildings, parks and a central square. Entry prices are low for a townhouse community, so it attracts many first-time buyers.",
          "A large, price-sensitive owner base means frequent sales and lettings: a volume market rather than a trophy one.",
        ],
      },
      {
        heading: "Who owns in Town Square",
        paragraphs: [],
        bullets: [
          "First-time buyers who moved from renting and may trade up in a few years.",
          "Townhouse families who chose space and parks over a central location.",
          "Yield investors who bought apartments or townhouses to let.",
        ],
      },
      {
        heading: "What works on a Town Square owner",
        paragraphs: [],
        bullets: [
          "Price per layout. Owners know what their neighbour's townhouse sold for, so bring exact comparables.",
          "For first-time buyers who have built up equity, show how much they could put towards a bigger home.",
          "For investors, show net yield after service charges, and how it compares with nearby communities.",
          "Speed matters: in a volume market, the first broker with a buyer or tenant usually wins the deal.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I find Town Square Dubai property owners?",
        answer:
          "Farm a few clusters, bring exact comparables for each layout, approach investors with a net-yield comparison and use a verified owner database filtered to Town Square for direct mobile numbers.",
      },
      {
        question: "Who develops Town Square Dubai?",
        answer: "Town Square is a master community by Nshama, off Al Qudra Road.",
      },
    ],
  }),
  communityGuide({
    slug: "sobha-hartland-property-owners",
    name: "Sobha Hartland and MBR City",
    seoTitle: "Sobha Hartland & MBR City Property Owners: Listings Guide",
    description:
      "How brokers reach Sobha Hartland and MBR City property owners in 2026: off-plan investors, villa owners and handover-stage owners near Meydan and Ras Al Khor.",
    keywords: [
      "Sobha Hartland property owners",
      "MBR City property owners",
      "Mohammed Bin Rashid City owners",
      "District One owners",
      "Meydan property owners",
      "Sobha Hartland owner database",
    ],
    excerpt:
      "Mohammed Bin Rashid City, including Sobha Hartland, District One and Meydan, is full of off-plan investors reaching handover. Here's how to win their listings.",
    readingMinutes: 5,
    propertyTypes: "villas, townhouses and apartments",
    related:
      "[Dubai Creek Harbour](/guides/dubai-creek-harbour-property-owners), [Dubai Hills Estate](/guides/dubai-hills-estate-property-owners) and [Downtown Dubai](/guides/downtown-dubai-property-owners)",
    sections: [
      {
        heading: "What MBR City covers",
        paragraphs: [
          "Mohammed Bin Rashid Al Maktoum City is a large district between Downtown Dubai and Ras Al Khor, around Meydan. It includes several communities brokers farm separately: Sobha Hartland by Sobha Realty, District One by Meydan and Sobha with its villas and crystal lagoon, and the Meydan area around the racecourse.",
          "Much of it was sold off-plan and is still completing, so it has a large number of investors reaching handover at the same time.",
        ],
      },
      {
        heading: "Who owns in Sobha Hartland and MBR City",
        paragraphs: [],
        bullets: [
          "Off-plan apartment investors in Sobha Hartland, many living abroad.",
          "Villa and mansion owners in District One and Sobha Hartland, a mix of end users and investors.",
          "Handover-stage owners deciding whether to move in, let or sell.",
        ],
      },
      {
        heading: "What works on an MBR City owner",
        paragraphs: [],
        bullets: [
          "Be specific about the sub-community. Sobha Hartland, District One and Meydan buyers are different, and owners expect you to know which they are in.",
          "Follow handover dates by building or phase, and contact owners before keys are released.",
          "For investors abroad, offer snagging, furnishing, letting and management in one package.",
          "For villa owners, a named buyer and an off-market option work better than a general valuation.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I find Sobha Hartland property owners?",
        answer:
          "Follow handovers by building, approach owners with a let-versus-sell comparison and use a verified owner database filtered to the community for direct mobile numbers.",
      },
      {
        question: "What communities are in MBR City?",
        answer:
          "Mohammed Bin Rashid Al Maktoum City includes Sobha Hartland, District One and the Meydan area, among others. Brokers usually farm each one separately.",
      },
    ],
  }),
  communityGuide({
    slug: "dubai-sports-city-property-owners",
    name: "Dubai Sports City",
    seoTitle: "Dubai Sports City Property Owners: Win Listings (2026)",
    description:
      "How brokers reach Dubai Sports City property owners in 2026: yield investors in mid-market apartments and villa owners in Victory Heights, next to Motor City.",
    keywords: [
      "Dubai Sports City property owners",
      "Sports City owners",
      "Victory Heights owners",
      "Dubai Sports City landlords",
      "Sports City owner database",
      "Dubai Sports City listings",
    ],
    excerpt:
      "Dubai Sports City pairs affordable apartments with a golf-course villa community, Victory Heights. Its owners are mostly yield investors. Here's how to approach them.",
    readingMinutes: 4,
    propertyTypes: "apartments and villas",
    related:
      "[Motor City](/guides/motor-city-property-owners), [JVC](/guides/jvc-property-owners) and [Town Square](/guides/town-square-dubai-property-owners)",
    sections: [
      {
        heading: "Why Dubai Sports City is a yield market",
        paragraphs: [
          "Dubai Sports City is a sports-themed community off Sheikh Mohammed Bin Zayed Road, next to Motor City, home to a cricket stadium, sports academies and The Els Club golf course. Most homes are mid-market apartment buildings, with the villa community of Victory Heights around the golf course.",
          "Apartment prices are among the more affordable in this part of Dubai, so many owners bought purely for rental yield.",
        ],
      },
      {
        heading: "Who owns in Dubai Sports City",
        paragraphs: [],
        bullets: [
          "Apartment investors who let to tenants priced out of Dubai Marina and JLT.",
          "Non-resident owners who bought remotely for yield.",
          "Victory Heights villa owners, mostly families who live there.",
        ],
      },
      {
        heading: "What works on a Sports City owner",
        paragraphs: [],
        bullets: [
          "Lead with net yield: rent achieved in their building minus service charges.",
          "Compare their building with newer competition nearby. Owners worry about new supply undercutting their rent.",
          "For non-resident owners, offer honest reporting and a hold-or-sell view.",
          "Treat Victory Heights separately: villa owners want a named buyer, not a yield pitch.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I find Dubai Sports City property owners?",
        answer:
          "Farm a few buildings, approach owners with net-yield numbers, treat Victory Heights villa owners separately and use a verified owner database filtered to Dubai Sports City for direct mobile numbers.",
      },
    ],
  }),
  communityGuide({
    slug: "motor-city-property-owners",
    name: "Motor City",
    seoTitle: "Motor City Dubai Property Owners: Win Listings (2026)",
    description:
      "How brokers reach Motor City property owners in 2026: Uptown Motor City apartment landlords and Green Community townhouse families next to the Dubai Autodrome.",
    keywords: [
      "Motor City property owners",
      "Motor City Dubai owners",
      "Uptown Motor City owners",
      "Green Community Motor City owners",
      "Motor City owner database",
      "Motor City listings",
    ],
    excerpt:
      "Motor City is a quiet, established community next to the Dubai Autodrome, with low-rise apartments and townhouses. Here's how to reach its landlords and families.",
    readingMinutes: 4,
    propertyTypes: "apartments, townhouses and villas",
    related:
      "[Dubai Sports City](/guides/dubai-sports-city-property-owners), [Arabian Ranches](/guides/arabian-ranches-property-owners) and [Town Square](/guides/town-square-dubai-property-owners)",
    sections: [
      {
        heading: "Why Motor City is worth farming",
        paragraphs: [
          "Motor City is an established community next to the Dubai Autodrome, off Sheikh Mohammed Bin Zayed Road. Its homes are mostly low-rise apartment buildings in Uptown Motor City, plus townhouses and villas in Green Community Motor City.",
          "It is quieter and greener than most mid-market communities, which keeps tenants for longer and gives owners steady income.",
        ],
      },
      {
        heading: "Who owns in Motor City",
        paragraphs: [],
        bullets: [
          "Long-term apartment landlords, many of whom bought years ago.",
          "Townhouse and villa families in Green Community Motor City.",
          "Owners abroad who let through an agent and rarely visit.",
        ],
      },
      {
        heading: "What works on a Motor City owner",
        paragraphs: [],
        bullets: [
          "Show long-term owners what their unit is worth now compared with what they paid.",
          "For landlords, compare rents with Dubai Sports City and JVC, where many of the same tenants also look.",
          "For townhouse families, bring a named buyer or a trade-up option nearby, such as Arabian Ranches.",
          "Offer management: long-standing landlords are often unhappy with their current agent.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I find Motor City property owners?",
        answer:
          "Farm Uptown Motor City buildings or Green Community clusters, approach long-term owners with a current valuation and use a verified owner database filtered to Motor City for direct mobile numbers.",
      },
    ],
  }),
  communityGuide({
    slug: "dubai-silicon-oasis-property-owners",
    name: "Dubai Silicon Oasis",
    seoTitle: "Dubai Silicon Oasis Property Owners: Win Listings (2026)",
    description:
      "How brokers reach Dubai Silicon Oasis property owners in 2026: affordable-apartment landlords and villa families in the tech free zone off Dubai–Al Ain Road.",
    keywords: [
      "Dubai Silicon Oasis property owners",
      "DSO property owners",
      "Silicon Oasis landlords",
      "DSO villa owners",
      "Dubai Silicon Oasis owner database",
      "Silicon Oasis listings",
    ],
    excerpt:
      "Dubai Silicon Oasis is an affordable residential and tech free-zone community with a large landlord base. Here's how to win its apartment and villa listings.",
    readingMinutes: 4,
    propertyTypes: "apartments and villas",
    related:
      "[JVC](/guides/jvc-property-owners), [Town Square](/guides/town-square-dubai-property-owners) and [Dubai Sports City](/guides/dubai-sports-city-property-owners)",
    sections: [
      {
        heading: "Why Dubai Silicon Oasis is a landlord market",
        paragraphs: [
          "Dubai Silicon Oasis is a technology free zone and residential community off the Dubai–Al Ain Road, with apartment buildings, villa communities, schools and offices. Rents are affordable, and many tenants work in the free zone itself.",
          "Most apartments are let, which makes DSO a landlord market: steady tenant demand, price-sensitive rents and owners who watch yield closely.",
        ],
      },
      {
        heading: "Who owns in Dubai Silicon Oasis",
        paragraphs: [],
        bullets: [
          "Apartment landlords, many with long-held units bought at low prices.",
          "Villa families who live there.",
          "Investors who own several units in the same building.",
        ],
      },
      {
        heading: "What works on a DSO owner",
        paragraphs: [],
        bullets: [
          "Lead with rent and vacancy: owners want a reliable tenant at the right price.",
          "Show long-term owners their unit's value today. Many bought cheaply and have equity they have not used.",
          "For multi-unit investors, offer to handle their units together for a better fee.",
          "Know the free-zone employers: tenants who work there are a strong selling point for owners.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I find Dubai Silicon Oasis property owners?",
        answer:
          "Farm a few buildings, approach landlords with rent and vacancy numbers, look for owners with several units and use a verified owner database filtered to Dubai Silicon Oasis for direct mobile numbers.",
      },
    ],
  }),
  communityGuide({
    slug: "jvt-property-owners",
    name: "JVT",
    seoTitle: "JVT Property Owners: Jumeirah Village Triangle Listings",
    description:
      "How brokers reach JVT property owners in 2026: villa and townhouse families and apartment investors in Jumeirah Village Triangle, next door to busy JVC.",
    keywords: [
      "JVT property owners",
      "Jumeirah Village Triangle owners",
      "JVT villa owners",
      "JVT landlords",
      "JVT owner database",
      "JVT listings",
    ],
    excerpt:
      "Jumeirah Village Triangle is JVC's quieter neighbour, with more villas and townhouses. Here's how to reach its family owners and apartment investors.",
    readingMinutes: 4,
    propertyTypes: "villas, townhouses and apartments",
    related:
      "[JVC](/guides/jvc-property-owners), [Al Furjan](/guides/al-furjan-property-owners) and [The Springs](/guides/the-springs-dubai-property-owners)",
    sections: [
      {
        heading: "How JVT differs from JVC",
        paragraphs: [
          "Jumeirah Village Triangle is a Nakheel community next to Jumeirah Village Circle, between Sheikh Mohammed Bin Zayed Road and Al Khail Road. It has a larger share of villas and townhouses than JVC, along with a growing number of apartment buildings.",
          "It is quieter and more family-oriented than JVC. Owners notice when a broker treats the two as the same place, so learn the difference before you call.",
        ],
      },
      {
        heading: "Who owns in JVT",
        paragraphs: [],
        bullets: [
          "Villa and townhouse families, many of them owner-occupiers.",
          "Apartment investors in the newer buildings.",
          "Long-term owners of older villas, some of whom have renovated or extended them.",
        ],
      },
      {
        heading: "What works on a JVT owner",
        paragraphs: [],
        bullets: [
          "Know the villa types by district. Layouts and plot sizes vary, and owners compare closely.",
          "For families, a named buyer or a trade-up plan beats a cold valuation.",
          "For apartment investors, compare rents with nearby JVC buildings, which compete for the same tenants.",
          "Point out renovation value: an upgraded villa can be worth much more than an original one.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I find JVT property owners?",
        answer:
          "Farm one district, learn its villa layouts, approach families with a named buyer and use a verified owner database filtered to JVT for direct mobile numbers.",
      },
      {
        question: "What is the difference between JVT and JVC?",
        answer:
          "Both are Nakheel communities next to each other. JVT (Jumeirah Village Triangle) has more villas and townhouses and is quieter, while JVC (Jumeirah Village Circle) is larger and mostly apartments.",
      },
    ],
  }),
  communityGuide({
    slug: "the-springs-dubai-property-owners",
    name: "The Springs",
    seoTitle: "The Springs Dubai Property Owners: Win Villa Listings (2026)",
    description:
      "How brokers reach The Springs Dubai property owners in 2026: long-term townhouse families and landlords in Emaar's established Emirates Living community.",
    keywords: [
      "The Springs property owners",
      "The Springs Dubai owners",
      "The Springs villa owners",
      "Emirates Living owners",
      "The Springs owner database",
      "The Springs listings",
    ],
    excerpt:
      "The Springs is one of Dubai's most popular townhouse communities, with long-term owners and steady family demand. Here's how to win its listings.",
    readingMinutes: 4,
    propertyTypes: "villas and townhouses",
    related:
      "[Emirates Hills](/guides/emirates-hills-property-owners), [Arabian Ranches](/guides/arabian-ranches-property-owners) and [JLT](/guides/jlt-property-owners)",
    sections: [
      {
        heading: "Why The Springs is in demand",
        paragraphs: [
          "The Springs is part of Emaar's Emirates Living, next to The Meadows, The Lakes and Emirates Hills, close to Sheikh Zayed Road and Dubai Marina. It is made up of townhouses and villas around lakes and parks, divided into numbered Springs.",
          "It is one of the most established family communities in new Dubai, with strong demand from buyers and tenants and owners who often hold for many years.",
        ],
      },
      {
        heading: "Who owns in The Springs",
        paragraphs: [],
        bullets: [
          "Long-term owner-occupier families, many of whom bought early.",
          "Landlords who moved away and let the townhouse.",
          "Owners who have renovated or extended their homes and expect a premium.",
        ],
      },
      {
        heading: "What works on a Springs owner",
        paragraphs: [],
        bullets: [
          "Know the numbered Springs and the townhouse types. Owners compare by type, size and whether they face a lake or a park.",
          "Bring exact recent sales for their Springs and layout.",
          "For landlords abroad, compare rent achieved with the value of selling now.",
          "Show the renovation premium: extended or upgraded homes sell for much more, and owners want that recognised.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I find The Springs Dubai property owners?",
        answer:
          "Farm one or two numbered Springs, bring exact recent sales for each townhouse type, approach landlords abroad with a sell-or-hold comparison and use a verified owner database filtered to The Springs.",
      },
      {
        question: "Is The Springs part of Emirates Hills?",
        answer:
          "It is part of Emaar's Emirates Living area, alongside The Meadows, The Lakes and Emirates Hills, but it is a separate townhouse and villa community.",
      },
    ],
  }),
];

/**
 * Every Dubai community with an owner guide, by the name brokers use, for
 * linking from the owner database page. `aliases` match the area names in
 * MARKETS.dubai.areas.
 */
export const DUBAI_COMMUNITY_LINKS: readonly { name: string; slug: string; aliases?: readonly string[] }[] = [
  { name: "Dubai Marina", slug: "dubai-marina-property-owners" },
  { name: "Downtown Dubai", slug: "downtown-dubai-property-owners" },
  { name: "Business Bay", slug: "business-bay-property-owners" },
  { name: "Palm Jumeirah", slug: "palm-jumeirah-property-owners" },
  { name: "JVC", slug: "jvc-property-owners", aliases: ["JVC (Jumeirah Village Circle)"] },
  ...COMMUNITY_GUIDES.map((guide) => ({
    name: guide.title.replace(/^How to Reach /, "").replace(/ Property Owners$/, ""),
    slug: guide.slug,
  })),
];

/** Guide slug for an area name such as "Dubai Hills Estate", if there is one. */
export function communityGuideSlug(area: string): string | undefined {
  return DUBAI_COMMUNITY_LINKS.find((c) => c.name === area || c.aliases?.includes(area))?.slug;
}
