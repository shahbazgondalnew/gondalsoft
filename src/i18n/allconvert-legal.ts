import type { Locale } from "./config";

export type LegalBlock =
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "contact"; label: string; email: string };

export type LegalDoc = {
  title: string;
  appName: string;
  updated: string;
  intro: string;
  blocks: LegalBlock[];
  languageLabel: string;
  enLabel: string;
  arLabel: string;
  backHome: string;
  privacyLink: string;
  termsLink: string;
};

export type AllConvertLegal = {
  privacy: LegalDoc;
  terms: LegalDoc;
};

const en: AllConvertLegal = {
  privacy: {
    title: "Privacy Policy",
    appName: "AllConvert – Image & PDF Converter",
    updated: "Last updated: September 22, 2026",
    intro:
      'This Privacy Policy describes how GondalSoft ("we", "us", or "our") handles information when you use the AllConvert – Image & PDF Converter mobile application (the "App"). By using the App, you agree to this policy.',
    languageLabel: "Language",
    enLabel: "English",
    arLabel: "العربية",
    backHome: "Back to gondalsoft",
    privacyLink: "Privacy Policy",
    termsLink: "Terms of Use",
    blocks: [
      { type: "heading", text: "1. About the App" },
      {
        type: "paragraph",
        text: "AllConvert is an on-device image and PDF toolkit. You can convert files (for example Image to PDF, Word/Excel/Text/PPT/HTML to PDF, Scan to PDF, PDF to Image, and PDF to Word), organize PDFs (merge, split, compress, rotate, reorder, delete, and extract pages), and manage conversion history on your device.",
      },
      { type: "heading", text: "2. Information We Collect" },
      { type: "subheading", text: "Files you choose to process" },
      {
        type: "paragraph",
        text: "When you pick images, documents, or PDFs, or capture photos with the camera, those files are processed on your device to perform the conversion or editing feature you selected. We do not operate a GondalSoft server that receives or stores your conversion files.",
      },
      { type: "subheading", text: "Local app data" },
      {
        type: "paragraph",
        text: "The App may store the following locally on your device:",
      },
      {
        type: "list",
        items: [
          "Converted output files and related history metadata in app-private storage",
          "Theme preference (light, dark, or system)",
          "App settings needed for normal operation",
        ],
      },
      {
        type: "paragraph",
        text: "This local data is removed if you uninstall the App or clear the App’s data from your device settings.",
      },
      { type: "subheading", text: "Information we do not collect" },
      {
        type: "paragraph",
        text: "The App does not require an account and does not ask you to create a username or password. We do not knowingly collect your name, email address, phone number, precise location, contacts, or payment information through the App.",
      },
      { type: "heading", text: "3. Device Permissions" },
      {
        type: "paragraph",
        text: "Depending on the feature you use and your platform, the App may request:",
      },
      {
        type: "list",
        items: [
          "Camera — to scan or capture photos for PDF creation",
          "Photos / media library — to select images for conversion and, when you choose, to save images",
          "Storage / files — to open documents and PDFs and to save results",
          "Internet — limited network access may be used by the device or OS for things such as loading fonts, opening this Privacy Policy or Terms of Use in a browser, or opening the app store for ratings",
        ],
      },
      {
        type: "paragraph",
        text: "You can deny or revoke permissions in your device settings. Some features will not work without the related permission.",
      },
      { type: "heading", text: "4. How We Use Information" },
      {
        type: "paragraph",
        text: "Local files and settings are used only to:",
      },
      {
        type: "list",
        items: [
          "Provide conversion, editing, preview, share, and history features you request",
          "Remember your appearance preference",
          "Improve reliability of on-device processing",
        ],
      },
      { type: "heading", text: "5. Sharing and Third Parties" },
      {
        type: "paragraph",
        text: "We do not sell your personal information. Your documents and images are not uploaded to GondalSoft servers by the App for conversion.",
      },
      {
        type: "paragraph",
        text: "If you use Share, Save to gallery, Open with another app, or similar system actions, your device’s operating system and the destination app you select will receive the files you choose to share. Those third parties have their own privacy practices.",
      },
      {
        type: "paragraph",
        text: "Some libraries bundled with the App (for example on-device PDF/image processing or a local WebView used for certain conversions such as PDF to Word) run on your device and are not used by us to collect your documents.",
      },
      { type: "heading", text: "6. Data Security" },
      {
        type: "paragraph",
        text: "Because processing and storage happen on your device, security also depends on your device passcode, OS updates, and how you share files. No method of electronic storage is completely secure. Please keep your device protected and only share outputs with people and apps you trust.",
      },
      { type: "heading", text: "7. Children’s Privacy" },
      {
        type: "paragraph",
        text: "The App is a general-audience utility and is not directed at children under 13. We do not knowingly collect personal information from children. If you believe a child has provided personal information to us through other channels (for example email), contact us and we will take appropriate steps.",
      },
      { type: "heading", text: "8. Your Choices" },
      {
        type: "list",
        items: [
          "Delete conversion history and files from within the App where available",
          "Clear app data or uninstall the App to remove local storage",
          "Revoke camera, photos, or storage permissions in system settings",
        ],
      },
      { type: "heading", text: "9. Changes to This Policy" },
      {
        type: "paragraph",
        text: "We may update this Privacy Policy from time to time. The “Last updated” date at the top will change when we post a revision. Continued use of the App after changes means you accept the updated policy.",
      },
      { type: "heading", text: "10. Contact Us" },
      {
        type: "paragraph",
        text: "If you have questions about this Privacy Policy or AllConvert, contact GondalSoft at:",
      },
      {
        type: "contact",
        label: "Email",
        email: "shahbaz.gondal588@gmail.com",
      },
    ],
  },
  terms: {
    title: "Terms of Use",
    appName: "AllConvert – Image & PDF Converter",
    updated: "Last updated: September 22, 2026",
    intro:
      'These Terms of Use ("Terms") govern your use of the AllConvert – Image & PDF Converter mobile application (the "App") provided by GondalSoft ("we", "us", or "our"). By downloading, installing, or using the App, you agree to these Terms. If you do not agree, do not use the App.',
    languageLabel: "Language",
    enLabel: "English",
    arLabel: "العربية",
    backHome: "Back to gondalsoft",
    privacyLink: "Privacy Policy",
    termsLink: "Terms of Use",
    blocks: [
      { type: "heading", text: "1. The Service" },
      {
        type: "paragraph",
        text: "AllConvert provides on-device tools to convert and organize images and PDFs, including converting common document and image formats to PDF, converting PDF to image or Word where available, scanning with the camera, merging/splitting/compressing/rotating PDFs, reordering or removing pages, extracting pages, and keeping a local history of conversions. Some tools shown in the App may be labeled as coming soon and may not yet be available.",
      },
      { type: "heading", text: "2. License" },
      {
        type: "paragraph",
        text: "We grant you a limited, non-exclusive, non-transferable, revocable license to use the App on devices you own or control, solely for your personal or internal business use, in accordance with these Terms and the applicable app store rules.",
      },
      { type: "heading", text: "3. Your Content and Responsibilities" },
      {
        type: "paragraph",
        text: "You are solely responsible for the files, images, and documents you process with the App. You represent that you have all rights and permissions needed to use that content, and that your use does not violate any law or third-party rights (including copyright, privacy, and confidentiality).",
      },
      {
        type: "paragraph",
        text: "Do not use the App to process illegal content, to infringe intellectual property, or to harm others. You are responsible for backing up important files. Uninstalling the App or clearing app data may permanently delete local conversion history and saved outputs stored only in the App.",
      },
      { type: "heading", text: "4. On-Device Processing" },
      {
        type: "paragraph",
        text: "Conversions and edits are performed on your device. Results depend on file quality, format support, device performance, and available storage. We do not guarantee that every file will convert perfectly, that every feature will support every file type, or that output will be identical to professional desktop software.",
      },
      { type: "heading", text: "5. Acceptable Use" },
      {
        type: "paragraph",
        text: "You agree not to:",
      },
      {
        type: "list",
        items: [
          "Reverse engineer, decompile, or attempt to extract source code from the App except where allowed by law",
          "Modify, rent, lease, sell, redistribute, or create derivative works from the App",
          "Interfere with or disrupt the App’s normal operation",
          "Use the App in any way that is unlawful or prohibited by these Terms",
        ],
      },
      { type: "heading", text: "6. Intellectual Property" },
      {
        type: "paragraph",
        text: "The App, including its name, design, logos, and software, is owned by GondalSoft or its licensors and is protected by intellectual property laws. These Terms do not transfer ownership of the App to you. Your original content remains yours.",
      },
      { type: "heading", text: "7. Third-Party Services and Stores" },
      {
        type: "paragraph",
        text: "The App may open external links (such as this website, email, or the app store for ratings) and may rely on operating-system features (share sheet, file pickers, photo library). Those services are governed by their own terms and privacy policies. Purchases, refunds, and billing for paid store listings, if any, are handled by Apple or Google under their store terms.",
      },
      { type: "heading", text: "8. Disclaimer of Warranties" },
      {
        type: "paragraph",
        text: 'THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS.',
      },
      { type: "heading", text: "9. Limitation of Liability" },
      {
        type: "paragraph",
        text: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, GONDALSOFT AND ITS AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA, PROFITS, OR BUSINESS, ARISING FROM YOUR USE OF OR INABILITY TO USE THE APP. OUR TOTAL LIABILITY FOR ANY CLAIM RELATED TO THE APP SHALL NOT EXCEED THE AMOUNT YOU PAID US FOR THE APP IN THE TWELVE (12) MONTHS BEFORE THE CLAIM, OR ZERO IF THE APP WAS PROVIDED FREE OF CHARGE.",
      },
      { type: "heading", text: "10. Privacy" },
      {
        type: "paragraph",
        text: "Your use of the App is also governed by our Privacy Policy for AllConvert. Please read it carefully.",
      },
      { type: "heading", text: "11. Changes and Termination" },
      {
        type: "paragraph",
        text: "We may update these Terms or change, suspend, or discontinue features of the App at any time. Continued use after an update means you accept the revised Terms. We may terminate or suspend access if you violate these Terms. You may stop using the App at any time by uninstalling it.",
      },
      { type: "heading", text: "12. Governing Law" },
      {
        type: "paragraph",
        text: "These Terms are governed by the laws applicable in the jurisdiction where GondalSoft operates, without regard to conflict-of-law principles, except where mandatory consumer protections in your country require otherwise.",
      },
      { type: "heading", text: "13. Contact" },
      {
        type: "paragraph",
        text: "For questions about these Terms, contact:",
      },
      {
        type: "contact",
        label: "Email",
        email: "shahbaz.gondal588@gmail.com",
      },
    ],
  },
};

