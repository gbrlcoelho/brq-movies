import {Animated} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {AppStackParamList} from '@routes';

export interface HeaderProps {
  navigation: NativeStackNavigationProp<
    AppStackParamList,
    'MovieDetailsScreen'
  >;
  scrollY: Animated.Value;
  movieId: number;
}
