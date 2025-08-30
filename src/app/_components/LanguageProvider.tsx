'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

type Language = 'id' | 'en';

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('id');

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('lang') : null;
    if (saved === 'id' || saved === 'en') {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('lang', lang);
      const html = document.documentElement;
      html.setAttribute('lang', lang === 'id' ? 'id' : 'en');
    }
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang }), [lang]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}


