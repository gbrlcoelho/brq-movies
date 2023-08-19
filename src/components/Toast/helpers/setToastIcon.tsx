import React, {ReactElement} from 'react';

import {Icon, ToastType} from '@components';
import {ThemeColors} from '@theme';

export const setToastIcon = (type: ToastType): [ReactElement, ThemeColors] => {
  let icon: ReactElement;
  let color: ThemeColors;
  switch (type) {
    case 'error':
      icon = <Icon name="xCircle" color="buttonPrimaryContrast" size={28} />;
      color = 'errorDark';
      break;
    case 'success':
    default:
      icon = (
        <Icon name="checkCircle" color="buttonPrimaryContrast" size={28} />
      );
      color = 'successDark';
      break;
  }

  return [icon, color];
};
