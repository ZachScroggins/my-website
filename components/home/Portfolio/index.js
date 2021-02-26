import React from 'react';

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

  console.log(theRest);

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
                  className='flex flex-col rounded-lg shadow-lg overflow-hidden'
                  key={repo.id}
                >
                  <div className='flex-shrink-0'>
                    <img
                      className='h-48 w-full object-cover'
                      // src={`https://raw.githubusercontent.com/ZachScroggins/${repo.name}/${repo.default_branch}/screenshot.png`}
                      src='https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=jjcbxallJd&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
                    />
                  </div>
                  <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                    <div className='flex-1'>
                      <p className='text-sm font-medium text-cyan-600'>
                        <a href='#' className='hover:underline'>
                          Article
                        </a>
                      </p>
                      <a href='#' className='block mt-2'>
                        <p className='text-xl font-semibold text-gray-900'>
                          {repo.name}
                        </p>
                        <p className='mt-3 text-base text-gray-500'>
                          {repo.description}
                        </p>
                      </a>
                    </div>
                    <div className='mt-6 flex items-center'>
                      <div className='flex-shrink-0'>
                        <a href='#'>
                          <span className='sr-only'>Roel Aufderehar</span>
                          <img
                            className='h-10 w-10 rounded-full'
                            src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=jjcbxallJd&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                          />
                        </a>
                      </div>
                      <div className='ml-3'>
                        <p className='text-sm font-medium text-gray-900'>
                          <a href='#' className='hover:underline'>
                            Roel Aufderehar
                          </a>
                        </p>
                        <div className='flex space-x-1 text-sm text-gray-500'>
                          <time dateTime='2020-03-16'>Mar 16, 2020</time>
                          <span aria-hidden='true'>·</span>
                          <span>6 min read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
