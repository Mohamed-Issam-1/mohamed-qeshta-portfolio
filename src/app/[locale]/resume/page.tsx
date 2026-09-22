import { setRequestLocale } from "next-intl/server";

import { ResumePageContent } from "@/components/resume/resume-page-content";

export default async function ResumePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  return <ResumePageContent />;
}