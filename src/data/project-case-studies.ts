export interface ProjectCaseStudy {
  slug: string;

  overview: string;
  overviewAr: string;

  challenge: string;
  challengeAr: string;

  roleDetails: string[];
  roleDetailsAr: string[];

  features: string[];
  featuresAr: string[];

  technicalApproach: string[];
  technicalApproachAr: string[];

  challenges: string[];
  challengesAr: string[];

  outcome: string;
  outcomeAr: string;
}

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: "language-center-management-system",

    overview:
      "A multi-module language center management platform designed to support administrative operations, secure account access, reporting, and coordinated workflows across different parts of the system.",

    overviewAr:
      "منصة متعددة الوحدات لإدارة مركز لغات، صممت لدعم العمليات الإدارية والوصول الآمن للحسابات والتقارير وتنظيم سير العمل بين أجزاء النظام المختلفة.",

    challenge:
      "The project required coordinating a growing Laravel backend with a React/Inertia frontend while maintaining clear authentication rules, account-security flows, reporting logic, and maintainable integration between modules.",

    challengeAr:
      "تطلب المشروع تنسيق Backend متنامٍ باستخدام Laravel مع واجهة React/Inertia، مع الحفاظ على قواعد واضحة للمصادقة وأمان الحسابات ومنطق التقارير والتكامل القابل للصيانة بين الوحدات المختلفة.",

    roleDetails: [
      "Lead the development team and coordinate work across project modules.",
      "Contribute directly to backend development and selected frontend implementation.",
      "Work on integration between Laravel, React, Inertia.js, and administrative interfaces.",
      "Implement and refine authentication, account-security, and reporting workflows."
    ],

    roleDetailsAr: [
      "قيادة الفريق وتنسيق التطوير بين وحدات المشروع المختلفة.",
      "المساهمة المباشرة في تطوير Backend وبعض أجزاء الواجهة الأمامية.",
      "العمل على التكامل بين Laravel وReact وInertia.js والواجهات الإدارية.",
      "تنفيذ وتحسين سير عمل المصادقة وأمان الحسابات والتقارير."
    ],

    features: [
      "Secure authentication and account access",
      "Account lockout and password-security workflows",
      "Administrative dashboards and management interfaces",
      "Multi-tenant and center-aware workflows",
      "Structured reporting and export functionality",
      "Frontend-backend integration through React and Inertia.js"
    ],

    featuresAr: [
      "المصادقة الآمنة والوصول إلى الحسابات",
      "إغلاق الحساب مؤقتًا وسير عمل أمان كلمات المرور",
      "لوحات وواجهات الإدارة",
      "سير عمل يدعم تعدد الجهات والمراكز",
      "تقارير منظمة ووظائف التصدير",
      "تكامل الواجهة والخادم باستخدام React وInertia.js"
    ],

    technicalApproach: [
      "Laravel is used as the main application and business-logic layer.",
      "React and TypeScript provide interactive frontend experiences through Inertia.js.",
      "Filament supports administrative workflows and management interfaces.",
      "Authentication logic is separated into dedicated backend services and actions.",
      "Automated tests are used for critical reporting and application behavior."
    ],

    technicalApproachAr: [
      "استخدام Laravel كطبقة أساسية للتطبيق ومنطق الأعمال.",
      "استخدام React وTypeScript لبناء واجهات تفاعلية من خلال Inertia.js.",
      "استخدام Filament لدعم سير العمل والواجهات الإدارية.",
      "فصل منطق المصادقة داخل خدمات وإجراءات Backend مخصصة.",
      "استخدام اختبارات آلية للتحقق من التقارير والسلوكيات المهمة في النظام."
    ],

    challenges: [
      "Keeping authentication behavior consistent across backend and frontend flows.",
      "Integrating multiple modules without tightly coupling their responsibilities.",
      "Maintaining reporting logic while supporting multiple export formats.",
      "Coordinating parallel development while preserving data integrity and minimizing integration risk."
    ],

    challengesAr: [
      "الحفاظ على سلوك موحد للمصادقة بين الواجهة والخادم.",
      "دمج وحدات متعددة دون ربط مسؤولياتها بشكل معقد.",
      "الحفاظ على منطق التقارير مع دعم أكثر من صيغة للتصدير.",
      "تنسيق التطوير المتوازي داخل الفريق مع الحفاظ على سلامة البيانات وتقليل مخاطر التكامل."
    ],

    outcome:
      "The project is in active development and approaching completion. It has evolved into a substantial full-stack system that demonstrates application architecture, backend logic, frontend integration, reporting, security workflows, and team coordination.",

    outcomeAr:
      "المشروع ما زال قيد التطوير ويقترب من الاكتمال، وقد تطور إلى نظام Full-Stack متكامل يعكس العمل على بنية التطبيق ومنطق الخادم وتكامل الواجهة والتقارير وأمان الحسابات وتنسيق الفريق."
  },

  {
    slug: "arabic-ai-travel-assistant",

    overview:
      "An Arabic-first conversational travel assistant that combines a local language model with retrieval over a structured travel knowledge base to generate recommendations and itineraries.",

    overviewAr:
      "مساعد سفر حواري موجه للعربية يجمع بين نموذج لغوي محلي واسترجاع المعلومات من قاعدة معرفة سفر منظمة لإنتاج توصيات وخطط سفر.",

    challenge:
      "The core challenge was making generated travel responses more grounded in available data instead of relying entirely on the language model's internal knowledge.",

    challengeAr:
      "كان التحدي الأساسي هو جعل إجابات السفر أكثر ارتباطًا بالبيانات المتاحة بدل الاعتماد الكامل على المعرفة الداخلية للنموذج اللغوي.",

    roleDetails: [
      "Reorganized the initial academic prototype into a modular and maintainable application structure.",
      "Built the retrieval pipeline and connected it with the language model workflow.",
      "Prepared reusable project structure, configuration, and fallback behavior.",
      "Created a Gradio interface for interactive testing."
    ],

    roleDetailsAr: [
      "إعادة تنظيم النموذج الأكاديمي الأولي ضمن بنية تطبيق معيارية وأكثر قابلية للصيانة.",
      "بناء مسار استرجاع المعلومات وربطه بتدفق النموذج اللغوي.",
      "إعداد هيكل مشروع قابل لإعادة الاستخدام وإدارة الإعدادات ووضع احتياطي.",
      "إنشاء واجهة Gradio للاختبار التفاعلي."
    ],

    features: [
      "Arabic-first conversational interface",
      "Travel knowledge retrieval using TF-IDF",
      "Qwen2.5 local language model integration",
      "Grounded destination recommendations",
      "Generated travel itineraries",
      "Fallback retrieval mode when model execution is unavailable"
    ],

    featuresAr: [
      "واجهة محادثة موجهة للعربية",
      "استرجاع معرفة السفر باستخدام TF-IDF",
      "دمج نموذج Qwen2.5 محليًا",
      "توصيات وجهات مرتبطة بالبيانات المتاحة",
      "توليد خطط سفر",
      "وضع استرجاع احتياطي عند عدم توفر تشغيل النموذج"
    ],

    technicalApproach: [
      "Qwen2.5-1.5B-Instruct provides the language-generation layer.",
      "TF-IDF and scikit-learn are used to retrieve relevant travel context.",
      "Retrieved knowledge is incorporated into prompts before generation.",
      "Gradio provides a lightweight interactive user interface.",
      "The original notebook workflow was reorganized into modular Python code."
    ],

    technicalApproachAr: [
      "استخدام Qwen2.5-1.5B-Instruct كطبقة لتوليد اللغة.",
      "استخدام TF-IDF وscikit-learn لاسترجاع سياق السفر المناسب.",
      "إدخال المعرفة المسترجعة ضمن Prompt قبل عملية التوليد.",
      "استخدام Gradio لتوفير واجهة تفاعلية خفيفة.",
      "إعادة تنظيم العمل الأصلي من Notebook إلى كود Python معياري."
    ],

    challenges: [
      "Running a local language model efficiently within the available compute resources.",
      "Balancing retrieval relevance with generated response quality.",
      "Keeping the project reproducible without committing large local model files."
    ],

    challengesAr: [
      "تشغيل النموذج اللغوي المحلي بكفاءة ضمن موارد الحوسبة المتاحة.",
      "الموازنة بين جودة الاسترجاع وجودة الإجابات المولدة.",
      "الحفاظ على إمكانية إعادة تشغيل المشروع دون رفع ملفات النموذج الكبيرة إلى المستودع."
    ],

    outcome:
      "The project evolved into a reproducible AI application with a modular architecture, local-model support, retrieval grounding, and an interactive user-facing interface.",

    outcomeAr:
      "تطور المشروع إلى تطبيق ذكاء اصطناعي قابل لإعادة التشغيل ببنية معيارية ودعم لنموذج محلي واسترجاع للمعلومات وواجهة تفاعلية للمستخدم."
  },

  {
    slug: "bookspace-library-management-system",

    overview:
      "A desktop library management application built with JavaFX and a relational database, designed around structured library workflows and a maintainable desktop interface.",

    overviewAr:
      "تطبيق سطح مكتب لإدارة مكتبة مبني باستخدام JavaFX وقاعدة بيانات علائقية، ويركز على تنظيم عمليات المكتبة ضمن واجهة قابلة للصيانة.",

    challenge:
      "The project combined desktop user-interface development with relational database integration and required keeping application workflows, data access, and local configuration organized.",

    challengeAr:
      "جمع المشروع بين تطوير واجهة سطح المكتب وربط قاعدة بيانات علائقية، مع ضرورة تنظيم سير العمل والوصول إلى البيانات والإعدادات المحلية.",

    roleDetails: [
      "Designed and implemented the JavaFX application structure.",
      "Connected desktop workflows with MariaDB/MySQL through JDBC.",
      "Organized application configuration and database access.",
      "Separated configuration from environment-specific values to improve portability and reproducible setup."
    ],

    roleDetailsAr: [
      "تصميم وتنفيذ بنية تطبيق JavaFX.",
      "ربط سير العمل بقاعدة MariaDB/MySQL باستخدام JDBC.",
      "تنظيم إعدادات التطبيق والوصول إلى قاعدة البيانات.",
      "فصل الإعدادات عن القيم الخاصة ببيئة التشغيل لتحسين قابلية النقل وإعادة إعداد المشروع."
    ],

    features: [
      "Library data management",
      "Structured desktop workflows",
      "Relational database integration",
      "JavaFX-based user interface",
      "Reusable JDBC database connectivity"
    ],

    featuresAr: [
      "إدارة بيانات المكتبة",
      "سير عمل منظم لتطبيق سطح المكتب",
      "ربط قاعدة بيانات علائقية",
      "واجهة مستخدم باستخدام JavaFX",
      "اتصال منظم بقاعدة البيانات باستخدام JDBC"
    ],

    technicalApproach: [
      "JavaFX provides the application user interface.",
      "JDBC handles communication between the desktop application and database.",
      "MariaDB/MySQL stores the application's relational data.",
      "Configuration was separated from machine-specific and sensitive values to improve portability and maintainability."
    ],

    technicalApproachAr: [
      "استخدام JavaFX لبناء واجهة التطبيق.",
      "استخدام JDBC للتواصل بين تطبيق سطح المكتب وقاعدة البيانات.",
      "استخدام MariaDB/MySQL لتخزين البيانات العلائقية.",
      "فصل الإعدادات عن القيم الخاصة بالجهاز والبيانات الحساسة لتحسين قابلية النقل والصيانة."
    ],

    challenges: [
      "Managing database connectivity inside a desktop application.",
      "Keeping interface workflows synchronized with stored data.",
      "Managing environment-specific configuration while keeping the project portable and reproducible."
    ],

    challengesAr: [
      "إدارة الاتصال بقاعدة البيانات داخل تطبيق سطح المكتب.",
      "الحفاظ على تزامن سير عمل الواجهة مع البيانات المخزنة.",
      "إدارة الإعدادات الخاصة ببيئة التشغيل مع الحفاظ على قابلية نقل المشروع وإعادة تشغيله."
    ],

    outcome:
      "BookSpace became a complete academic desktop application that demonstrates Java development, UI construction, relational database integration, and practical application organization.",

    outcomeAr:
      "أصبح BookSpace تطبيق سطح مكتب أكاديمي متكامل يوضح تطوير Java وبناء الواجهات وربط قواعد البيانات وتنظيم التطبيق بصورة عملية."
  },

  {
    slug: "almosafer",

    overview:
      "A mobile travel application case study focused on creating a consistent experience around AI-assisted trip planning, destination discovery, saved destinations, bookings, and user accounts.",

    overviewAr:
      "دراسة حالة لتطبيق سفر على الهاتف تركز على بناء تجربة متناسقة تشمل التخطيط للرحلات بمساعدة الذكاء الاصطناعي واكتشاف الوجهات والمحفوظات والحجوزات وحساب المستخدم.",

    challenge:
      "The design challenge was organizing several travel workflows into one understandable mobile experience while keeping the visual language consistent across the product.",

    challengeAr:
      "كان التحدي التصميمي هو تنظيم عدة مسارات للسفر ضمن تجربة هاتف واضحة مع الحفاظ على لغة بصرية متناسقة في جميع أجزاء المنتج.",

    roleDetails: [
      "Designed the project individually from wireframes through high-fidelity screens.",
      "Defined the main navigation and travel-planning flows.",
      "Designed reusable visual patterns for repeated interface elements.",
      "Built an interactive Figma prototype for key user journeys."
    ],

    roleDetailsAr: [
      "تصميم المشروع بشكل فردي من Wireframes حتى الشاشات عالية الدقة.",
      "تحديد التنقل الأساسي ومسارات تخطيط السفر.",
      "تصميم أنماط بصرية قابلة لإعادة الاستخدام للعناصر المتكررة.",
      "بناء Prototype تفاعلي في Figma لأهم رحلات المستخدم."
    ],

    features: [
      "AI-assisted travel planning concept",
      "Destination discovery",
      "Saved destinations",
      "Booking flows",
      "Account management",
      "Interactive mobile prototype"
    ],

    featuresAr: [
      "مفهوم لتخطيط السفر بمساعدة الذكاء الاصطناعي",
      "اكتشاف الوجهات",
      "حفظ الوجهات",
      "مسارات الحجز",
      "إدارة الحساب",
      "Prototype تفاعلي للهاتف"
    ],

    technicalApproach: [
      "Started with wireframes to define structure and screen hierarchy.",
      "Developed the visual direction into high-fidelity mobile screens.",
      "Used reusable components and consistent visual patterns inside Figma.",
      "Connected key screens into an interactive prototype."
    ],

    technicalApproachAr: [
      "البدء بـWireframes لتحديد البنية وتسلسل الشاشات.",
      "تطوير الاتجاه البصري إلى شاشات هاتف عالية الدقة.",
      "استخدام Components وأنماط بصرية متناسقة داخل Figma.",
      "ربط الشاشات الأساسية ضمن Prototype تفاعلي."
    ],

    challenges: [
      "Keeping multiple travel workflows understandable within a mobile layout.",
      "Balancing AI-related features with conventional travel-booking interactions.",
      "Maintaining visual and interaction consistency across a growing set of screens and user flows."
    ],

    challengesAr: [
      "الحفاظ على وضوح عدة مسارات للسفر داخل واجهة هاتف.",
      "الموازنة بين ميزات الذكاء الاصطناعي وتفاعلات الحجز التقليدية.",
      "الحفاظ على الاتساق البصري واتساق التفاعل عبر عدد متزايد من الشاشات ومسارات المستخدم."
    ],

    outcome:
      "The project resulted in a complete mobile UI/UX case study containing wireframes, high-fidelity screens, reusable visual components, and an interactive prototype.",

    outcomeAr:
      "نتج عن المشروع دراسة حالة UI/UX متكاملة للهاتف تشمل Wireframes وشاشات عالية الدقة وعناصر بصرية قابلة لإعادة الاستخدام وPrototype تفاعلي."
  }
];

export function getProjectCaseStudy(
  slug: string
) {
  return projectCaseStudies.find(
    (project) => project.slug === slug
  );
}