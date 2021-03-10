import React from 'react';

const index = () => {
  return (
    <section
      id='about'
      className='pb-16 bg-gradient-to-r from-teal-500 to-cyan-600 lg:pb-0 lg:z-10 lg:relative'
      style={{ scrollMarginTop: '100px' }}
    >
      <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8'>
        <div className='relative lg:-my-8'>
          <div
            aria-hidden='true'
            className='absolute inset-x-0 top-0 bg-white h-1/2 lg:hidden'
          />
          <div className='max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full'>
            <div className='overflow-hidden shadow-xl aspect-w-10 aspect-h-6 rounded-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full'>
              <img
                className='object-cover lg:h-full lg:w-full'
                src='/profile-pic.jpg'
                alt='Profile Picture'
              />
            </div>
          </div>
        </div>
        <div className='mt-12 lg:m-0 lg:col-span-2 lg:pl-8'>
          <div className='max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none'>
            <blockquote>
              <div>
                <p className='mt-6 text-2xl font-medium text-white'>
                  I love building websites and web apps with cutting edge
                  technologies. I specialize in JavaScript and have the most
                  experience working with React and Node. I really enjoy the
                  JAMstack, but I am also familiar with the LAMP stack, Python,
                  Java, C#, and C++.
                </p>
              </div>
              <footer className='mt-6'>
                <p className='text-base font-medium text-white'>
                  Zach Scroggins
                </p>
                <p className='text-base font-medium text-cyan-100'>
                  Freelance Full Stack Developer
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
