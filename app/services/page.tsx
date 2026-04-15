import type { Metadata } from "next";
import Link from "next/link";
import HeroForm from "@/components/HeroForm";
import { PHONE, WHATSAPP } from "@/lib/data";

export const metadata: Metadata = {
  title: "AC Repair & Services in Bangalore | Cool Homes Services",
  description: "Complete AC repair, installation, servicing, gas filling, deep cleaning and AMC plans in Bangalore. Certified technicians, all brands, same-day service.",
};

const AC_SERVICES = [
  { icon: "🔧", name: "AC Repair", desc: "Fast diagnosis and repair for all types of ACs. Split, window, cassette, inverter. All brands covered.", features: ["All AC brands", "Same-day service", "Genuine parts", "30-day warranty"] },
  { icon: "🧹", name: "AC Servicing / Cleaning", desc: "Complete cleaning of filters, coils, fins, drain pan. Improves efficiency and extends AC lifespan.", features: ["Filter cleaning", "Coil cleaning", "Drain cleaning", "Performance check"] },
  { icon: "🔩", name: "AC Installation", desc: "Professional split AC installation with copper pipe fitting, electrical work & demo. Same-day available.", features: ["Copper pipe fitting", "Electrical work", "Demo included", "Same-day available"] },
  { icon: "💧", name: "Gas Filling / Recharge", desc: "AC gas recharge with R22, R32, R410A refrigerant. Leak testing included. Instant cooling restored.", features: ["All refrigerants", "Leak testing", "Pressure check", "Instant cooling"] },
  { icon: "🧪", name: "AC Deep Cleaning", desc: "Jet wash, chemical coil cleaning, sanitization. Kills bacteria and mold. Improves air quality.", features: ["Chemical cleaning", "Jet wash", "Sanitization", "Air quality improvement"] },
  { icon: "🔄", name: "AC Shifting & Relocation", desc: "Safe uninstallation and reinstallation when you move home. Proper gas recovery and refilling included.", features: ["Safe uninstallation", "Gas recovery", "Reinstallation", "Testing"] },
  { icon: "📋", name: "AMC Plans", desc: "Annual Maintenance Contracts for hassle-free AC upkeep. Quarterly visits, priority service, discounts.", features: ["4 services/year", "Priority booking", "Emergency visits", "Parts discount"] },
  { icon: "🏢", name: "Commercial AC Service", desc: "Office, retail, and industrial AC maintenance. Centralized AC, duct AC, VRF/VRV systems handled.", features: ["All commercial types", "Centralized AC", "VRF/VRV systems", "Duct AC"] },
];

const OTHER_SERVICES = [
  { icon: "❄️", name: "Refrigeration", desc: "Fridge repair, deep freezer service, and commercial refrigeration maintenance for all brands.", features: ["All fridge types", "Deep freezer", "Commercial units", "All brands"] },
  { icon: "👕", name: "Washing Machine", desc: "Washing machine repair, installation & servicing. Front load, top load, semi-automatic — all brands.", features: ["Front load", "Top load", "Semi-automatic", "Installation"] },
  { icon: "🍽️", name: "Microwave", desc: "Microwave oven repair and servicing. Convection, grill, solo — all types and brands covered.", features: ["Convection", "Grill", "Solo", "All brands"] },
  { icon: "📺", name: "LED TV", desc: "LED TV repair, screen issues, motherboard repair, sound problems. All brands and screen sizes.", features: ["Screen repair", "Motherboard", "Sound issues", "All sizes"] },
  { icon: "💧", name: "Water Purifier", desc: "Water purifier installation, servicing & repair. RO, UV, UF — all types and brands covered.", features: ["RO service", "UV/UF repair", "Filter change", "Installation"] },
];

export default function ServicesPage() {
  return (
    <>
      <section className="inner-hero">
        <div className="container">
          <div>
            <div className="breadcrumb"><Link href="/">Home</Link> &rsaquo; Services</div>
            <h1>Repair &amp; Services in Bangalore</h1>
            <p>Complete appliance solutions — AC, Fridge, Washing Machine, Microwave, LED TV &amp; Water Purifier. All brands. All areas. Certified technicians.</p>
          </div>
          <HeroForm variant="inner" />
        </div>
      </section>

      <section style={{ background: "#fff" }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">AC SERVICES</div>
            <h2>AC Service — Our Speciality</h2>
            <p>From routine maintenance to emergency repairs, we cover everything for your AC.</p>
          </div>
          <div className="services-grid">
            {AC_SERVICES.map((s) => (
              <div className="service-card" key={s.name}>
                <span className="service-icon">{s.icon}</span>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
                <ul style={{listStyle:"none",padding:0,margin:"10px 0"}}>
                  {s.features.map(f => <li key={f} style={{fontSize:"13px",color:"#555",padding:"2px 0"}}>✓ {f}</li>)}
                </ul>
                <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi, I need ${s.name} service`)}`} className="btn btn-primary" style={{marginTop:"10px",width:"100%",justifyContent:"center",fontSize:"13px"}}>💬 WhatsApp Us</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-bg">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">OTHER SERVICES</div>
            <h2>Other Appliance Services</h2>
            <p>We also repair and service all major home appliances.</p>
          </div>
          <div className="services-grid">
            {OTHER_SERVICES.map((s) => (
              <div className="service-card" key={s.name}>
                <span className="service-icon">{s.icon}</span>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
                <ul style={{listStyle:"none",padding:0,margin:"10px 0"}}>
                  {s.features.map(f => <li key={f} style={{fontSize:"13px",color:"#555",padding:"2px 0"}}>✓ {f}</li>)}
                </ul>
                <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi, I need ${s.name} service`)}`} className="btn btn-primary" style={{marginTop:"10px",width:"100%",justifyContent:"center",fontSize:"13px"}}>💬 WhatsApp Us</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Need Appliance Service in Bangalore? Call Now!</h2>
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
