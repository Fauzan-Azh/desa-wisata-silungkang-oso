'use client';

import { useLanguage } from './LanguageProvider';

export default function LanguageToggle({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div className={`ml-2 flex items-center bg-[#fffcf9]/10 rounded-full p-0.5 ${className}`}>
      <button
        aria-label="Bahasa Indonesia"
        aria-pressed={lang === 'id'}
        onClick={() => setLang('id')}
        className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
          lang === 'id' ? 'bg-[#fffcf9] text-slate-800' : 'text-white/80 hover:text-white'
        }`}
      >
        IND
      </button>
      <button
        aria-label="English"
        aria-pressed={lang === 'en'}
        onClick={() => setLang('en')}
        className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
          lang === 'en' ? 'bg-[#fffcf9] text-slate-800' : 'text-white/80 hover:text-white'
        }`}
      >
        ENG
      </button>
    </div>
  );
}


