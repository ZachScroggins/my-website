import { DefaultSeo } from 'next-seo';

import 'styles/globals.css';

import Header from 'components/Header';
import Footer from 'components/Footer';

import SEO from 'next-seo.config';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider attribute='class'>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
