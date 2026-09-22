"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { getProjectCaseStudy } from "@/data/project-case-studies";

import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const locale = useLocale();
  const t = useTranslations("ProjectsPage");
  const reduceMotion = useReducedMotion();

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

  const description = isArabic
    ? project.descriptionAr
    : project.description;

  const isInProgress =
    project.status === "in-progress";

  const hasCaseStudy = Boolean(
    getProjectCaseStudy(project.slug)
  );

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 24,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.035, 0.2),
      }}
      className="group flex min-h-[24rem] flex-col overflow-hidden rounded-[1.6rem] border border-border bg-background-elevated/45 transition duration-300 hover:-translate-y-1 hover:border-border-strong"
    >
      <div className="relative border-b border-border bg-surface/65 p-6">
        <div
          className="project-visual-grid pointer-events-none absolute inset-0 opacity-45"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -right-14 -top-14 size-36 rounded-full bg-primary/[0.08] blur-[60px]"
          aria-hidden="true"
        />

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p
              className={
                isArabic
                  ? "text-xs font-medium text-primary"
                  : "font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-primary"
              }
            >
              {category}
            </p>

            <h2
              className={
                isArabic
                  ? "mt-3 text-xl font-semibold leading-[1.45] tracking-normal text-foreground"
                  : "mt-3 text-xl font-semibold leading-snug tracking-[-0.025em] text-foreground"
              }
            >
              {title}
            </h2>
          </div>

          <span
            className={
              isInProgress
                ? "inline-flex shrink-0 items-center gap-2 rounded-full border border-primary/25 bg-primary-soft px-3 py-1.5 text-[10px] font-semibold text-primary"
                : "inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-3 py-1.5 text-[10px] font-medium text-muted"
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
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-subtle">
          <span>{type}</span>
          <span aria-hidden="true">·</span>
          <span>{role}</span>
        </div>

        <p className="mt-5 text-sm leading-7 text-muted">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map(
            (technology) => (
              <span
                key={technology}
                className="rounded-full border border-border px-2.5 py-1 text-[10px] font-medium text-muted"
              >
                {technology}
              </span>
            )
          )}
        </div>

        {(hasCaseStudy ||
          project.github ||
          project.externalUrl ||
          project.liveDemo) && (
          <div className="mt-auto flex flex-wrap gap-3 pt-8">
            {hasCaseStudy && (
              <Link
                href={`/projects/${project.slug}`}
                className="focus-ring group/link inline-flex min-h-10 items-center gap-2 rounded-full border border-primary/30 bg-primary-soft px-4 py-2 text-xs font-semibold text-primary transition hover:border-primary/50"
              >
                {t("viewCaseStudy")}

                <ArrowUpRight
                  size={13}
                  className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 rtl:group-hover/link:-translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="focus-ring group/link inline-flex min-h-10 items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-foreground transition hover:border-border-strong hover:bg-primary-soft"
              >
                <FaGithub
                  size={15}
                  aria-hidden="true"
                />

                {t("github")}

                <ArrowUpRight
                  size={13}
                  className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 rtl:group-hover/link:-translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            )}

            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring group/link inline-flex min-h-10 items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-foreground transition hover:border-border-strong hover:bg-primary-soft"
              >
                {t("openProject")}

                <ArrowUpRight
                  size={13}
                  className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 rtl:group-hover/link:-translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            )}

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="focus-ring group/link inline-flex min-h-10 items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-foreground transition hover:border-border-strong hover:bg-primary-soft"
              >
                {t("liveDemo")}

                <ArrowUpRight
                  size={13}
                  className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 rtl:group-hover/link:-translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}