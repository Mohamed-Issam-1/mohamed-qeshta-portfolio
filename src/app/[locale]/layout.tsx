import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono, Noto_Sans_Arabic } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { Header } from "@/components/layout/header";
import { routing } from "@/i18n/routing";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mohamed Issam Qeshta | Full-Stack Web Developer",
    template: "%s | Mohamed Issam Qeshta",
  },
  description:
    "Portfolio of Mohamed Issam Qeshta, a Full-Stack Web Developer focused on modern web applications, software engineering, and AI-integrated products.",
  authors: [{ name: "Mohamed Issam Qeshta" }],
  creator: "Mohamed Issam Qeshta",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={direction}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansArabic.variable} antialiased`}
    >
      <body>
        <NextIntlClientProvider>
          <ThemeProvider>
            <Header />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}