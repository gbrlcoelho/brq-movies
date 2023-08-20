import {MovieAPIType} from '@domain';
import {MovieAPI, PaginatedResponse} from '@services';

import {movieAdapter} from './MovieAdapter';

const getListGeneric = (response: PaginatedResponse<MovieAPIType>) => {
  const {page, total_pages, total_results, results} = response;

  return {
    page,
    total_pages,
    total_results,
    results: movieAdapter.toMovie(results),
  };
};

const getPopularList = async (page: number) => {
  const response = (await MovieAPI.getMovies(page)).data;

  return getListGeneric(response);
};

const getFavoriteList = async (page: number) => {
  const response = (await MovieAPI.getFavoriteMovies(page)).data;

  return getListGeneric(response);
};

export const movieService = {
  getPopularList,
  getFavoriteList,
};
