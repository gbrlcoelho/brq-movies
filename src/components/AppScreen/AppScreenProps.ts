import {HeaderProps} from './components/Header/HeaderProps';

export interface AppScreenProps extends HeaderProps {
  children: React.ReactNode;
  home?: boolean;
}
