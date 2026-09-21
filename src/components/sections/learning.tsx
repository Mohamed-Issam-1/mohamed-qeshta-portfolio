"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CalendarDays,
  GraduationCap,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { CertificateViewer } from "@/components/learning/certificate-viewer";
import {
  certificates,
  currentTraining,
} from "@/data/learning";

const featuredCertificateIds = [
  "aws-ai-practitioner-challenge",
  "nlp-llm-training",
  "claude-anthropic-api",
];

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
      month: "short",
      year: "numeric",
    }
  ).format(new Date(`${value}T00:00:00`));
}

export function Learning() {
  const t = useTranslations("Learning");
  const locale = useLocale();
  const reduceMotion = useReducedMotion();

  const isArabic = locale === "ar";

  const featuredCertificates = certificates.filter(
    (certificate) =>
      featuredCertificateIds.includes(certificate.id)
  );

  return (
    <section
      id="learning"
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

        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="mb-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl border border-border-strong bg-primary-soft text-primary">
                  <GraduationCap size={19} aria-hidden="true" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {t("currentTitle")}
                  </h3>

                  <p className="mt-0.5 text-xs text-subtle">
                    {t("currentSubtitle")}
                  </p>
                </div>
              </div>

              <span className="rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-[10px] text-primary">
                {currentTraining.length}
              </span>
            </div>

            <div className="space-y-3">
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
                          y: 18,
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
                      delay: index * 0.05,
                    }}
                    className="group rounded-[1.35rem] border border-border bg-background-elevated/40 p-5 transition hover:border-border-strong"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-medium text-primary">
                          {provider}
                        </p>

                        <h4 className="mt-2 text-lg font-semibold text-foreground">
                          {title}
                        </h4>
                      </div>

                      <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-[10px] font-medium text-muted">
                        <span className="size-1.5 rounded-full bg-primary" />
                        {t("inProgress")}
                      </span>
                    </div>

                    {description && (
                      <p className="mt-3 text-sm leading-6 text-muted">
                        {description}
                      </p>
                    )}

                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                      {item.startDate && (
                        <span className="inline-flex items-center gap-1.5 text-xs text-subtle">
                          <CalendarDays size={13} aria-hidden="true" />
                          {t("started")}{" "}
                          {formatDate(item.startDate, locale)}
                        </span>
                      )}

                      {item.skills?.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-border px-2.5 py-1 text-[10px] font-medium text-muted"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>

          <div>
            <div className="mb-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl border border-border-strong bg-primary-soft text-primary">
                  <Award size={19} aria-hidden="true" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {t("certificatesTitle")}
                  </h3>

                  <p className="mt-0.5 text-xs text-subtle">
                    {t("certificatesSubtitle")}
                  </p>
                </div>
              </div>

              <span className="rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-[10px] text-primary">
                {certificates.length}
              </span>
            </div>

            <div className="space-y-3">
              {featuredCertificates.map((item, index) => {
                const title = isArabic
                  ? item.titleAr
                  : item.title;

                const provider = isArabic
                  ? item.providerAr
                  : item.provider;

                return (
                  <motion.article
                    key={item.id}
                    initial={
                      reduceMotion
                        ? false
                        : {
                          opacity: 0,
                          x: isArabic ? -20 : 20,
                        }
                    }
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-40px",
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                    }}
                    className="rounded-[1.35rem] border border-border bg-background-elevated/40 p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-medium text-primary">
                          {provider}
                        </p>

                        <h4 className="mt-2 text-lg font-semibold leading-snug text-foreground">
                          {title}
                        </h4>
                      </div>

                      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                        <Award size={17} aria-hidden="true" />
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {item.endDate && (
                        <span className="text-xs text-subtle">
                          {formatDate(item.endDate, locale)}
                        </span>
                      )}

                      {(isArabic
                        ? item.durationAr
                        : item.duration) && (
                          <span className="text-xs text-subtle">
                            ·{" "}
                            {isArabic
                              ? item.durationAr
                              : item.duration}
                          </span>
                        )}
                    </div>

                    {item.certificateImage && (
                      <div className="mt-5">
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

            <div className="mt-5">
              <Link
                href="/learning"
                className="focus-ring group inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:border-border-strong hover:bg-primary-soft"
              >
                {t("viewAll")}

                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}