import { useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GetStaticPaths, InferGetStaticPropsType } from 'next'
import { parseISO, format } from 'date-fns'
import { getMDXComponent } from 'mdx-bundler/client'
import { NextSeo } from 'next-seo'

import Callout from 'components/Callout'
import Logo from 'components/Logo'
import MdxLink from 'components/MdxLink'
import { prepareMDX } from 'lib/utils/mdx'

import { picoClient, sanityClient } from 'lib/sanity'
import { useNextSanityImage } from 'next-sanity-image'

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const Component = useMemo(() => getMDXComponent(post?.code), [post?.code])

  const imageProps = post?.image
    ? useNextSanityImage(picoClient, post?.image)
    : null

  return (
    <>
      <NextSeo
        title={`${post?.title} - Zach Scroggins`}
        description={post?.description}
        canonical={`https://zachscroggins.com${post?.slug.current}/`}
        openGraph={{
          url: `https://zachscroggins.com${post?.slug.current}/`,
          type: 'article',
          title: `${post?.title} - Zach Scroggins`,
          description: post?.description,
          article: { publishedTime: post?._createdAt }
        }}
      />
      <main className='min-h-screen'>
        <article className='px-4 pt-24 max-w-[65ch] lg:text-xl mx-auto sm:px-6 md:px-0'>
          {imageProps && (
            <div className='mb-8 -mx-4 -mt-6 sm:hidden'>
              <Image
                {...imageProps}
                layout='responsive'
                sizes='(max-width: 800px) 100vw, 800px'
                alt={post?.image?.asset?.altText}
              />
            </div>
          )}
          <header>
            <h1 className='py-px mb-3 text-4xl font-extrabold leading-10 text-transparent lg:mb-4 lg:text-6xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
              {post?.title}
            </h1>
            <p className='text-2xl font-bold text-gray-900 lg:text-3xl dark:text-gray-100'>
              {post?.description}
            </p>
            <div className='flex items-center mt-6 mb-8'>
              <span className='flex items-center w-12 h-12 rounded-full lg:w-14 lg:h-1w-14'>
                <Image
                  alt='Zach Scroggins'
                  height={2778}
                  width={3023}
                  src='/images/profile-pic.jpg'
                  className='rounded-full'
                />
              </span>
              <div className='w-full ml-3 text-base md:text-base lg:text-lg'>
                <p className='font-bold text-gray-800 dark:text-gray-300'>
                  Zach Scroggins
                </p>
                <div className='flex text-gray-700 sm:justify-between dark:text-gray-300'>
                  <p>{format(parseISO(post?._createdAt), 'MMM dd, yyyy')}</p>
                  <span className='mx-1 sm:hidden'>·</span>
                  <p className=''>{post?.readingTime?.text}</p>
                </div>
              </div>
            </div>
          </header>
          {imageProps && (
            <div className='hidden mb-8 rounded-lg sm:block'>
              <Image
                {...imageProps}
                layout='responsive'
                sizes='(max-width: 800px) 100vw, 800px'
                alt={post?.image?.asset?.altText}
                className='rounded-lg'
              />
            </div>
          )}
          <div className='prose lg:prose-xl dark:prose-dark'>
            <Component components={{ Callout, Logo, a: MdxLink }} />
            <div className='py-10'>
              <Link href='/blog'>
                <a>← Back to All Posts</a>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { allPost: pages } = await sanityClient().GetAllPosts()

  return {
    paths: pages.map(page => `${page.slug.current}`),
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params, preview = false }) => {
  const slug = params?.slug as string

  const { allPost } = await sanityClient(preview).GetPost({
    slug: `/blog/${slug}`,
    preview
  })

  if (allPost.length < 1) return { notFound: true } as const

  const [sanityPostData] = allPost

  const { code, readingTime } = await prepareMDX(sanityPostData?.content)

  const post = {
    ...sanityPostData,
    code,
    readingTime
  }

  return {
    props: {
      post
    },
    revalidate: 10
  }
}

export default Post
