import {IconName} from '@components';

export type OptionsType = {
  id: number;
  icon: IconName;
  title: string;
  action: () => void;
};

export interface PopupMenuProps {
  options: Array<OptionsType>;
}
