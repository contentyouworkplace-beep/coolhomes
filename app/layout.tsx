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
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/siteicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
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

