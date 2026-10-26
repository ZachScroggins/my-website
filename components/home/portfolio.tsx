import LumerisLogo from '@/components/lumeris-logo';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import {
  BIG_AGI_REPO_ID,
  MY_WEBSITE_REPO_ID,
  NASA_API_EXPLORER_REPO_ID,
  UNT_CSCE_CLUB_REPO_ID,
} from '@/lib/constants';
import type { Repo } from '@/lib/types';
import { cn } from '@/lib/utils';
import { FiCode, FiNavigation, FiServer, FiZap } from 'react-icons/fi';
import OtherWork from './other-work';

const lumerisJobs = [
  {
    title: 'Senior Software Engineer',
    accomplishments: [
      {
        text: 'Co-led AI value based care Windows application development - OCR + LLM via AWS Textract & Bedrock with embeddings stored in Pinecone vector database, confidence score calibration, and prompt engineering',
        tags: ['AWS Textract', 'AWS Bedrock', 'Pinecone', 'Electron'],
      },
      {
        text: 'Created internal component library shared across SvelteKit / Electron / Vue',
        tags: ['SvelteKit', 'Electron', 'Vue'],
      },
      {
        text: 'Led development of internal ChatGPT with Azure OpenAI API',
        tags: ['Azure OpenAI', 'SvelteKit'],
      },
      {
        text: 'Modernized customer support database dashboard',
        tags: ['AWS RDS', 'SvelteKit', 'SQL Server'],
      },
      {
        text: 'Created internal RDS management dashboard',
        tags: ['AWS RDS', 'SvelteKit', 'SQL Server'],
      },
      {
        text: 'Created IAC template for SvelteKit deployment on AWS Lambda / S3',
        tags: [
          'SvelteKit',
          'AWS Lambda',
          'AWS S3',
          'AWS CloudFormation',
          'AWS CloudFront',
          'AWS CloudFront Functions',
        ],
      },
      {
        text: 'Led evaluation / overhaul of front-end tech stack from Angular to SvelteKit',
        tags: ['Angular', 'SvelteKit', 'Next.js', 'React', 'Vue'],
      },
    ],
  },
  {
    title: 'Software Engineer',
    accomplishments: [
      {
        text: 'Prototype real-time analytics engine with on AWS Kinesis / Lambda / HealthLake - fully managed, HIPAA-eligible service that stores, transforms, and analyzes healthcare data using the Fast Healthcare Interoperability Resources (FHIR R4) standard',
        tags: ['AWS Kinesis', 'AWS Lambda', 'AWS HealthLake', 'FHIR R4'],
      },
      {
        text: 'Co-led AWS migration of primary analytics engine to AWS RDS',
        tags: ['AWS RDS', 'AWS CloudFormation', 'SQL Server'],
      },
      {
        text: 'Led AWS migration of public document service, 10000+ documents, setting the example for how to use AWS Lambda@Edge with CloudFront CDN',
        tags: ['AWS Lambda@Edge', 'AWS CloudFront'],
      },
    ],
  },
];

const FEATURED_REPO_IDS = new Set<Repo['id']>([
  MY_WEBSITE_REPO_ID,
  NASA_API_EXPLORER_REPO_ID,
  UNT_CSCE_CLUB_REPO_ID,
]);

const features = [
  {
    Icon: FiZap,
    title: 'Dynamic Data | Static Speed',
    description:
      'Statically-generated React app with Incremental Static Regeneration. Instant page transitions without sacrificing search engine optimization.',
  },
  {
    Icon: FiServer,
    title: 'Highly Scalable Infrastructure',
    description:
      'Serverless Node.js REST API with microservices architecture provides user authentication and communicates securely with BigCommerce API.',
  },
];

const footerLinkClass =
  'inline-flex flex-1 items-center justify-center gap-3 py-4 text-sm font-medium text-gray-700 first:rounded-bl-lg last:rounded-br-lg hover:text-gray-500 focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:outline-hidden dark:text-gray-400 dark:hover:text-gray-100';

