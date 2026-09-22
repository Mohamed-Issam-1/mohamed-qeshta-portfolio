import { education } from "@/data/education";
import { personalInfo } from "@/data/personal";
import { skillGroups } from "@/data/skills";
import {
  certificates,
  currentTraining,
} from "@/data/learning";

export const resumeProfile = {
  summary:
    "Computer Science student and Full-Stack Web Developer with hands-on experience building software projects across frontend, backend, databases, and AI-enabled applications. Skilled in React, Next.js, TypeScript, Laravel, PHP, SQL, and modern development workflows, with a strong academic record and continuous technical training.",

  summaryAr:
    "طالب علوم حاسوب ومطور ويب Full-Stack أمتلك خبرة تطبيقية من خلال بناء مشاريع برمجية تشمل الواجهات الأمامية والخلفية وقواعد البيانات وتطبيقات مدعومة بالذكاء الاصطناعي. أعمل باستخدام React وNext.js وTypeScript وLaravel وPHP وSQL وأدوات التطوير الحديثة، مع سجل أكاديمي قوي وتعلم تقني مستمر.",
};

export const resumeProjects = [
  {
    id: "lcms",
    title: "Language Center Management System",
    titleAr: "نظام إدارة مركز اللغات",

    role: "Team Leader / Full-Stack Developer",
    roleAr: "قائد الفريق / مطور Full-Stack",

    status: "In Development",
    statusAr: "قيد التطوير",

    technologies: [
      "Laravel",
      "PHP",
      "React",
      "Inertia.js",
      "TypeScript",
      "Filament"
    ],

    bullets: [
      "Lead development of a full-stack language center management system built with Laravel, React, Inertia.js, TypeScript, and Filament.",
      "Contribute to backend development, frontend implementation, and integration between application layers.",
      "Worked on authentication and account-security flows, reporting functionality, and administrative workflows."
    ],

    bulletsAr: [
      "قيادة تطوير نظام Full-Stack لإدارة مركز لغات باستخدام Laravel وReact وInertia.js وTypeScript وFilament.",
      "المساهمة في تطوير الواجهة الخلفية والواجهة الأمامية وعمليات التكامل بين أجزاء النظام.",
      "العمل على أنظمة المصادقة وأمان الحسابات والتقارير وسير العمل الإداري."
    ]
  },

  {
    id: "ai-travel-assistant",
    title: "Arabic AI Travel Assistant",
    titleAr: "مساعد السفر الذكي باللغة العربية",

    role: "Developer",
    roleAr: "المطور",

    status: "Completed",
    statusAr: "مكتمل",

    technologies: [
      "Python",
      "Qwen2.5",
      "Hugging Face",
      "PyTorch",
      "Gradio",
      "TF-IDF"
    ],

    github:
      "https://github.com/Mohamed-Issam-1/ai-travel-assistant",

    bullets: [
      "Built an Arabic-first AI travel assistant using Qwen2.5, Hugging Face Transformers, PyTorch, and Gradio.",
      "Combined local travel knowledge with TF-IDF retrieval to ground generated recommendations and itineraries.",
      "Refactored the original notebook into a modular and reproducible Python project with fallback retrieval mode."
    ],

    bulletsAr: [
      "بناء مساعد سفر ذكي موجه للعربية باستخدام Qwen2.5 وHugging Face Transformers وPyTorch وGradio.",
      "دمج قاعدة معرفة محلية مع TF-IDF لتحسين ارتباط التوصيات وخطط السفر بالمعلومات المسترجعة.",
      "إعادة تنظيم المشروع من Notebook إلى تطبيق Python معياري وقابل لإعادة التشغيل مع وضع استرجاع احتياطي."
    ]
  },

  {
    id: "oracle-apex",
    title: "Oracle APEX Contact Management System",
    titleAr: "نظام إدارة جهات الاتصال باستخدام Oracle APEX",

    role: "Developer",
    roleAr: "المطور",

    status: "Completed",
    statusAr: "مكتمل",

    technologies: [
      "Oracle APEX",
      "Oracle Database",
      "PL/SQL",
      "SQL"
    ],

    github:
      "https://github.com/Mohamed-Issam-1/oracle-apex-contact-management-system",

    bullets: [
      "Built a contact management application using Oracle APEX, Oracle Database, PL/SQL, and SQL.",
      "Implemented contact creation, detail views, interactive reporting, and server-side validation.",
      "Applied authentication and role-based access control for administrative and reader permissions."
    ],

    bulletsAr: [
      "بناء تطبيق لإدارة جهات الاتصال باستخدام Oracle APEX وOracle Database وPL/SQL وSQL.",
      "تنفيذ إضافة جهات الاتصال وصفحات التفاصيل والتقارير التفاعلية والتحقق من البيانات على الخادم.",
      "تطبيق المصادقة والتحكم بالصلاحيات حسب الأدوار."
    ]
  },

  {
    id: "bookspace",
    title: "BookSpace — Library Management System",
    titleAr: "BookSpace — نظام إدارة مكتبة",

    role: "Developer",
    roleAr: "المطور",

    status: "Completed",
    statusAr: "مكتمل",

    technologies: [
      "Java",
      "JavaFX",
      "MariaDB",
      "JDBC"
    ],

    github:
      "https://github.com/Mohamed-Issam-1/bookspace-library-management-system",

    bullets: [
      "Developed a JavaFX desktop application for managing library operations with relational database integration.",
      "Implemented structured workflows and JDBC-based communication with MariaDB/MySQL.",
      "Prepared the project for reproducible setup by removing machine-specific configuration and hard-coded credentials."
    ],

    bulletsAr: [
      "تطوير تطبيق سطح مكتب باستخدام JavaFX لإدارة عمليات المكتبة مع ربط قاعدة بيانات علائقية.",
      "تنفيذ سير عمل منظم وربط قاعدة البيانات باستخدام JDBC مع MariaDB/MySQL.",
      "تهيئة المشروع للتشغيل القابل لإعادة الإنتاج عبر إزالة الإعدادات الخاصة بالجهاز والبيانات الحساسة المضمنة."
    ]
  }
];

export const resumeData = {
  personalInfo,
  education,
  skillGroups,

  projects: resumeProjects,

  training: currentTraining,

  certifications: certificates,

  languages: personalInfo.languages,
};