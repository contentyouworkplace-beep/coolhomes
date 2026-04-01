"use client";
import { useEffect } from "react";

export default function ClientScripts() {
  useEffect(() => {
    // Hamburger menu toggle
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("header nav");
    hamburger?.addEventListener("click", () => {
      nav?.classList.toggle("open");
      hamburger.classList.toggle("active");
    });

    // FAQ accordion
    document.querySelectorAll(".faq-q").forEach((q) => {
      q.addEventListener("click", () => {
        const item = q.parentElement;
        const isOpen = item?.classList.contains("open");
        document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
        if (!isOpen) item?.classList.add("open");
      });
    });

    // Scroll to top button
    const scrollBtn = document.createElement("button");
    scrollBtn.id = "scroll-top";
    scrollBtn.innerHTML = "▲";
    scrollBtn.style.cssText = "position:fixed;bottom:20px;right:20px;background:#0070f3;color:#fff;border:none;border-radius:50%;width:44px;height:44px;font-size:18px;cursor:pointer;display:none;z-index:999;";
    document.body.appendChild(scrollBtn);

    window.addEventListener("scroll", () => {
      scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    return () => {
      scrollBtn.remove();
    };
  }, []);

  return null;
}
