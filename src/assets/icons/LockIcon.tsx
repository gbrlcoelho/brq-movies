import React from 'react';

import {Path, Rect, Svg} from 'react-native-svg';

import {IconBase} from '@components';

export const LockIcon = ({size = 18, color = 'white'}: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 25" fill="none">
      <Rect
        x="3"
        y="10.3333"
        width="18"
        height="12"
        rx="2"
        stroke={color}
        stroke-width="10"
      />
      <Path
        d="M7 9.5V6.33325C7 5.00717 7.52678 3.7354 8.46447 2.79772C9.40215 1.86004 10.6739 1.33325 12 1.33325C13.3261 1.33325 14.5979 1.86004 15.5355 2.79772C16.4732 3.7354 17 5.00717 17 6.33325V9.5"
        stroke={color}
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
