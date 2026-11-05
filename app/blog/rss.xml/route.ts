import { BASE_URL } from '@/lib/constants';
import { cachedSanityMetadata } from '@/sanity/live';
import { RSS_QUERY } from '@/sanity/queries';

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

async function getFeed() {
  'use cache';
  const { data: posts } = await cachedSanityMetadata({
    query: RSS_QUERY,
    perspective: 'published',
  });

  const items = posts
    .filter((post) => post.slug && post.title)
    .map((post) => {
      const url = `${BASE_URL}/blog/${post.slug}`;
      return `    <item>
      <title>${escape(post.title!)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      ${post.publishedAt ? `<pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>` : ''}
      ${post.description ? `<description>${escape(post.description)}</description>` : ''}
    </item>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Zach Scroggins | Blog</title>
    <link>${BASE_URL}/blog</link>
    <description>Posts, and articles about the work in Zach Scroggins' portfolio.</description>
    <language>en-us</language>
    <atom:link href="${BASE_URL}/blog/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;
}

export async function GET() {
  return new Response(await getFeed(), {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
