import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className='min-h-screen bg-gray-100 pt-36 dark:bg-gray-900'>
      <div className='min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8'>
        <div className='mx-auto max-w-max'>
          <main className='sm:flex'>
            <p className='py-px text-4xl font-extrabold text-gray-900 dark:text-green-400 sm:text-5xl'>
              404
            </p>
            <div className='sm:ml-6'>
              <div className='sm:border-l sm:border-gray-200 sm:pl-6'>
                <h1 className='py-px text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 sm:text-5xl'>
                  Page not found
                </h1>
                <p className='mt-1 text-base text-gray-600 dark:text-gray-200'>
                  Please check the URL in the address bar and try again.
                </p>
              </div>
              <div className='flex mt-10 space-x-3 sm:pl-6'>
                <div className='rounded-md'>
                  <Link href='/'>
                    <a className='flex items-center justify-center w-full px-4 py-2 text-base font-bold text-white rounded-md filter hover:brightness-110 bg-gradient-to-r from-green-400 to-blue-500 md:text-lg'>
                      Go back home
                    </a>
                  </Link>
                </div>
                <Link href='/#contact'>
                  <a className='flex items-center justify-center p-px rounded-md sm:ml-3 bg-gradient-to-r from-green-400 to-blue-500'>
                    <span className='flex items-center justify-center w-full h-full px-4 py-2 text-base font-bold rounded-md bg-gray-50 hover:bg-white dark:hover:bg-opacity-95 dark:bg-gray-900 md:text-lg'>
                      <span className='text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text'>
                        Contact support
                      </span>
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
