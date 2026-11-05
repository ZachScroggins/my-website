import Reveal from '@/components/reveal';
import { TagList } from '@/components/tag-badge';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { cachedSanity, type DynamicFetchOptions } from '@/sanity/live';
import { COMPANY_JOBS_QUERY } from '@/sanity/queries';
import { stegaClean } from 'next-sanity';
import Link from 'next/link';

export default async function LumerisJobs({ perspective, stega }: DynamicFetchOptions) {
  const { data: company } = await cachedSanity({
    query: COMPANY_JOBS_QUERY,
    params: { company: 'lumeris' },
    perspective,
    stega,
  });
  const roles = company?.roles?.filter((role) => role !== null) ?? [];

  return (
    <div className="pb-12 pt-8 text-left">
      {roles.map((role) => {
        const accomplishments = role.accomplishments?.filter((a) => a !== null) ?? [];
        return (
          <div key={role._id}>
            <h4 className="text-2xl pt-6 sm:text-3xl font-extrabold">{role.title}</h4>
            <ul role="list" className="space-y-3 pt-4">
              {accomplishments.map((item, itemIdx) => (
                <Reveal
                  as="li"
                  key={item._id}
                  delay={itemIdx * 80}
                  className="relative flex gap-x-4"
                >
                  <div
                    className={cn(
                      itemIdx === accomplishments.length - 1 ? 'h-6' : '-bottom-6',
                      'absolute top-0 left-0 flex w-6 justify-center'
                    )}
                  >
                    <div className="w-px bg-gray-300 dark:bg-white/15" />
                  </div>
                  <div className="relative flex size-6 flex-none items-center justify-center bg-secondary dark:bg-background">
                    <div className="size-1.5 rounded-full bg-gray-200 ring ring-gray-400 dark:bg-white/10 dark:ring-white/20" />
                  </div>
                  <div>
                    <p className="font-medium text-lg text-muted-foreground">
                      <Link
                        href={`/blog/${stegaClean(item.slug)}`}
                        className="cursor-pointer underline decoration-muted-foreground/40 underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
                      >
                        {item.accomplishment}
                      </Link>
                    </p>
                    <TagList tags={item.tags} className="mt-2" />
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export function LumerisJobsSkeleton() {
  return (
    <div className="space-y-4 pb-12 pt-8 text-left">
      <Skeleton className="h-9 w-80" />
      {Array.from({ length: 6 }, (_, i) => (
        <Skeleton key={i} className="h-12 w-full" />
      ))}
    </div>
  );
}
