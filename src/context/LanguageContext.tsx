
import React, { createContext, useContext, useState, useEffect } from "react";

// Supported languages
export type Language = "en" | "es" | "fr" | "de" | "zh";

// Language context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key) => key,
});

// Hook for using the language context
export const useLanguage = () => useContext(LanguageContext);

// Translation files
import enTranslations from "../translations/en";
import esTranslations from "../translations/es";
import frTranslations from "../translations/fr";
import deTranslations from "../translations/de";
import zhTranslations from "../translations/zh";

// Map of available translations
const translations: Record<Language, Record<string, string>> = {
  en: enTranslations,
  es: esTranslations,
  fr: frTranslations,
  de: deTranslations,
  zh: zhTranslations,
};

// Language names for display
export const languageNames: Record<Language, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  zh: "中文",
};

// Language provider component
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Get saved language from localStorage or use browser language or default to 'en'
  const getSavedLanguage = (): Language => {
    if (typeof window === "undefined") return "en";
    
    const saved = localStorage.getItem("vera-language");
    if (saved && ["en", "es", "fr", "de", "zh"].includes(saved)) {
      return saved as Language;
    }
    
    // Try to use browser language
    const browserLang = navigator.language.split("-")[0];
    if (["en", "es", "fr", "de", "zh"].includes(browserLang)) {
      return browserLang as Language;
    }
    
    return "en"; // Default fallback
  };

  const [language, setLanguageState] = useState<Language>(getSavedLanguage());

  // Translate function
  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  // Set language and save to localStorage
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem("vera-language", newLanguage);
  };

  // Effect to ensure the language is set correctly on initial load
  useEffect(() => {
    const savedLang = getSavedLanguage();
    if (savedLang !== language) {
      setLanguageState(savedLang);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
