import React from 'react';
import {FlatList, RefreshControl} from 'react-native';

import {EmptyList} from '@components';
import {useFavoriteMovieList} from '@domain';
import {useAppTheme} from '@hooks';
import {itemSeparator} from '@utils';

import {MovieListProps} from './MovieListProps';

export const FavoriteMovieList = ({
  flatListRef,
  renderItem,
}: MovieListProps) => {
  const {spacing} = useAppTheme();

  const {
    list: moviesList,
    fetchNextPage,
    isError,
    isLoading,
    refresh,
  } = useFavoriteMovieList();

  const contentContainerFlex = moviesList.length === 0 ? 1 : undefined;

  return (
    <FlatList
      ref={flatListRef}
      data={moviesList}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: 'space-between',
        paddingHorizontal: spacing.s24,
      }}
      onEndReached={fetchNextPage}
      onEndReachedThreshold={0.1}
      refreshing={isLoading}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={refresh} />
      }
      contentContainerStyle={{flex: contentContainerFlex}}
      ItemSeparatorComponent={itemSeparator}
      ListEmptyComponent={
        <EmptyList
          listItemName="filmes"
          refresh={refresh}
          error={isError}
          loading={isLoading}
        />
      }
      showsVerticalScrollIndicator={false}
    />
  );
};
