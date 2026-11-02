import React from "react";
import Link from "next/link";
import { Building, Laptop, MessageCircle, Check, ArrowRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/data/siteConfig";
import styles from "./LearningModes.module.css";

export default function LearningModes() {
  const materialsWhatsAppUrl = buildWhatsAppUrl(
    "Hello Vidhyas IIT Solution, I would like to enquire about the 3-Tier Graded Practice Material and Curriculum for my child."
  );

  const diagnosticsWhatsAppUrl = buildWhatsAppUrl(
    "Hello Vidhyas IIT Solution, I would like to know more about the Weekly Diagnostic Quizzes and Daily Doubt-Clearing Clinics."
  );

  return (
    <section id="learning-modes" className={`section-padding ${styles.modesSection}`} aria-labelledby="modes-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Classroom Ecosystem</span>
          <h2 id="modes-heading" className="section-title">
            Classroom Ecosystem &amp; Deliverables
          </h2>
          <p className="section-desc">
            A comprehensive, high-accountability learning environment structured to eliminate gaps, build speed, and deliver measurable mathematical growth.
          </p>
        </div>

        <div className={styles.modesGrid}>
          {/* Card 1: Level-Graded Practice Material */}
          <div className={styles.modeCard}>
            <div className={styles.modeHeader}>
              <div className={styles.modeIcon} aria-hidden="true">
                <Building size={26} strokeWidth={1.8} />
              </div>
              <div>
                <div className={styles.modePill}>3-Tier Practice System</div>
                <h3 className={styles.modeTitle}>Level-Graded Practice Material</h3>
              </div>
            </div>

            <p className={styles.modeDesc}>
              Carefully scaffolded problem sets that guide students systematically from fundamental textbook fluency to non-routine national competition mastery.
            </p>

            <ul className={styles.modeFeatures}>
              <li className={styles.modeFeatureItem}>
                <Check size={16} className={styles.checkIcon} aria-hidden="true" />
                <span>
                  <strong>Level 1:</strong> Board &amp; Concept Fortification (NCERT / School Exam Mastery)
                </span>
              </li>
              <li className={styles.modeFeatureItem}>
                <Check size={16} className={styles.checkIcon} aria-hidden="true" />
                <span>
                  <strong>Level 2:</strong> IIT Foundation &amp; Analytical Application (Challenging multi-step problems)
                </span>
              </li>
              <li className={styles.modeFeatureItem}>
                <Check size={16} className={styles.checkIcon} aria-hidden="true" />
                <span>
                  <strong>Level 3:</strong> Olympiad &amp; Challenger Tier (Non-routine, Olympiad past papers)
                </span>
              </li>
            </ul>

            <div className={styles.modeActions}>
              <a
                href={materialsWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={18} aria-hidden="true" />
                <span>Enquire on WhatsApp</span>
              </a>

              <Link href="#contact" className="btn btn-secondary">
                <span>View Syllabus Details</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Card 2: Diagnostics & Doubt-Clearing Clinics */}
          <div className={styles.modeCard}>
            <div className={styles.modeHeader}>
              <div className={styles.modeIcon} aria-hidden="true">
                <Laptop size={26} strokeWidth={1.8} />
              </div>
              <div>
                <div className={styles.modePill}>Mentorship &amp; Analytics</div>
                <h3 className={styles.modeTitle}>Diagnostics &amp; Doubt Clinics</h3>
              </div>
            </div>

            <p className={styles.modeDesc}>
              Personalized interventions to ensure no student moves forward with unresolved gaps, backed by transparent analytics reports for parents.
            </p>

            <ul className={styles.modeFeatures}>
              <li className={styles.modeFeatureItem}>
                <Check size={16} className={styles.checkIcon} aria-hidden="true" />
                <span>
                  <strong>Weekly Diagnostic Quizzes:</strong> Timed topic tests to identify misconceptions early.
                </span>
              </li>
              <li className={styles.modeFeatureItem}>
                <Check size={16} className={styles.checkIcon} aria-hidden="true" />
                <span>
                  <strong>Daily Doubt-Clearing Clinics:</strong> Dedicated 1-on-1 time to ensure no student moves forward with unresolved gaps.
                </span>
              </li>
              <li className={styles.modeFeatureItem}>
                <Check size={16} className={styles.checkIcon} aria-hidden="true" />
                <span>
                  <strong>Monthly Comprehensive Analytics Reports:</strong> Transparent progress tracking sent to parents highlighting accuracy, conceptual areas of strength, and speed metrics.
                </span>
              </li>
            </ul>

            <div className={styles.modeActions}>
              <a
                href={diagnosticsWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={18} aria-hidden="true" />
                <span>Enquire Doubt Clinics</span>
              </a>

              <Link href="#contact" className="btn btn-secondary">
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
