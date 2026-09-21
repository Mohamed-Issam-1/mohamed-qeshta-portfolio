"use client";

import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { featuredProjects } from "@/data/projects";
import { FeaturedProjectCard } from "@/components/projects/featured-project-card";

export function SelectedWork() {
  const t = useTranslations("SelectedWork");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section
      id="work"
      className="relative border-b border-border"
    >
      <div className="site-container section-spacing">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-12">
          <div>
            <p
              className={
                isArabic
                  ? "text-xs font-medium tracking-normal text-primary"
                  : "font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary"
              }
            >
              {t("eyebrow")}
            </p>

            <h2
              className={
                isArabic
                  ? "mt-4 text-4xl font-semibold leading-[1.3] tracking-normal text-foreground sm:text-5xl"
                  : "mt-4 text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl"
              }
            >
              {t("title")}
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="max-w-2xl text-base leading-7 text-muted">
              {t("description")}
            </p>
          </div>
        </div>

        <div className="space-y-8 lg:space-y-10">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="focus-ring group inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:border-border-strong hover:bg-primary-soft"
          >
            {t("viewAll")}

            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}