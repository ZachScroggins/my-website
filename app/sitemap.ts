import { BASE_URL } from '@/lib/constants';
import { cachedSanityMetadata } from '@/sanity/live';
import { SITEMAP_QUERY } from '@/sanity/queries';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  'use cache';

  const { data } = await cachedSanityMetadata({ query: SITEMAP_QUERY, perspective: 'published' });
  const latest = (dates: string[]) => (dates.length ? new Date(dates.sort().at(-1)!) : new Date());

  return [
    { url: `${BASE_URL}/`, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    {
      url: `${BASE_URL}/blog`,
      lastModified: latest(data.posts.map((post) => post._updatedAt)),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...data.posts
      .filter((post) => post.slug)
      .map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(post._updatedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      })),
    {
      url: `${BASE_URL}/tags`,
      lastModified: latest(data.tags.map((tag) => tag._updatedAt)),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    ...data.tags
      .filter((tag) => tag.slug)
      .map((tag) => ({
        url: `${BASE_URL}/tags/${tag.slug}`,
        lastModified: new Date(tag._updatedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.4,
      })),
  ];
}
