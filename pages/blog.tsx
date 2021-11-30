import { GetStaticProps } from 'next';
import Link from 'next/link';
import client from 'lib/graphql';

const blog = ({ posts }) => {
  return (
    <main className='min-h-screen pt-20 bg-gray-100 dark:bg-gray-900'>
      <h1>Blog</h1>
      <ul>
        {posts.map(({ title, slug }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async ctx => {
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

export default blog;
