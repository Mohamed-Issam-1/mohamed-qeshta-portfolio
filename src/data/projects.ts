import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "bookspace-library-management-system",

    title: "BookSpace — Library Management System",
    titleAr: "BookSpace — نظام إدارة مكتبة",

    category: "Desktop Application",
    categoryAr: "تطبيق سطح مكتب",

    type: "Academic Individual Project",
    typeAr: "مشروع أكاديمي فردي",

    role: "Developer",
    roleAr: "المطور",

    status: "completed",
    priority: "featured",

    description:
      "A JavaFX desktop application for managing library operations with database integration, structured workflows, and a modernized user interface.",

    descriptionAr:
      "تطبيق سطح مكتب مبني باستخدام JavaFX لإدارة عمليات المكتبة، مع ربط قاعدة بيانات، وتنظيم سير العمل، وواجهة مستخدم حديثة.",

    technologies: [
      "Java",
      "JavaFX",
      "MariaDB",
      "MySQL",
      "JDBC"
    ],

    github:
      "https://github.com/Mohamed-Issam-1/bookspace-library-management-system"
  },

  {
    slug: "arabic-ai-travel-assistant",

    title: "Arabic AI Travel Assistant",
    titleAr: "مساعد السفر الذكي باللغة العربية",

    category: "AI / NLP",
    categoryAr: "الذكاء الاصطناعي / معالجة اللغة",

    type: "Academic Project — Refactored for Portfolio",
    typeAr: "مشروع أكاديمي — أعيد تنظيمه للبورتفوليو",

    role: "Developer",
    roleAr: "المطور",

    status: "completed",
    priority: "featured",

    description:
      "An Arabic-first AI travel assistant combining Qwen2.5 with TF-IDF retrieval and a local travel knowledge base to generate grounded recommendations and itineraries.",

    descriptionAr:
      "مساعد سفر ذكي موجه للعربية يجمع بين Qwen2.5 واسترجاع المعلومات باستخدام TF-IDF وقاعدة معرفة محلية لتوليد توصيات وخطط سفر أكثر التزامًا بالمصادر المتاحة.",

    technologies: [
      "Python",
      "Qwen2.5",
      "Hugging Face",
      "PyTorch",
      "Gradio",
      "TF-IDF",
      "scikit-learn"
    ],

    github:
      "https://github.com/Mohamed-Issam-1/ai-travel-assistant"
  },

  {
    slug: "almosafer",

    title: "ALMosafer — AI-Powered Travel Mobile App",
    titleAr: "ALMosafer — تطبيق سفر مدعوم بالذكاء الاصطناعي",

    category: "UI/UX Design",
    categoryAr: "تصميم UI/UX",

    type: "Academic Individual Project",
    typeAr: "مشروع أكاديمي فردي",

    role: "UI/UX Designer",
    roleAr: "مصمم UI/UX",

    status: "completed",
    priority: "featured",

    description:
      "A mobile UI/UX case study exploring AI-assisted travel planning, destination discovery, saved destinations, bookings, and account management within one consistent experience.",

    descriptionAr:
      "دراسة حالة لتصميم تجربة تطبيق سفر على الهاتف تستكشف التخطيط المدعوم بالذكاء الاصطناعي، واكتشاف الوجهات، والمحفوظات، والحجوزات، وإدارة الحساب ضمن تجربة متكاملة.",

    technologies: [
      "Figma",
      "UI Design",
      "UX Design",
      "Wireframing",
      "Prototyping"
    ],

    externalUrl:
      "https://www.figma.com/design/8a8nXYFBKrd3kjiypZt5f7/AlMosafer-Project?node-id=0-1&t=MHiUIwumdWst5OxP-1"
  }
];

export const featuredProjects = projects.filter(
  (project) => project.priority === "featured"
);