import { revalidateTag } from 'next/cache';
import { timingSafeEqual } from 'node:crypto';

/**
 * Called by the `invalidate-tags` Sanity Function (my-website-cms/functions/invalidate-tags) once
 * published content changes. It sends the Live Content API sync tags that went stale; `sanityFetch`
 * tags cached data as `sanity:<syncTag>`, so those entries expire here. Once the function reports
 * back, `<SanityLive waitFor="function">` refreshes open pages, which then get the new content.
 *
 * Auth: `Authorization: Bearer <SANITY_REVALIDATE_SECRET>`, the same secret stored on the function.
 */
export async function POST(request: Request) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return Response.json({ error: 'SANITY_REVALIDATE_SECRET is not set' }, { status: 500 });
  }
  if (!isAuthorized(request.headers.get('authorization'), secret)) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body: unknown = await request.json().catch(() => null);
  const tags = (body as { tags?: unknown } | null)?.tags;
  if (!Array.isArray(tags) || !tags.length || !tags.every(isSyncTag)) {
    return Response.json({ error: 'Expected { tags: string[] } of sync tags' }, { status: 400 });
  }

  // expire: 0, not 'max': the refresh that follows must render fresh content, not stale.
  for (const tag of tags) revalidateTag(`sanity:${tag}`, { expire: 0 });
  return Response.json({ revalidated: tags.length });
}

function isAuthorized(header: string | null, secret: string) {
  const expected = Buffer.from(`Bearer ${secret}`);
  const actual = Buffer.from(header ?? '');
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

// Sync tags look like `s1:6bYRWQ`.
function isSyncTag(tag: unknown): tag is string {
  return typeof tag === 'string' && /^s\d+:[\w-]+$/.test(tag) && tag.length <= 240;
}
