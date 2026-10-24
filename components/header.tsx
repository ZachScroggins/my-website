import { AppSidebar } from '@/components/app-sidebar';
import Logo from '@/components/logo';
import SidebarToggle from '@/components/sidebar-toggle';
import { ThemeToggle } from '@/components/theme-toggle';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { GITHUB_URL, LINKEDIN_URL } from '@/lib/constants';
import Link from 'next/link';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Header({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-50 h-16 shrink-0 bg-gray-900">
          <div className="py-4">
            <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6">
              <div className="flex items-center">
                <div className="flex w-full items-center justify-between md:w-auto">
                  <Link href="/">
                    <span className="sr-only">Zach Scroggins</span>
                    <div>
                      <Logo className="h-10 w-10" />
                    </div>
                  </Link>
                </div>
                <div className="hidden space-x-8 md:ml-10 md:flex">
                  <Link
                    href="/#portfolio"
                    className="text-base font-semibold text-gray-300 hover:text-gray-100"
                  >
                    Portfolio
                  </Link>
                  <Link
                    href="/#about"
                    className="text-base font-semibold text-gray-300 hover:text-gray-100"
                  >
                    About
                  </Link>
                  <Link
                    href="/#contact"
                    className="text-base font-semibold text-gray-300 hover:text-gray-100"
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className="-mr-2 flex items-center space-x-3 md:mr-0">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener"
                  title="LinkedIn Profile"
                  className="p-2"
                >
                  <FiLinkedin className="h-6 w-6 rounded text-gray-400 hover:text-gray-100" />
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener"
                  title="GitHub Profile"
                  className="p-2"
                >
                  <FiGithub className="h-6 w-6 rounded text-gray-400 hover:text-gray-100" />
                </a>
                <div className="flex items-center justify-center rounded p-2">
                  <ThemeToggle />
                </div>
                <a
                  href="/Zach-Scroggins-Resume.pdf"
                  target="_blank"
                  rel="noopener"
                  className="bg-opacity-90 hover:bg-opacity-100 mr-0 hidden items-center justify-center rounded-sm bg-linear-to-r from-green-400 to-blue-500 p-px font-medium md:inline-flex"
                >
                  <span className="hover:bg-opacity-95 rounded-sm bg-gray-900 px-2 py-1">
                    <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                      Resume
                    </span>
                  </span>
                </a>
                <SidebarToggle />
              </div>
            </nav>
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
