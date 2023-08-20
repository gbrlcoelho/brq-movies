import {movieService} from '@domain';
import {usePaginatedList} from '@infra';
import {QueryKeyEnum} from '@utils';

export const useFavoriteMovieList = () => {
  return usePaginatedList(
    [QueryKeyEnum.FAVORITES_MOVIES_LIST],
    movieService.getFavoriteList,
  );
};
