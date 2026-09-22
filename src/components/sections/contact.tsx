"use client";

import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { motion, useReducedMotion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

import { personalInfo } from "@/data/personal";

export function Contact() {
  const t = useTranslations("Contact");
  const locale = useLocale();
  const reduceMotion = useReducedMotion();

  const isArabic = locale === "ar";

  const links = [
    {
      label: "Email",
      value: personalInfo.email,
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}`,
      icon: Mail,
      external: true,
    },
    {
      label: "LinkedIn",
      value: t("linkedinValue"),
      href: personalInfo.linkedin,
      icon: FaLinkedinIn,
      external: true,
    },
    {
      label: "GitHub",
      value: t("githubValue"),
      href: personalInfo.github,
      icon: FaGithub,
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-border"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      >
        <div className="absolute bottom-[-10rem] left-[-8rem] size-[24rem] rounded-full bg-primary/[0.05] blur-3xl" />
        <div className="absolute right-[-6rem] top-[-8rem] size-[20rem] rounded-full bg-primary/[0.04] blur-3xl" />
      </div>

      <div className="site-container section-spacing relative">
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 30,
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
          className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
        >
          <div className="flex flex-col justify-between">
            <div>
              <p
                className={
                  isArabic
                    ? "text-sm font-medium text-primary"
                    : "font-mono text-xs font-medium uppercase tracking-[0.18em] text-primary"
                }
              >
                {t("eyebrow")}
              </p>

              <h2
                className={
                  isArabic
                    ? "mt-5 max-w-2xl text-4xl font-semibold leading-[1.35] text-foreground sm:text-5xl"
                    : "mt-5 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-foreground sm:text-5xl"
                }
              >
                {t("title")}
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
                {t("description")}
              </p>
            </div>

            <div className="mt-10 flex items-center gap-2 text-sm text-subtle">
              <MapPin
                size={16}
                aria-hidden="true"
              />

              <span>
                {isArabic
                  ? personalInfo.locationAr
                  : personalInfo.location}
              </span>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-border bg-background-elevated/55 p-4 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:p-6">
            <div className="flex flex-col">
              {links.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className={
                      index === links.length - 1
                        ? "focus-ring group flex items-center justify-between gap-5 rounded-2xl px-4 py-5 transition hover:bg-primary-soft sm:px-5"
                        : "focus-ring group flex items-center justify-between gap-5 rounded-2xl border-b border-border px-4 py-5 transition hover:bg-primary-soft sm:px-5"
                    }
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-muted transition group-hover:border-primary/30 group-hover:text-primary">
                        <Icon
                          size={18}
                          aria-hidden="true"
                        />
                      </span>

                      <div className="min-w-0">
                        <p className="text-xs font-medium text-subtle">
                          {item.label}
                        </p>

                        <p
                          dir={item.label === "Email" ? "ltr" : undefined}
                          className="mt-1 truncate text-sm font-semibold text-foreground sm:text-base"
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="shrink-0 text-subtle transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary rtl:group-hover:-translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}