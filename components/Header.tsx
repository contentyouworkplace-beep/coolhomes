"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PHONE, EMAIL } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href ? "active" : "";

  return (
    <header>
      <div className="header-top">
        <span>📍 Serving All Areas in Bangalore | Mon–Sun: 8AM – 8PM</span>
        <div style={{ display: "flex", gap: "20px" }}>
          <a href={`tel:${PHONE.replace(/[^+\d]/g, "")}`}>📞 {PHONE}</a>
          <a href={`mailto:${EMAIL}`}>✉ {EMAIL}</a>
        </div>
      </div>
      <div className="header-main">
        <Link href="/" className="logo">
          <Image
            src="/coolhomes-logo.png"
            alt="Cool Home Services Logo"
            width={160}
            height={52}
            priority
            style={{ objectFit: "contain" }}
          />
        </Link>
        <nav>
          <ul>
            <li><Link href="/" className={isActive("/")}>Home</Link></li>
            <li><Link href="/services" className={isActive("/services")}>Services</Link></li>
            <li><Link href="/areas" className={isActive("/areas")}>Areas</Link></li>
            <li><Link href="/about" className={isActive("/about")}>About Us</Link></li>
            <li><Link href="/contact" className={isActive("/contact")}>Contact</Link></li>
            <li className="nav-cta">
              <a href={`tel:${PHONE.replace(/[^+\d]/g, "")}`}>📞 Book Now</a>
            </li>
          </ul>
        </nav>
        <div className="hamburger">
          <span></span><span></span><span></span>
        </div>
      </div>
    </header>
  );
}
