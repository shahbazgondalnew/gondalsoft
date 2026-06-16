# gondalsoft — غوندال برمجيات

Bilingual (English + Arabic) company website for **gondalsoft**, an AI-powered software studio
offering mobile (iOS/Android), web, and AI product development.

Built as a fast, SEO-friendly **static site** and deployed to **Firebase Hosting** via **GitHub Actions**.

---

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router) + TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| i18n | Locale routing `/en` + `/ar` with full RTL support |
| Output | Static export (`output: "export"`) → `out/` |
| Hosting | Firebase Hosting |
| CI/CD | GitHub Actions |
| Domain | Hostinger (DNS pointed at Firebase) |

Why this stack: static export means the whole site is plain HTML/CSS/JS — extremely fast,
cheap to host, great for SEO, and a perfect fit for Firebase Hosting + GitHub Actions.

---

## Prerequisites

- [Node.js 20+](https://nodejs.org)
- [Firebase CLI](https://firebase.google.com/docs/cli): `npm install -g firebase-tools`
- A Google/Firebase account and a GitHub repository

---

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000/en> or <http://localhost:3000/ar>.

### Build the static site

```bash
npm run build
```

The exported site is written to the `out/` directory.

---

## Project structure

```
src/
  app/
    [locale]/
      layout.tsx     # Root layout: sets <html lang dir>, fonts, navbar, footer
      page.tsx       # Full one-page site (hero, services, work, about, contact …)
    globals.css      # Brand theme + Tailwind
  components/        # Navbar, footer, language switcher, contact form, icons, reveal
  i18n/
    config.ts        # Locales, direction (rtl/ltr), labels
    dictionaries.ts  # ALL site text in English + Arabic  ← edit content here
firebase.json        # Firebase Hosting config (serves out/, root → /en/)
.firebaserc          # Firebase project id (replace placeholder)
.github/workflows/   # GitHub Actions: deploy on merge + PR previews
```

### Editing content / translations

All visible text lives in `src/i18n/dictionaries.ts` under the `en` and `ar` objects.
Keep both languages in sync — they share the same `Dictionary` type, so TypeScript will
flag anything you miss.

---

## Firebase setup (one time)

1. Create a project at <https://console.firebase.google.com> (e.g. `gondalsoft`).
2. Log in and select the project:
   ```bash
   firebase login
   firebase use --add
   ```
   This writes your real project id into `.firebaserc` (replace the placeholder
   `REPLACE_WITH_YOUR_FIREBASE_PROJECT_ID`).

### Manual deploy (optional, to test)

```bash
npm run build
firebase deploy --only hosting
```

Your site goes live at `https://<project-id>.web.app`.

---

## Automated deploy with GitHub Actions

The workflows in `.github/workflows/` build the site and deploy it:

- `firebase-hosting-merge.yml` → deploys to **live** on every push to `main`.
- `firebase-hosting-pull-request.yml` → deploys a **preview channel** for each PR.

### Configure these in your GitHub repo (Settings → Secrets and variables → Actions)

| Type | Name | Value |
| --- | --- | --- |
| **Variable** | `FIREBASE_PROJECT_ID` | Your Firebase project id |
| **Secret** | `FIREBASE_SERVICE_ACCOUNT` | A Firebase service-account JSON key (full contents) |

The easiest way to generate the service-account secret is:

```bash
firebase init hosting:github
```

This connects the repo and stores the service account secret for you automatically.
(If you prefer manual setup: Firebase Console → Project Settings → Service accounts →
Generate new private key, then paste the JSON into the `FIREBASE_SERVICE_ACCOUNT` secret.)

Once configured, push to `main`:

```bash
git add .
git commit -m "Launch gondalsoft website"
git push origin main
```

GitHub Actions builds and deploys automatically.

---

## Connecting your Hostinger domain

Your domain stays registered at Hostinger; Firebase serves the site.

1. In **Firebase Console → Hosting → Add custom domain**, enter your domain
   (e.g. `gondalsoft.com`). Firebase shows you DNS records to add.
2. In **Hostinger → Domains → DNS / Nameservers → DNS Zone**, add the records Firebase gives you:
   - Two **A records** for the apex domain (`@`) pointing to Firebase's IPs
     (typically `151.101.1.195` and `151.101.65.195` — always use the exact values Firebase shows you).
   - For `www`, add the **A records** (or a `CNAME` to your `*.web.app` host) as instructed.
3. Remove any old/conflicting A or CNAME records for those hosts in Hostinger.
4. Back in Firebase, wait for verification. SSL certificates are provisioned automatically
   (can take from minutes up to ~24 hours as DNS propagates).

> Tip: If you only manage DNS at Hostinger (not nameservers), just edit the DNS Zone.
> Do **not** change nameservers unless you intend to move DNS hosting elsewhere.

---

## License

© gondalsoft. All rights reserved.
