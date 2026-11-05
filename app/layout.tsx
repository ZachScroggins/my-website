import DisableDraftMode from '@/components/disable-draft-mode';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toast';
import { TooltipProvider } from '@/components/ui/tooltip';
import { BASE_URL, SITE_DESCRIPTION, SITE_TITLE } from '@/lib/constants';
import { SanityLive } from '@/sanity/live';
import type { Metadata, Viewport } from 'next';
import { VisualEditing } from 'next-sanity/visual-editing';
import { Geist, Geist_Mono } from 'next/font/google';
import { draftMode } from 'next/headers';
import './globals.css';

export const viewport: Viewport = { themeColor: '#111827' };
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: 'index, follow' },
  twitter: { creator: '@scroggins_zach', card: 'summary' },
  openGraph: {
    type: 'website',
    url: '/',
    title: SITE_TITLE,
    siteName: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}
    >
      <body>
        <ThemeProvider>
          <TooltipProvider>
            <Header>{children}</Header>
            <Footer />
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
        <SanityLive includeDrafts={isDraftMode} />
        {isDraftMode && (
          <>
            <VisualEditing />
            <DisableDraftMode />
          </>
        )}
      </body>
    </html>
  );
}
