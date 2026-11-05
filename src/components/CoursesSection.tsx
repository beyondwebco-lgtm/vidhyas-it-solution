"use client";

import React, { useState } from "react";
import {
  ALL_COURSES,
  CLASS_LEVELS,
  SubjectType,
  CourseItem,
} from "@/data/courses";
import CourseCard from "./CourseCard";
import styles from "./CoursesSection.module.css";

const SUBJECTS: SubjectType[] = ["Mathematics", "Physics", "Chemistry"];

export default function CoursesSection() {
  const [selectedSubject, setSelectedSubject] = useState<SubjectType>("Mathematics");
  const [selectedClass, setSelectedClass] = useState<string>("all");

  // Courses filtered by the chosen Subject
  const subjectCourses = ALL_COURSES.filter(
    (course) => course.subject === selectedSubject
  );

  // Class tabs with dynamic count based on selected subject
  const categories = [
    { id: "all", title: "All Classes", count: subjectCourses.length },
    ...CLASS_LEVELS.map((cls) => ({
      id: cls.id,
      title: cls.title,
      count: subjectCourses.filter((c) => c.classLevel === cls.title).length,
    })),
  ];

  const currentClassObj = CLASS_LEVELS.find((cls) => cls.id === selectedClass);

  const filteredCourses: CourseItem[] =
    selectedClass === "all"
      ? subjectCourses
      : subjectCourses.filter((c) => c.classLevel === currentClassObj?.title);

  return (
    <section id="courses" className={`section-padding ${styles.coursesSection}`} aria-labelledby="courses-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Classes 5th to 10th Pathway</span>
          <h2 id="courses-heading" className="section-title">
            Comprehensive Class-by-Class Curriculum
          </h2>
          <p className="section-desc">
            Structured learning pathways in Mathematics, Physics, and Chemistry for Classes 5th to 10th, designed to strengthen foundational concepts, develop analytical thinking, and improve academic confidence.
          </p>
        </div>

        {/* 1. Subject Navigation Tabs */}
        <div
          className={styles.filterScroll}
          role="tablist"
          aria-label="Curriculum Subjects"
          style={{ marginBottom: "14px", justifyContent: "center" }}
        >
          {SUBJECTS.map((sub) => {
            const isActive = selectedSubject === sub;
            const count = ALL_COURSES.filter((c) => c.subject === sub).length;

            return (
              <button
                key={sub}
                role="tab"
                aria-selected={isActive}
                className={`${styles.filterTab} ${isActive ? styles.active : ""}`}
                onClick={() => setSelectedSubject(sub)}
                style={{
                  fontSize: "0.95rem",
                  padding: "10px 22px",
                  fontWeight: 700,
                }}
              >
                <span>{sub}</span>
                <span className={styles.filterCount}>{count}</span>
              </button>
            );
          })}
        </div>

        {/* 2. Class Navigation Tabs (Classes 5 to 10) */}
        <div
          className={styles.filterScroll}
          role="tablist"
          aria-label="Class Selection Tabs"
          style={{ marginBottom: "28px" }}
        >
          {categories.map((tab) => {
            const isActive = selectedClass === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                className={`${styles.filterTab} ${isActive ? styles.active : ""}`}
                onClick={() => setSelectedClass(tab.id)}
              >
                <span>{tab.title}</span>
                <span className={styles.filterCount}>{tab.count}</span>
              </button>
            );
          })}
        </div>

        {/* Current Class & Subject Focus Note */}
        {currentClassObj && (
          <div style={{
            background: "#F8FAFC",
            border: "1px solid #E2E8F0",
            borderRadius: "10px",
            padding: "16px 20px",
            marginBottom: "28px",
            fontSize: "0.95rem",
            color: "#334155"
          }}>
            <strong style={{ color: "#0A192F" }}>
              {currentClassObj.title} • {selectedSubject}:
            </strong>{" "}
            <span>{currentClassObj.descriptions[selectedSubject]}</span>
          </div>
        )}

        {/* Curriculum Cards Grid (Strictly NO WhatsApp buttons on cards) */}
        <div className={styles.courseGrid} role="region" aria-live="polite">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Diagnostic Assessment Focus Banner (Clean informational content without unwanted CTA button) */}
        <div className={styles.customCourseBanner}>
          <div className={styles.customCourseContent} style={{ maxWidth: "100%" }}>
            <span className="section-eyebrow on-dark">Baseline Evaluation</span>
            <h3 className={styles.customCourseTitle}>1-on-1 Concept Diagnostic Evaluation</h3>
            <p className={styles.customCourseDesc}>
              Not sure which grade level or program track is appropriate? We conduct 1-on-1 diagnostic evaluations to identify foundational learning gaps in Mathematics, Physics, and Chemistry before recommending batch placement. Submit an enquiry below to schedule an evaluation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
