import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Check, ArrowRight, MapPin } from "lucide-react";
import { siteConfig, getDefaultWhatsAppUrl } from "@/data/siteConfig";
import styles from "./Hero.module.css";

export default function Hero() {
  const whatsappUrl = getDefaultWhatsAppUrl();

  const trustStats = [
    {
      title: "100% Concept-First Approach",
      detail: "Rigorous proofs and deep intuition over rote formula cramming.",
    },
    {
      title: "3-Tier Graded Problem Sets",
      detail: "From school syllabus mastery to Olympiad-level non-routine problems.",
    },
    {
      title: "Class 5 to 10 Continuous Pathway",
      detail: "Seamless transition into Class 11–12 JEE Advanced preparation.",
    },
    {
      title: "Small Batch Mentorship",
      detail: "Individual attention with dedicated doubt-resolution clinics.",
    },
  ];

  return (
    <section className={styles.heroSection} aria-labelledby="hero-heading">
      <div className={`container ${styles.heroGrid}`}>
        {/* Left Column: Content */}
        <div className={styles.heroContent}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            <span>Premier Mathematics Coaching for Classes 5th to 10th</span>
          </div>

          <h1 id="hero-heading" className={styles.headline}>
            Transform Mathematical Fear into Mastery: <br />
            <span className={styles.highlight}>Build a Bulletproof IIT-JEE &amp; Olympiad Foundation Early.</span>
          </h1>

          <p className={styles.subheadline}>
            {siteConfig.intro}
          </p>

          <div className={styles.ctaGroup}>
            <Link href="#courses" className="btn btn-primary btn-lg">
              <span>Explore Curriculum</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
              aria-label="Enquire with Vidhyas IIT Academy on WhatsApp"
            >
              <MessageCircle size={20} aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Key Trust Stats (Hero Bar) */}
          <div className={styles.trustList} aria-label="Key Trust Stats (Hero Bar)">
            {trustStats.map((stat) => (
              <div key={stat.title} className={styles.trustItem}>
                <span className={styles.checkIcon} aria-hidden="true">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span>
                  <strong>{stat.title}:</strong> {stat.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Visual */}
        <div className={styles.visualWrapper}>
          <div className={styles.imageCard}>
            <Image
              src="/images/math-hero-classroom.jpg"
              alt="Vidhyas IIT Academy Mathematics Coaching for Classes 5th to 10th in Suchitra, Hyderabad"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 540px"
              className={styles.image}
            />
            <div className={styles.locationBadge}>
              <MapPin size={20} className={styles.locIcon} aria-hidden="true" />
              <div>
                <div className={styles.locLabel}>Mathematics Coaching</div>
                <div className={styles.locValue}>Suchitra, Hyderabad</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
