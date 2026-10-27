"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GraduationCap, MapPin, Phone, MessageCircle } from "lucide-react";
import { siteConfig, getDefaultWhatsAppUrl } from "@/data/siteConfig";
import { COURSE_CATEGORIES } from "@/data/courses";
import PrivacyModal from "./PrivacyModal";
import styles from "./Footer.module.css";

interface FooterProps {
  currentYear?: number;
}

export default function Footer({ currentYear = 2026 }: FooterProps) {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      <footer className={styles.footer} role="contentinfo">
        <div className="container">
          <div className={styles.footerGrid}>
            {/* Column 1: Brand Info */}
            <div className={styles.brandCol}>
              <div className={styles.brand}>
                <div className={styles.brandIcon} aria-hidden="true">
                  <GraduationCap size={20} />
                </div>
                <span className={styles.brandName}>
                  Vidhyas <span className={styles.brandAccent}>IT</span> Solutions
                </span>
              </div>
              <p className={styles.brandDesc}>
                {siteConfig.supportingHeadline} Providing practical training, hands-on lab exercises, and career guidance in Suchitra, Hyderabad.
              </p>
              <div style={{ marginTop: "auto" }}>
                <a
                  href={getDefaultWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm"
                >
                  <MessageCircle size={15} aria-hidden="true" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className={styles.footerHeading}>Navigation</h3>
              <ul className={styles.linkList}>
                <li>
                  <Link href="#top" className={styles.footerLink}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className={styles.footerLink}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className={styles.footerLink}>
                    Our Courses
                  </Link>
                </li>
                <li>
                  <Link href="#why-us" className={styles.footerLink}>
                    Why Choose Us
                  </Link>
                </li>
                <li>
                  <Link href="#learning-modes" className={styles.footerLink}>
                    Learning Modes
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className={styles.footerLink}>
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className={styles.footerLink}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Course Categories */}
            <div>
              <h3 className={styles.footerHeading}>Course Categories</h3>
              <ul className={styles.linkList}>
                {COURSE_CATEGORIES.map((cat) => (
                  <li key={cat.id}>
                    <Link href="#courses" className={styles.footerLink}>
                      {cat.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact & Location */}
            <div>
              <h3 className={styles.footerHeading}>Institute Location</h3>
              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <MapPin size={18} className={styles.contactIcon} aria-hidden="true" />
                  <span>{siteConfig.location.fullText}</span>
                </li>
                <li className={styles.contactItem}>
                  <Phone size={18} className={styles.contactIcon} aria-hidden="true" />
                  <div>
                    {siteConfig.phones.map((phone) => (
                      <div key={phone}>
                        <a href={`tel:${phone}`} style={{ color: "inherit" }}>
                          +91 {phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </li>
                <li className={styles.contactItem}>
                  <MessageCircle size={18} className={styles.contactIcon} aria-hidden="true" />
                  <span>WhatsApp: +91 {siteConfig.phones[0]}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={styles.footerBottom}>
            <div>
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </div>
            <div>
              <button
                type="button"
                className={styles.policyBtn}
                onClick={() => setPrivacyOpen(true)}
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </footer>

      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  );
}
