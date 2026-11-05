export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Will this program overload my child alongside regular school homework?",
    answer:
      "No. Our curriculum is designed to complement and elevate school performance. Because we build first-principles understanding, school syllabus in Mathematics, Physics, and Chemistry becomes intuitive, effortless, and substantially faster for the student to complete.",
  },
  {
    id: "faq-2",
    question: "My child finds math or science intimidating. Is this program suitable only for prodigies?",
    answer:
      "Our foundation courses start from the ground up. We believe analytical and scientific ability is a developed skill, not an innate trait. By dismantling rote memorization and rebuilding concepts visually and logically, we regularly transform anxious students into confident problem solvers.",
  },
  {
    id: "faq-3",
    question: "How does starting foundation coaching in Class 5 or 6 help students?",
    answer:
      "Higher academic learning and competitive exams require deep conceptual understanding, sustained analytical thinking, and multi-concept application. Developing this mindset takes years of consistent exposure to first-principles thinking. Students who start early in Classes 5 to 10 absorb foundational concepts naturally and build lasting academic confidence.",
  },
  {
    id: "faq-4",
    question: "How do you measure my child's improvement?",
    answer:
      "Through weekly diagnostic evaluations, error-log tracking, and comprehensive monthly performance reviews. We track conceptual accuracy, problem-solving speed, and independent application across Mathematics, Physics, and Chemistry.",
  },
];
