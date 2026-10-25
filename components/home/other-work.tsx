'use client';

import type { Repo } from '@/lib/types';
import { useState } from 'react';

const INITIAL_COUNT = 6;

type OtherWorkRepo = Pick<Repo, 'id' | 'html_url' | 'language' | 'name' | 'description'>;

export default function OtherWork({ repos }: { repos: OtherWorkRepo[] }) {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="mx-auto max-w-5xl px-4 xl:px-0">
      <ul className="divide-y divide-border overflow-hidden rounded-lg bg-background shadow-sm dark:rounded-none">
        {(showAll ? repos : repos.slice(0, INITIAL_COUNT)).map((repo) => (
          <li key={repo.id}>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener"
              className="flex items-center px-4 py-4 hover:bg-gray-50 sm:px-6 dark:hover:bg-background"
            >
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-green-400">{repo.language}</p>
                <h4 className="mt-2 text-lg font-bold text-foreground">{repo.name}</h4>
                <p className="mt-2 text-gray-500 dark:text-muted-foreground">{repo.description}</p>
              </div>
              <svg
                className="ml-5 size-5 shrink-0 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        ))}
      </ul>
      {!showAll && (
        <button
          type="button"
          className="mt-6 flex w-full items-center justify-center rounded-md bg-linear-to-r from-green-400 to-blue-500 px-4 py-3 font-medium text-white shadow-sm hover:brightness-110"
          onClick={() => setShowAll(true)}
        >
          View all
        </button>
      )}
    </div>
  );
}
