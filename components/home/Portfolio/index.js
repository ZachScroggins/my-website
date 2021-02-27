import { useState } from 'react';
import { FiArrowRight, FiCode, FiNavigation } from 'react-icons/fi';

const isFeatured = repo => {
  return (
    repo.id === 266747152 || repo.id === 342325181 || repo.id === 266298269
  );
};

const isNotFeatured = repo => {
  return !(
    repo.id === 266747152 ||
    repo.id === 342325181 ||
    repo.id === 266298269
  );
};

const Portfolio = ({ repos }) => {
  const [allProjectsShowing, setAllProjectsShowing] = useState(false);
  const featured = repos.filter(isFeatured).sort((a, b) => b.id - a.id);
  const theRest = repos.filter(isNotFeatured);

  return (
    <>
      <div className='relative bg-gray-0 pt-32 lg:pt-24'>
        <div className='mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl'>
          <div>
            <h2
              id='portfolio'
              className='text-6xl tracking-tight font-extrabold sm:text-8xl xl:text-8xl mb-10 lg:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-600 block'
              style={{ scrollMarginTop: '100px' }}
            >
              Portfolio
            </h2>
            <h3 className='text-base font-semibold tracking-wider text-cyan-600 uppercase'>
              Professional
            </h3>
            <p className='mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl'>
              <a href='https://paulitacarlotta.com' className='hover:underline'>
                PaulitaCarlotta.com
              </a>
            </p>
            <p className='mt-5 max-w-prose mx-auto text-xl text-gray-500'>
              Ecommerce store for women's fashion and jewelry. Blog with
              headless content management system integration. Deployed globally
              across a blazing fast CDN, Google Cloud, and Amazon Web Services.
            </p>
            <div className='flex justify-center mt-5'>
              <div className='mt-3 sm:mt-0'>
                <a
                  href='https://paulitacarlotta.com'
                  className='block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900'
                >
                  Visit the site
                </a>
              </div>
              <div className='mt-3 sm:mt-0 sm:ml-3'>
                <a
                  href='#'
                  className='block w-full py-3 px-4 rounded-md text-teal-500 font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900'
                >
                  How it's made
                  <FiArrowRight className='inline ml-1 align-middle' />
                </a>
              </div>
            </div>
          </div>
          <div className='mt-12 -mx-6'>
            <img
              // className='rounded-lg shadow-xl ring-1 ring-black ring-opacity-5'
              src='/pc-mockup.png'
            />
          </div>
          <div className='mt-12 pb-12'>
            <img
              className='rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5'
              src='/paulita-carlotta.png'
            />
          </div>
        </div>
      </div>
      <div className='relative py-16 sm:py-24 lg:py-32'>
        <div className='relative'>
          <div className='text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
            <h2 className='text-base font-semibold tracking-wider text-cyan-600 uppercase'>
              Personal
            </h2>
            <p className='mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl'>
              Featured
            </p>
            <p className='mt-5 mx-auto max-w-prose text-xl text-gray-500'>
              The personal projects I have put the most time and effort in to.
              For me, web development is more than just a hobby. It's a passion.
            </p>
          </div>
          <div className='mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl'>
            {featured.map(repo => {
              return (
                <div
                  key={repo.id}
                  className='flex flex-col rounded-lg shadow-lg overflow-hidden hover:shadow-2xl cursor-pointer focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-teal-400'
                >
                  <a
                    href={repo.homepage}
                    className='h-96 bg-white overflow-hidden'
                  >
                    <div className='flex-shrink-0'>
                      <img
                        className='h-48 w-full object-cover object-top'
                        src={`https://raw.githubusercontent.com/ZachScroggins/${repo.name}/${repo.default_branch}/screenshot.png`}
                      />
                    </div>
                    <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                      <div className='flex-1'>
                        <div className='mt-2'>
                          <p className='text-sm font-medium text-cyan-600'>
                            {repo.language}
                          </p>
                          <p className='text-xl font-semibold text-gray-900 truncate hover:underline'>
                            {repo.name}
                          </p>
                          <p className='mt-3 text-base text-gray-500 line-clamp-3'>
                            {repo.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className='bg-white border-t border-gray-200 flex divide-x divide-gray-200'>
                    <div className='w-0 flex-1 flex'>
                      <a
                        href={repo.homepage}
                        className='relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400'
                      >
                        <FiNavigation className='inline align-middle text-lg' />
                        <span className='ml-3'>Visit site</span>
                      </a>
                    </div>
                    <div className='-ml-px w-0 flex-1 flex'>
                      <a
                        href={repo.html_url}
                        className='relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400'
                      >
                        <FiCode className='inline align-middle text-lg' />
                        <span className='ml-3'>View code</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='text-center my-16'>
            <p className='mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl'>
              Other Projects
            </p>
            <p className='mt-5 mx-auto max-w-prose text-xl text-gray-500'>
              Programs, websites, and apps, written in a variety of languages. I
              am always learning, and I learn best by trying things myself!
            </p>
          </div>
          <div className='mx-auto max-w-screen-lg px-4 xl:px-0'>
            <div className='bg-white shadow overflow-hidden rounded-lg'>
              <ul className='divide-y divide-gray-200'>
                {theRest.slice(0, 6).map(repo => {
                  return (
                    <li key={repo.id}>
                      <a
                        href={repo.html_url}
                        className='block hover:bg-gray-50'
                      >
                        <div className='px-4 py-4 flex items-center sm:px-6'>
                          <div className='min-w-0 flex-1 sm:flex sm:items-center sm:justify-between'>
                            <div>
                              <div className='flex text-sm font-medium text-cyan-600 truncate'>
                                {repo.language}
                              </div>
                              <div className='mt-2 text-lg font-bold'>
                                {repo.name}
                              </div>
                              <p className='mt-2'>{repo.description}</p>
                            </div>
                          </div>
                          <div className='ml-5 flex-shrink-0'>
                            <svg
                              className='h-5 w-5 text-gray-400'
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
                            className='block hover:bg-gray-50'
                          >
                            <div className='px-4 py-4 flex items-center sm:px-6'>
                              <div className='min-w-0 flex-1 sm:flex sm:items-center sm:justify-between'>
                                <div>
                                  <div className='flex text-sm font-medium text-cyan-600 truncate'>
                                    {repo.language}
                                  </div>
                                  <div className='mt-2 text-lg font-bold'>
                                    {repo.name}
                                  </div>
                                  <p className='mt-2'>{repo.description}</p>
                                </div>
                              </div>
                              <div className='ml-5 flex-shrink-0'>
                                <svg
                                  className='h-5 w-5 text-gray-400'
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
                  className='w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
                  onClick={() => setAllProjectsShowing(true)}
                >
                  View all
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
