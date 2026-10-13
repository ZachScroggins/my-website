import Footer from '@/components/footer';
import Header from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toast';
import { TooltipProvider } from '@/components/ui/tooltip';
import { BASE_URL, SITE_DESCRIPTION, SITE_TITLE } from '@/lib/constants';
import { cn } from '@/lib/utils';
import type { Metadata, Viewport } from 'next';
import { Geist_Mono, Nunito } from 'next/font/google';
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
    locale: 'en_IE',
    url: '/',
    title: SITE_TITLE,
    siteName: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

const nunito = Nunito({ subsets: ['latin'], variable: '--font-sans' });
const fontMono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn('antialiased', fontMono.variable, 'font-sans', nunito.variable)}
    >
      <body>
        <ThemeProvider>
          <TooltipProvider>
            <Header>{children}</Header>
            <Footer />
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
