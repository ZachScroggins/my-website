import { useRef, useState } from 'react';
import Link from 'next/link';
import { Transition } from '@headlessui/react';
import useClickAway from 'lib/hooks/useClickAway';
import Logo from 'components/Logo';
import ThemeChanger from 'components/ThemeChanger';
import MobileMenu from 'components/MobileMenu';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { GITHUB_URL, LINKEDIN_URL } from 'lib/socialLinks';
import { classNames } from 'lib/classNames';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  useClickAway(menuRef, setIsOpen);

  return (
    <header className='fixed top-0 left-0 right-0 z-20 w-full'>
      <div className='py-4 bg-gray-900'>
        <nav
          className='relative flex items-center justify-between w-full px-4 mx-auto max-w-7xl sm:px-6'
          aria-label='Global'
        >
          <div className='flex items-center'>
            <div className='flex items-center justify-between w-full md:w-auto'>
              <Link href='/'>
                <a>
                  <span className='sr-only'>Zach Scroggins</span>
                  <div>
                    <Logo className='w-10 h-10' />
                  </div>
                </a>
              </Link>
            </div>
            <div className='hidden space-x-8 md:flex md:ml-10'>
              <Link href='/#portfolio'>
                <a className='text-base font-medium text-white hover:text-gray-300'>
                  Portfolio
                </a>
              </Link>
              <Link href='/#about'>
                <a className='text-base font-medium text-white hover:text-gray-300'>
                  About
                </a>
              </Link>
              <Link href='/#contact'>
                <a className='text-base font-medium text-white hover:text-gray-300'>
                  Contact
                </a>
              </Link>
            </div>
          </div>
          <div className='flex items-center -mr-2 space-x-3'>
            <Link href={LINKEDIN_URL}>
              <a
                target='_blank'
                rel='noopener'
                title='LinkedIn Profile'
                className='p-2'
              >
                <FiLinkedin className='w-6 h-6 text-gray-400 rounded hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-100' />
              </a>
            </Link>
            <Link href={GITHUB_URL}>
              <a
                target='_blank'
                rel='noopener'
                title='GitHub Profile'
                className='p-2'
              >
                <FiGithub className='w-6 h-6 text-gray-400 rounded hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-100' />
              </a>
            </Link>
            <ThemeChanger className='p-2 text-gray-400 rounded hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-100' />
            <button
              type='button'
              className='inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white'
              aria-expanded={isOpen}
              onClick={() => setIsOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className={classNames('w-6 h-6', isOpen ? 'hidden' : 'block')}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              <svg
                className={classNames('w-6 h-6', isOpen ? 'block' : 'hidden')}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
      <MobileMenu show={isOpen} toggle={setIsOpen} />
    </header>
  );
};

export default Header;
