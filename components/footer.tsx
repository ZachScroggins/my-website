import {
  FACEBOOK_URL,
  GITHUB_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  TWITTER_URL,
} from '@/lib/constants';
import Link from 'next/link';
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#portfolio', label: 'Portfolio' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
];

const socialLinks = [
  { href: GITHUB_URL, label: 'GitHub', Icon: FiGithub },
  { href: LINKEDIN_URL, label: 'LinkedIn', Icon: FiLinkedin },
  { href: TWITTER_URL, label: 'Twitter', Icon: FiTwitter },
  { href: FACEBOOK_URL, label: 'Facebook', Icon: FiFacebook },
  { href: INSTAGRAM_URL, label: 'Instagram', Icon: FiInstagram },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="pt-6 dark:border-t">
          <nav aria-label="Footer">
            <ul className="-my-2 flex flex-wrap justify-center">
              {navLinks.map(({ href, label }) => (
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
            {socialLinks.map(({ href, label, Icon }) => (
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
            © {new Date().getFullYear()} Zach Scroggins
          </Link>
        </div>
      </div>
    </footer>
  );
}
