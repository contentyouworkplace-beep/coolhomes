import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";
import SchemaMarkup from "@/components/SchemaMarkup";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cool Homes Services - #1 AC Repair & Service in Bangalore | Call Now",
  description:
    "Cool Homes Services provides expert AC repair, installation, and maintenance in Bangalore. Certified technicians, same-day service, all brands. Call +91-9611133359.",
  metadataBase: new URL("https://www.coolhomesservices.com"),
  icons: {
    icon: "/siteicon.png",
    shortcut: "/siteicon.png",
    apple: "/siteicon.png",
  },
  openGraph: {
    siteName: "Cool Homes Services",
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
        <WhatsAppButton />
        <ClientScripts />
      </body>
    </html>
  );
}

