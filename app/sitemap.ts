import { BASE_URL } from '@/lib/constants';
import type { MetadataRoute } from 'next';
import { cacheLife } from 'next/cache';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  'use cache';
  cacheLife('days');

  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];
}