function FeaturedProject({ repo }: { repo: Repo }) {
  const isMine = repo.id === MY_WEBSITE_REPO_ID;
  const homepage = repo.homepage ?? repo.html_url;

  return (
    <li className="flex cursor-pointer flex-col rounded-lg border border-transparent shadow-lg focus-within:ring-2 focus-within:ring-teal-400 focus-within:ring-offset-2 hover:shadow-2xl dark:border-border dark:hover:drop-shadow-2xl">
      <a
        href={isMine ? repo.html_url : homepage}
        target="_blank"
        rel="noopener"
        className="h-96 overflow-hidden rounded-t-lg bg-background"
      >
        <img
          src={
            isMine
              ? '/opengraph-image.png'
              : `https://raw.githubusercontent.com/ZachScroggins/${repo.name}/${repo.default_branch}/public/images/og-image.png`
          }
          alt={`${repo.name} screenshot`}
          width={1200}
          height={630}
          loading="lazy"
          className="h-48 w-full rounded-t-lg object-cover object-top"
        />
        <div className="p-6 pt-8">
          <p className="text-sm font-medium text-cyan-700 dark:text-green-400">
            {repo.language || 'TypeScript'}
          </p>
          <h4 className="truncate text-xl font-semibold text-foreground hover:underline">
            {repo.name}
          </h4>
          <p className="mt-3 line-clamp-3 text-base text-gray-500 dark:text-muted-foreground">
            {repo.description}
          </p>
        </div>
      </a>
      <div className="flex divide-x divide-border rounded-b-lg border-t bg-background">
        {!isMine && (
          <a href={homepage} target="_blank" rel="noopener" className={footerLinkClass}>
            <FiNavigation className="text-lg" aria-hidden="true" />
            Visit site
          </a>
        )}
        <a href={repo.html_url} target="_blank" rel="noopener" className={footerLinkClass}>
          <FiCode className="text-lg" aria-hidden="true" />
          View code
        </a>
      </div>
    </li>
  );
}

