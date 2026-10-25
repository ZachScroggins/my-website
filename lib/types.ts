import type { Endpoints } from '@octokit/types';

export type Repo = Endpoints['GET /users/{username}/repos']['response']['data'][number];
