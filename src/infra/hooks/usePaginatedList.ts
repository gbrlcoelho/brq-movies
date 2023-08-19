import {useEffect, useState} from 'react';

import {
  InfiniteData,
  InfiniteQueryObserverResult,
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
  fetchNextPage: () => Promise<
    InfiniteQueryObserverResult<PaginatedResponse<T>, unknown>
  >;
  hasNextPage: boolean;
}

export const usePaginatedList = <T>(
  queryKey: readonly unknown[],
  getList: (page: number) => Promise<PaginatedResponse<T>>,
): UsePaginatedListResult<T> => {
  const [list, setList] = useState<T[]>([]);

  const query = useInfiniteQuery({
    queryKey,
    queryFn: ({pageParam = 1}) => getList(pageParam),
    getNextPageParam: lastPage => {
      const nextPage =
        lastPage.page < lastPage.total_pages ? lastPage.page + 1 : null;
      return nextPage;
    },
  });

  useEffect(() => {
    if (query.data) {
      const newList = query.data.pages.reduce<T[]>((prev, curr) => {
        return [...prev, ...curr.results];
      }, []);
      setList(newList);
    }
  }, [query.data]);

  return {
    fetchNextPage: query.fetchNextPage,
    list,
    isError: query.isError,
    isLoading: query.isLoading,
    refresh: query.refetch,
    hasNextPage: !!query.hasNextPage,
  };
};
