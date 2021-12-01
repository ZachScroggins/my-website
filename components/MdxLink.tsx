import Link from 'next/link';

const MdxLink = ({ href, ...rest }: { href: string }) => {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest} />
      </Link>
    );
  }

  return <a href={href} target='_blank' rel='noopener noreferrer' {...rest} />;
};

export default MdxLink;
