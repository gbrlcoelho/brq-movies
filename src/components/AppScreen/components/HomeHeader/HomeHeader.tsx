import React from 'react';

import {Box, OptionsType, PopupMenu, Text} from '@components';
import {useAuth} from '@domain';

export const HomeHeader = () => {
  const {signOut} = useAuth();

  const options: Array<OptionsType> = [
    {
      id: 1,
      icon: 'logout',
      title: 'Sair',
      action: () => signOut(),
    },
  ];

  return (
    <Box flexDirection="row" justifyContent="space-between">
      <Text preset="headingExtraLarge" color="grayWhite">
        BRQ Movies
      </Text>
      <PopupMenu options={options} />
    </Box>
  );
};
