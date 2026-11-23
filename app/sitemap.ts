import { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/constants";
import { GUIDES } from "@/lib/guides";
import { SITE_UPDATED, SITE_URL } from "@/lib/seo";
import { TOOLS } from "@/lib/tools";

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
    { url: `${base}/free-sample`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/tools`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    ...TOOLS.map((tool) => ({
      url: `${base}/tools/${tool.slug}`,
      lastModified: tool.updated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${base}/guides`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    ...GUIDES.map((guide) => ({
      url: `${base}/guides/${guide.slug}`,
      lastModified: guide.updated,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    { url: `${base}/about`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/refund-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
