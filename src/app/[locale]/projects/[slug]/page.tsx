import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { projects } from "@/data/projects";
import {
  getProjectCaseStudy,
  projectCaseStudies,
} from "@/data/project-case-studies";
import { ProjectCaseStudyPage } from "@/components/projects/project-case-study-page";

export function generateStaticParams() {
  return projectCaseStudies.map(
    (caseStudy) => ({
      slug: caseStudy.slug,
    })
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}) {
  const { locale, slug } = await params;

  setRequestLocale(locale);

  const project = projects.find(
    (item) => item.slug === slug
  );

  const caseStudy = getProjectCaseStudy(slug);

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