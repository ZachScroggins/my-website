import type { Repo } from '@/lib/types';
import { cacheLife } from 'next/cache';

export async function getRepos(): Promise<Repo[]> {
  'use cache';
  cacheLife({ stale: 3600, revalidate: 3600, expire: 86400 });

  const res = await fetch(
    'https://api.github.com/users/ZachScroggins/repos?type=owner&sort=created',
    {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error(`GitHub API request failed: ${res.status} ${res.statusText}`);
  }

  return res.json();
}
