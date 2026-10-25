import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/links';
import { cacheLife } from 'next/cache';
import Link from 'next/link';

async function getYear() {
  'use cache';
  cacheLife('days');
  return new Date().getFullYear();
}

const footerNavLinks = [{ href: '/', label: 'Home' }, ...NAV_LINKS];

export default async function Footer() {
  const year = await getYear();

  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="pt-6 dark:border-t">
          <nav aria-label="Footer">
            <ul className="-my-2 flex flex-wrap justify-center">
              {footerNavLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block px-5 py-2 text-base text-gray-400 hover:text-gray-100"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="mt-8 flex justify-center gap-6">
            {Object.values(SOCIAL_LINKS).map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener"
                  className="block text-gray-400 hover:text-gray-100"
                >
                  <span className="sr-only">{label}</span>
                  <Icon className="text-xl" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <Link
            href="/"
            className="mt-8 block text-center text-base text-gray-400 hover:text-gray-100"
          >
            © {year} Zach Scroggins
          </Link>
        </div>
      </div>
    </footer>
  );
}
