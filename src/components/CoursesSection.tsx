"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { COURSE_CATEGORIES, ALL_COURSES, CourseItem } from "@/data/courses";
import { buildWhatsAppUrl } from "@/data/siteConfig";
import CourseCard from "./CourseCard";
import styles from "./CoursesSection.module.css";

export default function CoursesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", title: "All Classes", count: ALL_COURSES.length },
    ...COURSE_CATEGORIES.map((c) => ({
      id: c.id,
      title: c.title,
      count: c.courses.length,
    })),
  ];

  const currentCategoryObj = COURSE_CATEGORIES.find((c) => c.id === selectedCategory);

  const filteredCourses: CourseItem[] =
    selectedCategory === "all"
      ? ALL_COURSES
      : currentCategoryObj?.courses || [];

  const diagnosticWhatsAppUrl = buildWhatsAppUrl(
    "Hello Vidhyas IIT Solution, I would like to schedule a conceptual diagnostic evaluation test for my child."
  );

  return (
    <section id="courses" className={`section-padding ${styles.coursesSection}`} aria-labelledby="courses-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Classes 5th to 10th Pathway</span>
          <h2 id="courses-heading" className="section-title">
            Comprehensive Class-by-Class Mathematics Curriculum
          </h2>
          <p className="section-desc">
            Rigorous, proof-oriented mathematics curriculum engineered to transition students from foundational curiosity to high-tier Olympiad and IIT-JEE Advanced mastery.
          </p>
        </div>

        {/* Category Tabs */}
        <div className={styles.filterScroll} role="tablist" aria-label="Class Curriculum Levels">
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

        {/* Current Class Focus Note */}
        {currentCategoryObj && (
          <div style={{
            background: "#F8FAFC",
            border: "1px solid #E2E8F0",
            borderRadius: "10px",
            padding: "16px 20px",
            marginBottom: "28px",
            fontSize: "0.95rem",
            color: "#334155"
          }}>
            <strong style={{ color: "#0A192F" }}>{currentCategoryObj.subtitle}:</strong>{" "}
            <span>Focus: {currentCategoryObj.description}</span>
          </div>
        )}

        {/* Course Grid */}
        <div className={styles.courseGrid} role="region" aria-live="polite">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Diagnostic Assessment CTA Banner */}
        <div className={styles.customCourseBanner}>
          <div className={styles.customCourseContent}>
            <span className="section-eyebrow on-dark">Baseline Evaluation</span>
            <h3 className={styles.customCourseTitle}>Schedule a Concept Diagnostic Test</h3>
            <p className={styles.customCourseDesc}>
              Not sure which grade level or Olympiad track is appropriate? We conduct 1-on-1 diagnostic evaluations to identify gaps in arithmetic, deductive geometry, and algebraic modeling before recommending batch placement.
            </p>
          </div>

          <div className={styles.customCourseActions}>
            <a
              href={diagnosticWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageCircle size={18} aria-hidden="true" />
              <span>Book Diagnostic Test</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
