import React from 'react';
import { Moon, Sun, ArrowUpRight } from 'lucide-react';
import { Language } from '../data/portfolioData';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, isDark, setIsDark }) => {
  const isRTL = lang === 'ar';

  const navLinks = [
    { href: '#apps', label: { fr: 'Applications', ar: 'التطبيقات', en: 'Applications' } },
    { href: '#simulator', label: { fr: 'Simulateur', ar: 'المحاكي التفاعلي', en: 'Simulator' } },
    { href: '#architecture', label: { fr: 'Architecture', ar: 'الهندسة والمعمارية', en: 'Architecture' } },
    { href: '#estimator', label: { fr: 'Estimation', ar: 'تقدير المشروع', en: 'Estimator' } },
    { href: '#contact', label: { fr: 'Contact', ar: 'تواصل', en: 'Contact' } },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[var(--sand-bg)]/85 border-b border-[var(--sand-line)] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="group inline-flex items-center gap-1.5 font-display text-xl sm:text-2xl font-bold tracking-tight text-[var(--sand-ink)] focus:outline-none"
        >
          <span>El</span>
          <span className="text-[var(--sand-teal)] group-hover:text-[var(--sand-clay)] transition-colors duration-200">
            Hakouni
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--sand-gold)] mb-0.5 inline-block" />
        </a>

        {/* Zone 2: 4-5 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[var(--sand-ink-muted)]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[var(--sand-ink)] transition-colors duration-150 py-1 border-b border-transparent hover:border-[var(--sand-teal)]"
            >
              {link.label[lang]}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions (Language Switcher, Theme Toggle, CTA) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Selector */}
          <div className="flex items-center bg-[var(--sand-surface)] border border-[var(--sand-line)] rounded-lg p-0.5 text-xs font-medium">
            <button
              onClick={() => setLang('fr')}
              className={`px-2 py-1 rounded transition-colors ${
                lang === 'fr'
                  ? 'bg-[var(--sand-card)] text-[var(--sand-ink)] font-semibold shadow-xs'
                  : 'text-[var(--sand-ink-muted)] hover:text-[var(--sand-ink)]'
              }`}
              title="Français"
            >
              FR
            </button>
            <button
              onClick={() => setLang('ar')}
              className={`px-2 py-1 rounded transition-colors ${
                lang === 'ar'
                  ? 'bg-[var(--sand-card)] text-[var(--sand-ink)] font-semibold shadow-xs'
                  : 'text-[var(--sand-ink-muted)] hover:text-[var(--sand-ink)]'
              }`}
              title="العربية"
            >
              عربي
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-1 rounded transition-colors ${
                lang === 'en'
                  ? 'bg-[var(--sand-card)] text-[var(--sand-ink)] font-semibold shadow-xs'
                  : 'text-[var(--sand-ink-muted)] hover:text-[var(--sand-ink)]'
              }`}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Dark / Light Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label={isDark ? 'Passer au mode clair' : 'Passer au mode sombre'}
            className="p-2 text-[var(--sand-ink-muted)] hover:text-[var(--sand-ink)] hover:bg-[var(--sand-surface)] rounded-lg border border-transparent hover:border-[var(--sand-line)] transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4 text-[var(--sand-gold)]" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Primary CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[var(--sand-teal)] hover:bg-[#0b584f] dark:hover:bg-[#48b5a7] rounded-lg transition-colors whitespace-nowrap shadow-xs"
          >
            <span>{lang === 'ar' ? 'تواصل معي' : lang === 'fr' ? 'Me contacter' : 'Get in touch'}</span>
            <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
          </a>
        </div>
      </div>
    </header>
  );
};
