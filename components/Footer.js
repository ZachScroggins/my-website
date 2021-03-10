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
    <>
      <footer className='bg-white'>
        <div className='px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8'>
          <nav
            className='flex flex-wrap justify-center -mx-5 -my-2'
            aria-label='Footer'
          >
            <div className='px-5 py-2'>
              <Link href='/'>
                <a className='text-base text-gray-500 hover:text-gray-900'>
                  Home
                </a>
              </Link>
            </div>
            <div className='px-5 py-2'>
              <Link href='/#portfolio'>
                <a className='text-base text-gray-500 hover:text-gray-900'>
                  Portfolio
                </a>
              </Link>
            </div>
            <div className='px-5 py-2'>
              <Link href='/#services'>
                <a className='text-base text-gray-500 hover:text-gray-900'>
                  Services
                </a>
              </Link>
            </div>
            <div className='px-5 py-2'>
              <Link href='/#about'>
                <a className='text-base text-gray-500 hover:text-gray-900'>
                  About
                </a>
              </Link>
            </div>
            <div className='px-5 py-2'>
              <Link href='/#contact'>
                <a className='text-base text-gray-500 hover:text-gray-900'>
                  Contact
                </a>
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
          <div className='flex justify-center mt-8 space-x-6'>
            <a
              href='https://github.com/ZachScroggins'
              className='text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>GitHub</span>
              <FiGithub className='text-xl' />
            </a>
            <a
              href='https://www.linkedin.com/in/zachscroggins/'
              className='text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>LinkedIn</span>
              <FiLinkedin className='text-xl' />
            </a>
            <a
              href='https://twitter.com/scroggins_zach'
              className='text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>Twitter</span>
              <FiTwitter className='text-xl' />
            </a>
            <a
              href='https://www.facebook.com/scroggins.zach'
              className='text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>Facebook</span>
              <FiFacebook className='text-xl' />
            </a>
            <a
              href='https://www.instagram.com/scroggins_zach'
              className='text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>Instagram</span>
              <FiInstagram className='text-xl' />
            </a>
          </div>
          <Link href='/'>
            <a className='block mt-8 text-base text-center text-gray-500 hover:text-gray-900'>
              © {new Date().getFullYear()} Zach Scroggins
            </a>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
