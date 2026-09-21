"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
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

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("Navigation");

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="site-container flex h-20 items-center justify-between">
        <Link
          href="/"
          className="focus-ring group flex items-center gap-1 rounded-md text-xl font-semibold tracking-[-0.04em]"
          onClick={() => setMenuOpen(false)}
        >
          <span>MIQ</span>
          <span className="text-primary transition group-hover:translate-x-0.5">
            .
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="focus-ring rounded-full px-4 py-2 text-sm font-medium text-muted transition hover:bg-primary-soft hover:text-foreground"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="focus-ring flex size-10 items-center justify-center rounded-full border border-border bg-surface text-foreground lg:hidden"
          aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="site-container flex flex-col py-4">
            <nav className="flex flex-col">
              {navigation.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="focus-ring rounded-xl px-4 py-3 text-base font-medium text-muted transition hover:bg-primary-soft hover:text-foreground"
                >
                  {t(item.key)}
                </Link>
              ))}
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