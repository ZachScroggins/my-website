import { TagBadge } from '@/components/tag-badge';
import { Skeleton } from '@/components/ui/skeleton';
import { gradientHeading } from '@/lib/blog';
import { SITE_TITLE } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { SanityBoundary } from '@/sanity/boundary';
import { cachedSanity, type DynamicFetchOptions } from '@/sanity/live';
import { TAGS_QUERY } from '@/sanity/queries';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tags | Zach Scroggins',
  description: 'Technologies and topics Zach Scroggins writes about and works with.',
  alternates: { canonical: '/tags' },
  openGraph: {
    type: 'website',
    siteName: SITE_TITLE,
    title: 'Tags',
    description: 'Technologies and topics Zach Scroggins writes about and works with.',
    url: '/tags',
  },
};

export default function TagsPage() {
  return (
    <section className="bg-muted dark:bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <h1 className={cn(gradientHeading, 'w-fit pb-2 text-6xl sm:text-7xl')}>Tags</h1>
        <SanityBoundary
          fallback={
            <div className="mt-10 flex flex-wrap gap-3">
              {Array.from({ length: 12 }, (_, i) => (
                <Skeleton key={i} className="h-6 w-24 rounded-4xl" />
              ))}
            </div>
          }
        >
          {(options) => <Tags {...options} />}
        </SanityBoundary>
      </div>
    </section>
  );
}

async function Tags({ perspective, stega }: DynamicFetchOptions) {
  const { data: tags } = await cachedSanity({ query: TAGS_QUERY, perspective, stega });
  return (
    <ul role="list" className="mt-10 flex flex-wrap gap-3">
      {tags.map((tag) => (
        <li key={tag._id} className="flex p-1">
          <TagBadge tag={tag} />
        </li>
      ))}
    </ul>
  );
}
