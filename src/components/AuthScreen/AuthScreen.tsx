import React from 'react';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';

import {Logo} from '@images';

import {Box} from '@components';
import {useAppSafeArea, useAppTheme} from '@hooks';
import {FlexValueEnum} from '@utils';

import {AuthScreenProps} from './AuthScreenProps';

export const AuthScreen = ({children}: AuthScreenProps) => {
  const {colors} = useAppTheme();
  const {top, bottom} = useAppSafeArea();
  const behavior = Platform.OS === 'ios' ? 'padding' : undefined;

  return (
    <KeyboardAvoidingView behavior={behavior} style={{flex: FlexValueEnum.ONE}}>
      <Box
        flex={FlexValueEnum.ONE}
        backgroundColor="background"
        style={{
          paddingTop: top,
          paddingBottom: bottom,
        }}>
        <ScrollView
          bounces={false}
          contentContainerStyle={{
            flexGrow: FlexValueEnum.ONE,
            backgroundColor: colors.background,
          }}
          keyboardShouldPersistTaps="handled">
          <Box alignItems="center" paddingTop="s56">
            <Logo />
          </Box>
          <Box paddingHorizontal="s24">{children}</Box>
        </ScrollView>
      </Box>
    </KeyboardAvoidingView>
  );
};
