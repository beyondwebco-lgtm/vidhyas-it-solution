import React from "react";
import Image from "next/image";
import { Check, Sparkles } from "lucide-react";
import styles from "./AboutUs.module.css";

const VIDYAS_METHODOLOGY_STEPS = [
  {
    step: "1. Diagnostic",
    title: "Diagnostic",
    desc: "Identify existing learning gaps and misconceptions in prerequisite concepts before starting new topics.",
  },
  {
    step: "2. Foundation",
    title: "Foundation",
    desc: "Strengthen prerequisite fundamentals and essential tools to ensure strong readiness.",
  },
  {
    step: "3. Concept",
    title: "Concept",
    desc: "Teach current class topics from core first principles with clear visual and logical explanations.",
  },
  {
    step: "4. Examples",
    title: "Examples",
    desc: "Explain concepts through guided, step-by-step model examples demonstrating underlying logic.",
  },
  {
    step: "5. Practice",
    title: "Practice",
    desc: "Scaffold learning with basic, intermediate, and advanced questions to build solid fluency.",
  },
  {
    step: "6. Application",
    title: "Application",
    desc: "Connect mathematical and scientific concepts with real-life situations and physical phenomena.",
  },
  {
    step: "7. Challenge",
    title: "Challenge",
    desc: "Develop non-routine problem-solving skills and higher-order analytical reasoning.",
  },
  {
    step: "8. Revision",
    title: "Revision",
    desc: "Reinforce important concepts, scientific laws, derivations, and formulas systematically.",
  },
  {
    step: "9. Assessment",
    title: "Assessment",
    desc: "Conduct periodic topic and chapter tests to measure accuracy, conceptual retention, and speed.",
  },
  {
    step: "10. Feedback",
    title: "Feedback",
    desc: "Identify weak areas, analyze error patterns, and provide targeted doubt resolution to improve learning.",
  },
];

export default function AboutUs() {
  return (
    <section id="about" className={`section-padding ${styles.aboutSection}`} aria-labelledby="about-heading">
      <div className={`container ${styles.aboutGrid}`}>
        {/* Left Column: Visual */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageCard}>
            <Image
              src="/images/math-about-framework.jpg"
              alt="Vidyas IIT Academy Learning Methodology for Classes 5 to 10"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className={styles.image}
            />
            <div className={styles.imageFloatingPill}>
              <Sparkles size={14} color="#0284c7" />
              <span>Vidyas IIT Academy Methodology</span>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative */}
        <div className={styles.aboutContent}>
          <span className="section-eyebrow">Teaching Methodology</span>
          
          <h2 id="about-heading" className={styles.aboutTitle}>
            Our Vidyas IIT Academy Learning Methodology
          </h2>

          <p className={styles.aboutText}>
            Our structured Vidyas IIT Academy classroom methodology dismantles rote memorization and rebuilds concepts visually and logically. We train students from Class 5 to 10 to develop deep conceptual clarity, sustained analytical stamina, and multi-concept problem synthesis across Mathematics, Physics, and Chemistry.
          </p>

          <div className={styles.featuresList}>
            {VIDYAS_METHODOLOGY_STEPS.map((item) => (
              <div key={item.title} className={styles.featureRow}>
                <span className={styles.featureDot} aria-hidden="true">
                  <Check size={13} strokeWidth={3} />
                </span>
                <span>
                  <strong>{item.step}:</strong> {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
