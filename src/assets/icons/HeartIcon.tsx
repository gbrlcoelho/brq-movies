import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {IconBase} from '@components';

export const HeartIcon = ({size = 14, color = 'black'}: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <Path
        d="M1.61725 2.20051C0.238909 3.57885 0.238911 5.81359 1.61725 7.19193L6.96341 12.5381L7.00016 12.5013L7.03695 12.5381L12.3831 7.19198C13.7615 5.81363 13.7615 3.5789 12.3831 2.20055C11.0048 0.822207 8.77002 0.822208 7.39168 2.20055L7.0002 2.59203L6.60868 2.20051C5.23034 0.822162 2.9956 0.822162 1.61725 2.20051Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
