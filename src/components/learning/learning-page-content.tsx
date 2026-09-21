"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  Award,
  CalendarDays,
  GraduationCap,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import {
  certificates,
  currentTraining,
} from "@/data/learning";
import { CertificateViewer } from "@/components/learning/certificate-viewer";

function formatDate(
  value: string | undefined,
  locale: string
) {
  if (!value) {
    return null;
  }

  return new Intl.DateTimeFormat(
    locale === "ar" ? "ar" : "en",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  ).format(new Date(`${value}T00:00:00`));
}

export function LearningPageContent() {
  const t = useTranslations("LearningPage");
  const locale = useLocale();
  const reduceMotion = useReducedMotion();

  const isArabic = locale === "ar";

  return (
    <main className="min-h-screen pt-20">
      <section className="border-b border-border">
        <div className="site-container py-16 sm:py-20">
          <Link
            href="/#learning"
            className="focus-ring group inline-flex items-center gap-2 rounded-full text-sm font-medium text-muted transition hover:text-primary"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1"
              aria-hidden="true"
            />

            {t("back")}
          </Link>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
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
                    ? "mt-4 max-w-3xl text-4xl font-semibold leading-[1.3] tracking-normal text-foreground sm:text-6xl"
                    : "mt-4 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-foreground sm:text-6xl"
                }
              >
                {t("title")}
              </h1>
            </div>

            <div className="lg:justify-self-end">
              <p className="max-w-2xl text-base leading-8 text-muted">
                {t("description")}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-muted">
                  {currentTraining.length} {t("activeCount")}
                </span>

                <span className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-muted">
                  {certificates.length} {t("certificateCount")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="site-container section-spacing">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-xl border border-border-strong bg-primary-soft text-primary">
              <GraduationCap size={20} aria-hidden="true" />
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground">
                {t("trainingTitle")}
              </h2>

              <p className="mt-1 text-sm text-muted">
                {t("trainingSubtitle")}
              </p>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {currentTraining.map((item, index) => {
              const title = isArabic
                ? item.titleAr
                : item.title;

              const provider = isArabic
                ? item.providerAr
                : item.provider;

              const description = isArabic
                ? item.descriptionAr
                : item.description;

              return (
                <motion.article
                  key={item.id}
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
                    delay: index * 0.04,
                  }}
                  className="relative overflow-hidden rounded-[1.5rem] border border-border bg-background-elevated/45 p-6 sm:p-7"
                >
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/[0.05] blur-3xl"
                    aria-hidden="true"
                  />

                  <div className="relative">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold text-primary">
                          {provider}
                        </p>

                        <h3 className="mt-2 text-xl font-semibold leading-snug text-foreground">
                          {title}
                        </h3>
                      </div>

                      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-[10px] font-medium text-muted">
                        <span className="size-1.5 rounded-full bg-primary" />
                        {t("inProgress")}
                      </span>
                    </div>

                    {description && (
                      <p className="mt-5 text-sm leading-7 text-muted">
                        {description}
                      </p>
                    )}

                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {item.startDate && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-subtle">
                          <CalendarDays size={13} aria-hidden="true" />
                          {t("started")}{" "}
                          {formatDate(item.startDate, locale)}
                        </span>
                      )}

                      {item.skills?.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="site-container section-spacing">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-xl border border-border-strong bg-primary-soft text-primary">
              <Award size={20} aria-hidden="true" />
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground">
                {t("certificationsTitle")}
              </h2>

              <p className="mt-1 text-sm text-muted">
                {t("certificationsSubtitle")}
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {certificates.map((item, index) => {
              const title = isArabic
                ? item.titleAr
                : item.title;

              const provider = isArabic
                ? item.providerAr
                : item.provider;

              const duration = isArabic
                ? item.durationAr
                : item.duration;

              return (
                <motion.article
                  key={item.id}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 22,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-40px",
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                  }}
                  className="flex min-h-[17rem] flex-col rounded-[1.5rem] border border-border bg-background-elevated/45 p-6 transition hover:border-border-strong"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold text-primary">
                        {provider}
                      </p>

                      <h3 className="mt-3 text-xl font-semibold leading-snug text-foreground">
                        {title}
                      </h3>
                    </div>

                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                      <Award size={18} aria-hidden="true" />
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.endDate && (
                      <span className="text-xs text-subtle">
                        {formatDate(item.endDate, locale)}
                      </span>
                    )}

                    {duration && (
                      <span className="text-xs text-subtle">
                        · {duration}
                      </span>
                    )}
                  </div>

                  {item.skills && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-border px-2.5 py-1 text-[10px] font-medium text-muted"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.certificateImage && (
                    <div className="mt-auto pt-6">
                      <CertificateViewer
                        image={item.certificateImage}
                        title={title}
                        buttonLabel={t("viewCertificate")}
                        closeLabel={t("closeCertificate")}
                        certificateLabel={t("certificateLabel")}
                      />
                    </div>
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}