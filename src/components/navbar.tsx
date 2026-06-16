"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { LanguageSwitcher } from "./language-switcher";
import { LogoMark } from "./icons";

export function Navbar({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: `/${locale}#services`, label: dict.nav.services },
    { href: `/${locale}#work`, label: dict.nav.work },
    { href: `/${locale}#about`, label: dict.nav.about },
    { href: `/${locale}#contact`, label: dict.nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <LogoMark />
          <span className="text-lg">{dict.brand.name}</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <LanguageSwitcher locale={locale} />
          </div>
          <Link
            href={`/${locale}#contact`}
            className="hidden rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 md:inline-block"
          >
            {dict.nav.cta}
          </Link>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute inset-x-0 top-0 h-0.5 rounded bg-foreground transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 top-1.5 h-0.5 rounded bg-foreground transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 top-3 h-0.5 rounded bg-foreground transition-transform ${
                  open ? "-translate-y-1 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={`/${locale}#contact`}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-brand px-4 py-2.5 text-center text-sm font-medium text-white"
            >
              {dict.nav.cta}
            </Link>
            <div className="mt-3">
              <LanguageSwitcher locale={locale} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
