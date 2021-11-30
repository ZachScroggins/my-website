import Link from 'next/link';

const MdxLink = ({ href, ...rest }: { href: string }) => {
  if (href.includes('http')) {
    return <a href={href} target='_blank' rel='noopener' {...rest} />;
  }

  return (
    <Link href={href}>
      <a {...rest} />
    </Link>
  );
};

export default MdxLink;
