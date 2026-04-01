import type { Metadata } from "next";
import Link from "next/link";
import HeroForm from "@/components/HeroForm";
import { PHONE, WHATSAPP } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Cool Home Services | AC Repair Experts in Bangalore",
  description: "Cool Home Services is Bangalore's most trusted AC repair company since 2014. 10+ years experience, 15,000+ happy customers, 50+ areas covered.",
};

export default function AboutPage() {
  return (
    <>
      <section className="inner-hero">
        <div className="container">
          <div>
            <div className="breadcrumb"><Link href="/">Home</Link> &rsaquo; About Us</div>
            <h1>About Cool Home Services</h1>
            <p>Bangalore&apos;s most trusted AC repair and service company since 2014. Over 10 years of delivering quality AC solutions.</p>
          </div>
          <HeroForm variant="inner" />
        </div>
      </section>

      <section style={{ background: "#fff" }}>
        <div className="container">
          <div className="content-two-col">
            <div className="content-text">
              <h2>Who We Are</h2>
              <p>Cool Home Services is Bangalore&apos;s leading AC repair, installation, and maintenance company. Founded in 2014, we have served over 15,000 happy customers across 50+ areas in Bangalore.</p>
              <p>Our team of certified technicians are trained to handle all major AC brands including LG, Samsung, Daikin, Voltas, Carrier, Blue Star, Hitachi, Panasonic, and more.</p>
              <p>We believe in transparency, quality, and customer satisfaction. Every job comes with a service warranty and we never charge hidden fees.</p>
              <div className="hero-stats" style={{marginTop:"30px"}}>
                <div className="stat-item"><div className="num">15,000+</div><div className="label">Happy Customers</div></div>
                <div className="stat-item"><div className="num">10+</div><div className="label">Years Experience</div></div>
                <div className="stat-item"><div className="num">50+</div><div className="label">Expert Technicians</div></div>
                <div className="stat-item"><div className="num">4.9⭐</div><div className="label">Average Rating</div></div>
              </div>
            </div>
            <div className="info-box">
              <h3>Company Info</h3>
              <div className="info-row"><span className="label">Founded</span><span className="value">2014</span></div>
              <div className="info-row"><span className="label">Location</span><span className="value">Koramangala, Bangalore</span></div>
              <div className="info-row"><span className="label">Service Area</span><span className="value">50+ Areas in Bangalore</span></div>
              <div className="info-row"><span className="label">Working Hours</span><span className="value">Mon-Sun, 8AM-8PM</span></div>
              <div className="info-row"><span className="label">Phone</span><span className="value">{PHONE}</span></div>
              <div className="info-row"><span className="label">Email</span><span className="value">info@coolhomeservices.in</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-bg">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">OUR VALUES</div>
            <h2>What Makes Us Different</h2>
          </div>
          <div className="why-grid">
            {[
              { icon: "🏆", title: "Quality First", desc: "We never compromise on quality. Every repair uses genuine OEM parts with full warranty." },
              { icon: "🤝", title: "Customer Trust", desc: "15,000+ customers trust us. We have a 4.9-star rating across Google and Justdial." },
              { icon: "⚡", title: "Always On Time", desc: "We respect your time. Our technicians arrive within the promised time window, every time." },
              { icon: "💰", title: "Fair Pricing", desc: "Transparent pricing with no hidden charges. You know the cost before we start work." },
            ].map((v) => (
              <div className="why-card" key={v.title}>
                <div className="icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Experience the Best AC Service in Bangalore</h2>
          <a href={`tel:${PHONE.replace(/[^+\d]/g,"")}`} className="cta-phone">📞 {PHONE}</a>
          <div className="cta-btns">
            <a href={`tel:${PHONE.replace(/[^+\d]/g,"")}`} className="btn btn-primary">📞 Call Now</a>
            <a href={`https://wa.me/${WHATSAPP}`} className="btn btn-outline">💬 WhatsApp</a>
            <Link href="/contact" className="btn btn-outline">📅 Book Online</Link>
          </div>
        </div>
      </section>
    </>
  );
}
