import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Movie} from '@domain';
import {AppStackParamList} from '@routes';

export interface MovieCardProps {
  movie: Movie;
  navigation: NativeStackNavigationProp<AppStackParamList, 'HomeScreen'>;
}
