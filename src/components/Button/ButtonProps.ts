import {IconName, TouchableOpacityBoxProps} from '@components';

import {TextPresets} from '../Text/TextPresets';

import {ButtonPreset} from './ButtonPresets';

export interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  textPreset?: TextPresets;
  disabled?: boolean;
  icon?: IconName;
}
