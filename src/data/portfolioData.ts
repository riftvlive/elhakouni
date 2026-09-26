export type Language = 'fr' | 'ar' | 'en';

export interface Project {
  id: string;
  name: string;
  nameAr: string;
  category: 'mobile' | 'ai' | 'tool';
  status: 'production' | 'active-dev' | 'store';
  statusLabel: { fr: string; ar: string; en: string };
  tagline: { fr: string; ar: string; en: string };
  description: { fr: string; ar: string; en: string };
  longDescription: { fr: string; ar: string; en: string };
  stack: string[];
  features: { fr: string[]; ar: string[]; en: string[] };
  architecture: { fr: string; ar: string; en: string };
  image: string;
  glyphType: 'calculator' | 'exam' | 'compress' | 'scoreboard' | 'ai' | 'delivery';
  color: string;
}

export const PORTFOLIO_DATA = {
  developer: {
    name: 'El Hakouni',
    role: {
      fr: 'Développeur Mobile Android & Full-Stack',
      ar: 'مهندس ومطوّر تطبيقات أندرويد وأنظمة سحابية',
      en: 'Android Mobile & Full-Stack Developer',
    },
    location: {
      fr: 'Maroc',
      ar: 'المغرب',
      en: 'Morocco',
    },
    email: 'contact@elhakouni.net',
    website: 'elhakouni.net',
    github: 'https://github.com/elhakouni',
    linkedin: 'https://linkedin.com/in/elhakouni',
  },
  stats: [
    { value: '6+', label: { fr: 'Applications conçues', ar: 'تطبيقات منجزة', en: 'Apps built' } },
    { value: '3', label: { fr: 'Langues par application (AR·FR·EN)', ar: 'لغات مدعومة أصلياً (عربي·فرنسي·إنجليزي)', en: 'Languages per app (AR·FR·EN)' } },
    { value: '100%', label: { fr: 'Kotlin & Jetpack Compose', ar: 'كوتلن وجيت باك كومبوز نقي', en: 'Pure Kotlin & Jetpack Compose' } },
    { value: '0', label: { fr: 'Télémétrie intrusive (Respect vie privée)', ar: 'تتبع بدون إذن (خصوصية تامة)', en: 'Intrusive telemetry (Privacy-first)' } },
  ],
  projects: [
    {
      id: 'hasibti',
      name: 'Hasibti',
      nameAr: 'حاسبتي',
      category: 'mobile',
      status: 'production',
      statusLabel: { fr: 'Publiée & Prête', ar: 'جاهزة ومنشورة', en: 'Live & Production' },
      tagline: {
        fr: 'Calculatrices du quotidien — Android · Kotlin, Jetpack Compose',
        ar: '29 حاسبة ذكية للحياة اليومية — أندرويد · كوتلن، كومبوز',
        en: '29 Daily Smart Calculators — Android · Kotlin, Compose',
      },
      description: {
        fr: '29 calculatrices réunies dans une seule app : argent, carburant, dates, emprunts et vie quotidienne. Favoris, historique et partage multilingue, entièrement hors-ligne.',
        ar: '29 حاسبة عملية مجمعة في تطبيق واحد: المال والوقود والتواريخ والمعاملات اليومية. تعمل بالكامل بدون إنترنت مع دعم كامل للغات الثلاث.',
        en: '29 practical calculators in one clean app: finance, fuel, dates, and everyday metrics. Favorites, history, and multilingual export completely offline.',
      },
      longDescription: {
        fr: 'Conçue pour remplacer la multitude d\'applications disparates par une suite cohérente, rapide et fluide. Hasibti intègre un moteur de calcul haute précision en BigDecimal, une interface Material 3 avec thèmes dynamiques et un support complet du mode hors-ligne sans aucune publicité invasive.',
        ar: 'صُمم ليغنيك عن تثبيت عشرات التطبيقات المشتتة عبر واجهة واحدة متناسقة وسريعة للغاية تعتمد على Material 3 ودقة حسابية متقدمة وتعمل حتى في حال انقطاع الشبكة كلياً.',
        en: 'Engineered to replace dozens of scattered niche calculator apps with a single coherent, rapid, and fluid toolset. Features high-precision BigDecimal arithmetic, Material 3 dynamic color, and zero telemetry.',
      },
      stack: ['Kotlin', 'Jetpack Compose', 'Material 3', 'DataStore', 'AR · FR · EN'],
      features: {
        fr: [
          '29 calculatrices spécialisées (carburant, tva, crédit, conversion devises)',
          'Mode 100% hors-ligne sans compte ni connexion requise',
          'Système de favoris rapides et historique persistant avec Room',
          'Interface bilingue adaptative avec alignement RTL automatique',
        ],
        ar: [
          '29 حاسبة متخصصة (استهلاك الوقود، القروض، الضرائب، التواريخ)',
          'تشغيل كامل بدون إنترنت ولا يتطلب إنشاء أي حساب',
          'نظام مفضلة وسجل عمليات دائم وسريع',
          'دعم أصلي كامل لمحاذاة اليمين إلى اليسار (RTL)',
        ],
        en: [
          '29 specialized calculators (fuel, VAT, loans, currency estimation)',
          '100% offline functionality with zero sign-up required',
          'Instant favorites and persistent calculation history',
          'Native bi-directional RTL support and fluid typography',
        ],
      },
      architecture: {
        fr: 'Architecture MVI / Clean Architecture avec Kotlin Coroutines et StateFlow. Persistance locale légère via Jetpack DataStore et Room Database.',
        ar: 'بنية MVI متوافقة مع Clean Architecture باستخدام Coroutines و StateFlow مع تخزين محلي سريع وفوري.',
        en: 'MVI / Clean Architecture pattern utilizing Kotlin Coroutines & StateFlow. Ultra-fast local persistence with DataStore and Room.',
      },
      image: '/src/assets/images/project_hasibti_mockup_1790442401347.jpg',
      glyphType: 'calculator',
      color: '#0E6E63',
    },
    {
      id: 'examscore',
      name: 'ExamScore',
      nameAr: 'حاسبة النقاط',
      category: 'mobile',
      status: 'production',
      statusLabel: { fr: 'Outil enseignant', ar: 'أداة للأساتذة والمعلمين', en: 'Teacher Tool' },
      tagline: {
        fr: "Notation d'examens pour enseignants — Android · Kotlin, Room",
        ar: 'تصحيح أوراق الامتحانات وجمع النقط للأساتذة — أندرويد',
        en: 'Rapid Exam Grading for Educators — Android · Room, Kotlin',
      },
      description: {
        fr: 'Une grille de valeurs tactiles personnalisables pour additionner les notes de copies en quelques appuis sans jamais perdre un calcul ni devoir effacer.',
        ar: 'شبكة أزرار تفاعلية سريعة لجمع نقاط أوراق الامتحانات بلمسات بسيطة، بدون أخطاء الآلة الحاسبة التقليدية وبسرعة مضاعفة.',
        en: 'A customizable tactile grading grid designed specifically for teachers to tabulate exam marks in seconds without losing paper tallies.',
      },
      longDescription: {
        fr: 'Les enseignants passent des heures à additionner des notes fragmentées sur les copies. ExamScore remplace le pavé numérique classique par une grille de touches directes (+0.5, +1, +2, +5, etc.) avec retour haptique, historique des copies corrigées et calcul automatique des moyennes.',
        ar: 'يقضي الأستاذ ساعات طويلة في جمع الأعداد الجزئية للامتحانات؛ توفر هذه الأداة شبكة مخصصة تتيح النقر المباشر مع تغذية لمسية، وحفظ تلقائي لسجل الأوراق مع احتساب المعدل الإجمالي.',
        en: 'Teachers often spend countless hours manually calculating exam paper subsections. ExamScore offers one-tap increments (+0.5, +1, +2, etc.), haptic cues, and batch class statistics.',
      },
      stack: ['Kotlin', 'Jetpack Compose', 'Room Database', 'BigDecimal', 'Haptic API'],
      features: {
        fr: [
          'Grille de touches rapides paramétrable selon le barème',
          'Addition continue sans risque d’écrasement accidentel',
          'Gestion des paquets de copies avec calcul automatique de moyenne',
          'Export rapide des résultats au format texte ou tableur',
        ],
        ar: [
          'شبكة أزرار قابلة للتخصيص حسب سلم التنقيط المعتمد',
          'جمع تراكمي سلس محمي من الخطأ أو المسح العرضي',
          'تنظيم الأوراق حسب الأفواج وحساب المعدلات فورا',
          'تصدير فوري للنقاط بتنسيق نصي خفيف',
        ],
        en: [
          'Customizable value keypad matching specific grading scales',
          'Continuous summation with rollback and tally undo protection',
          'Batch assignment tracking and automatic class averages',
          'Exportable grades for class spreadsheets',
        ],
      },
      architecture: {
        fr: 'MVVM avec StateFlow, injection de dépendances manuelle légère, persistance transactionnelle avec Room et types exacts BigDecimal.',
        ar: 'بنية MVVM مع تدفق بيانات StateFlow وحسابات دقيقة بـ BigDecimal وتخزين آمن في Room.',
        en: 'MVVM architecture with StateFlow, Room relational storage for batch papers, and zero floating-point imprecision using BigDecimal.',
      },
      image: '/src/assets/images/hero_dev_workspace_1790442388967.jpg',
      glyphType: 'exam',
      color: '#B5502F',
    },
    {
      id: 'legal-ai',
      name: 'Plateforme IA Juridique Marocaine',
      nameAr: 'منصة الذكاء الاصطناعي القانوني المغربي',
      category: 'ai',
      status: 'production',
      statusLabel: { fr: 'Système complet IA', ar: 'منظومة ذكاء اصطناعي متكاملة', en: 'Full AI System' },
      tagline: {
        fr: 'App Android, Panneau Admin React & Backend FastAPI RAG',
        ar: 'تطبيق أندرويد، لوحة تحكم React ومحرك RAG بـ FastAPI',
        en: 'Android App, React Admin & FastAPI RAG Pipeline',
      },
      description: {
        fr: "Plateforme RAG complète (embeddings BAAI/bge-m3, recherche vectorielle FAISS, LLM Qwen) avec réponses juridiques vérifiées avec références aux lois marocaines en arabe, français et anglais.",
        ar: 'منظومة RAG متقدمة مبنية على تضمين bge-m3 والبحث الشعاعي FAISS ونموذج Qwen، مع ربط دقيق بالنصوص وفصول القوانين المغربية الرسمية باللغات الثلاث.',
        en: 'End-to-end RAG platform utilizing bge-m3 embeddings, FAISS vector search, and Qwen LLMs providing verified legal citations and Moroccan statute analysis.',
      },
      longDescription: {
        fr: 'Solution complète intégrant une application Android native avec abonnement Google Play Billing en dirhams (MAD), un tableau de bord administratif en React pour la gestion des textes législatifs et un backend asynchrone FastAPI conteneurisé.',
        ar: 'حل شامل يجمع بين تطبيق أندرويد أصلي يدعم الاشتراكات بالدرهم المغربي، ولوحة إدارة تشغيلية بـ React لإدارة الجرائد الرسمية، وخادم خلفي فائق السرعة عبر FastAPI.',
        en: 'Comprehensive solution featuring native Android client with Google Play Billing in Moroccan Dirhams (MAD), React administrative console, and a containerized FastAPI async backend.',
      },
      stack: ['FastAPI', 'FAISS', 'BAAI/bge-m3', 'Qwen-8B', 'React', 'Jetpack Compose', 'Play Billing'],
      features: {
        fr: [
          'Recherche sémantique instantanée dans le Code du Travail, Code Civil et Commerce',
          'Citations précises avec numéro d’article et extrait du Bulletin Officiel',
          'Système d’abonnements récurrents en dirhams marocains via Google Play',
          'Panneau d’administration pour l’indexation continue de nouveaux textes',
        ],
        ar: [
          'بحث دلالي فوري في مدونة الشغل، قانون الالتزامات والعقود، ومدونة التجارة',
          'توثيق دقيق برقم الفصل وفقرات الجريدة الرسمية المعنية',
          'نظام اشتراكات شهرية وسنوية بالدرهم المغربي (MAD)',
          'لوحة تحكم إدارية لتحديث القوانين وإعادة بناء الفهارس الشعاعية',
        ],
        en: [
          'Instant semantic vector search across Moroccan labor and civil codes',
          'Precise legal citations referencing verified statute articles',
          'In-app subscription billing in Moroccan Dirhams (MAD)',
          'Administrative indexer console for ongoing corpus updates',
        ],
      },
      architecture: {
        fr: 'Pipeline RAG hybride : embeddings bilingues bge-m3 stockés dans un index FAISS, re-ranking sémantique, serveur FastAPI asynchrone sous Docker, application mobile Compose.',
        ar: 'معمارية RAG هجينة: تضمين شعاعي bge-m3 في FAISS، ترتيب دلالي، وسيرفر FastAPI غير تزامني.',
        en: 'Hybrid RAG architecture: dense bge-m3 embeddings queried in FAISS, semantic reranker, async FastAPI backend, and native Compose client.',
      },
      image: '/src/assets/images/project_legalai_mockup_1790442415143.jpg',
      glyphType: 'ai',
      color: '#B98B2E',
    },
    {
      id: 'mediashrink',
      name: 'MediaShrink',
      nameAr: 'ميديا شرينك (MediaShrink)',
      category: 'tool',
      status: 'production',
      statusLabel: { fr: 'Traitement local & Privé', ar: 'معالجة محلية بدون إنترنت', en: 'Local & Privacy First' },
      tagline: {
        fr: 'Compression photo & vidéo locale — Android · Kotlin, Compose',
        ar: 'ضغط وتقليص حجم الصور والفيديوهات دون رفعها للإنترنت',
        en: 'On-device Photo & Video Compression — Android · Kotlin',
      },
      description: {
        fr: 'Compresser, redimensionner et recadrer des médias directement sur l’appareil, sans upload, sans compte et avec comparateur visuel avant/après et suppression des métadonnées EXIF.',
        ar: 'ضغط وتصغير حجم الوسائط مباشرة في المعالج المحلي للهاتف، مع الحفاظ التام على الخصوصية، ومقارنة فورية للجودة قبل وبعد، وحذف بيانات الموقع GPS.',
        en: 'Compress, resize, and crop images and video streams directly on device hardware. Zero cloud uploads, zero metadata leakage, and instant split-screen preview.',
      },
      longDescription: {
        fr: 'De nombreuses applications exigent d\'envoyer vos photos privées sur des serveurs tiers pour les compresser. MediaShrink effectue l\'ensemble du rééchantillonnage et de l\'encodage via les codecs matériels Android (MediaCodec), garantissant une confidentialité absolue et une rapidité sans faille.',
        ar: 'تطلب معظم أدوات الضغط رفع الصور الحساسة لخوادم مجهولة؛ بينما يعتمد MediaShrink على مشفرات العتاد المحلي للأندرويد MediaCodec لضمان أمان وسرعة فائقة.',
        en: 'Most compression utilities upload personal media to cloud servers. MediaShrink processes everything locally through Android hardware MediaCodec for absolute security.',
      },
      stack: ['Kotlin', 'Jetpack Compose', 'MediaCodec API', 'ExifScrubber', 'Canvas'],
      features: {
        fr: [
          'Réduction de taille jusqu’à 90% sans perte visuelle discernable',
          'Nettoyage automatique des balises géographiques GPS et données privées',
          'Curseur tactile interactif de comparaison Avant / Après',
          'Traitement par lot pour galeries entières en tâche de fond',
        ],
        ar: [
          'تقليص الحجم بنسبة تصل إلى 90% مع الحفاظ على وضوح الصورة',
          'حذف علامات الموقع الجغرافي GPS وبيانات الكاميرا الحساسة',
          'مؤشر مقارنة تفاعلي لمشاهدة الفرق المباشر قبل الحفظ',
          'معالجة دفعية لمجموعات الصور في الخلفية بسلاسة',
        ],
        en: [
          'File size savings up to 90% with perceptual quality retention',
          'Automatic scrubbing of sensitive GPS and device metadata',
          'Interactive split-slider before/after visual inspection',
          'Background batch pipeline for whole albums',
        ],
      },
      architecture: {
        fr: 'Pipeline matériel exploitant Android BitmapPool, coroutines Dispatchers.Default pour le traitement parallèle et zero fuite mémoire.',
        ar: 'خط معالجة متوازي باستعمال Dispatchers.Default و BitmapPool لتفادي استهلاك الذاكرة.',
        en: 'Hardware accelerated decoding with BitmapPool, non-blocking coroutines on Dispatchers.Default, and zero memory leaks.',
      },
      image: '/src/assets/images/hero_dev_workspace_1790442388967.jpg',
      glyphType: 'compress',
      color: '#0E6E63',
    },
    {
      id: 'quickscore',
      name: 'QuickScore',
      nameAr: 'كويك سكور (QuickScore)',
      category: 'mobile',
      status: 'store',
      statusLabel: { fr: 'Sur Google Play Store', ar: 'متوفر على متجر Play Store', en: 'On Google Play Store' },
      tagline: {
        fr: 'Suivi de scores pour jeux de société — Kotlin, MVVM, Room',
        ar: 'لوحة تسجيل وتتبع نتائج ألعاب الطاولة والأصدقاء',
        en: 'Board Game Scorekeeper — Kotlin, Room, MVVM',
      },
      description: {
        fr: 'Interface sombre pensée pour être posée au centre d’une table de jeu, contrôles gestuels par glissement, grilles dynamiques de 2 à 6 joueurs et historique des victoires.',
        ar: 'واجهة داكنة مريحة للعين توضع في منتصف الطاولة، تحكم بالإيماءات، دعم من 2 إلى 6 لاعبين، وسجل دائم للجولات والمنافسات.',
        en: 'Tabletop-optimized dark UI designed to sit flat on game nights. Gesture-driven counters, dynamic 2–6 player grids, and saved match history.',
      },
      longDescription: {
        fr: 'Fini les bouts de papier froissés lors des soirées jeux de société ou tournois entre amis. QuickScore offre un écran toujours allumé optionnel, des sons de validation discrets, et une vue en temps réel du joueur en tête de la manche.',
        ar: 'وداعاً للورق والأقلام أثناء لعب الورق أو ألعاب الطاولة؛ يقدم التطبيق واجهة سريعة الاستجابة، وتحديداً تلقائياً للمتصدر، واحتفاظاً كاملاً بسجل النتائج.',
        en: 'Ditch pencil-and-paper confusion during board game sessions. QuickScore delivers zero-friction increment taps, match archiving, and real-time leader indicators.',
      },
      stack: ['Kotlin', 'MVVM', 'Room DB', 'Coroutines', 'Material You'],
      features: {
        fr: [
          'Mode paysage optimisé pour vision périphérique à plusieurs',
          'Contrôle par swipe : glisser vers le haut (+), vers le bas (-)',
          'Détection en direct du joueur gagnant avec indicateur visuel',
          'Graphique d’évolution du score tour par tour',
        ],
        ar: [
          'وضع أفقي مخصص للرؤية الجماعية على الطاولة',
          'تحكم بالسحب: للأعلى للإضافة وللأسفل للإنقاص',
          'إبراز فوري لصاحب أعلى نتيجة في الجولة',
          'رسم بياني لتطور النقاط جولة بجولة',
        ],
        en: [
          'Landscape table mode for 360-degree group viewing',
          'Intuitive swipe-to-adjust gesture controls',
          'Real-time leader highlighting and tiebreaker indicators',
          'Turn-by-turn progression curve and round archiving',
        ],
      },
      architecture: {
        fr: 'Pattern MVVM classique robuste avec Room pour la persistance locale instantanée et LiveData/StateFlow pour la réactivité.',
        ar: 'معمارية MVVM متينة مع حفظ فوري في قاعدة بيانات Room وسرعة استجابة عالية.',
        en: 'Robust MVVM architecture with Room SQLite persistence, handling screen orientation changes and sleep states seamlessly.',
      },
      image: '/src/assets/images/project_hasibti_mockup_1790442401347.jpg',
      glyphType: 'scoreboard',
      color: '#B5502F',
    },
    {
      id: 'storup',
      name: 'StorUp',
      nameAr: 'ستور أب (StorUp)',
      category: 'mobile',
      status: 'active-dev',
      statusLabel: { fr: 'En développement actif', ar: 'قيد التطوير النشط', en: 'In Active Development' },
      tagline: {
        fr: 'Application de livraison & services locaux — Kotlin & Compose',
        ar: 'تطبيق خدمات وتوصيل محلي — كوتلن، كومبوز وهوية بصرية',
        en: 'Local Delivery & On-Demand Services — Android Kotlin',
      },
      description: {
        fr: 'Application mobile de livraison en cours de finalisation, avec une identité visuelle chaleureuse repensée : catalogue dynamique, suivi temps réel et commande simplifiée.',
        ar: 'تطبيق تجاري لخدمات التوصيل المحلي يتم بناؤه حالياً بهوية بصرية مميزة، يشمل تتبع الطلبيات، سلة المشتريات، وتجربة مستخدم خفيفة وسريعة.',
        en: 'Local commerce & delivery app currently in active production, featuring a freshly refined warm identity, live dispatch tracking, and friction-free checkout.',
      },
      longDescription: {
        fr: 'Pensée pour répondre aux besoins spécifiques du commerce de proximité et de la livraison au Maroc : interfaces fluides même sur des connexions mobiles 3G/4G, notifications push optimisées et gestion des adresses adaptée au contexte local.',
        ar: 'صُمم لتلبية متطلبات التجارة المحلية بالمغرب: واجهات مرنة وسريعة تعمل بكفاءة حتى مع شبكات 3G/4G، ونظام إشعارات فوري وتحديد دقيق للمواقع.',
        en: 'Tailored for North African local retail and logistics: optimized to run smoothly on budget Android devices and variable mobile networks with reliable background updates.',
      },
      stack: ['Kotlin', 'Jetpack Compose', 'Ktor Client', 'WebSockets', 'Firebase Messaging'],
      features: {
        fr: [
          'Catalogue visuel fluide avec gestion du cache d’images',
          'Suivi de la livraison en direct avec WebSockets',
          'Support bilingue complet avec navigation RTL soignée',
          'Optimisation mémoire pour smartphones d’entrée de gamme',
        ],
        ar: [
          'كتالوج منتجات سريع مع تخزين مؤقت متقدم للصور',
          'تتبع مباشر للطلبية والمسار عبر تقنية WebSockets',
          'دعم عربي فرنسي أصلي مع اتجاه كتابة وتصفح متقن',
          'استهلاك منخفض للبطارية والبيانات للهواتف الاقتصادية',
        ],
        en: [
          'Fluid product catalog with predictive image caching',
          'Live dispatch tracking powered by real-time WebSockets',
          'Full bilingual Arabic/French UI with native RTL design',
          'Memory-conscious footprint for budget devices',
        ],
      },
      architecture: {
        fr: 'Architecture découplée avec Ktor Client pour les requêtes asynchrones, Coroutines pour la réactivité réseau et ViewModel Compose.',
        ar: 'معمارية معيارية باستخدام عميل Ktor و Coroutines للتواصل الشبكي الفعال.',
        en: 'Modular Compose architecture with asynchronous Ktor client, persistent offline draft orders, and reactive state management.',
      },
      image: '/src/assets/images/project_legalai_mockup_1790442415143.jpg',
      glyphType: 'delivery',
      color: '#D9AE55',
    },
  ] as Project[],

  pillars: [
    {
      number: '01',
      title: {
        fr: '100% Kotlin & Jetpack Compose',
        ar: 'كوتلن وجيت باك كومبوز 100%',
        en: '100% Kotlin & Jetpack Compose',
      },
      description: {
        fr: 'Développement moderne sans XML obsolète ni frameworks intermédiaires lourds. Interfaces déclaratives fluides, 60 FPS constants et intégration parfaite des standards Material 3.',
        ar: 'تطوير أندرويد نقي وحديث بدون لغات وسيطة أو شاشات XML القديمة. واجهات تفاعلية سريعة، وأداء 60 إطاراً في الثانية مع تبني معايير Material 3.',
        en: 'Pure modern Android without obsolete XML or sluggish cross-platform wrappers. Fluid declarative layouts hitting solid 60 FPS with full Material 3 compliance.',
      },
    },
    {
      number: '02',
      title: {
        fr: 'Hors-Ligne d’Abord & Zéro Télémétrie',
        ar: 'الأولوية للعمل دون إنترنت واحترام الخصوصية',
        en: 'Offline-First & Zero Telemetry',
      },
      description: {
        fr: 'Chaque application fonctionne immédiatement sans obliger l’utilisateur à créer un compte ou attendre un serveur distant. Respect total des données privées avec stockage local sécurisé (Room, DataStore).',
        ar: 'تعمل التطبيقات فوراً بدون إجبار المستخدم على تسجيل حساب أو انتظار اتصال بالإنترنت. خصوصية كاملة للملفات والمعاملات على ذاكرة الجهاز الآمنة.',
        en: 'Apps work instantly without forced login barriers or server delays. Absolute respect for user privacy with zero hidden analytics and rock-solid local storage.',
      },
    },
    {
      number: '03',
      title: {
        fr: 'Multilingue & RTL Natif (Arabe · Français · Anglais)',
        ar: 'دعم أصلي متكامل للعربية والفرنسية والإنجليزية',
        en: 'Trilingual & Native Bi-directional RTL',
      },
      description: {
        fr: 'L’arabe n’est pas une traduction après coup : les mises en page RTL, les typographies arabes équilibrées et les formats culturels sont pensés dès la première ligne de code.',
        ar: 'ليست اللغة العربية مجرد ترجمة ميكانيكية، بل يتم تصميم واجهات اليمين لليسار (RTL) وضبط الخطوط والتباعدات الثقافية بدقة متناهية من الصفر.',
        en: 'Arabic is never an afterthought: true bi-directional mirroring, carefully spaced Arabic typography, and cultural nuances are designed from line one.',
      },
    },
    {
      number: '04',
      title: {
        fr: 'Full-Stack & IA Appliquée (FastAPI, RAG, FAISS)',
        ar: 'تطوير متكامل مع الذكاء الاصطناعي التطبيقي (RAG)',
        en: 'Full-Stack & Production AI (FastAPI, RAG)',
      },
      description: {
        fr: 'Au-delà du mobile : conception de backends asynchrones haute performance en Python/FastAPI, pipelines RAG précis avec embeddings vectoriels et déploiements conteneurisés.',
        ar: 'ما وراء تطبيقات الهاتف: بناء خوادم خلفية فائقة السرعة بـ FastAPI، ومحركات بحث دلالي RAG بالذكاء الاصطناعي مع ربطها بأنظمة الدفع والفوترة.',
        en: 'Full product execution: high-throughput async Python/FastAPI backends, robust vector retrieval RAG pipelines, and automated cloud deployments.',
      },
    },
  ],

  calculatorSimulator: {
    title: {
      fr: 'Simulateur d’applications en direct',
      ar: 'جرب التطبيقات مباشرة على الشاشة التفاعلية',
      en: 'Interactive Live App Simulator',
    },
    subtitle: {
      fr: 'Testez directement le comportement de mes applications dans ce simulateur Android interactif.',
      ar: 'يمكنك تجربة منطق الحساب والتفاعل الحقيقي في هذا الهاتف التفاعلي الآن.',
      en: 'Interact directly with working code simulations of my Android applications right inside this phone viewport.',
    },
  },

  projectEstimator: {
    title: {
      fr: 'Calculateur d’estimation de projet',
      ar: 'حاسبة تقدير المشروع والاستشارة السريعة',
      en: 'Interactive Project Scope Estimator',
    },
    subtitle: {
      fr: 'Configurez votre idée pour obtenir une estimation de calendrier et préparer un premier échange clair.',
      ar: 'حدد متطلبات فكرتك للحصول على تقدير للمدة الزمنية ورسالة جاهزة للتواصل الفوري.',
      en: 'Configure your requirements to estimate sprint delivery timelines and generate a clear project proposal.',
    },
  },
};
