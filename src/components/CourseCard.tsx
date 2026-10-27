import React from "react";
import { MessageCircle } from "lucide-react";
import { CourseItem } from "@/data/courses";
import { getCourseWhatsAppUrl } from "@/data/siteConfig";
import DynamicIcon from "./DynamicIcon";
import styles from "./CoursesSection.module.css";

interface CourseCardProps {
  course: CourseItem;
}

/**
 * Shared, reusable course card component.
 * Displays course information with a single direct WhatsApp enquiry button.
 */
export default function CourseCard({ course }: CourseCardProps) {
  const whatsappUrl = getCourseWhatsAppUrl(course.name);

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
      </div>
    </article>
  );
}
