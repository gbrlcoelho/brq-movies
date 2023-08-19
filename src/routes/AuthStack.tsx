import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ForgotPasswordScreen, LoginScreen} from '@screens';

export type AuthStackParamList = {
  LoginScreen: undefined;
  ForgotPasswordScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
};
