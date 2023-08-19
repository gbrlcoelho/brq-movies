import React, {useRef} from 'react';
import {Pressable, TextInput as RNTextInput} from 'react-native';

import {Box, Text} from '@components';
import {useAppTheme} from '@hooks';
import {applyMask} from '@utils';

import {TextInputProps} from './TextInputProps';
import {
  $textInputStyle,
  handleTextInputContainerStyle,
} from './TextInputStyles';

export const TextInput = ({
  errorMessage,
  LeftComponent,
  RightComponent,
  boxProps,
  textInputContainerBoxProps,
  style,
  mask = '',
  textPreset = 'paragraphSmall',
  onChangeText,
  ...rnTextInputProps
}: TextInputProps) => {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Box
          {...handleTextInputContainerStyle(errorMessage)}
          {...textInputContainerBoxProps}>
          {LeftComponent ? (
            <Box
              marginHorizontal="s8"
              justifyContent="center"
              alignContent="center">
              {LeftComponent}
            </Box>
          ) : null}
          <RNTextInput
            autoCapitalize="none"
            ref={inputRef}
            placeholderTextColor={colors.grayWhite}
            style={[$textInputStyle, style]}
            {...rnTextInputProps}
            onChangeText={(text: string) => {
              const value = applyMask(text, mask);
              onChangeText?.(value);
            }}
          />
          {RightComponent ? (
            <Box marginRight="s8" justifyContent="center">
              {RightComponent}
            </Box>
          ) : null}
        </Box>
        <Box height={20}>
          {errorMessage ? (
            <Text preset={textPreset} bold color="error">
              {errorMessage}
            </Text>
          ) : (
            <Box height={1} backgroundColor="grayWhite" />
          )}
        </Box>
      </Pressable>
    </Box>
  );
};
