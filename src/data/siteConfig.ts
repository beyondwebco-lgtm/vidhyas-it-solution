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
  name: "Jeet Kumar Raja",
  tagline: "Transform Mathematical Fear into Mastery",
  supportingHeadline: "Build a Bulletproof IIT-JEE & Olympiad Foundation Early for Classes 5th to 10th.",
  intro: "We don't teach shortcuts or memorization. We train young minds in Class 5 to 10 to think critically, derive from first principles, and conquer complex mathematical challenges with speed and confidence.",
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
    "100% Concept-First Approach: Rigorous proofs & deep intuition",
    "3-Tier Graded Problem Sets: School mastery to Olympiads",
    "Class 5 to 10 Continuous Pathway: Transition into JEE Advanced",
    "Small Batch Mentorship: Dedicated doubt-resolution clinics",
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
  return buildWhatsAppUrl("Hello Jeet Sir, I would like to know more about your Mathematics coaching for Classes 5th to 10th.");
}

export function getCourseWhatsAppUrl(courseName: string, mode?: string): string {
  if (mode && mode !== "Not Sure") {
    return buildWhatsAppUrl(
      `Hello Jeet Sir, I would like to enquire about the ${courseName} program (${mode} learning mode). Please share batch details and curriculum.`
    );
  }
  return buildWhatsAppUrl(
    `Hello Jeet Sir, I would like to enquire about the ${courseName} program. Please share syllabus, batch details, and fee structure.`
  );
}
