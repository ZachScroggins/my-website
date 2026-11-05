import { TagList, type TagRef } from '@/components/tag-badge';
import { formatDate, postKindLabel } from '@/lib/blog';
import { stegaClean } from 'next-sanity';
import Link from 'next/link';

export type PostListItem = {
  _id: string;
  kind: string | null;
  title: string | null;
  slug: string | null;
  publishedAt: string | null;
  description: string | null;
  tags: TagRef[] | null;
};

export default function PostList({
  posts,
  headingLevel = 'h2',
}: {
  posts: PostListItem[];
  headingLevel?: 'h2' | 'h3';
}) {
  const Heading = headingLevel;
  if (!posts.length) {
    return <p className="mt-8 text-lg text-muted-foreground">Nothing here yet.</p>;
  }

  return (
    <ul role="list" className="mt-8 space-y-6">
      {posts.map((post) => (
        <li key={post._id}>
          <article className="rounded-2xl border bg-background p-6 shadow-sm">
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
            <Heading className="mt-2 text-xl font-semibold text-foreground">
              <Link
                href={`/blog/${stegaClean(post.slug)}`}
                className="cursor-pointer hover:underline hover:underline-offset-4"
              >
                {post.title}
              </Link>
            </Heading>
            {post.description && (
              <p className="mt-2 text-base text-muted-foreground">{post.description}</p>
            )}
            <TagList tags={post.tags} surface="card" className="mt-4" />
          </article>
        </li>
      ))}
    </ul>
  );
}
