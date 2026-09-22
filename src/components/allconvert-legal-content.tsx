import Link from "next/link";
import { getAllConvertLegal, type LegalDoc } from "@/i18n/allconvert-legal";
import type { Locale } from "@/i18n/config";

type DocKind = "privacy" | "terms";

function LegalBody({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <p className="mt-2 text-sm font-medium text-accent">{doc.appName}</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
        {doc.title}
      </h1>
      <p className="mt-3 text-sm text-muted">{doc.updated}</p>
      <p className="mt-6 text-base leading-relaxed text-muted">{doc.intro}</p>

      <div className="mt-10 space-y-6">
        {doc.blocks.map((block, i) => {
          switch (block.type) {
            case "heading":
              return (
                <h2
                  key={i}
                  className="pt-4 text-xl font-semibold tracking-tight text-foreground"
                >
                  {block.text}
                </h2>
              );
            case "subheading":
              return (
                <h3 key={i} className="text-base font-semibold text-accent">
                  {block.text}
                </h3>
              );
            case "paragraph":
              return (
                <p key={i} className="text-base leading-relaxed text-muted">
                  {block.text}
                </p>
              );
            case "list":
              return (
                <ul key={i} className="space-y-2.5">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-base leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            case "contact":
              return (
                <div key={i} className="card rounded-2xl p-5">
                  <span className="text-sm text-muted">{block.label}: </span>
                  <a
                    href={`mailto:${block.email}`}
                    dir="ltr"
                    className="font-medium text-accent transition-opacity hover:opacity-80"
                  >
                    {block.email}
                  </a>
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
    </>
  );
}

export function AllConvertLegalContent({
  locale,
  kind,
}: {
  locale: Locale;
  kind: DocKind;
}) {
  const legal = getAllConvertLegal(locale);
  const doc = legal[kind];
  const otherLocale: Locale = locale === "en" ? "ar" : "en";
  const slug =
    kind === "privacy" ? "privacy-policy" : "terms-of-use";
  const otherSlug =
    kind === "privacy" ? "terms-of-use" : "privacy-policy";
  const otherKindLabel =
    kind === "privacy" ? doc.termsLink : doc.privacyLink;

  return (
    <section className="bg-glow">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:py-24">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <span aria-hidden>{locale === "ar" ? "→" : "←"}</span>
            {doc.backHome}
          </Link>

          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted">{doc.languageLabel}:</span>
            <Link
              href={`/en/allconvert/${slug}/`}
              className={`rounded-full px-3 py-1 transition-colors ${
                locale === "en"
                  ? "bg-brand text-white"
                  : "border border-border text-muted hover:text-foreground"
              }`}
              hrefLang="en"
            >
              {doc.enLabel}
            </Link>
            <Link
              href={`/ar/allconvert/${slug}/`}
              className={`rounded-full px-3 py-1 transition-colors ${
                locale === "ar"
                  ? "bg-brand text-white"
                  : "border border-border text-muted hover:text-foreground"
              }`}
              hrefLang="ar"
            >
              {doc.arLabel}
            </Link>
          </div>
        </div>

        <LegalBody doc={doc} />

        <div className="mt-12 flex flex-wrap gap-4 border-t border-border pt-6 text-sm">
          <Link
            href={`/${locale}/allconvert/${otherSlug}/`}
            className="text-accent transition-opacity hover:opacity-80"
          >
            {otherKindLabel}
          </Link>
          <Link
            href={`/${otherLocale}/allconvert/${slug}/`}
            className="text-muted transition-colors hover:text-foreground"
          >
            {otherLocale === "ar" ? doc.arLabel : doc.enLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
