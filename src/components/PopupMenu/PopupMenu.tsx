import React, {useRef, useState} from 'react';
import {Animated, Modal} from 'react-native';

import {AnimatedBox, Box, Icon, Text, TouchableOpacityBox} from '@components';
import {useAppSafeArea} from '@hooks';

import {PopupMenuProps} from './PopupMenuProps';

export const PopupMenu = ({options}: PopupMenuProps) => {
  const [visible, setVisible] = useState(false);
  const {top} = useAppSafeArea();
  const scale = useRef(new Animated.Value(0)).current;

  const resizeAnimatedBox = (toValue: number) => {
    toValue === 1 && setVisible(true);

    Animated.timing(scale, {
      toValue,
      duration: 200,
      useNativeDriver: true,
    }).start(() => toValue === 0 && setVisible(false));
  };

  return (
    <>
      {visible ? (
        <Box backgroundColor="buttonPrimary" borderRadius="s40">
          <Icon
            name="menu"
            onPress={() => resizeAnimatedBox(1)}
            color="background"
            size={26}
          />
        </Box>
      ) : (
        <Icon
          name="menu"
          onPress={() => resizeAnimatedBox(1)}
          color="gray3"
          size={26}
        />
      )}

      <Modal transparent visible={visible}>
        <Box flex={1} onTouchStart={() => resizeAnimatedBox(0)}>
          <AnimatedBox
            backgroundColor="gray"
            borderRadius="s8"
            position="absolute"
            top={top + 48}
            left={264}
            paddingVertical="s12"
            style={[
              {transform: [{scale}]},
              {
                opacity: scale.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              },
              {
                transform: [
                  {
                    translateX: scale.interpolate({
                      inputRange: [0, 1],
                      outputRange: [10, 0],
                    }),
                  },
                ],
              },
            ]}>
            {options.map((option, index) => (
              <Box key={option.id}>
                <TouchableOpacityBox
                  paddingHorizontal="s20"
                  onPress={option.action}
                  flexDirection="row"
                  alignItems="center">
                  <Icon name={option.icon} color="grayWhite" size={24} />
                  <Text
                    paddingLeft="s8"
                    preset="headingLarge"
                    color="grayWhite">
                    {option.title}
                  </Text>
                </TouchableOpacityBox>
                {index === options.length - 2 ? (
                  <Box
                    height={1}
                    width="100%"
                    backgroundColor="gray4"
                    marginVertical="s12"
                  />
                ) : null}
              </Box>
            ))}
          </AnimatedBox>
        </Box>
      </Modal>
    </>
  );
};
