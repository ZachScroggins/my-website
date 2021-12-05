import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import client from 'lib/graphql'
import { getClient, sanityClient } from 'lib/sanity/sanity-client'
import { Post } from 'lib/generated/schema'

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <main className='min-h-screen bg-gray-100 dark:bg-gray-900'>
      <article className='px-4 pt-24 mx-auto prose bg-gray-100 sm:px-6 md:px-0 lg:prose-xl dark:bg-gray-900 dark:prose-dark'>
        <h1>
          <span className='!text-transparent py-px bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
            Blog
          </span>
        </h1>
        <ul>
          {posts.map(({ title, slug }) => (
            <li key={slug}>
              <Link href={`${slug}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </main>
  )
}

export const getStaticProps = async ctx => {
  const { allPost } = await sanityClient().GetAllPosts()
  const posts = allPost.map(post => ({
    title: post.title,
    slug: post.slug.current
  }))

  return {
    props: {
      posts
    },
    revalidate: 10
  }
}

export default Blog
