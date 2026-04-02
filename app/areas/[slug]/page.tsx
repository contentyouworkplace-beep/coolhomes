import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import HeroForm from "@/components/HeroForm";
import SchemaMarkup from "@/components/SchemaMarkup";
import { AREAS, KEYWORDS, PHONE, WHATSAPP, getAreaSlugs } from "@/lib/data";

export const revalidate = 86400;

export async function generateStaticParams() {
  return getAreaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = AREAS[slug];
  if (!area) return {};
  const url = `https://www.coolhomesservices.com/areas/${slug}`;
  return {
    title: `AC Repair in ${area.name}, Bangalore | Cool Home Services`,
    description: area.description,
    alternates: { canonical: url },
    openGraph: {
      title: `AC Repair in ${area.name}, Bangalore | Cool Home Services`,
      description: area.description,
      url,
      type: "website",
      siteName: "Cool Home Services",
    },
    twitter: {
      card: "summary",
      title: `AC Repair in ${area.name}, Bangalore | Cool Home Services`,
      description: area.description,
    },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = AREAS[slug];
  if (!area) notFound();

  const name = area.name;

  // Nearby areas (up to 8, excluding current)
  const nearbyAreas = Object.entries(AREAS)
    .filter(([s]) => s !== slug)
    .slice(0, 8);

  // Top service keywords for this area
  const topKeywords = Object.entries(KEYWORDS).slice(0, 8);

  return (
    <>
      <SchemaMarkup
        breadcrumbs={[
          { name: "Home", url: "https://www.coolhomesservices.com" },
          { name: "Areas", url: "https://www.coolhomesservices.com/areas" },
          { name: `AC Repair in ${name}`, url: `https://www.coolhomesservices.com/areas/${slug}` },
        ]}
        pageUrl={`https://www.coolhomesservices.com/areas/${slug}`}
        pageTitle={`AC Repair in ${name}, Bangalore | Cool Home Services`}
        pageDescription={area.description}
      />
      <section className="inner-hero">
        <div className="container">
          <div>
            <div className="breadcrumb">
              <Link href="/">Home</Link> &rsaquo; <Link href="/areas">Areas</Link> &rsaquo; {name}
            </div>
            <h1>AC Repair &amp; Service in <span>{name}</span>, Bangalore</h1>
            <p>Certified AC technicians serving {name} and nearby areas. Same-day service, all brands, transparent pricing.</p>
          </div>
          <HeroForm variant="inner" />
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-two-col">
            <div className="content-text">
              <h2>AC Repair &amp; Service in <span>{name}</span></h2>
              <p>
                Cool Home Services provides expert AC repair, servicing, installation, and maintenance in{" "}
                <strong>{name}, Bangalore</strong>. Our experienced technicians are stationed near {name}{" "}
                to ensure fast response times.
              </p>
              <p>
                We serve all localities in and around {name}. Whether you need emergency AC repair, regular
                servicing, new AC installation, or an annual maintenance contract, we&apos;ve got you covered.
              </p>
              <ul>
                <li>AC repair in {name} - starting Rs.299</li>
                <li>AC servicing and cleaning in {name}</li>
                <li>AC installation in {name}</li>
                <li>AC gas filling and recharge in {name}</li>
                <li>Annual Maintenance Contract (AMC) in {name}</li>
                <li>All brands serviced in {name}</li>
                <li>Same-day service in {name}</li>
                <li>30-day warranty on all work</li>
              </ul>
              <br />
              <a href={`tel:${PHONE.replace(/[^+\d]/g,"")}`} className="btn btn-primary">
                Call Now - Service in {name}
              </a>
            </div>
            <div className="info-box">
              <h3>AC Service in {name}</h3>
              <div className="info-row"><span className="label">Service Area</span><span className="value">{name}, Bangalore</span></div>
              <div className="info-row"><span className="label">Response Time</span><span className="value">1-3 Hours</span></div>
              <div className="info-row"><span className="label">Service Days</span><span className="value">Mon to Sun</span></div>
              <div className="info-row"><span className="label">Working Hours</span><span className="value">8AM to 8PM</span></div>
              <div className="info-row"><span className="label">Starting Price</span><span className="value">Rs.299 Onwards</span></div>
              <div className="info-row"><span className="label">Warranty</span><span className="value">30-Day Service Warranty</span></div>
              <br />
              <a href={`tel:${PHONE.replace(/[^+\d]/g,"")}`} className="btn btn-primary" style={{width:"100%",justifyContent:"center"}}>
                Book Service in {name}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section alt-bg">
        <div className="container">
          <div className="section-header"><h2>Why Choose Us for AC Service in {name}?</h2></div>
          <div className="why-grid">
            <div className="why-card"><div className="icon">⚡</div><h3>Fast Response</h3><p>Technicians dispatched within 30 minutes. Same-day service available in {name}.</p></div>
            <div className="why-card"><div className="icon">🏆</div><h3>Certified Experts</h3><p>All technicians are certified with 5+ years of hands-on AC service experience.</p></div>
            <div className="why-card"><div className="icon">💰</div><h3>Best Prices</h3><p>Affordable, transparent pricing. Full estimate given before starting work. No surprises.</p></div>
            <div className="why-card"><div className="icon">🛡️</div><h3>Guaranteed Work</h3><p>30-day service warranty. 1-year parts warranty. Full customer satisfaction guaranteed.</p></div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="section-header"><h2>How It Works</h2></div>
          <div className="process-steps">
            <div className="step"><div className="step-num">1</div><h3>Call or Book</h3><p>Call {PHONE} or book online. Share your AC issue and location in {name}.</p></div>
            <div className="step"><div className="step-num">2</div><h3>Technician Arrives</h3><p>Certified technician arrives at your doorstep in {name} on time.</p></div>
            <div className="step"><div className="step-num">3</div><h3>Diagnosis and Quote</h3><p>Problem diagnosed, transparent cost estimate provided before work begins.</p></div>
            <div className="step"><div className="step-num">4</div><h3>Fixed and Pay</h3><p>Service completed to your satisfaction. Pay only after you are happy.</p></div>
          </div>
        </div>
      </section>

      <section className="content-section alt-bg">
        <div className="container">
          <div className="section-header"><h2>Frequently Asked Questions</h2></div>
          <div className="faq-list">
            <div className="faq-item">
              <div className="faq-q">How do I book AC service in {name}? <span className="arrow">▼</span></div>
              <div className="faq-a">Call {PHONE} or use our online booking form. We confirm your slot and send a certified technician within 2-4 hours in {name}.</div>
            </div>
            <div className="faq-item">
              <div className="faq-q">What is the cost of AC service in {name}? <span className="arrow">▼</span></div>
              <div className="faq-a">Services start from Rs.299 in {name}. Final cost depends on the issue. We give a full estimate before starting - no surprises.</div>
            </div>
            <div className="faq-item">
              <div className="faq-q">How quickly will the technician arrive in {name}? <span className="arrow">▼</span></div>
              <div className="faq-a">Typically within 1-3 hours in {name}. Same-day service available for bookings before 2 PM.</div>
            </div>
            <div className="faq-item">
              <div className="faq-q">Is there a warranty on repairs in {name}? <span className="arrow">▼</span></div>
              <div className="faq-a">Yes - 30-day service warranty and 1-year parts warranty on all work done in {name}.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Need AC Service in {name}? Call Now!</h2>
          <a href={`tel:${PHONE.replace(/[^+\d]/g,"")}`} className="cta-phone">📞 {PHONE}</a>
          <p>Same-day service in {name}. All brands. Certified technicians.</p>
          <div className="cta-btns">
            <a href={`tel:${PHONE.replace(/[^+\d]/g,"")}`} className="btn btn-primary">📞 Call Now</a>
            <a href={`https://wa.me/${WHATSAPP}`} className="btn btn-outline">💬 WhatsApp</a>
            <Link href="/contact" className="btn btn-outline">📅 Book Online</Link>
          </div>
        </div>
      </section>

      {/* Internal Linking: Nearby Areas + Services */}
      <section className="content-section">
        <div className="container">
          <div className="section-header"><h2>AC Service in Nearby Areas</h2></div>
          <div style={{display:"flex",flexWrap:"wrap",gap:"10px",marginBottom:"30px"}}>
            {nearbyAreas.map(([s, a]) => (
              <Link key={s} href={`/areas/${s}`} className="area-chip">{a.name}</Link>
            ))}
            <Link href="/areas" className="area-chip">All Areas →</Link>
          </div>
          <div className="section-header" style={{marginTop:"20px"}}><h2>Our AC Services in {name}</h2></div>
          <div style={{display:"flex",flexWrap:"wrap",gap:"10px"}}>
            {topKeywords.map(([s, kw]) => (
              <Link key={s} href={`/keywords/${s}`} className="area-chip">{kw.title}</Link>
            ))}
            <Link href="/services" className="area-chip">All Services →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
