import React from 'react';
import { Smartphone, Shield, Globe2, Cpu, CheckCircle } from 'lucide-react';
import { Language, PORTFOLIO_DATA } from '../data/portfolioData';

interface ArchitecturePillarsProps {
  lang: Language;
}

export const ArchitecturePillars: React.FC<ArchitecturePillarsProps> = ({ lang }) => {
  const { pillars } = PORTFOLIO_DATA;

  const pillarIcons = [Smartphone, Shield, Globe2, Cpu];

  return (
    <section id="architecture" className="py-16 md:py-24 border-b border-[var(--sand-line)] bg-[var(--sand-surface)]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--sand-teal)] block mb-2">
            {lang === 'ar' ? 'المعايير الهندسية الصارمة' : lang === 'fr' ? 'Principes de conception' : 'Core Standards'}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[var(--sand-ink)]">
            {lang === 'ar'
              ? 'أربعة ركائز ثابتة في كل سطر برمجي'
              : lang === 'fr'
              ? 'Quatre piliers au cœur de chaque application'
              : 'Four Uncompromising Engineering Pillars'}
          </h2>
          <p className="text-sm sm:text-base text-[var(--sand-ink-muted)] mt-2">
            {lang === 'ar'
              ? 'الجودة ليست صدفة؛ إنها التزام معماري ثابت بالأداء العالي، وحماية المستخدم، وسرعة الاستجابة.'
              : lang === 'fr'
              ? 'Pas de compromis sur la fluidité, le respect absolu de la vie privée et l’intégration native des spécificités linguistiques.'
              : 'Reliability and tactile polish built through strict architectural discipline and privacy-first local systems.'}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillarIcons[i];
            return (
              <div
                key={pillar.number}
                className="p-6 sm:p-7 rounded-2xl bg-[var(--sand-card)] border border-[var(--sand-line)] shadow-xs hover:border-[var(--sand-teal)] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-bold text-2xl text-[var(--sand-teal)] tabular-nums">
                      {pillar.number}.
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[var(--sand-surface)] border border-[var(--sand-line)] flex items-center justify-center text-[var(--sand-teal)]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-semibold text-lg sm:text-xl text-[var(--sand-ink)] mb-3">
                    {pillar.title[lang]}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--sand-ink-muted)] leading-relaxed">
                    {pillar.description[lang]}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--sand-line)] flex items-center gap-2 text-xs font-medium text-[var(--sand-teal)]">
                  <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>
                    {i === 0 && (lang === 'ar' ? 'واجهات أندرويد 60 إطاراً في الثانية' : '60 FPS constants')}
                    {i === 1 && (lang === 'ar' ? 'أمان محلي 100% بدون تتبع' : 'Zéro serveur tiers imposé')}
                    {i === 2 && (lang === 'ar' ? 'محاذاة كاملة لليمين واليسار' : 'Typographie arabe & RTL soignés')}
                    {i === 3 && (lang === 'ar' ? 'نماذج استرجاع وتضمين ذكية' : 'Pipelines FAISS & FastAPI')}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
