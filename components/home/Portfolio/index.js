import React from 'react';
import { FiCode, FiNavigation } from 'react-icons/fi';

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
  const featured = repos.filter(isFeatured).sort((a, b) => b.id - a.id);
  const theRest = repos.filter(isNotFeatured);

  return (
    <>
      <div
        id='portfolio'
        className='relative bg-gray-50 pt-16 sm:pt-24 lg:pt-32'
      >
        <div className='mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl'>
          <div>
            <h2 className='text-6xl tracking-tight font-extrabold sm:text-8xl xl:text-8xl mb-10 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-600 block'>
              Portfolio
            </h2>
            <h3 className='text-base font-semibold tracking-wider text-cyan-600 uppercase'>
              Professional
            </h3>
            <p className='mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl'>
              Paulita Carlotta
            </p>
            <p className='mt-5 max-w-prose mx-auto text-xl text-gray-500'>
              Ecommerce store for women's fashion and jewelry. Blog with
              headless content management system integration. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Nam hic alias et tempore
              cumque amet libero.
            </p>
          </div>
          <div className='mt-12 -mb-10 sm:-mb-24 '>
            <img
              className='rounded-lg shadow-xl ring-1 ring-black ring-opacity-5'
              src='/paulita-carlotta.png'
            />
          </div>
        </div>
      </div>
      <div className='relative bg-gray-100 py-16 sm:py-24 lg:py-32'>
        <div className='relative'>
          <div className='text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
            <h2 className='text-base font-semibold tracking-wider text-cyan-600 uppercase'>
              Personal
            </h2>
            <p className='mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl'>
              Featured Projects
            </p>
            <p className='mt-5 mx-auto max-w-prose text-xl text-gray-500'>
              Phasellus lorem quam molestie id quisque diam aenean nulla in.
              Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
              condimentum id viverra nulla.
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
              Phasellus lorem quam molestie id quisque diam aenean nulla in.
              Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
              condimentum id viverra nulla.
            </p>
          </div>
          <div className='mx-auto max-w-screen-lg px-4 xl:px-0'>
            <div className='bg-white shadow overflow-hidden rounded-lg'>
              <ul className='divide-y divide-gray-200'>
                {theRest.map(repo => {
                  return (
                    <li key={repo.id}>
                      <a
                        href={repo.html_url}
                        className='block hover:bg-gray-50'
                      >
                        <div className='px-4 py-4 flex items-center sm:px-6'>
                          <div className='min-w-0 flex-1 sm:flex sm:items-center sm:justify-between'>
                            <div>
                              <div className='flex text-sm font-medium text-indigo-600 truncate'>
                                {repo.language}
                              </div>
                              <div className='mt-2 text-lg font-bold'>
                                {repo.name}
                              </div>
                              <p className='mt-2'>{repo.description}</p>
                            </div>
                            {/* <div className='mt-4 flex-shrink-0 sm:mt-0 py-6 pl-6 border-l border-gray-200'>
                              <div className='flex overflow-hidden'>
                                <p>{repo.created_at.slice(0, 10)}</p>
                              </div>
                            </div> */}
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
