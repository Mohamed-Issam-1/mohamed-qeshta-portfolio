"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";

import {
  Link,
  usePathname,
} from "@/i18n/navigation";

import { LanguageToggle } from "./language-toggle";
import { ThemeToggle } from "./theme-toggle";

const navigation = [
  { key: "work", href: "/#work" },
  { key: "about", href: "/#about" },
  { key: "skills", href: "/#skills" },
  { key: "learning", href: "/#learning" },
  { key: "resume", href: "/resume" },
  { key: "contact", href: "/#contact" },
] as const;

const sectionIds = [
  "home",
  "work",
  "about",
  "skills",
  "learning",
  "contact",
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const t = useTranslations("Navigation");

  useEffect(() => {
    function updateNavigationState() {
      setIsScrolled(window.scrollY > 24);

      if (pathname !== "/") {
        return;
      }

      const markerPosition = 150;
      let currentSection = "home";

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);

        if (!element) {
          continue;
        }

        const rect = element.getBoundingClientRect();

        if (rect.top <= markerPosition) {
          currentSection = sectionId;
        }
      }

      setActiveSection(currentSection);
    }

    const initialFrame = window.requestAnimationFrame(
      updateNavigationState
    );

    window.addEventListener(
      "scroll",
      updateNavigationState,
      { passive: true }
    );

    window.addEventListener(
      "hashchange",
      updateNavigationState
    );

    return () => {
      window.cancelAnimationFrame(initialFrame);

      window.removeEventListener(
        "scroll",
        updateNavigationState
      );

      window.removeEventListener(
        "hashchange",
        updateNavigationState
      );
    };
  }, [pathname]);

  function isActive(
    key: (typeof navigation)[number]["key"]
  ) {
    if (key === "resume") {
      return pathname === "/resume";
    }

    if (
      key === "work" &&
      pathname.startsWith("/projects")
    ) {
      return true;
    }

    return (
      pathname === "/" &&
      activeSection === key
    );
  }

  function handleNavigationClick(
    key: (typeof navigation)[number]["key"]
  ) {
    setMenuOpen(false);

    if (key !== "resume") {
      setActiveSection(key);
    }
  }

  return (
    <header
      className={
        isScrolled
          ? "fixed inset-x-0 top-0 z-50 border-b border-border bg-background/92 shadow-[0_12px_45px_rgba(0,0,0,0.20)] backdrop-blur-2xl transition-all duration-500"
          : "fixed inset-x-0 top-0 z-50 border-b border-transparent bg-background/55 backdrop-blur-md transition-all duration-500"
      }
    >
      <div className="site-container flex h-20 items-center justify-between">
        <Link
          href="/"
          className="focus-ring group flex items-center gap-1 rounded-md text-xl font-semibold tracking-[-0.04em]"
          onClick={() => {
            setMenuOpen(false);
            setActiveSection("home");
          }}
        >
          <span>MIQ</span>

          <span className="text-primary transition group-hover:translate-x-0.5">
            .
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const active = isActive(item.key);

            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={() =>
                  handleNavigationClick(item.key)
                }
                aria-current={
                  active ? "location" : undefined
                }
                className={
                  active
                    ? "focus-ring rounded-full bg-primary-soft px-4 py-2 text-sm font-semibold text-primary transition duration-300"
                    : "focus-ring rounded-full px-4 py-2 text-sm font-medium text-muted transition duration-300 hover:bg-primary-soft hover:text-foreground"
                }
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <button
          type="button"
          onClick={() =>
            setMenuOpen((current) => !current)
          }
          className="focus-ring flex size-10 items-center justify-center rounded-full border border-border bg-surface text-foreground lg:hidden"
          aria-label={
            menuOpen
              ? t("closeMenu")
              : t("openMenu")
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={19} />
          ) : (
            <Menu size={19} />
          )}
        </button>
      </div>

      <div
        className={
          isScrolled
            ? "absolute inset-x-0 bottom-0 h-px origin-center scale-x-100 bg-gradient-to-r from-transparent via-primary/45 to-transparent opacity-100 transition duration-500"
            : "absolute inset-x-0 bottom-0 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-primary/45 to-transparent opacity-0 transition duration-500"
        }
        aria-hidden="true"
      />

      {menuOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="site-container flex flex-col py-4">
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => {
                const active = isActive(item.key);

                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={() =>
                      handleNavigationClick(item.key)
                    }
                    aria-current={
                      active
                        ? "location"
                        : undefined
                    }
                    className={
                      active
                        ? "focus-ring rounded-xl bg-primary-soft px-4 py-3 text-base font-semibold text-primary"
                        : "focus-ring rounded-xl px-4 py-3 text-base font-medium text-muted transition hover:bg-primary-soft hover:text-foreground"
                    }
                  >
                    {t(item.key)}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-4 flex items-center gap-2 border-t border-border pt-4">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}