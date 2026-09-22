import { setRequestLocale } from "next-intl/server";

import { ProjectsPageContent } from "@/components/projects/projects-page-content";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  return <ProjectsPageContent />;
}