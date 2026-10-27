import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Check, ArrowRight, MapPin } from "lucide-react";
import { siteConfig, getDefaultWhatsAppUrl } from "@/data/siteConfig";
import styles from "./Hero.module.css";

export default function Hero() {
  const whatsappUrl = getDefaultWhatsAppUrl();

  return (
    <section className={styles.heroSection} aria-labelledby="hero-heading">
      <div className={`container ${styles.heroGrid}`}>
        {/* Left Column: Content */}
        <div className={styles.heroContent}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            <span>IT &amp; Non-IT Skill Development</span>
          </div>

          <h1 id="hero-heading" className={styles.headline}>
            Build Your Skills. <br />
            <span className={styles.highlight}>Shape Your Future.</span>
          </h1>

          <p className={styles.subheadline}>
            {siteConfig.supportingHeadline}
          </p>

          <p className={styles.introText}>
            {siteConfig.intro}
          </p>

          <div className={styles.ctaGroup}>
            <Link href="#courses" className="btn btn-primary btn-lg">
              <span>Explore Courses</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
              aria-label="Enquire with Vidhyas IT Solutions on WhatsApp"
            >
              <MessageCircle size={20} aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Trust Points */}
          <div className={styles.trustList} aria-label="Key Highlights">
            {siteConfig.trustPoints.map((point) => (
              <div key={point} className={styles.trustItem}>
                <span className={styles.checkIcon} aria-hidden="true">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Visual */}
        <div className={styles.visualWrapper}>
          <div className={styles.imageCard}>
            <Image
              src="/images/hero-training.jpg"
              alt="Practical IT training and classroom learning at Vidhyas IT Solutions, Suchitra, Hyderabad"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 540px"
              className={styles.image}
            />
            <div className={styles.locationBadge}>
              <MapPin size={20} className={styles.locIcon} aria-hidden="true" />
              <div>
                <div className={styles.locLabel}>Training Institute</div>
                <div className={styles.locValue}>Suchitra, Hyderabad</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
