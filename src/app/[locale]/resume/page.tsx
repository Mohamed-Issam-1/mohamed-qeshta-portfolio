import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { ResumePageContent } from "@/components/resume/resume-page-content";
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
    "resume"
  );
}

export default async function ResumePage({
  params,
}: {
  params: Promise<{
    locale: string;
  }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  return <ResumePageContent />;
}