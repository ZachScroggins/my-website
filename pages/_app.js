import { DefaultSeo } from 'next-seo';

import 'styles/globals.css';

import Header from 'components/Header';
import Footer from 'components/Footer';

import SEO from 'next-seo.config';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
