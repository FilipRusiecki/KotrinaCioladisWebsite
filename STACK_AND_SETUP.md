# Stack & Setup

## Commands

```bash
yarn install
yarn rw dev          # http://localhost:8910
yarn rw build
```

## Stack

- RedwoodJS 8.9 (`web` + `api`)
- React 18 + Vite
- Tailwind CSS 3 + Framer Motion
- Yarn 4 · Node 20
- Vercel (`vercel.json` Corepack + `yarn rw build`)

## Deploy (Vercel)

1. Push this repo to GitHub
2. Vercel → **Add New** → **Project** → import `FilipRusiecki/KotrinaCioladisWebsite`
3. Framework Preset should be **RedwoodJS** (or leave defaults)
4. Use a **new** Vercel project (not Digital House / FRVG)
5. Deploy — add `DATABASE_URL` later when you need a real database
