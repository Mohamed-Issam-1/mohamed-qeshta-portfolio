"use client";

import {
  ArrowLeft,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import type { Project } from "@/types/portfolio";
import type { ProjectCaseStudy } from "@/data/project-case-studies";

interface ProjectCaseStudyPageProps {
  project: Project;
  caseStudy: ProjectCaseStudy;
}

export function ProjectCaseStudyPage({
  project,
  caseStudy,
}: ProjectCaseStudyPageProps) {
  const locale = useLocale();
  const t = useTranslations("ProjectCaseStudy");

  const isArabic = locale === "ar";

  const title = isArabic
    ? project.titleAr
    : project.title;

  const category = isArabic
    ? project.categoryAr
    : project.category;

  const type = isArabic
    ? project.typeAr
    : project.type;

  const role = isArabic
    ? project.roleAr
    : project.role;

  const overview = isArabic
    ? caseStudy.overviewAr
    : caseStudy.overview;

  const challenge = isArabic
    ? caseStudy.challengeAr
    : caseStudy.challenge;

  const roleDetails = isArabic
    ? caseStudy.roleDetailsAr
    : caseStudy.roleDetails;

  const features = isArabic
    ? caseStudy.featuresAr
    : caseStudy.features;

  const technicalApproach = isArabic
    ? caseStudy.technicalApproachAr
    : caseStudy.technicalApproach;

  const challenges = isArabic
    ? caseStudy.challengesAr
    : caseStudy.challenges;

  const outcome = isArabic
    ? caseStudy.outcomeAr
    : caseStudy.outcome;

  const isInProgress =
    project.status === "in-progress";

  return (
    <main className="min-h-screen pt-20">
      <section className="border-b border-border">
        <div className="site-container py-14 sm:py-20">
          <Link
            href="/projects"
            className="focus-ring group inline-flex items-center gap-2 rounded-full text-sm font-medium text-muted transition hover:text-primary"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1"
              aria-hidden="true"
            />

            {t("back")}
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p
                  className={
                    isArabic
                      ? "text-xs font-medium text-primary"
                      : "font-mono text-xs font-medium uppercase tracking-[0.18em] text-primary"
                  }
                >
                  {category}
                </p>

                <span
                  className={
                    isInProgress
                      ? "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary-soft px-3 py-1.5 text-[10px] font-semibold text-primary"
                      : "inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-[10px] font-medium text-muted"
                  }
                >
                  <span
                    className={
                      isInProgress
                        ? "size-1.5 rounded-full bg-primary"
                        : "size-1.5 rounded-full bg-muted"
                    }
                  />

                  {isInProgress
                    ? t("inProgress")
                    : t("completed")}
                </span>
              </div>

              <h1
                className={
                  isArabic
                    ? "mt-5 max-w-5xl text-4xl font-semibold leading-[1.3] tracking-normal text-foreground sm:text-6xl"
                    : "mt-5 max-w-5xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-foreground sm:text-6xl"
                }
              >
                {title}
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                {overview}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {(project.github || project.githubShowcase) && (
                  <a
                    href={project.github ?? project.githubShowcase}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring group inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-border-strong hover:bg-primary-soft"
                  >
                    <FaGithub
                      size={16}
                      aria-hidden="true"
                    />

                    {project.githubShowcase ? t("githubShowcase") : t("github")}

                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                )}

                {project.externalUrl && (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring group inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-border-strong hover:bg-primary-soft"
                  >
                    {t("openProject")}

                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                )}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <MetaCard
                label={t("role")}
                value={role}
              />

              <MetaCard
                label={t("projectType")}
                value={type}
              />

              <MetaCard
                label={t("status")}
                value={
                  isInProgress
                    ? t("inProgress")
                    : t("completed")
                }
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="site-container section-spacing">
          <div className="grid gap-5 lg:grid-cols-2">
            <TextPanel
              number="01"
              title={t("overview")}
              text={overview}
            />

            <TextPanel
              number="02"
              title={t("challenge")}
              text={challenge}
            />
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="site-container section-spacing">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <ListSection
              number="03"
              title={t("myRole")}
              items={roleDetails}
            />

            <ListSection
              number="04"
              title={t("keyFeatures")}
              items={features}
            />
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="site-container section-spacing">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <ListSection
              number="05"
              title={t("technicalApproach")}
              items={technicalApproach}
            />

            <ListSection
              number="06"
              title={t("challenges")}
              items={challenges}
            />
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="site-container section-spacing">
          <div className="rounded-[1.75rem] border border-border bg-background-elevated/45 p-6 sm:p-8 lg:p-10">
            <p className="font-mono text-xs text-primary">
              07
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
              {t("outcome")}
            </h2>

            <p className="mt-5 max-w-4xl text-base leading-8 text-muted">
              {outcome}
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="site-container section-spacing">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p className="font-mono text-xs text-primary">
                08
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
                {t("techStack")}
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map(
                (technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-muted"
                  >
                    {technology}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="mt-14 border-t border-border pt-8">
            <Link
              href="/projects"
              className="focus-ring group inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:border-border-strong hover:bg-primary-soft"
            >
              <ArrowLeft
                size={16}
                className="transition-transform group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1"
                aria-hidden="true"
              />

              {t("back")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function MetaCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[1.25rem] border border-border bg-background-elevated/45 p-5">
      <p className="text-xs font-medium text-subtle">
        {label}
      </p>

      <p className="mt-2 text-sm font-semibold leading-6 text-foreground">
        {value}
      </p>
    </div>
  );
}

function TextPanel({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-[1.6rem] border border-border bg-background-elevated/45 p-6 sm:p-8">
      <p className="font-mono text-xs text-primary">
        {number}
      </p>

      <h2 className="mt-3 text-2xl font-semibold text-foreground">
        {title}
      </h2>

      <p className="mt-5 text-base leading-8 text-muted">
        {text}
      </p>
    </article>
  );
}

function ListSection({
  number,
  title,
  items,
}: {
  number: string;
  title: string;
  items: string[];
}) {
  return (
    <div>
      <p className="font-mono text-xs text-primary">
        {number}
      </p>

      <h2 className="mt-3 text-2xl font-semibold text-foreground">
        {title}
      </h2>

      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3"
          >
            <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full border border-border-strong bg-primary-soft text-primary">
              <Check
                size={12}
                aria-hidden="true"
              />
            </div>

            <p className="text-sm leading-7 text-muted">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}