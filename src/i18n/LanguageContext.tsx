"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import { siteCopy, type Language, type SiteCopy } from "@/i18n/siteCopy";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  copy: SiteCopy;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem("language");

    if (storedLanguage === "en" || storedLanguage === "es") {
      queueMicrotask(() => setLanguageState(storedLanguage));
    }
  }, []);

  const value = useMemo<LanguageContextValue>(() => {
    const setLanguage = (nextLanguage: Language) => {
      setLanguageState(nextLanguage);
      window.localStorage.setItem("language", nextLanguage);
    };

    return {
      language,
      setLanguage,
      copy: siteCopy[language]
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
