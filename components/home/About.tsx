import React from 'react';
import { FiDownload } from 'react-icons/fi';

const index = () => {
  return (
    <section
      id='about'
      className='pb-16 bg-gradient-to-r from-green-400 to-blue-500 lg:pb-0 lg:z-10 lg:relative'
      style={{ scrollMarginTop: '100px' }}
    >
      <div className='lg:mx-auto lg:max-w-7xl lg:px-6 lg:grid lg:grid-cols-3 lg:gap-8'>
        <div className='relative lg:-my-8'>
          <div
            aria-hidden='true'
            className='absolute inset-x-0 top-0 bg-gray-100 dark:bg-gray-900 h-1/2 lg:hidden'
          />
          <div className='max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full'>
            <div className='overflow-hidden shadow-xl aspect-w-10 aspect-h-6 rounded-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full'>
              <img
                src='/images/profile-pic.jpg'
                alt='Profile Picture'
                width={2778}
                height={3023}
                loading='lazy'
                className='object-cover lg:h-full lg:w-full'
              />
            </div>
          </div>
        </div>
        <div className='mt-12 lg:m-0 lg:col-span-2 lg:pl-8'>
          <div className='max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none'>
            <blockquote>
              <div>
                <p className='mt-6 text-2xl font-medium text-white lg:mt-0'>
                  I love building websites and web apps with cutting edge
                  technologies. I specialize in JavaScript and have the most
                  experience working with React and Node. I really enjoy the
                  JAMstack, but I am also proficient with the LAMP stack,
                  Python, Java, C#, and C++.
                </p>
              </div>
              <footer className='mt-6'>
                <p className='text-base font-medium text-white'>
                  Zach Scroggins
                </p>
                <p className='text-base font-medium text-cyan-100'>
                  Full Stack Web Developer
                </p>
              </footer>
            </blockquote>
            <a
              href='/Zach-Scroggins-Resume.pdf'
              target='_blank'
              rel='noopener'
              className='inline-flex items-center justify-center p-2 mt-6 font-medium border rounded-md filter hover:brightness-110 text-cyan-50 border-cyan-100 hover:text-white hover:border-white'
            >
              <FiDownload className='mr-2' />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
