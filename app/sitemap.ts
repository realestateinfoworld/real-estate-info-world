import { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/constants";
import { SITE_UPDATED, SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  const lastModified = SITE_UPDATED;

  return [
    { url: base, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/products`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    ...PRODUCTS.map((product) => ({
      url: `${base}/products/${product.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: product.type === "owner" ? 0.95 : 0.9,
    })),
    { url: `${base}/about`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/refund-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
