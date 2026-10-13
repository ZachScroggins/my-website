import {
  FACEBOOK_URL,
  GITHUB_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  TWITTER_URL,
} from '@/lib/constants';
import Link from 'next/link';
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto flex max-w-7xl justify-center px-4 sm:px-6 lg:px-8">
        <span className="h-full w-full pb-6 dark:border-t dark:border-gray-700"></span>
      </div>
      <div className="mx-auto max-w-7xl overflow-hidden px-4 pb-12 sm:px-6 lg:px-8">
        <nav className="-my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div className="px-5 py-2">
            <Link href="/" className="text-base text-gray-400 hover:text-gray-100">
              Home
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/#portfolio" className="text-base text-gray-400 hover:text-gray-100">
              Portfolio
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/#about" className="text-base text-gray-400 hover:text-gray-100">
              About
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/#contact" className="text-base text-gray-400 hover:text-gray-100">
              Contact
            </Link>
          </div>
          {/* <div className='px-5 py-2'>
              <Link href='/blog'>
                <a className='text-base text-gray-500 hover:text-gray-900'>
                  Blog
                </a>
              </Link>
            </div> */}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener"
            title="GitHub Profile"
            className="text-gray-400 hover:text-gray-100"
          >
            <span className="sr-only">GitHub</span>
            <FiGithub className="text-xl" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener"
            title="LinkedIn Profile"
            className="text-gray-400 hover:text-gray-100"
          >
            <span className="sr-only">LinkedIn</span>
            <FiLinkedin className="text-xl" />
          </a>
          <a
            href={TWITTER_URL}
            target="_blank"
            rel="noopener"
            title="Twitter Profile"
            className="text-gray-400 hover:text-gray-100"
          >
            <span className="sr-only">Twitter</span>
            <FiTwitter className="text-xl" />
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener"
            title="Facebook Profile"
            className="text-gray-400 hover:text-gray-100"
          >
            <span className="sr-only">Facebook</span>
            <FiFacebook className="text-xl" />
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener"
            title="Instagram Profile"
            className="text-gray-400 hover:text-gray-100"
          >
            <span className="sr-only">Instagram</span>
            <FiInstagram className="text-xl" />
          </a>
        </div>
        <Link
          href="/"
          className="mt-8 block text-center text-base text-gray-400 hover:text-gray-100"
        >
          © {new Date().getFullYear()} Zach Scroggins
        </Link>
      </div>
    </footer>
  );
}
