import Link from "next/link";
import Image from "next/image";
import HeroForm from "@/components/HeroForm";
import { PHONE, WHATSAPP } from "@/lib/data";

const AC_SERVICES = [
  { icon: "🔧", name: "AC Repair", desc: "Fast diagnosis and repair for all types of ACs — split, window, cassette, inverter. All brands covered." },
  { icon: "🧹", name: "AC Servicing", desc: "Complete cleaning of filters, coils, fins, drain pan. Improves efficiency and extends AC lifespan." },
  { icon: "🔩", name: "AC Installation", desc: "Professional split AC installation with copper pipe fitting, electrical work & demo. Same-day available." },
  { icon: "💧", name: "Gas Filling / Recharge", desc: "AC gas recharge with R22, R32, R410A refrigerant. Leak testing included. Instant cooling restored." },
  { icon: "📋", name: "AMC Plans", desc: "Annual Maintenance Contracts for hassle-free AC upkeep. Quarterly visits, priority service, discounts." },
  { icon: "🏢", name: "Commercial AC Service", desc: "Office, retail, and industrial AC maintenance. Centralized AC, duct AC, VRF/VRV systems handled." },
  { icon: "🔄", name: "AC Shifting & Relocation", desc: "Safe uninstallation and reinstallation when you move home. Proper gas recovery and refilling included." },
  { icon: "🧪", name: "AC Deep Cleaning", desc: "Jet wash, chemical coil cleaning, sanitization. Kills bacteria and mold. Improves air quality." },
];

const OTHER_SERVICES = [
  { icon: "❄️", name: "Refrigeration", desc: "Fridge repair, deep freezer service, and commercial refrigeration maintenance for all brands." },
  { icon: "👕", name: "Washing Machine", desc: "Washing machine repair, installation & servicing. Front load, top load, semi-automatic — all brands." },
  { icon: "🍽️", name: "Microwave", desc: "Microwave oven repair and servicing. Convection, grill, solo — all types and brands covered." },
  { icon: "📺", name: "LED TV", desc: "LED TV repair, screen issues, motherboard repair, sound problems. All brands and screen sizes." },
  { icon: "💧", name: "Water Purifier", desc: "Water purifier installation, servicing & repair. RO, UV, UF — all types and brands covered." },
];

const WHY_US = [
  { icon: "⚡", title: "Same Day Service", desc: "Book by 12 PM and get service the same day. We know how critical AC is in Bangalore heat." },
  { icon: "🏆", title: "Certified Technicians", desc: "All our technicians are trained, certified and background verified for your safety." },
  { icon: "💯", title: "Genuine Spare Parts", desc: "We use only original OEM parts with warranty. No fake components that damage your AC." },
  { icon: "🛡️", title: "Service Warranty", desc: "30-day warranty on all repair work. 1-year warranty on parts replaced. Peace of mind guaranteed." },
  { icon: "📍", title: "All Bangalore Areas", desc: "50+ areas covered. Technicians stationed across Bangalore for fastest response time." },
  { icon: "🔧", title: "All Brands Serviced", desc: "LG, Samsung, Daikin, Voltas, Carrier, Blue Star, Hitachi, Panasonic, O General & more." },
];

const BRANDS = ["❄️ Daikin","🌀 LG","📱 Samsung","🔵 Blue Star","🔴 Carrier","🔶 Voltas","⚡ Hitachi","🌿 Panasonic","🏠 Whirlpool","💚 Godrej","🦁 Lloyd","🌊 Haier","🌸 O General","⭐ Mitsubishi","🔥 Fujitsu","🌐 Toshiba","🔩 Onida","🎯 IFB"];

const TESTIMONIALS = [
  { text: "My AC stopped working on the hottest day in May. Cool Home Services sent a technician within 2 hours. The repair was done quickly and the pricing was very fair. Highly recommend!", name: "Rahul Sharma", loc: "Koramangala, Bangalore", avatar: "R" },
  { text: "Excellent service! I got an AMC plan for 2 ACs and the team comes on schedule every quarter. My electricity bills have also reduced after proper servicing. Great company.", name: "Priya Menon", loc: "Indiranagar, Bangalore", avatar: "P" },
  { text: "Very professional technicians. They explained what was wrong with my Daikin AC and showed me the damaged part before replacing it. Transparent and trustworthy service.", name: "Arjun Nair", loc: "Whitefield, Bangalore", avatar: "A" },
];

