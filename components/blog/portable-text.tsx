import { CodeBlock } from '@/components/blog/code-block';
import { urlFor } from '@/sanity/image';
import {
  PortableText as BasePortableText,
  stegaClean,
  type PortableTextComponents,
} from 'next-sanity';

type ImageValue = { asset?: { _ref: string }; alt?: string; caption?: string };

const components: PortableTextComponents = {
  types: {
    code: CodeBlock,
    image: ({ value }: { value: ImageValue }) => {
      if (!value.asset) return null;
      return (
        <figure>
          <img
            src={urlFor(value).width(1600).fit('max').auto('format').url()}
            alt={value.alt ?? ''}
            loading="lazy"
          />
          {value.caption && <figcaption>{value.caption}</figcaption>}
        </figure>
      );
    },
  },
  marks: {
    link: ({ children, value }) => {
      const href = stegaClean((value as { href?: string })?.href) ?? '#';
      const external = /^https?:\/\//.test(href);
      return (
        <a href={href} {...(external ? { target: '_blank', rel: 'noopener' } : {})}>
          {children}
        </a>
      );
    },
  },
};

export default function PortableText({
  value,
}: {
  value: Parameters<typeof BasePortableText>[0]['value'];
}) {
  return <BasePortableText value={value} components={components} />;
}
