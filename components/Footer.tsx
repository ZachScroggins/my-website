import {
  FACEBOOK_URL,
  GITHUB_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  TWITTER_URL,
} from 'lib/socialLinks';
import Link from 'next/link';
import React from 'react';
import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className='bg-gray-900'>
      <div className='flex justify-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <span className='w-full h-full pb-6 dark:border-t dark:border-gray-700'></span>
      </div>
      <div className='px-4 pb-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8'>
        <nav
          className='flex flex-wrap justify-center -mx-5 -my-2'
          aria-label='Footer'
        >
          <div className='px-5 py-2'>
            <Link href='/'>
              <a className='text-base text-gray-400 hover:text-gray-100'>
                Home
              </a>
            </Link>
          </div>
          <div className='px-5 py-2'>
            <Link href='/#portfolio'>
              <a className='text-base text-gray-400 hover:text-gray-100'>
                Portfolio
              </a>
            </Link>
          </div>
          <div className='px-5 py-2'>
            <Link href='/#about'>
              <a className='text-base text-gray-400 hover:text-gray-100'>
                About
              </a>
            </Link>
          </div>
          <div className='px-5 py-2'>
            <Link href='/blog'>
              <a className='text-base text-gray-400 hover:text-gray-100'>
                Blog
              </a>
            </Link>
          </div>
          <div className='px-5 py-2'>
            <Link href='/#contact'>
              <a className='text-base text-gray-400 hover:text-gray-100'>
                Contact
              </a>
            </Link>
          </div>
        </nav>
        <div className='flex justify-center mt-8 space-x-6'>
          <a
            href={GITHUB_URL}
            target='_blank'
            rel='noopener'
            title='GitHub Profile'
            className='text-gray-400 hover:text-gray-100'
          >
            <span className='sr-only'>GitHub</span>
            <FiGithub className='text-xl' />
          </a>
          <a
            href={LINKEDIN_URL}
            target='_blank'
            rel='noopener'
            title='LinkedIn Profile'
            className='text-gray-400 hover:text-gray-100'
          >
            <span className='sr-only'>LinkedIn</span>
            <FiLinkedin className='text-xl' />
          </a>
          <a
            href={TWITTER_URL}
            target='_blank'
            rel='noopener'
            title='Twitter Profile'
            className='text-gray-400 hover:text-gray-100'
          >
            <span className='sr-only'>Twitter</span>
            <FiTwitter className='text-xl' />
          </a>
          <a
            href={FACEBOOK_URL}
            target='_blank'
            rel='noopener'
            title='Facebook Profile'
            className='text-gray-400 hover:text-gray-100'
          >
            <span className='sr-only'>Facebook</span>
            <FiFacebook className='text-xl' />
          </a>
          <a
            href={INSTAGRAM_URL}
            target='_blank'
            rel='noopener'
            title='Instagram Profile'
            className='text-gray-400 hover:text-gray-100'
          >
            <span className='sr-only'>Instagram</span>
            <FiInstagram className='text-xl' />
          </a>
        </div>
        <Link href='/'>
          <a className='block mt-8 text-base text-center text-gray-400 hover:text-gray-100'>
            © {new Date().getFullYear()} Zach Scroggins
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
