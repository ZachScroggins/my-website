# my-website: the site

Zach's personal website. Project overview (this repo, the Sanity Studio repo next to it, shared assets): [`../AGENTS.md`](../AGENTS.md). Read it first.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Stack

Next.js 16 (App Router, Cache Components, React Compiler), React 19, Tailwind CSS 4, shadcn/ui (use its components and theme tokens), react-hook-form + Zod, next-themes, Prettier. Deployed on Vercel.

## Sanity content

- Content comes from the Sanity Studio in `../my-website-cms`. Read with `next-sanity` (v13+) and `@sanity/image-url`.
- Data fetching follows the `sanity-live-cache-components` skill: `defineLive` with `strict: true`, one shared `'use cache'` fetch, and pages that branch on draft mode. Don't call `cookies()` or `headers()` inside `'use cache'`.
- Use `stega: false` for metadata, static params, sitemap, RSS and OG images. Use `stegaClean()` before comparing a string from Sanity.
- Env vars live in `.env.local` (never committed): `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_STUDIO_URL`, `SANITY_API_READ_TOKEN` (Viewer role).
- Post bodies render inside a `typeset` wrapper (shadcn Typeset, `app/typeset.css`), not `@tailwindcss/typography`. Code blocks use sugar-high.
- Sanity skills in `.agents/skills/`: `sanity-best-practices`, `sanity-live-cache-components`, `content-modeling-best-practices`, `seo-aeo-best-practices`.

## Conventions

- Work on a feature branch and open a PR; Zach reviews and merges. Never commit to `main`.
- New pages use the home page's look: gradient headings (`from-green-400 to-blue-500`), shadcn tokens, light and dark mode.
- Check changes in the running app (dev server and a browser), not only with a build.

## Project notes

Project notes and board live in the Obsidian vault at `/Users/zach/Library/Mobile Documents/iCloud~md~obsidian/Documents/My Vault/01 PROJECTS/My Website/`; read its `INDEX.md` first. Before writing anything in the vault, read `/Users/zach/Library/Mobile Documents/iCloud~md~obsidian/Documents/My Vault/AGENTS.md` and follow it. If you change any vault file (including the board), add a Log entry in `/Users/zach/Library/Mobile Documents/iCloud~md~obsidian/Documents/My Vault/05 LOG/`.
