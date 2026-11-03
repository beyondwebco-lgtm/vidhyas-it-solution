"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Curriculum", href: "#courses" },
  { label: "Why Start Early", href: "#why-us" },
  { label: "Ecosystem", href: "#learning-modes" },
  { label: "FAQs", href: "#faq" },
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
        <Link href="#top" className={styles.brand} aria-label="Vidhyas IIT Academy - Transform Mathematical Fear into Mastery">
          <div className={styles.brandLogoWrap}>
            <Image
              src="/images/logo-circle.png"
              alt="Vidhyas IIT Academy Official Logo"
              width={46}
              height={46}
              priority
              className={styles.brandLogoImg}
            />
          </div>
          <div className={styles.brandText}>
            <span className={styles.brandName}>
              Vidhyas <span className={styles.brandAccent}>IIT</span> Academy
            </span>
            <span className={styles.brandSub}>Transform Mathematical Fear into Mastery</span>
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
            aria-label={`Call Vidhyas IIT Academy at ${siteConfig.phones[0]}`}
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
        <div className={styles.mobileDrawerBrand}>
          <Image
            src="/images/logo-circle.png"
            alt="Vidhyas IIT Academy Official Logo"
            width={42}
            height={42}
            className={styles.brandLogoImg}
          />
          <div className={styles.brandText}>
            <span className={styles.brandName} style={{ fontSize: "1.1rem" }}>
              Vidhyas <span className={styles.brandAccent}>IIT</span> Academy
            </span>
            <span className={styles.brandSub} style={{ whiteSpace: "normal", fontSize: "0.6rem" }}>
              Transform Mathematical Fear into Mastery
            </span>
          </div>
        </div>

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
