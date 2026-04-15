import type { Metadata } from "next";
import Link from "next/link";
import HeroForm from "@/components/HeroForm";
import { PHONE, WHATSAPP, AREAS } from "@/lib/data";

export const metadata: Metadata = {
  title: "AC Service Areas in Bangalore | Cool Homes Services",
  description: "Cool Homes Services covers 50+ areas in Bangalore for AC repair, installation and servicing. Find your area and book same-day service.",
};

export default function AreasPage() {
  const areaEntries = Object.entries(AREAS);

  return (
    <>
      <section className="inner-hero">
        <div className="container">
          <div>
            <div className="breadcrumb"><Link href="/">Home</Link> &rsaquo; Service Areas</div>
            <h1>AC Service Areas in Bangalore</h1>
            <p>We cover 50+ areas across Bangalore for fast AC repair, installation and servicing. Find your area and book today.</p>
          </div>
          <HeroForm variant="inner" />
        </div>
      </section>

      <section style={{ background: "#fff" }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">ALL AREAS</div>
            <h2>50+ Areas Covered in Bangalore</h2>
            <p>Our technicians are stationed across Bangalore for the fastest response time in your area.</p>
          </div>
          <div className="areas-grid" style={{gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))"}}>
            {areaEntries.map(([slug, area]) => (
              <Link key={slug} href={`/areas/${slug}`} className="area-chip">
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Don&apos;t See Your Area? Call Us!</h2>
          <a href={`tel:${PHONE.replace(/[^+\d]/g,"")}`} className="cta-phone">📞 {PHONE}</a>
          <p>We cover all of Bangalore and surrounding areas. Call us to confirm coverage.</p>
          <div className="cta-btns">
            <a href={`tel:${PHONE.replace(/[^+\d]/g,"")}`} className="btn btn-primary">📞 Call Now</a>
            <a href={`https://wa.me/${WHATSAPP}`} className="btn btn-outline">💬 WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
