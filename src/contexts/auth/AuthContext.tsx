import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {UserAuthenticationResponse, userService} from '@domain';
import {useToast} from '@hooks';
import {Storage} from '@services';
import {StorageKeyEnum} from '@utils';

import {AuthContextData, ChildrenProps, SignInParams} from './types';

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC<ChildrenProps> = ({children}) => {
  const [authData, setAuthData] = useState<UserAuthenticationResponse>();
  const [loading, setLoading] = useState(false);
  const {openToast} = useToast();

  const loadAuthDataFromStorage = () => {
    const storageAuthData = Storage.getString(StorageKeyEnum.AUTH_DATA);
    if (storageAuthData) {
      setAuthData(JSON.parse(storageAuthData));
    }
  };

  const signIn = useCallback(
    async ({userName, password}: SignInParams) => {
      try {
        setLoading(true);
        const response = await userService.authenticateUser({
          userName,
          password,
        });
        const {user} = response;
        setAuthData({user});
        Storage.set(StorageKeyEnum.AUTH_DATA, JSON.stringify({user}));
      } catch (error) {
        openToast('error', 'Erro ao realizar login');
      } finally {
        setLoading(false);
      }
    },
    [openToast],
  );

  const signOut = useCallback(() => {
    setAuthData(undefined);
    Storage.delete(StorageKeyEnum.AUTH_DATA);
  }, []);

  const authContextValue = useMemo(
    () => ({
      authData,
      loading,
      signIn,
      signOut,
    }),
    [authData, loading, signIn, signOut],
  );

  useEffect(() => {
    loadAuthDataFromStorage();
  }, []);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
