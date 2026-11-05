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
            {/* lg+: natural height, capped to the viewport, and sticky below the h-16 header. */}
            <div className="overflow-hidden rounded-xl shadow-xl lg:sticky lg:top-24">
              <img
                src="/images/profile-pic.jpg"
                alt="Zach Scroggins profile picture"
                width={2778}
                height={3023}
                loading="lazy"
                className="relative w-full object-cover lg:max-h-[calc(100dvh-8rem)]"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
            <p className="mt-6 text-2xl font-medium text-white text-shadow-sm text-shadow-gray-900/30 lg:mt-0">
              I&apos;m a full-stack TypeScript engineer who cares about both the details people see
              and the systems they don&apos;t, and AI is part of how I do both.
            </p>
            <div className="mt-6 space-y-4 text-lg text-white text-shadow-sm text-shadow-gray-900/30">
              <p>
                At Lumeris, a healthcare technology company, I went from Software Engineer to Senior
                in a year. I co-led an AI application that worked alongside physicians&apos; medical
                records to surface patient information that might otherwise be missed, built with
                OCR, LLMs on AWS Bedrock and a Pinecone vector database. I was also lead developer
                of the company&apos;s internal generative AI app on Azure OpenAI, led the front-end
                framework evaluation that moved new apps from Angular to SvelteKit, and was
                hand-picked by an application architect to migrate the main revenue-generating,
                business-critical analytics database to AWS.
              </p>
              <p>
                I use AI every day, not just in what I build. Claude Code is my pair programmer: I
                plan the work, give it current docs, skills and MCP servers, then review every
                change and check it in a real browser before it ships. I also run local models, so I
                know what each tool is good at and where it falls short. This site&apos;s blog was
                built that way.
              </p>
              <p>
                Since 2025 I&apos;ve pursued some startup ideas, stayed up to date with the latest
                technologies and AI, and put that knowledge to use on a number of personal projects.
                I got my start at community college, freelancing as a web developer, and as web
                development officer for the UNT Computer Science Club. I live in the
                Dallas&ndash;Fort Worth area, and outside of work I keep a small home server running
                on a Raspberry Pi and tinker with my Neovim setup, despite using VS Code as my
                primary editor 😅
              </p>
            </div>
            <div className="mt-6 text-base font-medium">
              <p className="text-white">Zach Scroggins</p>
              <p className="text-cyan-100">Senior Full Stack TypeScript Engineer</p>
            </div>
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
