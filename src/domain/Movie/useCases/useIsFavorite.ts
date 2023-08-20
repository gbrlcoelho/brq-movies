import {useEffect} from 'react';

import {useQueryClient} from '@tanstack/react-query';

import {useFavoriteMovieList} from '@domain';
import {QueryKeyEnum} from '@infra';

export const useIsFavorite = (movieId: number) => {
  const queryClient = useQueryClient();

  const {list} = useFavoriteMovieList();

  const isFavorite = list?.some(movie => movie.id === movieId);

  useEffect(() => {
    queryClient.invalidateQueries({
      queryKey: [QueryKeyEnum.FAVORITES_MOVIES_LIST],
    });
  }, [queryClient]);

  return {
    isFavorite,
  };
};
