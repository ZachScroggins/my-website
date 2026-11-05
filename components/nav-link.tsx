'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Suspense, type ComponentProps } from 'react';

type NavLinkProps = ComponentProps<typeof Link> & {
  href: string;
  /** Classes added while the current page is `href` or below it (e.g. `/blog/my-post` for `/blog`). */
  activeClassName?: string;
};

/**
 * A `next/link` that marks itself active for its section. `usePathname` is a client hook, and with
 * Cache Components it suspends while prerendering a route whose params aren't known at build time
 * (an unknown blog slug), so the inactive link is the Suspense fallback.
 */
export function NavLink({ activeClassName, ...props }: NavLinkProps) {
  return (
    <Suspense fallback={<Link {...props} />}>
      <ActiveNavLink activeClassName={activeClassName} {...props} />
    </Suspense>
  );
}

function ActiveNavLink({ href, className, activeClassName, ...props }: NavLinkProps) {
  const pathname = usePathname();
  // Hash links like `/#about` never match: the pathname has no hash.
  const isCurrent = pathname === href;
  const isActive = isCurrent || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={isCurrent ? 'page' : isActive ? 'true' : undefined}
      className={cn(className, isActive && activeClassName)}
      {...props}
    />
  );
}
