import React from 'react';

import {Path, Rect, Svg} from 'react-native-svg';

import {IconBase} from '@components';

export const CalendarIcon = ({size = 14, color = 'black'}: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <Rect
        x="1.1665"
        y="1.75"
        width="11.6667"
        height="11.0833"
        rx="3"
        stroke={color}
      />
      <Path
        d="M4.0835 0.583252V1.74992"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.9165 0.583252V1.74992"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1.1665 4.66675H12.8332"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3.7915 7.58325H4.37484"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.7085 7.58325H7.29183"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.625 7.58325H10.2083"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M3.7915 9.91675H4.37484"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.7085 9.91675H7.29183"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.625 9.91675H10.2083"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
