import { PostSkeleton } from './page';

export default function Loading() {
  return (
    <article aria-busy className="bg-muted dark:bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <PostSkeleton />
      </div>
    </article>
  );
}
