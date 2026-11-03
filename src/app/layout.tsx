import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/data/siteConfig";
import { ALL_COURSES } from "@/data/courses";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#0A192F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: "Vidhyas IIT Academy | Premier Mathematics Coaching for Classes 5th to 10th",
    template: "%s | Vidhyas IIT Academy",
  },
  description:
    "Transform Mathematical Fear into Mastery: Build a Bulletproof IIT-JEE & Olympiad Foundation Early. Concept-first mathematics training for Classes 5 to 10 by Vidhyas IIT Academy.",
  keywords: [
    "Vidhyas IIT Academy",
    "Mathematics coaching for classes 5 to 10",
    "IIT JEE Foundation coaching Suchitra Hyderabad",
    "IOQM preparation Hyderabad",
    "NMTC mathematics coaching",
    "Olympiad math classes for Class 5 to 10",
    "Class 5 sub-junior foundation math",
    "Class 10 JEE bridge course",
    "Concept-first maths coaching",
    "Small batch math mentorship Suchitra",
  ],
  authors: [{ name: "Vidhyas IIT Academy" }],
  creator: "Vidhyas IIT Academy",
  publisher: "Vidhyas IIT Academy",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.baseUrl,
    siteName: "Vidhyas IIT Academy",
    title: "Vidhyas IIT Academy | Premier Mathematics Coaching for Classes 5th to 10th",
    description:
      "Transform Mathematical Fear into Mastery: Build a Bulletproof IIT-JEE & Olympiad Foundation Early. Concept-first coaching for Classes 5 to 10.",
    images: [
      {
        url: "/images/math-hero-classroom.jpg",
        width: 1200,
        height: 675,
        alt: "Vidhyas IIT Academy Mathematics Coaching for Classes 5th to 10th",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidhyas IIT Academy | Mathematics Coaching (Classes 5th - 10th)",
    description:
      "Transform Mathematical Fear into Mastery: Build a Bulletproof IIT-JEE & Olympiad Foundation Early.",
    images: ["/images/math-hero-classroom.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.png",
    apple: "/icon-192.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Construct factual JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": `${siteConfig.baseUrl}/#organization`,
        name: siteConfig.name,
        url: siteConfig.baseUrl,
        logo: `${siteConfig.baseUrl}/images/logo-circle.png`,
        description: siteConfig.intro,
        telephone: siteConfig.phones.map((p) => `+91-${p}`),
        address: {
          "@type": "PostalAddress",
          streetAddress: "Suchitra Junction",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          postalCode: "500067",
          addressCountry: "IN",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Class-by-Class Mathematics Curriculum (Classes 5 to 10)",
          itemListElement: ALL_COURSES.map((course, idx) => ({
            "@type": "Course",
            position: idx + 1,
            name: `${course.name} (${course.category})`,
            description: `${course.description} Olympiad Edge: ${course.olympiadEdge || ""}`,
            provider: {
              "@id": `${siteConfig.baseUrl}/#organization`,
            },
          })),
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteConfig.baseUrl}/#localbusiness`,
        name: siteConfig.name,
        url: siteConfig.baseUrl,
        image: `${siteConfig.baseUrl}/images/math-hero-classroom.jpg`,
        telephone: siteConfig.phones.map((p) => `+91-${p}`),
        address: {
          "@type": "PostalAddress",
          streetAddress: "Suchitra Junction",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          postalCode: "500067",
          addressCountry: "IN",
        },
        priceRange: "$$",
      },
    ],
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
