import Link from 'next/link';
import type { ReactNode } from 'react';
import { FiArrowRight } from 'react-icons/fi';

/** Home page Blog section. `posts` is the Sanity-backed list (see latest-posts.tsx). */
export default function Blog({ posts }: { posts: ReactNode }) {
  return (
    <section className="bg-muted pt-24 pb-8 lg:pt-32 dark:bg-background">
      <div className="mx-auto max-w-md px-4 text-left sm:max-w-3xl sm:px-6 lg:max-w-7xl">
        <h2 className="pb-5 bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent sm:text-8xl">
          Latest Ramblings
        </h2>
        <p className="max-w-prose text-xl text-muted-foreground">
          What I&apos;m building and how I build it: Next.js, TypeScript, Sanity and working with AI
          agents, plus the stories behind my portfolio work.
        </p>
        <div className="mt-10">{posts}</div>
        <Link
          href="/blog"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-linear-to-r from-green-400 to-blue-500 px-6 text-lg py-3 font-medium text-white shadow-sm hover:brightness-110"
        >
          All posts
          <FiArrowRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
