import About from '@/components/home/about';
import Contact from '@/components/home/contact';
import Hero from '@/components/home/hero';
import Portfolio from '@/components/home/portfolio';
import { getRepos } from '@/lib/github';

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
