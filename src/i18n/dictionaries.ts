import type { Locale } from "./config";

export type ServiceItem = {
  icon: string;
  title: string;
  description: string;
  features: string[];
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type WorkItem = {
  category: string;
  title: string;
  description: string;
  tags: string[];
};

export type PrivacyBlock =
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "contact"; label: string; email: string };

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  brand: {
    name: string;
    tagline: string;
  };
  nav: {
    home: string;
    services: string;
    work: string;
    about: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    titleLead: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
  };
  services: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: ServiceItem[];
  };
  process: {
    eyebrow: string;
    heading: string;
    subheading: string;
    steps: ProcessStep[];
  };
  tech: {
    eyebrow: string;
    heading: string;
    subheading: string;
    groups: { title: string; items: string[] }[];
  };
  work: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: WorkItem[];
  };
  about: {
    eyebrow: string;
    heading: string;
    body: string[];
    values: { title: string; description: string }[];
  };
  ctaBand: {
    heading: string;
    subheading: string;
    button: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    subheading: string;
    form: {
      name: string;
      email: string;
      service: string;
      message: string;
      submit: string;
      success: string;
    };
    info: {
      emailLabel: string;
      email: string;
      phoneLabel: string;
      phones: { label: string; number: string }[];
      locationLabel: string;
      location: string;
    };
  };
  footer: {
    description: string;
    quickLinks: string;
    servicesTitle: string;
    contactTitle: string;
    rights: string;
    privacy: string;
    backHome: string;
  };
  privacy: {
    title: string;
    updated: string;
    intro: string;
    blocks: PrivacyBlock[];
  };
};

