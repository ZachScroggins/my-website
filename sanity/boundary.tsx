import { draftMode } from 'next/headers';
import { Suspense, type ReactNode } from 'react';
import { getDynamicFetchOptions, type DynamicFetchOptions } from './live';

type Render = (options: DynamicFetchOptions) => ReactNode;

/**
 * The draft-mode branch of the three-layer pattern (see the sanity-live-cache-components skill),
 * written once for routes without params. Outside draft mode the children render with published
 * content and no Suspense, so the route stays in the static shell. In draft mode the preview
 * perspective is resolved inside a Suspense boundary.
 *
 * Children must fetch through `cachedSanity` with the `perspective` and `stega` they receive.
 * Dynamic `[slug]` routes use a sibling `loading.tsx` instead (see app/blog/[slug]).
 */
export async function SanityBoundary({
  fallback,
  children,
}: {
  fallback: ReactNode;
  children: Render;
}) {
  const { isEnabled: isDraftMode } = await draftMode();
  if (!isDraftMode) {
    return children({ perspective: 'published', stega: false });
  }
  return (
    <Suspense fallback={fallback}>
      <DynamicBoundary>{children}</DynamicBoundary>
    </Suspense>
  );
}

async function DynamicBoundary({ children }: { children: Render }) {
  return children(await getDynamicFetchOptions());
}
