"use client";
import { useState } from "react";
import { SERVICES } from "@/lib/data";

interface HeroFormProps {
  variant?: "hero" | "inner";
}

export default function HeroForm({ variant = "inner" }: HeroFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(
      "Thank you for booking! Our team will call you within 30 minutes.\nFor immediate help call: +91-9876543210"
    );
    setSubmitted(false);
    (e.target as HTMLFormElement).reset();
  }

  const className = variant === "hero" ? "hero-form" : "inner-hero-form";

  return (
    <div className={className}>
      <h3>{variant === "hero" ? "🚀 Book AC Service Now" : "📞 Book AC Service"}</h3>
      <div className="form-sub">
        {variant === "hero"
          ? "Free inspection · Same-day available · All brands"
          : "Free callback in 30 mins · All brands"}
      </div>
      <form onSubmit={handleSubmit}>
        {variant === "hero" ? (
          <div className="hf-row">
            <div className="hf-group">
              <input type="text" placeholder="Your Name *" required />
            </div>
            <div className="hf-group">
              <input type="tel" placeholder="Mobile No. *" required />
            </div>
          </div>
        ) : (
          <>
            <div className="hf-group">
              <input type="text" placeholder="Your Name *" required />
            </div>
            <div className="hf-group">
              <input type="tel" placeholder="Mobile Number *" required />
            </div>
          </>
        )}
        <div className="hf-group">
          <select required>
            <option value="">Select Service *</option>
            {SERVICES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="hf-group">
          <input type="text" placeholder="Your Area in Bangalore *" required />
        </div>
        {variant === "hero" && (
          <div className="hf-group">
            <input type="text" placeholder="AC Brand (e.g. LG, Daikin, Samsung)" />
          </div>
        )}
        <button type="submit" className="btn-submit">
          {variant === "hero" ? "📞 Get Free Callback Now" : "Get Free Callback"}
        </button>
        <div className="form-note">
          {variant === "hero" ? "⚡ We call back within 30 minutes!" : "⚡ Response within 30 minutes!"}
        </div>
      </form>
    </div>
  );
}
