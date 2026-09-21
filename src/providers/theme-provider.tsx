import { ThemeProvider as BaseThemeProvider } from "@teispace/next-themes";
import type { ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <BaseThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      storage="local"
      disableTransitionOnChange
    >
      {children}
    </BaseThemeProvider>
  );
}