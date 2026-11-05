import Reveal from '@/components/reveal';
import { TagList } from '@/components/tag-badge';
import { Item, ItemContent, ItemDescription, ItemGroup, ItemTitle } from '@/components/ui/item';
import { Skeleton } from '@/components/ui/skeleton';
import { formatDate, postKindLabel } from '@/lib/blog';
import { cachedSanity, type DynamicFetchOptions } from '@/sanity/live';
import { LATEST_POSTS_QUERY } from '@/sanity/queries';
import { stegaClean } from 'next-sanity';
import Link from 'next/link';

/**
 * The three newest posts as outline Items. The title link stretches over the whole Item
 * (`after:absolute after:inset-0`), so the Item is clickable without nesting links, and the
 * tag links sit above that overlay.
 */
export default async function LatestPosts({ perspective, stega }: DynamicFetchOptions) {
  const { data: posts } = await cachedSanity({ query: LATEST_POSTS_QUERY, perspective, stega });
  if (!posts.length) return null;

  return (
    <ItemGroup className="lg:grid lg:grid-cols-3 text-left">
      {posts.map((post, postIdx) => (
        <Reveal key={post._id} delay={postIdx * 80}>
          <Item
            variant="outline"
            role="listitem"
            className="relative bg-background p-4 shadow-sm transition-shadow hover:shadow-md sm:p-5 dark:hover:border-muted-foreground/40"
          >
            <ItemContent className="min-w-0 gap-1.5">
              <p className="text-sm font-medium text-cyan-700 dark:text-green-400">
                {postKindLabel(post.kind)}
                {post.publishedAt && (
                  <>
                    {' · '}
                    <time dateTime={stegaClean(post.publishedAt)}>
                      {formatDate(post.publishedAt)}
                    </time>
                  </>
                )}
              </p>
              <ItemTitle className="block w-full truncate text-lg font-semibold text-foreground">
                <Link
                  href={`/blog/${stegaClean(post.slug)}`}
                  className="outline-none after:absolute after:inset-0 after:rounded-lg focus-visible:after:ring-[3px] focus-visible:after:ring-ring/50"
                >
                  {post.title}
                </Link>
              </ItemTitle>
              {post.description && (
                <ItemDescription className="line-clamp-none truncate text-base">
                  {post.description}
                </ItemDescription>
              )}
              {/* lg+: one row that scrolls sideways with no scrollbar. The padding (offset by
                negative margin) leaves room for the badges' hover lift, and the right edge
                fades when tags run past it. */}
              <TagList
                tags={post.tags}
                surface="card"
                className="relative z-10 mt-1.5 lg:-mx-1 lg:-my-1 lg:mt-0.5 lg:flex-nowrap lg:overflow-x-auto lg:px-1 lg:py-1 lg:mask-[linear-gradient(to_right,black_calc(100%-1.5rem),transparent)] lg:scrollbar-none lg:[&::-webkit-scrollbar]:hidden"
              />
            </ItemContent>
          </Item>
        </Reveal>
      ))}
    </ItemGroup>
  );
}

export function LatestPostsSkeleton() {
  return (
    <ItemGroup className="lg:grid lg:grid-cols-3">
      {Array.from({ length: 3 }, (_, i) => (
        <Item key={i} variant="outline" className="bg-background p-4 sm:p-5">
          <ItemContent className="gap-2.5">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-6 w-48 rounded-4xl" />
          </ItemContent>
        </Item>
      ))}
    </ItemGroup>
  );
}
