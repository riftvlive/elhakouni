import React, { useState } from 'react';
import { ArrowUpRight, Smartphone, Sparkles, Database, Terminal, Shield, CheckCircle2 } from 'lucide-react';
import { Project, Language, PORTFOLIO_DATA } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

interface AppsShowcaseProps {
  lang: Language;
}

export const AppsShowcase: React.FC<AppsShowcaseProps> = ({ lang }) => {
  const isRTL = lang === 'ar';
  const { projects } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState<'all' | 'mobile' | 'ai' | 'tool'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const renderGlyph = (type: Project['glyphType'], color: string) => {
    switch (type) {
      case 'calculator':
        return (
          <svg className="w-9 h-9" viewBox="0 0 92 92" fill="none">
            <rect x="8" y="8" width="76" height="76" rx="4" stroke={color} strokeWidth="2.5" />
            <path d="M46 22 L66 46 L46 70 L26 46 Z" stroke={color} strokeWidth="2" />
            <circle cx="46" cy="46" r="6" fill="#B98B2E" />
          </svg>
        );
      case 'exam':
        return (
          <svg className="w-9 h-9" viewBox="0 0 92 92" fill="none">
            <rect x="12" y="12" width="68" height="68" rx="4" stroke={color} strokeWidth="2.5" />
            <path d="M24 58 L40 36 L54 50 L68 28" stroke={color} strokeWidth="2.5" />
            <circle cx="68" cy="28" r="4" fill={color} />
          </svg>
        );
      case 'ai':
        return (
          <svg className="w-9 h-9" viewBox="0 0 92 92" fill="none">
            <circle cx="46" cy="46" r="34" stroke={color} strokeWidth="2.5" />
            <path d="M46 24 L46 46 L62 58" stroke={color} strokeWidth="2" />
            <circle cx="46" cy="46" r="5" fill="#0E6E63" />
          </svg>
        );
      case 'compress':
        return (
          <svg className="w-9 h-9" viewBox="0 0 92 92" fill="none">
            <rect x="14" y="12" width="64" height="68" rx="4" stroke={color} strokeWidth="2.5" />
            <path d="M28 64 L28 32 L64 32 L64 64" stroke={color} strokeWidth="2" />
            <circle cx="46" cy="48" r="9" stroke={color} strokeWidth="2" />
          </svg>
        );
      case 'scoreboard':
        return (
          <svg className="w-9 h-9" viewBox="0 0 92 92" fill="none">
            <rect x="10" y="10" width="72" height="72" rx="4" stroke={color} strokeWidth="2.5" />
            <path d="M24 60 L38 42 L50 54 L68 26" stroke={color} strokeWidth="2" />
          </svg>
        );
      case 'delivery':
        return (
          <svg className="w-9 h-9" viewBox="0 0 92 92" fill="none">
            <rect x="12" y="24" width="68" height="42" rx="4" stroke={color} strokeWidth="2" />
            <circle cx="30" cy="66" r="6" stroke={color} strokeWidth="2.5" />
            <circle cx="62" cy="66" r="6" stroke={color} strokeWidth="2.5" />
          </svg>
        );
      default:
        return <Smartphone className="w-9 h-9 text-[var(--sand-teal)]" />;
    }
  };

  return (
    <section id="apps" className="py-16 md:py-24 border-b border-[var(--sand-line)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header with Functional Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--sand-teal)] block mb-2">
              {lang === 'ar' ? 'سجل الأعمال والمنتجات' : lang === 'fr' ? 'Sélection de projets' : 'Curated Works'}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[var(--sand-ink)]">
              {lang === 'ar' ? 'تطبيقات مصممة بعناية فائقة' : lang === 'fr' ? 'Applications & Projets majeurs' : 'Featured Android & AI Works'}
            </h2>
            <p className="text-sm text-[var(--sand-ink-muted)] mt-2 max-w-xl">
              {lang === 'ar'
                ? 'مجموعة منتقاة من أدوات الحياة اليومية والحاسبات المتخصصة إلى منصات الذكاء الاصطناعي القانوني.'
                : lang === 'fr'
                ? "Du plus simple au plus ambitieux — outils du quotidien, calculatrices spécialisées et plateforme d'intelligence artificielle."
                : 'From ultra-fast daily utilities and offline calculators to applied RAG legal intelligence platforms.'}
            </p>
          </div>

          {/* Interactive Filter Control (Functional Segmented Button Bar) */}
          <div className="flex items-center gap-1 p-1 bg-[var(--sand-surface)] border border-[var(--sand-line)] rounded-xl self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-[var(--sand-card)] text-[var(--sand-ink)] shadow-xs'
                  : 'text-[var(--sand-ink-muted)] hover:text-[var(--sand-ink)]'
              }`}
            >
              {lang === 'ar' ? 'الكل (6)' : lang === 'fr' ? 'Tous (6)' : 'All (6)'}
            </button>
            <button
              onClick={() => setFilter('mobile')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'mobile'
                  ? 'bg-[var(--sand-card)] text-[var(--sand-ink)] shadow-xs'
                  : 'text-[var(--sand-ink-muted)] hover:text-[var(--sand-ink)]'
              }`}
            >
              {lang === 'ar' ? 'أندرويد وكومبوز' : lang === 'fr' ? 'Mobile Android' : 'Mobile'}
            </button>
            <button
              onClick={() => setFilter('ai')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'ai'
                  ? 'bg-[var(--sand-card)] text-[var(--sand-ink)] shadow-xs'
                  : 'text-[var(--sand-ink-muted)] hover:text-[var(--sand-ink)]'
              }`}
            >
              {lang === 'ar' ? 'ذكاء اصطناعي (RAG)' : lang === 'fr' ? 'IA & RAG' : 'AI & RAG'}
            </button>
            <button
              onClick={() => setFilter('tool')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'tool'
                  ? 'bg-[var(--sand-card)] text-[var(--sand-ink)] shadow-xs'
                  : 'text-[var(--sand-ink-muted)] hover:text-[var(--sand-ink)]'
              }`}
            >
              {lang === 'ar' ? 'أدوات خصوصية' : lang === 'fr' ? 'Outils locaux' : 'Utilities'}
            </button>
          </div>
        </div>

        {/* Project Rows Grid */}
        <div className="space-y-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group p-5 sm:p-6 rounded-2xl bg-[var(--sand-card)] hover:bg-[var(--sand-card-hover)] border border-[var(--sand-line)] hover:border-[var(--sand-teal)] transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              {/* Left Zone: Glyph + Information */}
              <div className="flex items-start sm:items-center gap-4 sm:gap-6 flex-1 min-w-0">
                {/* Glyph Avatar */}
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-[var(--sand-surface)] border border-[var(--sand-line)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                  {renderGlyph(project.glyphType, project.color)}
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  {/* Title & Arabic name */}
                  <div className="flex items-baseline gap-2.5 flex-wrap mb-1">
                    <h3 className="font-display font-semibold text-lg sm:text-xl text-[var(--sand-ink)] group-hover:text-[var(--sand-teal)] transition-colors">
                      {project.name}
                    </h3>
                    <span className="text-sm font-arabic font-medium text-[var(--sand-ink-muted)]">
                      {project.nameAr}
                    </span>
                  </div>

                  {/* Anti-Slop Zero-Pill Metadata line with typographic separators */}
                  <div className="flex items-center gap-2 text-xs text-[var(--sand-ink-muted)] mb-2.5 flex-wrap">
                    <span className="font-medium text-[var(--sand-ink)]">{project.statusLabel[lang]}</span>
                    <span aria-hidden="true" className="text-[var(--sand-line)]">·</span>
                    <span>{project.tagline[lang]}</span>
                    <span aria-hidden="true" className="text-[var(--sand-line)]">·</span>
                    <span>Kotlin & Compose</span>
                  </div>

                  {/* Prose Description */}
                  <p className="text-xs sm:text-sm text-[var(--sand-ink-muted)] line-clamp-2 max-w-3xl leading-relaxed mb-3">
                    {project.description[lang]}
                  </p>

                  {/* Stack items as subtle muted text chips */}
                  <div className="flex items-center gap-2 flex-wrap">
                    {project.stack.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium text-[var(--sand-ink-muted)] px-2 py-0.5 rounded bg-[var(--sand-surface)] border border-[var(--sand-line)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Zone: Action Button */}
              <div className="shrink-0 flex items-center justify-end md:self-center pt-2 md:pt-0 border-t md:border-t-0 border-[var(--sand-line)]">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[var(--sand-ink)] bg-[var(--sand-surface)] group-hover:bg-[var(--sand-teal)] group-hover:text-white rounded-xl transition-all duration-200 border border-[var(--sand-line)] group-hover:border-transparent"
                >
                  <span>{lang === 'ar' ? 'عرض التفاصيل والمعمارية' : lang === 'fr' ? 'Architecture & Détails' : 'View Architecture'}</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
      />
    </section>
  );
};
