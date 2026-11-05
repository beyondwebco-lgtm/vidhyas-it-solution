import { NextResponse } from "next/server";
import { buildWhatsAppUrl } from "@/data/siteConfig";

interface EnquiryPayload {
  fullName: string;
  phone: string;
  studentClass?: string;
  subject?: string;
  course?: string;
  mode: string;
  message?: string;
  honeypot?: string;
}

export async function POST(request: Request) {
  try {
    const body: EnquiryPayload = await request.json();

    // 1. Anti-spam honeypot check: If the hidden honeypot field is filled, silently ignore
    if (body.honeypot && body.honeypot.trim().length > 0) {
      return NextResponse.json(
        { success: true, message: "Enquiry received successfully." },
        { status: 200 }
      );
    }

    const errors: Record<string, string> = {};

    // 2. Validate Full Name
    if (!body.fullName || body.fullName.trim().length < 2) {
      errors.fullName = "Please enter your full name (minimum 2 characters).";
    }

    // 3. Validate Phone Number (Indian 10-digit number format or international with +91)
    const cleanPhone = (body.phone || "").replace(/[\s\-()]/g, "");
    const phoneRegex = /^(\+91|91|0)?[6-9]\d{9}$/;
    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      errors.phone = "Please enter a valid 10-digit mobile number.";
    }

    // 4. Validate Class & Subject (or fallback course)
    const studentClass = (body.studentClass || body.course || "").trim();
    if (!studentClass || studentClass.length < 2) {
      errors.studentClass = "Please select an academic class (Class 5 to 10).";
    }

    const subject = (body.subject || "Mathematics, Physics & Chemistry").trim();

    // 5. Validate Preferred Mode
    const validModes = ["Online", "Offline", "Not Sure"];
    const mode = validModes.includes(body.mode) ? body.mode : "Not Sure";

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors, message: "Please check the form for errors." },
        { status: 400 }
      );
    }

    const sanitizedData = {
      fullName: body.fullName.trim().slice(0, 100),
      phone: cleanPhone.slice(-10),
      studentClass: studentClass.slice(0, 100),
      subject: subject.slice(0, 100),
      mode,
      message: (body.message || "").trim().slice(0, 500),
      receivedAt: new Date().toISOString(),
    };

    // Construct tailored WhatsApp link for direct confirmation
    const waText = `Hello Vidhyas IIT Academy,
Name: ${sanitizedData.fullName}
Phone: ${sanitizedData.phone}
Class: ${sanitizedData.studentClass}
Subject: ${sanitizedData.subject}
Preferred Mode: ${sanitizedData.mode}
${sanitizedData.message ? `Notes: ${sanitizedData.message}` : "Please provide fee details, diagnostic test scheduling, and next batch schedule."}`;

    const whatsappRedirectUrl = buildWhatsAppUrl(waText);

    console.log("[Enquiry Received]:", {
      name: sanitizedData.fullName,
      phone: `***${sanitizedData.phone.slice(-4)}`,
      class: sanitizedData.studentClass,
      subject: sanitizedData.subject,
      mode: sanitizedData.mode,
      timestamp: sanitizedData.receivedAt,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! Our team will contact you shortly.",
        whatsappUrl: whatsappRedirectUrl,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Enquiry submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while submitting your enquiry. Please try WhatsApp directly.",
      },
      { status: 500 }
    );
  }
}
