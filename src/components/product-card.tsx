"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { Dictionary, WorkItem } from "@/i18n/dictionaries";

type StoreKey = "android" | "ios" | "mac";

const storeMeta: Record<
  StoreKey,
  { labelKey: "playStore" | "appStore" | "macAppStore" }
> = {
  android: { labelKey: "playStore" },
  ios: { labelKey: "appStore" },
  mac: { labelKey: "macAppStore" },
};

function StoreIcon({ platform }: { platform: StoreKey }) {
  if (platform === "android") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.5 12.5 4 20.2V3.8l13.5 8.7Zm1.2-2.1L5.1 1.5A1.5 1.5 0 0 0 2.8 2.8v18.4a1.5 1.5 0 0 0 2.3 1.3l13.6-8.9a1.5 1.5 0 0 0 0-2.6Z" />
      </svg>
    );
  }
  if (platform === "ios") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M16.7 12.3c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.9-3.5.9s-1.8-.8-3-.8c-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.8 1.1 9 .8 1.1 1.7 2.3 2.9 2.2 1.2 0 1.6-.7 3-.7s1.8.7 3 .7 2-1.1 2.8-2.2c.9-1.3 1.2-2.5 1.3-2.6-.1 0-2.4-.9-2.5-3.5Zm-2.3-6.7c.6-.8 1.1-1.9.9-3-.9 0-2 .6-2.6 1.4-.6.7-1.1 1.9-.9 3 1 .1 2-.5 2.6-1.4Z" />
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v10a1.5 1.5 0 0 1-1.5 1.5H13l2 2.5H9l2-2.5H5.5A1.5 1.5 0 0 1 4 15.5v-10Z" />
    </svg>
  );
}

export function ProductCard({
  item,
  labels,
}: {
  item: WorkItem;
  labels: Dictionary["work"];
}) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const clickable = Boolean(item.platforms?.length);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => clickable && setOpen(true)}
        disabled={!clickable}
        className={`card group h-full w-full overflow-hidden rounded-2xl text-start transition-colors ${
          clickable
            ? "cursor-pointer hover:border-brand/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            : "cursor-default"
        }`}
      >
        <div className="relative h-40 bg-glow">
          <div className="absolute inset-0 bg-gradient-to-br from-brand/30 to-accent/20" />
          {item.comingSoon ? (
            <span className="absolute top-3 end-3 rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent backdrop-blur">
              {labels.comingSoon}
            </span>
          ) : null}
          <span className="absolute bottom-3 start-4 rounded-full bg-background/70 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
            {item.category}
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {item.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-brand/10 px-2.5 py-1 text-xs text-brand"
              >
                {tag}
              </span>
            ))}
          </div>
          {clickable ? (
            <p className="mt-4 text-sm font-medium text-accent transition-opacity group-hover:opacity-90">
              {labels.getTheApp} →
            </p>
          ) : null}
        </div>
      </button>

      {clickable ? (
        <dialog
          ref={dialogRef}
          aria-labelledby={titleId}
          className="m-auto w-[min(100%,24rem)] rounded-2xl border border-border bg-background-soft p-0 text-foreground shadow-2xl backdrop:bg-black/60 open:flex open:flex-col"
          onClose={() => setOpen(false)}
          onClick={(e) => {
            if (e.target === dialogRef.current) setOpen(false);
          }}
        >
          <div className="p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                {item.comingSoon ? (
                  <span className="inline-flex rounded-full bg-accent/15 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                    {labels.comingSoon}
                  </span>
                ) : null}
                <h3 id={titleId} className="mt-2 text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{labels.availableOn}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-border px-3 py-1 text-sm text-muted transition-colors hover:text-foreground"
              >
                {labels.close}
              </button>
            </div>

            <ul className="mt-6 space-y-3">
              {(item.platforms ?? []).map((platform) => {
                const url = item.stores?.[platform]?.trim();
                const ready = Boolean(url);
                const label = labels[storeMeta[platform].labelKey];
                const content = (
                  <>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/15 text-brand">
                      <StoreIcon platform={platform} />
                    </span>
                    <span className="flex-1 text-start">
                      <span className="block text-sm font-semibold">{label}</span>
                      <span className="block text-xs text-muted">
                        {platform === "ios"
                          ? "iOS"
                          : platform === "mac"
                            ? "Mac"
                            : "Android"}
                      </span>
                    </span>
                    {!ready ? (
                      <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent">
                        {labels.storeComingSoon}
                      </span>
                    ) : (
                      <span className="text-accent" aria-hidden>
                        →
                      </span>
                    )}
                  </>
                );

                return (
                  <li key={platform}>
                    {ready ? (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center gap-3 rounded-xl border border-border bg-white/5 px-3 py-3 transition-colors hover:border-brand/50 hover:bg-white/10"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex w-full items-center gap-3 rounded-xl border border-border bg-white/5 px-3 py-3 opacity-80">
                        {content}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </dialog>
      ) : null}
    </>
  );
}
