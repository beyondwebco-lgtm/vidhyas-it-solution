import React from "react";
import Link from "next/link";
import { Building, Laptop, MessageCircle, Check, ArrowRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/data/siteConfig";
import styles from "./LearningModes.module.css";

export default function LearningModes() {
  const offlineWhatsAppUrl = buildWhatsAppUrl(
    "Hello Vidhyas IT Solutions, I would like to enquire about Classroom Offline Training at your Suchitra centre."
  );

  const onlineWhatsAppUrl = buildWhatsAppUrl(
    "Hello Vidhyas IT Solutions, I would like to enquire about Online Training options."
  );

  return (
    <section id="learning-modes" className={`section-padding ${styles.modesSection}`} aria-labelledby="modes-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Flexible Options</span>
          <h2 id="modes-heading" className="section-title">
            Learn the Way That Works for You
          </h2>
          <p className="section-desc">
            Whether you thrive in hands-on classroom lab sessions or prefer remote interactive sessions, choose the mode that fits your schedule.
          </p>
        </div>

        <div className={styles.modesGrid}>
          {/* Offline Training Card */}
          <div className={styles.modeCard}>
            <div className={styles.modeHeader}>
              <div className={styles.modeIcon} aria-hidden="true">
                <Building size={26} strokeWidth={1.8} />
              </div>
              <div>
                <div className={styles.modePill}>Classroom &amp; Lab</div>
                <h3 className={styles.modeTitle}>Offline Training</h3>
              </div>
            </div>

            <p className={styles.modeDesc}>
              Learn in a classroom environment at Vidhyas IT Solutions, Suchitra, Hyderabad. Benefit from direct trainer interactions, practical lab practice, and focused study spaces.
            </p>

            <ul className={styles.modeFeatures}>
              <li className={styles.modeFeatureItem}>
                <Check size={16} className={styles.checkIcon} aria-hidden="true" />
                <span>Classroom instruction in Suchitra, Hyderabad</span>
              </li>
              <li className={styles.modeFeatureItem}>
                <Check size={16} className={styles.checkIcon} aria-hidden="true" />
                <span>Dedicated lab facility for hands-on practice</span>
              </li>
              <li className={styles.modeFeatureItem}>
                <Check size={16} className={styles.checkIcon} aria-hidden="true" />
                <span>Immediate in-person doubt resolution</span>
              </li>
            </ul>

            <div className={styles.modeActions}>
              <a
                href={offlineWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={18} aria-hidden="true" />
                <span>Enquire Offline Training</span>
              </a>

              <Link href="#contact?mode=Offline" className="btn btn-secondary">
                <span>Book a Campus Visit</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Online Training Card */}
          <div className={styles.modeCard}>
            <div className={styles.modeHeader}>
              <div className={styles.modeIcon} aria-hidden="true">
                <Laptop size={26} strokeWidth={1.8} />
              </div>
              <div>
                <div className={styles.modePill}>Remote &amp; Interactive</div>
                <h3 className={styles.modeTitle}>Online Training</h3>
              </div>
            </div>

            <p className={styles.modeDesc}>
              Explore online learning options from wherever you are. Access scheduled interactive sessions, structured curriculum, and trainer guidance from your home or workplace.
            </p>

            <ul className={styles.modeFeatures}>
              <li className={styles.modeFeatureItem}>
                <Check size={16} className={styles.checkIcon} aria-hidden="true" />
                <span>Attend live classes from any location</span>
              </li>
              <li className={styles.modeFeatureItem}>
                <Check size={16} className={styles.checkIcon} aria-hidden="true" />
                <span>Flexible schedules suitable for working professionals</span>
              </li>
              <li className={styles.modeFeatureItem}>
                <Check size={16} className={styles.checkIcon} aria-hidden="true" />
                <span>Digital assignments and guided exercises</span>
              </li>
            </ul>

            <div className={styles.modeActions}>
              <a
                href={onlineWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={18} aria-hidden="true" />
                <span>Enquire Online Training</span>
              </a>

              <Link href="#contact?mode=Online" className="btn btn-secondary">
                <span>Enquire via Form</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
