import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { projects } from "@/data/projects";
import {
  getProjectCaseStudy,
  projectCaseStudies,
} from "@/data/project-case-studies";
import { ProjectCaseStudyPage } from "@/components/projects/project-case-study-page";
import {
  getFullTitle,
  getLanguageAlternates,
  getLocalizedPath,
  SITE_NAME,
} from "@/lib/seo";

interface ProjectPageParams {
  locale: string;
  slug: string;
}

export function generateStaticParams() {
  return projectCaseStudies.map(
    (caseStudy) => ({
      slug: caseStudy.slug,
    })
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ProjectPageParams>;
}): Promise<Metadata> {
  const {
    locale,
    slug,
  } = await params;

  const project = projects.find(
    (item) =>
      item.slug === slug
  );

  if (!project) {
    return {};
  }

  const isArabic =
    locale === "ar";

  const title = isArabic
    ? project.titleAr
    : project.title;

  const description =
    isArabic
      ? project.descriptionAr
      : project.description;

  const path =
    `/projects/${slug}`;

  const canonical =
    getLocalizedPath(
      locale,
      path
    );

  const socialImage =
    project.image ??
    "/icon.png";

  return {
    title,

    description,

    alternates: {
      canonical,
      languages:
        getLanguageAlternates(path),
    },

    openGraph: {
      type: "website",
      url: canonical,
      siteName: SITE_NAME,
      title:
        getFullTitle(
          locale,
          title
        ),
      description,
      locale: isArabic
        ? "ar_PS"
        : "en_US",
      alternateLocale:
        isArabic
          ? ["en_US"]
          : ["ar_PS"],
      images: [
        {
          url: socialImage,
          alt: `${title} project preview`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title:
        getFullTitle(
          locale,
          title
        ),
      description,
      images: [socialImage],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<ProjectPageParams>;
}) {
  const {
    locale,
    slug,
  } = await params;

  setRequestLocale(locale);

  const project =
    projects.find(
      (item) =>
        item.slug === slug
    );

  const caseStudy =
    getProjectCaseStudy(
      slug
    );

  if (
    !project ||
    !caseStudy
  ) {
    notFound();
  }

  return (
    <ProjectCaseStudyPage
      project={project}
      caseStudy={caseStudy}
    />
  );
}