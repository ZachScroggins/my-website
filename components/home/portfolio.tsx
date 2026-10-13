'use client';

import { Repo, Repos } from '@/lib/types';
import { useState } from 'react';
import { FiCode, FiNavigation, FiServer, FiZap } from 'react-icons/fi';

const isFeatured = (repo: Repo) => {
  return repo.id === 266747152 || repo.id === 342325181 || repo.id === 427423678;
};

const isNotFeatured = (repo: Repo) => {
  return !(
    repo.id === 266747152 ||
    repo.id === 342325181 ||
    repo.id === 427423678 ||
    repo.id === 776368685
  );
};

export default function Portfolio({ repos }: { repos: Repos }) {
  const [allProjectsShowing, setAllProjectsShowing] = useState(false);
  const featured = repos.filter(isFeatured);
  const theRest: Repos = repos.filter(isNotFeatured);
  theRest.push(theRest.splice(3, 1)[0]);
  theRest.push(theRest.splice(3, 1)[0]);

  return (
    <section className="mb-16 bg-gray-100 dark:bg-gray-900">
      <div className="relative pt-16 lg:pt-24">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl">
          <div>
            <h2
              id="portfolio"
              className="mb-10 block text-6xl font-extrabold tracking-tight text-transparent sm:text-8xl lg:mb-16 xl:text-8xl"
              style={{ scrollMarginTop: '100px' }}
            >
              <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h2>
            <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              <a href="https://paulitacarlotta.com" className="hover:underline">
                PaulitaCarlotta.com
              </a>
            </h3>
            <p className="mx-auto mt-5 max-w-prose text-xl text-gray-700 dark:text-gray-300">
              E-commerce store for women&apos;s fashion and jewelry. Blog with headless content
              management system integration. Deployed globally across a blazing fast CDN, Google
              Cloud, and Amazon Web Services.
            </p>
            <div className="mt-5 flex justify-center">
              <div className="mt-3 sm:mt-0">
                <a
                  href="https://paulitacarlotta.com"
                  className="block w-full rounded-md bg-linear-to-r from-green-400 to-blue-500 px-4 py-3 font-medium text-white shadow filter hover:brightness-110 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
                >
                  Visit the site
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <img
              src="/images/pc-mockup.png"
              alt="Paulita Carlotta Website Mockup Image"
              width={2048}
              height={929}
              loading="lazy"
            />
          </div>
          <div className="mt-12 grid pb-12 lg:grid-cols-2">
            <div className="relative mb-12 text-left lg:pr-16">
              <h4 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
                Next Generation E-commerce
              </h4>
              <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
                Headless e-commerce with the BigCommerce API decouples the frontend application from
                the e-commerce platform, enabling a highly customized end-user experience while
                maintaining seamless order and inventory management through the BigCommerce
                dashboard.
              </p>
              <dl className="mt-8 space-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-linear-to-r from-green-400 to-blue-500 text-white">
                      <FiZap className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h5 className="ml-16 text-lg leading-6 font-semibold text-gray-900 dark:text-white">
                      Dynamic Data | Static Speed
                    </h5>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-700 dark:text-gray-300">
                    Statically-generated React app with Incremental Static Regeneration. Instant
                    page transitions without sacrificing search engine optimization.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-linear-to-r from-green-400 to-blue-500 text-white">
                      <FiServer className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h5 className="ml-16 text-lg leading-6 font-semibold text-gray-900 dark:text-white">
                      Highly Scalable Infrastructure
                    </h5>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-700 dark:text-gray-300">
                    Serverless Node.js REST API with microservices architecture provides user
                    authentication and communicates securely with BigCommerce API.
                  </dd>
                </div>
              </dl>
            </div>
            <img
              src="/images/paulita-carlotta-fine-jewelry.png"
              alt="Paulita Carlotta Website Screenshot"
              width={2096}
              height={1721}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="relative py-8">
        <div className="relative">
          <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl">
            <h3 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h3>
            <p className="mx-auto mt-5 max-w-prose text-xl text-gray-700 dark:text-gray-300">
              Websites and web apps I have put considerable time and effort into. For me, web
              development is more than just a hobby. It&apos;s a passion.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-md gap-8 px-4 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:grid-cols-3">
            {featured.map((repo) => {
              return (
                <div
                  key={repo.id}
                  className="flex cursor-pointer flex-col rounded-lg border border-transparent shadow-lg filter focus-within:ring-2 focus-within:ring-teal-400 focus-within:ring-offset-2 hover:shadow-2xl dark:border-gray-700 dark:hover:drop-shadow-2xl"
                >
                  <a
                    href={repo.id === 342325181 ? repo.html_url : `${repo.homepage}`}
                    className="h-96 overflow-hidden rounded-t-lg bg-white dark:bg-gray-900"
                  >
                    <div className="shrink-0 rounded-t-lg">
                      <img
                        src={`https://raw.githubusercontent.com/ZachScroggins/${repo.name}/${repo.default_branch}/public/images/og-image.png`}
                        alt={`${repo.name} screenshot`}
                        width={1200}
                        height={630}
                        loading="lazy"
                        className="h-48 w-full rounded-t-lg object-cover object-top"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between bg-white p-6 dark:bg-gray-900">
                      <div className="flex-1">
                        <div className="mt-2">
                          <p className="text-sm font-medium text-cyan-700 dark:text-green-400">
                            {repo.language || 'TypeScript'}
                          </p>
                          <p className="truncate text-xl font-semibold text-gray-900 hover:underline dark:text-gray-100">
                            {repo.name}
                          </p>
                          <p className="mt-3 line-clamp-3 text-base text-gray-500 dark:text-gray-300">
                            {repo.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div
                    className={`flex divide-gray-200 rounded-b-lg border-t border-gray-200 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-900 ${
                      repo.id === 342325181 ? '' : 'divide-x'
                    }`}
                  >
                    <div
                      className={`flex w-0 flex-1 rounded-bl-lg ${
                        repo.id === 342325181 ? 'hidden' : ''
                      }`}
                    >
                      <a
                        href={`${repo.homepage}`}
                        className="relative inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg py-4 text-sm font-medium text-gray-700 hover:text-gray-500 focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        <FiNavigation className="inline align-middle text-lg" />
                        <span className="ml-3">Visit site</span>
                      </a>
                    </div>
                    <div
                      className={`flex w-0 flex-1 ${repo.id === 342325181 ? 'rounded-b-lg' : ''}`}
                    >
                      <a
                        href={repo.html_url}
                        className={`${
                          repo.id === 342325181 ? 'rounded-bl-lg' : ''
                        } relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg py-4 text-sm font-medium text-gray-700 hover:text-gray-500 focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100`}
                      >
                        <FiCode className="inline align-middle text-lg" />
                        <span className="ml-3">View code</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="my-16 text-center">
            <h3 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Other Work
              </span>
            </h3>
            <p className="mx-auto mt-5 max-w-prose px-4 text-xl text-gray-700 sm:px-8 lg:px-0 dark:text-gray-300">
              Programs, websites, and apps, written in a variety of languages. I&apos;m constantly
              improving my skills and enjoy learning new technologies through firsthand experience.
            </p>
          </div>
          <div className="mx-auto max-w-5xl px-4 xl:px-0">
            <div className="overflow-hidden rounded-lg bg-white shadow dark:rounded-none">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {theRest.slice(0, 6).map((repo) => {
                  return (
                    <li key={repo.id}>
                      <a href={repo.html_url} className="block hover:bg-gray-50 dark:bg-gray-900">
                        <div className="flex items-center px-4 py-4 sm:px-6">
                          <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                            <div>
                              <div className="flex truncate text-sm font-medium text-green-400">
                                {repo.language}
                              </div>
                              <div className="mt-2 text-lg font-bold text-gray-900 dark:text-gray-100">
                                {repo.name}
                              </div>
                              <p className="mt-2 text-gray-500 dark:text-gray-300">
                                {repo.description}
                              </p>
                            </div>
                          </div>
                          <div className="ml-5 shrink-0">
                            <svg
                              className="h-5 w-5 text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
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
                    {theRest.slice(6).map((repo) => {
                      return (
                        <li key={repo.id}>
                          <a
                            href={repo.html_url}
                            className="block hover:bg-gray-50 dark:bg-gray-900"
                          >
                            <div className="flex items-center px-4 py-4 sm:px-6">
                              <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                                <div>
                                  <div className="flex truncate text-sm font-medium text-green-400">
                                    {repo.language}
                                  </div>
                                  <div className="mt-2 text-lg font-bold text-gray-900 dark:text-gray-100">
                                    {repo.name}
                                  </div>
                                  <p className="mt-2 text-gray-800 dark:text-gray-300">
                                    {repo.description}
                                  </p>
                                </div>
                              </div>
                              <div className="ml-5 shrink-0">
                                <svg
                                  className="h-5 w-5 text-gray-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
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
              <div className="mt-6">
                <button
                  type="button"
                  className="flex w-full items-center justify-center rounded-md bg-linear-to-r from-green-400 to-blue-500 bg-clip-border px-4 py-3 font-medium text-white shadow-sm filter hover:brightness-110"
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
}
