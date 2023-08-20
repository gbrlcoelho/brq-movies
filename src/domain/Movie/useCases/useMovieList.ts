import {usePaginatedList} from '@infra';
import {QueryKeyEnum} from '@utils';

import {movieService} from '../MovieService';

export const useMovieList = () => {
  return usePaginatedList(
    [QueryKeyEnum.MOVIES_LIST],
    movieService.getPopularList,
  );
};
