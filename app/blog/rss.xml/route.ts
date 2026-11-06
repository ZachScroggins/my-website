import { BASE_URL } from '@/lib/constants';
import { urlFor } from '@/sanity/image';
import { cachedSanityMetadata } from '@/sanity/live';
import { RSS_QUERY } from '@/sanity/queries';
import { toHTML, type PortableTextHtmlComponents } from '@portabletext/to-html';
import type { PortableTextBlock } from 'next-sanity';

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

type ImageValue = { asset?: { _ref: string }; alt?: string; caption?: string };
type CodeValue = { code?: string; filename?: string };

// Feed readers get plain HTML, so code blocks are unhighlighted <pre><code>.
const htmlComponents: Partial<PortableTextHtmlComponents> = {
  types: {
    code: ({ value }: { value: CodeValue }) =>
      value.code ? `<pre><code>${escape(value.code)}</code></pre>` : '',
    image: ({ value }: { value: ImageValue }) => {
      if (!value.asset) return '';
      const img = `<img src="${escape(urlFor(value).width(1200).fit('max').url())}" alt="${escape(value.alt ?? '')}" />`;
      return value.caption
        ? `<figure>${img}<figcaption>${escape(value.caption)}</figcaption></figure>`
        : img;
    },
  },
};

// CDATA can't contain "]]>", so split it across two sections.
const cdata = (s: string) => `<![CDATA[${s.replaceAll(']]>', ']]]]><![CDATA[>')}]]>`;

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
      const content = post.body
        ? toHTML(post.body as PortableTextBlock[], { components: htmlComponents })
        : '';
      return `    <item>
      <title>${escape(post.title!)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      ${post.publishedAt ? `<pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>` : ''}
      ${post.description ? `<description>${escape(post.description)}</description>` : ''}
      ${content ? `<content:encoded>${cdata(content)}</content:encoded>` : ''}
    </item>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
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
