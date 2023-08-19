import React, {useEffect} from 'react';

import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {Box, ReanimatedBox, Text} from '@components';

import {setToastIcon} from './helpers/setToastIcon';
import {ToastProps} from './ToastProps';

export const Toast = ({visible, message, type}: ToastProps) => {
  const [icon, color] = setToastIcon(type);
  const positionY = useSharedValue(100);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: withSpring(positionY.value)}],
    };
  });

  useEffect(() => {
    if (visible) {
      positionY.value = -16;
    } else {
      positionY.value = 100;
    }
  }, [visible, positionY]);

  return (
    <ReanimatedBox
      alignSelf="center"
      zIndex={1}
      position="absolute"
      bottom={0}
      width="90%"
      borderRadius="s8"
      paddingHorizontal="s16"
      paddingVertical="s8"
      backgroundColor={color}
      elevation={4}
      style={[animatedStyle]}>
      <Box flexDirection="row" alignItems="center" gap="s8">
        {icon}
        <Text color="buttonPrimaryContrast">{message}</Text>
      </Box>
    </ReanimatedBox>
  );
};
