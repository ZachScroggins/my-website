import React, { Fragment } from 'react'
import Link from 'next/link'
import { Transition, Dialog } from '@headlessui/react'
import { classNames } from 'lib/utils/classNames'
import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from 'lib/socialLinks'
import Logo from 'components/Logo'
import ThemeChanger from 'components/ThemeChanger'
import {
  FiAward,
  FiDownload,
  FiFileText,
  FiGithub,
  FiInfo,
  FiLinkedin,
  FiMail,
  FiTwitter
} from 'react-icons/fi'
import { XIcon } from '@heroicons/react/outline'

interface MobileMenuProps {
  show: boolean
  toggle: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileMenu = ({ show, toggle }: MobileMenuProps) => {
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as='div'
        static
        className='fixed inset-0 z-40 flex lg:hidden'
        open={show}
        onClose={toggle}
      >
        <Transition.Child
          as={Fragment}
          enter='transition-opacity ease-linear duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-linear duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter='transition ease-in-out duration-300 transform'
          enterFrom='-translate-x-full'
          enterTo='translate-x-0'
          leave='transition ease-in-out duration-300 transform'
          leaveFrom='translate-x-0'
          leaveTo='-translate-x-full'
        >
          <div className='relative flex flex-col flex-1 w-full max-w-[16.5rem] xs:max-w-xs bg-white shadow-2xl dark:bg-gray-900 ring-1 ring-black ring-opacity-5 dark:ring-gray-600'>
            <Transition.Child
              as={Fragment}
              enter='ease-in-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in-out duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='absolute top-0 right-0 pt-4 -mr-12'>
                <button
                  className='flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white'
                  onClick={() => toggle(false)}
                >
                  <span className='sr-only'>Close sidebar</span>
                  <XIcon className='w-6 h-6 text-white' aria-hidden='true' />
                </button>
              </div>
            </Transition.Child>
            <div className='flex-1 h-0 px-5 pt-5 pb-4 overflow-y-auto'>
              <div className='flex items-center justify-between'>
                <Link href='/'>
                  <a
                    onClick={() => toggle(false)}
                    className='flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700'
                  >
                    <Logo className='w-9 h-9' />
                    <div className='ml-4 text-2xl font-bold text-gray-900 dark:text-gray-50'>
                      Zach Scroggins
                    </div>
                  </a>
                </Link>
              </div>
              <div className='mt-6'>
                <nav className='grid grid-cols-1 gap-7'>
                  <Link href='/#portfolio'>
                    <a
                      onClick={() => toggle(false)}
                      className={classNames(
                        'flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700'
                        // false
                        //   ? 'bg-gray-100 dark:bg-gray-900'
                        //   : 'bg-white dark:bg-gray-800'
                      )}
                    >
                      <div className='flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-md bg-gradient-to-r from-green-400 to-cyan-500 dark:to-blue-500 text-gray-50'>
                        <FiAward className='w-6 h-6' />
                      </div>
                      <div className='ml-4 text-lg text-gray-900 dark:text-gray-50'>
                        Portfolio
                      </div>
                    </a>
                  </Link>
                  <Link href='/#about'>
                    <a
                      onClick={() => toggle(false)}
                      className={classNames(
                        'flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700'
                        // false
                        //   ? 'bg-gray-100 dark:bg-gray-900'
                        //   : 'bg-white dark:bg-gray-800'
                      )}
                    >
                      <div className='flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-md bg-gradient-to-r from-green-400 to-cyan-500 dark:to-blue-500 text-gray-50 bg-primary'>
                        <FiInfo className='w-6 h-6' />
                      </div>
                      <div className='ml-4 text-lg text-gray-900 dark:text-gray-50'>
                        About
                      </div>
                    </a>
                  </Link>
                  <Link href='/blog'>
                    <a
                      onClick={() => toggle(false)}
                      className={classNames(
                        'flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700'
                        // false
                        //   ? 'bg-gray-100 dark:bg-gray-900'
                        //   : 'bg-white dark:bg-gray-800'
                      )}
                    >
                      <div className='flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-md bg-gradient-to-r from-green-400 to-cyan-500 dark:to-blue-500 text-gray-50 bg-primary'>
                        <FiFileText className='w-6 h-6' />
                      </div>
                      <div className='ml-4 text-lg text-gray-900 dark:text-gray-50'>
                        Blog
                      </div>
                    </a>
                  </Link>
                  <Link href='/#contact'>
                    <a
                      onClick={() => toggle(false)}
                      className={classNames(
                        'flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700'
                        // false
                        //   ? 'bg-gray-100 dark:bg-gray-900'
                        //   : 'bg-white dark:bg-gray-800'
                      )}
                    >
                      <div className='flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-md bg-gradient-to-r from-green-400 to-cyan-500 dark:to-blue-500 text-gray-50 bg-primary'>
                        <FiMail className='w-6 h-6' />
                      </div>
                      <div className='ml-4 text-lg text-gray-900 dark:text-gray-50'>
                        Contact
                      </div>
                    </a>
                  </Link>
                </nav>
              </div>
            </div>
            <div className='flex-shrink-0 px-5 py-6 border-t border-gray-200 dark:border-gray-700'>
              <a
                href='/Zach-Scroggins-Resume.pdf'
                className='flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white rounded-md shadow-sm bg-gradient-to-r from-green-400 to-blue-500'
                onClick={() => toggle(false)}
              >
                <FiDownload className='mr-2' />
                Download Resume
              </a>
              <span className='flex justify-center mt-6 space-x-8 text-base font-medium text-center text-gray-500'>
                <ThemeChanger className='text-gray-500 rounded dark:text-gray-300 hover:text-gray-500' />
                <a
                  href={GITHUB_URL}
                  target='_blank'
                  rel='noopener'
                  title='GitHub Profile'
                  className='text-gray-400 rounded hover:text-gray-500'
                  onClick={() => toggle(false)}
                >
                  <FiGithub className='w-6 h-6' aria-hidden='true' />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target='_blank'
                  rel='noopener'
                  title='LinkedIn Profile'
                  className='text-gray-400 rounded hover:text-gray-500'
                  onClick={() => toggle(false)}
                >
                  <FiLinkedin className='w-6 h-6' aria-hidden='true' />
                </a>
                <a
                  href={TWITTER_URL}
                  target='_blank'
                  rel='noopener'
                  title='Twitter Profile'
                  className='text-gray-400 rounded hover:text-gray-500'
                  onClick={() => toggle(false)}
                >
                  <FiTwitter className='w-6 h-6' aria-hidden='true' />
                </a>
              </span>
            </div>
          </div>
        </Transition.Child>
        <div className='flex-shrink-0 w-14'>
          {/* Force sidebar to shrink to fit close icon */}
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default MobileMenu
