import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {IconBase} from '@components';

export const ChevronLeftIcon = ({size = 14, color = 'black'}: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <Path
        d="M12 5.25H2.8725L7.065 1.0575L6 0L0 6L6 12L7.0575 10.9425L2.8725 6.75H12V5.25Z"
        fill={color}
      />
    </Svg>
  );
};
