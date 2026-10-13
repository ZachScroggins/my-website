'use client';

import * as React from 'react';

import Logo from '@/components/logo';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { toggleSidebar } = useSidebar();

  return (
    <Sidebar {...props}>
      <SidebarHeader className="gap-0 py-0 pt-2">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            onClick={toggleSidebar}
            className="flex w-full items-center rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <Logo className="h-9 w-9" />
            <span className="ml-4 text-2xl font-extrabold text-gray-900 dark:text-gray-50">
              Zach Scroggins
            </span>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent className="gap-0 p-2 pt-0 font-semibold">
        <SidebarMenuItem className="rounded-lg">
          <SidebarMenuButton
            render={<Link href="/#portfolio" />}
            onClick={toggleSidebar}
            className="flex h-full w-full items-center rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-linear-to-r from-green-400 to-cyan-500 text-gray-50 dark:to-blue-500">
              <FiAward className="h-6! w-6!" />
            </div>
            <div className="ml-2 text-lg text-gray-900 dark:text-gray-50">Portfolio</div>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton
            render={<Link href="/#about" />}
            onClick={toggleSidebar}
            className="flex h-full w-full items-center rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary bg-linear-to-r from-green-400 to-cyan-500 text-gray-50 dark:to-blue-500">
              <FiInfo className="h-6! w-6!" />
            </div>
            <div className="ml-2 text-lg text-gray-900 dark:text-gray-50">About</div>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton
            render={<Link href="/#contact" />}
            onClick={toggleSidebar}
            className="flex h-full w-full items-center rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary bg-linear-to-r from-green-400 to-cyan-500 text-gray-50 dark:to-blue-500">
              <FiMail className="h-6! w-6!" />
            </div>
            <div className="ml-2 text-lg text-gray-900 dark:text-gray-50">Contact</div>
          </SidebarMenuButton>
        </SidebarMenuItem>
        {/* We create a collapsible SidebarGroup for each parent.
        {data.navMain.map((item) => (
          <Collapsible
            key={item.title}
            title={item.title}
            defaultOpen
            className="group/collapsible"
          >
            <SidebarGroup>
              <SidebarGroupLabel
                className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                render={<CollapsibleTrigger />}
              >
                {item.title}{' '}
                <ChevronRightIcon className="ml-auto transition-transform group-data-open/collapsible:rotate-90" />
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton isActive={item.isActive} render={<a href={item.url} />}>
                          {item.title}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))} */}
      </SidebarContent>
      <SidebarFooter className="shrink-0 border-t border-gray-700 px-5 py-6">
        <a
          href="/Zach-Scroggins-Resume.pdf"
          className="flex w-full items-center justify-center rounded-md bg-linear-to-r from-green-400 to-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm"
        >
          <FiDownload className="mr-2" />
          Download Resume
        </a>
        <span className="mt-6 flex justify-center space-x-8 text-center text-base font-medium text-gray-500">
          <ThemeToggle />
          {/* <ThemeToggle className="rounded text-gray-500 hover:text-gray-500 dark:text-gray-300" /> */}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener"
            title="GitHub Profile"
            className="rounded text-gray-400 hover:text-gray-500"
          >
            <FiGithub className="h-6 w-6" aria-hidden="true" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener"
            title="LinkedIn Profile"
            className="rounded text-gray-400 hover:text-gray-500"
          >
            <FiLinkedin className="h-6 w-6" aria-hidden="true" />
          </a>
          <a
            href={TWITTER_URL}
            target="_blank"
            rel="noopener"
            title="Twitter Profile"
            className="rounded text-gray-400 hover:text-gray-500"
          >
            <FiTwitter className="h-6 w-6" aria-hidden="true" />
          </a>
        </span>
      </SidebarFooter>
    </Sidebar>
  );
}
