import React from 'react';

import {Box, Icon, Text} from '@components';

import {CardProps} from './CardProps';

export const Card = ({label, value, icon}: CardProps) => {
  return (
    <Box
      backgroundColor="backgroundContrast"
      width={166}
      height={76}
      paddingHorizontal="s14"
      paddingVertical="s8"
      borderRadius="s8">
      <Box flexDirection="row" alignItems="center">
        <Box
          backgroundColor="background"
          borderRadius="s40"
          width={28}
          height={28}
          justifyContent="center"
          alignItems="center">
          <Icon name={icon} size={14} color="primary" />
        </Box>
        <Text preset="paragraphSmall" bold color="primary" marginLeft="s8">
          {label.toUpperCase()}
        </Text>
      </Box>
      <Text
        preset="paragraphMedium"
        color="grayWhite"
        marginTop="s8"
        bold
        marginLeft="s4">
        {value}
      </Text>
    </Box>
  );
};
