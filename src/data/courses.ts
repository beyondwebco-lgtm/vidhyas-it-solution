export interface CourseItem {
  id: string;
  name: string;
  category: string;
  description: string;
  badge?: string;
  iconName: string;
}

export interface CourseCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  courses: CourseItem[];
}

export const COURSE_CATEGORIES: CourseCategory[] = [
  {
    id: "it-programming",
    title: "IT & Programming",
    description: "Core programming languages and full-stack software development frameworks.",
    iconName: "Code2",
    courses: [
      {
        id: "python",
        name: "Python",
        category: "IT & Programming",
        description: "Learn Python fundamentals, syntax, object-oriented programming, data structures, and practical scripting exercises.",
        badge: "In Demand",
        iconName: "FileCode2",
      },
      {
        id: "java",
        name: "Java",
        category: "IT & Programming",
        description: "Core Java concepts, object-oriented design, collections framework, exception handling, and enterprise logic basics.",
        badge: "Popular",
        iconName: "Coffee",
      },
      {
        id: "c-prog",
        name: "C",
        category: "IT & Programming",
        description: "Foundational programming fundamentals, pointers, memory management, algorithms, and structured coding techniques.",
        iconName: "Terminal",
      },
      {
        id: "cpp-prog",
        name: "C++",
        category: "IT & Programming",
        description: "Object-oriented programming in C++, Standard Template Library (STL), memory efficiency, and problem solving.",
        iconName: "Cpu",
      },
      {
        id: "web-technologies",
        name: "Web Technologies",
        category: "IT & Programming",
        description: "Modern HTML5, CSS3 styling, responsive layouts, JavaScript fundamentals, and interactive web interface development.",
        iconName: "Globe",
      },
      {
        id: "java-full-stack",
        name: "Java Full Stack",
        category: "IT & Programming",
        description: "Comprehensive end-to-end web engineering covering Java backend, database connectivity, APIs, and modern frontend styling.",
        badge: "Comprehensive",
        iconName: "Layers",
      },
      {
        id: "python-full-stack",
        name: "Python Full Stack",
        category: "IT & Programming",
        description: "Complete full-stack development using Python backend frameworks, database persistence, RESTful APIs, and frontend integration.",
        badge: "Trending",
        iconName: "Laptop",
      },
    ],
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    description: "Business intelligence, spreadsheet mastery, and interactive visual data reporting.",
    iconName: "BarChart3",
    courses: [
      {
        id: "advanced-excel",
        name: "Advanced Excel",
        category: "Data & Analytics",
        description: "Advanced formulas, pivot tables, lookup functions (VLOOKUP, XLOOKUP), data cleaning, conditional formatting, and summary dashboards.",
        badge: "Essential",
        iconName: "FileSpreadsheet",
      },
      {
        id: "power-bi",
        name: "Power BI",
        category: "Data & Analytics",
        description: "Interactive report design, DAX formulas, data transformation, power query, and dynamic business analytics dashboards.",
        badge: "High Demand",
        iconName: "PieChart",
      },
      {
        id: "tableau",
        name: "Tableau",
        category: "Data & Analytics",
        description: "Visual analytics, interactive dashboards, worksheets, calculated fields, and visual data storytelling.",
        iconName: "TrendingUp",
      },
    ],
  },
  {
    id: "ai-enterprise",
    title: "AI & Enterprise Technologies",
    description: "Next-generation intelligent computing and enterprise resource management systems.",
    iconName: "BrainCircuit",
    courses: [
      {
        id: "ai-ml",
        name: "Artificial Intelligence and Machine Learning (AI/ML)",
        category: "AI & Enterprise Technologies",
        description: "Foundational machine learning concepts, supervised and unsupervised algorithms, model evaluation, and modern AI use cases.",
        badge: "Future-Ready",
        iconName: "Sparkles",
      },
      {
        id: "sap",
        name: "SAP",
        category: "AI & Enterprise Technologies",
        description: "Enterprise resource planning concepts, SAP system architecture overview, business process integration, and modular workflow training.",
        iconName: "Building2",
      },
    ],
  },
  {
    id: "accounting-office",
    title: "Accounting & Office Skills",
    description: "Practical accounting software and day-to-day corporate productivity suites.",
    iconName: "Calculator",
    courses: [
      {
        id: "ms-office",
        name: "MS Office",
        category: "Accounting & Office Skills",
        description: "Comprehensive practical training in Microsoft Word, Excel, PowerPoint, and Outlook for students and workplace professionals.",
        badge: "Foundational",
        iconName: "FileText",
      },
      {
        id: "tally-prime",
        name: "TallyPrime",
        category: "Accounting & Office Skills",
        description: "Computerized accounting, ledger management, GST entries, invoicing, voucher creation, and balance sheet reconciliation.",
        badge: "Practical",
        iconName: "Receipt",
      },
    ],
  },
  {
    id: "language-communication",
    title: "Language & Communication",
    description: "English fluency, international test preparation, and foreign language fundamentals.",
    iconName: "Languages",
    courses: [
      {
        id: "spoken-english",
        name: "Spoken English",
        category: "Language & Communication",
        description: "Everyday conversational practice, grammar fundamentals, vocabulary expansion, pronunciation clarity, and confidence building.",
        badge: "Confidence",
        iconName: "MessageSquare",
      },
      {
        id: "ielts",
        name: "IELTS",
        category: "Language & Communication",
        description: "Focused preparation across all four modules: Listening, Reading, Writing, and Speaking with structured test practice.",
        iconName: "Award",
      },
      {
        id: "pte",
        name: "PTE",
        category: "Language & Communication",
        description: "Pearson Test of English academic preparation with computer-based test strategies, practice tests, and scoring tips.",
        iconName: "CheckCircle",
      },
      {
        id: "french",
        name: "French",
        category: "Language & Communication",
        description: "Beginner French language fundamentals, conversational phrases, everyday vocabulary, and basic grammar.",
        iconName: "Compass",
      },
      {
        id: "german",
        name: "German",
        category: "Language & Communication",
        description: "Foundational German language training covering A1-level grammar structures, vocabulary, and basic conversational fluency.",
        iconName: "BookOpen",
      },
    ],
  },
  {
    id: "academic-support",
    title: "School & Academic Support",
    description: "Focused conceptual coaching and academic guidance for school students.",
    iconName: "GraduationCap",
    courses: [
      {
        id: "tuitions",
        name: "Tuitions",
        category: "School & Academic Support",
        description: "Subject-wise conceptual learning, homework support, and disciplined academic foundation building for school students.",
        badge: "Academic",
        iconName: "BookMarked",
      },
    ],
  },
];

// Flattened list of all courses for easy dropdown and search
export const ALL_COURSES: CourseItem[] = COURSE_CATEGORIES.flatMap(
  (category) => category.courses
);
