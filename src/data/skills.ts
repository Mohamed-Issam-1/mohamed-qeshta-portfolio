import type { SkillGroup } from "@/types/portfolio";

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",

    title: "Frontend",
    titleAr: "الواجهة الأمامية",

    description:
      "Building responsive, maintainable interfaces and modern web experiences.",

    descriptionAr:
      "بناء واجهات حديثة ومتجاوبة وقابلة للصيانة وتجارب ويب واضحة.",

    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS"
    ]
  },

  {
    id: "backend",

    title: "Backend",
    titleAr: "الواجهة الخلفية",

    description:
      "Designing application logic, APIs, authentication, and backend workflows.",

    descriptionAr:
      "تطوير منطق التطبيقات وواجهات API وأنظمة المصادقة وسير العمل الخلفي.",

    skills: [
      "Laravel",
      "PHP",
      "REST APIs",
      "Authentication",
      "Authorization"
    ]
  },

  {
    id: "databases",

    title: "Databases",
    titleAr: "قواعد البيانات",

    description:
      "Working with relational databases, SQL, stored logic, and application data.",

    descriptionAr:
      "العمل مع قواعد البيانات العلائقية وSQL ومنطق البيانات وربطها بالتطبيقات.",

    skills: [
      "MySQL",
      "MariaDB",
      "SQLite",
      "Oracle Database",
      "PL/SQL"
    ]
  },

  {
    id: "ai-data",

    title: "AI, Data & MLOps",
    titleAr: "الذكاء الاصطناعي والبيانات وMLOps",

    description:
      "Applying machine learning, retrieval, NLP, experiment tracking, and data/model versioning within practical projects.",

    descriptionAr:
      "تطبيق تعلم الآلة والاسترجاع ومعالجة اللغة وتتبع التجارب وإدارة إصدارات البيانات والنماذج ضمن مشاريع عملية.",

    skills: [
      "Python",
      "pandas",
      "scikit-learn",
      "PyTorch",
      "Hugging Face",
      "TF-IDF",
      "RAG",
      "MLflow",
      "DVC"
    ]
  },

  {
    id: "tools",

    title: "Tools & Product",
    titleAr: "الأدوات وتطوير المنتج",

    description:
      "Tools used for development workflow, collaboration, interface design, and project delivery.",

    descriptionAr:
      "أدوات أستخدمها في سير التطوير والتعاون وتصميم الواجهات وتسليم المشاريع.",

    skills: [
      "Git",
      "GitHub",
      "Figma",
      "npm",
      "Vite"
    ]
  },

  {
    id: "other",

    title: "Other Technologies",
    titleAr: "تقنيات إضافية",

    description:
      "Additional technologies explored through desktop, database, and game-development projects.",

    descriptionAr:
      "تقنيات إضافية استخدمتها في مشاريع سطح المكتب وقواعد البيانات وتطوير الألعاب.",

    skills: [
      "Java",
      "JavaFX",
      "C#",
      "Unity",
      "Oracle APEX"
    ]
  }
];