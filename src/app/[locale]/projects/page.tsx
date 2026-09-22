import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { ProjectsPageContent } from "@/components/projects/projects-page-content";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    locale: string;
  }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return getPageMetadata(
    locale,
    "projects"
  );
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{
    locale: string;
  }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  return <ProjectsPageContent />;
}