"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
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
                <div className={styles.brandLogoWrap}>
                  <Image
                    src="/images/logo-circle.png"
                    alt="Vidhyas IIT Academy Official Logo"
                    width={46}
                    height={46}
                    className={styles.brandLogoImg}
                  />
                </div>
                <div className={styles.brandText}>
                  <span className={styles.brandName}>
                    Vidhyas <span className={styles.brandAccent}>IIT</span> Academy
                  </span>
                  <span className={styles.brandTagline}>
                    Transform Mathematical Fear into Mastery
                  </span>
                </div>
              </div>
              <p className={styles.brandDesc}>
                {siteConfig.intro} Providing concept-first coaching in Mathematics, Physics, and Chemistry for Classes 5 to 10 in Suchitra, Hyderabad.
              </p>
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
                    About Methodology
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className={styles.footerLink}>
                    Curriculum (Classes 5-10)
                  </Link>
                </li>
                <li>
                  <Link href="#why-us" className={styles.footerLink}>
                    Why Start Early
                  </Link>
                </li>
                <li>
                  <Link href="#learning-modes" className={styles.footerLink}>
                    Classroom Ecosystem
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className={styles.footerLink}>
                    FAQs for Parents
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className={styles.footerLink}>
                    Contact &amp; Admissions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Grade Pathways */}
            <div>
              <h3 className={styles.footerHeading}>Grade Pathways</h3>
              <ul className={styles.linkList}>
                {COURSE_CATEGORIES.map((cat) => (
                  <li key={cat.id}>
                    <Link href="#courses" className={styles.footerLink}>
                      {cat.title}: {cat.badge}
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
