"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { Header } from "@/components/header";
import { BackgroundFx } from "@/components/background-fx";

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BackgroundFx />
        <Header />
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
}
