import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cool Home Services - #1 AC Repair & Service in Bangalore | Call Now",
  description:
    "Cool Home Services provides expert AC repair, installation, and maintenance in Bangalore. Certified technicians, same-day service, all brands. Call +91-9876543210.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <ClientScripts />
      </body>
    </html>
  );
}

