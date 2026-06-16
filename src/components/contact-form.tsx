"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

export function ContactForm({ dict }: { dict: Dictionary }) {
  const t = dict.contact.form;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`New project inquiry — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}`,
    );
    window.location.href = `mailto:${dict.contact.info.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  const fieldClass =
    "w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-brand";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder={t.name} className={fieldClass} />
        <input
          name="email"
          type="email"
          required
          placeholder={t.email}
          className={fieldClass}
        />
      </div>
      <input name="service" placeholder={t.service} className={fieldClass} />
      <textarea
        name="message"
        required
        rows={5}
        placeholder={t.message}
        className={`${fieldClass} resize-none`}
      />
      <button
        type="submit"
        className="w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        {t.submit}
      </button>
      {submitted && (
        <p className="text-sm text-accent">{t.success}</p>
      )}
    </form>
  );
}
