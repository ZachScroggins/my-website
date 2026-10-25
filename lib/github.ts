import type { Repo } from '@/lib/types';

export async function getRepos(): Promise<Repo[]> {
  const res = await fetch(
    'https://api.github.com/users/ZachScroggins/repos?type=owner&sort=created',
    {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error(`GitHub API request failed: ${res.status} ${res.statusText}`);
  }

  return res.json();
}
