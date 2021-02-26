import Header from 'components/Header';
import Hero from 'components/home/Hero';
import Portfolio from 'components/home/Portfolio';
import Services from 'components/home/Services';
import About from 'components/home/About';
import Contact from 'components/home/Contact';
import Footer from 'components/Footer';

export default function Home({ repos }) {
  return (
    <>
      <div className='bg-white'>
        <div className='relative overflow-hidden'>
          <Header />
          <main className='pt-16'>
            <Hero />
            {repos ? <Portfolio repos={repos} /> : <></>}
            <Services />
            <About />
            <Contact />
          </main>
          <Footer />
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
