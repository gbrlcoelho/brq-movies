import React, {useRef} from 'react';

import {AnimatedBox, Box, Icon} from '@components';
import {useAppSafeArea, useAppTheme} from '@hooks';

import {HeaderProps} from './HeaderProps';

export const Header = ({navigation, scrollY}: HeaderProps) => {
  const {top} = useAppSafeArea();
  const {colors} = useAppTheme();

  const headerBackgroundColor = useRef(
    scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: ['rgba(0, 0, 0, 0)', colors.backgroundContrast],
      extrapolate: 'clamp',
    }),
  ).current;

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <AnimatedBox
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      position="absolute"
      top={0}
      left={0}
      right={0}
      zIndex={1}
      paddingHorizontal="s16"
      height={60}
      style={{backgroundColor: headerBackgroundColor, paddingTop: top}}>
      <Box
        backgroundColor="background"
        borderRadius="s40"
        width={24}
        height={24}
        justifyContent="center"
        alignItems="center">
        <Icon name="chevronLeft" size={12} color="primary" onPress={goBack} />
      </Box>
      <Box
        backgroundColor="primary"
        borderRadius="s40"
        width={24}
        height={24}
        justifyContent="center"
        alignItems="center">
        <Icon name="heartFill" size={14} color="background" />
      </Box>
    </AnimatedBox>
  );
};
