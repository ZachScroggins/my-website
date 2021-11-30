import path from 'path';
import client from 'lib/graphql';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { bundleMDX } from 'mdx-bundler';
import { getMDXComponent } from 'mdx-bundler/client';
import React from 'react';
import Callout from 'components/Callout';
import Logo from 'components/Logo';

const post = ({
  postData,
  code,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <div className='min-h-screen mx-auto mt-20 prose lg:prose-xl'>
      <h1>{postData.title}</h1>
      <Component components={{ Callout, Logo }} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { allPost } = await client.GetAllPosts();

  return {
    paths: allPost.map(p => `/blog/${p.slug.current}`),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  const { allPost } = await client.GetPost({ slug });

  const [postData] = allPost;

  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'esbuild.exe'
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'bin',
      'esbuild'
    );
  }

  const { code } = await bundleMDX({ source: postData.content });

  return {
    props: {
      postData,
      code,
    },
  };
};

export default post;
