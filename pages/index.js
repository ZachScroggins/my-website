import { NextSeo } from 'next-seo';
import Hero from 'components/home/Hero';
import Portfolio from 'components/home/Portfolio';
import Services from 'components/home/Services';
import About from 'components/home/About';
import Contact from 'components/home/Contact';

export default function Home({ repos }) {
  return (
    <>
      <NextSeo
        title='Zach Scroggins | Freelance Full Stack Developer'
        description='I love building websites and web apps with cutting edge technologies. I specialize in JavaScript and have the most experience working with React and Node. I really enjoy the JAMstack, but I am also familiar with the LAMP stack, Python, Java, C#, and C++.'
      />
      <div className='bg-white'>
        <div className='relative overflow-hidden'>
          <main className='pt-16'>
            <Hero />
            {repos ? <Portfolio repos={repos} /> : <></>}
            <Services />
            <About />
            <Contact />
          </main>
        </div>
      </div>
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
