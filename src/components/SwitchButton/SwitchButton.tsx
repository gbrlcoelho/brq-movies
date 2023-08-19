import React, {memo, useState} from 'react';
import {Pressable} from 'react-native';

import {Box} from '@components';

import {SwitchOption} from './components/SwitchOption/SwitchOption';
import {SwitchButtonProps} from './SwitchButtonProps';

export const SwitchButton = memo(({options, onChange}: SwitchButtonProps) => {
  const [toggled, setToggled] = useState(true);

  const onToggle = () => {
    setToggled(prev => {
      onChange(!prev ? options[0] : options[1]);
      return !prev;
    });
  };

  return (
    <Pressable onPress={onToggle}>
      <Box
        flexDirection="row"
        width="100%"
        backgroundColor="background"
        height={54}>
        <SwitchOption isActive={toggled} title={options[0]} />
        <SwitchOption isActive={!toggled} title={options[1]} />
      </Box>
    </Pressable>
  );
});