const en: Dictionary = {
  meta: {
    title: "gondalsoft — AI-Powered Software & Mobile App Development",
    description:
      "gondalsoft builds modern iOS, Android and web applications enhanced with AI. From startup MVPs to enterprise products, we turn ideas into reliable software.",
  },
  brand: {
    name: "gondalsoft",
    tagline: "AI-Powered Software Studio",
  },
  nav: {
    home: "Home",
    services: "Services",
    work: "Work",
    about: "About",
    contact: "Contact",
    cta: "Start a project",
  },
  hero: {
    badge: "iOS · Android · Web · AI",
    titleLead: "We build intelligent apps that move",
    titleHighlight: "your business forward",
    subtitle:
      "gondalsoft is a software studio crafting modern mobile and web products with built-in AI. Whether it's a client project or your next big startup idea, we ship fast, scalable, and beautiful software.",
    ctaPrimary: "Start your project",
    ctaSecondary: "See our services",
    stats: [
      { value: "iOS & Android", label: "Native & cross-platform" },
      { value: "AI-first", label: "Smart features built in" },
      { value: "Any stack", label: "Web on your terms" },
    ],
  },
  services: {
    eyebrow: "What we do",
    heading: "Services built for ambitious products",
    subheading:
      "End-to-end development — from the first idea and design to launch, AI integration, and long-term scaling.",
    items: [
      {
        icon: "mobile",
        title: "Mobile App Development",
        description:
          "High-performance iOS and Android apps, native or cross-platform, designed to delight users and scale with you.",
        features: ["iOS (Swift)", "Android (Kotlin)", "Flutter & React Native"],
      },
      {
        icon: "ai",
        title: "AI Features & Integration",
        description:
          "Bring modern AI into your product — chat assistants, recommendations, vision, automation and LLM-powered workflows.",
        features: ["LLM & chatbots", "Recommendation engines", "Computer vision"],
      },
      {
        icon: "web",
        title: "Web Development",
        description:
          "Websites and web apps in any tech stack — marketing sites, dashboards, SaaS platforms and e-commerce.",
        features: ["Next.js & React", "Node & serverless", "E-commerce"],
      },
      {
        icon: "rocket",
        title: "MVP & Startup Products",
        description:
          "Have an entrepreneur idea? We take it from concept to a market-ready product and help you launch.",
        features: ["Idea to MVP", "Product strategy", "Go-to-market support"],
      },
      {
        icon: "cloud",
        title: "Cloud & DevOps",
        description:
          "Reliable infrastructure with automated CI/CD, monitoring and scalable cloud hosting.",
        features: ["Firebase & GCP", "CI/CD pipelines", "Scalable hosting"],
      },
      {
        icon: "design",
        title: "UI/UX Design",
        description:
          "User-centered interfaces and design systems that make your product intuitive and memorable.",
        features: ["Product design", "Design systems", "Prototyping"],
      },
    ],
  },
  process: {
    eyebrow: "How we work",
    heading: "A clear path from idea to launch",
    subheading:
      "A transparent process that keeps you involved at every stage and gets your product shipped.",
    steps: [
      {
        step: "01",
        title: "Discover",
        description:
          "We learn your goals, users and market to define the right scope and a clear roadmap.",
      },
      {
        step: "02",
        title: "Design",
        description:
          "We craft intuitive interfaces and a solid architecture before a line of production code.",
      },
      {
        step: "03",
        title: "Build",
        description:
          "Agile development with AI where it adds value, regular demos and clean, tested code.",
      },
      {
        step: "04",
        title: "Launch & Scale",
        description:
          "We deploy, monitor and iterate — supporting your product as it grows.",
      },
    ],
  },
  tech: {
    eyebrow: "Technology",
    heading: "We work with the right tools for the job",
    subheading:
      "Any tech stack, chosen to fit your product, budget and long-term goals.",
    groups: [
      { title: "Mobile", items: ["Swift", "Kotlin", "Flutter", "React Native"] },
      { title: "Web", items: ["Next.js", "React", "Vue", "Node.js"] },
      { title: "AI / ML", items: ["OpenAI", "TensorFlow", "PyTorch", "LangChain"] },
      { title: "Cloud", items: ["Firebase", "Google Cloud", "AWS", "Vercel"] },
    ],
  },
  work: {
    eyebrow: "Our work",
    heading: "Ideas we turned into products",
    subheading:
      "A glimpse of the kind of software we love to build across industries.",
    items: [
      {
        category: "Mobile · Web · POS",
        title: "Keevana — Mobile POS",
        description:
          "An all-in-one Point of Sale app for retailers with sales tracking, inventory management, barcode scanning, digital receipts, employee roles and offline mode.",
        tags: ["Flutter", "iOS", "Android", "Firebase"],
      },
      {
        category: "Mobile · Education",
        title: "Derivative Calculator",
        description:
          "A scientific calculator with fractions, roots and advanced math symbols, plus multi-language step-by-step solutions.",
        tags: ["Flutter", "Firebase Functions", "MathQuill"],
      },
      {
        category: "Mobile · AI",
        title: "AI Math Solver",
        description:
          "An AI-powered math solver with a professional math input/output interface and localized, well-formatted answers.",
        tags: ["Flutter", "AI", "WebView"],
      },
      {
        category: "Mobile · AI",
        title: "Handwriting to Text (OCR)",
        description:
          "Fast and accurate handwriting recognition that converts notes to text, both online and offline.",
        tags: ["Flutter", "Google ML Kit", "OCR"],
      },
      {
        category: "Mobile · AI",
        title: "AI Photo Enhancer",
        description:
          "AI photo tools: colorize black & white images, unblur and enhance photos, and generate a \u201CFuture Kid\u201D image.",
        tags: ["Flutter", "AI", "Firebase"],
      },
      {
        category: "Mobile · Web",
        title: "Origin Of: Meme, Trend & Story",
        description:
          "A discovery platform that reveals the backstories, sources and significance of trending images.",
        tags: ["Flutter", "Firebase", "AdMob"],
      },
      {
        category: "Mobile · E-commerce",
        title: "Nexamena",
        description:
          "An electronics e-commerce app with cart, Google Maps, order tracking and Stripe payments.",
        tags: ["Flutter", "Stripe", "Firebase"],
      },
      {
        category: "Mobile · AI",
        title: "PawID — Pets Info",
        description:
          "An AI app that detects dog breeds from camera or gallery images using vision and generative models.",
        tags: ["Flutter", "Google Vision", "Gemini"],
      },
      {
        category: "Mobile",
        title: "AutoKaar",
        description:
          "An appointment app connecting drivers with mechanics, featuring real-time chat, service history and location-based search.",
        tags: ["Flutter", "Firebase", "Google Maps"],
      },
      {
        category: "Web",
        title: "Property Hub",
        description:
          "A secure property transactions platform with user authentication and role-based access control.",
        tags: ["ASP.NET", "MVC", "SQL"],
      },
      {
        category: "Desktop",
        title: "Cricket Club Management",
        description:
          "A sports management system that lets coaches and players manage teams and personal profiles.",
        tags: ["Windows Forms", "SQL"],
      },
      {
        category: "AI · Data",
        title: "Data Scraping & AI Projects",
        description:
          "A set of AI projects including GPT integration, LLM fine-tuning, geospatial visualization and web-scraping automation.",
        tags: ["Python", "OpenAI", "Tableau"],
      },
    ],
  },
  about: {
    eyebrow: "About gondalsoft",
    heading: "A studio that treats your product like our own",
    body: [
      "gondalsoft is a software development studio focused on building modern mobile and web applications powered by AI. We partner with startups and businesses to turn ideas into reliable, scalable products.",
      "Whether you need a client project delivered or want to launch your own entrepreneurial idea, we bring engineering excellence, thoughtful design and the latest technology to every build.",
    ],
    values: [
      {
        title: "Quality first",
        description: "Clean, tested, maintainable code you can build on.",
      },
      {
        title: "Transparent partnership",
        description: "Clear communication and honest timelines at every step.",
      },
      {
        title: "AI-native mindset",
        description: "We use AI to make your product smarter and faster to build.",
      },
      {
        title: "Built to scale",
        description: "Architecture and infrastructure ready for real growth.",
      },
    ],
  },
  ctaBand: {
    heading: "Have an idea? Let's build it together.",
    subheading:
      "Tell us about your project and we'll get back to you with a plan to make it real.",
    button: "Get in touch",
  },
  contact: {
    eyebrow: "Contact",
    heading: "Let's start something great",
    subheading:
      "Tell us about your project, idea or product and we'll reply within one business day.",
    form: {
      name: "Your name",
      email: "Email address",
      service: "What do you need?",
      message: "Tell us about your project",
      submit: "Send message",
      success: "Thanks! Your message has been prepared in your email client.",
    },
    info: {
      emailLabel: "Email",
      email: "shahbaz.gondal588@gmail.com",
      phoneLabel: "Phone",
      phones: [
        { label: "Saudi Arabia", number: "+966538518945" },
        { label: "Pakistan", number: "+923130041445" },
      ],
      locationLabel: "Location",
      location: "Remote · Worldwide",
    },
  },
  footer: {
    description:
      "AI-powered software studio building modern mobile and web products for startups and businesses worldwide.",
    quickLinks: "Quick links",
    servicesTitle: "Services",
    contactTitle: "Contact",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    backHome: "Back to home",
  },
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: June 2026",
    intro:
      'At GondalSoft, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, including our mobile applications and website (collectively referred to as "the Services"). By using our Services, you consent to the data practices described in this policy.',
    blocks: [
      { type: "heading", text: "1. Information We Collect" },
      { type: "subheading", text: "Personal Information" },
      {
        type: "paragraph",
        text: "We may collect personal information that you provide directly to us, including:",
      },
      {
        type: "list",
        items: [
          "Email address",
          "Any other information you choose to provide when you create an account or contact us",
        ],
      },
      { type: "subheading", text: "Non-Personal Information" },
      {
        type: "paragraph",
        text: "No uploaded content is shown to the public unless you want to show it (by changing privacy to public). By default, the privacy of uploaded content is private. We may automatically collect certain non-personal information when you use our Services, including:",
      },
      {
        type: "list",
        items: [
          "Device information (e.g., device type, operating system)",
          "Usage data (e.g., time and date of access, features used)",
          "IP address",
          "Browser type and settings",
        ],
      },
      { type: "heading", text: "2. How We Use Your Information" },
      {
        type: "paragraph",
        text: "We may use the information we collect for various purposes, including:",
      },
      {
        type: "list",
        items: [
          "To provide, maintain, and improve our Services",
          "To authenticate users during the login process",
          "To personalize your experience and deliver content tailored to your interests",
          "To communicate with you, including sending updates and notifications",
          "To analyze usage and trends to improve our Services",
          "To prevent fraudulent or unauthorized activities",
        ],
      },
      { type: "heading", text: "3. Data Sharing and Disclosure" },
      {
        type: "paragraph",
        text: "Third-Party Service Providers: We do not share your personal information with third parties. We may use third-party service providers for specific tasks (e.g., analytics), but they are not permitted to use your personal information for any purpose other than to assist us.",
      },
      {
        type: "paragraph",
        text: "Legal Compliance: We may disclose your information if required to do so by law or in response to valid requests by public authorities.",
      },
      {
        type: "paragraph",
        text: "Business Transfers: If we are involved in a merger, acquisition, or asset sale, your personal information may be transferred.",
      },
      { type: "heading", text: "4. Data Security" },
      {
        type: "paragraph",
        text: "We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.",
      },
      { type: "heading", text: "5. User Rights" },
      {
        type: "paragraph",
        text: "You have the following rights regarding your personal information:",
      },
      {
        type: "list",
        items: [
          "Access: Request access to your personal information",
          "Correction: Request correction of inaccuracies",
          "Deletion: Request deletion of your information",
          "Opt-Out: Opt out of promotional communications",
        ],
      },
      { type: "heading", text: "6. Cookies and Tracking Technologies" },
      {
        type: "paragraph",
        text: "Our Services may use cookies and similar tracking technologies to enhance user experience. You can choose to accept or decline cookies through your browser settings.",
      },
      { type: "heading", text: "7. Children's Privacy" },
      {
        type: "paragraph",
        text: "Our Services are safe for children under 13. We do not knowingly collect personal information from children.",
      },
      { type: "heading", text: "8. Changes to This Privacy Policy" },
      {
        type: "paragraph",
        text: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website and updating the effective date.",
      },
      { type: "heading", text: "9. Contact Us" },
      {
        type: "paragraph",
        text: "If you have any questions or concerns about this Privacy Policy, please contact us at:",
      },
      {
        type: "contact",
        label: "Email",
        email: "shahbaz.gondal588@gmail.com",
      },
    ],
  },
};

