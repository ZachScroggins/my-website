import Link from 'next/link';
import React from 'react';
import { FiMail } from 'react-icons/fi';

export default function Hero() {
  return (
    <React.Fragment>
      <section className="relative bg-gray-100 dark:bg-gray-900">
        <div className="lg:relative">
          <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-32 lg:text-left">
            <div className="px-4 sm:px-6 lg:w-1/2">
              <h1 className="text-center text-4xl font-extrabold tracking-tight text-gray-800 sm:text-5xl md:text-6xl lg:text-left lg:text-5xl xl:text-6xl dark:text-white">
                <span className="block xl:inline">Zach Scroggins</span>{' '}
                <span className="mt-2 block bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-3xl text-transparent md:mt-3 lg:mt-4">
                  Full Stack JavaScript / TypeScript Developer
                </span>
              </h1>
              <p className="mx-auto mt-3 text-center text-lg text-gray-700 sm:text-xl md:mt-5 lg:text-left dark:text-gray-300">
                I&apos;m a web developer with a passion for creating exceptional, one-of-a-kind user
                experiences, leveraging cutting-edge technologies for better performance, higher
                security, and superior scalability.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    href="/#portfolio"
                    className="flex w-full items-center justify-center rounded-md bg-linear-to-r from-green-400 to-blue-500 px-8 py-3.5 text-base font-bold text-white filter hover:brightness-110 md:px-10 md:py-5 md:text-lg"
                  >
                    Check out my work
                  </Link>
                </div>
                <Link
                  href="/#contact"
                  className="mt-3 flex items-center justify-center rounded-md bg-linear-to-r from-green-400 to-blue-500 p-px sm:mt-0 sm:ml-3"
                >
                  <span className="dark:hover:bg-opacity-95 flex h-full w-full items-center justify-center rounded-md bg-gray-50 px-8 py-3 text-base font-bold hover:bg-white md:px-10 md:py-4 md:text-lg dark:bg-gray-900">
                    <FiMail className="mr-2 inline text-green-400" />
                    <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                      Get in touch
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="h-full w-full lg:hidden">
            <img
              src="/images/web-dev-mobile.png"
              alt="Web development graphic"
              width={1280}
              height={1049}
            />
          </div>
          <div className="relative hidden h-80 w-full bg-gray-900 sm:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:h-full lg:w-1/2 lg:rounded-bl-3xl">
            <img
              src="/images/web-dev-mobile.png"
              alt="Web development graphic"
              width={1280}
              height={1049}
              className="absolute inset-0 h-full w-full max-w-7xl bg-gray-900 object-cover object-top lg:rounded-bl-3xl lg:object-top-left xl:object-contain"
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
