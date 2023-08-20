import {formatDate} from '@utils';

import {Movie, MovieAPIType} from './MovieTypes';

const toMovie = (results: MovieAPIType[]): Movie[] => {
  return results.map(movieAPI => {
    return {
      id: movieAPI.id,
      title: movieAPI.title,
      overview: movieAPI.overview,
      voteAverage: movieAPI.vote_average.toString(),
      posterPath: movieAPI.poster_path,
      popularity: movieAPI.popularity.toString(),
      releaseDate: formatDate(movieAPI.release_date),
      voteCount: movieAPI.vote_count.toString(),
    };
  });
};

export const movieAdapter = {
  toMovie,
};
