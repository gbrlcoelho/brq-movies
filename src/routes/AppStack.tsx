import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppScreen} from '@components';
import {Movie} from '@domain';
import {HomeScreen, MovieDetailsScreen} from '@screens';

export type AppStackParamList = {
  HomeScreen: undefined;
  MovieDetailsScreen: Movie;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        children={props => (
          <AppScreen>
            <HomeScreen {...props} />
          </AppScreen>
        )}
      />
      <Stack.Screen name="MovieDetailsScreen" component={MovieDetailsScreen} />
    </Stack.Navigator>
  );
};
