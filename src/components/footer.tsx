import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { LogoMark } from "./icons";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();

  const quickLinks = [
    { href: `/${locale}#services`, label: dict.nav.services },
    { href: `/${locale}#work`, label: dict.nav.work },
    { href: `/${locale}#about`, label: dict.nav.about },
    { href: `/${locale}#contact`, label: dict.nav.contact },
  ];

  return (
    <footer className="border-t border-border bg-background-soft">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 font-semibold">
              <LogoMark />
              <span className="text-lg">{dict.brand.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {dict.footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold">{dict.footer.quickLinks}</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">{dict.footer.contactTitle}</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${dict.contact.info.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {dict.contact.info.email}
                </a>
              </li>
              <li>{dict.contact.info.phone}</li>
              <li>{dict.contact.info.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted sm:flex-row">
          <p>
            © {year} {dict.brand.name}. {dict.footer.rights}
          </p>
          <p className="text-xs">{dict.brand.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
