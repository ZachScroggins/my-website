import 'server-only';

import { type QueryParams } from 'next-sanity';
import {
  defineLive,
  resolvePerspectiveFromCookies,
  type LivePerspective,
  type StrictDefinedFetchType,
} from 'next-sanity/live';
import { cookies, draftMode } from 'next/headers';
import { client } from './client';

// Viewer-role token. The dataset is public, so published content builds and renders without it;
// it is only needed for draft content (Presentation Tool and draft mode).
const token = process.env.SANITY_API_READ_TOKEN;
if (!token && process.env.NODE_ENV === 'production') {
  console.warn(
    'SANITY_API_READ_TOKEN is not set: published content only; draft preview is disabled.'
  );
}

export const { SanityLive, sanityFetch } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
  strict: true,
});

// The app's one shared 'use cache' boundary. `sanityFetch` calls `cacheTag`/`cacheLife`
// internally but doesn't create the boundary; this wrapper provides it once.
export const cachedSanity: StrictDefinedFetchType = async (options) => {
  'use cache';
  return sanityFetch(options);
};

export interface DynamicFetchOptions {
  perspective: LivePerspective;
  stega: boolean;
}

export async function getDynamicFetchOptions(): Promise<DynamicFetchOptions> {
  const { isEnabled: isDraftMode } = await draftMode();
  if (!isDraftMode) {
    return { perspective: 'published', stega: false };
  }

  const jar = await cookies();
  const perspective = await resolvePerspectiveFromCookies({ cookies: jar });
  return { perspective: perspective ?? 'drafts', stega: true };
}

// For usage within `generateStaticParams` only.
export async function cachedSanityStaticParams<const QueryString extends string>({
  query,
  params = {},
}: {
  query: QueryString;
  params?: QueryParams;
}) {
  const { data } = await cachedSanity({ query, params, perspective: 'published', stega: false });
  return { data };
}

// For usage within `generateMetadata`, sitemap, RSS and OG images.
export async function cachedSanityMetadata<const QueryString extends string>({
  query,
  params = {},
  perspective,
}: {
  query: QueryString;
  params?: QueryParams;
  perspective: LivePerspective;
}) {
  const { data } = await cachedSanity({ query, params, perspective, stega: false });
  return { data };
}
