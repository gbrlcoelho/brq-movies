import {movieService} from '@domain';
import {QueryKeyEnum, usePaginatedList} from '@infra';

export const useFavoriteMovieList = () => {
  return usePaginatedList(
    [QueryKeyEnum.FAVORITES_MOVIES_LIST],
    movieService.getFavoriteList,
  );
};
