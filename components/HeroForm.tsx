"use client";
import { useState, useRef } from "react";
import { SERVICES, WHATSAPP } from "@/lib/data";

interface HeroFormProps {
  variant?: "hero" | "inner" | "light";
}

export default function HeroForm({ variant = "inner" }: HeroFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const serviceRef = useRef<HTMLSelectElement>(null);
  const areaRef = useRef<HTMLInputElement>(null);
  const brandRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const name = nameRef.current?.value || "";
    const phone = phoneRef.current?.value || "";
    const service = serviceRef.current?.value || "";
    const area = areaRef.current?.value || "";
    const brand = brandRef.current?.value || "";

    const msg = [
      `🔧 *New AC Service Booking*`,
      `👤 Name: ${name}`,
      `📞 Phone: ${phone}`,
      `🛠️ Service: ${service}`,
      `📍 Area: ${area}, Bangalore`,
      brand ? `❄️ AC Brand: ${brand}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");

    setSubmitted(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSubmitted(false), 4000);
  }

  const className = variant === "hero" ? "hero-form" : variant === "light" ? "light-hero-form" : "inner-hero-form";

  return (
    <div className={className}>
      <h3>{variant === "hero" ? "🚀 Book AC Service Now" : "📞 Book AC Service"}</h3>
      <div className="form-sub">
        {variant === "hero"
          ? "Free inspection · Same-day available · All brands"
          : "Free callback in 30 mins · All brands"}
      </div>
      {submitted && (
        <div style={{ background: "#22c55e", color: "#fff", borderRadius: "8px", padding: "10px 14px", marginBottom: "10px", fontSize: "13px", fontWeight: 600 }}>
          ✅ Redirecting to WhatsApp...
        </div>
      )}
      <form onSubmit={handleSubmit}>
        {variant === "hero" ? (
          <div className="hf-row">
            <div className="hf-group">
              <input ref={nameRef} type="text" placeholder="Your Name *" required />
            </div>
            <div className="hf-group">
              <input ref={phoneRef} type="tel" placeholder="Mobile No. *" required />
            </div>
          </div>
        ) : (
          <>
            <div className="hf-group">
              <input ref={nameRef} type="text" placeholder="Your Name *" required />
            </div>
            <div className="hf-group">
              <input ref={phoneRef} type="tel" placeholder="Mobile Number *" required />
            </div>
          </>
        )}
        <div className="hf-group">
          <select ref={serviceRef} required>
            <option value="">Select Service *</option>
            {SERVICES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="hf-group">
          <input ref={areaRef} type="text" placeholder="Your Area in Bangalore *" required />
        </div>
        {variant === "hero" && (
          <div className="hf-group">
            <input ref={brandRef} type="text" placeholder="AC Brand (e.g. LG, Daikin, Samsung)" />
          </div>
        )}
        <button type="submit" className="btn-submit">
          {variant === "hero" ? "💬 Book via WhatsApp" : "💬 Book via WhatsApp"}
        </button>
        <div className="form-note">
          ⚡ Opens WhatsApp instantly!
        </div>
      </form>
    </div>
  );
}
