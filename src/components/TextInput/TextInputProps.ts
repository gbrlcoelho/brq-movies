import {TextInputProps as RNTextInputProps} from 'react-native';

import {BoxProps, TextPresets} from '@components';

export interface TextInputProps extends RNTextInputProps {
  errorMessage?: string;
  LeftComponent?: React.ReactElement;
  RightComponent?: React.ReactElement;
  boxProps?: BoxProps;
  textInputContainerBoxProps?: BoxProps;
  mask?: string;
  textPreset?: TextPresets;
}
