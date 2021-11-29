import { NextSeo } from 'next-seo';
import Hero from 'components/home/Hero';
import Portfolio from 'components/home/Portfolio';
import About from 'components/home/About';
import Contact from 'components/home/Contact';

export default function Home({ repos }) {
  return (
    <>
      <NextSeo
        title='Zach Scroggins | Full Stack JavaScript TypeScript Developer'
        description="I'm a web developer with a passion for creating exceptional, one-of-a-kind user experiences, leveraging cutting-edge technologies for better performance, higher security, and superior scalability."
        canonical='https://zachscroggins.com/'
      />
      <main className='relative pt-16 overflow-hidden bg-gray-100 dark:bg-gray-900'>
        <Hero />
        {repos ? <Portfolio repos={repos} /> : null}
        <About />
        <Contact />
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  let repos = null;

  try {
    const res = await fetch(
      'https://api.github.com/users/ZachScroggins/repos?type=owner&sort=created',
      {
        headers: {
          accept: 'application/vnd.github.v3+json',
          Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
        },
      }
    );
    repos = await res.json();
    if (!res.ok) {
      throw new Error(repos?.message);
    }
  } catch (e) {
    repos = null;
    console.log('Error: ', e.message);
  }

  return {
    props: {
      repos,
    },
    revalidate: 1,
  };
}
