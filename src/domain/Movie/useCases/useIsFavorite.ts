import {useFavoriteMovieList} from '@domain';

export const useIsFavorite = (movieId: number) => {
  const {list} = useFavoriteMovieList();

  const isFavorite = list?.some(movie => movie.id === movieId);

  return {
    isFavorite,
  };
};
