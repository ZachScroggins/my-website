'use client';

import { useIsPresentationTool } from 'next-sanity/hooks';

/** Shown in draft mode outside the Studio's Presentation Tool, so a stray preview can be closed. */
export default function DisableDraftMode() {
  const isPresentationTool = useIsPresentationTool();
  if (isPresentationTool !== false) return null;

  return (
    <a
      href="/api/draft-mode/disable"
      className="fixed right-4 bottom-4 z-50 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-lg ring-1 ring-white/10 hover:bg-gray-800"
    >
      Disable draft mode
    </a>
  );
}
