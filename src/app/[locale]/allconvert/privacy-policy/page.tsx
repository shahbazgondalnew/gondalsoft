import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getAllConvertLegal } from "@/i18n/allconvert-legal";
import { AllConvertLegalContent } from "@/components/allconvert-legal-content";

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
  const doc = getAllConvertLegal(locale as Locale).privacy;
  return {
    title: `${doc.title} · ${doc.appName}`,
    description: doc.intro,
  };
}

export default async function AllConvertPrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <AllConvertLegalContent locale={locale as Locale} kind="privacy" />
  );
}
