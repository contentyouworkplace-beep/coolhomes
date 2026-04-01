import Link from "next/link";
import { PHONE, EMAIL, WHATSAPP } from "@/lib/data";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo">
            <div className="logo-icon">❄️</div>
            <div className="logo-text">
              <h1>Cool Home Services</h1>
            </div>
          </div>
          <p>
            Bangalore&apos;s most trusted AC repair and service company. Certified
            technicians, genuine parts, transparent pricing. Since 2014.
          </p>
        </div>
        <div className="footer-col">
          <h4>Popular Services</h4>
          <ul>
            <li><Link href="/keywords/ac-repair-bangalore">AC Repair</Link></li>
            <li><Link href="/keywords/ac-service-bangalore">AC Service</Link></li>
            <li><Link href="/keywords/ac-installation-bangalore">AC Installation</Link></li>
            <li><Link href="/keywords/ac-gas-filling-bangalore">Gas Filling</Link></li>
            <li><Link href="/keywords/amc-ac-bangalore">AMC Plans</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Top Areas</h4>
          <ul>
            <li><Link href="/areas/koramangala">Koramangala</Link></li>
            <li><Link href="/areas/indiranagar">Indiranagar</Link></li>
            <li><Link href="/areas/whitefield">Whitefield</Link></li>
            <li><Link href="/areas/hsr-layout">HSR Layout</Link></li>
            <li><Link href="/areas/marathahalli">Marathahalli</Link></li>
          </ul>
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
      <div className="footer-bottom">
        <p>&copy; 2026 Cool Home Services. All Rights Reserved. Bangalore, Karnataka</p>
      </div>
    </footer>
  );
}
