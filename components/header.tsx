import { AppSidebar } from '@/components/app-sidebar';
import Logo from '@/components/logo';
import SidebarToggle from '@/components/sidebar-toggle';
import { ThemeToggle } from '@/components/theme-toggle';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { GITHUB_URL, LINKEDIN_URL } from '@/lib/constants';
import Link from 'next/link';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const navLinks = [
  { href: '/#portfolio', label: 'Portfolio' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
];

const socialLinks = [
  { href: LINKEDIN_URL, label: 'LinkedIn', Icon: FiLinkedin },
  { href: GITHUB_URL, label: 'GitHub', Icon: FiGithub },
];

export default function Header({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <SidebarInset className="bg-muted dark:bg-background">
        <header className="sticky top-0 z-50 h-16 shrink-0 bg-gray-900 py-4">
          <nav
            aria-label="Main"
            className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6"
          >
            <div className="flex items-center">
              <Link href="/">
                <span className="sr-only">Zach Scroggins</span>
                <Logo className="size-10" />
              </Link>
              <ul className="hidden gap-8 md:ml-10 md:flex">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-base font-semibold text-gray-300 hover:text-gray-100"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mr-2 flex items-center gap-3 md:mr-0">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener"
                  className="p-2 text-gray-400 hover:text-gray-100"
                >
                  <span className="sr-only">{label}</span>
                  <Icon className="size-6" aria-hidden="true" />
                </a>
              ))}
              <div className="p-2">
                <ThemeToggle />
              </div>
              <a
                href="/Zach-Scroggins-Resume.pdf"
                target="_blank"
                rel="noopener"
                className="hidden rounded-sm bg-linear-to-r from-green-400 to-blue-500 p-px font-medium md:block"
              >
                <span className="block rounded-sm bg-gray-900 px-2 py-1">
                  <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    Resume
                  </span>
                </span>
              </a>
              <SidebarToggle />
            </div>
          </nav>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
