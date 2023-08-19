import {MovieAPI} from '@services';

import {movieAdapter} from './MovieAdapter';

const getList = async (page: number) => {
  const {
    page: pageResponse,
    total_pages,
    total_results,
    results,
  } = (await MovieAPI.getMovies(page)).data;

  return {
    page: pageResponse,
    total_pages,
    total_results,
    results: movieAdapter.toMovie(results),
  };
};

export const movieService = {
  getList,
};
