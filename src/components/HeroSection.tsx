import React from 'react';
import { ArrowDown, Smartphone, CheckCircle, Sparkles } from 'lucide-react';
import { Language, PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroSectionProps {
  lang: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang }) => {
  const isRTL = lang === 'ar';
  const { stats, developer } = PORTFOLIO_DATA;

  const copy = {
    fr: {
      kicker: 'Ingénieur & Développeur Mobile Android',
      title: 'Je conçois des applications Android pensées pour un usage quotidien réel.',
      lead: "Développeur mobile & full-stack basé au Maroc. De l'interface moderne Jetpack Compose aux backends asynchrones et modèles d'IA, je construis des outils rapides, sobres et disponibles nativement en arabe, français et anglais.",
      ctaPrimary: 'Explorer les applications',
      ctaSecondary: 'Tester le simulateur direct',
      basedIn: 'Basé au Maroc',
      status: 'Disponible pour missions & architecture mobile',
    },
    ar: {
      kicker: 'مهندس ومطوّر تطبيقات أندرويد وأنظمة سحابية',
      title: 'أصمّم وأطوّر تطبيقات أندرويد مصممة للاستخدام اليومي الفعلي بكفاءة وسرعة.',
      lead: 'مطور تطبيقات أندرويد وبرمجيات متكاملة مقيم في المغرب. من واجهات جيت باك كومبوز التفاعلية إلى الخوادم السحابية ونماذج الذكاء الاصطناعي التطبيقي (RAG)، أركز على أدوات سريعة، تحترم خصوصية المستخدم وتدعم العربية والفرنسية والإنجليزية بطلاقة.',
      ctaPrimary: 'استعراض التطبيقات',
      ctaSecondary: 'تجربة المحاكي المباشر',
      basedIn: 'مقيم في المغرب',
      status: 'متاح للمشاريع الجديدة والاستشارات التقنية',
    },
    en: {
      kicker: 'Android Mobile & Full-Stack Engineer',
      title: 'I craft native Android applications built for genuine everyday utility.',
      lead: 'Mobile & full-stack software engineer based in Morocco. From modern declarative Jetpack Compose interfaces to async backends and RAG pipelines, I build robust, high-performance tools natively available in Arabic, French, and English.',
      ctaPrimary: 'Explore Applications',
      ctaSecondary: 'Try Live Simulator',
      basedIn: 'Based in Morocco',
      status: 'Available for client projects & mobile architecture',
    },
  }[lang];

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-[var(--sand-line)]">
      {/* Subtle Moroccan inspired geometric background watermark / ambient lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="zellige-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="30" cy="30" r="12" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#zellige-pattern)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Hero & Stats */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 mb-4 text-xs sm:text-sm font-semibold tracking-wide text-[var(--sand-teal)]">
              <span className="w-2 h-2 rounded-full bg-[var(--sand-teal)] animate-pulse" />
              <span>{copy.kicker}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[var(--sand-ink)] leading-[1.12] mb-6 [text-wrap:balance]">
              {copy.title}
            </h1>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg text-[var(--sand-ink-muted)] leading-relaxed mb-8 max-w-2xl">
              {copy.lead}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href="#apps"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[var(--sand-ink)] hover:bg-[var(--sand-teal)] rounded-xl transition-all duration-200 shadow-sm"
              >
                <span>{copy.ctaPrimary}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#simulator"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[var(--sand-ink)] bg-[var(--sand-surface)] hover:bg-[var(--sand-card-hover)] border border-[var(--sand-line)] rounded-xl transition-all duration-200"
              >
                <Smartphone className="w-4 h-4 text-[var(--sand-teal)]" />
                <span>{copy.ctaSecondary}</span>
              </a>
            </div>

            {/* Quantitative Stats Row */}
            <div className="pt-6 border-t border-[var(--sand-line)] grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-display font-bold text-2xl sm:text-3xl text-[var(--sand-teal)] tabular-nums leading-none mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs text-[var(--sand-ink-muted)] leading-snug">
                    {stat.label[lang]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Editorial Card & Moroccan Dev Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-[var(--sand-line)] bg-[var(--sand-card)] shadow-lg shadow-black/5">
              {/* Workspace Photo */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-[var(--sand-surface)]">
                <img
                  src="/src/assets/images/hero_dev_workspace_1790442388967.jpg"
                  alt="Espace de travail El Hakouni"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Image Overlaid Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="font-medium tracking-wide drop-shadow-xs">Android & Compose Suite</span>
                  <span className="bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                    Kotlin 2.0+
                  </span>
                </div>
              </div>

              {/* Developer Profile Strip */}
              <div className="p-4 sm:p-5 flex items-center gap-4">
                <div className="relative shrink-0">
                  <img
                    src="/src/assets/images/avatar_developer_1790442425870.jpg"
                    alt={developer.name}
                    referrerPolicy="no-referrer"
                    className="w-13 h-13 rounded-full object-cover border-2 border-[var(--sand-teal)] shadow-xs"
                  />
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[var(--sand-card)]" title="En ligne" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-display font-semibold text-base text-[var(--sand-ink)] truncate">
                      {developer.name}
                    </h3>
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--sand-teal)] shrink-0" />
                  </div>
                  <p className="text-xs text-[var(--sand-ink-muted)] truncate">
                    {copy.basedIn} · {developer.role[lang]}
                  </p>
                  <p className="text-[11px] text-[var(--sand-teal)] font-medium mt-0.5 truncate flex items-center gap-1">
                    <Sparkles className="w-3 h-3 shrink-0" />
                    <span>{copy.status}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Trust Indicator */}
            <div className={`hidden sm:flex items-center gap-3 absolute -bottom-5 ${isRTL ? '-left-4' : '-right-4'} bg-[var(--sand-surface)] border border-[var(--sand-line)] rounded-xl px-4 py-2.5 shadow-md backdrop-blur-sm`}>
              <div className="w-8 h-8 rounded-lg bg-[var(--sand-teal)]/15 text-[var(--sand-teal)] flex items-center justify-center font-bold text-xs">
                M3
              </div>
              <div className="text-xs">
                <span className="font-semibold block text-[var(--sand-ink)]">Material 3 Ready</span>
                <span className="text-[var(--sand-ink-muted)]">Jetpack Compose UI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
