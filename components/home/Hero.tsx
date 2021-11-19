import Link from 'next/link';
import React from 'react';
import { FiMail } from 'react-icons/fi';

const index = () => {
  return (
    <React.Fragment>
      <section className='relative bg-gray-100 dark:bg-gray-900'>
        <div className='lg:relative'>
          <div className='w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:py-48 lg:text-left'>
            <div className='px-4 lg:w-1/2'>
              <h1 className='text-4xl font-extrabold tracking-tight text-center text-gray-800 dark:text-white lg:text-left sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl'>
                <span className='block xl:inline'>Zach Scroggins</span>{' '}
                <span className='block mt-2 text-3xl text-transparent md:mt-3 lg:mt-4 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                  Full Stack JavaScript / TypeScript Developer
                </span>
              </h1>
              <p className='mx-auto mt-3 text-lg text-center textgray-5 dark:text-gray-300 lg:text-left sm:text-xl md:mt-5'>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className='mt-10 sm:flex sm:justify-center lg:justify-start'>
                <div className='rounded-md shadow'>
                  <Link href='/#portfolio'>
                    <a className='flex items-center justify-center w-full px-8 py-3.5 text-base font-medium text-white border border-transparent rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:bg-indigo-700 md:py-5 md:text-lg md:px-10'>
                      Check out my work
                    </a>
                  </Link>
                </div>
                <div className='p-1 mt-3 rounded-md shadow bg-gradient-to-r from-green-400 to-blue-500 sm:mt-0 sm:ml-3'>
                  <Link href='/#contact'>
                    <a className='flex items-center justify-center w-full px-8 py-3 text-base font-medium text-transparent bg-gray-100 rounded-md dark:bg-gray-900 hover:bg-gray-50 md:py-4 md:text-lg md:px-10'>
                      <FiMail className='inline mr-2 text-green-400' />
                      <span className='bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                        Contact me
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full h-full lg:hidden'>
            <img
              src='/web-dev-mobile.png'
              alt='Web development graphic'
              width={1280}
              height={1049}
            />
          </div>
          <div className='relative hidden w-full bg-gray-900 lg:rounded-bl-3xl lg:block h-80 sm:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full'>
            <img
              src='/web-dev-mobile.png'
              alt='Web development graphic'
              width={1280}
              height={1049}
              // loading='eager'
              className='absolute inset-0 object-cover object-top w-full h-full bg-gray-900 lg:rounded-bl-3xl xl:object-contain lg:object-left-top max-w-7xl'
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default index;
