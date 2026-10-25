'use client';

import type { ComponentProps } from 'react';

import Logo from '@/components/logo';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from '@/lib/constants';
import Link from 'next/link';
import {
  FiAward,
  FiDownload,
  FiGithub,
  FiInfo,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from 'react-icons/fi';
import { ThemeToggle } from './theme-toggle';

const navLinks = [
  { href: '/#portfolio', label: 'Portfolio', Icon: FiAward },
  { href: '/#about', label: 'About', Icon: FiInfo },
  { href: '/#contact', label: 'Contact', Icon: FiMail },
];

const socialLinks = [
  { href: GITHUB_URL, label: 'GitHub', Icon: FiGithub },
  { href: LINKEDIN_URL, label: 'LinkedIn', Icon: FiLinkedin },
  { href: TWITTER_URL, label: 'Twitter', Icon: FiTwitter },
];

export function AppSidebar(props: ComponentProps<typeof Sidebar>) {
  const { toggleSidebar } = useSidebar();

  return (
    <Sidebar {...props}>
      <SidebarHeader className="pt-2 pb-0">
        <Link
          href="/"
          onClick={toggleSidebar}
          className="flex items-center gap-4 rounded-lg p-3 hover:bg-sidebar-accent"
        >
          <Logo className="size-9" />
          <span className="text-2xl font-extrabold text-sidebar-foreground">Zach Scroggins</span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="p-2 pt-0 font-semibold">
        <SidebarMenu>
          {navLinks.map(({ href, label, Icon }) => (
            <SidebarMenuItem key={href}>
              <SidebarMenuButton
                render={<Link href={href} />}
                onClick={toggleSidebar}
                className="h-full gap-4 rounded-lg p-3"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-linear-to-r from-green-400 to-cyan-500 text-gray-50 dark:to-blue-500">
                  <Icon className="size-6!" aria-hidden="true" />
                </span>
                <span className="text-lg">{label}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="shrink-0 border-t border-gray-700 px-5 py-6">
        <a
          href="/Zach-Scroggins-Resume.pdf"
          className="flex items-center justify-center gap-2 rounded-md bg-linear-to-r from-green-400 to-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm"
        >
          <FiDownload aria-hidden="true" />
          Download Resume
        </a>
        <div className="mt-6 flex justify-center gap-8">
          <ThemeToggle />
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener"
              className="rounded text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{label}</span>
              <Icon className="size-6" aria-hidden="true" />
            </a>
          ))}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
