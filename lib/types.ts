import { Endpoints } from '@octokit/types';

export type Repo = Endpoints['GET /repos/{owner}/{repo}']['response']['data'];
export type Repos = Repo[];
