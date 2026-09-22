"use client";

import { useMemo, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import {
  projectFilters,
  projects,
  type ProjectFilterValue,
} from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";

export function ProjectsPageContent() {
  const locale = useLocale();
  const t = useTranslations("ProjectsPage");

  const isArabic = locale === "ar";

  const [activeFilter, setActiveFilter] =
    useState<ProjectFilterValue>("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }

    return projects.filter(
      (project) =>
        project.filter === activeFilter
    );
  }, [activeFilter]);

  const completed = projects.filter(
    (project) => project.status === "completed"
  ).length;

  const inProgress = projects.filter(
    (project) =>
      project.status === "in-progress"
  ).length;

  return (
    <main className="min-h-screen pt-20">
      <section className="border-b border-border">
        <div className="site-container py-16 sm:py-20">
          <Link
            href="/#work"
            className="focus-ring group inline-flex items-center gap-2 rounded-full text-sm font-medium text-muted transition hover:text-primary"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1"
              aria-hidden="true"
            />

            {t("back")}
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16">
            <div>
              <p
                className={
                  isArabic
                    ? "text-xs font-medium text-primary"
                    : "font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary"
                }
              >
                {t("eyebrow")}
              </p>

              <h1
                className={
                  isArabic
                    ? "mt-4 max-w-4xl text-4xl font-semibold leading-[1.3] tracking-normal text-foreground sm:text-6xl"
                    : "mt-4 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-foreground sm:text-6xl"
                }
              >
                {t("title")}
              </h1>
            </div>

            <div className="lg:justify-self-end">
              <p className="max-w-2xl text-base leading-8 text-muted">
                {t("description")}
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            <StatCard
              value={projects.length}
              label={t("totalProjects")}
            />

            <StatCard
              value={completed}
              label={t("completedProjects")}
            />

            <StatCard
              value={inProgress}
              label={t("inProgressProjects")}
            />
          </div>
        </div>
      </section>

      <section>
        <div className="site-container section-spacing">
          <div className="mb-10 flex flex-col gap-5 border-b border-border pb-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold text-foreground">
                {t("filterTitle")}
              </p>

              <p className="mt-1 text-sm text-muted">
                {t("showing", {
                  count: filteredProjects.length,
                })}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {projectFilters.map((filter) => {
                const isActive =
                  filter === activeFilter;

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() =>
                      setActiveFilter(filter)
                    }
                    className={
                      isActive
                        ? "focus-ring rounded-full border border-primary/35 bg-primary-soft px-4 py-2 text-xs font-semibold text-primary"
                        : "focus-ring rounded-full border border-border px-4 py-2 text-xs font-medium text-muted transition hover:border-border-strong hover:text-foreground"
                    }
                  >
                    {t(`filters.${filter}`)}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {filteredProjects.map(
              (project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index}
                />
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function StatCard({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="rounded-[1.35rem] border border-border bg-background-elevated/45 p-5">
      <p className="font-mono text-2xl font-semibold text-primary">
        {String(value).padStart(2, "0")}
      </p>

      <p className="mt-2 text-sm text-muted">
        {label}
      </p>
    </div>
  );
}