import { setRequestLocale } from "next-intl/server";

import { Hero } from "@/components/sections/hero";

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
    </main>
  );
}