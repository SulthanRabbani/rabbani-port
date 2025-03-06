
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import content from '../data/content';

type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'id')) {
      return savedLanguage;
    }
    
    // Default to browser language if available
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'id') {
      return 'id';
    }
    
    // Default to English
    return 'en';
  });
  
  // Save language preference
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Get translation for a key
  const t = (key: string): string => {
    if (content[key] && content[key][language]) {
      return content[key][language];
    }
    
    // Fallback to the key if translation is not found
    console.warn(`Translation not found for key: ${key}`);
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
