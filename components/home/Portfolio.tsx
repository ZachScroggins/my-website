import { useState } from 'react';
import { FiArrowRight, FiCode, FiNavigation } from 'react-icons/fi';

const isFeatured = repo => {
  return (
    repo.id === 266747152 || repo.id === 342325181 || repo.id === 427423678
  );
};

const isNotFeatured = repo => {
  return !(
    repo.id === 266747152 ||
    repo.id === 342325181 ||
    repo.id === 427423678
  );
};

const Portfolio = ({ repos }) => {
  const [allProjectsShowing, setAllProjectsShowing] = useState(false);
  const featured = repos.filter(isFeatured);
  const theRest = repos.filter(isNotFeatured);

  return (
    <section className='mb-16 bg-gray-100 dark:bg-gray-900'>
      <div className='relative pt-16 lg:pt-24'>
        <div className='max-w-md px-4 mx-auto text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl'>
          <div>
            <h2
              id='portfolio'
              className='block mb-10 text-6xl font-extrabold tracking-tight text-transparent sm:text-8xl xl:text-8xl lg:mb-16'
              style={{ scrollMarginTop: '100px' }}
            >
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                Portfolio
              </span>
            </h2>
            <h3 className='text-base font-semibold tracking-wider text-green-400 uppercase'>
              Professional
            </h3>
            <p className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl'>
              <a href='https://paulitacarlotta.com' className='hover:underline'>
                PaulitaCarlotta.com
              </a>
            </p>
            <p className='mx-auto mt-5 text-xl text-gray-500 dark:text-gray-300 max-w-prose'>
              Ecommerce store for women's fashion and jewelry. Blog with
              headless content management system integration. Deployed globally
              across a blazing fast CDN, Google Cloud, and Amazon Web Services.
            </p>
            <div className='flex justify-center mt-5'>
              <div className='mt-3 sm:mt-0'>
                <a
                  href='https://paulitacarlotta.com'
                  className='block w-full px-4 py-3 font-medium text-white rounded-md shadow bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900'
                >
                  Visit the site
                </a>
              </div>
              {/* <div className='mt-3 sm:mt-0 sm:ml-3'>
                <a
                  href='#'
                  className='block w-full px-4 py-3 font-medium text-teal-500 rounded-md hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900'
                >
                  How it's made
                  <FiArrowRight className='inline ml-1 align-middle' />
                </a>
              </div> */}
            </div>
          </div>
          <div className='mt-12 -mx-6'>
            <img
              src='/images/pc-mockup-new.png'
              alt='Paulita Carlotta Website Mockup Image'
              width={4096}
              height={2160}
              loading='lazy'
            />
          </div>
          <div className='grid pb-12 mt-12 lg:grid-cols-2'>
            <div>
              <p className='mb-12 text-xl text-left text-gray-500 dark:text-gray-300 lg:pr-16'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus qui voluptates unde eligendi ad quis officia non. Odio
                ab eveniet modi sed reprehenderit earum deserunt obcaecati.
                Alias fugit placeat eligendi ut rem veritatis laborum numquam
                explicabo, exercitationem asperiores cupiditate tempora. Nihil
                fuga maxime dicta ab eveniet! Dolorem suscipit eveniet a!
              </p>
            </div>
            <img
              src='/images/paulita-carlotta.png'
              alt='Paulita Carlotta Website Screenshot'
              width={3584}
              height={2155}
              loading='lazy'
              // className='shadow-2xl rounded-xl ring-1 ring-black ring-opacity-5'
            />
          </div>
        </div>
      </div>
      {/* <div className='flex justify-between w-full h-auto'>
        <img src='/images/iphone.png' alt='' />
        <img src='/images/iphone-light.png' alt='' />
      </div> */}
      <div className='relative py-8'>
        <div className='relative'>
          <div className='max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
            <h3 className='text-base font-semibold tracking-wider text-green-400 uppercase'>
              Personal
            </h3>
            <h4 className='mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                Featured
              </span>
            </h4>
            <p className='mx-auto mt-5 text-xl text-gray-500 dark:text-gray-300 max-w-prose'>
              The personal projects I have put the most time and effort in to.
              For me, web development is more than just a hobby. It's a passion.
            </p>
          </div>
          <div className='grid max-w-md gap-8 px-4 mx-auto mt-12 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl'>
            {featured.map(repo => {
              return (
                <div
                  key={repo.id}
                  className='flex flex-col overflow-hidden rounded-lg shadow-lg cursor-pointer dark:shadow-2xl hover:shadow-2xl focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-teal-400'
                >
                  <a
                    href={
                      repo.name === 'my-website' ? repo.html_url : repo.homepage
                    }
                    className='overflow-hidden bg-white rounded-t-lg dark:border dark:border-gray-700 dark:bg-gray-900 h-96'
                  >
                    <div className='flex-shrink-0 rounded-t-lg'>
                      <img
                        src={
                          repo.id === 427423678
                            ? `https://raw.githubusercontent.com/ZachScroggins/${repo.name}/${repo.default_branch}/public/images/og-image.png`
                            : `https://raw.githubusercontent.com/ZachScroggins/${repo.name}/${repo.default_branch}/screenshot.png`
                        }
                        alt={`${repo.name} screenshot`}
                        loading='lazy'
                        className='object-cover object-top w-full h-48 rounded-t-lg'
                      />
                    </div>
                    <div className='flex flex-col justify-between flex-1 p-6 bg-white dark:bg-gray-900'>
                      <div className='flex-1'>
                        <div className='mt-2'>
                          <p className='text-sm font-medium text-cyan-700 dark:text-green-400'>
                            {repo.language || 'TypeScript'}
                          </p>
                          <p className='text-xl font-semibold text-gray-900 truncate dark:text-gray-100 hover:underline'>
                            {repo.name}
                          </p>
                          <p className='mt-3 text-base text-gray-500 dark:text-gray-300 line-clamp-3'>
                            {repo.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className='flex bg-white border-t border-gray-200 divide-x divide-gray-200 rounded-b-lg dark:divide-gray-700 dark:border-none dark:bg-gray-900'>
                    <div
                      className={`flex flex-1 w-0 rounded-bl-lg ${
                        repo.name === 'my-website' ? 'hidden' : ''
                      }`}
                    >
                      <a
                        href={repo.homepage}
                        className='relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 border border-transparent rounded-bl-lg dark:text-gray-400 dark:border-l dark:border-b dark:border-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400'
                      >
                        <FiNavigation className='inline text-lg align-middle' />
                        <span className='ml-3'>Visit site</span>
                      </a>
                    </div>
                    <div
                      className={`flex flex-1 w-0 -ml-px ${
                        repo.name === 'my-website' ? 'rounded-b-lg' : ''
                      }`}
                    >
                      <a
                        href={repo.html_url}
                        className={`${
                          repo.name === 'my-website' ? 'rounded-bl-lg' : ''
                        } relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 border border-transparent rounded-br-lg dark:text-gray-400 dark:border dark:border-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400`}
                      >
                        <FiCode className='inline text-lg align-middle' />
                        <span className='ml-3'>View code</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='my-16 text-center'>
            <h4 className='mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                Other Projects
              </span>
            </h4>
            <p className='px-2 mx-auto mt-5 text-xl text-gray-600 dark:text-gray-300 sm:px-8 lg:px-0 max-w-prose'>
              Programs, websites, and apps, written in a variety of languages. I
              am always learning, and I learn best by trying things myself!
            </p>
          </div>
          <div className='max-w-screen-lg px-4 mx-auto xl:px-0'>
            <div className='overflow-hidden bg-white rounded-lg shadow dark:rounded-none'>
              <ul className='divide-y divide-gray-200 dark:divide-gray-700'>
                {theRest.slice(0, 6).map(repo => {
                  return (
                    <li key={repo.id}>
                      <a
                        href={repo.html_url}
                        className='block dark:bg-gray-900 hover:bg-gray-50'
                      >
                        <div className='flex items-center px-4 py-4 sm:px-6'>
                          <div className='flex-1 min-w-0 sm:flex sm:items-center sm:justify-between'>
                            <div>
                              <div className='flex text-sm font-medium text-green-400 truncate'>
                                {repo.language}
                              </div>
                              <div className='mt-2 text-lg font-bold text-gray-900 dark:text-gray-100'>
                                {repo.name}
                              </div>
                              <p className='mt-2 text-gray-800 dark:text-gray-300'>
                                {repo.description}
                              </p>
                            </div>
                          </div>
                          <div className='flex-shrink-0 ml-5'>
                            <svg
                              className='w-5 h-5 text-gray-400'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 20 20'
                              fill='currentColor'
                              aria-hidden='true'
                            >
                              <path
                                fillRule='evenodd'
                                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                                clipRule='evenodd'
                              />
                            </svg>
                          </div>
                        </div>
                      </a>
                    </li>
                  );
                })}
                {allProjectsShowing && (
                  <>
                    {theRest.slice(6).map(repo => {
                      return (
                        <li key={repo.id}>
                          <a
                            href={repo.html_url}
                            className='block dark:bg-gray-900 hover:bg-gray-50'
                          >
                            <div className='flex items-center px-4 py-4 sm:px-6'>
                              <div className='flex-1 min-w-0 sm:flex sm:items-center sm:justify-between'>
                                <div>
                                  <div className='flex text-sm font-medium text-green-400 truncate'>
                                    {repo.language}
                                  </div>
                                  <div className='mt-2 text-lg font-bold text-gray-900 dark:text-gray-100'>
                                    {repo.name}
                                  </div>
                                  <p className='mt-2 text-gray-800 dark:text-gray-300'>
                                    {repo.description}
                                  </p>
                                </div>
                              </div>
                              <div className='flex-shrink-0 ml-5'>
                                <svg
                                  className='w-5 h-5 text-gray-400'
                                  xmlns='http://www.w3.org/2000/svg'
                                  viewBox='0 0 20 20'
                                  fill='currentColor'
                                  aria-hidden='true'
                                >
                                  <path
                                    fillRule='evenodd'
                                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                                    clipRule='evenodd'
                                  />
                                </svg>
                              </div>
                            </div>
                          </a>
                        </li>
                      );
                    })}
                  </>
                )}
              </ul>
            </div>
            {!allProjectsShowing && (
              <div className='mt-6'>
                <button
                  type='button'
                  className='flex items-center justify-center w-full px-4 py-2 font-medium text-white border border-transparent rounded-md shadow-sm bg-clip-border bg-gradient-to-r from-green-400 to-blue-500'
                  onClick={() => setAllProjectsShowing(true)}
                >
                  View all
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
