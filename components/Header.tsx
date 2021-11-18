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
              <Link href='/#services'>
                <a className='text-base font-medium text-white hover:text-gray-300'>
                  Services
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
              {/* <Link href='/blog'>
                <a className='text-base font-medium text-white hover:text-gray-300'>
                  Blog
                </a>
              </Link> */}
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
              {/* Heroicon name: outline/menu */}
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
      {/* <Transition
        show={isOpen}
        enter='duration-150 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <div
          className='absolute inset-x-0 top-0 z-30 p-2 transition origin-top transform md:hidden'
          onClick={() => setIsOpen(false)}
          ref={menuRef}
        >
          <div className='overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5'>
            <div className='flex items-center justify-between px-5 pt-4'>
              <div>
                <Link href='/'>
                  <a>
                    <Logo className='w-10 h-10' />
                  </a>
                </Link>
              </div>
              <div className='-mr-2'>
                <button
                  type='button'
                  className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600'
                  onClick={() => setIsOpen(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  <svg
                    className='w-6 h-6'
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
            </div>
            <div className='pt-5 pb-6'>
              <div className='px-2 space-y-1'>
                <Link href='/#portfolio'>
                  <a className='block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50'>
                    Portfolio
                  </a>
                </Link>
                <Link href='/#services'>
                  <a className='block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50'>
                    Services
                  </a>
                </Link>
                <Link href='/#about'>
                  <a className='block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50'>
                    About
                  </a>
                </Link>
              </div>
              <div className='px-5 mt-6'>
                <Link href='/#contact'>
                  <a className='block w-full px-4 py-3 font-medium text-center text-white rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700'>
                    Contact me
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Transition> */}
      <MobileMenu show={isOpen} toggle={setIsOpen} />
    </header>
  );
};

export default Header;
