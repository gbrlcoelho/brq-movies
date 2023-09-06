import {Animated as RNAnimated, TouchableOpacity} from 'react-native';

import {
  backgroundColor,
  border,
  createBox,
  createRestyleComponent,
  layout,
  shadow,
  spacing,
  spacingShorthand,
} from '@shopify/restyle';

import {Theme} from '@theme';

import {AnimatedBoxProps, TouchableOpacityBoxProps} from './BoxProps';

export const Box = createBox<Theme>();

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  TouchableOpacity,
);

export const AnimatedBox = createRestyleComponent<AnimatedBoxProps, Theme>(
  [backgroundColor, spacing, spacingShorthand, layout, border, shadow],
  RNAnimated.View,
);
