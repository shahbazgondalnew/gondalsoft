import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { PrivacyContent } from "@/components/privacy-content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <PrivacyContent locale={locale as Locale} />;
}
