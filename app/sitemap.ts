import { BASE_URL } from '@/lib/constants';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths = ['/'];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'daily' : 'monthly',
    priority: route === '/' ? 1.0 : 0.8,
  }));

  return staticEntries;
}
