import {TouchableOpacityBoxProps} from '@components';
import {ThemeColors} from '@theme';

export type ButtonPreset = 'primary' | 'outline';

export interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
}

export const buttonPresets: Record<
  ButtonPreset,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'buttonPrimary',
      },
      content: 'buttonPrimaryContrast',
    },
    disabled: {
      container: {
        backgroundColor: 'gray5',
      },
      content: 'gray4',
    },
  },
  outline: {
    default: {
      container: {
        borderWidth: 1,
        borderColor: 'buttonPrimary',
      },
      content: 'buttonPrimary',
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: 'gray5',
      },
      content: 'gray4',
    },
  },
};
