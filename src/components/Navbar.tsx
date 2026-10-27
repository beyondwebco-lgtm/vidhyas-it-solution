"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ArrowUpRight, GraduationCap } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Learning Modes", href: "#learning-modes" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Brand Treatment */}
        <Link href="#top" className={styles.brand} aria-label="Vidhyas IT Solutions - Home">
          <div className={styles.brandIcon} aria-hidden="true">
            <GraduationCap size={22} />
          </div>
          <div className={styles.brandText}>
            <span className={styles.brandName}>
              Vidhyas <span className={styles.brandAccent}>IT</span>
            </span>
            <span className={styles.brandSub}>Solutions • Suchitra</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation">
          <ul className={styles.navMenu}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions */}
        <div className={styles.navActions}>
          <a
            href={`tel:${siteConfig.phones[0]}`}
            className={styles.phoneLink}
            aria-label={`Call Vidhyas IT Solutions at ${siteConfig.phones[0]}`}
          >
            <Phone size={15} aria-hidden="true" />
            <span>{siteConfig.phones[0]}</span>
          </a>

          <Link href="#contact" className="btn btn-primary btn-sm">
            <span>Enquire Now</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>

          {/* Hamburger Button for Mobile */}
          <button
            type="button"
            className={styles.hamburger}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`${styles.mobileOverlay} ${mobileMenuOpen ? styles.open : ""}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ""}`}>
        <ul className={styles.mobileNavList}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={styles.mobileNavLink}
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.mobileContactBox}>
          <a
            href={`tel:${siteConfig.phones[0]}`}
            className={styles.mobilePhoneBtn}
          >
            <Phone size={16} />
            <span>Call: {siteConfig.phones[0]}</span>
          </a>
          <a
            href={`tel:${siteConfig.phones[1]}`}
            className={styles.mobilePhoneBtn}
          >
            <Phone size={16} />
            <span>Call: {siteConfig.phones[1]}</span>
          </a>
          <Link
            href="#contact"
            className="btn btn-primary"
            onClick={handleLinkClick}
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </header>
  );
}
