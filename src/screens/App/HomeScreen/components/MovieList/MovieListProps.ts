import {RefObject} from 'react';
import {FlatList, ListRenderItem} from 'react-native';

import {Movie} from '@domain';

export interface MovieListProps {
  flatListRef: RefObject<FlatList>;
  renderItem: ListRenderItem<Movie>;
}
