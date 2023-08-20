import {movieService} from '@domain';
import {usePaginatedList} from '@infra';
import {QueryKeyEnum} from '@utils';

export const usePopularMovieList = () => {
  return usePaginatedList(
    [QueryKeyEnum.MOVIES_LIST],
    movieService.getPopularList,
  );
};
