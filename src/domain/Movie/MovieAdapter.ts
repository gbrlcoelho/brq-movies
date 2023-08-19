import {formatDate} from '@utils';

import {Movie, MovieAPIType} from './MovieTypes';

const toMovie = (results: MovieAPIType[]): Movie[] => {
  return results.map(movieAPI => {
    return {
      id: movieAPI.id,
      title: movieAPI.title,
      overview: movieAPI.overview,
      voteAverage: movieAPI.vote_average,
      posterPath: movieAPI.poster_path,
      popularity: movieAPI.popularity,
      releaseDate: formatDate(movieAPI.release_date),
    };
  });
};

export const movieAdapter = {
  toMovie,
};
