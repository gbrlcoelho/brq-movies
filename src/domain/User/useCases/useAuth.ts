import {useContext} from 'react';

import {AuthContext} from '@contexts';

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
