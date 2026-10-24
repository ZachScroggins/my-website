import About from '@/components/home/about';
import Contact from '@/components/home/contact';
import Hero from '@/components/home/hero';
import Portfolio from '@/components/home/portfolio';
import { Repos } from '@/lib/types';

async function getRepos(): Promise<Repos> {
  'use server';
  const res = await fetch(
    'https://api.github.com/users/ZachScroggins/repos?type=owner&sort=created',
    {
      headers: {
        accept: 'application/vnd.github.v3+json',
        Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    }
  );
  return res.json();
}

export default async function Page() {
  const repos = await getRepos();

  return (
    <>
      <Hero />
      <Portfolio repos={repos} />
      <About />
      <Contact />
    </>
  );
}
