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
    default: "Vidhyas IT Solutions | IT & Non-IT Training Institute in Suchitra, Hyderabad",
    template: "%s | Vidhyas IT Solutions",
  },
  description:
    "Vidhyas IT Solutions in Suchitra, Hyderabad offers practical, job-oriented IT and non-IT training with expert guidance. Learn Python, Java, Full Stack, Data Analytics, Spoken English, and more with online & offline classes.",
  keywords: [
    "IT training institute in Suchitra",
    "Computer training institute in Suchitra Hyderabad",
    "IT courses in Suchitra",
    "Python training in Suchitra",
    "Java training in Hyderabad",
    "Full stack development training in Hyderabad",
    "Advanced Excel classes in Suchitra",
    "Power BI training in Hyderabad",
    "Spoken English classes in Suchitra",
    "IELTS coaching in Suchitra",
    "Online and offline computer courses in Hyderabad",
    "Vidhyas IT Solutions",
  ],
  authors: [{ name: "Vidhyas IT Solutions" }],
  creator: "Vidhyas IT Solutions",
  publisher: "Vidhyas IT Solutions",
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
    siteName: "Vidhyas IT Solutions",
    title: "Vidhyas IT Solutions | Practical IT & Non-IT Training Institute in Suchitra, Hyderabad",
    description:
      "Job-Oriented IT & Non-IT Courses with Practical Training and Career Guidance in Suchitra, Hyderabad. Offline & Online learning options.",
    images: [
      {
        url: "/images/hero-training.jpg",
        width: 1200,
        height: 675,
        alt: "Vidhyas IT Solutions Computer Lab Training in Suchitra Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidhyas IT Solutions | Suchitra, Hyderabad",
    description:
      "Job-oriented IT and Non-IT skill development training with practical lab sessions in Suchitra, Hyderabad.",
    images: ["/images/hero-training.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/icon.svg",
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
        logo: `${siteConfig.baseUrl}/icon.svg`,
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
          name: "IT and Non-IT Skill Training Courses",
          itemListElement: ALL_COURSES.map((course, idx) => ({
            "@type": "Course",
            position: idx + 1,
            name: course.name,
            description: course.description,
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
        image: `${siteConfig.baseUrl}/images/hero-training.jpg`,
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
