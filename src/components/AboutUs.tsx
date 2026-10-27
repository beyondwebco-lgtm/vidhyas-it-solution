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
              alt="Students and trainer in a hands-on learning session at Vidhyas IT Solutions, Suchitra, Hyderabad"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className={styles.image}
            />
            <div className={styles.imageFloatingPill}>
              <Sparkles size={14} color="#0284c7" />
              <span>Skill-First Learning</span>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative */}
        <div className={styles.aboutContent}>
          <span className="section-eyebrow">About Vidhyas IT Solutions</span>
          
          <h2 id="about-heading" className={styles.aboutTitle}>
            Learn Today. Grow Tomorrow.
          </h2>

          <p className={styles.aboutText}>
            Vidhyas IT Solutions is a training institute located in Suchitra, Hyderabad, offering a range of IT and non-IT courses for students, job seekers, and working professionals. Our focus is on practical learning, skill development, and career guidance to help learners take the next step with confidence.
          </p>

          <div className={styles.featuresList}>
            <div className={styles.featureRow}>
              <span className={styles.featureDot} aria-hidden="true">
                <Check size={13} strokeWidth={3} />
              </span>
              <span>
                <strong>Accessible Location:</strong> Situated in Suchitra, Hyderabad, connecting students from Kompally, Jeedimetla, and North Hyderabad.
              </span>
            </div>

            <div className={styles.featureRow}>
              <span className={styles.featureDot} aria-hidden="true">
                <Check size={13} strokeWidth={3} />
              </span>
              <span>
                <strong>Curriculum That Matters:</strong> Focused on practical programming, tools, and office technologies demanded by today&apos;s workplace.
              </span>
            </div>

            <div className={styles.featureRow}>
              <span className={styles.featureDot} aria-hidden="true">
                <Check size={13} strokeWidth={3} />
              </span>
              <span>
                <strong>Dual Mode Learning:</strong> Choose between classroom lab instruction or live online classes based on your convenience.
              </span>
            </div>
          </div>

          <div className={styles.actionRow}>
            <Link href="#courses" className="btn btn-primary">
              <span>Explore Our Courses</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>

            <Link href="#contact" className="btn btn-secondary">
              <MapPin size={16} aria-hidden="true" />
              <span>Visit Our Suchitra Centre</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
