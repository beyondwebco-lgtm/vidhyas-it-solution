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
      "Traditional schooling rewards pattern-matching and mechanical calculation. We teach students why a mathematical theorem or scientific law works before showing how to apply it.",
    icon: BrainCircuit,
  },
  {
    title: "Cultivate Algorithmic & Logical Thinking",
    description:
      "Mathematics and foundational science are the gym for analytical thinking. Early mastery builds structural reasoning across Mathematics, Physics, and Chemistry.",
    icon: Cpu,
  },
  {
    title: "Build Early Conceptual Stamina",
    description:
      "Competitive examinations and higher academics test multi-concept synthesis. Starting early in Classes 5–10 builds mental stamina and confidence without academic pressure.",
    icon: TrendingUp,
  },
  {
    title: "Excellence in National & Global Olympiads",
    description:
      "Direct preparation for prestigious science and mathematics contests including IOQM, NMTC, Science Olympiads (NSO), and National Talent Competitions.",
    icon: Award,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className={`section-padding ${styles.whyUsSection}`} aria-labelledby="why-us-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">The Foundation Advantage</span>
          <h2 id="why-us-heading" className="section-title">
            Why Start Early? The Foundation Advantage
          </h2>
          <p className="section-desc">
            Most students struggle in higher classes not because of syllabus volume, but because their foundational concepts in Mathematics and Science were never developed early in middle school.
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
