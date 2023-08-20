import {
  InfiniteData,
  QueryObserverResult,
  useInfiniteQuery,
} from '@tanstack/react-query';

import {PaginatedResponse} from '@services';

interface UsePaginatedListResult<T> {
  list: T[];
  isError: boolean;
  isLoading: boolean;
  refresh: () => Promise<
    QueryObserverResult<InfiniteData<PaginatedResponse<T>>, unknown>
  >;
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

export const usePaginatedList = <T>(
  queryKey: readonly unknown[],
  getList: (page: number) => Promise<PaginatedResponse<T>>,
): UsePaginatedListResult<T> => {
  const query = useInfiniteQuery({
    queryKey,
    queryFn: ({pageParam = 1}) => getList(pageParam),
    getNextPageParam: lastPage => {
      const nextPage =
        lastPage.page < lastPage.total_pages ? lastPage.page + 1 : null;
      return nextPage;
    },
  });

  const list = query.data?.pages.flatMap(page => page.results) || [];

  const fetchNextPage = () => {
    if (query.hasNextPage) {
      query.fetchNextPage();
    }
  };

  return {
    fetchNextPage,
    list,
    isError: query.isError,
    isLoading: query.isLoading,
    refresh: query.refetch,
    hasNextPage: !!query.hasNextPage,
  };
};
