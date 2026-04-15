import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import HeroForm from "@/components/HeroForm";
import SchemaMarkup from "@/components/SchemaMarkup";
import { KEYWORDS, AREAS, PHONE, WHATSAPP, getKeywordSlugs } from "@/lib/data";

export const revalidate = 86400;

export async function generateStaticParams() {
  return getKeywordSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const kw = KEYWORDS[slug];
  if (!kw) return {};
  const url = `https://www.coolhomesservices.com/keywords/${slug}`;
  return {
    title: `${kw.title} | Cool Homes Services`,
    description: kw.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${kw.title} | Cool Homes Services`,
      description: kw.description,
      url,
      type: "website",
      siteName: "Cool Homes Services",
    },
    twitter: {
      card: "summary",
      title: `${kw.title} | Cool Homes Services`,
      description: kw.description,
    },
  };
}

export default async function KeywordPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const kw = KEYWORDS[slug];
  if (!kw) notFound();

  const title = kw.title;

  // Related keyword slugs (up to 8, excluding current)
  const allKeywordSlugs = Object.keys(KEYWORDS);
  const relatedKeywords = allKeywordSlugs
    .filter((s) => s !== slug)
    .slice(0, 8);

  // Top area slugs
  const topAreas = Object.entries(AREAS).slice(0, 8);

  return (
    <>
      <SchemaMarkup
        breadcrumbs={[
          { name: "Home", url: "https://www.coolhomesservices.com" },
          { name: "Services", url: "https://www.coolhomesservices.com/services" },
          { name: title, url: `https://www.coolhomesservices.com/keywords/${slug}` },
        ]}
        pageUrl={`https://www.coolhomesservices.com/keywords/${slug}`}
        pageTitle={`${title} | Cool Homes Services`}
        pageDescription={kw.description}
      />
      <section className="inner-hero">
        <div className="container">
          <div>
            <div className="breadcrumb"><Link href="/">Home</Link> &rsaquo; {title}</div>
            <h1>{title}</h1>
            <p>Professional AC technicians at your doorstep. Same-day service. All brands. 30-day warranty.</p>
          </div>
          <HeroForm variant="inner" />
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-two-col">
            <div className="content-text">
              <h2>{title} – <span>Expert Service You Can Trust</span></h2>
              <p>
                Are you looking for <strong>{title}</strong>? Cool Homes Services is Bangalore&apos;s most trusted
                AC service provider with over 10 years of experience. Our certified technicians deliver
                top-quality results at your doorstep.
              </p>
              <p>
                Whether it&apos;s a minor fault or a major breakdown, we diagnose accurately and fix it efficiently.
                We serve all 50+ areas of Bangalore with fast response times.
              </p>
              <ul>
                <li>Certified and experienced AC technicians</li>
                <li>Same-day service available in most areas</li>
                <li>All brands: LG, Daikin, Samsung, Voltas, Carrier and more</li>
                <li>Genuine OEM spare parts with 1-year warranty</li>
                <li>Transparent pricing - no hidden charges</li>
                <li>30-day service warranty on all work</li>
                <li>Available 7 days a week, 8AM to 8PM</li>
              </ul>
              <br />
              <a href={`tel:${PHONE.replace(/[^+\d]/g,"")}`} className="btn btn-primary">
                Call Now for Free Inspection
              </a>
            </div>
            <div className="info-box">
              <h3>Service Quick Info</h3>
              <div className="info-row"><span className="label">Service</span><span className="value">{title}</span></div>
              <div className="info-row"><span className="label">Location</span><span className="value">All Bangalore Areas</span></div>
              <div className="info-row"><span className="label">Response Time</span><span className="value">2-4 Hours</span></div>
              <div className="info-row"><span className="label">Starting Price</span><span className="value">Rs.299 Onwards</span></div>
              <div className="info-row"><span className="label">Warranty</span><span className="value">30-Day Service Warranty</span></div>
              <div className="info-row"><span className="label">Availability</span><span className="value">Mon-Sun, 8AM-8PM</span></div>
              <div className="info-row"><span className="label">Payment</span><span className="value">Cash / UPI / Card</span></div>
              <br />
              <a href={`tel:${PHONE.replace(/[^+\d]/g,"")}`} className="btn btn-primary" style={{width:"100%",justifyContent:"center"}}>
                Book Service Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section alt-bg">
        <div className="container">
          <div className="section-header"><h2>Why Choose Cool Homes Services for {title}?</h2></div>
          <div className="why-grid">
            <div className="why-card"><div className="icon">⚡</div><h3>Fast Response</h3><p>Technicians dispatched within 30 minutes. Same-day service available across Bangalore.</p></div>
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
            <div className="step"><div className="step-num">1</div><h3>Call or Book</h3><p>Call {PHONE} or book online. Share your AC issue and location.</p></div>
            <div className="step"><div className="step-num">2</div><h3>Technician Arrives</h3><p>Certified technician arrives at your doorstep on time with all tools and parts.</p></div>
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
              <div className="faq-q">How do I book {title}? <span className="arrow">▼</span></div>
              <div className="faq-a">Call {PHONE} or use our online booking form. We confirm your slot and send a certified technician within 2-4 hours.</div>
            </div>
            <div className="faq-item">
              <div className="faq-q">What is the cost? <span className="arrow">▼</span></div>
              <div className="faq-a">Services start from Rs.299. Final cost depends on the issue. We give a full estimate before starting - no surprises.</div>
            </div>
            <div className="faq-item">
              <div className="faq-q">How quickly will the technician arrive? <span className="arrow">▼</span></div>
              <div className="faq-a">Typically within 2-4 hours. Same-day service available for bookings before 2 PM.</div>
            </div>
            <div className="faq-item">
              <div className="faq-q">Is there a warranty? <span className="arrow">▼</span></div>
              <div className="faq-a">Yes - 30-day service warranty and 1-year parts warranty on all work done.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Need {title}? Call Now!</h2>
          <a href={`tel:${PHONE.replace(/[^+\d]/g,"")}`} className="cta-phone">📞 {PHONE}</a>
          <p>Same-day service. All brands. Certified technicians. All Bangalore areas.</p>
          <div className="cta-btns">
            <a href={`tel:${PHONE.replace(/[^+\d]/g,"")}`} className="btn btn-primary">📞 Call Now</a>
            <a href={`https://wa.me/${WHATSAPP}`} className="btn btn-outline">💬 WhatsApp</a>
            <Link href="/contact" className="btn btn-outline">📅 Book Online</Link>
          </div>
        </div>
      </section>

      {/* Internal Linking: Related Services */}
      <section className="content-section">
        <div className="container">
          <div className="section-header"><h2>Related AC Services in Bangalore</h2></div>
          <div style={{display:"flex",flexWrap:"wrap",gap:"10px",marginBottom:"30px"}}>
            {relatedKeywords.map((s) => (
              <Link key={s} href={`/keywords/${s}`} className="area-chip">{KEYWORDS[s].title}</Link>
            ))}
            <Link href="/services" className="area-chip">All Services →</Link>
          </div>
          <div className="section-header" style={{marginTop:"20px"}}><h2>AC Service Areas in Bangalore</h2></div>
          <div style={{display:"flex",flexWrap:"wrap",gap:"10px"}}>
            {topAreas.map(([s, a]) => (
              <Link key={s} href={`/areas/${s}`} className="area-chip">{a.name}</Link>
            ))}
            <Link href="/areas" className="area-chip">All Areas →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
