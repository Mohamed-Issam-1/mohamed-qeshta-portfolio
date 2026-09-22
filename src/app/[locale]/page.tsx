import { setRequestLocale } from "next-intl/server";

import { Hero } from "@/components/sections/hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Learning } from "@/components/sections/learning";
import { Contact } from "@/components/sections/contact";

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
      <Contact />
    </main>
  );
}