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
    <ItemGroup>
      {posts.map((post) => (
        <Item
          key={post._id}
          variant="outline"
          role="listitem"
          className="relative bg-background p-4 text-left shadow-sm transition-shadow hover:shadow-md sm:p-5 dark:hover:border-muted-foreground/40"
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
                className="cursor-pointer outline-none after:absolute after:inset-0 after:rounded-lg group-hover/item:underline focus-visible:after:ring-[3px] focus-visible:after:ring-ring/50"
              >
                {post.title}
              </Link>
            </ItemTitle>
            {post.description && (
              <ItemDescription className="line-clamp-none truncate text-base">
                {post.description}
              </ItemDescription>
            )}
            <TagList tags={post.tags} surface="card" className="relative z-10 mt-1.5" />
          </ItemContent>
        </Item>
      ))}
    </ItemGroup>
  );
}

export function LatestPostsSkeleton() {
  return (
    <ItemGroup>
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
