import {
  Animated as RNAnimated,
  TouchableOpacityProps as RNTouchableOpacityProps,
  ViewProps,
} from 'react-native';

import {
  BackgroundColorProps,
  BorderProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpacingProps,
  SpacingShorthandProps,
} from '@shopify/restyle';

import {Theme} from '@theme';

import {Box} from './Box';

export type BoxProps = React.ComponentProps<typeof Box>;

export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme> &
  RNTouchableOpacityProps;

export type AnimatedBoxProps = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme> &
  PositionProps<Theme> &
  ShadowProps<Theme> &
  RNAnimated.AnimatedProps<ViewProps>;
