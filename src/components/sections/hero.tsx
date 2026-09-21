"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { personalInfo } from "@/data/personal";


export function Hero() {
  const t = useTranslations("Hero");
  const locale = useLocale();
  const reduceMotion = useReducedMotion();

  const isArabic = locale === "ar";

  const initial = reduceMotion
    ? false
    : {
        opacity: 0,
        y: 24,
      };

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden border-b border-border"
    >
      <div
        className="hero-grid pointer-events-none absolute inset-0 -z-20"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute left-[8%] top-28 -z-10 size-[26rem] rounded-full bg-primary/[0.07] blur-[110px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute bottom-10 right-[5%] -z-10 size-[22rem] rounded-full bg-primary-strong/[0.06] blur-[100px]"
        aria-hidden="true"
      />

      <div className="site-container grid min-h-[calc(100svh-5rem)] items-center gap-10 py-10 sm:py-12 lg:grid-cols-[1.14fr_0.86fr] lg:gap-12 lg:py-8">
        <motion.div
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3.5 py-2 text-xs font-medium text-muted backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-40" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>

              {t("identity")}
            </span>

            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-subtle">
              <MapPin size={14} aria-hidden="true" />
              {isArabic ? personalInfo.locationAr : personalInfo.location}
            </span>
          </div>

          <p className="mb-3 font-mono text-sm font-medium tracking-[0.12em] text-primary">
            {isArabic ? personalInfo.nameAr : personalInfo.name}
          </p>

          <h1
            className={
              isArabic
                ? "max-w-4xl text-[clamp(2.5rem,4vw,4rem)] font-semibold leading-[1.18] tracking-normal text-foreground"
                : "max-w-4xl text-[clamp(2.7rem,4.5vw,4.5rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-foreground"
            }
          >
            {t("headlineStart")}{" "}
            <span className="text-gradient">{t("headlineAccent")}</span>
            <br className="hidden sm:block" /> {t("headlineEnd")}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted lg:max-w-xl">
            {t("description")}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/#work"
              className="focus-ring group inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-[#061014] transition duration-300 hover:bg-primary-strong"
            >
              {t("viewWork")}
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/resume"
              className="focus-ring group inline-flex min-h-12 items-center gap-2 rounded-full border border-border bg-surface/70 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition duration-300 hover:border-border-strong hover:bg-primary-soft"
            >
              {t("resume")}
              <ArrowDownRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 rtl:-rotate-90"
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="mt-6 flex items-center gap-5">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="focus-ring group inline-flex items-center gap-2 rounded-md text-sm font-medium text-muted transition hover:text-primary"
              aria-label="GitHub"
            >
              <FaGithub size={18} aria-hidden="true" />
              <span>GitHub</span>
            </a>

            <span className="h-4 w-px bg-border" aria-hidden="true" />

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="focus-ring group inline-flex items-center gap-2 rounded-md text-sm font-medium text-muted transition hover:text-primary"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  scale: 0.96,
                  y: 28,
                }
          }
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.75,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-[24rem] lg:mx-0 lg:justify-self-end"
        >
          <div
            className="absolute -inset-8 -z-10 rounded-[3rem] bg-primary/[0.055] blur-3xl"
            aria-hidden="true"
          />

          <div className="relative">
            <div className="absolute -left-4 top-8 z-20 hidden rounded-2xl border border-border bg-background/85 px-4 py-3 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:block">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
                {t("cardRoleLabel")}
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                {t("cardRole")}
              </p>
            </div>

            <div className="relative aspect-[0.86] overflow-hidden rounded-[2rem] border border-border-strong bg-surface shadow-[var(--shadow-soft),var(--shadow-glow)]">
              <Image
                src="/images/profile/mohamed-qeshta-profile.webp"
                alt={t("photoAlt")}
                fill
                priority
                sizes="(max-width: 1024px) 85vw, 38vw"
                className="object-cover object-center"
              />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071018]/35 via-transparent to-transparent"
                aria-hidden="true"
              />

              <div
                className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent"
                aria-hidden="true"
              />
            </div>

            <div className="absolute -bottom-5 right-3 z-20 rounded-2xl border border-border bg-background/90 px-4 py-3 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:right-6">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-xl bg-primary-soft font-mono text-xs font-bold text-primary">
                  MIQ
                </span>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-subtle">
                    {t("cardStackLabel")}
                  </p>
                  <p className="mt-0.5 text-xs font-medium text-foreground sm:text-sm">
                    React · Next.js · Laravel
                  </p>
                </div>
              </div>
            </div>

            <div
              className="absolute -right-3 top-[-0.8rem] size-16 rounded-2xl border border-primary/20 bg-primary/[0.04]"
              aria-hidden="true"
            />

            <div
              className="absolute -right-7 top-10 size-3 rounded-full bg-primary shadow-[0_0_25px_rgba(34,211,238,0.65)]"
              aria-hidden="true"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}