import Link from "next/link";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export function PrivacyContent({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const p = dict.privacy;

  return (
    <section className="bg-glow">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:py-24">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
        >
          <span aria-hidden>{locale === "ar" ? "→" : "←"}</span>
          {dict.footer.backHome}
        </Link>

        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
          {p.title}
        </h1>
        <p className="mt-3 text-sm text-muted">{p.updated}</p>
        <p className="mt-6 text-base leading-relaxed text-muted">{p.intro}</p>

        <div className="mt-10 space-y-6">
          {p.blocks.map((block, i) => {
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
      </div>
    </section>
  );
}
