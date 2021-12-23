import { useState } from 'react'
import {
  FiArrowRight,
  FiCode,
  FiNavigation,
  FiServer,
  FiZap
} from 'react-icons/fi'

const isFeatured = repo => {
  return repo.id === 266747152 || repo.id === 342325181 || repo.id === 427423678
}

const isNotFeatured = repo => {
  return !(
    repo.id === 266747152 ||
    repo.id === 342325181 ||
    repo.id === 427423678
  )
}

const Portfolio = ({ repos }) => {
  const [allProjectsShowing, setAllProjectsShowing] = useState(false)
  const featured = repos.filter(isFeatured)
  const theRest: any[] = repos.filter(isNotFeatured)
  theRest.push(theRest.splice(3, 1)[0])
  theRest.push(theRest.splice(3, 1)[0])

  return (
    <section className='mb-16 bg-gray-100 dark:bg-gray-900'>
      <div className='relative pt-16 lg:pt-24'>
        <div className='max-w-md px-4 mx-auto text-center sm:px-6 sm:max-w-3xl lg:max-w-7xl'>
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
            <h3 className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl'>
              <a href='https://paulitacarlotta.com' className='hover:underline'>
                PaulitaCarlotta.com
              </a>
            </h3>
            <p className='mx-auto mt-5 text-xl text-gray-700 dark:text-gray-300 max-w-prose'>
              E-commerce store for women's fashion and jewelry. Blog with
              headless content management system integration. Deployed globally
              across a blazing fast CDN, Google Cloud, and Amazon Web Services.
            </p>
            <div className='flex justify-center mt-5'>
              <div className='mt-3 sm:mt-0'>
                <a
                  href='https://paulitacarlotta.com'
                  className='block w-full px-4 py-3 font-medium text-white rounded-md shadow bg-gradient-to-r from-green-400 to-blue-500 filter hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900'
                >
                  Visit the site
                </a>
              </div>
            </div>
          </div>
          <div className='mt-12 -mx-6'>
            <img
              src='/images/pc-mockup.png'
              alt='Paulita Carlotta Website Mockup Image'
              width={2048}
              height={929}
              loading='lazy'
            />
          </div>
          <div className='grid pb-12 mt-12 lg:grid-cols-2'>
            <div className='relative mb-12 text-left lg:pr-16'>
              <h4 className='text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-3xl'>
                Next Generation E-commerce
              </h4>
              <p className='mt-3 text-lg text-gray-700 dark:text-gray-300'>
                Headless e-commerce with the BigCommerce API decouples the
                frontend application from the e-commerce platform, enabling a
                highly customized end-user experience while maintaining seamless
                order and inventory management through the BigCommerce
                dashboard.
              </p>
              <dl className='mt-8 space-y-10'>
                <div className='relative'>
                  <dt>
                    <div className='absolute flex items-center justify-center w-12 h-12 text-white rounded-md bg-gradient-to-r from-green-400 to-blue-500'>
                      <FiZap className='w-6 h-6' aria-hidden='true' />
                    </div>
                    <h5 className='ml-16 text-lg font-semibold leading-6 text-gray-900 dark:text-white'>
                      Dynamic Data | Static Speed
                    </h5>
                  </dt>
                  <dd className='mt-2 ml-16 text-base text-gray-700 dark:text-gray-300'>
                    Statically-generated React app with Incremental Static
                    Regeneration. Instant page transitions without sacrificing
                    search engine optimization.
                  </dd>
                </div>
                <div className='relative'>
                  <dt>
                    <div className='absolute flex items-center justify-center w-12 h-12 text-white rounded-md bg-gradient-to-r from-green-400 to-blue-500'>
                      <FiServer className='w-6 h-6' aria-hidden='true' />
                    </div>
                    <h5 className='ml-16 text-lg font-semibold leading-6 text-gray-900 dark:text-white'>
                      Highly Scalable Infrastructure
                    </h5>
                  </dt>
                  <dd className='mt-2 ml-16 text-base text-gray-700 dark:text-gray-300'>
                    Serverless Node.js REST API with microservices architecture
                    provides user authentication and communicates securely with
                    BigCommerce API.
                  </dd>
                </div>
              </dl>
            </div>
            <img
              src='/images/paulita-carlotta-fine-jewelry.png'
              alt='Paulita Carlotta Website Screenshot'
              width={2096}
              height={1721}
              loading='lazy'
            />
          </div>
        </div>
      </div>
      <div className='relative py-8'>
        <div className='relative'>
          <div className='max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl'>
            <h3 className='mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                Featured Projects
              </span>
            </h3>
            <p className='mx-auto mt-5 text-xl text-gray-700 dark:text-gray-300 max-w-prose'>
              Websites and web apps I have put considerable time and effort
              into. For me, web development is more than just a hobby. It's a
              passion.
            </p>
          </div>
          <div className='grid max-w-md gap-8 px-4 mx-auto mt-12 sm:max-w-lg sm:px-6 lg:grid-cols-3 lg:max-w-7xl'>
            {featured.map(repo => {
              return (
                <div
                  key={repo.id}
                  className='flex flex-col border border-transparent rounded-lg shadow-lg cursor-pointer dark:border-gray-700 filter dark:hover:drop-shadow-2xl hover:shadow-2xl focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-teal-400'
                >
                  <a
                    href={repo.id === 342325181 ? repo.html_url : repo.homepage}
                    className='overflow-hidden bg-white rounded-t-lg dark:bg-gray-900 h-96'
                  >
                    <div className='flex-shrink-0 rounded-t-lg'>
                      <img
                        src={`https://raw.githubusercontent.com/ZachScroggins/${repo.name}/${repo.default_branch}/public/images/og-image.png`}
                        alt={`${repo.name} screenshot`}
                        width={1200}
                        height={630}
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
                  <div
                    className={`flex bg-white border-t border-gray-200 divide-gray-200 rounded-b-lg dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-900 ${
                      repo.id === 342325181 ? '' : 'divide-x'
                    }`}
                  >
                    <div
                      className={`flex flex-1 w-0 rounded-bl-lg ${
                        repo.id === 342325181 ? 'hidden' : ''
                      }`}
                    >
                      <a
                        href={repo.homepage}
                        className='relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 rounded-bl-lg dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400'
                      >
                        <FiNavigation className='inline text-lg align-middle' />
                        <span className='ml-3'>Visit site</span>
                      </a>
                    </div>
                    <div
                      className={`flex flex-1 w-0  ${
                        repo.id === 342325181 ? 'rounded-b-lg' : ''
                      }`}
                    >
                      <a
                        href={repo.html_url}
                        className={`${
                          repo.id === 342325181 ? 'rounded-bl-lg' : ''
                        } relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 rounded-br-lg dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400`}
                      >
                        <FiCode className='inline text-lg align-middle' />
                        <span className='ml-3'>View code</span>
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='my-16 text-center'>
            <h3 className='mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                Other Work
              </span>
            </h3>
            <p className='px-4 mx-auto mt-5 text-xl text-gray-700 dark:text-gray-300 sm:px-8 lg:px-0 max-w-prose'>
              Programs, websites, and apps, written in a variety of languages.
              I'm constantly improving my skills and enjoy learning new
              technologies through firsthand experience.
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
                              <p className='mt-2 text-gray-500 dark:text-gray-300'>
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
                  )
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
                      )
                    })}
                  </>
                )}
              </ul>
            </div>
            {!allProjectsShowing && (
              <div className='mt-6'>
                <button
                  type='button'
                  className='flex items-center justify-center w-full px-4 py-3 font-medium text-white rounded-md shadow-sm filter hover:brightness-110 bg-clip-border bg-gradient-to-r from-green-400 to-blue-500'
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
  )
}

export default Portfolio
