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
    default: "Vidhyas IIT Academy | Mathematics, Physics & Chemistry Coaching for Classes 5 to 10",
    template: "%s | Vidhyas IIT Academy",
  },
  description:
    "Transform Academic Learning: Build a Strong Foundation Early. Concept-first coaching in Mathematics, Physics, and Chemistry for Classes 5 to 10 by Vidhyas IIT Academy.",
  keywords: [
    "Vidhyas IIT Academy",
    "Mathematics coaching for classes 5 to 10",
    "Physics coaching for classes 5 to 10",
    "Chemistry coaching for classes 5 to 10",
    "Classes 5 to 10 foundation coaching Suchitra Hyderabad",
    "IIT Foundation coaching Suchitra Hyderabad",
    "IOQM preparation Hyderabad",
    "NMTC mathematics coaching",
    "Science and Math Olympiad classes for Class 5 to 10",
    "Class 5 foundation coaching",
    "Class 10 foundation coaching",
    "Concept-first coaching",
    "Small batch mentorship Suchitra",
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
    title: "Vidhyas IIT Academy | Mathematics, Physics & Chemistry Coaching for Classes 5 to 10",
    description:
      "Transform Academic Learning: Build a Strong Foundation Early. Concept-first coaching in Mathematics, Physics, and Chemistry for Classes 5 to 10.",
    images: [
      {
        url: "/images/math-hero-classroom.jpg",
        width: 1200,
        height: 675,
        alt: "Vidhyas IIT Academy Coaching for Classes 5 to 10",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidhyas IIT Academy | Coaching for Classes 5 to 10",
    description:
      "Transform Academic Learning: Build a Strong Foundation Early in Mathematics, Physics, and Chemistry.",
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
          name: "Class-by-Class Curriculum for Classes 5 to 10 (Mathematics, Physics & Chemistry)",
          itemListElement: ALL_COURSES.map((course, idx) => ({
            "@type": "Course",
            position: idx + 1,
            name: `${course.name} (${course.category})`,
            description: `${course.description} ${course.olympiadEdge ? `Academic Edge: ${course.olympiadEdge}` : ""}`,
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
