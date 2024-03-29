import Document, { Html, Head, Main, NextScript } from 'next/document';
import PreloadFonts from 'components/PreloadFonts';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <PreloadFonts />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png?v=2'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png?v=2'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png?v=2'
          />
          <link
            rel='mask-icon'
            href='/safari-pinned-tab.svg?v=2'
            color='#111827'
          />
          <link rel='shortcut icon' href='/favicon.ico?v=2' />
          <meta name='msapplication-TileColor' content='#111827' />
          <meta name='theme-color' content='#111827' />
          <link rel='manifest' href='/site.webmanifest?v=2' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
