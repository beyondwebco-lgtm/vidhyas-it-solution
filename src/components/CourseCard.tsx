import React from "react";
import { CourseItem } from "@/data/courses";
import DynamicIcon from "./DynamicIcon";
import styles from "./CoursesSection.module.css";

interface CourseCardProps {
  course: CourseItem;
}

/**
 * Shared, reusable course card component.
 * Displays course information with academic foundation details.
 */
export default function CourseCard({ course }: CourseCardProps) {
  return (
    <article className={styles.courseCard}>
      <div className={styles.cardHeader}>
        <div className={styles.iconBox} aria-hidden="true">
          <DynamicIcon name={course.iconName} size={24} strokeWidth={1.8} />
        </div>
        <span className={styles.courseCategoryBadge}>{course.category}</span>
      </div>

      <h3 className={styles.courseTitle}>{course.name}</h3>
      <p className={styles.courseDesc}>{course.description}</p>

      {course.olympiadEdge && (
        <div className={styles.scheduleNote}>
          <span style={{ fontWeight: 600, color: "#0A192F" }}>Academic Edge: </span>
          <span>{course.olympiadEdge}</span>
        </div>
      )}
    </article>
  );
}
