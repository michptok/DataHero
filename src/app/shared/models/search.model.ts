import { Hero } from './hero.model';

export interface SearchResponse {
  response: string;
  'results-for'?: string;
  error?: string;
  results: Hero[];
}
