import {
  InfiniteData,
  QueryObserverResult,
  UseInfiniteQueryResult,
  useInfiniteQuery,
} from '@tanstack/react-query';

import {PaginatedResponse} from '@services';

interface UsePaginatedListResult<T> {
  list: T[];
  isError: boolean;
  isLoading: boolean;
  refresh: () => Promise<
    QueryObserverResult<InfiniteData<PaginatedResponse<T>>>
  >;
  fetchNextPage: () => Promise<UseInfiniteQueryResult<PaginatedResponse<T>>>;
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

  return {
    fetchNextPage: query.fetchNextPage,
    list,
    isError: query.isError,
    isLoading: query.isLoading,
    refresh: query.refetch,
    hasNextPage: !!query.hasNextPage,
  };
};
