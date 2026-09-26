import React, { useState } from 'react';
import { Calculator, Check, Copy, Send, Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import { Language } from '../data/portfolioData';

interface ProjectEstimatorProps {
  lang: Language;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ lang }) => {
  const isRTL = lang === 'ar';
  const [projectType, setProjectType] = useState<'native_android' | 'ai_rag' | 'full_product' | 'migration'>('native_android');
  
  const [features, setFeatures] = useState({
    offline: true,
    trilingual: true,
    billing: false,
    playStore: true,
  });

  const [copied, setCopied] = useState(false);

  const toggleFeature = (key: keyof typeof features) => {
    setFeatures(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Estimate computation
  let baseWeeks = 3;
  if (projectType === 'ai_rag') baseWeeks = 4;
  if (projectType === 'full_product') baseWeeks = 6;
  if (projectType === 'migration') baseWeeks = 2.5;

  let extraDays = 0;
  if (features.offline) extraDays += 3;
  if (features.trilingual) extraDays += 3;
  if (features.billing) extraDays += 4;
  if (features.playStore) extraDays += 3;

  const totalWeeksMin = Math.round(baseWeeks + extraDays / 7);
  const totalWeeksMax = Math.round(totalWeeksMin * 1.3);

  const typeLabels = {
    native_android: {
      fr: 'Application Android Native (Jetpack Compose)',
      ar: 'تطبيق أندرويد نقي (كوتلن وجيت باك كومبوز)',
      en: 'Native Android App (Jetpack Compose)',
    },
    ai_rag: {
      fr: 'Plateforme IA & RAG (FastAPI + Embeddings)',
      ar: 'منظومة ذكاء اصطناعي RAG وخوادم سحابية',
      en: 'AI & RAG Pipeline (FastAPI + Embeddings)',
    },
    full_product: {
      fr: 'Produit Clé en Main (App Android + Backend + Web Admin)',
      ar: 'مشروع متكامل (تطبيق + خادم + لوحة تحكم)',
      en: 'Turnkey Solution (Mobile + Backend + Admin)',
    },
    migration: {
      fr: 'Modernisation & Migration vers Compose',
      ar: 'تحديث تطبيق قديم والترقية إلى Compose',
      en: 'Modernization & Migration to Compose',
    },
  };

  const featureLabels = {
    offline: {
      fr: 'Fonctionnement 100% Hors-Ligne (Room / Cache)',
      ar: 'تشغيل بدون إنترنت (تخزين محلي آمن في Room)',
      en: '100% Offline Capability (Room DB / Local)',
    },
    trilingual: {
      fr: 'Support Trilingue Natif (Arabe RTL, Français, Anglais)',
      ar: 'دعم ثلاثي اللغات مع محاذاة RTL كاملة للعربية',
      en: 'Native Trilingual Support (Full RTL Arabic, FR, EN)',
    },
    billing: {
      fr: 'Facturation & Paiement (Play Billing en MAD ou Stripe)',
      ar: 'نظام الدفع والاشتراكات (بالدرهم المغربي أو سترايب)',
      en: 'Monetization & Billing (Google Play MAD / Stripe)',
    },
    playStore: {
      fr: 'Conformité & Publication sur Google Play Store',
      ar: 'تجهيز ملفات النشر على متجر Google Play Store',
      en: 'Google Play Store Release & Compliance',
    },
  };

  const generatedBrief = `${lang === 'ar' ? 'طلب استشارة ومشروع جديد' : 'Demande de projet & estimation'} :
- ${lang === 'ar' ? 'نوع المشروع' : 'Type'} : ${typeLabels[projectType][lang]}
- ${lang === 'ar' ? 'المتطلبات المحددة' : 'Fonctionnalités'} :
  * ${featureLabels.offline[lang]} : ${features.offline ? '✓' : '✗'}
  * ${featureLabels.trilingual[lang]} : ${features.trilingual ? '✓' : '✗'}
  * ${featureLabels.billing[lang]} : ${features.billing ? '✓' : '✗'}
  * ${featureLabels.playStore[lang]} : ${features.playStore ? '✓' : '✗'}
- ${lang === 'ar' ? 'الجدول الزمني التقريبي' : 'Délai estimé'} : ${totalWeeksMin} à ${totalWeeksMax} ${lang === 'ar' ? 'أسابيع' : 'semaines'}.`;

  const copyBrief = () => {
    navigator.clipboard.writeText(generatedBrief);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoUrl = `mailto:contact@elhakouni.net?subject=${encodeURIComponent(
    lang === 'ar' ? 'طلب مشروع: ' + typeLabels[projectType].ar : 'Nouveau Projet : ' + typeLabels[projectType].fr
  )}&body=${encodeURIComponent(generatedBrief)}`;

  return (
    <section id="estimator" className="py-16 md:py-24 border-b border-[var(--sand-line)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-[var(--sand-clay)] bg-[var(--sand-surface)] border border-[var(--sand-line)] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'حاسبة المشروع' : lang === 'fr' ? 'Planificateur interactif' : 'Scope Estimator'}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[var(--sand-ink)] mb-3">
            {lang === 'ar' ? 'قدّر مدة ومواصفات تطبيقك القادم' : lang === 'fr' ? 'Estimez le périmètre de votre projet' : 'Estimate Your Project Scope & Timeline'}
          </h2>
          <p className="text-sm sm:text-base text-[var(--sand-ink-muted)]">
            {lang === 'ar'
              ? 'اختر طبيعة التطبيق والميزات المطلوبة للحصول على تقدير مباشر للجدول الزمني وصياغة جاهزة للتواصل.'
              : lang === 'fr'
              ? 'Sélectionnez le type d’application et les fonctionnalités nécessaires pour générer une estimation de sprint.'
              : 'Select project archetype and parameters to project engineering sprints and generate an immediate brief.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Project Type */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[var(--sand-ink-muted)] block mb-3">
                {lang === 'ar' ? '1. اختر طبيعة المشروع' : lang === 'fr' ? '1. Type d’architecture' : '1. Architecture Archetype'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(['native_android', 'ai_rag', 'full_product', 'migration'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setProjectType(type)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      projectType === type
                        ? 'bg-[var(--sand-card)] border-[var(--sand-teal)] ring-1 ring-[var(--sand-teal)] shadow-xs font-semibold text-[var(--sand-ink)]'
                        : 'bg-[var(--sand-surface)]/60 border-[var(--sand-line)] text-[var(--sand-ink-muted)] hover:bg-[var(--sand-surface)]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span>{typeLabels[type][lang]}</span>
                      {projectType === type && <Check className="w-4 h-4 text-[var(--sand-teal)] shrink-0 ml-2" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Specific Requirements */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[var(--sand-ink-muted)] block mb-3">
                {lang === 'ar' ? '2. الميزات والاشتراطات الهندسية' : lang === 'fr' ? '2. Exigences spécifiques' : '2. Key Requirements'}
              </label>
              <div className="space-y-2.5">
                {(Object.keys(features) as Array<keyof typeof features>).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => toggleFeature(key)}
                    className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                      features[key]
                        ? 'bg-[var(--sand-card)] border-[var(--sand-teal)] text-[var(--sand-ink)] shadow-xs'
                        : 'bg-[var(--sand-surface)]/50 border-[var(--sand-line)] text-[var(--sand-ink-muted)] hover:bg-[var(--sand-surface)]'
                    }`}
                  >
                    <div className="flex items-center gap-3 text-xs">
                      <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                        features[key] ? 'bg-[var(--sand-teal)] border-[var(--sand-teal)] text-white' : 'border-[var(--sand-line)] bg-transparent'
                      }`}>
                        {features[key] && <Check className="w-3 h-3" />}
                      </div>
                      <span className={features[key] ? 'font-medium' : ''}>{featureLabels[key][lang]}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results & Actions Column */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-[var(--sand-card)] border border-[var(--sand-line)] shadow-lg shadow-black/5">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--sand-line)] mb-5">
                <span className="text-xs uppercase font-semibold text-[var(--sand-ink-muted)]">
                  {lang === 'ar' ? 'ملخص التقدير التقني' : 'Estimation prévisionnelle'}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-[var(--sand-teal)] font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Kotlin / FastAPI</span>
                </span>
              </div>

              {/* Delivery Sprint Timeline */}
              <div className="p-4 rounded-xl bg-[var(--sand-surface)] mb-5 border border-[var(--sand-line)]">
                <div className="flex items-center gap-2 text-xs text-[var(--sand-ink-muted)] mb-1">
                  <Clock className="w-4 h-4 text-[var(--sand-teal)]" />
                  <span>{lang === 'ar' ? 'المدة الزمنية التقديرية للإنجاز' : 'Délai moyen de livraison'}</span>
                </div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-[var(--sand-ink)] tabular-nums">
                  {totalWeeksMin} – {totalWeeksMax}{' '}
                  <span className="text-sm font-normal text-[var(--sand-ink-muted)]">
                    {lang === 'ar' ? 'أسابيع عمل' : 'semaines'}
                  </span>
                </div>
                <p className="text-[11px] text-[var(--sand-ink-muted)] mt-1.5">
                  {lang === 'ar'
                    ? 'يشمل دورات التطوير، اختبارات الأجهزة الحقيقية، والتوثيق البرمجي.'
                    : 'Inclut conception, développement Compose, tests sur terminaux réels et préparation Play Store.'}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5">
                <a
                  href={mailtoUrl}
                  className="w-full py-3 px-4 rounded-xl bg-[var(--sand-teal)] hover:opacity-95 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-opacity shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'إرسال الملخص وبدء المناقشة' : 'Envoyer ce brief par email'}</span>
                </a>

                <button
                  type="button"
                  onClick={copyBrief}
                  className="w-full py-2.5 px-4 rounded-xl bg-[var(--sand-surface)] hover:bg-[var(--sand-card-hover)] border border-[var(--sand-line)] text-[var(--sand-ink)] font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>{lang === 'ar' ? 'تم نسخ الملخص للحافظة !' : 'Copié dans le presse-papier !'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>{lang === 'ar' ? 'نسخ نص الملخص' : 'Copier les spécifications'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
