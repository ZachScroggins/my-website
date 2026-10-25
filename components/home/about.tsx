import { FiDownload } from 'react-icons/fi';

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-25 bg-linear-to-r from-green-400 to-blue-500 pb-16 lg:relative lg:z-10 lg:pb-0"
    >
      <h2 className="sr-only">About me</h2>
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-6">
        <div className="relative lg:-my-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1/2 bg-muted lg:hidden dark:bg-background"
          />
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
            <div className="overflow-hidden rounded-xl shadow-xl lg:h-full">
              <img
                src="/images/profile-pic.jpg"
                alt="Zach Scroggins profile picture"
                width={2778}
                height={3023}
                loading="lazy"
                className="relative object-cover lg:h-full lg:w-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
            <blockquote>
              <p className="mt-6 text-2xl font-medium text-white lg:mt-0">
                I love building websites and web apps with cutting edge technologies. I specialize
                in JavaScript and have the most experience working with React and Node. I really
                enjoy the JAMstack, but I am also proficient with the LAMP stack, Python, Java, C#,
                and C++.
              </p>
              <footer className="mt-6 text-base font-medium">
                <p className="text-white">Zach Scroggins</p>
                <p className="text-cyan-100">Full Stack Web Developer</p>
              </footer>
            </blockquote>
            <a
              href="/Zach-Scroggins-Resume.pdf"
              target="_blank"
              rel="noopener"
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-cyan-100 p-2 font-medium text-cyan-50 hover:border-white hover:text-white hover:brightness-110"
            >
              <FiDownload aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
