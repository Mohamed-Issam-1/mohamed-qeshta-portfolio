"use client";

import { ArrowUp } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { personalInfo } from "@/data/personal";

export function Footer() {
  const locale = useLocale();
  const t = useTranslations("Footer");

  const isArabic = locale === "ar";
  const year = new Date().getFullYear();

  return (
    <footer className="screen-only border-t border-border">
      <div className="site-container flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            href="/"
            className="focus-ring inline-flex rounded-md text-base font-semibold tracking-[-0.03em] text-foreground"
          >
            <span
              dir="ltr"
              className="inline-flex items-baseline"
            >
              <span>MIQ</span>
              <span className="text-primary">.</span>
            </span>
          </Link>

          <p className="mt-2 text-sm text-subtle">
            © {year}{" "}
            {isArabic
              ? personalInfo.nameAr
              : personalInfo.name}
            . {t("rights")}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}`}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded-md text-sm font-medium text-muted transition hover:text-primary"
          >
            {t("email")}
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded-md text-sm font-medium text-muted transition hover:text-primary"
          >
            LinkedIn
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded-md text-sm font-medium text-muted transition hover:text-primary"
          >
            GitHub
          </a>

          <a
            href="#top"
            aria-label={t("backToTop")}
            className="focus-ring flex size-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition hover:border-border-strong hover:text-primary"
          >
            <ArrowUp
              size={16}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}