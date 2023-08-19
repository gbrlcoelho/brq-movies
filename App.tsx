import React from 'react';
import {StatusBar} from 'react-native';

import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {AuthProvider, ToastProvider} from '@contexts';
import {Router} from '@routes';
import {theme} from '@theme';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.background}
      />
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            <ToastProvider>
              <AuthProvider>
                <Router />
              </AuthProvider>
            </ToastProvider>
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </>
  );
};
