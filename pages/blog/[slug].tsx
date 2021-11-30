// import path from 'path';
import client from 'lib/graphql';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
// import { bundleMDX } from 'mdx-bundler';
import { getMDXComponent } from 'mdx-bundler/client';
import React from 'react';
import Callout from 'components/Callout';
import Logo from 'components/Logo';
import Link from 'next/link';
import MdxLink from 'components/MdxLink';
import { prepareMDX } from 'lib/utils/prepare-mdx';

const Post = ({
  postData,
  code,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <main className='min-h-screen bg-gray-100 dark:bg-gray-900'>
      <article className='pt-24 mx-auto prose bg-gray-100 lg:prose-xl dark:bg-gray-900 dark:prose-dark'>
        <h1 className='text-gray-900 dark:text-gray-50'>{postData.title}</h1>
        <Component components={{ Callout, Logo, a: MdxLink }} />
        <div className='mt-10'>
          <Link href='/blog'>
            <a>Back to All Posts</a>
          </Link>
        </div>
      </article>
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { allPost } = await client.GetAllPosts();

  return {
    paths: allPost.map(p => `/blog/${p.slug.current}`),
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  const { allPost } = await client.GetPost({ slug });

  const [postData] = allPost;

  const code = await prepareMDX(postData.content);

  return {
    props: {
      postData,
      code,
    },
    revalidate: 10,
  };
};

export default Post;
