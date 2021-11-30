import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import client from 'lib/graphql';

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <main className='min-h-screen bg-gray-100 dark:bg-gray-900'>
      <article className='pt-24 mx-auto prose bg-gray-100 lg:prose-xl dark:bg-gray-900 dark:prose-dark'>
        <h1 className='text-gray-900 dark:text-gray-50'>Blog</h1>
        <ul>
          {posts.map(({ title, slug }) => (
            <li key={slug}>
              <Link href={`/blog/${slug}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
};

export const getStaticProps = async ctx => {
  const { allPost } = await client.GetAllPosts();

  const posts = allPost.map(post => ({
    title: post.title,
    slug: post.slug.current,
  }));

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};

export default Blog;
