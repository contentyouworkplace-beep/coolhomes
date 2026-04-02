import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";
import SchemaMarkup from "@/components/SchemaMarkup";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cool Home Services - #1 AC Repair & Service in Bangalore | Call Now",
  description:
    "Cool Home Services provides expert AC repair, installation, and maintenance in Bangalore. Certified technicians, same-day service, all brands. Call +91-9876543210.",
  metadataBase: new URL("https://www.coolhomesservices.com"),
  openGraph: {
    siteName: "Cool Home Services",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SchemaMarkup />
        <Header />
        {children}
        <Footer />
        <ClientScripts />
      </body>
    </html>
  );
}

