import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("Home");

  return (
    <main className="min-h-screen pt-20">
      <section className="site-container flex min-h-[calc(100vh-5rem)] items-center py-20">
        <div className="max-w-4xl">
          <p className="mb-6 font-mono text-sm uppercase tracking-[0.22em] text-primary">
            {t("eyebrow")}
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            {t("title")}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
            {t("description")}
          </p>
        </div>
      </section>
    </main>
  );
}