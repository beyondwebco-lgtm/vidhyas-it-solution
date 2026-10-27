"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { COURSE_CATEGORIES, ALL_COURSES, CourseItem } from "@/data/courses";
import { getCourseWhatsAppUrl, buildWhatsAppUrl } from "@/data/siteConfig";
import DynamicIcon from "./DynamicIcon";
import styles from "./CoursesSection.module.css";

export default function CoursesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", title: "All Courses", count: ALL_COURSES.length },
    ...COURSE_CATEGORIES.map((c) => ({
      id: c.id,
      title: c.title,
      count: c.courses.length,
    })),
  ];

  const filteredCourses: CourseItem[] =
    selectedCategory === "all"
      ? ALL_COURSES
      : COURSE_CATEGORIES.find((c) => c.id === selectedCategory)?.courses || [];

  const customCourseWhatsAppUrl = buildWhatsAppUrl(
    "Hello Vidhyas IT Solutions, I am looking for a course that is not listed on your website. Could you please let me know if it is available?"
  );

  return (
    <section id="courses" className={`section-padding ${styles.coursesSection}`} aria-labelledby="courses-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Comprehensive Catalog</span>
          <h2 id="courses-heading" className="section-title">
            Explore Our Courses
          </h2>
          <p className="section-desc">
            Choose the right course to build your knowledge, improve your skills, and prepare for your next opportunity.
          </p>
        </div>

        {/* Category Tabs */}
        <div className={styles.filterScroll} role="tablist" aria-label="Course Categories">
          {categories.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                className={`${styles.filterTab} ${isActive ? styles.active : ""}`}
                onClick={() => setSelectedCategory(tab.id)}
              >
                <span>{tab.title}</span>
                <span className={styles.filterCount}>{tab.count}</span>
              </button>
            );
          })}
        </div>

        {/* Course Grid */}
        <div className={styles.courseGrid} role="region" aria-live="polite">
          {filteredCourses.map((course) => {
            const whatsappUrl = getCourseWhatsAppUrl(course.name);

            return (
              <article key={course.id} className={styles.courseCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox} aria-hidden="true">
                    <DynamicIcon name={course.iconName} size={24} strokeWidth={1.8} />
                  </div>
                  <span className={styles.courseCategoryBadge}>{course.category}</span>
                </div>

                <h3 className={styles.courseTitle}>{course.name}</h3>
                <p className={styles.courseDesc}>{course.description}</p>

                <div className={styles.scheduleNote}>
                  Flexible timings • Contact for current batch options
                </div>

                <div className={styles.cardActions}>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.quickWaBtn}
                    aria-label={`Enquire about ${course.name} on WhatsApp`}
                  >
                    <MessageCircle size={16} aria-hidden="true" />
                    <span>Enquire on WhatsApp</span>
                  </a>

                  <Link
                    href={`#contact?course=${encodeURIComponent(course.name)}`}
                    className={styles.enquireBtn}
                  >
                    <span>Enquire via Form</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Looking for another course? CTA Banner */}
        <div className={styles.customCourseBanner}>
          <div className={styles.customCourseContent}>
            <span className="section-eyebrow on-dark">Custom &amp; Specialized Inquiries</span>
            <h3 className={styles.customCourseTitle}>Looking for another course?</h3>
            <p className={styles.customCourseDesc}>
              Do not see the exact technology, academic subject, or tool you want to learn? Contact our academic counselors in Suchitra, Hyderabad to check customized curriculum and ongoing batch schedules.
            </p>
          </div>

          <div className={styles.customCourseActions}>
            <a
              href={customCourseWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageCircle size={18} aria-hidden="true" />
              <span>Ask About Other Courses</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
