"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  LibraryBig,
  Palette,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { getProjectCaseStudy } from "@/data/project-case-studies";

import type { Project } from "@/types/portfolio";

interface FeaturedProjectCardProps {
  project: Project;
  index: number;
}

function ProjectIcon({ slug }: { slug: string }) {
  if (slug === "bookspace-library-management-system") {
    return <LibraryBig size={22} aria-hidden="true" />;
  }

  if (slug === "arabic-ai-travel-assistant") {
    return <Bot size={22} aria-hidden="true" />;
  }

  return <Palette size={22} aria-hidden="true" />;
}

export function FeaturedProjectCard({
  project,
  index,
}: FeaturedProjectCardProps) {
  const locale = useLocale();
  const t = useTranslations("SelectedWork");
  const reduceMotion = useReducedMotion();

  const isArabic = locale === "ar";
  const isReversed = index % 2 === 1;

  const title = isArabic ? project.titleAr : project.title;
  const category = isArabic ? project.categoryAr : project.category;
  const type = isArabic ? project.typeAr : project.type;
  const role = isArabic ? project.roleAr : project.role;
  const description = isArabic
    ? project.descriptionAr
    : project.description;

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
              y: 36,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8"
    >
      <div
        className={
          isReversed
            ? "lg:order-2"
            : "lg:order-1"
        }
      >
        <div className="relative flex min-h-[22rem] h-full overflow-hidden rounded-[1.75rem] border border-border bg-surface">
          <div
            className="project-visual-grid pointer-events-none absolute inset-0"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -left-12 -top-12 size-56 rounded-full bg-primary/[0.08] blur-[80px]"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -bottom-20 -right-14 size-64 rounded-full bg-primary-strong/[0.07] blur-[90px]"
            aria-hidden="true"
          />

          <div className="relative z-10 flex w-full flex-col justify-between p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <span className="font-mono text-xs tracking-[0.2em] text-subtle">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="flex size-12 items-center justify-center rounded-2xl border border-border-strong bg-primary-soft text-primary">
                <ProjectIcon slug={project.slug} />
              </div>
            </div>

            <div className="my-12">
              <p
                className={
                  isArabic
                    ? "mb-3 text-xs font-medium tracking-normal text-primary"
                    : "mb-3 font-mono text-xs uppercase tracking-[0.16em] text-primary"
                }
              >
                {category}
              </p>

              <h3
                className={
                  isArabic
                    ? "max-w-xl text-3xl font-semibold leading-[1.35] tracking-normal text-foreground sm:text-4xl"
                    : "max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-foreground sm:text-4xl"
                }
              >
                {title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 5).map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-border bg-background/55 px-3 py-1.5 font-mono text-[10px] font-medium text-muted backdrop-blur"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          isReversed
            ? "lg:order-1"
            : "lg:order-2"
        }
      >
        <div className="flex h-full flex-col justify-center rounded-[1.75rem] border border-border bg-background-elevated/45 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-subtle">
            <span>{type}</span>

            <span
              className="size-1 rounded-full bg-border-strong"
              aria-hidden="true"
            />

            <span>{role}</span>
          </div>

          <h3
            className={
              isArabic
                ? "mt-5 text-2xl font-semibold leading-[1.4] tracking-normal text-foreground sm:text-3xl"
                : "mt-5 text-2xl font-semibold tracking-[-0.035em] text-foreground sm:text-3xl"
            }
          >
            {title}
          </h3>

          <p className="mt-5 max-w-xl text-base leading-7 text-muted">
            {description}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            {hasCaseStudy && (
              <Link
                href={`/projects/${project.slug}`}
                className="focus-ring group inline-flex min-h-11 items-center gap-2 rounded-full border border-primary/30 bg-primary-soft px-5 py-2.5 text-sm font-semibold text-primary transition hover:border-primary/50"
              >
                {t("viewCaseStudy")}

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="focus-ring group inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-border-strong hover:bg-primary-soft"
              >
                <FaGithub size={17} aria-hidden="true" />
                {t("github")}

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
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
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}