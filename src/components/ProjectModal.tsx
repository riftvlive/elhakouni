import React, { useEffect } from 'react';
import { X, Check, ExternalLink, Smartphone, Cpu, ShieldCheck, Layers } from 'lucide-react';
import { Project, Language } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  lang: Language;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, lang }) => {
  const isRTL = lang === 'ar';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-3xl bg-[var(--sand-card)] text-[var(--sand-ink)] border border-[var(--sand-line)] rounded-2xl shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[var(--sand-line)] bg-[var(--sand-surface)]">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm"
              style={{ backgroundColor: project.color }}
            >
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h3 id="modal-title" className="font-display font-semibold text-lg flex items-center gap-2">
                <span>{project.name}</span>
                <span className="text-sm font-arabic font-normal text-[var(--sand-ink-muted)]">
                  {project.nameAr}
                </span>
              </h3>
              <p className="text-xs text-[var(--sand-ink-muted)]">
                {project.statusLabel[lang]} · 100% Kotlin & Jetpack Compose
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[var(--sand-ink-muted)] hover:text-[var(--sand-ink)] hover:bg-[var(--sand-card)] rounded-xl transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Mockup Preview Image */}
          <div className="relative aspect-16/9 rounded-xl overflow-hidden bg-[var(--sand-surface)] border border-[var(--sand-line)]">
            <img
              src={project.image}
              alt={project.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
              <span className="font-semibold">{project.tagline[lang]}</span>
              <span className="bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded text-[11px]">
                AR · FR · EN
              </span>
            </div>
          </div>

          {/* Long Description */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--sand-ink-muted)] mb-2">
              {lang === 'ar' ? 'نبذة مفصلة عن المشروع' : lang === 'fr' ? 'À propos du projet' : 'Project Overview'}
            </h4>
            <p className="text-sm sm:text-base leading-relaxed text-[var(--sand-ink)]">
              {project.longDescription[lang]}
            </p>
          </div>

          {/* Key Features Grid */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--sand-ink-muted)] mb-3">
              {lang === 'ar' ? 'المزايا التقنية الرئيسية' : lang === 'fr' ? 'Fonctionnalités clés' : 'Key Engineering Features'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features[lang].map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[var(--sand-surface)] border border-[var(--sand-line)] text-xs text-[var(--sand-ink)]"
                >
                  <Check className="w-4 h-4 text-[var(--sand-teal)] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Details Box */}
          <div className="p-4 rounded-xl bg-[var(--sand-surface)] border border-[var(--sand-line)]">
            <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-[var(--sand-teal)]">
              <Layers className="w-4 h-4" />
              <span>
                {lang === 'ar' ? 'المعمارية البرمجية وتدفق البيانات' : lang === 'fr' ? 'Architecture logicielle' : 'Software Architecture'}
              </span>
            </div>
            <p className="text-xs leading-relaxed text-[var(--sand-ink-muted)] mb-3">
              {project.architecture[lang]}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[var(--sand-line)]">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-medium px-2 py-0.5 rounded bg-[var(--sand-card)] text-[var(--sand-ink)] border border-[var(--sand-line)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-[var(--sand-line)] bg-[var(--sand-surface)] flex items-center justify-between gap-3">
          <div className="text-xs text-[var(--sand-ink-muted)]">
            {lang === 'ar' ? 'تصميم وهندسة: El Hakouni' : 'Conception & Ingénierie : El Hakouni'}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-[var(--sand-card)] hover:bg-[var(--sand-card-hover)] border border-[var(--sand-line)] transition-colors"
            >
              {lang === 'ar' ? 'إغلاق' : 'Fermer'}
            </button>
            <a
              href="mailto:contact@elhakouni.net"
              className="px-4 py-2 text-xs font-semibold text-white bg-[var(--sand-teal)] hover:opacity-90 rounded-lg transition-opacity flex items-center gap-1.5"
            >
              <span>{lang === 'ar' ? 'طلب مشروع مماثل' : 'Demander un projet similaire'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
