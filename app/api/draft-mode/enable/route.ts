import { client } from '@/sanity/client';
import { defineEnableDraftMode } from 'next-sanity/draft-mode';

// Called by the Studio's Presentation Tool. It checks the preview secret, then turns on draft mode.
export const { GET } = defineEnableDraftMode({
  client: client.withConfig({ token: process.env.SANITY_API_READ_TOKEN }),
});
