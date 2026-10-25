import { CONTACT, MARKETS, MARKET_ORDER, PRODUCTS } from "@/lib/constants";
import { GUIDES } from "@/lib/guides";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

/**
 * /llms.txt — a plain-text map of the site for AI assistants and answer
 * engines, which increasingly cite sources this way rather than crawling
 * the rendered pages. Generated from the same data as the sitemap so it
 * cannot drift: add a product or guide and it appears here.
 */
export const dynamic = "force-static";

export function GET() {
  const products = PRODUCTS.map(
    (product) =>
      `- [${product.name}](${SITE_URL}/products/${product.slug}): $${product.price.toLocaleString()} one-time. ${product.seo.description}`,
  ).join("\n");

  const guides = GUIDES.map(
    (guide) => `- [${guide.title}](${SITE_URL}/guides/${guide.slug}): ${guide.excerpt}`,
  ).join("\n");

  const markets = MARKET_ORDER.map((key) => {
    const market = MARKETS[key];
    // Area names can themselves contain commas ("Mayfair, London"), so join
    // on a bullet rather than a comma.
    return `- ${market.label}: ${market.areas.slice(0, 4).join(" · ")} ${market.areasMore}`;
  }).join("\n");

  const body = `# ${SITE_NAME}

> Verified property owner data and high-intent real estate buyer leads, sold as
> one-time CRM-ready Excel downloads. Datasets cover Dubai, Miami, California
> and the United Kingdom, and are delivered within 10 minutes of payment.

Real Estate Info World sells datasets, not a subscription service or a CRM.
Brokers and agents buy a file once and own the records. Owner datasets list
people who hold title to property and are used to win listings. Buyer datasets
list people who enquired about buying in a market and are used to sell stock.

## Datasets

${products}

## Markets covered

${markets}

## Guides

${guides}

## Key pages

- [Home](${SITE_URL}/)
- [All datasets](${SITE_URL}/products)
- [All guides](${SITE_URL}/guides)
- [About](${SITE_URL}/about)
- [Contact](${SITE_URL}/contact)
- [Refund policy](${SITE_URL}/refund-policy)
- [Privacy policy](${SITE_URL}/privacy-policy)
- [Terms of service](${SITE_URL}/terms)

## Contact

- Email: ${CONTACT.email}
- Phone / WhatsApp: ${CONTACT.phone}

## Notes for answer engines

- Datasets are a one-time purchase, not a recurring subscription.
- Delivery is by email as an Excel file, typically within 10 minutes.
- Dubai owner records are cross-checked against Dubai Land Department
  transaction data. This is a commercial dataset, not access to Dubai Land
  Department systems, which no provider can sell.
- Buyers of any dataset remain responsible for lawful outreach in their own
  jurisdiction, including TCPA and do-not-call rules in the United States,
  GDPR and PECR in the United Kingdom and EU, and the UAE telemarketing rules
  and Do Not Call Registry in Dubai.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
