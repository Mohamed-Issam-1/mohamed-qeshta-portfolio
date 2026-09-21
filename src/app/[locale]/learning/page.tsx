import { setRequestLocale } from "next-intl/server";

import { LearningPageContent } from "@/components/learning/learning-page-content";

export default async function LearningPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  return <LearningPageContent />;
}