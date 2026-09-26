import React, { useState } from 'react';
import { 
  Fuel, 
  Users, 
  RotateCcw, 
  Check, 
  ShieldCheck, 
  FileText, 
  Scale, 
  Search, 
  Sparkles,
  Trophy,
  Zap,
  Volume2,
  ChevronRight
} from 'lucide-react';
import { Language } from '../data/portfolioData';

interface PhoneSimulatorProps {
  lang: Language;
}

export const PhoneSimulator: React.FC<PhoneSimulatorProps> = ({ lang }) => {
  const isRTL = lang === 'ar';
  const [activeApp, setActiveApp] = useState<'hasibti' | 'examscore' | 'mediashrink' | 'quickscore' | 'legalai'>('hasibti');

  // Hasibti Interactive State
  const [fuelDistance, setFuelDistance] = useState<number>(240);
  const [fuelRate, setFuelRate] = useState<number>(6.5);
  const [fuelPrice, setFuelPrice] = useState<number>(14.2);
  const [passengers, setPassengers] = useState<number>(3);
  const totalFuelCost = ((fuelDistance / 100) * fuelRate * fuelPrice);
  const perPersonCost = passengers > 0 ? totalFuelCost / passengers : totalFuelCost;

  // ExamScore Interactive State
  const [examCurrentScore, setExamCurrentScore] = useState<number>(14.5);
  const [examTallyList, setExamTallyList] = useState<number[]>([4, 3.5, 5, 2]);
  const [completedCopies, setCompletedCopies] = useState<number[]>([15, 17.5, 13, 16]);

  const addScoreIncrement = (val: number) => {
    if (examCurrentScore + val <= 20) {
      setExamCurrentScore(prev => +(prev + val).toFixed(1));
      setExamTallyList(prev => [...prev, val]);
    }
  };

  const undoScoreIncrement = () => {
    if (examTallyList.length > 0) {
      const last = examTallyList[examTallyList.length - 1];
      setExamCurrentScore(prev => Math.max(0, +(prev - last).toFixed(1)));
      setExamTallyList(prev => prev.slice(0, -1));
    }
  };

  const saveExamCopy = () => {
    setCompletedCopies(prev => [...prev, examCurrentScore]);
    setExamCurrentScore(0);
    setExamTallyList([]);
  };

  // MediaShrink Interactive State
  const [compressQuality, setCompressQuality] = useState<number>(75);
  const originalSizeMB = 4.8;
  const compressedSizeMB = +(originalSizeMB * (compressQuality / 100) * 0.18).toFixed(2);
  const savingsPercent = Math.round((1 - compressedSizeMB / originalSizeMB) * 100);

  // QuickScore Interactive State
  const [players, setPlayers] = useState([
    { id: 1, name: 'Yassine', score: 42, color: '#0E6E63' },
    { id: 2, name: 'Amine', score: 38, color: '#B5502F' },
    { id: 3, name: 'Sarah', score: 45, color: '#B98B2E' },
    { id: 4, name: 'Omar', score: 31, color: '#5E5648' },
  ]);

  const updatePlayerScore = (id: number, delta: number) => {
    setPlayers(prev => prev.map(p => p.id === id ? { ...p, score: Math.max(0, p.score + delta) } : p));
  };

  const highestScore = Math.max(...players.map(p => p.score));

  // Legal AI Interactive State
  const [legalQuery, setLegalQuery] = useState<'trial_period' | 'severance' | 'overtime'>('trial_period');

  const legalAnswers = {
    trial_period: {
      question: {
        fr: "Durée de la période d'essai selon le Code du travail marocain ?",
        ar: "ما هي مدة فترة الاختبار (التدريب) وفق مدونة الشغل المغربية؟",
        en: "What is the probation period length under Moroccan Labor Code?",
      },
      article: 'Loi n° 65-99, Articles 13 & 14 (Code du travail)',
      summary: {
        fr: "Contrat à durée indéterminée (CDI) : Cadres et assimilés = 3 mois ; Employés = 1 mois et demi ; Ouvriers = 15 jours. Renouvelable une seule fois.",
        ar: "في عقود الشغل غير محددة المدة (CDI): الأطر وأشباههم = 3 أشهر؛ المستخدمون = شهر ونصف؛ العمال = 15 يوماً. قابلة للتجديد مرة واحدة فقط قانونياً.",
        en: "Permanent contracts (CDI): Executives & management = 3 months; Staff/Employees = 1.5 months; Laborers = 15 days. Renewable once legally.",
      },
      citation: 'BO n° 5210 du 6 mai 2004',
      confidence: 99.2,
    },
    severance: {
      question: {
        fr: "Calcul des indemnités de licenciement abusif au Maroc ?",
        ar: "كيفية احتساب تعويضات الفصل التعسفي عن العمل في المغرب؟",
        en: "How are wrongful termination severance damages computed in Morocco?",
      },
      article: 'Loi n° 65-99, Articles 52, 53 & 59',
      summary: {
        fr: "Trois volets cumulatifs : 1) Indemnité de préavis, 2) Indemnité légale de licenciement selon l'ancienneté (96h à 240h/an), 3) Dommages et intérêts (1,5 mois/an plafonné à 36 mois).",
        ar: "تشمل ثلاثة تعويضات: 1) أجل الإخطار، 2) تعويض الفصل القانوني حسب الأقدمية (من 96 إلى 240 ساعة/سنة)، 3) الضرر المحدد في شهر ونصف عن كل سنة عمل بسقف أقصاه 36 شهراً.",
        en: "Three cumulative claims: 1) Notice period indemnity, 2) Statutory severance per tenure bracket, 3) Arbitrary dismissal damages (1.5 months/year capped at 36 months).",
      },
      citation: 'Jurisprudence Cour de Cassation Marocaine',
      confidence: 98.7,
    },
    overtime: {
      question: {
        fr: "Majoration des heures supplémentaires légales ?",
        ar: "نسبة الزيادة القانونية عن الساعات الإضافية بالمغرب؟",
        en: "Statutory overtime wage premiums in Moroccan law?",
      },
      article: 'Loi n° 65-99, Articles 196 à 204',
      summary: {
        fr: "+25% le jour (6h à 21h les jours ouvrables), +50% la nuit (21h à 6h). Ces taux passent respectivement à +50% et +100% les jours de repos hebdomadaire ou fériés.",
        ar: "+25% نهاراً (من 6ص إلى 9م أيام العمل)، +50% ليلاً (من 9م إلى 6ص). وترتفع هذه النسب إلى 50% نهاراً و 100% ليلاً خلال أيام العطلة الأسبوعية والأعياد.",
        en: "+25% daytime on standard working days, +50% nighttime. Premiums increase to 50% (day) and 100% (night) on designated weekly rest days or public holidays.",
      },
      citation: 'Bulletin Officiel n° 5210',
      confidence: 99.5,
    },
  };

  const appTabs = [
    { id: 'hasibti', name: 'Hasibti', nameAr: 'حاسبتي', icon: Fuel, color: '#0E6E63' },
    { id: 'examscore', name: 'ExamScore', nameAr: 'حاسبة النقاط', icon: FileText, color: '#B5502F' },
    { id: 'mediashrink', name: 'MediaShrink', nameAr: 'ميديا شرينك', icon: ShieldCheck, color: '#0E6E63' },
    { id: 'quickscore', name: 'QuickScore', nameAr: 'كويك سكور', icon: Trophy, color: '#B98B2E' },
    { id: 'legalai', name: 'IA Juridique', nameAr: 'الذكاء القانوني', icon: Scale, color: '#B98B2E' },
  ];

  return (
    <section id="simulator" className="py-16 md:py-24 border-b border-[var(--sand-line)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-[var(--sand-teal)] bg-[var(--sand-surface)] border border-[var(--sand-line)] mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'محاكاة حية وتفاعلية' : lang === 'fr' ? 'Démonstrateur interactif' : 'Live Interactive Simulator'}</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[var(--sand-ink)] mb-3">
            {lang === 'ar' ? 'جرّب وظائف التطبيقات مباشرة على الشاشة' : lang === 'fr' ? "Testez l'ergonomie réelle de mes applications" : 'Experience the real tactile ergonomics of my apps'}
          </h2>
          <p className="text-sm sm:text-base text-[var(--sand-ink-muted)]">
            {lang === 'ar'
              ? 'اختر تطبيقاً من الشريط أدناه وتفاعل مع منطق الحساب والواجهة المحمولة المباشرة'
              : lang === 'fr'
              ? 'Sélectionnez une application ci-dessous et interagissez avec les règles de calcul et les écrans réels'
              : 'Select an app below to interact with real calculation engines and native Android UI flows'}
          </p>
        </div>

        {/* Simulator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: App Selector & Technical Explanation */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--sand-ink-muted)]">
              {lang === 'ar' ? 'اختر التطبيق للتجربة' : lang === 'fr' ? "Choisir l'application à tester" : 'Select app to test'}
            </h3>

            <div className="space-y-2">
              {appTabs.map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeApp === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveApp(tab.id as any)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-[var(--sand-card)] border-[var(--sand-teal)] shadow-md shadow-black/5 ring-1 ring-[var(--sand-teal)]'
                        : 'bg-[var(--sand-surface)]/60 border-[var(--sand-line)] hover:bg-[var(--sand-surface)] text-[var(--sand-ink-muted)]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-white"
                        style={{ backgroundColor: tab.color }}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-[var(--sand-ink)] flex items-center gap-2">
                          <span>{tab.name}</span>
                          <span className="text-xs font-arabic text-[var(--sand-ink-muted)]">{tab.nameAr}</span>
                        </div>
                        <div className="text-xs text-[var(--sand-ink-muted)]">
                          {tab.id === 'hasibti' && (lang === 'ar' ? '29 حاسبة بدون إنترنت' : 'Calculatrices du quotidien')}
                          {tab.id === 'examscore' && (lang === 'ar' ? 'تنقيط سريع للأوراق' : 'Grille tactile enseignants')}
                          {tab.id === 'mediashrink' && (lang === 'ar' ? 'ضغط محلي مشفر' : 'Compression locale sans cloud')}
                          {tab.id === 'quickscore' && (lang === 'ar' ? 'لوحة ألعاب طاولة' : 'Suivi de scores gestuel')}
                          {tab.id === 'legalai' && (lang === 'ar' ? 'محرك RAG بالذكاء الاصطناعي' : 'Pipeline RAG juridique')}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 text-[var(--sand-ink-muted)] ${isRTL ? 'rotate-180' : ''}`} />
                  </button>
                );
              })}
            </div>

            {/* Architecture note card */}
            <div className="p-4 rounded-xl bg-[var(--sand-surface)] border border-[var(--sand-line)] text-xs text-[var(--sand-ink-muted)] leading-relaxed">
              <span className="font-semibold text-[var(--sand-ink)] block mb-1">
                {lang === 'ar' ? 'ملاحظة المعمارية البرمجية' : lang === 'fr' ? 'Architecture & Robustesse' : 'Engineering Principle'}
              </span>
              {lang === 'ar'
                ? 'كافة هذه العمليات الحسابية والمعالجة تتم بشكل فوري وتفاعلي، محاكية تماماً لمنطق Kotlin و StateFlow في أجهزة أندرويد الحقيقية بدون أي تأخير.'
                : lang === 'fr'
                ? "Toutes ces interactions reproduisent fidèlement la logique de StateFlow et Coroutines exécutée nativement sur les terminaux Android, avec une latence nulle."
                : 'These state interactions faithfully mirror the exact StateFlow and Coroutine architectures deployed in production APKs, with zero round-trip latency.'}
            </div>
          </div>

          {/* Right Column: Physical Android Phone Mockup */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[370px] aspect-[9/18.5] rounded-[42px] p-3 bg-neutral-900 border-4 border-neutral-700/80 shadow-2xl shadow-black/20 ring-1 ring-white/10">
              {/* Phone Camera Hole & Speaker */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-neutral-950 rounded-full flex items-center justify-center gap-2 z-30">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-800 border border-neutral-700" />
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
              </div>

              {/* Phone Display Area */}
              <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-[var(--sand-bg)] text-[var(--sand-ink)] flex flex-col border border-neutral-800">
                {/* Android Status Bar */}
                <div className="pt-3 px-6 pb-1 text-[11px] font-mono-numbers flex justify-between items-center text-[var(--sand-ink-muted)] shrink-0 z-20">
                  <span>10:42</span>
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span>5G</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Android App Bar */}
                <div className="px-4 py-2 border-b border-[var(--sand-line)] flex items-center justify-between shrink-0 bg-[var(--sand-surface)]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--sand-teal)]" />
                    <span className="font-display font-semibold text-sm">
                      {activeApp === 'hasibti' && 'Hasibti · حاسبتي'}
                      {activeApp === 'examscore' && 'ExamScore · التنقيط'}
                      {activeApp === 'mediashrink' && 'MediaShrink · الضغط'}
                      {activeApp === 'quickscore' && 'QuickScore · النقاط'}
                      {activeApp === 'legalai' && 'Morocco Law AI · القانون'}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-[var(--sand-teal)] bg-[var(--sand-teal)]/10 px-1.5 py-0.5 rounded">
                    Compose
                  </span>
                </div>

                {/* App Screen Content (Scrollable) */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
                  {/* APP 1: HASIBTI SIMULATOR */}
                  {activeApp === 'hasibti' && (
                    <div className="space-y-3.5 animate-fadeIn">
                      <div className="bg-[var(--sand-card)] p-3 rounded-xl border border-[var(--sand-line)] shadow-xs">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-xs text-[var(--sand-ink)] flex items-center gap-1.5">
                            <Fuel className="w-3.5 h-3.5 text-[var(--sand-teal)]" />
                            <span>{lang === 'ar' ? 'حاسبة نفقات الوقود والسفر' : 'Trajet & Carburant'}</span>
                          </span>
                          <span className="text-[10px] text-[var(--sand-teal)] font-medium">MAD (درهم)</span>
                        </div>

                        {/* Distance Slider */}
                        <div className="mb-2">
                          <div className="flex justify-between text-[11px] mb-1">
                            <span className="text-[var(--sand-ink-muted)]">
                              {lang === 'ar' ? 'المسافة (كلم)' : 'Distance (km)'}
                            </span>
                            <span className="font-mono-numbers font-semibold">{fuelDistance} km</span>
                          </div>
                          <input
                            type="range"
                            min="20"
                            max="600"
                            step="10"
                            value={fuelDistance}
                            onChange={(e) => setFuelDistance(Number(e.target.value))}
                            className="w-full accent-[var(--sand-teal)] cursor-pointer h-1.5 bg-[var(--sand-surface)] rounded-lg"
                          />
                        </div>

                        {/* Consumption Rate */}
                        <div className="mb-2">
                          <div className="flex justify-between text-[11px] mb-1">
                            <span className="text-[var(--sand-ink-muted)]">
                              {lang === 'ar' ? 'الاستهلاك (لتر/100 كلم)' : 'Consommation (L/100km)'}
                            </span>
                            <span className="font-mono-numbers font-semibold">{fuelRate} L</span>
                          </div>
                          <input
                            type="range"
                            min="4.0"
                            max="12.0"
                            step="0.5"
                            value={fuelRate}
                            onChange={(e) => setFuelRate(Number(e.target.value))}
                            className="w-full accent-[var(--sand-teal)] cursor-pointer h-1.5 bg-[var(--sand-surface)] rounded-lg"
                          />
                        </div>

                        {/* Passengers Count */}
                        <div>
                          <div className="flex justify-between text-[11px] mb-1">
                            <span className="text-[var(--sand-ink-muted)]">
                              {lang === 'ar' ? 'عدد المسافرين للمشاركة' : 'Passagers'}
                            </span>
                            <span className="font-mono-numbers font-semibold">{passengers} pers.</span>
                          </div>
                          <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((num) => (
                              <button
                                key={num}
                                onClick={() => setPassengers(num)}
                                className={`flex-1 py-1 rounded text-[11px] font-semibold transition-colors ${
                                  passengers === num
                                    ? 'bg-[var(--sand-teal)] text-white'
                                    : 'bg-[var(--sand-surface)] text-[var(--sand-ink-muted)]'
                                }`}
                              >
                                {num}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Result Box */}
                      <div className="p-3 rounded-xl bg-[var(--sand-teal-light)] border border-[var(--sand-teal)]/30">
                        <div className="text-[11px] text-[var(--sand-ink-muted)] mb-0.5">
                          {lang === 'ar' ? 'التكلفة الإجمالية المقدرة' : 'Coût total estimé'}
                        </div>
                        <div className="font-display font-bold text-xl text-[var(--sand-teal)] font-mono-numbers">
                          {totalFuelCost.toFixed(2)} MAD
                        </div>
                        {passengers > 1 && (
                          <div className="mt-1.5 pt-1.5 border-t border-[var(--sand-teal)]/20 flex justify-between text-[11px]">
                            <span className="text-[var(--sand-ink-muted)]">
                              {lang === 'ar' ? 'حصة كل راكب:' : 'Par passager :'}
                            </span>
                            <span className="font-semibold text-[var(--sand-ink)] font-mono-numbers">
                              {perPersonCost.toFixed(2)} MAD
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* APP 2: EXAMSCORE SIMULATOR */}
                  {activeApp === 'examscore' && (
                    <div className="space-y-3 animate-fadeIn">
                      <div className="bg-[var(--sand-card)] p-3 rounded-xl border border-[var(--sand-line)]">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs text-[var(--sand-ink-muted)]">
                            {lang === 'ar' ? 'الورقة رقم #14' : 'Copie en cours (#14)'}
                          </span>
                          <button
                            onClick={undoScoreIncrement}
                            className="text-[11px] text-[var(--sand-clay)] hover:underline flex items-center gap-1"
                          >
                            <RotateCcw className="w-3 h-3" />
                            <span>{lang === 'ar' ? 'تراجع' : 'Annuler'}</span>
                          </button>
                        </div>

                        {/* Big Score Display */}
                        <div className="text-center py-2 bg-[var(--sand-surface)] rounded-lg mb-3">
                          <span className="text-xs text-[var(--sand-ink-muted)] block">
                            {lang === 'ar' ? 'المجموع الحالي' : 'Total calculé'}
                          </span>
                          <span className="font-display font-bold text-2xl text-[var(--sand-clay)] font-mono-numbers">
                            {examCurrentScore.toFixed(1)}
                            <span className="text-sm font-normal text-[var(--sand-ink-muted)]"> / 20</span>
                          </span>
                        </div>

                        {/* Touch Keypad */}
                        <div className="grid grid-cols-3 gap-1.5">
                          {[0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 4.0, 5.0].map((val) => (
                            <button
                              key={val}
                              onClick={() => addScoreIncrement(val)}
                              className="py-2.5 rounded-lg bg-[var(--sand-surface)] hover:bg-[var(--sand-clay)] hover:text-white font-mono-numbers font-semibold text-xs transition-colors active:scale-95 border border-[var(--sand-line)]"
                            >
                              +{val}
                            </button>
                          ))}
                          <button
                            onClick={saveExamCopy}
                            className="py-2.5 rounded-lg bg-[var(--sand-clay)] text-white font-semibold text-xs hover:opacity-90 active:scale-95 transition-opacity"
                          >
                            {lang === 'ar' ? 'حفظ ✓' : 'Valider'}
                          </button>
                        </div>
                      </div>

                      {/* Class Stats Summary */}
                      <div className="text-[11px] p-2.5 bg-[var(--sand-surface)] rounded-xl border border-[var(--sand-line)] flex justify-between items-center">
                        <span>
                          {lang === 'ar' ? `الأوراق المصححة: ${completedCopies.length}` : `Copies notées : ${completedCopies.length}`}
                        </span>
                        <span className="font-mono-numbers font-semibold text-[var(--sand-clay)]">
                          {lang === 'ar' ? 'المعدل: ' : 'Moyenne : '}
                          {(completedCopies.reduce((a, b) => a + b, 0) / completedCopies.length).toFixed(2)}/20
                        </span>
                      </div>
                    </div>
                  )}

                  {/* APP 3: MEDIASHRINK SIMULATOR */}
                  {activeApp === 'mediashrink' && (
                    <div className="space-y-3 animate-fadeIn">
                      <div className="bg-[var(--sand-card)] p-3 rounded-xl border border-[var(--sand-line)]">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-xs">{lang === 'ar' ? 'ضغط الصور والأفلام' : 'Compression directe'}</span>
                          <span className="text-[10px] text-emerald-600 bg-emerald-500/10 px-1.5 py-0.5 rounded font-medium">
                            100% Hors-ligne
                          </span>
                        </div>

                        {/* Visual Image Comparison Frame */}
                        <div className="relative aspect-16/10 rounded-lg overflow-hidden bg-neutral-800 mb-3 border border-neutral-700">
                          <img
                            src="/src/assets/images/project_hasibti_mockup_1790442401347.jpg"
                            alt="Preview"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-xs text-white text-[10px] px-2 py-0.5 rounded">
                            {savingsPercent}% de gain
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-xs text-emerald-400 text-[10px] px-2 py-0.5 rounded flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3" />
                            <span>GPS Exif Scrubbed</span>
                          </div>
                        </div>

                        {/* Quality Slider */}
                        <div className="mb-2">
                          <div className="flex justify-between text-[11px] mb-1">
                            <span className="text-[var(--sand-ink-muted)]">
                              {lang === 'ar' ? 'مستوى الجودة المطلوب' : 'Qualité de sortie'}
                            </span>
                            <span className="font-mono-numbers font-semibold">{compressQuality}%</span>
                          </div>
                          <input
                            type="range"
                            min="20"
                            max="90"
                            step="5"
                            value={compressQuality}
                            onChange={(e) => setCompressQuality(Number(e.target.value))}
                            className="w-full accent-[var(--sand-teal)] cursor-pointer h-1.5 bg-[var(--sand-surface)] rounded-lg"
                          />
                        </div>

                        {/* File Size Savings comparison */}
                        <div className="grid grid-cols-2 gap-2 text-center pt-2 border-t border-[var(--sand-line)]">
                          <div className="bg-[var(--sand-surface)] p-1.5 rounded">
                            <span className="text-[10px] text-[var(--sand-ink-muted)] block">
                              {lang === 'ar' ? 'الحجم الأصلي' : 'Taille source'}
                            </span>
                            <span className="font-mono-numbers font-semibold line-through text-neutral-400">
                              {originalSizeMB} MB
                            </span>
                          </div>
                          <div className="bg-[var(--sand-teal-light)] p-1.5 rounded">
                            <span className="text-[10px] text-[var(--sand-teal)] block font-medium">
                              {lang === 'ar' ? 'بعد الضغط' : 'Taille réduite'}
                            </span>
                            <span className="font-mono-numbers font-bold text-[var(--sand-teal)]">
                              {compressedSizeMB} MB
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* APP 4: QUICKSCORE SIMULATOR */}
                  {activeApp === 'quickscore' && (
                    <div className="space-y-3 animate-fadeIn">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold">{lang === 'ar' ? 'الجولة #3' : 'Manche 3 (Jeux de table)'}</span>
                        <span className="text-[10px] text-[var(--sand-gold)] bg-[var(--sand-gold)]/10 px-2 py-0.5 rounded font-medium">
                          Tabletop Mode
                        </span>
                      </div>

                      {/* Players List with Quick Taps */}
                      <div className="space-y-1.5">
                        {players.map((player) => {
                          const isLeader = player.score === highestScore && player.score > 0;
                          return (
                            <div
                              key={player.id}
                              className={`p-2.5 rounded-xl border flex items-center justify-between transition-all ${
                                isLeader
                                  ? 'bg-[var(--sand-card)] border-[var(--sand-gold)] shadow-xs ring-1 ring-[var(--sand-gold)]/30'
                                  : 'bg-[var(--sand-surface)] border-[var(--sand-line)]'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <span
                                  className="w-3 h-3 rounded-full"
                                  style={{ backgroundColor: player.color }}
                                />
                                <span className="font-semibold text-xs text-[var(--sand-ink)]">
                                  {player.name}
                                </span>
                                {isLeader && (
                                  <Trophy className="w-3.5 h-3.5 text-[var(--sand-gold)]" />
                                )}
                              </div>

                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => updatePlayerScore(player.id, -1)}
                                  className="w-6 h-6 rounded-md bg-[var(--sand-bg)] border border-[var(--sand-line)] font-bold text-xs hover:bg-[var(--sand-card)] active:scale-95"
                                >
                                  -
                                </button>
                                <span className="font-display font-bold text-sm w-7 text-center font-mono-numbers">
                                  {player.score}
                                </span>
                                <button
                                  onClick={() => updatePlayerScore(player.id, +1)}
                                  className="w-6 h-6 rounded-md bg-[var(--sand-ink)] text-white font-bold text-xs hover:opacity-90 active:scale-95"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* APP 5: LEGAL AI SIMULATOR */}
                  {activeApp === 'legalai' && (
                    <div className="space-y-3 animate-fadeIn">
                      <div className="bg-[var(--sand-card)] p-3 rounded-xl border border-[var(--sand-line)]">
                        <div className="flex items-center gap-1.5 mb-2 text-[var(--sand-gold)]">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span className="font-semibold text-xs text-[var(--sand-ink)]">
                            {lang === 'ar' ? 'استشارة قانونية ذكية RAG' : 'Question Juridique Maroc'}
                          </span>
                        </div>

                        {/* Preset Questions */}
                        <div className="space-y-1 mb-3">
                          <button
                            onClick={() => setLegalQuery('trial_period')}
                            className={`w-full text-left p-1.5 rounded text-[11px] transition-colors truncate ${
                              legalQuery === 'trial_period'
                                ? 'bg-[var(--sand-gold)]/15 text-[var(--sand-ink)] font-semibold'
                                : 'text-[var(--sand-ink-muted)] hover:bg-[var(--sand-surface)]'
                            }`}
                          >
                            • {legalAnswers.trial_period.question[lang]}
                          </button>
                          <button
                            onClick={() => setLegalQuery('severance')}
                            className={`w-full text-left p-1.5 rounded text-[11px] transition-colors truncate ${
                              legalQuery === 'severance'
                                ? 'bg-[var(--sand-gold)]/15 text-[var(--sand-ink)] font-semibold'
                                : 'text-[var(--sand-ink-muted)] hover:bg-[var(--sand-surface)]'
                            }`}
                          >
                            • {legalAnswers.severance.question[lang]}
                          </button>
                          <button
                            onClick={() => setLegalQuery('overtime')}
                            className={`w-full text-left p-1.5 rounded text-[11px] transition-colors truncate ${
                              legalQuery === 'overtime'
                                ? 'bg-[var(--sand-gold)]/15 text-[var(--sand-ink)] font-semibold'
                                : 'text-[var(--sand-ink-muted)] hover:bg-[var(--sand-surface)]'
                            }`}
                          >
                            • {legalAnswers.overtime.question[lang]}
                          </button>
                        </div>

                        {/* Generated Answer with Official Source Citation */}
                        <div className="p-2.5 rounded-lg bg-[var(--sand-surface)] border border-[var(--sand-line)] space-y-1.5">
                          <div className="flex items-center justify-between text-[10px] text-[var(--sand-ink-muted)]">
                            <span className="font-medium text-[var(--sand-teal)]">
                              {legalAnswers[legalQuery].article}
                            </span>
                            <span className="font-mono-numbers">
                              {legalAnswers[legalQuery].confidence}% confiance RAG
                            </span>
                          </div>
                          <p className="text-[11px] leading-relaxed text-[var(--sand-ink)]">
                            {legalAnswers[legalQuery].summary[lang]}
                          </p>
                          <div className="text-[9px] text-[var(--sand-ink-muted)] pt-1 border-t border-[var(--sand-line)]">
                            Source : {legalAnswers[legalQuery].citation}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Android Navigation Gestures Bar */}
                <div className="py-2 flex justify-center items-center shrink-0">
                  <div className="w-24 h-1 rounded-full bg-neutral-400/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
