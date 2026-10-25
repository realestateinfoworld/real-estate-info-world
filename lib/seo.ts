import type { Metadata } from "next";

export const SITE_URL = "https://realestate-info.world";
export const SITE_NAME = "Real Estate Info World";

/**
 * Date the site content last changed, used for sitemap `lastModified`.
 * A fixed date (rather than build time) keeps the signal honest for crawlers.
 * Update when page copy or datasets change.
 */
export const SITE_UPDATED = "2026-10-25";

interface PageSeo {
  /** Full <title>, used as-is (the root template is skipped). Aim for ≤ 60 chars. */
  title: string;
  /** Meta description. Aim for 140–160 chars. */
  description: string;
  /** Route path, e.g. "/products". Becomes the canonical and og:url. */
  path: string;
  keywords?: readonly string[];
}

/**
 * Metadata for one page. Next.js merges metadata shallowly, so a page that
 * leaves out `openGraph`/`twitter` inherits the homepage's title and URL in
 * shares — every page sets all three here instead.
 */
export function pageMetadata({ title, description, path, keywords }: PageSeo): Metadata {
  return {
    title: { absolute: title },
    description,
    ...(keywords && { keywords: [...keywords] }),
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: SITE_NAME,
      url: path,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/** Serialises JSON-LD for a <script> tag, escaping `<` so data can't close the tag. */
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/** schema.org FAQPage for a list of question/answer pairs rendered on the page. */
export function faqPageSchema(faqs: readonly { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
