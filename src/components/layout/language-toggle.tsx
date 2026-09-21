"use client";

import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("Language");

  const nextLocale = locale === "en" ? "ar" : "en";

  return (
    <button
      type="button"
      onClick={() => router.replace(pathname, { locale: nextLocale })}
      className="focus-ring flex h-10 items-center gap-2 rounded-full border border-border bg-surface px-3 text-sm font-medium text-muted transition hover:border-border-strong hover:text-primary"
      aria-label={t("switch")}
    >
      <Languages size={16} />
      <span>{nextLocale.toUpperCase()}</span>
    </button>
  );
}