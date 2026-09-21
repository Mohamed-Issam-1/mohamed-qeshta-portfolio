"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@teispace/next-themes";
import { useTranslations } from "next-intl";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const t = useTranslations("Theme");

  function toggleTheme() {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="focus-ring flex size-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition hover:border-border-strong hover:text-primary"
      aria-label={t("toggle")}
    >
      <Sun
        size={17}
        className="hidden dark:block"
        aria-hidden="true"
      />

      <Moon
        size={17}
        className="block dark:hidden"
        aria-hidden="true"
      />
    </button>
  );
}