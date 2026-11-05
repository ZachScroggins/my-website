import PostList from '@/components/blog/post-list';
import { Skeleton } from '@/components/ui/skeleton';
import { gradientHeading } from '@/lib/blog';
import { cn } from '@/lib/utils';
import { SanityBoundary } from '@/sanity/boundary';
import { cachedSanity, type DynamicFetchOptions } from '@/sanity/live';
import { POSTS_QUERY } from '@/sanity/queries';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Zach Scroggins',
  description: 'Posts and portfolio articles by Zach Scroggins.',
  alternates: { canonical: '/blog', types: { 'application/rss+xml': '/blog/rss.xml' } },
};

export default function BlogPage() {
  return (
    <section className="bg-muted dark:bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <h1 className={cn(gradientHeading, 'w-fit pb-2 text-6xl sm:text-7xl')}>Blog</h1>
        <p className="mt-4 max-w-prose text-xl text-muted-foreground">
          Posts, and articles about the work in my portfolio.
        </p>
        <SanityBoundary fallback={<PostListSkeleton />}>
          {(options) => <Posts {...options} />}
        </SanityBoundary>
      </div>
    </section>
  );
}

async function Posts({ perspective, stega }: DynamicFetchOptions) {
  const { data: posts } = await cachedSanity({ query: POSTS_QUERY, perspective, stega });
  return <PostList posts={posts} />;
}

function PostListSkeleton() {
  return (
    <div className="mt-8 space-y-6">
      {Array.from({ length: 4 }, (_, i) => (
        <Skeleton key={i} className="h-40 w-full rounded-2xl" />
      ))}
    </div>
  );
}
