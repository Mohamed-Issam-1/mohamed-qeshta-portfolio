import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "language-center-management-system",

    title: "Language Center Management System",
    titleAr: "نظام إدارة مركز اللغات",

    category: "Full-Stack Web Application",
    categoryAr: "تطبيق ويب Full-Stack",

    filter: "web",

    type: "Team Project",
    typeAr: "مشروع جماعي",

    role: "Team Leader / Full-Stack Developer",
    roleAr: "قائد الفريق / مطور Full-Stack",

    status: "in-progress",
    priority: "strong-supporting",

    description:
      "A full-stack language center management platform covering authentication, account security, administrative workflows, multi-tenancy, reporting, and frontend-backend integration.",

    descriptionAr:
      "منصة Full-Stack لإدارة مركز لغات تشمل المصادقة وأمان الحسابات وسير العمل الإداري وتعدد المستأجرين والتقارير والتكامل بين الواجهة والخادم.",

    technologies: [
      "Laravel",
      "PHP",
      "React",
      "Inertia.js",
      "TypeScript",
      "Filament",
      "MySQL"
    ],

    githubShowcase:
      "https://github.com/Mohamed-Issam-1/language-center-management-system-showcase"
  },

  {
    slug: "arabic-ai-travel-assistant",

    title: "Arabic AI Travel Assistant",
    titleAr: "مساعد السفر الذكي باللغة العربية",

    category: "AI / NLP",
    categoryAr: "الذكاء الاصطناعي / معالجة اللغة",

    filter: "ai-data",

    type: "Academic AI Project",
    typeAr: "مشروع أكاديمي في الذكاء الاصطناعي",

    role: "Developer",
    roleAr: "المطور",

    status: "completed",
    priority: "featured",

    description:
      "An Arabic-first AI travel assistant combining Qwen2.5 with TF-IDF retrieval and a local travel knowledge base to generate grounded recommendations and itineraries.",

    descriptionAr:
      "مساعد سفر ذكي موجه للعربية يجمع بين Qwen2.5 واسترجاع المعلومات باستخدام TF-IDF وقاعدة معرفة محلية لتوليد توصيات وخطط سفر أكثر التزامًا بالمصادر المتاحة.",

    technologies: [
      "Python",
      "Qwen2.5",
      "Hugging Face",
      "PyTorch",
      "Gradio",
      "TF-IDF",
      "scikit-learn"
    ],

    github:
      "https://github.com/Mohamed-Issam-1/ai-travel-assistant"
  },

  {
    slug: "bookspace-library-management-system",

    title: "BookSpace — Library Management System",
    titleAr: "BookSpace — نظام إدارة مكتبة",

    category: "Desktop Application",
    categoryAr: "تطبيق سطح مكتب",

    filter: "desktop",

    type: "Individual Academic Project",
    typeAr: "مشروع أكاديمي فردي",

    role: "Developer",
    roleAr: "المطور",

    status: "completed",
    priority: "featured",

    description:
      "A JavaFX desktop application for managing library operations with database integration, structured workflows, and a modernized user interface.",

    descriptionAr:
      "تطبيق سطح مكتب مبني باستخدام JavaFX لإدارة عمليات المكتبة، مع ربط قاعدة بيانات، وتنظيم سير العمل، وواجهة مستخدم حديثة.",

    technologies: [
      "Java",
      "JavaFX",
      "MariaDB",
      "MySQL",
      "JDBC"
    ],

    github:
      "https://github.com/Mohamed-Issam-1/bookspace-library-management-system"
  },

  {
    slug: "almosafer",

    title: "ALMosafer — AI-Powered Travel Mobile App",
    titleAr: "ALMosafer — تطبيق سفر مدعوم بالذكاء الاصطناعي",

    category: "UI/UX Design",
    categoryAr: "تصميم UI/UX",

    filter: "design",

    type: "Individual Academic Project",
    typeAr: "مشروع أكاديمي فردي",

    role: "UI/UX Designer",
    roleAr: "مصمم UI/UX",

    status: "completed",
    priority: "featured",

    description:
      "A mobile UI/UX case study exploring AI-assisted travel planning, destination discovery, saved destinations, bookings, and account management within one consistent experience.",

    descriptionAr:
      "دراسة حالة لتصميم تجربة تطبيق سفر على الهاتف تستكشف التخطيط المدعوم بالذكاء الاصطناعي، واكتشاف الوجهات، والمحفوظات، والحجوزات، وإدارة الحساب ضمن تجربة متكاملة.",

    technologies: [
      "Figma",
      "UI Design",
      "UX Design",
      "Wireframing",
      "Prototyping"
    ],

    externalUrl:
      "https://www.figma.com/design/8a8nXYFBKrd3kjiypZt5f7/AlMosafer-Project?node-id=0-1&t=MHiUIwumdWst5OxP-1"
  },

  {
    slug: "oracle-apex-contact-management-system",

    title: "Oracle APEX Contact Management System",
    titleAr: "نظام إدارة جهات الاتصال باستخدام Oracle APEX",

    category: "Database Application",
    categoryAr: "تطبيق قواعد بيانات",

    filter: "web",

    type: "Academic Database Project",
    typeAr: "مشروع أكاديمي في قواعد البيانات",

    role: "Developer",
    roleAr: "المطور",

    status: "completed",
    priority: "strong-supporting",

    description:
      "A contact management system built with Oracle APEX and Oracle Database, featuring interactive reports, server-side validation, authentication, and role-based access control.",

    descriptionAr:
      "نظام لإدارة جهات الاتصال باستخدام Oracle APEX وOracle Database، ويشمل تقارير تفاعلية والتحقق من البيانات على الخادم والمصادقة والتحكم بالصلاحيات حسب الأدوار.",

    technologies: [
      "Oracle APEX",
      "Oracle Database",
      "PL/SQL",
      "SQL"
    ],

    github:
      "https://github.com/Mohamed-Issam-1/oracle-apex-contact-management-system"
  },

  {
    slug: "simo-and-the-lost-crystal",

    title: "Simo and the Lost Crystal",
    titleAr: "Simo and the Lost Crystal",

    category: "Game Development",
    categoryAr: "تطوير الألعاب",

    filter: "desktop",

    type: "Independent Project",
    typeAr: "مشروع مستقل",

    role: "Game Developer",
    roleAr: "مطور ألعاب",

    status: "in-progress",
    priority: "strong-supporting",

    description:
      "A 2D side-scrolling platformer developed in Unity, combining custom pixel-art direction, character animation, gameplay systems, menus, cutscenes, and level design.",

    descriptionAr:
      "لعبة منصات ثنائية الأبعاد يتم تطويرها باستخدام Unity، تجمع بين أسلوب Pixel Art مخصص وتحريك الشخصية وأنظمة اللعب والقوائم والمشاهد القصصية وتصميم المراحل.",

    technologies: [
      "Unity",
      "C#",
      "2D",
      "Pixel Art",
      "Game Design"
    ],
    githubShowcase:
      "https://github.com/Mohamed-Issam-1/simo-and-the-lost-crystal-showcase"
  },

  {
    slug: "youtube-search-app",

    title: "YouTube Search App",
    titleAr: "تطبيق البحث في YouTube",

    category: "Android Application",
    categoryAr: "تطبيق أندرويد",

    filter: "mobile",

    type: "Academic Mobile Project",
    typeAr: "مشروع أكاديمي في تطوير تطبيقات الهاتف",

    role: "Developer",
    roleAr: "المطور",

    status: "completed",
    priority: "supporting",

    description:
      "An Android application for searching and browsing YouTube content through an external API, built as a practical mobile development project.",

    descriptionAr:
      "تطبيق أندرويد للبحث وتصفح محتوى YouTube من خلال API خارجي، يركز على تكامل واجهات API وتطوير تطبيقات الهاتف.",

    technologies: [
      "Java",
      "Android",
      "REST API",
      "JSON"
    ],

    github:
      "https://github.com/Mohamed-Issam-1/YouTubeSearchApp"
  },

  {
    slug: "twitter-emotion-classification",

    title: "Twitter Emotion Classification",
    titleAr: "تصنيف المشاعر في تغريدات Twitter",

    category: "Machine Learning / NLP",
    categoryAr: "تعلم الآلة / معالجة اللغة",

    filter: "ai-data",

    type: "Academic Machine Learning Project",
    typeAr: "مشروع أكاديمي في تعلم الآلة",

    role: "Developer",
    roleAr: "المطور",

    status: "completed",
    priority: "supporting",

    description:
      "A machine learning project focused on classifying emotions in text using preprocessing, feature engineering, model training, and evaluation workflows.",

    descriptionAr:
      "مشروع تعلم آلة يركز على تصنيف المشاعر في النصوص من خلال معالجة البيانات وهندسة الخصائص وتدريب النماذج وتقييمها.",

    technologies: [
      "Python",
      "NLP",
      "scikit-learn",
      "pandas",
      "Machine Learning"
    ],

    github:
      "https://github.com/Mohamed-Issam-1/twitter-emotion-classification"
  },

  {
    slug: "bank-marketing-classification",

    title: "Bank Marketing Classification",
    titleAr: "تصنيف بيانات التسويق البنكي",

    category: "Machine Learning",
    categoryAr: "تعلم الآلة",

    filter: "ai-data",

    type: "Academic Machine Learning Project",
    typeAr: "مشروع أكاديمي في تعلم الآلة",

    role: "Developer",
    roleAr: "المطور",

    status: "completed",
    priority: "supporting",

    description:
      "A supervised machine learning classification project exploring preprocessing, model comparison, evaluation, and interpretation on bank marketing data.",

    descriptionAr:
      "مشروع تصنيف باستخدام تعلم الآلة يستكشف تجهيز البيانات ومقارنة النماذج وتقييمها وتحليل النتائج على بيانات التسويق البنكي.",

    technologies: [
      "Python",
      "pandas",
      "scikit-learn",
      "Classification",
      "Machine Learning"
    ],

    github:
      "https://github.com/Mohamed-Issam-1/bank-marketing-classification"
  },

  {
    slug: "football-match-data-pipeline",

    title: "Football Match Data Pipeline",
    titleAr: "خط معالجة بيانات مباريات كرة القدم",

    category: "Data Engineering",
    categoryAr: "هندسة البيانات",

    filter: "ai-data",

    type: "Data Project",
    typeAr: "مشروع بيانات",

    role: "Developer",
    roleAr: "المطور",

    status: "completed",
    priority: "supporting",

    description:
      "A data collection and processing project focused on extracting football match information and transforming it into structured datasets for analysis.",

    descriptionAr:
      "مشروع لجمع ومعالجة بيانات مباريات كرة القدم وتحويلها إلى بيانات منظمة قابلة للتحليل.",

    technologies: [
      "Python",
      "Web Scraping",
      "pandas",
      "Data Processing"
    ],

    github:
      "https://github.com/Mohamed-Issam-1/football-match-data-pipeline"
  },

  {
    slug: "ai-job-market-impact-analysis",

    title: "AI Job Market Impact Analysis",
    titleAr: "تحليل تأثير الذكاء الاصطناعي على سوق العمل",

    category: "Data Analysis",
    categoryAr: "تحليل البيانات",

    filter: "ai-data",

    type: "Data Analysis Project",
    typeAr: "مشروع تحليل بيانات",

    role: "Data Analyst",
    roleAr: "محلل بيانات",

    status: "completed",
    priority: "supporting",

    description:
      "An exploratory data analysis project examining patterns related to AI and employment using a structured synthetic dataset.",

    descriptionAr:
      "مشروع تحليل بيانات استكشافي لدراسة أنماط مرتبطة بالذكاء الاصطناعي وسوق العمل باستخدام مجموعة بيانات اصطناعية منظمة.",

    technologies: [
      "Python",
      "pandas",
      "Data Analysis",
      "Visualization"
    ],

    github:
      "https://github.com/Mohamed-Issam-1/ai-job-market-impact-analysis"
  },

  {
    slug: "backloggd-games-data-analysis",

    title: "Backloggd Games Data Analysis",
    titleAr: "تحليل بيانات ألعاب Backloggd",

    category: "Data Analysis",
    categoryAr: "تحليل البيانات",

    filter: "ai-data",

    type: "Data Project",
    typeAr: "مشروع بيانات",

    role: "Data Analyst",
    roleAr: "محلل بيانات",

    status: "completed",
    priority: "supporting",

    description:
      "A data analysis project exploring video-game information collected from Backloggd and preparing it for structured analysis and visualization.",

    descriptionAr:
      "مشروع لتحليل بيانات ألعاب الفيديو المجمعة من Backloggd وتجهيزها للتحليل المنظم والتصورات البيانية.",

    technologies: [
      "Python",
      "pandas",
      "Data Analysis",
      "Web Data"
    ],

    github:
      "https://github.com/Mohamed-Issam-1/backloggd-games-data-analysis"
  },

  {
    slug: "machine-learning-course-labs",

    title: "Machine Learning Course Labs",
    titleAr: "مختبرات مقرر تعلم الآلة",

    category: "Machine Learning",
    categoryAr: "تعلم الآلة",

    filter: "ai-data",

    type: "Academic Lab Collection",
    typeAr: "مجموعة مختبرات أكاديمية",

    role: "Developer",
    roleAr: "المطور",

    status: "completed",
    priority: "academic",

    description:
      "A collection of practical machine learning exercises documenting experimentation with preprocessing, algorithms, training, and evaluation.",

    descriptionAr:
      "مجموعة من التطبيقات العملية في تعلم الآلة توثق التجارب المتعلقة بتجهيز البيانات والخوارزميات والتدريب والتقييم.",

    technologies: [
      "Python",
      "pandas",
      "scikit-learn",
      "Machine Learning"
    ],

    github:
      "https://github.com/Mohamed-Issam-1/machine-learning-course-labs"
  },

  {
    slug: "olist-mlops",

    title: "Olist MLOps Pipeline",
    titleAr: "منظومة Olist MLOps",

    category: "Machine Learning / MLOps",
    categoryAr: "تعلم الآلة / MLOps",

    filter: "ai-data",

    type: "End-to-End MLOps Project",
    typeAr: "مشروع MLOps متكامل",

    role: "MLOps / Machine Learning Developer",
    roleAr: "مطور MLOps وتعلم آلة",

    status: "completed",
    priority: "strong-supporting",

    description:
      "An end-to-end MLOps system for predicting late e-commerce deliveries, covering reproducible model development, data and artifact versioning, model registry, production inference APIs, containerized deployment, automated testing, CI/CD, logging, and runtime monitoring.",

    descriptionAr:
      "نظام MLOps متكامل للتنبؤ بتأخر طلبات التجارة الإلكترونية، يشمل تطوير النموذج بشكل قابل لإعادة الإنتاج، وإدارة إصدارات البيانات والـartifacts، وتسجيل النماذج، وخدمات inference عبر API، والتشغيل بالحاويات، والاختبارات الآلية، وCI/CD، والتسجيل والمراقبة التشغيلية.",

    technologies: [
      "Python",
      "scikit-learn",
      "FastAPI",
      "MLflow",
      "DVC",
      "Docker",
      "PostgreSQL",
      "Great Expectations",
      "GitHub Actions"
    ],

    github:
      "https://github.com/Mohamed-Issam-1/Olist-MLOps"
  },
  {
    slug: "intelligent-university-conversational-system",

    title: "Intelligent University Conversational System",
    titleAr: "نظام محادثة جامعي ذكي",

    category: "Software Engineering Planning",
    categoryAr: "تخطيط هندسة البرمجيات",

    filter: "planning",

    type: "Software Engineering Planning Project",
    typeAr: "مشروع تخطيط هندسة برمجيات",

    role: "Project Planner",
    roleAr: "مخطط المشروع",

    status: "completed",
    priority: "academic",

    description:
      "A software engineering planning project documenting requirements, diagrams, project scheduling, and system planning for an intelligent university conversational system.",

    descriptionAr:
      "مشروع تخطيط في هندسة البرمجيات يوثق المتطلبات والمخططات والجدولة وخطة نظام محادثة جامعي ذكي.",

    technologies: [
      "Software Engineering",
      "Requirements",
      "EDraw",
      "Microsoft Project"
    ],

    github:
      "https://github.com/Mohamed-Issam-1/intelligent-university-conversational-system"
  }
];

export const featuredProjects = projects.filter(
  (project) => project.priority === "featured"
);

export const projectFilters = [
  "all",
  "web",
  "ai-data",
  "desktop",
  "mobile",
  "design",
  "planning"
] as const;

export type ProjectFilterValue =
  (typeof projectFilters)[number];