# Kotrina — Design system

Quick reference for colours, fonts, and assets used on the site.

## Fonts (free — Google Fonts)

| Role | Font | Tailwind | Use for |
|------|------|----------|---------|
| Display / UI | [Shantell Sans](https://fonts.google.com/specimen/Shantell+Sans) | `font-display` | Nav, headings, buttons, labels |
| Body | [Literata](https://fonts.google.com/specimen/Literata) | `font-serif` | Paragraphs, longer reading |

Logo wordmark stays as the **Kotrina** image (hand-drawn) — site text uses Shantell Sans to sit close to that feel.

Loaded in `web/src/index.html`. Defined in `web/config/tailwind.config.js`.

## Colour palette

Tailwind prefix: `kotrina-*` (e.g. `bg-kotrina-linen`, `text-kotrina-ink`).

| Token | Hex | Role |
|-------|-----|------|
| `linen` | `#EBE6DF` | Page background |
| `soft` | `#F2EEE8` | Surfaces, header/footer, panels |
| `mist` | `#D9D4CE` | Borders, subtle lines |
| `ink` | `#2F2A27` | Primary text |
| `mute` | `#5C554F` | Secondary text |
| `black` | `#1A1715` | Strongest text / logo ink |
| `coral` | `#E89B94` | Main accent (buttons, underlines) |
| `blush` | `#C45B7A` | Hover accent |
| `rust` | `#A33A28` | Strong accent / links |
| `gold` | `#C9A24A` | Occasional highlight |
| `parchment` | `#D6C8B4` | Warm fill / art tones |
| `earth` | `#7A5A3E` | Vine ornaments, scroll edges |
| `charcoal` | `#241F1C` | Overlays, dark UI |
| `white` | `#FFFFFF` | Pure white (sparingly) |

## Brand assets

| Asset | Path |
|-------|------|
| Kotrina logo | `web/public/images/logo/kotrina.png` |
| Kotrina mark / favicon source | `web/public/images/logo/kotrina-mark.png` |
| MAMAzine logo | `web/public/images/logo/mamazine.png` |
| K mark | `web/public/images/brand/k-mark.png` |
| OG cover | `web/public/images/brand/og-cover.jpg` |
| Favicons | `web/public/favicon.png`, `favicon-32.png`, `apple-touch-icon.png` |
| About photo | `web/public/images/about/kotrina.jpg` |
| Portfolio images | `web/public/images/portfolio/` |
| Workshop photos | `web/public/images/workshops/` |

## Shared UI pieces

| Piece | File | Notes |
|-------|------|-------|
| Side vines | `web/src/components/SideOrnaments/` | Decorative margins (desktop) |
| Scroll panels | `web/src/components/ScrollPanel/` | Parchment / rolled-edge text frames |
| Brand flourish | `web/src/components/Brand/` | Coral underline under logo |
| Portfolio grid | `web/src/components/PortfolioGrid/` | Gallery + lightbox |
| Site chrome | `web/src/layouts/SiteLayout/` | Nav + footer |

## Site map

- `/` — Portfolio (home)
- `/workshops` — MAMAzine workshops
- `/art-club` — Art Club monthly meetup
- `/about` — About
- `/contact` — Contact

Art Club assets: `web/public/images/art-club/` (WhatsApp QR + meetup poster).

## Contacts (live copy)

- General: `kotrina.art@gmail.com`
- Workshops: `kotrina.c@gmail.com`
- Instagram: [kotrina.art](https://www.instagram.com/kotrina.art/)
- TikTok: [@kotrina.art](https://www.tiktok.com/@kotrina.art)

## Stack

RedwoodJS 8.9 · React · Tailwind CSS 3 · Framer Motion · Yarn 4 · Vercel
