"use client";

import {
  ArrowLeft,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import {
  resumeData,
  resumeProfile,
} from "@/data/resume";
import { ResumeDownloadButton } from "@/components/resume/resume-download-button";

function formatMonthYear(
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

function cleanUrl(url: string) {
  return url
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");
}

export function ResumePageContent() {
  const locale = useLocale();
  const t = useTranslations("ResumePage");

  const isArabic = locale === "ar";
  const education = resumeData.education[0];

  return (
    <main className="resume-page min-h-screen pt-20">
      <section className="screen-only border-b border-border">
        <div className="site-container flex flex-wrap items-center justify-between gap-4 py-8">
          <Link
            href="/"
            className="focus-ring group inline-flex items-center gap-2 rounded-full text-sm font-medium text-muted transition hover:text-primary"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1"
              aria-hidden="true"
            />

            {t("back")}
          </Link>

          <ResumeDownloadButton label={t("exportPdf")} />
        </div>
      </section>

      <section className="resume-shell">
        <div className="site-container py-10 sm:py-14">
          <article className="resume-document mx-auto max-w-[960px] rounded-[1.75rem] border border-border bg-background-elevated/45 p-6 shadow-[var(--shadow-soft)] sm:p-10 lg:p-12">
            <header className="resume-header border-b border-border pb-7">
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="resume-kicker text-xs font-medium text-primary">
                    {isArabic
                      ? resumeData.personalInfo.titleAr
                      : resumeData.personalInfo.title}
                  </p>

                  <h1 className="mt-2 text-4xl font-semibold tracking-[-0.045em] text-foreground sm:text-5xl">
                    {isArabic
                      ? resumeData.personalInfo.nameAr
                      : resumeData.personalInfo.name}
                  </h1>
                </div>

                <div className="resume-contact grid gap-2 text-sm text-muted md:text-end">
                  <a
                    href={`mailto:${resumeData.personalInfo.email}`}
                    className="inline-flex items-center gap-2 hover:text-primary"
                  >
                    <Mail size={14} aria-hidden="true" />
                    {resumeData.personalInfo.email}
                  </a>

                  <a
                    href={resumeData.personalInfo.phoneHref}
                    className="inline-flex items-center gap-2 hover:text-primary"
                  >
                    <Phone size={14} aria-hidden="true" />
                    {resumeData.personalInfo.phone}
                  </a>

                  <span className="inline-flex items-center gap-2">
                    <MapPin size={14} aria-hidden="true" />
                    {isArabic
                      ? resumeData.personalInfo.locationAr
                      : resumeData.personalInfo.location}
                  </span>
                </div>
              </div>

              <div className="resume-links mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                <a
                  href={resumeData.personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-foreground hover:text-primary"
                >
                  <FaGithub
                    className="screen-only"
                    size={15}
                    aria-hidden="true"
                  />

                  <span className="screen-only">
                    GitHub
                  </span>

                  <span className="print-only">
                    {cleanUrl(resumeData.personalInfo.github)}
                  </span>
                </a>

                <a
                  href={resumeData.personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-foreground hover:text-primary"
                >
                  <FaLinkedinIn
                    className="screen-only"
                    size={15}
                    aria-hidden="true"
                  />

                  <span className="screen-only">
                    LinkedIn
                  </span>

                  <span className="print-only">
                    {cleanUrl(resumeData.personalInfo.linkedin)}
                  </span>
                </a>
              </div>
            </header>

            <div className="resume-content mt-8 space-y-9">
              <section>
                <ResumeHeading>
                  {t("summary")}
                </ResumeHeading>

                <p className="resume-summary mt-3 text-sm leading-7 text-muted">
                  {isArabic
                    ? resumeProfile.summaryAr
                    : resumeProfile.summary}
                </p>
              </section>

              <section>
                <ResumeHeading>
                  {t("education")}
                </ResumeHeading>

                <div className="mt-4 break-inside-avoid">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-semibold text-foreground">
                        {isArabic
                          ? education.degreeAr
                          : education.degree}
                      </h3>

                      <p className="mt-1 text-sm text-muted">
                        {isArabic
                          ? education.institutionAr
                          : education.institution}
                        {" · "}
                        {isArabic
                          ? education.locationAr
                          : education.location}
                      </p>
                    </div>

                    <p className="text-sm font-medium text-foreground">
                      {education.startYear} – {t("expected")}{" "}
                      {education.expectedGraduation}
                    </p>
                  </div>

                  <p className="mt-2 text-sm text-muted">
                    {isArabic
                      ? education.currentYearAr
                      : education.currentYear}
                    {" · "}
                    {t("gpa")}: {education.gpa}
                  </p>
                </div>
              </section>

              <section>
                <ResumeHeading>
                  {t("skills")}
                </ResumeHeading>

                <div className="resume-skills mt-4 grid gap-2.5">
                  {resumeData.skillGroups.map((group) => (
                    <SkillLine
                      key={group.id}
                      label={
                        isArabic
                          ? group.titleAr
                          : group.title
                      }
                      values={group.skills}
                    />
                  ))}
                </div>
              </section>

              <section>
                <ResumeHeading>
                  {t("projects")}
                </ResumeHeading>

                <div className="resume-projects mt-5 space-y-7">
                  {resumeData.projects.map((project, index) => {
                    const title = isArabic
                      ? project.titleAr
                      : project.title;

                    const role = isArabic
                      ? project.roleAr
                      : project.role;

                    const status = isArabic
                      ? project.statusAr
                      : project.status;

                    const bullets = isArabic
                      ? project.bulletsAr
                      : project.bullets;

                    return (
                      <article
                        key={project.id}
                        className={`resume-project break-inside-avoid ${index === 2 ? "resume-second-page" : ""}`}
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1">
                          <div>
                            <h3 className="text-base font-semibold text-foreground">
                              {title}
                            </h3>

                            <p className="mt-1 text-xs font-medium text-primary">
                              {role} · {status}
                            </p>
                          </div>

                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="resume-project-link inline-flex items-center gap-1 text-xs font-medium text-muted hover:text-primary"
                            >
                              <span className="screen-only">
                                GitHub
                              </span>

                              <ExternalLink
                                className="screen-only"
                                size={11}
                                aria-hidden="true"
                              />

                              <span className="print-only">
                                GitHub Repository
                              </span>
                            </a>
                          )}
                        </div>

                        <p className="mt-2 text-xs font-medium text-subtle">
                          {project.technologies.join(" · ")}
                        </p>

                        <ul className="mt-3 list-disc space-y-1.5 ps-5 text-sm leading-6 text-muted">
                          {bullets.map((bullet) => (
                            <li key={bullet}>
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </article>
                    );
                  })}
                </div>
              </section>

              <section>
                <ResumeHeading>
                  {t("training")}
                </ResumeHeading>

                <div className="resume-training-grid mt-4 grid gap-3 sm:grid-cols-2">
                  {resumeData.training.map((item) => (
                    <div
                      key={item.id}
                      className="resume-training break-inside-avoid"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                        <p className="text-sm font-semibold text-foreground">
                          {isArabic
                            ? item.titleAr
                            : item.title}
                        </p>

                        {item.startDate && (
                          <p className="text-xs text-subtle">
                            {formatMonthYear(
                              item.startDate,
                              locale
                            )}
                            {" – "}
                            {t("present")}
                          </p>
                        )}
                      </div>

                      <p className="mt-1 text-xs text-muted">
                        {isArabic
                          ? item.providerAr
                          : item.provider}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <ResumeHeading>
                  {t("certifications")}
                </ResumeHeading>

                <div className="resume-certification-grid mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {resumeData.certifications.map((item) => (
                    <div
                      key={item.id}
                      className="resume-certification break-inside-avoid"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                        <p className="text-sm font-semibold text-foreground">
                          {isArabic
                            ? item.titleAr
                            : item.title}
                        </p>

                        {item.endDate && (
                          <p className="text-xs text-subtle">
                            {formatMonthYear(
                              item.endDate,
                              locale
                            )}
                          </p>
                        )}
                      </div>

                      <p className="mt-1 text-xs text-muted">
                        {isArabic
                          ? item.providerAr
                          : item.provider}

                        {item.duration &&
                          ` · ${
                            isArabic
                              ? item.durationAr
                              : item.duration
                          }`}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <ResumeHeading>
                  {t("languages")}
                </ResumeHeading>

                <div className="resume-languages mt-4 flex flex-wrap gap-x-8 gap-y-3">
                  {resumeData.languages.map((language) => (
                    <p
                      key={language.name}
                      className="text-sm text-muted"
                    >
                      <span className="font-semibold text-foreground">
                        {isArabic
                          ? language.nameAr
                          : language.name}
                      </span>
                      {" — "}
                      {isArabic
                        ? language.proficiencyAr
                        : language.proficiency}
                    </p>
                  ))}
                </div>
              </section>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

function ResumeHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="resume-section-title border-b border-border pb-2 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
      {children}
    </h2>
  );
}

function SkillLine({
  label,
  values,
}: {
  label: string;
  values: string[];
}) {
  return (
    <p className="text-sm leading-6 text-muted">
      <span className="font-semibold text-foreground">
        {label}:
      </span>{" "}
      {values.join(", ")}
    </p>
  );
}