import React from "react";
import { Building, Laptop, Check } from "lucide-react";
import styles from "./LearningModes.module.css";

export default function LearningModes() {
  return (
    <section id="learning-modes" className={`section-padding ${styles.modesSection}`} aria-labelledby="modes-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Classroom Ecosystem</span>
          <h2 id="modes-heading" className="section-title">
            Classroom Ecosystem &amp; Deliverables
          </h2>
          <p className="section-desc">
            A comprehensive, high-accountability learning environment structured to eliminate gaps, build speed, and deliver measurable growth across Mathematics, Physics, and Chemistry for Classes 5 to 10.
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
                  <strong>Level 2:</strong> Foundation &amp; Analytical Application (Challenging multi-step problems)
                </span>
              </li>
              <li className={styles.modeFeatureItem}>
                <Check size={16} className={styles.checkIcon} aria-hidden="true" />
                <span>
                  <strong>Level 3:</strong> Olympiad &amp; Challenger Tier (Non-routine, Olympiad past papers)
                </span>
              </li>
            </ul>
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
                  <strong>Weekly Diagnostic Quizzes:</strong> Instant identification of topic-wise misconceptions.
                </span>
              </li>
              <li className={styles.modeFeatureItem}>
                <Check size={16} className={styles.checkIcon} aria-hidden="true" />
                <span>
                  <strong>Daily Doubt-Clearing Clinics:</strong> 1-on-1 faculty access after every class session.
                </span>
              </li>
              <li className={styles.modeFeatureItem}>
                <Check size={16} className={styles.checkIcon} aria-hidden="true" />
                <span>
                  <strong>Monthly Progress Portfolios:</strong> Detailed granular metrics shared directly with parents.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
