import React, {useEffect, useMemo} from 'react';
import {Animated} from 'react-native';

import {AnimatedBox, Box, Text} from '@components';

import {setToastIcon} from './helpers/setToastIcon';
import {ToastProps} from './ToastProps';

export const Toast = ({visible, message, type}: ToastProps) => {
  const [icon, color] = setToastIcon(type);

  const positionY = useMemo(() => new Animated.Value(100), []);

  useEffect(() => {
    if (visible) {
      Animated.timing(positionY, {
        toValue: -16,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(positionY, {
        toValue: 100,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [visible, positionY]);

  const animatedStyle = {
    transform: [{translateY: positionY}],
  };

  return (
    <AnimatedBox
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
    </AnimatedBox>
  );
};
