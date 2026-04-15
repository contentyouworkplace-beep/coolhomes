import type { Metadata } from "next";
import Link from "next/link";
import HeroForm from "@/components/HeroForm";
import { PHONE, WHATSAPP, EMAIL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Cool Homes Services | Book AC Service in Bangalore",
  description: "Contact Cool Homes Services to book AC repair, installation or servicing in Bangalore. Call +91-9876543210 or fill our online form for a free callback.",
};

export default function ContactPage() {
  return (
    <>
      <section className="inner-hero">
        <div className="container">
          <div>
            <div className="breadcrumb"><Link href="/">Home</Link> &rsaquo; Contact</div>
            <h1>Contact Cool Homes Services</h1>
            <p>Book AC repair, installation or servicing in Bangalore. We respond within 30 minutes.</p>
          </div>
          <HeroForm variant="inner" />
        </div>
      </section>

      <section style={{ background: "#fff" }}>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 style={{marginBottom:"20px"}}>Get In Touch</h2>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div><h4>CALL US</h4><p><a href={`tel:${PHONE.replace(/[^+\d]/g,"")}`}>{PHONE}</a></p></div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">💬</div>
                <div><h4>WHATSAPP</h4><p><a href={`https://wa.me/${WHATSAPP}`}>{PHONE}</a></p></div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div><h4>EMAIL</h4><p><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p></div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div><h4>OFFICE</h4><p>4th T Block East, 2nd Phase, Jayanagar, Bengaluru, Karnataka 560041</p></div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🕐</div>
                <div><h4>WORKING HOURS</h4><p>Monday – Sunday: 8AM – 8PM</p></div>
              </div>
            </div>
            <div className="contact-form">
              <h3>Book Online – Get Free Callback</h3>
              <HeroForm variant="light" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
