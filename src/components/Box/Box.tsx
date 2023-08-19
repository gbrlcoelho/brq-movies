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
import Animated from 'react-native-reanimated';

import {Theme} from '@theme';

import {
  AnimatedBoxProps,
  ReanimatedBoxProps,
  TouchableOpacityBoxProps,
} from './BoxProps';

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

export const ReanimatedBox = createRestyleComponent<ReanimatedBoxProps, Theme>(
  [backgroundColor, spacing, spacingShorthand, layout, border, shadow],
  Animated.View,
);
