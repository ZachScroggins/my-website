import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { stegaClean } from 'next-sanity';
import Link from 'next/link';

export type TagRef = { _id: string; name: string | null; slug: string | null };

/** The surface the badge sits on, so its inner fill hides the gradient border. */
type Surface = 'section' | 'card';

const surfaceClass: Record<Surface, string> = {
  section: 'bg-muted dark:bg-background',
  card: 'bg-background',
};

export function TagBadge({ tag, surface = 'section' }: { tag: TagRef; surface?: Surface }) {
  const slug = stegaClean(tag.slug);
  if (!slug || !tag.name) return null;

  return (
    <Link
      href={`/tags/${slug}`}
      className="flex cursor-pointer rounded-4xl bg-linear-to-r from-green-400/60 to-blue-500/60 p-px transition duration-200 ease-out hover:-translate-y-0.5 hover:scale-105 hover:from-green-400 hover:to-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none motion-reduce:hover:transform-none"
    >
      <Badge
        variant="ghost"
        className={cn(
          'h-auto rounded-[calc(var(--radius-4xl)-1px)] border-0 py-0.5 hover:bg-inherit hover:text-inherit dark:hover:bg-inherit',
          surfaceClass[surface]
        )}
      >
        {tag.name}
      </Badge>
    </Link>
  );
}

export function TagList({
  tags,
  surface,
  className,
}: {
  tags: TagRef[] | null | undefined;
  surface?: Surface;
  className?: string;
}) {
  if (!tags?.length) return null;
  return (
    <ul role="list" className={cn('flex flex-wrap gap-1.5', className)}>
      {tags.map((tag) => (
        <li key={tag._id} className="flex">
          <TagBadge tag={tag} surface={surface} />
        </li>
      ))}
    </ul>
  );
}
