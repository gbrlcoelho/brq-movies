import React, {useCallback, useRef, useState} from 'react';
import {FlatList, ListRenderItem} from 'react-native';

import {Box, FloatingActionButton, SwitchButton} from '@components';
import {Movie} from '@domain';
import {AppScreenProps} from '@routes';
import {FlexValueEnum} from '@utils';

import {FavoriteMovieList, MovieCard, PopularMovieList} from './components';

const options: [string, string] = ['Todos os Filmes', 'Filmes Favoritos'];

export const HomeScreen = ({navigation}: AppScreenProps<'HomeScreen'>) => {
  const [listType, setListType] = useState<'all' | 'favorites'>('all');
  const flatListRef = useRef<FlatList>(null);

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

  const onSwitchButtonChange = useCallback((value: string) => {
    if (value === options[0]) {
      setListType('all');
    } else {
      setListType('favorites');
    }
  }, []);

  return (
    <>
      <Box marginTop="s20" gap="s20" flex={FlexValueEnum.ONE}>
        <SwitchButton options={options} onChange={onSwitchButtonChange} />
        {listType === 'all' ? (
          <PopularMovieList flatListRef={flatListRef} renderItem={renderItem} />
        ) : (
          <FavoriteMovieList
            flatListRef={flatListRef}
            renderItem={renderItem}
          />
        )}
      </Box>
      <FloatingActionButton icon="arrowUp" onPress={scrollToTop} />
    </>
  );
};
