# My Website

Source for [zachscroggins.com](https://zachscroggins.com), my personal site: a home page with my work and background, a blog, and a contact form.

## What's on the site

- **Home page:** hero, portfolio (professional work plus featured GitHub projects), About, the three newest blog posts, and a contact form.
- **Blog:** posts and articles about my portfolio work, at `/blog`, with tag pages at `/tags`. Includes an RSS feed (`/blog/rss.xml`, full post bodies), a sitemap, and generated Open Graph images.
- **Contact form:** react-hook-form with Zod validation, sent as email through the Bird API.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Cache Components, React Compiler), React 19, TypeScript
- [Tailwind CSS 4](https://tailwindcss.com) and [shadcn/ui](https://ui.shadcn.com), with light and dark mode through next-themes
- [Sanity](https://www.sanity.io) for content, read with `next-sanity` and Sanity TypeGen types
- [sugar-high](https://github.com/huozhi/sugar-high) for server-side code highlighting
- Deployed on [Vercel](https://vercel.com)

## Repositories

The content lives in a separate Sanity Studio repo, [`my-website-cms`](https://github.com/ZachScroggins/my-website-cms) (deployed at <https://my-website-cms.sanity.studio>). It defines the schema for posts, tags, companies and roles. This repo queries it.

## Getting started

Requires Node.js and npm.

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create `.env.local` (never commit it) with these variables:

   | Variable | Used for |
   |---|---|
   | `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project |
   | `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset |
   | `NEXT_PUBLIC_SANITY_STUDIO_URL` | Studio URL, for the Presentation Tool and click-to-edit |
   | `SANITY_API_READ_TOKEN` | Sanity token with the Viewer role (drafts and live content) |
   | `SANITY_REVALIDATE_SECRET` | Shared secret for `/api/revalidate-tags` (same value as the Studio's `invalidate-tags` function) |
   | `GITHUB_ACCESS_TOKEN` | Reads my public repos for the Featured Projects section |
   | `BIRD_API_KEY` | Sends contact form messages |
   | `MY_EMAIL_ADDRESS` | Where contact form messages are delivered |

3. Start the dev server and open <http://localhost:3000>:

   ```bash
   npm run dev
   ```

To edit content with live preview, also run the Studio from `my-website-cms` (it serves on port 3333).

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (`lint:fix` to fix) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run format` | Prettier on all `.ts` and `.tsx` files |

## How content updates reach the site

Pages read Sanity through `defineLive` with one shared `'use cache'` fetch. In production, when content is published, the Studio's `invalidate-tags` Sanity Function calls `app/api/revalidate-tags/route.ts`, which expires the matching cache entries. Previews and dev revalidate from the browser.

If a Studio schema or a GROQ query changes, regenerate types from the Studio repo:

```bash
npm run typegen   # run in my-website-cms; writes ../my-website/sanity/types.ts
```

## Project layout

| Path | What's there |
|---|---|
| `app/` | Routes: home, `blog`, `tags`, `api`, sitemap, robots, icons |
| `components/home/` | Home page sections |
| `components/blog/` | Portable Text rendering, code blocks, post list |
| `components/ui/` | shadcn/ui components |
| `sanity/` | Sanity client, live fetch, GROQ queries, generated types |
| `lib/` | Server actions, GitHub fetching, schemas, constants, OG image helpers |

## Working on it

- Branch off `main`, open a pull request, and merge from there. Don't commit straight to `main`.
- `AGENTS.md` has the conventions for AI coding agents working in this repo.
