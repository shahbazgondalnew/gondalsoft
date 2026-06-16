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
      phone: string;
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
        category: "Mobile · AI",
        title: "Smart Health Companion",
        description:
          "An AI-powered mobile app that tracks habits and gives personalized wellness guidance.",
        tags: ["iOS", "Android", "AI"],
      },
      {
        category: "Web · SaaS",
        title: "Business Analytics Platform",
        description:
          "A real-time dashboard that turns complex data into clear, actionable insight.",
        tags: ["Next.js", "Cloud", "Dashboard"],
      },
      {
        category: "Startup · MVP",
        title: "On-Demand Marketplace",
        description:
          "From a founder's idea to a launched marketplace connecting customers and providers.",
        tags: ["Flutter", "Firebase", "Payments"],
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
      email: "hello@gondalsoft.com",
      phoneLabel: "Phone",
      phone: "+1 (000) 000-0000",
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
        category: "جوال · ذكاء اصطناعي",
        title: "رفيق الصحة الذكي",
        description:
          "تطبيق جوال مدعوم بالذكاء الاصطناعي يتابع العادات ويقدّم إرشادات صحية مخصّصة.",
        tags: ["iOS", "أندرويد", "ذكاء اصطناعي"],
      },
      {
        category: "ويب · SaaS",
        title: "منصة تحليلات الأعمال",
        description:
          "لوحة تحكم لحظية تحوّل البيانات المعقّدة إلى رؤى واضحة قابلة للتنفيذ.",
        tags: ["Next.js", "سحابة", "لوحة تحكم"],
      },
      {
        category: "شركة ناشئة · MVP",
        title: "سوق عند الطلب",
        description:
          "من فكرة مؤسس إلى سوق مُطلق يربط العملاء بمقدّمي الخدمات.",
        tags: ["Flutter", "Firebase", "مدفوعات"],
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
      email: "hello@gondalsoft.com",
      phoneLabel: "الهاتف",
      phone: "+1 (000) 000-0000",
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
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, ar };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
