export interface BusinessConfig {
  name: string;
  tagline: string;
  supportingHeadline: string;
  intro: string;
  location: {
    city: string;
    area: string;
    state: string;
    country: string;
    fullText: string;
    pincode: string;
  };
  phones: string[];
  primaryWhatsApp: string;
  secondaryPhone: string;
  baseUrl: string;
  trustPoints: string[];
}

export const siteConfig: BusinessConfig = {
  name: "Vidhyas IT Solutions",
  tagline: "Build Your Skills. Shape Your Future.",
  supportingHeadline: "Job-Oriented IT & Non-IT Courses with Practical Training and Career Guidance.",
  intro: "At Vidhyas IT Solutions, we provide practical, skill-focused training with expert guidance to help students, job seekers, and working professionals develop valuable skills for their careers. Choose from a wide range of IT and non-IT courses, with offline and online learning options.",
  location: {
    area: "Suchitra",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    fullText: "Suchitra, Hyderabad, Telangana, India",
    pincode: "500067",
  },
  phones: ["9550075296", "7337555268"],
  primaryWhatsApp: "919550075296",
  secondaryPhone: "7337555268",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://vidhyasitsolutions.com",
  trustPoints: [
    "Practical Learning",
    "Online & Offline Classes",
    "Career Guidance",
  ],
};

export const CURRENT_YEAR = 2026;

/**
 * Builds a properly URL-encoded WhatsApp link adhering to the exact required format:
 * https://wa.me/919550075296?text=...
 */
export function buildWhatsAppUrl(message: string): string {
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${siteConfig.primaryWhatsApp}?text=${encodedText}`;
}

export function getDefaultWhatsAppUrl(): string {
  return buildWhatsAppUrl("Hello Vidhyas IT Solutions, I would like to know more about your courses.");
}

export function getCourseWhatsAppUrl(courseName: string, mode?: string): string {
  if (mode && mode !== "Not Sure") {
    return buildWhatsAppUrl(
      `Hello Vidhyas IT Solutions, I would like to enquire about the ${courseName} course (${mode} training mode). Please share details.`
    );
  }
  return buildWhatsAppUrl(
    `Hello Vidhyas IT Solutions, I would like to enquire about the ${courseName} course. Please share curriculum, batch details, and fee structure.`
  );
}
