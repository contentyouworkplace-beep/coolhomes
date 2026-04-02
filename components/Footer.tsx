import Link from "next/link";
import Image from "next/image";
import { PHONE, EMAIL, WHATSAPP, KEYWORDS, AREAS } from "@/lib/data";

export default function Footer() {
  const keywordEntries = Object.entries(KEYWORDS);
  const areaEntries = Object.entries(AREAS);

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" className="logo">
            <Image
              src="/coolhomes-logo.png"
              alt="Cool Home Services Logo"
              width={160}
              height={52}
              style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <p>
            Bangalore&apos;s most trusted AC repair and service company. Certified
            technicians, genuine parts, transparent pricing. Since 2014.
          </p>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href={`tel:${PHONE.replace(/[^+\d]/g, "")}`}>{PHONE}</a></li>
            <li><a href={`https://wa.me/${WHATSAPP}`}>WhatsApp Us</a></li>
            <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div style={{ padding: "30px 20px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <h4 style={{ marginBottom: "14px" }}>All Services</h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {keywordEntries.map(([slug, kw]) => (
            <Link key={slug} href={`/keywords/${slug}`} style={{ fontSize: "12px", opacity: 0.8 }}>
              {kw.title}
            </Link>
          ))}
        </div>
      </div>

      <div style={{ padding: "30px 20px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <h4 style={{ marginBottom: "14px" }}>All Service Areas</h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {areaEntries.map(([slug, area]) => (
            <Link key={slug} href={`/areas/${slug}`} style={{ fontSize: "12px", opacity: 0.8 }}>
              {area.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Cool Home Services. All Rights Reserved. Bangalore, Karnataka</p>
      </div>
    </footer>
  );
}
