export type ToastType = 'success' | 'error';

export interface ToastProps {
  type: ToastType;
  message: string;
  visible: boolean;
}
