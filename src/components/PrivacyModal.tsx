"use client";

import React, { useEffect } from "react";
import { X, Shield } from "lucide-react";
import styles from "./PrivacyModal.module.css";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Shield size={20} color="#0284c7" />
            <h3 id="privacy-modal-title" className={styles.modalTitle}>
              Privacy Policy
            </h3>
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close Privacy Policy"
          >
            <X size={20} />
          </button>
        </div>

        <div className={styles.modalBody}>
          <p>
            At <strong>Vidhyas IT Solutions</strong>, located in Suchitra, Hyderabad, Telangana, we respect the privacy of our website visitors, students, and prospective learners.
          </p>

          <h4>Information We Collect</h4>
          <p>
            When you submit an enquiry form or message us via WhatsApp, we collect information you voluntarily provide, such as your full name, mobile number, course of interest, training mode preference, and optional questions.
          </p>

          <h4>How We Use Your Information</h4>
          <p>
            We use this information strictly to provide you with requested details regarding course curriculum, class schedules, fee structures, and enrollment counseling. We do not sell, rent, or trade your personal information to third parties or marketing brokers.
          </p>

          <h4>Communication Preferences</h4>
          <p>
            You may choose to connect via telephone or WhatsApp at your convenience. If at any time you wish to stop receiving updates or follow-up communications, you may simply let us know via WhatsApp or phone call.
          </p>

          <h4>Location &amp; Contact</h4>
          <p>
            Vidhyas IT Solutions, Suchitra, Hyderabad, Telangana, India. Phone lines: 9550075296, 7337555268.
          </p>
        </div>

        <div className={styles.modalFooter}>
          <button type="button" className="btn btn-primary btn-sm" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
