import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {useAuth} from '@domain';
import {AppStack, AuthStack} from '@routes';

export const Router = () => {
  const {authData} = useAuth();
  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
