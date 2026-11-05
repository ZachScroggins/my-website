import PortableText from '@/components/blog/portable-text';
import { TagList } from '@/components/tag-badge';
import { Skeleton } from '@/components/ui/skeleton';
import { formatDate, gradientHeading, postKindLabel } from '@/lib/blog';
import { cn } from '@/lib/utils';
import { urlFor } from '@/sanity/image';
import {
  cachedSanity,
  cachedSanityMetadata,
  cachedSanityStaticParams,
  getDynamicFetchOptions,
  type DynamicFetchOptions,
} from '@/sanity/live';
import { POST_QUERY, POST_SLUGS_QUERY } from '@/sanity/queries';
import type { Metadata } from 'next';
import { stegaClean } from 'next-sanity';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowLeft } from 'react-icons/fi';

export async function generateStaticParams() {
  const { data } = await cachedSanityStaticParams({ query: POST_SLUGS_QUERY });
  return data.filter((post): post is { slug: string } => Boolean(post.slug));
}

export async function generateMetadata({ params }: PageProps<'/blog/[slug]'>): Promise<Metadata> {
  const [{ slug }, { perspective }] = await Promise.all([params, getDynamicFetchOptions()]);
  const { data: post } = await cachedSanityMetadata({
    query: POST_QUERY,
    params: { slug },
    perspective,
  });
  if (!post) return {};
  return {
    title: `${post.title} | Zach Scroggins`,
    description: post.description ?? undefined,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: 'article',
      title: post.title ?? undefined,
      description: post.description ?? undefined,
      publishedTime: post.publishedAt ?? undefined,
      url: `/blog/${slug}`,
    },
  };
}

export default async function PostPage({ params }: PageProps<'/blog/[slug]'>) {
  const [{ slug }, options] = await Promise.all([params, getDynamicFetchOptions()]);

  return (
    <article className="bg-muted dark:bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <FiArrowLeft aria-hidden="true" />
          Blog
        </Link>
        <Post slug={slug} {...options} />
      </div>
    </article>
  );
}

async function Post({ slug, perspective, stega }: { slug: string } & DynamicFetchOptions) {
  const { data: post } = await cachedSanity({
    query: POST_QUERY,
    params: { slug },
    perspective,
    stega,
  });
  if (!post) notFound();

  const isPortfolio = stegaClean(post.kind) === 'portfolio-article';
  const company = isPortfolio ? post.role?.company : null;

  return (
    <>
      {company && (
        <div className="mt-10 flex items-center gap-4">
          {company.logo?.asset && (
            <img
              src={urlFor(company.logo).url()}
              alt=""
              width={40}
              height={44}
              className="h-11 w-auto"
            />
          )}
          <div>
            <p className="text-lg font-semibold text-foreground">
              {company.url ? (
                <a
                  href={stegaClean(company.url)}
                  target="_blank"
                  rel="noopener"
                  className="hover:underline hover:underline-offset-4"
                >
                  {company.name}
                </a>
              ) : (
                company.name
              )}
            </p>
            {post.role?.title && (
              <p className="text-sm font-medium text-muted-foreground">{post.role.title}</p>
            )}
          </div>
        </div>
      )}

      <p
        className={cn(
          'text-sm font-medium text-cyan-700 dark:text-green-400',
          company ? 'mt-8' : 'mt-10'
        )}
      >
        {postKindLabel(post.kind)}
        {post.publishedAt && (
          <>
            {' · '}
            <time dateTime={stegaClean(post.publishedAt)}>{formatDate(post.publishedAt)}</time>
          </>
        )}
      </p>
      <h1 className={cn(gradientHeading, 'mt-3 pb-1 text-4xl sm:text-5xl')}>{post.title}</h1>

      {isPortfolio && post.accomplishment && (
        <p className="mt-6 border-l-2 border-green-400/70 pl-4 text-lg font-medium text-muted-foreground">
          {post.accomplishment}
        </p>
      )}

      <TagList tags={post.tags} className="mt-6" />

      {post.image?.asset && (
        <img
          src={urlFor(post.image).width(1600).fit('max').auto('format').url()}
          alt={post.image.alt ?? ''}
          className="mt-10 w-full rounded-2xl"
        />
      )}

      {post.body && (
        <div className="typeset typeset-blog mt-10">
          <PortableText value={post.body} />
        </div>
      )}
    </>
  );
}

export function PostSkeleton() {
  return (
    <div className="mt-10 space-y-4">
      <Skeleton className="h-11 w-56" />
      <Skeleton className="h-14 w-full" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="mt-10 h-96 w-full" />
    </div>
  );
}
