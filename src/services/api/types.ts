import {AxiosPromise} from 'axios';

export interface PageParams {
  page: number;
}

export interface PaginatedResponse<T> {
  page: number;
  total_pages: number;
  total_results: number;
  results: T[];
}

export type APIPaginatedResponse<T> = AxiosPromise<PaginatedResponse<T>>;
