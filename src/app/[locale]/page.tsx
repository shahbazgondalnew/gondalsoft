import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { Reveal } from "@/components/reveal";
import { ServiceIcon } from "@/components/icons";
import { ContactForm } from "@/components/contact-form";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;
  const dict = getDictionary(l);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-glow">
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-20 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="animate-in inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-1.5 text-xs font-medium text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {dict.hero.badge}
            </span>
            <h1 className="animate-in mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              {dict.hero.titleLead}{" "}
              <span className="text-gradient">{dict.hero.titleHighlight}</span>
            </h1>
            <p className="animate-in mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {dict.hero.subtitle}
            </p>
            <div className="animate-in mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={`/${l}#contact`}
                className="w-full rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto"
              >
                {dict.hero.ctaPrimary}
              </Link>
              <Link
                href={`/${l}#services`}
                className="w-full rounded-full border border-border bg-white/5 px-7 py-3 text-sm font-semibold transition-colors hover:bg-white/10 sm:w-auto"
              >
                {dict.hero.ctaSecondary}
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {dict.hero.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div className="card rounded-2xl px-5 py-6 text-center">
                  <p className="text-lg font-semibold text-gradient">{s.value}</p>
                  <p className="mt-1 text-sm text-muted">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeader
            eyebrow={dict.services.eyebrow}
            heading={dict.services.heading}
            subheading={dict.services.subheading}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dict.services.items.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 100}>
                <div className="card group h-full rounded-2xl p-6 transition-colors hover:border-brand/50">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <ServiceIcon name={s.icon} width={24} height={24} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {s.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-border bg-background-soft py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeader
            eyebrow={dict.process.eyebrow}
            heading={dict.process.heading}
            subheading={dict.process.subheading}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dict.process.steps.map((step, i) => (
              <Reveal key={step.step} delay={i * 100}>
                <div className="card h-full rounded-2xl p-6">
                  <span className="text-3xl font-bold text-gradient">{step.step}</span>
                  <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeader
            eyebrow={dict.tech.eyebrow}
            heading={dict.tech.heading}
            subheading={dict.tech.subheading}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dict.tech.groups.map((g, i) => (
              <Reveal key={g.title} delay={i * 80}>
                <div className="card h-full rounded-2xl p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
                    {g.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((it) => (
                      <li
                        key={it}
                        className="rounded-lg border border-border bg-white/5 px-3 py-1.5 text-sm text-muted"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="scroll-mt-20 border-y border-border bg-background-soft py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeader
            eyebrow={dict.work.eyebrow}
            heading={dict.work.heading}
            subheading={dict.work.subheading}
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {dict.work.items.map((w, i) => (
              <Reveal key={w.title} delay={i * 100}>
                <div className="card group h-full overflow-hidden rounded-2xl">
                  <div className="relative h-40 bg-glow">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand/30 to-accent/20" />
                    <span className="absolute bottom-3 start-4 rounded-full bg-background/70 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                      {w.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {w.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {w.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-brand/10 px-2.5 py-1 text-xs text-brand"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                  {dict.about.eyebrow}
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  {dict.about.heading}
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
                  {dict.about.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {dict.about.values.map((v, i) => (
                <Reveal key={v.title} delay={i * 100}>
                  <div className="card h-full rounded-2xl p-6">
                    <h3 className="text-base font-semibold">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {v.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="px-5 py-10">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border bg-glow px-6 py-14 text-center">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              {dict.ctaBand.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">{dict.ctaBand.subheading}</p>
            <Link
              href={`/${l}#contact`}
              className="mt-8 inline-block rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              {dict.ctaBand.button}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                  {dict.contact.eyebrow}
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  {dict.contact.heading}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {dict.contact.subheading}
                </p>
                <dl className="mt-8 space-y-5">
                  <ContactInfo
                    label={dict.contact.info.emailLabel}
                    value={dict.contact.info.email}
                    href={`mailto:${dict.contact.info.email}`}
                  />
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-muted">
                      {dict.contact.info.phoneLabel}
                    </dt>
                    <dd className="mt-1 space-y-1">
                      {dict.contact.info.phones.map((p) => (
                        <div key={p.number} className="text-base">
                          <span className="text-muted">{p.label}: </span>
                          <a
                            href={`tel:${p.number}`}
                            dir="ltr"
                            className="transition-colors hover:text-accent"
                          >
                            {p.number}
                          </a>
                        </div>
                      ))}
                    </dd>
                  </div>
                  <ContactInfo
                    label={dict.contact.info.locationLabel}
                    value={dict.contact.info.location}
                  />
                </dl>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="card rounded-2xl p-6 sm:p-8">
                <ContactForm dict={dict} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeader({
  eyebrow,
  heading,
  subheading,
}: {
  eyebrow: string;
  heading: string;
  subheading: string;
}) {
  return (
    <Reveal>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{heading}</h2>
        <p className="mt-4 text-base leading-relaxed text-muted">{subheading}</p>
      </div>
    </Reveal>
  );
}

function ContactInfo({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wide text-muted">{label}</dt>
      <dd className="mt-1 text-base">
        {href ? (
          <a href={href} className="transition-colors hover:text-accent">
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}
