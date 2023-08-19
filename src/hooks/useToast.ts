import {useContext} from 'react';

import {ToastContext} from '@contexts';

export const useToast = () => {
  const context = useContext(ToastContext);

  return context;
};
