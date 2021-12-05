import { ThemeProvider } from 'next-themes'

import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'

import Layout from 'components/Layout'

import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider attribute='class' enableColorScheme={false}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
