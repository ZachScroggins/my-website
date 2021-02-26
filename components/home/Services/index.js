import React from 'react';

const index = () => {
  return (
    <>
      <div id='services' className='bg-gray-900'>
        <div className='pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20'>
          <div className='text-center'>
            <h2 className='text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider'>
              Services
            </h2>
            <p className='mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl'>
              The right price for you, whoever you are
            </p>
            <p className='mt-3 max-w-4xl mx-auto text-xl text-gray-300 sm:mt-5 sm:text-2xl'>
              Pricing will vary on a project by project basis, depending on
              requirements and features. This is meant to give you a general
              idea of what to expect. I reserve the right to set pricing how I
              see fit.
            </p>
          </div>
        </div>
        <div className='mt-16 bg-white pb-12 lg:mt-20 lg:pb-32'>
          <div className='relative z-0'>
            <div className='absolute inset-0 h-5/6 bg-gray-900 lg:h-2/3' />
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='relative lg:grid lg:grid-cols-7'>
                <div className='mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3'>
                  <div className='h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg'>
                    <div className='flex-1 flex flex-col'>
                      <div className='bg-white px-6 py-10'>
                        <div>
                          <h3
                            className='text-center text-2xl font-medium text-gray-900'
                            id='tier-hobby'
                          >
                            Basic
                          </h3>
                          <div className='mt-4 flex items-center justify-center'>
                            <span className='px-3 flex items-start text-6xl tracking-tight text-gray-900'>
                              <span className='mt-2 mr-2 text-4xl font-medium'>
                                $
                              </span>
                              <span className='font-extrabold'>25</span>
                            </span>
                            <span className='text-xl font-medium text-gray-500'>
                              /hour
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className='flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10'>
                        <ul className='space-y-4'>
                          <li className='flex items-start'>
                            <div className='flex-shrink-0'>
                              <svg
                                className='flex-shrink-0 h-6 w-6 text-green-500'
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
                                  d='M5 13l4 4L19 7'
                                />
                              </svg>
                            </div>
                            <p className='ml-3 text-base font-medium text-gray-500'>
                              Informational sites
                            </p>
                          </li>
                          <li className='flex items-start'>
                            <div className='flex-shrink-0'>
                              <svg
                                className='flex-shrink-0 h-6 w-6 text-green-500'
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
                                  d='M5 13l4 4L19 7'
                                />
                              </svg>
                            </div>
                            <p className='ml-3 text-base font-medium text-gray-500'>
                              Wordpress blogs
                            </p>
                          </li>
                          <li className='flex items-start'>
                            <div className='flex-shrink-0'>
                              <svg
                                className='flex-shrink-0 h-6 w-6 text-green-500'
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
                                  d='M5 13l4 4L19 7'
                                />
                              </svg>
                            </div>
                            <p className='ml-3 text-base font-medium text-gray-500'>
                              Quality templates
                            </p>
                          </li>
                        </ul>
                        <div className='mt-8'>
                          <div className='rounded-lg shadow-md'>
                            <a
                              href='#contact'
                              className='block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-cyan-600 hover:bg-gray-50'
                              aria-describedby='tier-hobby'
                            >
                              Get a quote
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4'>
                  <div className='relative z-10 rounded-lg shadow-xl'>
                    <div
                      className='pointer-events-none absolute inset-0 rounded-lg border-2 border-cyan-600'
                      aria-hidden='true'
                    />
                    <div className='absolute inset-x-0 top-0 transform translate-y-px'>
                      <div className='flex justify-center transform -translate-y-1/2'>
                        <span className='inline-flex rounded-full bg-cyan-600 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white'>
                          Most popular
                        </span>
                      </div>
                    </div>
                    <div className='bg-white rounded-t-lg px-6 pt-12 pb-10'>
                      <div>
                        <h3
                          className='text-center text-3xl font-semibold text-gray-900 sm:-mx-6'
                          id='tier-growth'
                        >
                          Essential
                        </h3>
                        <div className='mt-4 flex items-center justify-center'>
                          <span className='px-3 flex items-start text-6xl tracking-tight text-gray-900 sm:text-6xl'>
                            <span className='mt-2 mr-2 text-4xl font-medium'>
                              $
                            </span>
                            <span className='font-extrabold'>50</span>
                          </span>
                          <span className='text-2xl font-medium text-gray-500'>
                            /hour
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10'>
                      <ul className='space-y-4'>
                        <li className='flex items-start'>
                          <div className='flex-shrink-0'>
                            <svg
                              className='flex-shrink-0 h-6 w-6 text-green-500'
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
                                d='M5 13l4 4L19 7'
                              />
                            </svg>
                          </div>
                          <p className='ml-3 text-base font-medium text-gray-500'>
                            Ecommerce sites
                          </p>
                        </li>
                        <li className='flex items-start'>
                          <div className='flex-shrink-0'>
                            <svg
                              className='flex-shrink-0 h-6 w-6 text-green-500'
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
                                d='M5 13l4 4L19 7'
                              />
                            </svg>
                          </div>
                          <p className='ml-3 text-base font-medium text-gray-500'>
                            Peak performance React apps
                          </p>
                        </li>
                        <li className='flex items-start'>
                          <div className='flex-shrink-0'>
                            <svg
                              className='flex-shrink-0 h-6 w-6 text-green-500'
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
                                d='M5 13l4 4L19 7'
                              />
                            </svg>
                          </div>
                          <p className='ml-3 text-base font-medium text-gray-500'>
                            Global distribution and highly scalable
                          </p>
                        </li>
                        <li className='flex items-start'>
                          <div className='flex-shrink-0'>
                            <svg
                              className='flex-shrink-0 h-6 w-6 text-green-500'
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
                                d='M5 13l4 4L19 7'
                              />
                            </svg>
                          </div>
                          <p className='ml-3 text-base font-medium text-gray-500'>
                            Personalized custom design
                          </p>
                        </li>
                        <li className='flex items-start'>
                          <div className='flex-shrink-0'>
                            <svg
                              className='flex-shrink-0 h-6 w-6 text-green-500'
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
                                d='M5 13l4 4L19 7'
                              />
                            </svg>
                          </div>
                          <p className='ml-3 text-base font-medium text-gray-500'>
                            Exceptional user experience
                          </p>
                        </li>
                      </ul>
                      <div className='mt-10'>
                        <div className='rounded-lg shadow-md'>
                          <a
                            href='#contact'
                            className='block w-full text-center rounded-lg border border-transparent bg-cyan-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-cyan-700'
                            aria-describedby='tier-growth'
                          >
                            Get a quote
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3'>
                  <div className='h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg'>
                    <div className='flex-1 flex flex-col'>
                      <div className='bg-white px-6 py-10'>
                        <div>
                          <h3
                            className='text-center text-2xl font-medium text-gray-900'
                            id='tier-scale'
                          >
                            Premium
                          </h3>
                          <div className='mt-4 flex items-center justify-center'>
                            <span className='px-3 flex items-start text-6xl tracking-tight text-gray-900'>
                              <span className='mt-2 mr-2 text-4xl font-medium'>
                                $
                              </span>
                              <span className='font-extrabold'>75</span>
                            </span>
                            <span className='text-xl font-medium text-gray-500'>
                              /hour
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className='flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10'>
                        <ul className='space-y-4'>
                          <li className='flex items-start'>
                            <div className='flex-shrink-0'>
                              <svg
                                className='flex-shrink-0 h-6 w-6 text-green-500'
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
                                  d='M5 13l4 4L19 7'
                                />
                              </svg>
                            </div>
                            <p className='ml-3 text-base font-medium text-gray-500'>
                              All Essential features
                            </p>
                          </li>
                          <li className='flex items-start'>
                            <div className='flex-shrink-0'>
                              <svg
                                className='flex-shrink-0 h-6 w-6 text-green-500'
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
                                  d='M5 13l4 4L19 7'
                                />
                              </svg>
                            </div>
                            <p className='ml-3 text-base font-medium text-gray-500'>
                              Enterprise applications
                            </p>
                          </li>
                          <li className='flex items-start'>
                            <div className='flex-shrink-0'>
                              <svg
                                className='flex-shrink-0 h-6 w-6 text-green-500'
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
                                  d='M5 13l4 4L19 7'
                                />
                              </svg>
                            </div>
                            <p className='ml-3 text-base font-medium text-gray-500'>
                              Website and mobile app
                            </p>
                          </li>
                        </ul>
                        <div className='mt-8'>
                          <div className='rounded-lg shadow-md'>
                            <a
                              href='#contact'
                              className='block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-cyan-600 hover:bg-gray-50'
                              aria-describedby='tier-scale'
                            >
                              Get a quote
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
