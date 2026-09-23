import type { Metadata } from "next";

export const SITE_URL =
  "https://mohamed-qeshta-portfolio.netlify.app";

export const SITE_NAME =
  "Mohamed Issam Qeshta";

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
      title:
        "Mohamed Issam Qeshta | Full-Stack Web Developer",
      description:
        "Portfolio of Mohamed Issam Qeshta, a Full-Stack Web Developer building modern web applications, backend systems, software projects, and AI-integrated products.",
    },
    ar: {
      title:
        "محمد عصام قشطة | مطور ويب Full-Stack",
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

const pagePaths: Record<StaticPage, string> = {
  home: "",
  projects: "/projects",
  learning: "/learning",
  resume: "/resume",
};

export function getLocalizedPath(
  locale: string,
  path = ""
) {
  const normalizedPath =
    path === "/" ? "" : path;

  if (locale === "ar") {
    return `/ar${normalizedPath}`;
  }

  return normalizedPath || "/";
}

export function getLanguageAlternates(
  path = ""
) {
  return {
    en: getLocalizedPath("en", path),
    ar: getLocalizedPath("ar", path),
    "x-default": getLocalizedPath("en", path),
  };
}

export function getFullTitle(
  locale: string,
  title: string
) {
  return locale === "ar"
    ? `${title} | محمد عصام قشطة`
    : `${title} | Mohamed Issam Qeshta`;
}

export function getSiteMetadata(
  locale: string
): Metadata {
  const isArabic = locale === "ar";

  const defaultTitle = isArabic
    ? "محمد عصام قشطة | مطور ويب Full-Stack"
    : "Mohamed Issam Qeshta | Full-Stack Web Developer";

  const description = isArabic
    ? "الموقع الشخصي لمحمد عصام قشطة، مطور ويب Full-Stack يعمل على تطوير تطبيقات ومنتجات رقمية متكاملة."
    : "Portfolio of Mohamed Issam Qeshta, a Full-Stack Web Developer building modern applications and complete digital products.";

  return {
    metadataBase: new URL(SITE_URL),

    applicationName: SITE_NAME,

    title: {
      default: defaultTitle,
      template: isArabic
        ? "%s | محمد عصام قشطة"
        : "%s | Mohamed Issam Qeshta",
    },

    description,

    authors: [
      {
        name: SITE_NAME,
        url: SITE_URL,
      },
    ],

    creator: SITE_NAME,
    publisher: SITE_NAME,

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: defaultTitle,
      description,
      locale: isArabic
        ? "ar_PS"
        : "en_US",
      alternateLocale: isArabic
        ? ["en_US"]
        : ["ar_PS"],
      images: [
        {
          url: "/icon.png",
          width: 512,
          height: 512,
          alt: "Mohamed Issam Qeshta portfolio",
        },
      ],
    },

    twitter: {
      card: "summary",
      title: defaultTitle,
      description,
      images: ["/icon.png"],
    },

    category: "technology",
  };
}

export function getPageMetadata(
  locale: string,
  page: StaticPage
): Metadata {
  const language =
    locale === "ar"
      ? "ar"
      : "en";

  const metadata =
    pages[page][language];

  const path = pagePaths[page];

  const canonical =
    getLocalizedPath(
      locale,
      path
    );

  const title =
    page === "home"
      ? metadata.title
      : getFullTitle(
          locale,
          metadata.title
        );

  const isArabic =
    locale === "ar";

  return {
    title:
      page === "home"
        ? {
            absolute:
              metadata.title,
          }
        : metadata.title,

    description:
      metadata.description,

    alternates: {
      canonical,
      languages:
        getLanguageAlternates(path),
    },

    openGraph: {
      type: "website",
      url: canonical,
      siteName: SITE_NAME,
      title,
      description:
        metadata.description,
      locale: isArabic
        ? "ar_PS"
        : "en_US",
      alternateLocale: isArabic
        ? ["en_US"]
        : ["ar_PS"],
      images: [
        {
          url: "/icon.png",
          width: 512,
          height: 512,
          alt:
            "Mohamed Issam Qeshta portfolio",
        },
      ],
    },

    twitter: {
      card: "summary",
      title,
      description:
        metadata.description,
      images: ["/icon.png"],
    },
  };
}