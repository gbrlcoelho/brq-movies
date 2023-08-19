import {ToastType} from '@components';

export type ToastAction =
  | {type: 'OPEN_TOAST'; payload: {type: ToastType; message: string}}
  | {type: 'CLOSE_TOAST'};

export interface ChildrenProps {
  children: React.ReactNode;
}

export type ToastContextData = {
  openToast: (type: ToastType, message: string) => void;
};
