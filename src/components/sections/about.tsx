"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Braces,
  GraduationCap,
  Layers3,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { education } from "@/data/education";
import { personalInfo } from "@/data/personal";

export function About() {
  const t = useTranslations("About");
  const locale = useLocale();
  const reduceMotion = useReducedMotion();

  const isArabic = locale === "ar";
  const degree = education[0];

  const cards = [
    {
      icon: "focus",
      label: t("focusLabel"),
      value: t("focusValue"),
      detail: t("focusDetail"),
    },
    {
      icon: "education",
      label: t("educationLabel"),
      value: isArabic ? degree.degreeAr : degree.degree,
      detail: isArabic
        ? `${degree.institutionAr} · ${degree.currentYearAr}`
        : `${degree.institution} · ${degree.currentYear}`,
    },
    {
      icon: "approach",
      label: t("approachLabel"),
      value: t("approachValue"),
      detail: t("approachDetail"),
    },
  ];

  return (
    <section
      id="about"
      className="relative border-b border-border"
    >
      <div className="site-container section-spacing">
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 32,
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
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20"
        >
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

            <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-muted">
              <p>{t("paragraphOne")}</p>
              <p>{t("paragraphTwo")}</p>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-7">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-subtle">
                  {t("locationLabel")}
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  {isArabic
                    ? personalInfo.locationAr
                    : personalInfo.location}
                </p>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-subtle">
                  {t("gpaLabel")}
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  {degree.gpa}
                </p>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-subtle">
                  {t("graduationLabel")}
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  {degree.expectedGraduation}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {cards.map((card, index) => {
              return (
                <motion.div
                  key={card.label}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: isArabic ? -24 : 24,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-60px",
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-border bg-background-elevated/45 p-6 transition hover:border-border-strong sm:p-7"
                >
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 size-36 rounded-full bg-primary/[0.055] blur-3xl"
                    aria-hidden="true"
                  />

                  <div className="relative flex gap-5">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border-strong bg-primary-soft text-primary">
                                            {card.icon === "focus" && (
                        <Layers3 size={20} aria-hidden="true" />
                      )}

                      {card.icon === "education" && (
                        <GraduationCap size={20} aria-hidden="true" />
                      )}

                      {card.icon === "approach" && (
                        <Braces size={20} aria-hidden="true" />
                      )}
                    </div>

                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-subtle">
                        {card.label}
                      </p>

                      <h3 className="mt-2 text-xl font-semibold text-foreground">
                        {card.value}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-muted">
                        {card.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}