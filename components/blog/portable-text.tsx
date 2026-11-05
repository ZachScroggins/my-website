import { urlFor } from '@/sanity/image';
import {
  PortableText as BasePortableText,
  stegaClean,
  type PortableTextComponents,
} from 'next-sanity';
import { highlight } from 'sugar-high';

type CodeValue = { code?: string; filename?: string; language?: string };
type ImageValue = { asset?: { _ref: string }; alt?: string; caption?: string };

const components: PortableTextComponents = {
  types: {
    code: ({ value }: { value: CodeValue }) => {
      if (!value.code) return null;
      return (
        <figure>
          {value.filename && (
            <figcaption className="mt-0! mb-2 text-left! font-mono">{value.filename}</figcaption>
          )}
          <pre data-language={stegaClean(value.language)}>
            <code dangerouslySetInnerHTML={{ __html: highlight(stegaClean(value.code)) }} />
          </pre>
        </figure>
      );
    },
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
