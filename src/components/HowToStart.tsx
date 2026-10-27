import React from "react";
import { BookOpen, PhoneCall, MessagesSquare } from "lucide-react";
import styles from "./HowToStart.module.css";

const STEPS = [
  {
    number: "01",
    title: "Choose Your Course",
    description: "Browse our IT and non-IT course catalog and select the subject that aligns with your educational background and career goals.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Contact Our Team",
    description: "Connect with us on WhatsApp or call our Suchitra centre directly to discuss your interest and query batch details.",
    icon: PhoneCall,
  },
  {
    number: "03",
    title: "Discuss Training Options",
    description: "Talk with our counselors about offline or online batches, syllabus overview, fee structure, and start dates.",
    icon: MessagesSquare,
  },
];

export default function HowToStart() {
  return (
    <section className={`section-padding ${styles.startSection}`} aria-labelledby="start-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Simple 3-Step Process</span>
          <h2 id="start-heading" className="section-title">
            How to Get Started
          </h2>
          <p className="section-desc">
            Beginning your practical training journey at Vidhyas IT Solutions is simple, direct, and transparent.
          </p>
        </div>

        <div className={styles.stepsGrid}>
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className={styles.stepCard}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {step.number}
                </span>
                <div className={styles.iconWrapper} aria-hidden="true">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
