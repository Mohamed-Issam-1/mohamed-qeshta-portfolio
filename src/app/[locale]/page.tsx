import { setRequestLocale } from "next-intl/server";

import { Hero } from "@/components/sections/hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Learning } from "@/components/sections/learning";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <main className="pt-20">
      <Hero />
      <SelectedWork />
      <About />
      <Skills />
      <Learning />
    </main>
  );
}