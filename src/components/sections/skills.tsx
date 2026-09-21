"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Database,
  PanelsTopLeft,
  ServerCog,
  Wrench,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { skillGroups } from "@/data/skills";

function SkillIcon({ id }: { id: string }) {
  if (id === "frontend") {
    return <PanelsTopLeft size={21} aria-hidden="true" />;
  }

  if (id === "backend") {
    return <ServerCog size={21} aria-hidden="true" />;
  }

  if (id === "databases") {
    return <Database size={21} aria-hidden="true" />;
  }

  if (id === "ai-data") {
    return <BrainCircuit size={21} aria-hidden="true" />;
  }

  if (id === "tools") {
    return <Wrench size={21} aria-hidden="true" />;
  }

  return <Code2 size={21} aria-hidden="true" />;
}

export function Skills() {
  const t = useTranslations("Skills");
  const locale = useLocale();
  const reduceMotion = useReducedMotion();

  const isArabic = locale === "ar";

  return (
    <section
      id="skills"
      className="relative border-b border-border"
    >
      <div className="site-container section-spacing">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
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

            <h2
              className={
                isArabic
                  ? "mt-4 max-w-xl text-4xl font-semibold leading-[1.3] tracking-normal text-foreground sm:text-5xl"
                  : "mt-4 max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-foreground sm:text-5xl"
              }
            >
              {t("title")}
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-muted lg:justify-self-end">
            {t("description")}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.id}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 24,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-50px",
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-[1.5rem] border border-border bg-background-elevated/45 p-6 transition duration-300 hover:-translate-y-1 hover:border-border-strong"
            >
              <div
                className="pointer-events-none absolute -right-14 -top-14 size-40 rounded-full bg-primary/[0.045] blur-3xl transition group-hover:bg-primary/[0.075]"
                aria-hidden="true"
              />

              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex size-11 items-center justify-center rounded-xl border border-border-strong bg-primary-soft text-primary">
                    <SkillIcon id={group.id} />
                  </div>

                  <span className="font-mono text-[10px] tracking-[0.18em] text-subtle">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3
                  className={
                    isArabic
                      ? "mt-6 text-xl font-semibold leading-[1.4] tracking-normal text-foreground"
                      : "mt-6 text-xl font-semibold tracking-[-0.025em] text-foreground"
                  }
                >
                  {isArabic ? group.titleAr : group.title}
                </h3>

                <p className="mt-3 min-h-[3rem] text-sm leading-6 text-muted">
                  {isArabic
                    ? group.descriptionAr
                    : group.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-surface/55 px-3 py-1.5 text-xs font-medium text-muted transition group-hover:border-border-strong"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-border bg-primary-soft/45 px-6 py-5 sm:flex sm:items-center sm:justify-between sm:gap-8">
          <div>
            <p className="text-sm font-semibold text-foreground">
              {t("learningTitle")}
            </p>

            <p className="mt-1 text-sm leading-6 text-muted">
              {t("learningDescription")}
            </p>
          </div>

          <span className="mt-4 inline-flex shrink-0 items-center rounded-full border border-border-strong bg-background/50 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-primary sm:mt-0">
            {t("learningBadge")}
          </span>
        </div>
      </div>
    </section>
  );
}