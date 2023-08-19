import React from 'react';

import {ActivityIndicator, Icon, Text, TouchableOpacityBox} from '@components';

import {buttonPresets} from './ButtonPresets';
import {ButtonProps} from './ButtonProps';

export const Button = ({
  title,
  loading,
  preset = 'primary',
  textPreset = 'paragraphLarge',
  disabled,
  icon,
  ...touchableOpacityBoxProps
}: ButtonProps) => {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];

  return (
    <TouchableOpacityBox
      flexDirection="row"
      disabled={disabled || loading}
      activeOpacity={0.6}
      height={40}
      alignItems="center"
      justifyContent="center"
      borderRadius="s40"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <>
          {icon ? <Icon name={icon} color={buttonPreset.content} /> : null}
          <Text
            preset={textPreset}
            semiBold
            color={buttonPreset.content}
            marginLeft={icon ? 's16' : undefined}>
            {title}
          </Text>
        </>
      )}
    </TouchableOpacityBox>
  );
};
