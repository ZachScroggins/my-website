import { postKindLabel } from '@/lib/blog';
import { ogImage, ogSize } from '@/lib/og';
import { cachedSanityMetadata } from '@/sanity/live';
import { POST_QUERY } from '@/sanity/queries';

export const alt = 'Blog post by Zach Scroggins';
export const size = ogSize;
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data: post } = await cachedSanityMetadata({
    query: POST_QUERY,
    params: { slug },
    perspective: 'published',
  });
  return ogImage({
    eyebrow: post ? postKindLabel(post.kind) : 'Blog',
    title: post?.title ?? 'Zach Scroggins',
  });
}
