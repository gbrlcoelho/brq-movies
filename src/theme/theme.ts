import {createTheme} from '@shopify/restyle';

const palette = {
  orange: '#EC8B00',
  neutral: '#16171B',
  greenSuccess: '#62FF71',
  greenSuccessDark: '#00AA4E',
  redError: '#EA3838',
  redErrorDark: '#D40000',

  grayBlack: '#000000',
  gray: '#2E2F33',
  gray1: '#3C3C3B',
  gray2: '#5A5A5A',
  gray3: '#A9A9A9',
  gray4: '#B2B2B2',
  gray5: '#EEEEEE',
  gray6: '#F5F5F5',
  grayWhite: '#FFFFFF',
  grayRgba: 'rgba(0, 0, 0, 0.5)',
};

export const theme = createTheme({
  colors: {
    ...palette,
    primary: palette.orange,
    primaryContrast: palette.grayWhite,

    buttonPrimary: palette.orange,
    buttonPrimaryContrast: palette.grayWhite,

    background: palette.neutral,
    backgroundContrast: palette.gray,

    rgbaBackground: palette.grayRgba,

    success: palette.greenSuccess,
    successDark: palette.greenSuccessDark,
    error: palette.redError,
    errorDark: palette.redErrorDark,
  },
  spacing: {
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s28: 28,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
    s78: 78,
  },

  borderRadii: {
    s4: 4,
    s8: 8,
    s16: 16,
    s40: 40,
  },
  textVariants: {
    defaults: {},
  },

  breakpoints: {
    phone: 0,
    tablet: 1024,
  },
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
