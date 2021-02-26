import React from 'react';

export const index = () => {
  return (
    <div id='contact' className='relative bg-gray-900 lg:mt-20'>
      <div className='relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2'>
        <img
          className='w-full h-full object-cover'
          src='https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixqx=jjcbxallJd&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100'
        />
        <div
          aria-hidden='true'
          className='absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600'
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>
      <div className='relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32'>
        <div className='md:ml-auto md:w-1/2 md:pl-10'>
          <p className='mt-2 mb-6 text-3xl font-extrabold text-white tracking-tight sm:text-4xl'>
            Let's work together!
          </p>
          <form
            className='grid grid-cols-1 gap-y-6'
            onSubmit={e => e.preventDefault()}
          >
            <div>
              <label htmlFor='full_name' className='block text-white mb-2'>
                Full name
              </label>
              <input
                type='text'
                name='full_name'
                id='full_name'
                autoComplete='name'
                className='block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                placeholder='John Doe'
                required
              />
            </div>
            <div>
              <label htmlFor='email' className='block text-white mb-2'>
                Email
              </label>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                className='block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                placeholder='jdoe@gmail.com'
                required
              />
            </div>
            <div>
              <label htmlFor='phone' className='block text-white mb-2'>
                Phone
              </label>
              <input
                type='text'
                name='phone'
                id='phone'
                autoComplete='tel'
                className='block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                placeholder='Optional'
              />
            </div>
            <div>
              <label htmlFor='message' className='block text-white mb-2'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                rows={4}
                className='block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                placeholder='What would you like to build?'
                defaultValue={''}
                required
              />
            </div>
            <div>
              <button
                type='submit'
                className='inline-flex justify-center py-3 px-6 border rounded-md text-white bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default index;
