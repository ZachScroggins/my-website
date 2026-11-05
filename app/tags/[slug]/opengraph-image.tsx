import { ogImage, ogSize } from '@/lib/og';
import { cachedSanityMetadata } from '@/sanity/live';
import { TAG_QUERY } from '@/sanity/queries';

export const alt = 'Tag page on zachscroggins.com';
export const size = ogSize;
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data: tag } = await cachedSanityMetadata({
    query: TAG_QUERY,
    params: { slug },
    perspective: 'published',
  });
  return ogImage({ eyebrow: 'Tag', title: tag?.name ?? 'Tags' });
}
