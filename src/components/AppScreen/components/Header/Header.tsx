import React from 'react';

import {NavigationProp, useNavigation} from '@react-navigation/native';

import {Box, Icon} from '@components';
import {AppStackParamList} from '@routes';

export const Header = () => {
  const {goBack} = useNavigation<NavigationProp<AppStackParamList>>();

  return (
    <Box alignItems="center" flexDirection="row" justifyContent="space-between">
      <Icon name="checkCircle" color="grayWhite" size={26} onPress={goBack} />

      <Box width={26} />
    </Box>
  );
};
