import type { Metadata } from "next";
import Link from "next/link";
import HeroForm from "@/components/HeroForm";
import { PHONE, WHATSAPP } from "@/lib/data";

export const metadata: Metadata = {
  title: "AC Repair & Services in Bangalore | Cool Home Services",
  description: "Complete AC repair, installation, servicing, gas filling, deep cleaning and AMC plans in Bangalore. Certified technicians, all brands, same-day service.",
};

const SERVICES = [
  { icon: "🔧", name: "AC Repair", desc: "Fast diagnosis and repair for all types of ACs. Split, window, cassette, inverter. All brands covered.", price: "Starting ₹299", features: ["All AC brands", "Same-day service", "Genuine parts", "30-day warranty"] },
  { icon: "🧹", name: "AC Servicing / Cleaning", desc: "Complete cleaning of filters, coils, fins, drain pan. Improves efficiency and extends AC lifespan.", price: "Starting ₹499", features: ["Filter cleaning", "Coil cleaning", "Drain cleaning", "Performance check"] },
  { icon: "🔩", name: "AC Installation", desc: "Professional split AC installation with copper pipe fitting, electrical work & demo. Same-day available.", price: "Starting ₹999", features: ["Copper pipe fitting", "Electrical work", "Demo included", "Same-day available"] },
  { icon: "💧", name: "Gas Filling / Recharge", desc: "AC gas recharge with R22, R32, R410A refrigerant. Leak testing included. Instant cooling restored.", price: "Starting ₹1,499", features: ["All refrigerants", "Leak testing", "Pressure check", "Instant cooling"] },
  { icon: "🧪", name: "AC Deep Cleaning", desc: "Jet wash, chemical coil cleaning, sanitization. Kills bacteria and mold. Improves air quality.", price: "Starting ₹799", features: ["Chemical cleaning", "Jet wash", "Sanitization", "Air quality improvement"] },
  { icon: "🔄", name: "AC Shifting & Relocation", desc: "Safe uninstallation and reinstallation when you move home. Proper gas recovery and refilling included.", price: "Starting ₹1,499", features: ["Safe uninstallation", "Gas recovery", "Reinstallation", "Testing"] },
  { icon: "📋", name: "AMC Plans", desc: "Annual Maintenance Contracts for hassle-free AC upkeep. Quarterly visits, priority service, discounts.", price: "Starting ₹2,999/year", features: ["4 services/year", "Priority booking", "Emergency visits", "Parts discount"] },
  { icon: "🏢", name: "Commercial AC Service", desc: "Office, retail, and industrial AC maintenance. Centralized AC, duct AC, VRF/VRV systems handled.", price: "Custom Pricing", features: ["All commercial types", "Centralized AC", "VRF/VRV systems", "Duct AC"] },
];

export default function ServicesPage() {
  return (
    <>
      <section className="inner-hero">
        <div className="container">
          <div>
            <div className="breadcrumb"><Link href="/">Home</Link> &rsaquo; Services</div>
            <h1>AC Repair &amp; Services in Bangalore</h1>
            <p>Complete AC solutions — repair, installation, servicing, gas filling, deep cleaning and AMC. All brands. All areas. Certified technicians.</p>
          </div>
          <HeroForm variant="inner" />
        </div>
      </section>

      <section style={{ background: "#fff" }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">ALL SERVICES</div>
            <h2>Our Complete AC Service Offerings</h2>
            <p>From routine maintenance to emergency repairs, we cover everything for your AC.</p>
          </div>
          <div className="services-grid">
            {SERVICES.map((s) => (
              <div className="service-card" key={s.name}>
                <span className="service-icon">{s.icon}</span>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
                <ul style={{listStyle:"none",padding:0,margin:"10px 0"}}>
                  {s.features.map(f => <li key={f} style={{fontSize:"13px",color:"#555",padding:"2px 0"}}>✓ {f}</li>)}
                </ul>
                <div className="price">{s.price}</div>
                <a href={`tel:${PHONE.replace(/[^+\d]/g,"")}`} className="btn btn-primary" style={{marginTop:"10px",width:"100%",justifyContent:"center",fontSize:"13px"}}>Book Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Need AC Service in Bangalore? Call Now!</h2>
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
