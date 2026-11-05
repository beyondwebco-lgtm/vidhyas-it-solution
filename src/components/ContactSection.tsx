"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";
import { siteConfig, getDefaultWhatsAppUrl, buildWhatsAppUrl } from "@/data/siteConfig";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    studentClass: "",
    subject: "",
    mode: "Not Sure",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [whatsappFallbackUrl, setWhatsappFallbackUrl] = useState<string>("");

  // Listen for hash parameter to auto-select class, subject, or mode
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.includes("?")) {
        const queryPart = hash.split("?")[1];
        const params = new URLSearchParams(queryPart);
        const classParam = params.get("class");
        const subjectParam = params.get("subject");
        const modeParam = params.get("mode");

        if (classParam && ["Class 5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10"].includes(classParam)) {
          setFormData((prev) => ({ ...prev, studentClass: classParam }));
        }
        if (subjectParam && ["Mathematics", "Physics", "Chemistry"].includes(subjectParam)) {
          setFormData((prev) => ({ ...prev, subject: subjectParam }));
        }
        if (modeParam && ["Online", "Offline", "Not Sure"].includes(modeParam)) {
          setFormData((prev) => ({ ...prev, mode: modeParam }));
        }
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name.";
    }

    const cleanPhone = formData.phone.replace(/[\s\-()]/g, "");
    const phoneRegex = /^(\+91|91|0)?[6-9]\d{9}$/;
    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      newErrors.phone = "Please enter a valid 10-digit mobile number.";
    }

    if (!formData.studentClass) {
      newErrors.studentClass = "Please select an academic class (Class 5 to 10).";
    }

    if (!formData.subject) {
      newErrors.subject = "Please select a subject of interest.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitSuccess(true);
        setWhatsappFallbackUrl(data.whatsappUrl || "");
      } else {
        setErrors({
          form: data.message || "Unable to submit enquiry. Please use WhatsApp.",
        });
      }
    } catch {
      // Fallback gracefully to direct WhatsApp URL if fetch fails
      const fallbackUrl = buildWhatsAppUrl(
        `Hello Vidhyas IIT Academy,
Name: ${formData.fullName}
Phone: ${formData.phone}
Class: ${formData.studentClass}
Subject: ${formData.subject}
Mode: ${formData.mode}
${formData.message ? `Notes: ${formData.message}` : "Please share batch details, diagnostic assessment schedule, and curriculum information."}`
      );
      setWhatsappFallbackUrl(fallbackUrl);
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      phone: "",
      studentClass: "",
      subject: "",
      mode: "Not Sure",
      message: "",
      honeypot: "",
    });
    setErrors({});
    setSubmitSuccess(false);
  };

  return (
    <section id="contact" className={`section-padding ${styles.contactSection}`} aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Admissions &amp; Diagnostic Assessment</span>
          <h2 id="contact-heading" className="section-title">
            Unlock Your Child&apos;s True Academic Potential
          </h2>
          <p className="section-desc">
            Build strong conceptual foundations early. Give your child the competitive edge of conceptual understanding, analytical thinking, and confidence in Mathematics, Physics, and Chemistry today.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {/* Left: Business Info Card */}
          <div className={styles.infoColumn}>
            <div className={styles.infoCard}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                <Image
                  src="/images/logo-circle.png"
                  alt="Vidhyas IIT Academy Official Logo"
                  width={44}
                  height={44}
                  style={{ objectFit: "contain", flexShrink: 0 }}
                />
                <div>
                  <span className={styles.infoEyebrow}>Classes 5 to 10 Foundation Coaching</span>
                  <h3 className={styles.instituteName} style={{ margin: 0 }}>{siteConfig.name}</h3>
                </div>
              </div>
              <p className={styles.infoIntro}>
                Transform Mathematical Fear into Mastery: Build a Bulletproof Foundation Early in Mathematics, Physics &amp; Chemistry for Classes 5 to 10.
              </p>

              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <div className={styles.itemIcon} aria-hidden="true">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className={styles.itemLabel}>Location</div>
                    <div className={styles.itemValue}>{siteConfig.location.fullText}</div>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.itemIcon} aria-hidden="true">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className={styles.itemLabel}>Direct Call Lines</div>
                    <div className={styles.phoneLinks}>
                      {siteConfig.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone}`}
                          className={styles.phoneBtn}
                          aria-label={`Call ${phone}`}
                        >
                          <Phone size={13} aria-hidden="true" />
                          <span>{phone}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.itemIcon} aria-hidden="true">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <div className={styles.itemLabel}>WhatsApp Support</div>
                    <div className={styles.itemValue}>+91 {siteConfig.phones[0]}</div>
                  </div>
                </div>
              </div>

              <div className={styles.infoActions}>
                <a
                  href={getDefaultWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: "100%" }}
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Enquiry Form */}
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <h3 className={styles.formTitle}>Send an Enquiry</h3>
              <p className={styles.formSubtitle}>
                Fill out the details below to schedule a diagnostic test or enquire about Class 5 to 10 batches.
              </p>
            </div>

            {submitSuccess ? (
              <div className={styles.successBanner} role="status">
                <CheckCircle2 size={44} color="#059669" style={{ margin: "0 auto" }} />
                <h4 className={styles.successTitle}>Enquiry Received!</h4>
                <p className={styles.successDesc}>
                  Thank you for contacting Vidhyas IIT Academy. We will review your enquiry and get back to you shortly.
                </p>

                {whatsappFallbackUrl && (
                  <div style={{ marginTop: "8px" }}>
                    <p style={{ fontSize: "0.85rem", color: "#065f46", marginBottom: "12px" }}>
                      Want a faster response? Send your enquiry details directly via WhatsApp:
                    </p>
                    <a
                      href={whatsappFallbackUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                    >
                      <MessageCircle size={18} aria-hidden="true" />
                      <span>Open in WhatsApp</span>
                    </a>
                  </div>
                )}

                <button type="button" onClick={resetForm} className={styles.resetBtn}>
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                {/* Anti-spam Honeypot field */}
                <div className={styles.honeypot} aria-hidden="true">
                  <label htmlFor="company_website_url_trap">Leave this blank</label>
                  <input
                    type="text"
                    id="company_website_url_trap"
                    name="company_website_url_trap"
                    value={formData.honeypot}
                    onChange={(e) =>
                      setFormData({ ...formData, honeypot: e.target.value })
                    }
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {errors.form && (
                  <div className={styles.errorMessage} role="alert">
                    <AlertCircle size={14} style={{ display: "inline", marginRight: "4px" }} />
                    {errors.form}
                  </div>
                )}

                {/* Full Name */}
                <div className={styles.fieldGroup}>
                  <label htmlFor="fullName" className={styles.fieldLabel}>
                    Full Name <span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className={`${styles.input} ${errors.fullName ? styles.inputError : ""}`}
                    aria-required="true"
                    aria-invalid={!!errors.fullName}
                  />
                  {errors.fullName && (
                    <span className={styles.errorMessage}>{errors.fullName}</span>
                  )}
                </div>

                {/* Phone Number */}
                <div className={styles.fieldGroup}>
                  <label htmlFor="phone" className={styles.fieldLabel}>
                    Phone Number <span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className={`${styles.input} ${errors.phone ? styles.inputError : ""}`}
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && (
                    <span className={styles.errorMessage}>{errors.phone}</span>
                  )}
                </div>

                {/* Academic Class Selection */}
                <div className={styles.fieldGroup}>
                  <label htmlFor="studentClass" className={styles.fieldLabel}>
                    Select Class <span className={styles.requiredStar}>*</span>
                  </label>
                  <select
                    id="studentClass"
                    name="studentClass"
                    value={formData.studentClass}
                    onChange={(e) =>
                      setFormData({ ...formData, studentClass: e.target.value })
                    }
                    className={`${styles.select} ${errors.studentClass ? styles.inputError : ""}`}
                    aria-required="true"
                    aria-invalid={!!errors.studentClass}
                  >
                    <option value="">-- Select Class (Classes 5 to 10) --</option>
                    <option value="Class 5">Class 5</option>
                    <option value="Class 6">Class 6</option>
                    <option value="Class 7">Class 7</option>
                    <option value="Class 8">Class 8</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10</option>
                  </select>
                  {errors.studentClass && (
                    <span className={styles.errorMessage}>{errors.studentClass}</span>
                  )}
                </div>

                {/* Subject Selection */}
                <div className={styles.fieldGroup}>
                  <label htmlFor="subject" className={styles.fieldLabel}>
                    Select Subject <span className={styles.requiredStar}>*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className={`${styles.select} ${errors.subject ? styles.inputError : ""}`}
                    aria-required="true"
                    aria-invalid={!!errors.subject}
                  >
                    <option value="">-- Select Subject --</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="All Three (Mathematics, Physics & Chemistry)">
                      All Three (Mathematics, Physics &amp; Chemistry)
                    </option>
                  </select>
                  {errors.subject && (
                    <span className={styles.errorMessage}>{errors.subject}</span>
                  )}
                </div>

                {/* Preferred Mode */}
                <div className={styles.fieldGroup}>
                  <span className={styles.fieldLabel}>Preferred Training Mode</span>
                  <div className={styles.radioGroup} role="radiogroup" aria-label="Preferred Training Mode">
                    {["Online", "Offline", "Not Sure"].map((mode) => (
                      <label key={mode} className={styles.radioOption}>
                        <input
                          type="radio"
                          name="preferredMode"
                          value={mode}
                          checked={formData.mode === mode}
                          onChange={() =>
                            setFormData({ ...formData, mode })
                          }
                          className={styles.radioInput}
                        />
                        <span>{mode}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className={styles.fieldGroup}>
                  <label htmlFor="message" className={styles.fieldLabel}>
                    Message or Questions (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Tell us about your child's current school, learning goals, or questions..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={styles.textarea}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn btn-primary ${styles.submitBtn}`}
                >
                  {isSubmitting ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <span>Submit Coaching Enquiry</span>
                      <Send size={16} aria-hidden="true" />
                    </>
                  )}
                </button>

                <p className={styles.privacyNote}>
                  <ShieldCheck size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                  Your information is kept confidential and used solely to assist you with course information and batch scheduling.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
