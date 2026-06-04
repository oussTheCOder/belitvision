<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# BELITVISION - IPTV Website

## Build & Dev
- `npm run dev` - Start dev server
- `npm run build` - Production build
- `npm start` - Start production server

## Architecture
- **Framework**: Next.js 16 (App Router) with Turbopack
- **i18n**: next-intl (locales: nl, en), default locale: nl
- **Styling**: Tailwind CSS v4
- **Middleware**: Proxy (src/proxy.ts) for locale detection

## Key Conventions (Next.js 16)
- `proxy.ts` replaces `middleware.ts`
- `params` is async - must use `await params`
- `PageProps<'/[locale]'>` and `LayoutProps<'/[locale]'>` are globally available
- Turbopack is the default compiler
- Route files under `src/app/[locale]/`

## Project Structure
```
src/
├── app/
│   ├── [locale]/          # Localized routes (nl, en)
│   │   ├── layout.tsx     # Locale layout with metadata + SEO
│   │   ├── page.tsx       # Homepage (all sections)
│   │   ├── globals.css    # Global styles
│   │   ├── multiple-devices/
│   │   │   └── page.tsx
│   │   ├── privacy-terms/
│   │   │   └── page.tsx
│   │   ├── refund-policy/
│   │   │   └── page.tsx
│   │   └── terms-and-conditions/
│   │       └── page.tsx
│   ├── layout.tsx         # Root layout (pass-through)
│   ├── page.tsx           # Redirects / -> /nl
│   ├── sitemap.ts
│   └── robots.ts
├── components/            # Shared UI components (12 files)
├── i18n/                  # i18n configuration
│   ├── routing.ts
│   ├── request.ts
│   └── navigation.ts
└── proxy.ts               # Locale middleware
messages/
├── nl.json                # Dutch translations (default)
└── en.json                # English translations
public/images/             # Downloaded assets
```

## SEO
- Keywords targeted: "iptv belgie", "iptv abonnement"
- hreflang tags for nl/en
- Structured sitemap.xml + robots.txt
- OpenGraph metadata per locale
- Canonical URLs pointing to belitvisio.com
- Site title (NL): "beste iptv abonnement in belgie" (lowercase)

## Design Tokens (Tailwind v4 `@theme`)
- `--color-primary`: #2789fc
- `--color-accent`: #a05094  
- `--color-muted`: rgba(255,255,255,.6)
- `--color-glass`: rgba(255,255,255,.05)
- `--color-true-dark`: #090909
- `--color-elevated`: #111111
- `--color-section-alt`: #0a0a0a
- `--color-border`: rgba(255,255,255,.1)
