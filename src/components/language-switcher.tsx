"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeLabels, type Locale } from "@/i18n/config";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() || `/${locale}`;

  function pathForLocale(target: Locale) {
    const segments = pathname.split("/");
    // segments[0] === "" because pathname starts with "/"
    segments[1] = target;
    const next = segments.join("/");
    return next || `/${target}`;
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-white/5 p-1 text-xs font-medium">
      {locales.map((l) => {
        const active = l === locale;
        return (
          <Link
            key={l}
            href={pathForLocale(l)}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-3 py-1 transition-colors ${
              active
                ? "bg-brand text-white"
                : "text-muted hover:text-foreground"
            }`}
          >
            {localeLabels[l]}
          </Link>
        );
      })}
    </div>
  );
}
