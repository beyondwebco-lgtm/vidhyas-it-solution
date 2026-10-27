import React from "react";
import {
  Users,
  Terminal,
  MonitorCheck,
  Clock,
  BadgePercent,
  Compass,
} from "lucide-react";
import styles from "./WhyChooseUs.module.css";

const BENEFITS = [
  {
    title: "Expert Trainers",
    description: "Guidance from trainers with relevant experience in programming, software tools, and domain practice.",
    icon: Users,
  },
  {
    title: "Practical Training",
    description: "Emphasis on hands-on learning and skill development through practical exercises and real-world scenarios.",
    icon: Terminal,
  },
  {
    title: "Lab Facility",
    description: "A supportive learning environment equipped for practical computer exercises, code execution, and guided practice.",
    icon: MonitorCheck,
  },
  {
    title: "Flexible Learning",
    description: "Convenient offline classroom sessions at our Suchitra centre as well as interactive online class options.",
    icon: Clock,
  },
  {
    title: "Affordable Fees",
    description: "Courses designed with affordability in mind to make quality skill education accessible to students and professionals.",
    icon: BadgePercent,
  },
  {
    title: "Career Guidance",
    description: "Personalized guidance to help learners plan their next steps, choose the right course, and build job-relevant skills.",
    icon: Compass,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className={`section-padding ${styles.whyUsSection}`} aria-labelledby="why-us-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Our Core Strengths</span>
          <h2 id="why-us-heading" className="section-title">
            Why Choose Vidhyas IT Solutions?
          </h2>
          <p className="section-desc">
            We focus on real skills, supportive mentoring, and practical training to help you advance your career with clarity.
          </p>
        </div>

        <div className={styles.benefitsGrid}>
          {BENEFITS.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className={styles.benefitCard}>
                <div className={styles.iconWrapper} aria-hidden="true">
                  <Icon size={26} strokeWidth={1.8} />
                </div>
                <h3 className={styles.benefitTitle}>{b.title}</h3>
                <p className={styles.benefitDesc}>{b.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
