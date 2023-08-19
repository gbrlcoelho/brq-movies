import React from 'react';

import {Path, Rect, Svg} from 'react-native-svg';

import {IconBase} from '@components';

export const LogoutIcon = ({size = 20, color = 'white'}: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13 3C13 3.55228 12.5523 4 12 4L11 4C6.58172 4 3 7.58172 3 12C3 16.4183 6.58172 20 11 20L12 20C12.5523 20 13 20.4477 13 21C13 21.5523 12.5523 22 12 22L11 22C5.47715 22 1 17.5228 1 12C1 6.47715 5.47715 2 11 2L12 2C12.5523 2 13 2.44772 13 3Z"
        fill="white"
      />
      <Rect x="7.58594" y="10.9995" width="13" height="2" rx="1" fill={color} />
      <Rect
        x="16.0498"
        y="7.04932"
        width="7.00067"
        height="2"
        rx="1"
        transform="rotate(45 16.0498 7.04932)"
        fill={color}
      />
      <Rect
        x="19.585"
        y="10.5845"
        width="2.00121"
        height="7.0015"
        rx="1.0006"
        transform="rotate(45 19.585 10.5845)"
        fill={color}
      />
    </Svg>
  );
};
