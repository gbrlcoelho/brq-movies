import {movieService} from '@domain';
import {QueryKeyEnum, usePaginatedList} from '@infra';

export const usePopularMovieList = () => {
  return usePaginatedList(
    [QueryKeyEnum.MOVIES_LIST],
    movieService.getPopularList,
  );
};
