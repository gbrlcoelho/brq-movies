import React, {useCallback, useRef} from 'react';
import {FlatList, ListRenderItem, RefreshControl} from 'react-native';

import {Box, EmptyList, FloatingActionButton, SwitchButton} from '@components';
import {Movie, useMovieList} from '@domain';
import {useAppTheme} from '@hooks';
import {AppScreenProps} from '@routes';
import {FlexValueEnum, itemSeparator} from '@utils';

import {MovieCard} from './components/MovieCard/MovieCard';
const options: [string, string] = ['Todos os Filmes', 'Filmes Favoritos'];

export const HomeScreen = ({navigation}: AppScreenProps<'HomeScreen'>) => {
  const {spacing} = useAppTheme();
  const flatListRef = useRef<FlatList>(null);
  const {
    list: moviesList,
    fetchNextPage,
    isError,
    isLoading,
    refresh,
  } = useMovieList();

  const contentContainerFlex = moviesList.length === 0 ? 1 : undefined;

  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({
      offset: 0,
      animated: true,
    });
  };

  const renderItem: ListRenderItem<Movie> = useCallback(
    ({item}) => {
      return <MovieCard movie={item} navigation={navigation} />;
    },
    [navigation],
  );

  return (
    <>
      <Box marginTop="s20" gap="s20" flex={FlexValueEnum.ONE}>
        <SwitchButton options={options} onChange={log => console.log(log)} />
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
      </Box>
      <FloatingActionButton icon="arrowUp" onPress={scrollToTop} />
    </>
  );
};
