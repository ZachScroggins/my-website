import About from '@/components/home/about';
import Contact from '@/components/home/contact';
import Hero from '@/components/home/hero';
import LumerisJobs, { LumerisJobsSkeleton } from '@/components/home/lumeris-jobs';
import Portfolio from '@/components/home/portfolio';
import { getRepos } from '@/lib/github';
import { SanityBoundary } from '@/sanity/boundary';

export default async function Page() {
  const repos = await getRepos();

  return (
    <>
      <Hero />
      <Portfolio
        repos={repos}
        jobs={
          <SanityBoundary fallback={<LumerisJobsSkeleton />}>
            {(options) => <LumerisJobs {...options} />}
          </SanityBoundary>
        }
      />
      <About />
      <Contact />
    </>
  );
}