const ar: AllConvertLegal = {
  privacy: {
    title: "سياسة الخصوصية",
    appName: "AllConvert – محوّل الصور وPDF",
    updated: "آخر تحديث: 22 سبتمبر 2026",
    intro:
      'توضّح سياسة الخصوصية هذه كيف تتعامل غوندال برمجيات ("نحن" أو "لنا") مع المعلومات عند استخدامك لتطبيق AllConvert – محوّل الصور وPDF (يُشار إليه بـ "التطبيق"). باستخدامك للتطبيق، فإنك توافق على هذه السياسة.',
    languageLabel: "اللغة",
    enLabel: "English",
    arLabel: "العربية",
    backHome: "العودة إلى غوندال برمجيات",
    privacyLink: "سياسة الخصوصية",
    termsLink: "شروط الاستخدام",
    blocks: [
      { type: "heading", text: "١. حول التطبيق" },
      {
        type: "paragraph",
        text: "AllConvert مجموعة أدوات للصور وملفات PDF تعمل على جهازك. يمكنك تحويل الملفات (مثل الصورة إلى PDF، وWord/Excel/النص/PPT/HTML إلى PDF، والمسح إلى PDF، وPDF إلى صورة، وPDF إلى Word)، وتنظيم ملفات PDF (دمج، تقسيم، ضغط، تدوير، إعادة ترتيب، حذف واستخراج الصفحات)، وإدارة سجل التحويلات على جهازك.",
      },
      { type: "heading", text: "٢. المعلومات التي نجمعها" },
      { type: "subheading", text: "الملفات التي تختار معالجتها" },
      {
        type: "paragraph",
        text: "عند اختيار صور أو مستندات أو ملفات PDF، أو التقاط صور بالكاميرا، تتم معالجة هذه الملفات على جهازك لتنفيذ ميزة التحويل أو التحرير التي اخترتها. نحن لا نشغّل خادمًا تابعًا لغوندال برمجيات يستقبل أو يخزّن ملفات التحويل الخاصة بك.",
      },
      { type: "subheading", text: "بيانات التطبيق المحلية" },
      {
        type: "paragraph",
        text: "قد يخزّن التطبيق محليًا على جهازك ما يلي:",
      },
      {
        type: "list",
        items: [
          "ملفات النتائج المحوّلة وبيانات سجل التحويل في مساحة تخزين خاصة بالتطبيق",
          "تفضيل المظهر (فاتح أو داكن أو حسب النظام)",
          "إعدادات التطبيق اللازمة للتشغيل العادي",
        ],
      },
      {
        type: "paragraph",
        text: "تُحذف هذه البيانات المحلية إذا أزلت تثبيت التطبيق أو مسحت بيانات التطبيق من إعدادات جهازك.",
      },
      { type: "subheading", text: "معلومات لا نجمعها" },
      {
        type: "paragraph",
        text: "لا يتطلب التطبيق إنشاء حساب ولا يطلب منك اسم مستخدم أو كلمة مرور. ولا نجمع عن قصد اسمك أو بريدك الإلكتروني أو رقم هاتفك أو موقعك الدقيق أو جهات اتصالك أو معلومات الدفع عبر التطبيق.",
      },
      { type: "heading", text: "٣. أذونات الجهاز" },
      {
        type: "paragraph",
        text: "حسب الميزة التي تستخدمها ونظام التشغيل، قد يطلب التطبيق:",
      },
      {
        type: "list",
        items: [
          "الكاميرا — لمسح أو التقاط صور لإنشاء PDF",
          "الصور / مكتبة الوسائط — لاختيار الصور للتحويل، وعند رغبتك لحفظ الصور",
          "التخزين / الملفات — لفتح المستندات وملفات PDF وحفظ النتائج",
          "الإنترنت — قد يُستخدم اتصال الشبكة بشكل محدود من الجهاز أو النظام لأمور مثل تحميل الخطوط، أو فتح سياسة الخصوصية أو شروط الاستخدام في المتصفح، أو فتح متجر التطبيقات للتقييم",
        ],
      },
      {
        type: "paragraph",
        text: "يمكنك رفض الأذونات أو سحبها من إعدادات جهازك. وقد لا تعمل بعض الميزات دون الإذن ذي الصلة.",
      },
      { type: "heading", text: "٤. كيف نستخدم المعلومات" },
      {
        type: "paragraph",
        text: "تُستخدم الملفات والإعدادات المحلية فقط من أجل:",
      },
      {
        type: "list",
        items: [
          "تقديم ميزات التحويل والتحرير والمعاينة والمشاركة والسجل التي تطلبها",
          "تذكّر تفضيل المظهر لديك",
          "تحسين موثوقية المعالجة على الجهاز",
        ],
      },
      { type: "heading", text: "٥. المشاركة والأطراف الثالثة" },
      {
        type: "paragraph",
        text: "نحن لا نبيع معلوماتك الشخصية. ولا يرفع التطبيق مستنداتك وصورك إلى خوادم غوندال برمجيات لأغراض التحويل.",
      },
      {
        type: "paragraph",
        text: "إذا استخدمت المشاركة أو الحفظ في المعرض أو الفتح بتطبيق آخر أو إجراءات نظام مشابهة، فسيستلم نظام التشغيل والتطبيق الوجهة الذي تختاره الملفات التي اخترت مشاركتها. ولتلك الأطراف الثالثة سياسات خصوصية خاصة بها.",
      },
      {
        type: "paragraph",
        text: "بعض المكتبات المضمّنة في التطبيق (مثل معالجة PDF/الصور على الجهاز أو WebView محلي لبعض التحويلات مثل PDF إلى Word) تعمل على جهازك ولا نستخدمها لجمع مستنداتك.",
      },
      { type: "heading", text: "٦. أمن البيانات" },
      {
        type: "paragraph",
        text: "نظرًا لأن المعالجة والتخزين يحدثان على جهازك، فإن الأمن يعتمد أيضًا على رمز قفل جهازك وتحديثات النظام وكيفية مشاركتك للملفات. ولا توجد وسيلة تخزين إلكتروني آمنة بالكامل. يُرجى حماية جهازك ومشاركة النتائج فقط مع أشخاص وتطبيقات تثق بها.",
      },
      { type: "heading", text: "٧. خصوصية الأطفال" },
      {
        type: "paragraph",
        text: "التطبيق أداة عامة الجمهور وغير موجّه للأطفال دون سن 13 عامًا. ولا نجمع عن قصد معلومات شخصية من الأطفال. إذا كنت تعتقد أن طفلًا قد قدّم معلومات شخصية إلينا عبر قنوات أخرى (مثل البريد الإلكتروني)، فتواصل معنا وسنتخذ الخطوات المناسبة.",
      },
      { type: "heading", text: "٨. خياراتك" },
      {
        type: "list",
        items: [
          "حذف سجل التحويلات والملفات من داخل التطبيق حيث يتوفر ذلك",
          "مسح بيانات التطبيق أو إزالته لحذف التخزين المحلي",
          "سحب أذونات الكاميرا أو الصور أو التخزين من إعدادات النظام",
        ],
      },
      { type: "heading", text: "٩. التغييرات على هذه السياسة" },
      {
        type: "paragraph",
        text: "قد نُحدّث سياسة الخصوصية هذه من وقت لآخر. وسيتغيّر تاريخ «آخر تحديث» في أعلى الصفحة عند نشر أي تعديل. ويعني استمرارك في استخدام التطبيق بعد التغييرات قبولك للسياسة المحدّثة.",
      },
      { type: "heading", text: "١٠. تواصل معنا" },
      {
        type: "paragraph",
        text: "إذا كانت لديك أسئلة حول سياسة الخصوصية هذه أو حول AllConvert، فتواصل مع غوندال برمجيات عبر:",
      },
      {
        type: "contact",
        label: "البريد الإلكتروني",
        email: "shahbaz.gondal588@gmail.com",
      },
    ],
  },
  terms: {
    title: "شروط الاستخدام",
    appName: "AllConvert – محوّل الصور وPDF",
    updated: "آخر تحديث: 22 سبتمبر 2026",
    intro:
      'تحكم شروط الاستخدام هذه ("الشروط") استخدامك لتطبيق AllConvert – محوّل الصور وPDF (يُشار إليه بـ "التطبيق") المقدّم من غوندال برمجيات ("نحن" أو "لنا"). بتنزيلك أو تثبيتك أو استخدامك للتطبيق، فإنك توافق على هذه الشروط. وإذا لم توافق، فلا تستخدم التطبيق.',
    languageLabel: "اللغة",
    enLabel: "English",
    arLabel: "العربية",
    backHome: "العودة إلى غوندال برمجيات",
    privacyLink: "سياسة الخصوصية",
    termsLink: "شروط الاستخدام",
    blocks: [
      { type: "heading", text: "١. الخدمة" },
      {
        type: "paragraph",
        text: "يوفّر AllConvert أدوات على الجهاز لتحويل الصور وملفات PDF وتنظيمها، بما في ذلك تحويل صيغ المستندات والصور الشائعة إلى PDF، وتحويل PDF إلى صورة أو Word حيث يتوفر ذلك، والمسح بالكاميرا، ودمج/تقسيم/ضغط/تدوير ملفات PDF، وإعادة ترتيب الصفحات أو حذفها، واستخراج الصفحات، والاحتفاظ بسجل محلي للتحويلات. وقد تظهر بعض الأدوات في التطبيق على أنها قادمة قريبًا وقد لا تكون متاحة بعد.",
      },
      { type: "heading", text: "٢. الترخيص" },
      {
        type: "paragraph",
        text: "نمنحك ترخيصًا محدودًا وغير حصري وغير قابل للتحويل وقابل للإلغاء لاستخدام التطبيق على الأجهزة التي تملكها أو تتحكم بها، للاستخدام الشخصي أو الداخلي للأعمال فقط، وفقًا لهذه الشروط وقواعد متجر التطبيقات المعمول بها.",
      },
      { type: "heading", text: "٣. محتواك ومسؤولياتك" },
      {
        type: "paragraph",
        text: "أنت وحدك المسؤول عن الملفات والصور والمستندات التي تعالجها باستخدام التطبيق. وتقرّ بأن لديك جميع الحقوق والأذونات اللازمة لاستخدام ذلك المحتوى، وأن استخدامك لا ينتهك أي قانون أو حقوق طرف ثالث (بما في ذلك حقوق النشر والخصوصية والسرية).",
      },
      {
        type: "paragraph",
        text: "لا تستخدم التطبيق لمعالجة محتوى غير قانوني أو لانتهاك الملكية الفكرية أو للإضرار بالآخرين. وأنت مسؤول عن نسخ الملفات المهمة احتياطيًا. وقد يؤدي إزالة تثبيت التطبيق أو مسح بياناته إلى حذف سجل التحويلات المحلي والنتائج المحفوظة داخل التطبيق نهائيًا.",
      },
      { type: "heading", text: "٤. المعالجة على الجهاز" },
      {
        type: "paragraph",
        text: "تتم التحويلات والتعديلات على جهازك. وتعتمد النتائج على جودة الملف ودعم الصيغة وأداء الجهاز ومساحة التخزين المتاحة. ولا نضمن أن كل ملف سيُحوَّل بشكل مثالي، أو أن كل ميزة ستدعم كل نوع ملف، أو أن الناتج سيكون مطابقًا لبرامج سطح المكتب الاحترافية.",
      },
      { type: "heading", text: "٥. الاستخدام المقبول" },
      {
        type: "paragraph",
        text: "توافق على عدم القيام بما يلي:",
      },
      {
        type: "list",
        items: [
          "الهندسة العكسية أو فك التجميع أو محاولة استخراج الشيفرة المصدرية من التطبيق إلا حيث يسمح القانون بذلك",
          "تعديل التطبيق أو تأجيره أو بيعه أو إعادة توزيعه أو إنشاء أعمال مشتقة منه",
          "التدخل في التشغيل العادي للتطبيق أو تعطيله",
          "استخدام التطبيق بأي طريقة غير قانونية أو محظورة بموجب هذه الشروط",
        ],
      },
      { type: "heading", text: "٦. الملكية الفكرية" },
      {
        type: "paragraph",
        text: "التطبيق، بما في ذلك اسمه وتصميمه وشعاراته وبرمجياته، مملوك لغوندال برمجيات أو لمرخّصيها ومحمي بقوانين الملكية الفكرية. ولا تنقل هذه الشروط ملكية التطبيق إليك. ويبقى محتواك الأصلي ملكًا لك.",
      },
      { type: "heading", text: "٧. خدمات ومتاجر الأطراف الثالثة" },
      {
        type: "paragraph",
        text: "قد يفتح التطبيق روابط خارجية (مثل هذا الموقع أو البريد الإلكتروني أو متجر التطبيقات للتقييم) وقد يعتمد على ميزات نظام التشغيل (ورقة المشاركة، منتقي الملفات، مكتبة الصور). وتخضع تلك الخدمات لشروطها وسياسات خصوصيتها الخاصة. أما المشتريات والاستردادات والفواتير لقوائم المتجر المدفوعة إن وُجدت فتتولاها Apple أو Google وفق شروط متجرهما.",
      },
      { type: "heading", text: "٨. إخلاء المسؤولية عن الضمانات" },
      {
        type: "paragraph",
        text: 'يُقدَّم التطبيق "كما هو" و"حسب التوفر" دون أي ضمانات من أي نوع، سواء كانت صريحة أو ضمنية، بما في ذلك ضمانات القابلية للتسويق والملاءمة لغرض معيّن وعدم الانتهاك. ولا نضمن أن التطبيق سيعمل دون انقطاع أو خالٍ من الأخطاء أو من المكوّنات الضارة.',
      },
      { type: "heading", text: "٩. تحديد المسؤولية" },
      {
        type: "paragraph",
        text: "إلى أقصى حد يسمح به القانون، لا تتحمل غوندال برمجيات أو الشركات التابعة لها المسؤولية عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية، أو أي فقدان للبيانات أو الأرباح أو الأعمال، الناشئة عن استخدامك للتطبيق أو عدم قدرتك على استخدامه. ولا تتجاوز مسؤوليتنا الإجمالية عن أي مطالبة تتعلق بالتطبيق المبلغ الذي دفعته لنا مقابل التطبيق خلال الاثني عشر (12) شهرًا السابقة للمطالبة، أو صفرًا إذا قُدِّم التطبيق مجانًا.",
      },
      { type: "heading", text: "١٠. الخصوصية" },
      {
        type: "paragraph",
        text: "يخضع استخدامك للتطبيق أيضًا لسياسة الخصوصية الخاصة بـ AllConvert. يُرجى قراءتها بعناية.",
      },
      { type: "heading", text: "١١. التغييرات والإنهاء" },
      {
        type: "paragraph",
        text: "قد نُحدّث هذه الشروط أو نغيّر أو نعلّق أو نوقف ميزات التطبيق في أي وقت. ويعني استمرار الاستخدام بعد التحديث قبولك للشروط المعدّلة. وقد ننهي أو نعلّق الوصول إذا خالفت هذه الشروط. ويمكنك التوقف عن استخدام التطبيق في أي وقت بإزالته.",
      },
      { type: "heading", text: "١٢. القانون الحاكم" },
      {
        type: "paragraph",
        text: "تخضع هذه الشروط للقوانين المعمول بها في الولاية القضائية التي تعمل فيها غوندال برمجيات، دون اعتبار لمبادئ تنازع القوانين، إلا حيث تقتضي حماية المستهلك الإلزامية في بلدك خلاف ذلك.",
      },
      { type: "heading", text: "١٣. التواصل" },
      {
        type: "paragraph",
        text: "للأسئلة حول هذه الشروط، تواصل عبر:",
      },
      {
        type: "contact",
        label: "البريد الإلكتروني",
        email: "shahbaz.gondal588@gmail.com",
      },
    ],
  },
};

const docs: Record<Locale, AllConvertLegal> = { en, ar };

export function getAllConvertLegal(locale: Locale): AllConvertLegal {
  return docs[locale];
}
