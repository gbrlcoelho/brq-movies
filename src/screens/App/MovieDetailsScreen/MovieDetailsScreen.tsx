import React, {useState} from 'react';
import {Animated, ImageBackground, ScrollView, ViewStyle} from 'react-native';

import {Box, Text} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';
import {FlexValueEnum} from '@utils';

import {CardGroup, Header} from './components';

export const MovieDetailsScreen = ({
  navigation,
  route,
}: AppScreenProps<'MovieDetailsScreen'>) => {
  const movie = route.params;
  const {top, bottom} = useAppSafeArea();
  const [scrollY] = useState(new Animated.Value(0));

  return (
    <>
      <Header navigation={navigation} scrollY={scrollY} movieId={movie.id} />
      <Box
        backgroundColor="background"
        flex={FlexValueEnum.ONE}
        style={{paddingTop: top}}>
        <ScrollView
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {
              useNativeDriver: false,
            },
          )}>
          <ImageBackground
            source={{uri: `https://image.tmdb.org/t/p/w500${movie.posterPath}`}}
            style={imageBackgroundStyle}
          />
          <Box paddingHorizontal="s16" gap="s16">
            <Text
              preset="headingXXLarge"
              marginTop="s32"
              color="grayWhite"
              bold>
              {movie.title}
            </Text>
            <Text preset="paragraphSmall" color="primary" bold>
              SINOPSE
            </Text>
            <Text preset="paragraphMedium" color="grayWhite">
              {movie.overview}
            </Text>
            <CardGroup movie={movie} />
          </Box>
        </ScrollView>
      </Box>
      <Box backgroundColor="background" style={{paddingBottom: bottom + 8}} />
    </>
  );
};

const imageBackgroundStyle: ViewStyle = {
  width: '100%',
  height: 600,
};
