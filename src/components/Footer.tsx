import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Github, Linkedin, Shield } from 'lucide-react';
import { Language, PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isRTL = lang === 'ar';
  const { developer } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(developer.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copy = {
    fr: {
      heading: "Une idée d'application à concrétiser ?",
      lead: "Je conçois des applications Android complètes, de l'architecture à la publication sur le Play Store, pour le marché marocain et au-delà.",
      directEmail: "Adresse email directe",
      copySuccess: "Email copié dans le presse-papier !",
      rights: "Tous droits réservés. Conçu et développé avec passion au Maroc.",
      guarantee: "100% Natif · Aucun traqueur · Confidentialité garantie",
    },
    ar: {
      heading: "هل لديك فكرة تطبيق أندرويد ترغب في تجسيدها على أرض الواقع؟",
      lead: "أقوم بتطوير تطبيقات أندرويد متكاملة، من هندسة الواجهات حتى النشر على متجر Google Play، للمستخدمين في المغرب وحول العالم.",
      directEmail: "البريد الإلكتروني المباشر",
      copySuccess: "تم نسخ البريد بنجاح !",
      rights: "جميع الحقوق محفوظة. صُمم وطُوّر باعتزاز في المغرب.",
      guarantee: "تطوير أصلي 100% · بدون تتبع · خصوصية تامة للمستخدم",
    },
    en: {
      heading: "Ready to build your next Android application?",
      lead: "I engineer end-to-end native Android applications, from Jetpack Compose architecture to Play Store deployment, for Moroccan and international markets.",
      directEmail: "Direct Email Address",
      copySuccess: "Email copied to clipboard!",
      rights: "All rights reserved. Designed and engineered in Morocco.",
      guarantee: "100% Native · Zero Trackers · Privacy First",
    },
  }[lang];

  return (
    <footer id="contact" className="py-16 md:py-20 bg-[var(--sand-bg)] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-[var(--sand-line)]">
          {/* Main Call to Action Column */}
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--sand-teal)] block">
              {lang === 'ar' ? 'تواصل وبدء العمل' : 'Contact & Collaboration'}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[var(--sand-ink)] max-w-xl">
              {copy.heading}
            </h2>
            <p className="text-sm sm:text-base text-[var(--sand-ink-muted)] max-w-2xl leading-relaxed">
              {copy.lead}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${developer.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[var(--sand-teal)] hover:bg-[#0b584f] rounded-xl transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4" />
                <span>{developer.email}</span>
                <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
              </a>

              <button
                onClick={copyEmail}
                type="button"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-[var(--sand-ink)] bg-[var(--sand-surface)] hover:bg-[var(--sand-card-hover)] border border-[var(--sand-line)] rounded-xl transition-colors"
                title="Copier l'adresse email"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs">{copy.copySuccess}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="text-xs">{lang === 'ar' ? 'نسخ البريد' : 'Copier'}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social & Verification Badges */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="p-4 rounded-xl bg-[var(--sand-surface)] border border-[var(--sand-line)]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[var(--sand-ink)] mb-1">
                <Shield className="w-4 h-4 text-[var(--sand-teal)]" />
                <span>{developer.location[lang]}</span>
              </div>
              <p className="text-xs text-[var(--sand-ink-muted)]">
                {copy.guarantee}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase font-semibold text-[var(--sand-ink-muted)] block">
                {lang === 'ar' ? 'حسابات ومراجع برمجية' : 'Profils professionnels'}
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={developer.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs text-[var(--sand-ink-muted)] hover:text-[var(--sand-ink)] transition-colors p-2 rounded-lg bg-[var(--sand-surface)] border border-[var(--sand-line)]"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={developer.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs text-[var(--sand-ink-muted)] hover:text-[var(--sand-ink)] transition-colors p-2 rounded-lg bg-[var(--sand-surface)] border border-[var(--sand-line)]"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--sand-ink-muted)]">
          <div>
            © {new Date().getFullYear()} {developer.name} · {developer.website}
          </div>
          <div>{copy.rights}</div>
        </div>
      </div>
    </footer>
  );
};
