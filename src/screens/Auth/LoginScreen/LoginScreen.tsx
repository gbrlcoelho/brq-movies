import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  AuthScreen,
  Button,
  FormPasswordInput,
  FormTextInput,
  Icon,
  Text,
} from '@components';
import {useAuth} from '@domain';
import {AuthScreenProps} from '@routes';

import {LoginSchema, loginSchema} from './loginSchema';

export const LoginScreen = ({navigation}: AuthScreenProps<'LoginScreen'>) => {
  const {signIn, loading} = useAuth();
  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userName: '',
      password: '',
    },
    mode: 'onChange',
  });

  const submitForm = ({userName, password}: LoginSchema) => {
    signIn({userName, password});
  };

  const navigateToForgotPasswordScreen = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  return (
    <AuthScreen>
      <FormTextInput
        placeholder="Usuário"
        boxProps={{marginTop: 's40'}}
        LeftComponent={<Icon name="user" color="grayWhite" size={24} />}
        control={control}
        name="userName"
        rules={{
          required: 'Usuário é obrigatório',
        }}
      />
      <FormPasswordInput
        placeholder="Senha"
        boxProps={{marginTop: 's16'}}
        control={control}
        name="password"
        rules={{required: 'Senha é obrigatória'}}
        keyboardType="numeric"
      />
      <Button
        title="Entrar"
        marginTop="s48"
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
        loading={loading}
      />
      <Text
        onPress={navigateToForgotPasswordScreen}
        preset="paragraphMedium"
        color="grayWhite"
        textAlign="center"
        marginTop="s24">
        Esqueci a Senha
      </Text>
    </AuthScreen>
  );
};
