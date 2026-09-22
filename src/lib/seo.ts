import type { Metadata } from "next";

type StaticPage =
  | "home"
  | "projects"
  | "learning"
  | "resume";

interface LocalizedMetadata {
  title: string;
  description: string;
}

const pages: Record<
  StaticPage,
  {
    en: LocalizedMetadata;
    ar: LocalizedMetadata;
  }
> = {
  home: {
    en: {
      title: "Mohamed Issam Qeshta | Full-Stack Web Developer",
      description:
        "Portfolio of Mohamed Issam Qeshta, a Full-Stack Web Developer building modern web applications, backend systems, software projects, and AI-integrated products.",
    },
    ar: {
      title: "محمد عصام قشطة | مطور ويب Full-Stack",
      description:
        "الموقع الشخصي لمحمد عصام قشطة، مطور ويب Full-Stack يعمل على بناء تطبيقات ويب حديثة وأنظمة Backend ومشاريع برمجية ومنتجات متكاملة مع الذكاء الاصطناعي.",
    },
  },

  projects: {
    en: {
      title: "Projects",
      description:
        "Explore software, web development, AI, data, desktop, mobile, game development, and UI/UX projects by Mohamed Issam Qeshta.",
    },
    ar: {
      title: "المشاريع",
      description:
        "استعرض مشاريع محمد عصام قشطة في تطوير الويب والبرمجيات والذكاء الاصطناعي والبيانات وتطبيقات سطح المكتب والهاتف وتطوير الألعاب وUI/UX.",
    },
  },

  learning: {
    en: {
      title: "Learning & Certifications",
      description:
        "Training programs, certifications, and continuous learning in full-stack development, AI, MLOps, cloud, game development, and professional skills.",
    },
    ar: {
      title: "التعلم والشهادات",
      description:
        "البرامج التدريبية والشهادات والتعلم المستمر في تطوير Full-Stack والذكاء الاصطناعي وMLOps والحوسبة السحابية وتطوير الألعاب والمهارات المهنية.",
    },
  },

  resume: {
    en: {
      title: "Resume",
      description:
        "Resume of Mohamed Issam Qeshta, Full-Stack Web Developer and Computer Science student, including technical skills, education, projects, training, and certifications.",
    },
    ar: {
      title: "السيرة الذاتية",
      description:
        "السيرة الذاتية لمحمد عصام قشطة، مطور ويب Full-Stack وطالب علوم حاسوب، وتشمل المهارات التقنية والتعليم والمشاريع والتدريبات والشهادات.",
    },
  },
};

export function getSiteMetadata(
  locale: string
): Metadata {
  const isArabic = locale === "ar";

  return {
    title: {
      default: isArabic
        ? "محمد عصام قشطة | مطور ويب Full-Stack"
        : "Mohamed Issam Qeshta | Full-Stack Web Developer",
      template: isArabic
        ? "%s | محمد عصام قشطة"
        : "%s | Mohamed Issam Qeshta",
    },

    description: isArabic
      ? "الموقع الشخصي لمحمد عصام قشطة، مطور ويب Full-Stack يعمل على تطوير تطبيقات ومنتجات رقمية متكاملة."
      : "Portfolio of Mohamed Issam Qeshta, a Full-Stack Web Developer building modern applications and complete digital products.",

    authors: [
      {
        name: "Mohamed Issam Qeshta",
      },
    ],

    creator: "Mohamed Issam Qeshta",
  };
}

export function getPageMetadata(
  locale: string,
  page: StaticPage
): Metadata {
  const language = locale === "ar" ? "ar" : "en";
  const metadata = pages[page][language];

  return {
    title:
      page === "home"
        ? {
            absolute: metadata.title,
          }
        : metadata.title,

    description: metadata.description,
  };
}