import { TagSkeleton } from './page';

export default function Loading() {
  return (
    <section aria-busy className="bg-muted dark:bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <TagSkeleton />
      </div>
    </section>
  );
}
