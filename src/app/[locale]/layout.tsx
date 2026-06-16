import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, locales, localeDirection, type Locale } from "@/i18n/config";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-latin",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    icons: { icon: "/favicon.svg" },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const typedLocale = locale as Locale;
  const dir = localeDirection[typedLocale];
  const dict = getDictionary(typedLocale);

  return (
    <html
      lang={typedLocale}
      dir={dir}
      className={`${inter.variable} ${cairo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar locale={typedLocale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={typedLocale} dict={dict} />
      </body>
    </html>
  );
}
