import React from "react";
import { BookOpen, PhoneCall, MessagesSquare } from "lucide-react";
import styles from "./HowToStart.module.css";

const STEPS = [
  {
    number: "01",
    title: "Select Grade & Target",
    description: "Choose your child's current school grade (Class 5 to 10) and primary target: School Exam Mastery, Olympiads (IOQM/NMTC/NSO), or Strong Foundation in Mathematics, Physics, and Chemistry.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Diagnostic Assessment",
    description: "Connect with us on WhatsApp or call to schedule a baseline conceptual diagnostic evaluation in Mathematics, Physics, or Chemistry.",
    icon: PhoneCall,
  },
  {
    number: "03",
    title: "Personalized Batch Allocation",
    description: "Enroll in an appropriate small cohort with graded 3-tier practice worksheets, daily doubt-resolution clinics, and monthly analytics reports.",
    icon: MessagesSquare,
  },
];

export default function HowToStart() {
  return (
    <section className={`section-padding ${styles.startSection}`} aria-labelledby="start-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Admissions &amp; Roadmap</span>
          <h2 id="start-heading" className="section-title">
            How to Get Started
          </h2>
          <p className="section-desc">
            Beginning your child&apos;s journey toward conceptual confidence and competitive mastery is structured, transparent, and diagnostic-led.
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
