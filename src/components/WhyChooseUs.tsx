import React from "react";
import {
  BrainCircuit,
  Cpu,
  TrendingUp,
  Award,
} from "lucide-react";
import styles from "./WhyChooseUs.module.css";

const ADVANTAGES = [
  {
    title: "Deconstruct Rote Learning",
    description:
      "Traditional schooling rewards pattern-matching and mechanical calculation. We teach students why a theorem works before showing how to apply it.",
    icon: BrainCircuit,
  },
  {
    title: "Cultivate Algorithmic & Logical Thinking",
    description:
      "Mathematics is the gym for analytical thinking. Early mastery builds structural reasoning applicable to Physics, Computer Science, and competitive exams.",
    icon: Cpu,
  },
  {
    title: "Eliminate Future JEE Shock",
    description:
      "JEE Advanced tests non-routine synthesis across multiple topics. Starting in Class 5–8 builds mental stamina without high-stakes academic pressure.",
    icon: TrendingUp,
  },
  {
    title: "Excellence in National & Global Olympiads",
    description:
      "Direct preparation for prestigious contests including IOQM (Indian Olympiad Qualifier in Mathematics), NMTC (National Mathematics Talent Contests), AMC 8/10, and Aryabhata Competitions.",
    icon: Award,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className={`section-padding ${styles.whyUsSection}`} aria-labelledby="why-us-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">The IIT Foundation Advantage</span>
          <h2 id="why-us-heading" className="section-title">
            Why Start Early? The IIT Foundation Advantage
          </h2>
          <p className="section-desc">
            Most students struggle in Class 11 and 12 not because of the syllabus volume, but because their foundational mathematical intuition was never developed in middle school.
          </p>
        </div>

        <div className={styles.benefitsGrid}>
          {ADVANTAGES.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className={styles.benefitCard}>
                <div className={styles.iconWrapper} aria-hidden="true">
                  <Icon size={26} strokeWidth={1.8} />
                </div>
                <h3 className={styles.benefitTitle}>{item.title}</h3>
                <p className={styles.benefitDesc}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
