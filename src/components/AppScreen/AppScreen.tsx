import React from 'react';

import {Box} from '@components';
import {useAppSafeArea, useAppTheme} from '@hooks';
import {FlexValueEnum} from '@utils';

import {AppScreenProps} from './AppScreenProps';
import {HomeHeader} from './components/HomeHeader/HomeHeader';

export const AppScreen = ({children}: AppScreenProps) => {
  const {spacing} = useAppTheme();
  const {top, bottom} = useAppSafeArea();

  return (
    <>
      <Box
        flex={FlexValueEnum.ONE}
        backgroundColor="background"
        style={{paddingTop: top + spacing.s16}}>
        <Box paddingHorizontal="s16">
          <HomeHeader />
        </Box>
        <Box flex={FlexValueEnum.ONE} backgroundColor="background">
          {children}
        </Box>
      </Box>
      <Box backgroundColor="background" style={{paddingBottom: bottom}} />
    </>
  );
};
