import { useRef, useState } from 'react';
import Link from 'next/link';
import { Transition } from '@headlessui/react';
import useClickAway from 'lib/hooks/useClickAway';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  useClickAway(menuRef, setIsOpen);

  return (
    <header className='fixed top-0 left-0 z-20 w-full'>
      <div className='bg-gray-900 py-4'>
        <nav
          className='relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6'
          aria-label='Global'
        >
          <div className='flex items-center flex-1'>
            <div className='flex items-center justify-between w-full md:w-auto'>
              <Link href='/'>
                <a>
                  <span className='sr-only'>Zach Scroggins</span>
                  <img
                    className='h-8 w-auto sm:h-10'
                    src='https://tailwindui.com/img/logos/workflow-mark-teal-200-cyan-400.svg'
                    alt='Logo'
                  />
                </a>
              </Link>
              <div className='-mr-2 flex items-center md:hidden'>
                <button
                  type='button'
                  className='bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white'
                  aria-expanded={isOpen}
                  onClick={() => setIsOpen(true)}
                >
                  <span className='sr-only'>Open main menu</span>
                  {/* Heroicon name: outline/menu */}
                  <svg
                    className='h-6 w-6'
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
                </button>
              </div>
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
              <Link href='/blog'>
                <a className='text-base font-medium text-white hover:text-gray-300'>
                  Blog
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <Transition
        show={isOpen}
        enter='duration-150 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <div
          className='absolute top-0 inset-x-0 z-30 p-2 transition transform origin-top md:hidden'
          onClick={() => setIsOpen(false)}
          ref={menuRef}
        >
          <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
            <div className='px-5 pt-4 flex items-center justify-between'>
              <div>
                <Link href='/'>
                  <a>
                    <img
                      className='h-8 w-auto'
                      src='https://tailwindui.com/img/logos/workflow-mark-teal-500-cyan-600.svg'
                    />
                  </a>
                </Link>
              </div>
              <div className='-mr-2'>
                <button
                  type='button'
                  className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600'
                  onClick={() => setIsOpen(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  {/* Heroicon name: outline/x */}
                  <svg
                    className='h-6 w-6'
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
                  <a className='block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50'>
                    Portfolio
                  </a>
                </Link>
                <Link href='/#services'>
                  <a className='block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50'>
                    Services
                  </a>
                </Link>
                <Link href='/#about'>
                  <a className='block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50'>
                    About
                  </a>
                </Link>
                <Link href='/blog'>
                  <a className='block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50'>
                    Blog
                  </a>
                </Link>
              </div>
              <div className='mt-6 px-5'>
                <Link href='/#contact'>
                  <a className='block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700'>
                    Contact me
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
