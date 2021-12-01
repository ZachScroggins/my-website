import React, { useEffect, useState } from 'react';
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

import { groq } from 'next-sanity';

import { usePreviewSubscription } from 'lib/sanity/sanity';
import { getClient } from 'lib/sanity/sanity.server';
import { filterDataToSingleItem } from 'lib/sanity/helpers';

const Post = ({
  // postData,
  // code,
  data,
  preview,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // const Component = React.useMemo(() => getMDXComponent(code), [code]);
  // console.log(postData);

  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    initialData: data?.page,
    enabled: preview,
  });
  const [pdata, setPdata] = useState(previewData);
  // console.log(pdata);

  useEffect(() => {
    const get = async () => {
      const page = filterDataToSingleItem(previewData, preview);
      const res = await fetch('/api/preview-mdx', {
        method: 'POST',
        body: JSON.stringify({ content: page?.content }),
      });
      const json = await res.json();
      setPdata({ ...page, code: json.code, readingTime: json.readingTime });
    };
    if (preview) {
      console.log('funk');
      get();
    }
    console.log('effect');
  }, [preview, previewData]);

  const page = preview ? pdata : filterDataToSingleItem(previewData, preview);

  console.log({ preview, page, pdata, previewData });

  const Component = React.useMemo(
    () => getMDXComponent(page?.code),
    [page?.code]
  );

  return (
    <>
      <NextSeo
        title={`${page?.title} - Zach Scroggins`}
        description={page?.description}
        canonical={`https://zachscroggins.com${page?.slug.current}/`}
        openGraph={{
          url: `https://zachscroggins.com${page?.slug.current}/`,
          type: 'article',
          title: `${page?.title} - Zach Scroggins`,
          description: page?.description,
          article: { publishedTime: page?._createdAt },
        }}
      />
      <main className='min-h-screen'>
        <article className='px-4 pt-24 max-w-[65ch] lg:text-xl mx-auto sm:px-6 md:px-0'>
          <h1 className='py-px mb-8 text-4xl font-extrabold leading-10 text-transparent lg:mb-12 lg:text-6xl bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
            {page?.title}
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
                {format(parseISO(page?._createdAt), 'MMMM dd, yyyy')}
              </p>
            </div>
            <p className='mt-2 text-sm text-gray-600 md:text-base dark:text-gray-400 min-w-32 md:mt-0'>
              {page?.readingTime?.text}
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
  // const { allPost } = await client.GetAllPosts();

  // const paths = allPost.map(p => `/blog/${p.slug.current}`);

  // return {
  //   paths,
  //   fallback: 'blocking',
  // };
  const allSlugsQuery = groq`*[defined(slug.current)][].slug.current`;
  const pages = await getClient().fetch(allSlugsQuery);

  return {
    paths: pages.map(slug => `${slug}`),
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params, preview = false }) => {
  const slug = params?.slug as string;

  const query = groq`*[_type == "post" && slug.current == $slug][0]`;
  const queryParams = { slug: `/blog/${slug}` };
  const data = await getClient(preview).fetch(query, queryParams);

  if (!data) return { notFound: true } as const;

  const sanityPostData = filterDataToSingleItem(data, preview);
  // console.log({ slug, query, queryParams, data, sanityPostData });

  const { code, readingTime } = await prepareMDX(sanityPostData?.content);

  const page = {
    ...sanityPostData,
    code,
    readingTime,
  };

  return {
    props: {
      preview,
      data: { page, query, queryParams },
    },
    revalidate: 10,
  };

  // const { allPost } = await client.GetPost({ slug });

  // if (allPost.length < 1) {
  //   return {
  //     notFound: true,
  //     props: {},
  //   };
  // }

  // const [sanityPostData] = allPost;

  // const { code, readingTime } = await prepareMDX(sanityPostData.content);

  // const postData = {
  //   ...sanityPostData,
  //   readingTime,
  //   slug,
  // };

  // return {
  //   props: {
  //     postData,
  //     code,
  //   },
  //   revalidate: 10,
  // };
};

export default Post;
