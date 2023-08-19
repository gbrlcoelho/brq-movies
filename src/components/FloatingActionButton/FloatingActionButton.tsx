import React from 'react';

import {Box, Icon, TouchableOpacityBox} from '@components';

import {FloatingActionButtonProps} from './FloatingActionButtonProps';

export const FloatingActionButton = ({
  icon,
  onPress,
}: FloatingActionButtonProps) => {
  return (
    <Box position="absolute" bottom={10} left={340}>
      <TouchableOpacityBox
        alignItems="center"
        justifyContent="center"
        width={40}
        height={40}
        backgroundColor="buttonPrimary"
        onPress={onPress}
        borderRadius="s40"
        activeOpacity={0.8}>
        <Icon name={icon} size={30} color="buttonPrimaryContrast" />
      </TouchableOpacityBox>
    </Box>
  );
};
