import {TextStyle} from 'react-native';

export type TextPresets =
  | 'headingXXLarge'
  | 'headingExtraLarge'
  | 'headingLarge'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption';

export const getFontFamily = (
  bold?: boolean,
  italic?: boolean,
  semiBold?: boolean,
) => {
  switch (true) {
    case bold && italic:
      return $fontFamily.boldItalic;
    case bold:
      return $fontFamily.bold;
    case italic:
      return $fontFamily.italic;
    case semiBold && italic:
      return $fontFamily.mediumItalic;
    case semiBold:
      return $fontFamily.medium;
    default:
      return $fontFamily.regular;
  }
};

export const $fontSizes: Record<TextPresets, TextStyle> = {
  headingXXLarge: {fontSize: 28, lineHeight: 36},
  headingExtraLarge: {fontSize: 24, lineHeight: 27},
  headingLarge: {fontSize: 20, lineHeight: 23.44},

  paragraphLarge: {fontSize: 18, lineHeight: 21.6},
  paragraphMedium: {fontSize: 16, lineHeight: 24},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},

  paragraphCaption: {fontSize: 12, lineHeight: 18},
};

export const $fontFamily = {
  black: 'Roboto-Black',
  blackItalic: 'Roboto-BlackItalic',
  bold: 'Roboto-Bold',
  boldItalic: 'Roboto-BoldItalic',
  italic: 'Roboto-Italic',
  light: 'Roboto-Light',
  lightItalic: 'Roboto-LightItalic',
  medium: 'Roboto-Medium',
  mediumItalic: 'Roboto-MediumItalic',
  regular: 'Roboto-Regular',
};
