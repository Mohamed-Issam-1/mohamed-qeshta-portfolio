import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { projects } from "@/data/projects";
import {
  getProjectCaseStudy,
  projectCaseStudies,
} from "@/data/project-case-studies";
import { ProjectCaseStudyPage } from "@/components/projects/project-case-study-page";

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
    (item) => item.slug === slug
  );

  if (!project) {
    return {};
  }

  const isArabic = locale === "ar";

  return {
    title: isArabic
      ? project.titleAr
      : project.title,

    description: isArabic
      ? project.descriptionAr
      : project.description,
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

  const project = projects.find(
    (item) => item.slug === slug
  );

  const caseStudy =
    getProjectCaseStudy(slug);

  if (!project || !caseStudy) {
    notFound();
  }

  return (
    <ProjectCaseStudyPage
      project={project}
      caseStudy={caseStudy}
    />
  );
}