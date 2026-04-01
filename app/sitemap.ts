import { MetadataRoute } from "next";
import { getKeywordSlugs, getAreaSlugs } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.coolhomeservices.in";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/areas`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const keywordPages: MetadataRoute.Sitemap = getKeywordSlugs().map((slug) => ({
    url: `${base}/keywords/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const areaPages: MetadataRoute.Sitemap = getAreaSlugs().map((slug) => ({
    url: `${base}/areas/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...keywordPages, ...areaPages];
}
