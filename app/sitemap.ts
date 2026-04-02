import { MetadataRoute } from "next";
import { KEYWORDS, AREAS } from "@/lib/data";

const BASE = "https://www.coolhomesservices.com";
const URLS_PER_SITEMAP = 100;

function getAllUrls(): { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] {
  const now = new Date();
  void now; // used in the default export

  const staticPages = [
    { url: BASE, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/areas`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const keywordPages = Object.keys(KEYWORDS).map((slug) => ({
    url: `${BASE}/keywords/${slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  const areaPages = Object.keys(AREAS).map((slug) => ({
    url: `${BASE}/areas/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...keywordPages, ...areaPages];
}

// Next.js will create /sitemap/0.xml, /sitemap/1.xml … and /sitemap.xml as the index
export async function generateSitemaps() {
  const total = getAllUrls().length;
  const count = Math.ceil(total / URLS_PER_SITEMAP);
  return Array.from({ length: count }, (_, i) => ({ id: i }));
}

export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
  const allUrls = getAllUrls();
  const now = new Date();
  const start = id * URLS_PER_SITEMAP;
  const batch = allUrls.slice(start, start + URLS_PER_SITEMAP);
  return batch.map(({ url, priority, changeFrequency }) => ({
    url,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
