import React, {
  createContext,
  useCallback,
  useMemo,
  useReducer,
  useRef,
} from 'react';

import {Toast, ToastType} from '@components';

import {initialState, toastReducer} from './toastReducer';
import {ChildrenProps, ToastContextData} from './types';

export const ToastContext = createContext<ToastContextData>(
  {} as ToastContextData,
);

export const ToastProvider: React.FC<ChildrenProps> = ({children}) => {
  const [state, dispatch] = useReducer(toastReducer, initialState);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const openToast = useCallback((type: ToastType, message: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    dispatch({type: 'OPEN_TOAST', payload: {type, message}});

    timeoutRef.current = setTimeout(() => {
      dispatch({type: 'CLOSE_TOAST'});
    }, 3000);
  }, []);

  const contextValue = useMemo(() => ({openToast}), [openToast]);

  return (
    <ToastContext.Provider value={contextValue}>
      <Toast
        message={state.message}
        type={state.type}
        visible={state.visible}
      />
      {children}
    </ToastContext.Provider>
  );
};