export default function Portfolio({ repos }: { repos: Repo[] }) {
  const featured = repos.filter((repo) => FEATURED_REPO_IDS.has(repo.id)).reverse();
  const others = repos.filter(
    (repo) => !FEATURED_REPO_IDS.has(repo.id) && repo.id !== BIG_AGI_REPO_ID
  );
  // Move the 4th and 5th repos to the end of the list
  others.push(...others.splice(3, 2));

  return (
    <section className="mb-16 bg-muted dark:bg-background">
      <div className="mx-auto max-w-md px-4 pt-16 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:pt-24">
        <h2
          id="portfolio"
          className="mx-auto mb-10 w-fit scroll-mt-25 bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent sm:text-8xl lg:mb-16"
        >
          Portfolio
        </h2>
        <h3 className="mt-2 flex items-center gap-4 justify-center text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          <LumerisLogo className="size-9 -ml-8 sm:size-12 inline" />
          <span>Lumeris</span>
        </h3>
        <p className="mx-auto mt-5 max-w-prose text-xl text-muted-foreground">
          A healthcare technology and services company that helps health systems, payers, and
          physician groups transition to{' '}
          <Tooltip>
            <TooltipTrigger className="font-bold text-gray-700 dark:text-gray-200">
              value-based care
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-base font-semibold">
                A healthcare delivery and payment model that ties provider compensation to patient
                health outcomes, quality of care, and cost efficiency, rather than the sheer volume
                of services provided.
              </p>
            </TooltipContent>
          </Tooltip>
          .
        </p>
        <div className="pb-12 pt-8 text-left">
          {lumerisJobs.map((job, jobIdx) => (
            <div key={jobIdx}>
              <h4 className="text-2xl pt-6 sm:text-3xl font-extrabold">{job.title}</h4>
              <ul role="list" className="space-y-3 pt-4">
                {job.accomplishments.map((accomplishment, accomplishmentIdx) => (
                  <li key={accomplishmentIdx} className="relative flex gap-x-4">
                    <div
                      className={cn(
                        accomplishmentIdx === job.accomplishments.length - 1 ? 'h-6' : '-bottom-6',
                        'absolute top-0 left-0 flex w-6 justify-center'
                      )}
                    >
                      <div className="w-px bg-gray-300 dark:bg-white/15" />
                    </div>
                    <div className="relative flex size-6 flex-none items-center justify-center bg-secondary dark:bg-background">
                      <div className="size-1.5 rounded-full bg-gray-200 ring ring-gray-400 dark:bg-white/10 dark:ring-white/20" />
                    </div>
                    <div>
                      <p className="font-medium text-lg text-muted-foreground">
                        {accomplishment.text}
                      </p>
                      <ul role="list" className="mt-2 flex flex-wrap gap-1.5">
                        {accomplishment.tags.map((tag) => (
                          <li
                            key={tag}
                            className="flex rounded-4xl bg-linear-to-r from-green-400/60 to-blue-500/60 p-px"
                          >
                            <Badge
                              variant="ghost"
                              className="h-auto rounded-[calc(var(--radius-4xl)-1px)] border-0 bg-muted py-0.5 dark:bg-background"
                            >
                              {tag}
                            </Badge>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          <a href="https://paulitacarlotta.com" className="hover:underline">
            PaulitaCarlotta.com
          </a>
        </h3>
        <p className="mx-auto mt-5 max-w-prose text-xl text-muted-foreground">
          E-commerce store for women&apos;s fashion and jewelry. Blog with headless content
          management system integration. Deployed globally across a blazing fast CDN, Google Cloud,
          and Amazon Web Services.
        </p>
        <a
          href="https://paulitacarlotta.com"
          className="mx-auto mt-8 block w-fit rounded-md bg-linear-to-r from-green-400 to-blue-500 px-4 py-3 font-medium text-white shadow-sm hover:brightness-110 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-hidden sm:mt-5"
        >
          Visit the site
        </a>
        <img
          src="/images/pc-mockup.png"
          alt="Paulita Carlotta website mockup"
          width={2048}
          height={929}
          loading="lazy"
          className="mt-12"
        />
        <div className="mt-12 grid pb-12 lg:grid-cols-2">
          <div className="mb-12 text-left lg:pr-16">
            <h4 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Next Generation E-commerce
            </h4>
            <p className="mt-3 text-lg text-muted-foreground">
              Headless e-commerce with the BigCommerce API decouples the frontend application from
              the e-commerce platform, enabling a highly customized end-user experience while
              maintaining seamless order and inventory management through the BigCommerce dashboard.
            </p>
            <ul className="mt-8 space-y-10">
              {features.map(({ Icon, title, description }) => (
                <li key={title} className="relative pl-16">
                  <div className="absolute top-0 left-0 flex size-12 items-center justify-center rounded-md bg-linear-to-r from-green-400 to-blue-500 text-white">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <h5 className="text-lg/6 font-semibold text-foreground">{title}</h5>
                  <p className="mt-2 text-base text-muted-foreground">{description}</p>
                </li>
              ))}
            </ul>
          </div>
          <img
            src="/images/paulita-carlotta-fine-jewelry.png"
            alt="Paulita Carlotta website screenshot"
            width={2096}
            height={1721}
            loading="lazy"
          />
        </div>
      </div>
      <div className="py-8">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl">
          <h3 className="mx-auto mt-2 w-fit bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
            Featured Projects
          </h3>
          <p className="mx-auto mt-5 max-w-prose text-xl text-muted-foreground">
            Websites and web apps I have put considerable time and effort into. For me, web
            development is more than just a hobby. It&apos;s a passion.
          </p>
        </div>
        <ul className="mx-auto mt-12 grid max-w-md gap-8 px-4 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:grid-cols-3">
          {featured.map((repo) => (
            <FeaturedProject key={repo.id} repo={repo} />
          ))}
        </ul>
        <div className="my-16 text-center">
          <h3 className="mx-auto mt-2 w-fit bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
            Other Work
          </h3>
          <p className="mx-auto mt-5 max-w-prose px-4 text-xl text-muted-foreground sm:px-8 lg:px-0">
            Programs, websites, and apps, written in a variety of languages. I&apos;m constantly
            improving my skills and enjoy learning new technologies through firsthand experience.
          </p>
        </div>
        <OtherWork
          repos={others.map(({ id, html_url, language, name, description }) => ({
            id,
            html_url,
            language,
            name,
            description,
          }))}
        />
      </div>
    </section>
  );
}
