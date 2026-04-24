import { PHONE, EMAIL, SITE_URL, COMPANY } from "@/lib/data";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SchemaMarkupProps {
  breadcrumbs?: BreadcrumbItem[];
  pageUrl?: string;
  pageTitle?: string;
  pageDescription?: string;
}

export default function SchemaMarkup({
  breadcrumbs,
  pageUrl,
  pageTitle,
  pageDescription,
}: SchemaMarkupProps) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: COMPANY,
    url: SITE_URL,
    telephone: PHONE,
    email: EMAIL,
    image: `${SITE_URL}/siteicon.svg`,
    logo: `${SITE_URL}/siteicon.svg`,
    description:
      "Bangalore's most trusted AC repair and service company. Certified technicians, genuine parts, same-day service. All brands covered.",
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Credit Card, Debit Card",
    openingHours: "Mo-Su 08:00-20:00",
    areaServed: {
      "@type": "City",
      name: "Bangalore",
      sameAs: "https://en.wikipedia.org/wiki/Bangalore",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "4th T Block East, 2nd Phase, Jayanagar",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560041",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9716,
      longitude: 77.5946,
    },
    sameAs: [
      "https://www.facebook.com/coolhomeservices",
      "https://www.instagram.com/coolhomeservices",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AC Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AC Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AC Servicing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AC Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AC Gas Filling" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AC Deep Cleaning" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "AMC Plans" } },
      ],
    },
  };

  const breadcrumbSchema =
    breadcrumbs && breadcrumbs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        }
      : null;

  const webPageSchema =
    pageUrl && pageTitle
      ? {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": pageUrl,
          url: pageUrl,
          name: pageTitle,
          description: pageDescription || "",
          isPartOf: { "@id": `${SITE_URL}/#website` },
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {webPageSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
      )}
    </>
  );
}
