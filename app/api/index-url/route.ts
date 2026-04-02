import { NextResponse } from "next/server";
import { GoogleAuth } from "google-auth-library";

const SCOPES = ["https://www.googleapis.com/auth/indexing"];
const ENDPOINT = "https://indexing.googleapis.com/v3/urlNotifications:publish";

function getAuth() {
  const key = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  if (!key) throw new Error("GOOGLE_SERVICE_ACCOUNT_KEY env var not set");
  const credentials = JSON.parse(key);
  return new GoogleAuth({ credentials, scopes: SCOPES });
}

export async function POST(request: Request) {
  try {
    const { url, type = "URL_UPDATED" } = await request.json();
    if (!url) return NextResponse.json({ error: "url is required" }, { status: 400 });

    const auth = getAuth();
    const client = await auth.getClient();
    const token = await client.getAccessToken();

    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      },
      body: JSON.stringify({ url, type }),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
