import {ToastProps} from '@components';

import {ToastAction} from './types';

export const initialState: ToastProps = {
  message: '',
  type: 'success',
  visible: false,
};

export const toastReducer = (
  state: ToastProps,
  action: ToastAction,
): ToastProps => {
  switch (action.type) {
    case 'OPEN_TOAST':
      return {
        ...state,
        message: action.payload.message,
        type: action.payload.type,
        visible: true,
      };
    case 'CLOSE_TOAST':
      return {
        ...state,
        visible: false,
      };
    default:
      return state;
  }
};