const ar: Dictionary = {
  meta: {
    title: "غوندال برمجيات — تطوير برمجيات وتطبيقات جوال مدعومة بالذكاء الاصطناعي",
    description:
      "غوندال برمجيات تبني تطبيقات حديثة لأنظمة iOS وأندرويد والويب معززة بالذكاء الاصطناعي. من نماذج الشركات الناشئة الأولية إلى منتجات المؤسسات، نحوّل أفكارك إلى برمجيات موثوقة.",
  },
  brand: {
    name: "غوندال برمجيات",
    tagline: "استوديو برمجيات مدعوم بالذكاء الاصطناعي",
  },
  nav: {
    home: "الرئيسية",
    services: "الخدمات",
    work: "أعمالنا",
    about: "من نحن",
    contact: "تواصل معنا",
    cta: "ابدأ مشروعك",
  },
  hero: {
    badge: "iOS · أندرويد · ويب · ذكاء اصطناعي",
    titleLead: "نبني تطبيقات ذكية تدفع",
    titleHighlight: "أعمالك نحو الأمام",
    subtitle:
      "غوندال برمجيات استوديو يصنع منتجات جوال وويب حديثة مزوّدة بالذكاء الاصطناعي. سواء كان مشروعًا لعميل أو فكرتك الريادية القادمة، نطلق برمجيات سريعة وقابلة للتوسع وجميلة.",
    ctaPrimary: "ابدأ مشروعك",
    ctaSecondary: "تعرّف على خدماتنا",
    stats: [
      { value: "iOS وأندرويد", label: "تطبيقات أصلية ومتعددة المنصات" },
      { value: "الذكاء أولًا", label: "ميزات ذكية مدمجة" },
      { value: "أي تقنية", label: "ويب وفق احتياجك" },
    ],
  },
  services: {
    eyebrow: "ماذا نقدّم",
    heading: "خدمات مصمّمة للمنتجات الطموحة",
    subheading:
      "تطوير متكامل — من الفكرة الأولى والتصميم إلى الإطلاق ودمج الذكاء الاصطناعي والتوسّع على المدى الطويل.",
    items: [
      {
        icon: "mobile",
        title: "تطوير تطبيقات الجوال",
        description:
          "تطبيقات iOS وأندرويد عالية الأداء، أصلية أو متعددة المنصات، مصممة لإسعاد المستخدمين والتوسع معك.",
        features: ["iOS (Swift)", "أندرويد (Kotlin)", "Flutter و React Native"],
      },
      {
        icon: "ai",
        title: "ميزات الذكاء الاصطناعي ودمجه",
        description:
          "أدخل الذكاء الاصطناعي الحديث إلى منتجك — مساعدات محادثة، توصيات، رؤية حاسوبية، وأتمتة مدعومة بنماذج اللغة.",
        features: ["نماذج اللغة والمحادثة", "محركات التوصيات", "الرؤية الحاسوبية"],
      },
      {
        icon: "web",
        title: "تطوير الويب",
        description:
          "مواقع وتطبيقات ويب بأي تقنية — مواقع تعريفية، لوحات تحكم، منصات SaaS، ومتاجر إلكترونية.",
        features: ["Next.js و React", "Node والخوادم السحابية", "التجارة الإلكترونية"],
      },
      {
        icon: "rocket",
        title: "النماذج الأولية ومنتجات الشركات الناشئة",
        description:
          "لديك فكرة ريادية؟ نأخذها من المفهوم إلى منتج جاهز للسوق ونساعدك على إطلاقه.",
        features: ["من الفكرة إلى MVP", "استراتيجية المنتج", "دعم دخول السوق"],
      },
      {
        icon: "cloud",
        title: "السحابة وDevOps",
        description:
          "بنية تحتية موثوقة مع نشر آلي ومراقبة واستضافة سحابية قابلة للتوسع.",
        features: ["Firebase و GCP", "خطوط CI/CD", "استضافة قابلة للتوسع"],
      },
      {
        icon: "design",
        title: "تصميم واجهات وتجربة المستخدم",
        description:
          "واجهات تركّز على المستخدم وأنظمة تصميم تجعل منتجك بديهيًا ولا يُنسى.",
        features: ["تصميم المنتج", "أنظمة التصميم", "النماذج التفاعلية"],
      },
    ],
  },
  process: {
    eyebrow: "كيف نعمل",
    heading: "مسار واضح من الفكرة إلى الإطلاق",
    subheading:
      "عملية شفافة تبقيك مشاركًا في كل مرحلة وتوصل منتجك إلى النور.",
    steps: [
      {
        step: "٠١",
        title: "الاكتشاف",
        description:
          "نتعرّف على أهدافك ومستخدميك وسوقك لتحديد النطاق الصحيح وخارطة طريق واضحة.",
      },
      {
        step: "٠٢",
        title: "التصميم",
        description:
          "نصمّم واجهات بديهية وبنية متينة قبل كتابة أي سطر برمجي للإنتاج.",
      },
      {
        step: "٠٣",
        title: "التطوير",
        description:
          "تطوير مرن مع الذكاء الاصطناعي حيث يضيف قيمة، وعروض دورية، وكود نظيف ومُختبر.",
      },
      {
        step: "٠٤",
        title: "الإطلاق والتوسّع",
        description:
          "ننشر ونراقب ونحسّن — وندعم منتجك أثناء نموّه.",
      },
    ],
  },
  tech: {
    eyebrow: "التقنيات",
    heading: "نعمل بالأدوات المناسبة لكل مهمة",
    subheading: "أي تقنية، نختارها لتلائم منتجك وميزانيتك وأهدافك على المدى الطويل.",
    groups: [
      { title: "الجوال", items: ["Swift", "Kotlin", "Flutter", "React Native"] },
      { title: "الويب", items: ["Next.js", "React", "Vue", "Node.js"] },
      { title: "الذكاء الاصطناعي", items: ["OpenAI", "TensorFlow", "PyTorch", "LangChain"] },
      { title: "السحابة", items: ["Firebase", "Google Cloud", "AWS", "Vercel"] },
    ],
  },
  work: {
    eyebrow: "أعمالنا",
    heading: "أفكار حوّلناها إلى منتجات",
    subheading: "لمحة عن نوع البرمجيات التي نحب بناءها عبر مختلف القطاعات.",
    items: [
      {
        category: "جوال · ويب · نقاط بيع",
        title: "Keevana — نقاط بيع متنقلة",
        description:
          "تطبيق نقاط بيع متكامل للتجار مع متابعة المبيعات وإدارة المخزون ومسح الباركود والإيصالات الرقمية وصلاحيات الموظفين ووضع العمل دون اتصال.",
        tags: ["Flutter", "iOS", "أندرويد", "Firebase"],
      },
      {
        category: "جوال · تعليم",
        title: "حاسبة المشتقات",
        description:
          "حاسبة علمية تدعم الكسور والجذور والرموز الرياضية المتقدمة مع خطوات حل متعددة اللغات.",
        tags: ["Flutter", "Firebase Functions", "MathQuill"],
      },
      {
        category: "جوال · ذكاء اصطناعي",
        title: "حلّال الرياضيات بالذكاء الاصطناعي",
        description:
          "حلّال رياضيات مدعوم بالذكاء الاصطناعي بواجهة إدخال وإخراج رياضية احترافية وإجابات منسّقة ومترجمة.",
        tags: ["Flutter", "ذكاء اصطناعي", "WebView"],
      },
      {
        category: "جوال · ذكاء اصطناعي",
        title: "تحويل الكتابة اليدوية إلى نص (OCR)",
        description:
          "تعرّف سريع ودقيق على الكتابة اليدوية لتحويل الملاحظات إلى نص، عبر الإنترنت أو دون اتصال.",
        tags: ["Flutter", "Google ML Kit", "OCR"],
      },
      {
        category: "جوال · ذكاء اصطناعي",
        title: "محسّن الصور بالذكاء الاصطناعي",
        description:
          "أدوات صور بالذكاء الاصطناعي: تلوين الصور بالأبيض والأسود، وإزالة التشويش وتحسين الصور، وإنشاء صورة «طفل المستقبل».",
        tags: ["Flutter", "ذكاء اصطناعي", "Firebase"],
      },
      {
        category: "جوال · ويب",
        title: "أصل: ميم واتجاه وقصة",
        description:
          "منصة استكشاف تكشف القصص الخلفية للصور الرائجة ومصادرها وأهميتها.",
        tags: ["Flutter", "Firebase", "AdMob"],
      },
      {
        category: "جوال · تجارة إلكترونية",
        title: "Nexamena",
        description:
          "تطبيق تجارة إلكترونية للإلكترونيات مع سلة شراء وخرائط جوجل وتتبّع الطلبات ومدفوعات Stripe.",
        tags: ["Flutter", "Stripe", "Firebase"],
      },
      {
        category: "جوال · ذكاء اصطناعي",
        title: "PawID — معلومات الحيوانات",
        description:
          "تطبيق ذكاء اصطناعي يتعرّف على سلالات الكلاب من صور الكاميرا أو المعرض باستخدام نماذج الرؤية والتوليد.",
        tags: ["Flutter", "Google Vision", "Gemini"],
      },
      {
        category: "جوال",
        title: "AutoKaar",
        description:
          "تطبيق مواعيد يربط السائقين بالميكانيكيين، مع محادثة لحظية وسجل خدمات وبحث حسب الموقع.",
        tags: ["Flutter", "Firebase", "خرائط جوجل"],
      },
      {
        category: "ويب",
        title: "Property Hub",
        description:
          "منصة آمنة لمعاملات العقارات مع مصادقة المستخدمين والتحكم بالوصول حسب الأدوار.",
        tags: ["ASP.NET", "MVC", "SQL"],
      },
      {
        category: "سطح المكتب",
        title: "نظام إدارة نادي الكريكيت",
        description:
          "نظام لإدارة الرياضة يتيح للمدربين واللاعبين إدارة الفرق والملفات الشخصية.",
        tags: ["Windows Forms", "SQL"],
      },
      {
        category: "ذكاء اصطناعي · بيانات",
        title: "مشاريع استخلاص البيانات والذكاء الاصطناعي",
        description:
          "مجموعة مشاريع ذكاء اصطناعي تشمل دمج GPT وضبط نماذج اللغة والتصوير الجغرافي وأتمتة استخلاص الويب.",
        tags: ["Python", "OpenAI", "Tableau"],
      },
    ],
  },
  about: {
    eyebrow: "عن غوندال برمجيات",
    heading: "استوديو يعامل منتجك كأنه منتجه",
    body: [
      "غوندال برمجيات استوديو لتطوير البرمجيات متخصص في بناء تطبيقات جوال وويب حديثة مدعومة بالذكاء الاصطناعي. نتشارك مع الشركات الناشئة والمؤسسات لتحويل الأفكار إلى منتجات موثوقة وقابلة للتوسع.",
      "سواء كنت بحاجة إلى تنفيذ مشروع لعميل أو ترغب في إطلاق فكرتك الريادية، نقدّم التميّز الهندسي والتصميم المدروس وأحدث التقنيات في كل عمل.",
    ],
    values: [
      {
        title: "الجودة أولًا",
        description: "كود نظيف ومُختبر وقابل للصيانة يمكنك البناء عليه.",
      },
      {
        title: "شراكة شفافة",
        description: "تواصل واضح وجداول زمنية صادقة في كل خطوة.",
      },
      {
        title: "عقلية الذكاء الاصطناعي",
        description: "نستخدم الذكاء الاصطناعي لجعل منتجك أذكى وأسرع في البناء.",
      },
      {
        title: "مبني للتوسّع",
        description: "بنية وبنية تحتية جاهزة للنمو الحقيقي.",
      },
    ],
  },
  ctaBand: {
    heading: "لديك فكرة؟ لنبنِها معًا.",
    subheading: "أخبرنا عن مشروعك وسنعود إليك بخطة لتحويله إلى واقع.",
    button: "تواصل معنا",
  },
  contact: {
    eyebrow: "تواصل",
    heading: "لنبدأ شيئًا رائعًا",
    subheading:
      "أخبرنا عن مشروعك أو فكرتك أو منتجك وسنرد خلال يوم عمل واحد.",
    form: {
      name: "اسمك",
      email: "البريد الإلكتروني",
      service: "ماذا تحتاج؟",
      message: "أخبرنا عن مشروعك",
      submit: "إرسال الرسالة",
      success: "شكرًا لك! تم تجهيز رسالتك في برنامج البريد لديك.",
    },
    info: {
      emailLabel: "البريد الإلكتروني",
      email: "shahbaz.gondal588@gmail.com",
      phoneLabel: "الهاتف",
      phones: [
        { label: "السعودية", number: "+966538518945" },
        { label: "باكستان", number: "+923130041445" },
      ],
      locationLabel: "الموقع",
      location: "عن بُعد · حول العالم",
    },
  },
  footer: {
    description:
      "استوديو برمجيات مدعوم بالذكاء الاصطناعي يبني منتجات جوال وويب حديثة للشركات الناشئة والمؤسسات حول العالم.",
    quickLinks: "روابط سريعة",
    servicesTitle: "الخدمات",
    contactTitle: "تواصل",
    rights: "جميع الحقوق محفوظة.",
    privacy: "سياسة الخصوصية",
    backHome: "العودة إلى الرئيسية",
  },
  privacy: {
    title: "سياسة الخصوصية",
    updated: "آخر تحديث: يونيو 2026",
    intro:
      'في غوندال برمجيات، نلتزم بحماية خصوصيتك. توضّح سياسة الخصوصية هذه كيف نجمع معلوماتك ونستخدمها ونكشف عنها ونحافظ عليها عند استخدامك لخدماتنا، بما في ذلك تطبيقات الجوال والموقع الإلكتروني (يُشار إليها مجتمعةً بـ "الخدمات"). باستخدامك لخدماتنا، فإنك توافق على ممارسات البيانات الموضّحة في هذه السياسة.',
    blocks: [
      { type: "heading", text: "١. المعلومات التي نجمعها" },
      { type: "subheading", text: "المعلومات الشخصية" },
      {
        type: "paragraph",
        text: "قد نجمع معلومات شخصية تقدّمها لنا مباشرةً، بما في ذلك:",
      },
      {
        type: "list",
        items: [
          "عنوان البريد الإلكتروني",
          "أي معلومات أخرى تختار تقديمها عند إنشاء حساب أو التواصل معنا",
        ],
      },
      { type: "subheading", text: "المعلومات غير الشخصية" },
      {
        type: "paragraph",
        text: "لا يُعرَض أي محتوى مرفوع للعامة إلا إذا رغبت في إظهاره (بتغيير الخصوصية إلى عام). افتراضيًا، تكون خصوصية المحتوى المرفوع خاصة. وقد نجمع تلقائيًا بعض المعلومات غير الشخصية عند استخدامك لخدماتنا، بما في ذلك:",
      },
      {
        type: "list",
        items: [
          "معلومات الجهاز (مثل نوع الجهاز ونظام التشغيل)",
          "بيانات الاستخدام (مثل وقت وتاريخ الوصول والميزات المستخدمة)",
          "عنوان IP",
          "نوع المتصفح وإعداداته",
        ],
      },
      { type: "heading", text: "٢. كيف نستخدم معلوماتك" },
      {
        type: "paragraph",
        text: "قد نستخدم المعلومات التي نجمعها لأغراض متعددة، بما في ذلك:",
      },
      {
        type: "list",
        items: [
          "تقديم خدماتنا وصيانتها وتحسينها",
          "مصادقة المستخدمين أثناء عملية تسجيل الدخول",
          "تخصيص تجربتك وتقديم محتوى مصمّم وفق اهتماماتك",
          "التواصل معك، بما في ذلك إرسال التحديثات والإشعارات",
          "تحليل الاستخدام والاتجاهات لتحسين خدماتنا",
          "منع الأنشطة الاحتيالية أو غير المصرّح بها",
        ],
      },
      { type: "heading", text: "٣. مشاركة البيانات والإفصاح عنها" },
      {
        type: "paragraph",
        text: "مزوّدو الخدمات الخارجيون: نحن لا نشارك معلوماتك الشخصية مع أطراف ثالثة. وقد نستعين بمزوّدي خدمات خارجيين لمهام محددة (مثل التحليلات)، لكن لا يُسمح لهم باستخدام معلوماتك الشخصية لأي غرض سوى مساعدتنا.",
      },
      {
        type: "paragraph",
        text: "الامتثال القانوني: قد نكشف عن معلوماتك إذا تطلّب القانون ذلك أو استجابةً لطلبات صحيحة من السلطات العامة.",
      },
      {
        type: "paragraph",
        text: "عمليات نقل الأعمال: في حال اندماجنا أو استحواذنا أو بيع أصولنا، قد يتم نقل معلوماتك الشخصية.",
      },
      { type: "heading", text: "٤. أمن البيانات" },
      {
        type: "paragraph",
        text: "نتخذ تدابير معقولة لحماية معلوماتك الشخصية من الوصول أو الاستخدام أو الإفصاح غير المصرّح به. ومع ذلك، يُرجى العلم بأنه لا توجد وسيلة نقل عبر الإنترنت أو وسيلة تخزين إلكتروني آمنة بنسبة 100%.",
      },
      { type: "heading", text: "٥. حقوق المستخدم" },
      {
        type: "paragraph",
        text: "لديك الحقوق التالية فيما يتعلق بمعلوماتك الشخصية:",
      },
      {
        type: "list",
        items: [
          "الوصول: طلب الوصول إلى معلوماتك الشخصية",
          "التصحيح: طلب تصحيح المعلومات غير الدقيقة",
          "الحذف: طلب حذف معلوماتك",
          "إلغاء الاشتراك: إلغاء الاشتراك في الرسائل الترويجية",
        ],
      },
      { type: "heading", text: "٦. ملفات تعريف الارتباط وتقنيات التتبّع" },
      {
        type: "paragraph",
        text: "قد تستخدم خدماتنا ملفات تعريف الارتباط وتقنيات تتبّع مماثلة لتحسين تجربة المستخدم. يمكنك اختيار قبول ملفات تعريف الارتباط أو رفضها من خلال إعدادات متصفحك.",
      },
      { type: "heading", text: "٧. خصوصية الأطفال" },
      {
        type: "paragraph",
        text: "خدماتنا آمنة للأطفال دون سن 13 عامًا. ولا نجمع عن قصد معلومات شخصية من الأطفال.",
      },
      { type: "heading", text: "٨. التغييرات على سياسة الخصوصية" },
      {
        type: "paragraph",
        text: "قد نُحدّث سياسة الخصوصية هذه من وقت لآخر. وسنخطرك بأي تغييرات عبر نشر السياسة الجديدة على موقعنا وتحديث تاريخ السريان.",
      },
      { type: "heading", text: "٩. تواصل معنا" },
      {
        type: "paragraph",
        text: "إذا كان لديك أي أسئلة أو مخاوف بشأن سياسة الخصوصية هذه، يُرجى التواصل معنا عبر:",
      },
      {
        type: "contact",
        label: "البريد الإلكتروني",
        email: "shahbaz.gondal588@gmail.com",
      },
    ],
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, ar };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