const FAQS = [
  { q: "How quickly can you send a technician?", a: "We typically arrive within 2–4 hours of booking. For urgent requests, we offer same-day service if you book before 2 PM. Emergency service is available for critical situations." },
  { q: "Do you service all AC brands?", a: "Yes! We service all major brands including LG, Samsung, Daikin, Voltas, Carrier, Blue Star, Hitachi, Panasonic, Whirlpool, Godrej, Lloyd, Haier, O General, Mitsubishi, and more." },
  { q: "What is the cost of AC repair in Bangalore?", a: "Basic AC service starts at ₹499. Repair charges depend on the issue—compressor, PCB, gas filling etc. We always give a complete estimate before starting work. No hidden charges." },
  { q: "Do you offer warranty on repairs?", a: "Yes. All repair work comes with a 30-day service warranty. Spare parts replaced carry a 1-year warranty. If the same issue recurs within 30 days, we'll fix it free of charge." },
  { q: "How often should I service my AC?", a: "We recommend servicing your AC at least once every 3 months in Bangalore's dusty environment. Regular servicing improves efficiency, reduces electricity bills, and extends AC life." },
  { q: "What areas do you cover in Bangalore?", a: "We cover 50+ areas in Bangalore including Koramangala, Indiranagar, Whitefield, Electronic City, HSR Layout, BTM Layout, Marathahalli, Hebbal, Yelahanka, and many more." },
];

