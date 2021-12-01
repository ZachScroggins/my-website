import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import { parseISO, format } from 'date-fns';
import { getMDXComponent } from 'mdx-bundler/client';
import { NextSeo } from 'next-seo';

import client from 'lib/graphql';
import Callout from 'components/Callout';
import Logo from 'components/Logo';
import MdxLink from 'components/MdxLink';
import { prepareMDX } from 'lib/utils/mdx';

const Post = ({
  postData,
  code,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  // console.log(postData);
  return (
    <>
      <NextSeo
        title={`${postData.title} - Zach Scroggins`}
        description={postData.description}
        canonical={`https://zachscroggins.com/blog/${postData.slug}/`}
        openGraph={{
          url: `https://zachscroggins.com/blog/${postData.slug}/`,
          type: 'article',
          title: `${postData.title} - Zach Scroggins`,
          description: postData.description,
          article: { publishedTime: postData._createdAt },
        }}
      />
      <main className='min-h-screen'>
        <article className='px-4 pt-24 max-w-[65ch] lg:text-xl mx-auto sm:px-6 md:px-0'>
          <h1 className='py-px mb-8 text-4xl font-extrabold leading-10 text-transparent lg:mb-12 lg:text-6xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
            {postData.title}
          </h1>
          <div className='flex flex-col items-start justify-between w-full md:flex-row md:items-center'>
            <div className='flex items-center'>
              <span className='w-6 h-6 rounded-full md:w-10 md:h-10'>
                <Image
                  alt='Zach Scroggins'
                  height={2778}
                  width={3023}
                  src='/images/profile-pic.jpg'
                  className='w-6 h-6 rounded-full'
                />
              </span>
              <p className='ml-2 text-sm text-gray-700 md:text-base dark:text-gray-300'>
                {'Zach Scroggins / '}
                {format(parseISO(postData._createdAt), 'MMMM dd, yyyy')}
              </p>
            </div>
            <p className='mt-2 text-sm text-gray-600 md:text-base dark:text-gray-400 min-w-32 md:mt-0'>
              {postData.readingTime.text}
            </p>
          </div>
          <div className='mt-8 prose lg:prose-xl dark:prose-dark'>
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
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { allPost } = await client.GetAllPosts();

  const paths = allPost.map(p => `/blog/${p.slug.current}`);

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  const { allPost } = await client.GetPost({ slug });

  if (allPost.length < 1) {
    return {
      notFound: true,
      props: {},
    };
  }

  const [sanityPostData] = allPost;

  const { code, readingTime } = await prepareMDX(sanityPostData.content);

  const postData = {
    ...sanityPostData,
    readingTime,
    slug,
  };

  return {
    props: {
      postData,
      code,
    },
    revalidate: 10,
  };
};

export default Post;
