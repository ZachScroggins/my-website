import PostList from '@/components/blog/post-list';
import { Skeleton } from '@/components/ui/skeleton';
import { gradientHeading } from '@/lib/blog';
import { SITE_TITLE } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { urlFor } from '@/sanity/image';
import {
  cachedSanity,
  cachedSanityMetadata,
  cachedSanityStaticParams,
  getDynamicFetchOptions,
  type DynamicFetchOptions,
} from '@/sanity/live';
import { TAG_QUERY, TAG_SLUGS_QUERY } from '@/sanity/queries';
import type { Metadata } from 'next';
import { stegaClean } from 'next-sanity';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowLeft, FiBookOpen, FiGithub, FiHome } from 'react-icons/fi';

export async function generateStaticParams() {
  const { data } = await cachedSanityStaticParams({ query: TAG_SLUGS_QUERY });
  return data.filter((tag): tag is { slug: string } => Boolean(tag.slug));
}

export async function generateMetadata({ params }: PageProps<'/tags/[slug]'>): Promise<Metadata> {
  const [{ slug }, { perspective }] = await Promise.all([params, getDynamicFetchOptions()]);
  const { data: tag } = await cachedSanityMetadata({
    query: TAG_QUERY,
    params: { slug },
    perspective,
  });
  if (!tag) return {};
  return {
    title: `${tag.name} | Zach Scroggins`,
    description: tag.description ?? undefined,
    alternates: { canonical: `/tags/${slug}` },
    openGraph: {
      type: 'website',
      siteName: SITE_TITLE,
      title: tag.name ?? undefined,
      description: tag.description ?? undefined,
      url: `/tags/${slug}`,
    },
  };
}

export default async function TagPage({ params }: PageProps<'/tags/[slug]'>) {
  const [{ slug }, options] = await Promise.all([params, getDynamicFetchOptions()]);

  return (
    <section className="bg-muted dark:bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <Link
          href="/tags"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <FiArrowLeft aria-hidden="true" />
          Tags
        </Link>
        <Tag slug={slug} {...options} />
      </div>
    </section>
  );
}

async function Tag({ slug, perspective, stega }: { slug: string } & DynamicFetchOptions) {
  const { data: tag } = await cachedSanity({
    query: TAG_QUERY,
    params: { slug },
    perspective,
    stega,
  });
  if (!tag) notFound();

  const iconSvg = stegaClean(tag.icon?.svg);
  const links = [
    { label: 'Homepage', href: tag.homepageUrl, Icon: FiHome },
    { label: 'Repository', href: tag.repoUrl, Icon: FiGithub },
    { label: 'Documentation', href: tag.docsUrl, Icon: FiBookOpen },
  ].flatMap(({ href, ...link }) => (href ? [{ ...link, href: stegaClean(href) }] : []));

  return (
    <>
      <div className="mt-10 flex items-center gap-5">
        {iconSvg && (
          <span
            aria-hidden="true"
            className="flex size-14 flex-none items-center justify-center rounded-xl bg-linear-to-r from-green-400 to-blue-500 text-white shadow-sm [&>svg]:size-7"
            dangerouslySetInnerHTML={{ __html: iconSvg }}
          />
        )}
        <h1 className={cn(gradientHeading, 'pb-1 text-4xl sm:text-5xl')}>{tag.name}</h1>
      </div>

      {tag.logo?.asset && (
        <figure className="mt-10">
          <div className="inline-flex rounded-xl bg-white p-5 shadow-sm ring-1 ring-border">
            <img
              src={urlFor(tag.logo).height(96).fit('max').url()}
              alt={tag.logo.alt || `${tag.name} logo`}
              className="h-12 w-auto"
            />
          </div>
          {(tag.logo.source || tag.logo.license) && (
            <figcaption className="mt-2 text-xs text-muted-foreground">
              Logo
              {tag.logo.source && (
                <>
                  {' from '}
                  <a
                    href={stegaClean(tag.logo.source)}
                    target="_blank"
                    rel="noopener"
                    className="underline underline-offset-2 hover:text-foreground"
                  >
                    {new URL(stegaClean(tag.logo.source)).hostname}
                  </a>
                </>
              )}
              {tag.logo.license && <>. {tag.logo.license}</>}
            </figcaption>
          )}
        </figure>
      )}

      {tag.description && (
        <p className="mt-8 max-w-prose text-lg text-muted-foreground">{tag.description}</p>
      )}

      {links.length > 0 && (
        <ul role="list" className="mt-8 flex flex-wrap gap-3">
          {links.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener"
                className="inline-flex cursor-pointer items-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition hover:border-green-400/70 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <Icon className="size-4 text-muted-foreground" aria-hidden="true" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}

      <h2 className="mt-16 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
        Posts tagged {tag.name}
      </h2>
      <PostList posts={tag.posts} headingLevel="h3" />
    </>
  );
}

export function TagSkeleton() {
  return (
    <div className="mt-10 space-y-6">
      <div className="flex items-center gap-5">
        <Skeleton className="size-14 rounded-xl" />
        <Skeleton className="h-12 w-64" />
      </div>
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-40 w-full rounded-2xl" />
    </div>
  );
}
