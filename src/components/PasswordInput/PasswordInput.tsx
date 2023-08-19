import React, {useState} from 'react';

import {Icon, TextInput} from '@components';
import {useAppTheme} from '@hooks';

import {PasswordInputProps} from './PasswordInputProps';

export const PasswordInput = (props: PasswordInputProps) => {
  const {spacing} = useAppTheme();
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  const toggleSecureTextEntry = () => {
    setIsSecureTextEntry(prev => !prev);
  };

  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      style={{marginLeft: spacing.s8}}
      {...props}
      LeftComponent={<Icon name="lock" color="grayWhite" size={24} />}
      RightComponent={
        <Icon
          name={isSecureTextEntry ? 'eyeOff' : 'eyeOn'}
          color="grayWhite"
          onPress={toggleSecureTextEntry}
        />
      }
    />
  );
};
