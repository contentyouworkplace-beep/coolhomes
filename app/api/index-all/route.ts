import { NextResponse } from "next/server";
import { GoogleAuth } from "google-auth-library";
import { KEYWORDS, AREAS } from "@/lib/data";

const BASE = "https://www.coolhomesservices.com";
const SCOPES = ["https://www.googleapis.com/auth/indexing"];
const ENDPOINT = "https://indexing.googleapis.com/v3/urlNotifications:publish";
// Google Indexing API allows max 100 requests per batch
const BATCH_SIZE = 100;
const DELAY_MS = 1000; // 1 second between batches to avoid rate limits

function getAllUrls(): string[] {
  const staticPages = [BASE, `${BASE}/services`, `${BASE}/areas`, `${BASE}/about`, `${BASE}/contact`];
  const keywordPages = Object.keys(KEYWORDS).map((s) => `${BASE}/keywords/${s}`);
  const areaPages = Object.keys(AREAS).map((s) => `${BASE}/areas/${s}`);
  return [...staticPages, ...keywordPages, ...areaPages];
}

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function POST() {
  try {
    const key = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
    if (!key) {
      return NextResponse.json({ error: "GOOGLE_SERVICE_ACCOUNT_KEY env var not set" }, { status: 500 });
    }

    const credentials = JSON.parse(key);
    const auth = new GoogleAuth({ credentials, scopes: SCOPES });
    const client = await auth.getClient();
    const token = await client.getAccessToken();

    const urls = getAllUrls();
    const results: { url: string; status: number }[] = [];

    for (let i = 0; i < urls.length; i += BATCH_SIZE) {
      const batch = urls.slice(i, i + BATCH_SIZE);

      await Promise.all(
        batch.map(async (url) => {
          const res = await fetch(ENDPOINT, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token.token}`,
            },
            body: JSON.stringify({ url, type: "URL_UPDATED" }),
          });
          results.push({ url, status: res.status });
        })
      );

      if (i + BATCH_SIZE < urls.length) await sleep(DELAY_MS);
    }

    const success = results.filter((r) => r.status === 200).length;
    const failed = results.filter((r) => r.status !== 200).length;

    return NextResponse.json({ total: urls.length, success, failed, results });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
