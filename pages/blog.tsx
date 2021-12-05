import Link from 'next/link'
import { InferGetStaticPropsType } from 'next'
import { sanityClient } from 'lib/sanity'
import { format, parseISO } from 'date-fns'
import { FiArrowRight } from 'react-icons/fi'

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <main className='min-h-screen'>
        <div className='pb-28'>
          <div className='overflow-hidden bg-gray-900 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800'>
            <header className='max-w-md px-4 pb-12 mx-auto pt-28 sm:max-w-3xl lg:max-w-7xl sm:px-6'>
              <h1 className='text-4xl font-extrabold leading-10 md:text-5xl lg:text-6xl'>
                <span className='py-px -ml-1 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                  Over Engineered
                </span>
              </h1>
              <div className='mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center'>
                <p className='text-xl text-gray-300'>
                  A blog about my experiences with web development and tech
                </p>
              </div>
            </header>
            <svg
              preserveAspectRatio='none'
              width='1440'
              height='74'
              viewBox='0 0 1440 74'
              className='text-gray-100 fill-current w-[650px] sm:w-full dark:text-gray-900'
            >
              <path d='M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z'></path>
            </svg>
          </div>
          <section className='px-4 pt-4 mx-auto md:pt-8 2xl:pt-16 sm:max-w-3xl lg:max-w-7xl sm:px-6'>
            <header>
              <h2 className='text-xl font-bold uppercase'>
                <span className='py-px text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                  Recently Published
                </span>
              </h2>
            </header>
            <ul className='grid max-w-md gap-16 pt-8 mx-auto lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12 2xl:pt-16 sm:max-w-3xl lg:max-w-7xl'>
              {posts.map(post => (
                <li key={post.slug.current}>
                  <div className='text-sm text-gray-600 dark:text-gray-300'>
                    <p>{format(parseISO(post?._createdAt), 'MMM dd, yyyy')}</p>
                  </div>
                  <div className='group'>
                    <Link href={post.slug.current}>
                      <a className='block mt-2'>
                        <p className='text-xl font-semibold text-gray-900 dark:text-gray-100'>
                          {post.title}
                        </p>
                        <p className='mt-3 text-base text-gray-600 dark:text-gray-300'>
                          {post.description}
                        </p>
                        <div className='mt-3'>
                          <div className='flex items-center text-base font-semibold text-blue-600 dark:text-blue-400'>
                            Read full article{' '}
                            <FiArrowRight className='hidden ml-2 text-blue-600 group-hover:inline dark:text-blue-400' />
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  )
}

export const getStaticProps = async ctx => {
  const { allPost: posts } = await sanityClient().GetAllPosts()
  // const posts = allPost.map(post => ({
  //   title: post.title,
  //   slug: post.slug.current
  // }))

  return {
    props: {
      posts
    },
    revalidate: 10
  }
}

export default Blog
