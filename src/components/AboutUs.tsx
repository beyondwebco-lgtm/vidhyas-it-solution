import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MapPin, Sparkles } from "lucide-react";
import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <section id="about" className={`section-padding ${styles.aboutSection}`} aria-labelledby="about-heading">
      <div className={`container ${styles.aboutGrid}`}>
        {/* Left Column: Visual */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageCard}>
            <Image
              src="/images/about-lab.jpg"
              alt="Vidhyas IIT Solution - 3-Pillar Learning Framework for Mathematics Coaching"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className={styles.image}
            />
            <div className={styles.imageFloatingPill}>
              <Sparkles size={14} color="#0284c7" />
              <span>3-Pillar Learning Framework</span>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative */}
        <div className={styles.aboutContent}>
          <span className="section-eyebrow">Teaching Methodology</span>
          
          <h2 id="about-heading" className={styles.aboutTitle}>
            Our 3-Pillar Learning Framework
          </h2>

          <p className={styles.aboutText}>
            Our classroom methodology dismantles rote memorization and rebuilds concepts visually and logically. We train students from Class 5 to 10 to develop deep problem synthesis and sustained analytical stamina for Olympiads and JEE Advanced.
          </p>

          <div className={styles.featuresList}>
            <div className={styles.featureRow}>
              <span className={styles.featureDot} aria-hidden="true">
                <Check size={13} strokeWidth={3} />
              </span>
              <span>
                <strong>1. Conceptual Grounding (Concrete to Abstract):</strong> Every formula is derived from first principles. Students understand geometric representations of algebraic identities and visual proofs of theorems.
              </span>
            </div>

            <div className={styles.featureRow}>
              <span className={styles.featureDot} aria-hidden="true">
                <Check size={13} strokeWidth={3} />
              </span>
              <span>
                <strong>2. Mental Agility &amp; Vedic Precision:</strong> Integrating rapid arithmetic techniques, mental algebra, and number sense to reduce calculation errors and increase execution speed.
              </span>
            </div>

            <div className={styles.featureRow}>
              <span className={styles.featureDot} aria-hidden="true">
                <Check size={13} strokeWidth={3} />
              </span>
              <span>
                <strong>3. Challenger-Level Problem Solving:</strong> Exposure to multi-concept, non-routine problems that force students to synthesize ideas across geometry, algebra, and number theory.
              </span>
            </div>
          </div>

          <div className={styles.actionRow}>
            <Link href="#courses" className="btn btn-primary">
              <span>Explore Curriculum</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>

            <Link href="#contact" className="btn btn-secondary">
              <MapPin size={16} aria-hidden="true" />
              <span>Schedule Assessment</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
