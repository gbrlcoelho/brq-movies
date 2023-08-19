import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {IconBase} from '@components';

export const ArrowUpIcon = ({size = 24, color = 'white'}: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 5V19M12 5L6 11M12 5L18 11"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
