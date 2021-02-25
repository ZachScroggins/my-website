import { FiArrowRight } from 'react-icons/fi';

const index = () => {
  return (
    <div className='pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden'>
      <div className='mx-auto max-w-7xl lg:px-8'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
          <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
            <div className='lg:py-24'>
              <h1 className='mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
                <span className='block'>Building tomorrow's</span>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 block'>
                  web experiences
                </span>
              </h1>
              <p className='mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat.
              </p>
              <div className='mt-10 sm:mt-12'>
                <form action='#' className='sm:max-w-xl sm:mx-auto lg:mx-0'>
                  <div className='sm:flex'>
                    <div className='mt-3 sm:mt-0'>
                      <button
                        type='submit'
                        className='block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900'
                      >
                        Check out my work
                      </button>
                    </div>
                    <div className='mt-3 sm:mt-0 sm:ml-3'>
                      <a
                        href='#'
                        className='block w-full py-3 px-4 rounded-md text-center text-teal-500 font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900'
                      >
                        Contact me
                        <FiArrowRight className='inline ml-1 align-middle' />
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative'>
            <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0'>
              {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
              <img
                className='w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
                src='https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
