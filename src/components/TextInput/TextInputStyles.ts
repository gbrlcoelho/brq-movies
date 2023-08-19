import {TextStyle} from 'react-native';

import {BoxProps} from '@components';
import {theme} from '@theme';

import {$fontFamily, $fontSizes} from '../Text/TextPresets';

export const $textInputStyle: TextStyle = {
  padding: 0,
  flexGrow: 1,
  flexShrink: 1,
  backgroundColor: theme.colors.backgroundContrast,
  color: theme.colors.grayWhite,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};

export const handleTextInputContainerStyle = (errorMessage?: string) => {
  const textInputContainerStyle: BoxProps = {
    backgroundColor: 'backgroundContrast',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: errorMessage ? 'error' : 'backgroundContrast',
    borderRadius: 's4',
    paddingHorizontal: 's8',
    paddingVertical: 's12',
  };

  return textInputContainerStyle;
};
