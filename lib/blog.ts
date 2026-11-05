import { stegaClean } from 'next-sanity';

export function postKindLabel(kind: string | null | undefined) {
  return stegaClean(kind) === 'portfolio-article' ? 'Portfolio article' : 'Post';
}

export function formatDate(iso: string) {
  return new Date(stegaClean(iso)).toLocaleDateString('en-US', {
    dateStyle: 'long',
    timeZone: 'America/Chicago',
  });
}

export const gradientHeading =
  'bg-linear-to-r from-green-400 to-blue-500 bg-clip-text font-extrabold tracking-tight text-transparent';
