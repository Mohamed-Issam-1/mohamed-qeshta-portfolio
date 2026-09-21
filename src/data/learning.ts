import type { LearningItem } from "@/types/portfolio";

export const learning: LearningItem[] = [
  {
    id: "future-aws-ai-programmer",

    title: "Future AWS AI Programmer",
    titleAr: "Future AWS AI Programmer",

    provider: "Udacity",
    providerAr: "Udacity",

    type: "training",
    status: "in-progress",

    startDate: "2026-07-27",

    description:
      "An ongoing Udacity Nanodegree program focused on applied AI programming and AWS technologies.",

    descriptionAr:
      "برنامج Nanodegree مستمر عبر Udacity يركز على برمجة الذكاء الاصطناعي التطبيقية وتقنيات AWS.",

    skills: [
      "AI Programming",
      "AWS",
      "Machine Learning"
    ]
  },

  {
    id: "mlops-qafza",

    title: "MLOps Training",
    titleAr: "تدريب MLOps",

    provider: "Qafza",
    providerAr: "قفزة",

    type: "training",
    status: "in-progress",

    startDate: "2026-07-20",

    description:
      "Hands-on training in machine learning operations, experiment tracking, data and model versioning, and production-oriented ML workflows.",

    descriptionAr:
      "تدريب عملي في MLOps يشمل تتبع التجارب وإدارة إصدارات البيانات والنماذج وسير عمل تعلم الآلة الموجه للإنتاج.",

    skills: [
      "MLOps",
      "MLflow",
      "DVC",
      "Machine Learning"
    ]
  },

  {
    id: "code-map-3",

    title: "Code Map 3",
    titleAr: "Code Map 3",

    provider: "Taqat",
    providerAr: "طاقات",

    type: "training",
    status: "in-progress",

    startDate: "2026-07-22",

    description:
      "An ongoing technical training program focused on practical software development and project work.",

    descriptionAr:
      "برنامج تدريبي تقني مستمر يركز على تطوير البرمجيات بشكل عملي والعمل على المشاريع."
  },

  {
    id: "game-development-design",

    title: "Game Development & Game Design",
    titleAr: "تطوير وتصميم الألعاب",

    provider: "Gaza Sky Geeks",
    providerAr: "Gaza Sky Geeks",

    type: "training",
    status: "in-progress",

    startDate: "2026-04-21",

    description:
      "An ongoing training program covering game development and game design through practical project work.",

    descriptionAr:
      "برنامج تدريبي مستمر في تطوير وتصميم الألعاب من خلال العمل العملي على المشاريع.",

    skills: [
      "Unity",
      "C#",
      "Game Development",
      "Game Design"
    ]
  },

  {
    id: "startups-freelancing",

    title: "Startups & Freelancing Training",
    titleAr: "تدريب الشركات الناشئة والعمل الحر",

    provider: "Avatar in collaboration with UNDP",
    providerAr: "Avatar بالتعاون مع UNDP",

    type: "training",
    status: "in-progress",

    startDate: "2026-07-15",

    description:
      "An ongoing training program covering startups, freelancing, and professional readiness.",

    descriptionAr:
      "برنامج تدريبي مستمر يتناول الشركات الناشئة والعمل الحر والاستعداد المهني."
  },

  {
    id: "aws-ai-practitioner-challenge",

    title: "AWS AI Practitioner Challenge",
    titleAr: "AWS AI Practitioner Challenge",

    provider: "Udacity",
    providerAr: "Udacity",

    type: "certificate",
    status: "completed",

    endDate: "2026-05-16",

    skills: [
      "AWS",
      "Artificial Intelligence"
    ],

    certificateImage:
      "/images/certificates/aws-ai-practitioner-challenge.webp"
  },

  {
    id: "nlp-llm-training",

    title: "NLP & LLM Training",
    titleAr: "تدريب NLP وLLM",

    provider: "Gaza Sky Geeks",
    providerAr: "Gaza Sky Geeks",

    type: "certificate",
    status: "completed",

    duration: "40 Hours",
    durationAr: "40 ساعة",

    skills: [
      "NLP",
      "LLMs"
    ],

    certificateImage:
      "/images/certificates/nlp-llm-training.webp"
  },

  {
    id: "claude-anthropic-api",

    title: "Claude with the Anthropic API",
    titleAr: "Claude with the Anthropic API",

    provider: "Anthropic",
    providerAr: "Anthropic",

    type: "certificate",
    status: "completed",

    endDate: "2026-07-29",

    skills: [
      "Claude",
      "Anthropic API",
      "AI Integration"
    ],

    certificateImage:
      "/images/certificates/claude-anthropic-api.webp"
  },

  {
    id: "claude-code-101",

    title: "Claude Code 101",
    titleAr: "Claude Code 101",

    provider: "Anthropic",
    providerAr: "Anthropic",

    type: "certificate",
    status: "completed",

    endDate: "2026-07-29",

    skills: [
      "Claude Code",
      "AI-Assisted Development"
    ],

    certificateImage:
      "/images/certificates/claude-code-101.webp"
  },

  {
    id: "job-roles-cloud",

    title: "Job Roles in the Cloud",
    titleAr: "Job Roles in the Cloud",

    provider: "AWS Training & Certification",
    providerAr: "AWS Training & Certification",

    type: "certificate",
    status: "completed",

    endDate: "2026-06-26",

    skills: [
      "AWS",
      "Cloud Computing"
    ],

    certificateImage:
      "/images/certificates/job-roles-in-the-cloud.webp"
  },

  {
    id: "ai-fluency-framework",

    title: "AI Fluency: Framework & Foundations",
    titleAr: "AI Fluency: Framework & Foundations",

    provider: "Anthropic",
    providerAr: "Anthropic",

    type: "certificate",
    status: "completed",

    endDate: "2026-07-29",

    skills: [
      "AI Fluency",
      "Artificial Intelligence"
    ],

    certificateImage:
      "/images/certificates/ai-fluency-framework-foundations.webp"
  }
];

export const currentTraining = learning.filter(
  (item) =>
    item.type === "training" &&
    item.status === "in-progress"
);

export const certificates = learning.filter(
  (item) =>
    item.type === "certificate" &&
    item.status === "completed"
);