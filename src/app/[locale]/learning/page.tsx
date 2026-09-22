import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { LearningPageContent } from "@/components/learning/learning-page-content";
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
    "learning"
  );
}

export default async function LearningPage({
  params,
}: {
  params: Promise<{
    locale: string;
  }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  return <LearningPageContent />;
}