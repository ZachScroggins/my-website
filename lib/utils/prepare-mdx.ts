import path from 'path';

export const prepareMDX = async (
  source: string
  // options: {
  //   files?: Record<string, string>
  //   directory?: string
  //   imagesUrl?: string
  // }
) => {
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild-windows-64',
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

  const { bundleMDX } = await import('mdx-bundler');

  const { code, errors } = await bundleMDX({ source });

  if (errors.length > 0) {
    console.dir(errors.map(({ detail }) => detail));
  }

  return code;
};