const AREA_LIST = [
  { slug: "koramangala", name: "Koramangala" }, { slug: "indiranagar", name: "Indiranagar" },
  { slug: "whitefield", name: "Whitefield" }, { slug: "electronic-city", name: "Electronic City" },
  { slug: "jayanagar", name: "Jayanagar" }, { slug: "jp-nagar", name: "JP Nagar" },
  { slug: "btm-layout", name: "BTM Layout" }, { slug: "hsr-layout", name: "HSR Layout" },
  { slug: "marathahalli", name: "Marathahalli" }, { slug: "bellandur", name: "Bellandur" },
  { slug: "sarjapur-road", name: "Sarjapur Road" }, { slug: "hebbal", name: "Hebbal" },
  { slug: "yelahanka", name: "Yelahanka" }, { slug: "banashankari", name: "Banashankari" },
  { slug: "basavanagudi", name: "Basavanagudi" }, { slug: "malleswaram", name: "Malleswaram" },
  { slug: "rajajinagar", name: "Rajajinagar" }, { slug: "vijayanagar", name: "Vijayanagar" },
  { slug: "nagarbhavi", name: "Nagarbhavi" }, { slug: "mg-road", name: "MG Road" },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">🚀 BANGALORE&apos;S #1 APPLIANCE REPAIR</div>
            <h1>Expert Repair Service<br />At Your <span>Doorstep</span></h1>
            <p>Fast, reliable &amp; affordable repair for AC, Fridge, Washing Machine, Microwave &amp; Water Purifier. <strong>90 Mins Arrival Time.</strong></p>
            <div className="hero-btns">
              <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi, I need a service booking")}`} className="btn btn-primary">💬 BOOK SERVICE NOW</a>
              <a href={`tel:${PHONE.replace(/[^+\d]/g,"")}`} className="btn btn-outline">📞 Call: {PHONE}</a>
            </div>
            <div className="hero-stats">
              <div className="stat-item"><div className="num">15,000+</div><div className="label">Happy Customers</div></div>
              <div className="stat-item"><div className="num">10+</div><div className="label">Years Experience</div></div>
              <div className="stat-item"><div className="num">50+</div><div className="label">Areas Covered</div></div>
              <div className="stat-item"><div className="num">4.9⭐</div><div className="label">Average Rating</div></div>
            </div>
          </div>
          <HeroForm variant="hero" />
        </div>
      </section>

      <section style={{ background: "#fff" }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">OUR SERVICES</div>
            <h2>AC Services — Our Speciality</h2>
            <p>From repair to installation, we handle everything with certified professionals and genuine parts.</p>
          </div>
          <div className="services-grid">
            {AC_SERVICES.map((s) => (
              <div className="service-card" key={s.name}>
                <span className="service-icon">{s.icon}</span>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
                <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi, I need ${s.name} service`)}`} className="btn btn-primary" style={{marginTop:"12px",width:"100%",justifyContent:"center",fontSize:"13px",padding:"10px 20px"}}>💬 WhatsApp Us</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-bg">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">MORE SERVICES</div>
            <h2>Other Appliance Services</h2>
            <p>We also repair and service all major home appliances.</p>
          </div>
          <div className="services-grid">
            {OTHER_SERVICES.map((s) => (
              <div className="service-card" key={s.name}>
                <span className="service-icon">{s.icon}</span>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
                <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi, I need ${s.name} service`)}`} className="btn btn-primary" style={{marginTop:"12px",width:"100%",justifyContent:"center",fontSize:"13px",padding:"10px 20px"}}>💬 WhatsApp Us</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-bg">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">WHY CHOOSE US</div>
            <h2>Why Thousands Trust Cool Home Services</h2>
          </div>
          <div className="why-grid">
            {WHY_US.map((w) => (
              <div className="why-card" key={w.title}>
                <div className="icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#fff" }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">BRANDS WE SERVICE</div>
            <h2>All Major AC Brands Covered</h2>
          </div>
          <div className="brands-grid">
            {BRANDS.map((b) => <div className="brand-card" key={b}>{b}</div>)}
          </div>
        </div>
      </section>

      <section className="why-bg">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">HOW IT WORKS</div>
            <h2>Book AC Service in 3 Easy Steps</h2>
          </div>
          <div className="process-steps">
            <div className="step"><div className="step-num">1</div><h3>Call or Book Online</h3><p>Call {PHONE} or fill our online form.</p></div>
            <div className="step"><div className="step-num">2</div><h3>Technician Arrives</h3><p>Certified technician arrives at your doorstep, on time, with all tools.</p></div>
            <div className="step"><div className="step-num">3</div><h3>AC Fixed &amp; Running</h3><p>Work is done transparently. Pay only after you&apos;re satisfied.</p></div>
          </div>
        </div>
      </section>

      <section className="why-bg">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">SERVICE AREAS</div>
            <h2>AC Service Available Across Bangalore</h2>
          </div>
          <div className="areas-grid">
            {AREA_LIST.map((a) => (
              <Link key={a.slug} className="area-chip" href={`/areas/${a.slug}`}>{a.name}</Link>
            ))}
          </div>
          <div style={{textAlign:"center",marginTop:"30px"}}>
            <Link href="/areas" className="btn btn-primary">View All Service Areas →</Link>
          </div>
        </div>
      </section>

      <section className="why-bg">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">OUR WORK</div>
            <h2>Our AC Service Gallery</h2>
            <p>Real work done by our certified technicians across Bangalore</p>
          </div>
          <div className="gallery-grid">
            {[
              "2025-12-15 (1).jpg","2025-12-15 (2).jpg","2025-12-15 (3).jpg","2025-12-15 (4).jpg",
              "2025-12-15 (5).jpg","2025-12-15 (6).jpg","2025-12-15 (7).jpg","2025-12-15 (8).jpg",
              "2025-12-15 (9).jpg","2025-12-15 (10).jpg","2025-12-15 (11).jpg","2025-12-15.jpg",
              "2026-01-17.jpg","2026-01-19 (1).jpg","2026-01-19.jpg","2026-01-20 (1).jpg",
              "2026-01-20 (2).jpg","2026-01-20 (3).jpg","2026-01-20 (4).jpg","2026-01-20 (5).jpg",
              "2026-01-20 (6).jpg","2026-01-20 (7).jpg","2026-01-20.jpg","2026-03-15 (1).jpg",
              "2026-03-15.jpg","2026-03-24 (1).jpg","2026-03-24.jpg","2026-03-29.jpg",
            ].map((img, i) => (
              <div key={i} className="gallery-item">
                <Image
                  src={`/gallery/${img}`}
                  alt={`Cool Home Services AC work ${i + 1}`}
                  width={400}
                  height={300}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#fff" }}>
        <div className="container">
          <div className="section-header"><div className="section-tag">REVIEWS</div><h2>What Our Customers Say</h2></div>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t) => (
              <div className="testimonial-card" key={t.name}>
                <div className="stars">★★★★★</div>
                <p>&ldquo;{t.text}&rdquo;</p>
                <div className="reviewer">
                  <div className="reviewer-avatar">{t.avatar}</div>
                  <div><div className="reviewer-name">{t.name}</div><div className="reviewer-loc">{t.loc}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-bg">
        <div className="container">
          <div className="section-header"><div className="section-tag">FAQ</div><h2>Frequently Asked Questions</h2></div>
          <div className="faq-list">
            {FAQS.map((faq) => (
              <div className="faq-item" key={faq.q}>
                <div className="faq-q">{faq.q} <span className="arrow">▼</span></div>
                <div className="faq-a">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Is Your AC Not Cooling? Call Us Now!</h2>
          <a href={`tel:${PHONE.replace(/[^+\d]/g,"")}`} className="cta-phone">📞 {PHONE}</a>
          <p>Same day service available. Certified technicians. All brands. All Bangalore areas.</p>
          <div className="cta-btns">
            <a href={`tel:${PHONE.replace(/[^+\d]/g,"")}`} className="btn btn-primary">📞 Call Now</a>
            <a href={`https://wa.me/${WHATSAPP}`} className="btn btn-outline">💬 WhatsApp Us</a>
            <Link href="/contact" className="btn btn-outline">📅 Book Online</Link>
          </div>
        </div>
      </section>

      <section style={{ background: "#fff" }}>
        <div className="container">
          <div className="section-header"><div className="section-tag">BOOK SERVICE</div><h2>Book Your AC Service Online</h2></div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item"><div className="contact-icon">📞</div><div><h4>CALL US</h4><p>{PHONE}</p></div></div>
              <div className="contact-item"><div className="contact-icon">💬</div><div><h4>WHATSAPP</h4><p>{PHONE}</p></div></div>
              <div className="contact-item"><div className="contact-icon">✉️</div><div><h4>EMAIL</h4><p>info@coolhomesservices.com</p></div></div>
              <div className="contact-item"><div className="contact-icon">📍</div><div><h4>OFFICE</h4><p>Koramangala, Bangalore – 560034</p></div></div>
              <div className="contact-item"><div className="contact-icon">🕐</div><div><h4>WORKING HOURS</h4><p>Monday – Sunday: 8AM – 8PM</p></div></div>
            </div>
            <div className="contact-form">
              <h3>Get a Free Callback</h3>
              <HeroForm variant="inner" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
