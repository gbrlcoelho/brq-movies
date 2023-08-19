import React from 'react';

import {AuthScreen, Box, Text} from '@components';
import {AuthScreenProps} from '@routes';

export const ForgotPasswordScreen = ({
  navigation,
}: AuthScreenProps<'ForgotPasswordScreen'>) => {
  const navigateToLoginScreen = () => {
    navigation.goBack();
  };

  return (
    <AuthScreen>
      <Box alignItems="center" paddingTop="s48">
        <Text preset="headingLarge" bold color="grayWhite">
          Recuperação de Senha
        </Text>
        <Text
          marginTop="s16"
          preset="paragraphSmall"
          color="grayWhite"
          textAlign="center">
          {`Esta funcionalidade ainda não está disponível,${'\n'} mas estamos trabalhando nisso. Pedimos desculpas pelo inconveniente.`}
        </Text>
      </Box>

      <Text
        onPress={navigateToLoginScreen}
        preset="paragraphMedium"
        color="grayWhite"
        textAlign="center"
        marginTop="s20">
        Ir para tela de login? Clique aqui
      </Text>
    </AuthScreen>
  );
};
