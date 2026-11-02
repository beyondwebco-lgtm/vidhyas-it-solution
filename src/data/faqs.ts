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
      "No. Our curriculum is designed to complement and elevate school performance. Because we build first-principles understanding, school mathematics becomes intuitive, effortless, and substantially faster for the student to complete.",
  },
  {
    id: "faq-2",
    question: "My child finds math intimidating. Is this program suitable only for math prodigies?",
    answer:
      "Our foundation courses start from the ground up. We believe mathematical ability is a developed skill, not an innate trait. By dismantling rote memorization and rebuilding concepts visually and logically, we regularly transform anxious students into confident problem solvers.",
  },
  {
    id: "faq-3",
    question: "How does starting in Class 5 or 6 help for an exam taken in Class 12 (JEE Advanced)?",
    answer:
      "JEE Advanced requires deep problem synthesis, sustained analytical stamina, and multi-concept application. Developing this mindset takes years of consistent exposure to non-routine problems. Students who start in middle school absorb higher concepts naturally without experiencing stress in senior secondary school.",
  },
  {
    id: "faq-4",
    question: "How do you measure my child's improvement?",
    answer:
      "Through weekly diagnostic evaluations, error-log tracking, and comprehensive monthly performance reviews. We track conceptual accuracy, calculation speed, and independent problem-solving ability.",
  },
];
