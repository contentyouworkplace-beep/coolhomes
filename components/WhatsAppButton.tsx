"use client";
import { WHATSAPP } from "@/lib/data";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hi, I need a service booking")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
        transition: "transform 0.3s",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <svg viewBox="0 0 32 32" width="32" height="32" fill="#fff">
        <path d="M16.004 0C7.176 0 0 7.176 0 16.004c0 2.82.736 5.58 2.14 8.012L0 32l8.212-2.096A15.95 15.95 0 0 0 16.004 32C24.824 32 32 24.824 32 16.004 32 7.176 24.824 0 16.004 0zm0 29.34a13.28 13.28 0 0 1-7.2-2.108l-.516-.308-4.872 1.244 1.3-4.744-.34-.54A13.28 13.28 0 0 1 2.66 16.004c0-7.36 5.984-13.344 13.344-13.344 7.36 0 13.336 5.984 13.336 13.344 0 7.36-5.976 13.336-13.336 13.336zm7.32-9.988c-.4-.2-2.372-1.172-2.74-1.304-.368-.136-.636-.2-.904.2-.268.4-1.04 1.304-1.276 1.572-.236.268-.468.3-.868.1-.4-.2-1.688-.624-3.216-1.988-1.188-1.06-1.992-2.372-2.224-2.772-.236-.4-.024-.616.176-.816.18-.18.4-.468.6-.7.2-.236.268-.4.4-.668.136-.268.068-.5-.032-.7-.1-.2-.904-2.176-1.236-2.98-.328-.784-.66-.676-.904-.688-.236-.012-.504-.012-.772-.012s-.7.1-1.068.5c-.368.4-1.404 1.372-1.404 3.348 0 1.976 1.436 3.884 1.636 4.152.2.268 2.824 4.312 6.844 6.048.956.412 1.7.66 2.28.844.96.304 1.832.26 2.524.16.768-.116 2.372-.972 2.708-1.908.336-.94.336-1.74.236-1.908-.1-.168-.368-.268-.768-.468z" />
      </svg>
    </a>
  );
}
