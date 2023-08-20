import React from 'react';
import {Image} from 'react-native';

import {TouchableOpacityBox} from '@components';

import {MovieCardProps} from './MovieCardProps';

export const MovieCard = ({movie, navigation}: MovieCardProps) => {
  const navigateToMovieDetailsScreen = () => {
    navigation.navigate('MovieDetailsScreen', movie);
  };

  return (
    <TouchableOpacityBox
      borderRadius="s8"
      onPress={navigateToMovieDetailsScreen}>
      <Image
        style={imageStyle}
        source={{uri: `https://image.tmdb.org/t/p/w780/${movie.posterPath}`}}
        resizeMode="center"
      />
    </TouchableOpacityBox>
  );
};

const imageStyle = {
  width: 158.4,
  height: 250.8,
  borderRadius: 8,
};
