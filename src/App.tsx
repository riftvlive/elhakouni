import React, { useState, useEffect } from 'react';
import { Language } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PhoneSimulator } from './components/PhoneSimulator';
import { AppsShowcase } from './components/AppsShowcase';
import { ArchitecturePillars } from './components/ArchitecturePillars';
import { ProjectEstimator } from './components/ProjectEstimator';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('elhakouni_lang') as Language;
    return saved === 'fr' || saved === 'ar' || saved === 'en' ? saved : 'ar';
  });

  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('elhakouni_theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('elhakouni_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('elhakouni_theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen bg-[var(--sand-bg)] text-[var(--sand-ink)] selection:bg-[var(--sand-teal)] selection:text-white transition-colors duration-200 ${lang === 'ar' ? 'font-arabic' : ''}`}>
      {/* 3-Zone Top Navigation Bar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        isDark={isDark}
        setIsDark={setIsDark}
      />

      {/* Main Content Sections */}
      <main>
        {/* Split Editorial Hero Section */}
        <HeroSection lang={lang} />

        {/* Live Interactive Smartphone App Simulator */}
        <PhoneSimulator lang={lang} />

        {/* Apps Showcase & Architecture Cards */}
        <AppsShowcase lang={lang} />

        {/* Core Architecture Standards & Pillars */}
        <ArchitecturePillars lang={lang} />

        {/* Interactive Scope & Delivery Estimator */}
        <ProjectEstimator lang={lang} />
      </main>

      {/* Grounded Accessible Footer */}
      <Footer lang={lang} />
    </div>
  );
}
