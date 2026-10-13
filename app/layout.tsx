import { Geist_Mono, Nunito } from 'next/font/google';

import Footer from '@/components/footer';
import Header from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toast';
import { TooltipProvider } from '@/components/ui/tooltip';
import { BASE_URL } from '@/lib/constants';
import { cn } from '@/lib/utils';
import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = { themeColor: '#111827' };

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Zach Scroggins | Full Stack TypeScript Developer',
  description:
    "I'm a web developer with a passion for creating exceptional, one-of-a-kind user experiences, leveraging cutting-edge technologies for better performance, higher security, and superior scalability.",
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: 'index, follow' },
  twitter: { creator: '@scroggins_zach', card: 'summary' },
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: '/',
    title: 'Zach Scroggins | Full Stack TypeScript Developer',
    siteName: 'Zach Scroggins | Full Stack TypeScript Developer',
    description:
      "I'm a web developer with a passion for creating exceptional, one-of-a-kind user experiences, leveraging cutting-edge technologies for better performance, higher security, and superior scalability.",
  },
};

const nunito = Nunito({ subsets: ['latin'], variable: '--font-sans' });

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

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
