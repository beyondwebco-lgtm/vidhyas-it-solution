"use client";

import React from "react";
import { MessageCircle, Phone } from "lucide-react";
import { siteConfig, getDefaultWhatsAppUrl } from "@/data/siteConfig";
import styles from "./FloatingWidgets.module.css";

export default function FloatingWidgets() {
  const whatsappUrl = getDefaultWhatsAppUrl();

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.floatingWaBtn}
        aria-label="Chat on WhatsApp with Vidhyas IT Solutions"
        title="Chat on WhatsApp"
      >
        <span className={styles.ping} aria-hidden="true" />
        <MessageCircle size={28} />
      </a>

      {/* Mobile Direct Call Pill */}
      <div className={styles.mobileCallBar}>
        <a
          href={`tel:${siteConfig.phones[0]}`}
          className={styles.callFab}
          aria-label={`Call Vidhyas IT Solutions at ${siteConfig.phones[0]}`}
        >
          <Phone size={14} aria-hidden="true" />
          <span>Call Now</span>
        </a>
      </div>
    </>
  );
}
