"use client";

import {
  ArrowUpRight,
  Code2,
  PanelsTopLeft,
  ServerCog,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  useLocale,
  useTranslations,
} from "next-intl";

const services = [
  {
    key: "fullStack",
    number: "01",
    icon: Code2,
    technologies: [
      "React",
      "Next.js",
      "Laravel",
      "MySQL",
    ],
  },
  {
    key: "frontend",
    number: "02",
    icon: PanelsTopLeft,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Responsive UI",
    ],
  },
  {
    key: "backend",
    number: "03",
    icon: ServerCog,
    technologies: [
      "Laravel",
      "REST APIs",
      "MySQL",
      "Authentication",
    ],
  },
] as const;

export function Services() {
  const t = useTranslations("Services");
  const locale = useLocale();
  const reduceMotion = useReducedMotion();

  const isArabic = locale === "ar";

  return (
    <section
      id="services"
      className="relative overflow-hidden border-b border-border"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        <div className="absolute right-[-10rem] top-1/3 size-[24rem] rounded-full bg-primary/[0.025] blur-3xl" />
      </div>

      <div className="site-container section-spacing relative">
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 28,
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
        >
          <div className="max-w-3xl">
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
                  ? "mt-5 text-4xl font-semibold leading-[1.35] text-foreground sm:text-5xl"
                  : "mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-foreground sm:text-5xl"
              }
            >
              {t("title")}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {t("description")}
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.key}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 26,
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
                    duration: 0.55,
                    delay: reduceMotion
                      ? 0
                      : index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative flex min-h-full flex-col overflow-hidden rounded-[1.75rem] border border-border bg-background-elevated/45 p-6 transition duration-500 hover:-translate-y-1 hover:border-border-strong hover:bg-background-elevated/70 hover:shadow-[var(--shadow-soft)] sm:p-7"
                >
                  <div className="flex items-start justify-between gap-5">
                    <span className="flex size-12 items-center justify-center rounded-2xl border border-border bg-surface text-muted transition duration-300 group-hover:border-primary/30 group-hover:bg-primary-soft group-hover:text-primary">
                      <Icon
                        size={21}
                        aria-hidden="true"
                      />
                    </span>

                    <span
                      dir="ltr"
                      className="font-mono text-xs font-medium tracking-[0.14em] text-subtle"
                    >
                      / {service.number}
                    </span>
                  </div>

                  <h3
                    className={
                      isArabic
                        ? "mt-8 text-2xl font-semibold leading-[1.4] text-foreground"
                        : "mt-8 text-2xl font-semibold tracking-[-0.035em] text-foreground"
                    }
                  >
                    {t(`${service.key}.title`)}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-muted sm:text-base">
                    {t(`${service.key}.description`)}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {service.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          dir="ltr"
                          className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-subtle"
                        >
                          {technology}
                        </span>
                      )
                    )}
                  </div>

                  <a
                    href="#contact"
                    className="focus-ring group/link mt-8 inline-flex w-fit items-center gap-2 rounded-full text-sm font-semibold text-foreground transition hover:text-primary"
                  >
                    {t("cta")}

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 rtl:group-hover/link:-translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}