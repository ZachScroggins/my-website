import Link from 'next/link';
import { FiMail } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="relative bg-muted dark:bg-background">
      <div className="mx-auto max-w-7xl pt-16 pb-20 text-center lg:py-32 lg:text-left">
        <div className="px-4 sm:px-6 lg:w-1/2">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-800 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl dark:text-white">
            <span className="block xl:inline">Zach Scroggins</span>{' '}
            <span className="mt-2 block bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-3xl text-transparent md:mt-3 lg:mt-4">
              Full Stack JavaScript / TypeScript Developer
            </span>
          </h1>
          <p className="mt-3 text-lg text-muted-foreground sm:text-xl md:mt-5">
            I&apos;m a web developer with a passion for creating exceptional, one-of-a-kind user
            experiences, leveraging cutting-edge technologies for better performance, higher
            security, and superior scalability.
          </p>
          <div className="mt-10 grid gap-3 sm:flex sm:justify-center lg:justify-start">
            <Link
              href="/#portfolio"
              className="flex items-center justify-center rounded-md bg-linear-to-r from-green-400 to-blue-500 px-8 py-3.5 text-base font-bold text-white shadow-sm hover:brightness-110 md:px-10 md:py-5 md:text-lg"
            >
              Check out my work
            </Link>
            <Link
              href="/#contact"
              className="flex rounded-md bg-linear-to-r from-green-400 to-blue-500 p-px"
            >
              <span className="flex grow items-center justify-center gap-2 rounded-md bg-gray-50 px-8 py-3 text-base font-bold hover:bg-white md:px-10 md:py-4 md:text-lg dark:bg-background">
                <FiMail className="text-green-400" aria-hidden="true" />
                <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  Get in touch
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:rounded-bl-3xl lg:bg-gray-900">
        <img
          src="/images/web-dev-mobile.png"
          alt="Web development graphic"
          width={1280}
          height={1049}
          className="w-full lg:absolute lg:inset-0 lg:h-full lg:max-w-7xl lg:rounded-bl-3xl lg:object-cover lg:object-top-left xl:object-contain"
        />
      </div>
    </section>
  );
}
